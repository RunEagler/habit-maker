<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row q-pa-sm">
        <div class="col-12">
          <q-card>
            <q-item class="bg-grey-9 text-white">
              <q-item-section>本日の進捗</q-item-section>
            </q-item>
            <q-card-section>
              <div v-for="(task, i) in todayTasks">
                <today-task :task="task"> </today-task>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Task from '@/models/task';
import { taskModule } from '@/store/modules/task';
import TodayTask from '@/views/Home/today-task.vue';

@Component({
  name: 'home',
  components: { TodayTask },
})
export default class Home extends Vue {
  mounted() {
    taskModule.fetchTask();
  }

  get todayTasks(): Task[] {
    return taskModule.tasks;
  }
}
</script>
