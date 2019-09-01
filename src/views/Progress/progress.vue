<template>
  <q-page>
    <div>
      <q-tabs v-model="tab" class="bg-green-5 text-white shadow-2">
        <q-tab name="month" label="month" />
        <q-tab name="week" label="week" />
        <q-tab name="date" label="date" />
      </q-tabs>
      <div class="q-pa-md">
        <q-tab-panels v-model="tab">
          <q-tab-panel name="month"> </q-tab-panel>
          <q-tab-panel name="week">
            <progress-week></progress-week>
          </q-tab-panel>
          <q-tab-panel name="date">
            date comming soon..
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProgressWeek from '@/views/Progress/progress-week.vue';

@Component({
  name: 'progress',
  components: {
    ProgressWeek,
  },
})
export default class Progress extends Vue {
  tab: string = 'week';
  mounted() {}
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
