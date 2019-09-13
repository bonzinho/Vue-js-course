<template>
  <div>

    <h1>{{title}}</h1>

    <div class="row">
      <div class="col">
        <router-link class="btn btn-primary btn-create" to="product/create">Adicionar novo produto</router-link>
      </div>
      <div class="col">
        <product-search-component @search="searchProduct"></product-search-component>
      </div>
    </div>



    <div class="alert alert-danger" v-if="confirmDelete">
      <h2>Apagar produto?</h2>
      <hr>
      <button class="btn btn-danger" @click.prevent="deleteProduct">Apagar</button>
    </div>

    <div class="row" v-if="!preload">
      <div class="col">
        <table class="table table-dark">
          <thead>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th width="200">Acções</th>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products.data" :key="index">

              <td>{{product.id}}</td>
              <td>{{product.name}}</td>
              <td>{{product.description}}</td>
              <td>
                <router-link class="btn btn-primary" :to="{name: 'product.edit', params: {id: product.id} }">Editar</router-link>
                <button class="btn btn-danger" @click.prevent="confirmDeleteProduct(product.id)">Apagar</button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <pagination-component
      :pagination="products"
      :offset="offset"
      v-show="!preload"
      @paginate="paginate">
    </pagination-component>

    <preload-component :preload="preload"></preload-component>

  </div>
</template>

<script>

import PaginationComponent from '../helpers/PaginationComponent';
import PreloadComponent from '../helpers/PreloadComponent'
import ProductSearchComponent from './ProductsSearchComponent'

export default {

  created(){
    this.getProducts();
  },

  data(){
    return {
      title: "Products",
      products: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      offset: 4,
      preload: false,
      confirmDelete: false,
      idProductDelete: '',
      filtro: '',
    }
  },

  methods:{

    getProducts(){
      this.preload = true;
      this.$http.get(`http://localhost:8000/api/v1/products?page=${this.products.current_page}&filter=${this.filtro}`)
      .then((response) => {
        this.products = response.body;
      }, (error) => {
        console.log(error)
      }).finally(() => this.preload = false)
    },

    paginate(pageNumber){
      this.products.current_page = pageNumber;
      this.getProducts();
    },

    confirmDeleteProduct(productId){
      this.confirmDelete = true;
      this.idProductDelete = productId;
    },

    deleteProduct(){
      this.preload = true;
      this.$http.delete(`http://localhost:8000/api/v1/products/${this.idProductDelete}`)
      .then((response) => {
        this.getProducts();
      }, (error) => {
        comsole.log(error);
      }).finally(() =>{
        this.confirmDelete = false
        this.getProducts
      });
    },

    searchProduct(filter){
      this.filtro = filter;
      this.getProducts();
    }

  },

  components: {
    PaginationComponent,
    PreloadComponent,
    ProductSearchComponent
  }
}
</script>

<style scoped>
.btn-create{
  margin: 10px 0;
}
</style>
