/* eslint-disable object-property-newline */
import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

// Views
const BaseView = () => import('@/views/BaseView.vue');
const NavLess = () => import('@/views/NavLess.vue');

const ProjectsPage = () => import('@/views/ProjectsPage.vue');
const HomePage = () => import('@/views/HomePage.vue');
// Sub-Views
const UnderConstruction = () => import('@/components/UnderConstruction.vue');
const ProjectTiles = () => import('@/components/ProjectTiles.vue');
const JNav = () => import('@/components/JNav.vue');
const InteractiveHeader = () => import('@/components/InteractiveHeader.vue');
const JFooter = () => import('@/components/JFooter.vue');
const JShapes = () => import('@/components/JShapes.vue');
const TagGroup = () => import('@/components/TagGroup.vue');

Vue.use(Router);

const root = {
  path: '/', component: BaseView,

  children: [
    {
      path: '', name: 'home',
      components: {
        nav: JNav,
        'left-content': ProjectTiles,
        'right-content': JShapes,
        footer: JFooter,
      },
    },
  ],
};

const projects = {
  path: '/projects', component: BaseView,

  props: {
    groupTitle: 'Languages',
    tagsWithState: store.getters.getTagsWithState,
  },
  children: [
    {
      path: '',
      name: 'projects',
      components: {
        nav: JNav,
        'left-content': ProjectTiles,
        'right-content': TagGroup,
        footer: JFooter,
      },
    },
  ],
};

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    root,
    projects,
  ],
});
