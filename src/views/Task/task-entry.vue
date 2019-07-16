<template>
  <q-card class="height-230">
    <div class="row q-pa-sm">
      <div class="col-4">
        <q-select outlined label="目的" v-model="newTask.goalID" :options="goals"></q-select>
      </div>
      <div class="col-4">
        <q-select outlined label="分類" v-model="newTask.subject"></q-select>
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
import { Goal } from '@/models/goal';

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

  goals(): Goal[] {
    return goalModule.goals;
  }

  entryTask() {
    const newTask: Task = this.newTask.deserialize({
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
