import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/NotFound';
import PrismicPreview from '@/components/Prismic/Preview';
import Tutorial from '@/components/Tutorial';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'tutorial' }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'prismic-preview',
      component: PrismicPreview
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  window.PrismicToolbar.setupEditButton();
  next();
});

export default router;
