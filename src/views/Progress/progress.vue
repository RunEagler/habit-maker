<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row height-200 q-pa-sm">
        <div class="col">are</div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'progress',
  components: {},
})
export default class Progress extends Vue {
  mounted() {}
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
