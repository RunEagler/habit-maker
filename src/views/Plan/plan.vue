<template>
  <div>
    <div class="q-pa-md">
      <month-header v-if="targetMonth" v-model="targetMonth"></month-header>
      <month-week-day></month-week-day>
      <div v-if="datesOfMonth && datesOfMonth.length > 0" class="row wrap" v-for="weekIndex in targetDateUtil.weekCount">
        <div class="col" v-for="offset in weekNum">
          <calender-date :dateUtil="targetDate(weekIndex, offset)"></calender-date>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { WEEK_NUM } from '@/constants/const';
import { DateUtil } from '@/utils/dateNum';
import MonthHeader from './month/month-header.vue';
import CalenderDate from './month/month-calender-date.vue';
import { store } from '@/store/index';
import MonthWeekDay from '@/views/Plan/month/month-week-day.vue';

@Component({
  name: 'Month',
  components: {
    MonthWeekDay,
    MonthHeader,
    CalenderDate,
  },
})
export default class Month extends Vue {
  weekNum: number = WEEK_NUM;
  targetMonth: number = 0;
  targetDateUtil: DateUtil = new DateUtil(new Date());
  datesOfMonth: DateUtil[] = [];

  @Watch('targetMonth')
  changeTargetMonth(value: number) {
    this.updateMonth();
  }

  mounted() {
    this.targetMonth = this.now.month;
    this.updateMonth();
  }

  updateMonth() {
    this.targetDateUtil = new DateUtil(new Date(this.now.year, this.targetMonth - 1, 1));
    this.datesOfMonth = [...Array(this.now.lastDate).keys()].map((dateNum: number) => {
      dateNum += 1;
      return new DateUtil(new Date(this.now.year, this.targetMonth - 1, dateNum));
    });
  }

  get now() {
    return store.state.now;
  }

  targetDate(weekIndex: number, offset: number): DateUtil {
    const num = (weekIndex - 1) * WEEK_NUM + offset - this.targetDateUtil.firstDay;

    if (num < 1) {
      return new DateUtil(new Date(this.targetDateUtil.year, this.targetDateUtil.month - 2, this.targetDateUtil.lastDateOfPrevMonth + num));
    } else if (num > this.targetDateUtil.lastDate) {
      return new DateUtil(new Date(this.targetDateUtil.year, this.targetDateUtil.month, num - this.targetDateUtil.lastDate));
    }
    return this.datesOfMonth[num - 1];
  }
}
</script>

<style scoped></style>
