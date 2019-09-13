import HomeComponent from '../components/home/HomeComponent.vue'
import ProductComponent from '../components/products/ProductComponent.vue'
import ProductCreateComponent from '../components/products/ProductCreateComponent.vue'
import ProductEditComponent from '../components/products/ProductEditComponent.vue'

export default[
  {path: '/', component: HomeComponent},
  {path: '/product', component: ProductComponent},
  {path: '/product/create', component: ProductCreateComponent},
  {path: '/product/:id/edit', component: ProductEditComponent, name: 'product.edit', props: true},
]
