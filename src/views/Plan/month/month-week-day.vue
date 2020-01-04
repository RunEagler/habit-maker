<template>
  <div class="row">
    <div class="col" v-for="i in weekNum" :key="i">
      <div class="text-center text-weight-bold q-pa-sm bg-blue-grey-9">
        {{ days[i - 1] }}
      </div>
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
