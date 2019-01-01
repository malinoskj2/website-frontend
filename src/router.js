import Vue from 'vue';
import Router from 'vue-router';

// Views
const BaseView = () => import('@/views/BaseView.vue');
const NavLess = () => import('@/views/NavLess.vue');

const ProjectsPage = () => import('@/views/ProjectsPage.vue');

// Sub-Views
const UnderConstruction = () => import('@/components/UnderConstruction.vue');
const ProjectTiles = () => import('@/components/ProjectTiles.vue');
const JNav = () => import('@/components/JNav.vue');
const InteractiveHeader = () => import('@/components/InteractiveHeader.vue');


Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      component: BaseView,
      children: [
        {
          path: '',
          name: 'home',
          components: {
            nav: JNav,
            'content-a': UnderConstruction,
          },
        },
      ],
    },
    {
      path: '/projects',
      component: BaseView,
      children: [
        {
          path: '',
          name: 'projects',
          components: {
            nav: JNav,
            'content-a': ProjectsPage,
          },
        },
      ],
    },
    {
      path: '/about',
      component: NavLess,
      children: [
        {
          path: '',
          name: 'about',
          components: {
            'content-a': InteractiveHeader,
          },
        },
      ],
    },
  ],
});
