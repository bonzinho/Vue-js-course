import HomeComponent from './components/HomeComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue';
import TasksComponent from './components/TasksComponent.vue';
import Error404Component from './components/Error404Component.vue';

export default [
    {path: '/', component: HomeComponent},
    {path: '/products', component: ProductsComponent, name: 'produtos'},
    {path: '/task/:id', component: TasksComponent, name: 'tarefa', props: true},
    {path: '/redirect', redirect: '/products'}, // Redirecionamentos
    {path: '*', component: Error404Component}
]