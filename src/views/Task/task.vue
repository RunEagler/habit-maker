<template>
  <q-page>
    <div class="q-pa-md">
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

@Component({
  name: 'Task',
  components: { TaskView, TaskEntry },
})
export default class Task extends Vue {
  mounted() {}
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
