<template>
  <div class="row q-pa-sm">
    {{ goalsTree }}
    <q-splitter v-model="splitterModel" style="height: 400px">
      <template v-slot:before>
        <div class="q-pa-md">
          <q-tree :nodes="goalsTree" node-key="label" selected-color="primary" :selected.sync="selected" default-expand-all @update="select" />
        </div>
      </template>
      <template v-slot:after>
        <q-tab-panels v-model="selected" animated transition-prev="jump-up" transition-next="jump-up">
          <q-tab-panel :name="goal.content" v-for="goal in goals">
            <div class="text-h4 q-mb-md">{{ goal.content }}</div>
            <p></p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { goalModule } from '@/store/modules/goal';
import { Goal } from '@/models/goal';
import { Tree } from '@/models/quaser';

@Component({
  name: 'GoalView',
  components: {},
})
export default class GoalView extends Vue {
  splitterModel: number = 50;
  selected: string = 'Food';
  simple: any[] = [
    {
      label: 'Relax Hotel',
      children: [
        {
          label: 'Food',
          icon: 'restaurant_menu',
        },
        {
          label: 'Room service',
          icon: 'room_service',
        },
        {
          label: 'Room view',
          icon: 'photo',
        },
      ],
    },
  ];

  mounted() {
    goalModule.fetchGoals();
  }

  select(item: any) {}

  get goals(): Goal[] {
    return goalModule.goals;
  }

  get goalsTree(): Tree[] {
    return goalModule.goalsTree;
  }
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
