<template>
  <q-page>
    <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>
    <div>
      <task-entry></task-entry>
    </div>
    <div class="q-pa-md">
      <task-view></task-view>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TaskEntry from '@/views/Task/task-entry.vue';
import TaskView from '@/views/Task/task-view.vue';
import { Breadcrumb } from '@/models/quasar/breadcrumb';
import Breadcrumbs from '@/components/breadcrumbs.vue';

@Component({
  name: 'Task',
  components: { Breadcrumbs, TaskView, TaskEntry },
})
export default class Task extends Vue {
  breadcrumbs: Breadcrumb[] = [];
  mounted() {
    this.breadcrumbs = [
      {
        icon: 'view_list',
        label: 'task',
      },
    ];
  }
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
