import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../components/home/HomeComponent.vue';
import TaskComponent from '../components/task/TaskComponent.vue';

Vue.use(VueRouter);

const routes =   [
  {path: '/', component: HomeComponent, name: 'home'},
  {path: '/tasks', component: TaskComponent, name: 'tasks'},
]

export default new VueRouter({
  mode: 'history',
  routes
})

