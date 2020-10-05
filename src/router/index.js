import Vue from 'vue'
import VueRouter from 'vue-router'
import Giris from '../views/Giris.vue'
import VeriEkle from '../views/VeriEkle.vue'
import VeriSil from '../views/VeriSil.vue'
import Güncelle from '../views/Güncelle.vue'
import veriGuncelle from '../views/veriGuncelle.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Giris',
        component: Giris
    },
    {
        path: '/veriekle',
        name: 'VeriEkle',
        component: VeriEkle
    },
    {
        path: '/verisil',
        name: 'VeriSil',
        component: VeriSil
    },
    {
        path: '/guncelle',
        name: 'guncelle',
        component: Güncelle
    },
    {
        path: '/guncelle/:id',
        name: 'veriGuncelle',
        component: veriGuncelle
    },
    /*{
      /*
      path: '/veriekle',
      name: 'VeriEkle',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */
    /*'../views/About.vue') 
    } 
    */
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router