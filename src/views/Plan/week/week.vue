<template>
  <q-page>
    <div class="q-pa-md">
      <q-card v-for="i in weekNum" :key="i">
        <q-card-section>どうする</q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WEEK_NUM } from '@/constants/const';

@Component({
  name: 'week',
  components: {},
})
export default class Week extends Vue {
  weekNum: number = WEEK_NUM;
  mounted() {}
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
