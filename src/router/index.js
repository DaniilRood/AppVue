import VCatalog from '@/components/v-catalog.vue'
import { createRouter, createWebHistory } from 'vue-router'


import VCart from '@/components/v-cart.vue';
const routes = [
  
]

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'catalog',
    component: VCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: VCart,
    props: true

  }]
  
})

export default router
