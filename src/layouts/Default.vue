<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-blue-grey-10">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />
        <q-toolbar-title>
          HABIT_MAKER
        </q-toolbar-title>
        <q-toggle v-model="mode" label="モード" />
        <!--<div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-blue-grey-10"
      class="text-white"
      :mini="sideMini"
      @mouseover="sideMini = false"
      @mouseout="sideMini = true"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item :to="menu.path" exact v-for="menu in sideMenus">
          <q-item-section avatar>
            <q-icon :name="menu.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ menu.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'GoalView',
  components: {},
})
export default class Goal extends Vue {
  leftDrawerOpen: boolean = this.$q.platform.is.desktop;
  mode: boolean = true;
  sideMini: boolean = false;
  sideMenus: any = [
    {
      path: '/',
      label: 'Home',
      icon: 'home',
    },
    {
      path: '/issue',
      label: 'Issue',
      icon: 'error_outline',
    },
    {
      path: '/goal',
      label: 'Goal',
      icon: 'stars',
    },
    {
      path: '/task',
      label: 'Task',
      icon: 'view_list',
    },
    {
      path: '/plan',
      label: 'Plan',
      icon: 'schedule',
    },
    {
      path: '/progress',
      label: 'Progress',
      icon: 'timeline',
    },
    {
      path: '/icons',
      label: 'Icons',
      icon: 'mood',
    },
  ];

  @Watch('mode')
  watchMode(value: boolean) {
    this.$q.dark.set(value);
  }

  created() {
    this.$q.dark.set(this.mode);
  }
}
</script>
