<template>
  <div>
    <div class="ro q-pa-sm">
      <div class="col-6">
        <q-select outlined v-model="goal.issueID" label="課題" :options="[1, 3, 5]"> </q-select>
      </div>
    </div>
    <div class="row q-pa-sm">
      <div class="col-4">
        <q-input outlined v-model="goal.content" label="目的" />
      </div>

      <div class="col-2">
        <q-input outlined v-model="goal.deadline" mask="date" :rules="['date']" label="期日">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="goal.deadline" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-2">
        <q-select outlined v-model="goal.priority" :options="options" label="優先度" />
      </div>
      <div class="col">
        <q-input type="textarea" label="メモ" outlined></q-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Goal } from '@/models/goal';

@Component({
  name: 'GoalEntry',
  components: {},
})
export default class GoalEntry extends Vue {
  goal: Goal = new Goal();
  options: string[] = ['area', 'arere', 'are'];
  mounted() {}
}
</script>

<style scoped lang="scss"></style>
