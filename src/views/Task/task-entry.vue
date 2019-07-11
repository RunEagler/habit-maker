<template>
  <q-card>
    <div class="row height-200 q-pa-sm">
      <div class="col-4">
        <q-select outlined label="目的" v-model="newTask.goalID"></q-select>
      </div>
      <div class="col-4">
        <q-select outlined label="分類" v-model="newTask.subject"></q-select>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from '@/models/task';

@Component({
  name: 'task-entry',
  components: {},
})
export default class TaskEntry extends Vue {
  newTask: Task = new Task();
  mounted() {}
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
