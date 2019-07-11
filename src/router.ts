import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Home from './views/Home/home.vue';
import Icons from '@/views/Icons.vue';
import Goal from '@/views/Goal/goal.vue';
import Issue from '@/views/Issue/issue.vue';
import Task from '@/views/Task/task.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/icons',
          name: 'icon',
          component: Icons,
        },
        {
          path: '/goal',
          name: 'goal',
          component: Goal,
        },
        {
          path: '/task',
          name: 'task',
          component: Task,
        },
        {
          path: '/issue',
          name: 'issue',
          component: Issue,
        },
      ],
    },
  ],
});
