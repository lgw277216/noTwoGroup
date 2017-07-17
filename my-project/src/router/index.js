import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mint from 'mint-ui'

Vue.use(Mint)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/yunShan',
      component: require('../pages/yunShan.vue')
    },
    {
      path: '/careSystem',
      component: require('../pages/careSystem.vue')
    },
    {
      path: '/branch',
      component: require('../pages/branch.vue')
    },
    {
      path: '/nutritionSystem',
      component: require('../pages/nutritionSystem.vue')
    },
    {
      path: '/securitySystem',
      component: require('../pages/securitySystem.vue')
    },
    {
      path: '/intelligenceDevelopment',
      component: require('../pages/intelligenceDevelopment.vue')
    },
    {
      path: '/defenseSystem',
      component: require('../pages/defenseSystem.vue')
    },
    {
      path: '/plasticBeauty',
      component: require('../pages/plasticBeauty.vue')
    },
    {
      path: '/professionalSystem',
      component: require('../pages/professionalSystem.vue')
    },
    {
      path: '/rehabilitationSystem',
      component: require('../pages/rehabilitationSystem.vue')
    }
  ]
})
