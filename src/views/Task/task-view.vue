<template>
  <div>
    <q-list bordered padding v-for="taskByGoalID in tasksByGoalID">
      <q-item-label header>{{ taskByGoalID.goalID }}</q-item-label>
      <q-item clickable v-ripple v-for="task in taskByGoalID.tasks" active-class="bg-black text-green-1">
        <q-item-section avatar top> </q-item-section>
        <q-item-section>
          <q-item-label caption>{{ task.content }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-chip>
            <q-avatar icon="timer" color="indigo-8" text-color="white"></q-avatar>
            {{ task.minute }}&nbsp;minute
          </q-chip>
        </q-item-section>
        <q-item-section side>
          <q-icon name="delete" color="bg-grey-8" @click="deleteIssue(task.id)" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task, TaskByGoalID } from '@/models/task';
import { taskModule } from '@/store/modules/task';

@Component({
  name: 'TaskView',
  components: {},
})
export default class TaskView extends Vue {
  mounted() {
    taskModule.fetchTask();
  }

  get tasks(): Task[] {
    return taskModule.tasks;
  }

  get tasksByGoalID(): TaskByGoalID[] {
    return taskModule.tasksByGoalID;
  }
}
</script>

<style scoped lang="scss"></style>
