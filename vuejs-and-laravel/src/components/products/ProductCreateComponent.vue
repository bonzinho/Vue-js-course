<template>
  <div>
    <h1 v-text="title"></h1>

    <form @submit.prevent="createProduct" v-show="!preload">
      <div class="form-group" :class="{'has-warning': errors.name}">
        <input type="text" class="form-control" name="name" id="name" placeholder="Product name" v-model="product.name">
        <div class="error" v-if="errors.name">
          <p v-for="(error, index) in errors.name" :key="index" v-text="error"></p>
        </div>
      </div>
      <div class="form-group" :class="{'has-warning': errors.description}">
        <textarea type="text" class="form-control" name="description" id="description" placeholder="Description" v-model="product.description"></textarea>
        <div class="error" v-if="errors.description">
          <p v-for="(error, index) in errors.description" :key="index" v-text="error"></p>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
    </form>

    <preload-component :preload="preload"></preload-component>

  </div>
</template>

<script>

import PreloadComponent from '../helpers/PreloadComponent'


export default {

  data(){
    return {
      title: 'Adicionar Produto',
      product: {
        name: '',
        description: ''
      },
      preload: false,
      errors: [],
    }
  },

  methods: {
    createProduct(){
      this.preload = true;
      this.$http.post(`http://localhost:8000/api/v1/products`, this.product)
      .then((response) => {
        this.$router.push('/product');
      }, (error) => {
        if(error.status === 422){
          this.errors = error.body.errors
        }else{
          this.errors = [{message: 'Erro inesperado, por favor tente de novo'}]
        }
      }).finally(() => this.preload = false)
    }
  },

  components: {
    PreloadComponent
  }

}
</script>

<style scoped>
.has-warning{
  color:red;
}

.has-warning input, textarea{
  color:red;
  border: 1px solid red;
}
</style>>
