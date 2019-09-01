<template>
  <q-page>
    <div class="q-pa-md">
      <goal-entry></goal-entry>
    </div>
    <div class="q-pa-md">
      <goal-view></goal-view>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import GoalEntry from '@/views/Goal/goal-entry.vue';
import GoalView from '@/views/Goal/goal-view.vue';

@Component({
  components: { GoalView, GoalEntry },
})
export default class Goal extends Vue {
  goal: string = '';
  deadline: string = '';
  priority: string = '';
  options: string[] = ['A', 'B', 'C'];
}

</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
