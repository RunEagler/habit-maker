<template>
  <div class="row">
    <div class="col-1" v-for="i in 12" :key="i">
      <q-btn :class="[btnColor(i), 'full-width']" @click="selectMonth(i)"> {{ i }}月 </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'MonthHeader',
})
export default class MonthHeader extends Vue {
  @Prop() value: number;
  currentMonth: number = 0;

  mounted() {
    this.currentMonth = this.value;
  }

  btnColor(i: number): string {
    return i === this.currentMonth ? 'bg-secondary' : 'bg-grey-7';
  }

  selectMonth(selectedMonth: number): void {
    this.currentMonth = selectedMonth;
    this.input(this.currentMonth);
  }

  @Emit()
  input(value: number): number {
    return value;
  }
}
</script>

<style scoped></style>
