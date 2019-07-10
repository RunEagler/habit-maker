<template>
  <div class="row q-pa-sm">
    <div class="col-4">
      <q-input outlined v-model="text" label="目的" />
    </div>

    <div class="col-2">
      <q-input outlined v-model="deadline" mask="date" :rules="['date']" label="期日">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="deadline" @input="() => $refs.qDateProxy.hide()" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <div class="col-2">
      <q-select outlined v-model="priority" :options="options" label="優先度" />
    </div>
    <div class="col">
      <q-input type="textarea" label="メモ" outlined></q-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'GoalEntry',
  components: {},
})
export default class GoalEntry extends Vue {
  mounted() {}
}
</script>

<style scoped lang="scss"></style>
