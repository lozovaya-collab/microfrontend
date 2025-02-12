import Vue from 'vue'
import VueRouter from 'vue-router'

import StartPage from '@/views/StartPage/index.vue'
import Dashboard from '@/views/StartPage/Dashboard.vue'
import Status from '@/views/StartPage/Status.vue'
import Services from '@/views/StartPage/Services.vue'

import UsersView from '@/views/Users/index.vue'
import UsersList from '@/views/Users/UsersList.vue'
import UpdateUser from '@/views/Users/UpdateUser.vue'
import AddUser from '@/views/Users/AddUser.vue'

import DevicesView from '@/views/Devices/index.vue'
import DevicesList from '@/views/Devices/DevicesList.vue'
import AddDevice from '@/views/Devices/AddDevice.vue'
import UpdateDevice from '@/views/Devices/UpdateDevice.vue'

import NovaView from '@/views/Nova/NovaView.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'home',
    redirect: '/start/dashboard'
  },
  {
    path: '/start',
    redirect: '/start/dashboard',
    name: 'start-page',
    component: StartPage,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'status',
        name: 'status',
        component: Status
      },
      {
        path: 'services',
        name: 'services',
        component: Services
      }
    ]
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
    children: [
      {
        path: '',
        name: 'users-list',
        component: UsersList
      },
      {
        path: 'new',
        name: 'add-user',
        component: AddUser
      },
      {
        path: ':id',
        name: 'update-user',
        component: UpdateUser
      }
    ]
  },
  {
    path: '/devices',
    name: 'devices',
    component: DevicesView,
    children: [
      {
        path: '',
        name: 'devices-list',
        component: DevicesList
      },
      {
        path: 'new',
        name: 'add-device',
        component: AddDevice
      },
      {
        path: ':id',
        name: 'update-device',
        component: UpdateDevice
      }
    ]
  },
  {
    path: '/nova',
    name: 'Nova',
    component: NovaView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
