/*这里原本是`createWebHashHistory`,但为了防止网址出现`#`,
即我们需要的是`localhost:8080`而不是`localhost:8080/#/`,
故将其改为`createWebHistory`*/
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import RegisterView from '@/views/RegisterView.vue';
import UserListView from '@/views/UserListView.vue';
import UserProfileView from '@/views/UserProfileView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFoundView
  },

  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfileView
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
