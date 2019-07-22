<template>
  <div class="row">
    <div class="col" v-for="i in weekNum">
      <q-card>
        <q-card-section class="text-center text-white bg-indigo-7">
          {{ days[i - 1] }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WEEK_NUM } from '@/constants/const';

@Component({
  name: 'month-week-day',
  components: {},
})
export default class MonthWeekDay extends Vue {
  weekNum: number = WEEK_NUM;

  days: string[] = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  mounted() {}
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
