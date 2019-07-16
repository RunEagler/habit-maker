<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-indigo-10">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />

        <q-toolbar-title>
          HABIT_MAKER
        </q-toolbar-title>

        <!--<div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-indigo-1">
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

        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
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
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'GoalView',
  components: {},
})
export default class Goal extends Vue {
  leftDrawerOpen: boolean = this.$q.platform.is.desktop;
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
}
</script>
