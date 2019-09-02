<template>
  <div>
    {{tasksByGoalID}}
    <draggable v-for="tasks,i in tasksByGoalID" :options="{ group: 'tasks' }" style="min-height: 10px" :key="i">
      <template>
        <q-list :key="i" bordered separator>
          <q-item-label header>{{ task.goalID }}</q-item-label>
          <q-item v-for="(task, i) in tasks.tasks" :key="i">
            <q-item-section v-html="task.todo"></q-item-section>
            <q-item-section avatar>
              <q-chip outline class="font-weight-bold black--text" icon="timer"> {{ task.estimateTime }}min </q-chip>
            </q-item-section>
          </q-item>
        </q-list>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task, TaskByGoalID } from '@/models/task';
import { taskModule } from '@/store/modules/task';

@Component({
  name: 'task-draggable',
  components: {},
})
export default class TaskDraggable extends Vue {
  get tasksByGoalID(): TaskByGoalID[] {
    return taskModule.tasksByGoalID;
  }
  mounted() {}
}
</script>

<style scoped lang="scss">
</style>
