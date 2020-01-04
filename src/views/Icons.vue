<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="font-size: 2em">
        <q-icon :name="icon" v-for="icon in icons" />
      </div>

      <div class="q-gutter-sm">
        <q-btn color="primary" label="primary" size="20px" />
        <q-btn color="secondary" label="secondary" size="20px" />
        <q-btn color="positive" label="positive" size="20px" />
        <q-btn color="warning" label="warning" size="20px" />
        <q-btn color="negative" label="negative" size="20px" />
        <q-btn color="accent" label="accent" size="20px" />
        <q-btn color="info" label="info" size="20px" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Icons extends Vue {
  icons: string[] = [];

  mounted() {
    this.icons = [
      'check_circle',
      'fiber_manual_record',
      'description',
      'find_in_page',
      'home',
      'launch',
      'list',
      'perm_media',
      'schedule',
      'search',
      'room',
      'stars',
      'zoom_in',
      'zoom_out',
      'movie',
      'note',
      'import_contacts',
      'location_on',
      'create',
      'redo',
      'undo',
      'attach_file',
      'insert_photo',
      'insert_chart',
      'watch',
      'portrait',
      'photo',
      'timer',
      'star',
      'star_border',
      'radio_button_checked',
      'radio_button_unchecked',
      'people',
      'person',
      'fitness_center',
      'directions_run',
      'looks_one',
      'looks_two',
      'looks_3',
      'looks_4',
      'looks_5',
      'looks_6',
      'work',
      'code',
      'priority_high',
      'theaters',
      'hearing',
      'brush',
      'close',
      'cancel',
      'note',
      'feedback',
      'description',
      'note_add',
      'record_voice_over',
      'music_note',
      'today',
      'monetization_on',
      'keyboard_voice',
      'sentiment_dissatisfied',
      'sentiment_satisfied',
      'sentiment_very_dissatisfied',
      'sentiment_very_satisfied',
    ];
  }
}
</script>

<style scoped lang="scss">
.cell > div {
  background: lightyellow;
  border: dashed 2px;
}
</style>
