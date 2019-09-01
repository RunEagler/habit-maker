<template>
  <q-page>
    <div>
      <vue-c3 :handler="handler"></vue-c3>
      <div class="row">
        <div class="col-3" v-for="i in 7">
          <q-card class="height-370">
            <q-item class="bg-grey-9 text-white">
              <q-item-section>今日の進捗</q-item-section>
            </q-item>
            <q-card-section>
              <q-list bordered>
                <q-item></q-item>
                <q-item>task A</q-item>
                <q-item>task A</q-item>
              </q-list>
            </q-card-section>
            <q-card-section> </q-card-section>
            <q-card-section>
              <div class="row justify-end">
                <div class="col-4">
                  <q-chip square>
                    <q-avatar color="indigo-8" class="text-white" icon="timer"></q-avatar>
                    250
                  </q-chip>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueC3 from 'vue-c3';
import 'c3/c3.min.css';

@Component({
  name: 'progress-week',
  components: {
    VueC3,
  },
})
export default class ProgressWeek extends Vue {
  handler: any = new Vue();
  mounted() {
    const options = {
      // c3.chartのデータ例
      data: {
        x: 'x',
        columns: [
          ['x', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜', '日曜'],
          ['data1', 30, 200, 100, 400, 150, 250, 0],
          ['data2', 50, 0, 10, 40, 15, 25, 200],
        ],
        type: 'bar',
        groups: [['data1', 'data2']],
        // onclick: function(d: any, i: number) {
        //   console.log('onclick', d, i);
        // },
        // onmouseover: function(d, i) {
        //   console.log('onmouseover', d, i);
        // },
        // onmouseout: function(d, i) {
        //   console.log('onmouseout', d, i);
        // },
      },
      axis: {
        x: {
          type: 'category',
        },
      },
    };
    this.handler.$emit('init', options);
  }
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
