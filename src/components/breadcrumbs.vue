<template>
  <div class="q-pa-sm text-subtitle1">
    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>
      <q-breadcrumbs-el :label="b.label" :icon="b.icon" v-for="(i, b) in breadcrumbs" :key="i"></q-breadcrumbs-el>
    </q-breadcrumbs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Breadcrumb } from '@/models/quasar/breadcrumb';

@Component({
  name: 'breadcrumbs',
  components: {},
})
export default class Breadcrumbs extends Vue {
  @Prop() breadcrumbs: Breadcrumb[];
  mounted() {}
}
</script>

<style scoped lang="scss"></style>
