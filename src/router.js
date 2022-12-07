import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import ProductPage from '@/views/ProductPage.vue'
import CartPage from '@/views/CartPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import LogIn from '@/views/LogIn.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/shop', name: 'Products', component: ProductPage },
  { path: '/cart', name: 'Cart', component: CartPage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/login', name: 'Login', component: LogIn },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
