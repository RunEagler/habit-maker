<template>
  <q-card class="height-230">
    <div class="row q-pa-sm">
      <div class="col-4">
        <q-select
          outlined
          label="目的"
          v-model="newTask.goalID"
          :options="goalOptions"
          map-options
          emit-value
        ></q-select>
      </div>
      <div class="col-4">
        <q-select outlined label="分類" v-model="newTask.subject" :options="[1, 2, 3, 4]"></q-select>
      </div>
      <div class="col-4">
        <q-select outlined label="見積もり時間" v-model="newTask.estimateTime" :options="times"> </q-select>
      </div>
    </div>
    <div class="row q-pa-sm">
      <div class="col-6">
        <q-input outlined label="TODO"></q-input>
      </div>
      <div class="col-2">
        <q-toggle v-model="newTask.isAlways" label="毎日" />
      </div>
    </div>
    <div class="row q-pa-sm">
      <div class="col-6">
        <q-btn color="secondary full-width" label="登録" ripple @click="entryTask"></q-btn>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from '@/models/task';
import { taskModule } from '@/store/modules/task';
import { goalModule } from '@/store/modules/goal';
import { Select } from '@/models/quasar/select';

@Component({
  name: 'task-entry',
  components: {},
})
export default class TaskEntry extends Vue {
  newTask: Task = new Task();
  public times: any[] = [15, 30, 45, 60, 75, 90, 105, 120];

  mounted() {
    goalModule.fetchGoals();
  }

  get goalOptions(): Select<number>[] {
    return goalModule.goalOptions;
  }

  entryTask() {
    console.log(this.newTask.goalID);
    const newTask: Task = new Task().deserialize({
      goalID: this.newTask.goalID,
      subject: this.newTask.subject,
      estimateTime: this.newTask.estimateTime,
      todo: this.newTask.todo,
    });
    taskModule.entryTask(newTask);
  }
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
