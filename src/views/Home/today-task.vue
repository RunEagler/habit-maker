<template>
  <div class="q-pa-md">
    <div class="row height-200 q-pa-sm">
      <div class="col">{{ task }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from '@/models/task';

@Component({
  name: 'today-task',
  components: {},
})
export default class TodayTask extends Vue {
  @Prop() task: Task;
  mounted() {}
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
