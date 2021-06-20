import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Services from './views/Services.vue';
import Customers from './views/Customers.vue';
import Blog from './views/Blog.vue';
import Support from './views/Support.vue';
import ContactUs from './views/ContactUs.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '',
      component: Home,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/support',
      name: 'support',
      component: Support,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
});
