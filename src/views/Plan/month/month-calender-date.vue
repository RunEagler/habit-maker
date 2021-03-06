<template>
  <div :class="selectColor" style="border:1px solid #90a4ae">
    <div
      class="column q-pa-sm"
      :class="{ 'text-blue': dateUtil.isSaturDay, 'text-red': dateUtil.isSunday }"
      style="height:150px;"
    >
      <div class="row col">
        <div class="col-2">{{ dateUtil.dateNum }}</div>

        <q-space />

        <div class="col-3">
          <q-badge color="positive" class="text-bold">12h</q-badge>
        </div>
      </div>
      <div class="row col-8"></div>

      <div class="col">
        <q-btn v-if="isPostDate > 0" dense color="primary" icon="done" class="q-ml-md" size="10px">
          <q-badge color="red" floating>{{ doneTasks.length }}</q-badge>
          <q-tooltip
            content-class="bg-light-blue-7"
            anchor="bottom middle"
            self="top middle"
            content-style="font-size: 16px"
            :offset="[10, 10]"
          >
            <div v-for="(task, i) in doneTasks" :key="i"><q-icon name="assignment"></q-icon>{{ task.todo }}</div>
          </q-tooltip>
        </q-btn>
        <q-btn v-else icon="done" dense color="grey-6" class="q-ml-md" size="10px"> </q-btn>
        <q-btn
          v-if="assignedTasks.length > 0"
          dense
          color="green-6"
          icon="list"
          class="q-ml-md"
          size="10px"
          @click="adjustTask"
        >
          <q-badge color="red" floating>{{ assignedTasks.length }}</q-badge>
          <q-tooltip
            content-class="bg-light-blue-7"
            anchor="bottom middle"
            self="top middle"
            content-style="font-size: 16px"
            :offset="[10, 10]"
          >
            <div v-for="(task, i) in assignedTasks" :key="i"><q-icon name="assignment"></q-icon>{{ task.todo }}</div>
          </q-tooltip>
          <q-popup-edit v-model="label">
            <q-select v-model="label" :options="todos" label="タスク一覧"></q-select>
          </q-popup-edit>
        </q-btn>
        <q-btn v-else icon="list" dense color="grey-6" class="q-ml-md" size="10px"> </q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from '@/models/task';
import { taskModule } from '@/store/modules/task';
import { DateUtil } from '@/utils/dateNum';
import { store } from '@/store/index';
import { DateType } from '@/models/enum';

@Component({
  name: 'MonthCalenderDate',
})
export default class MonthCalenderDate extends Vue {
  public selectedIcons: any[] = [
    { name: 'import_contacts', label: 'reading' },
    { name: 'work', label: 'work' },
    { name: 'directions_run', label: 'running' },
    { name: 'create', label: 'output' },
    { name: 'fitness_center', label: 'training' },
    { name: 'priority_high', label: 'idea' },
    { name: 'hearing', label: 'auditing' },
    { name: 'description', label: 'paper' },
    { name: 'music_note', label: 'music' },
  ];
  label: string = 'click';

  @Prop() dateUtil: DateUtil;

  mounted() {
    taskModule.fetchTask();
  }

  get now(): DateUtil {
    return store.state.now;
  }

  get tasks(): Task[] {
    return taskModule.tasks;
  }

  get assignedTasks(): Task[] {
    return this.tasks.filter((task: Task) => {
      if (task.executionDate.formatDate === this.dateUtil.formatDate) {
        return true;
      }
    });
  }

  get todos(): string[] {
    return taskModule.todos;
  }

  get doneTasks(): Task[] {
    return this.assignedTasks.filter((task: Task) => task.isDone);
  }

  get dateType(): DateType {
    if (
      this.dateUtil.month < this.now.month ||
      (this.dateUtil.month === this.now.month && this.dateUtil.dateNum < this.now.dateNum)
    ) {
      return DateType.PostDate;
    } else if (this.dateUtil.month === this.now.month && this.dateUtil.dateNum === this.now.dateNum) {
      return DateType.CurrentDate;
    } else {
      return DateType.FutureDate;
    }
  }

  get isPostDate(): boolean {
    return this.dateType === DateType.PostDate;
  }

  get isCurrentDate(): boolean {
    return this.dateType === DateType.CurrentDate;
  }

  get isFutureDate(): boolean {
    return this.dateType === DateType.FutureDate;
  }

  public get selectColor(): string {
    switch (this.dateType) {
      case DateType.CurrentDate:
        return 'bg-amber-3';
      case DateType.PostDate:
        return 'bg-blue-grey-5';
      case DateType.FutureDate:
        return 'bg-blue-grey-9';
    }
  }
}
</script>

<style scoped></style>
