<template>
  <q-page>
    <div class="q-pa-md">
      <vue-c3 :handler="handler"></vue-c3>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueC3 from 'vue-c3';
import 'c3/c3.min.css';

@Component({
  name: 'progress',
  components: {
    VueC3,
  },
})
export default class Progress extends Vue {
  handler: any = new Vue();
  mounted() {
    let options = {
      //c3.chartのデータ例
      data: {
        columns: [['data1', 30, 200, 100, 400, 150, 250], ['data2', 50, 20, 10, 40, 15, 25]],
        type: 'pie',
        onclick: function(d, i) {
          console.log('onclick', d, i);
        },
        onmouseover: function(d, i) {
          console.log('onmouseover', d, i);
        },
        onmouseout: function(d, i) {
          console.log('onmouseout', d, i);
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
