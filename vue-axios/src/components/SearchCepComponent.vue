<template>
  <div>
    <form @submit.prevent="getCEP">
      <input type="text" v-model="cep" placeholder="CEP">
      <button type="submit">Procurar</button>
    </form>
    <div v-if="preloader">Aguarde...</div>
    <div v-if="error">{{this.error}}</div>
    <div v-if="address.cep">
      {{address}}
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {
      cep: '',
      address: {},
      preloader: false,
      error: ''
    }
  },
  methods:{
    getCEP(){
      this.resetForm();
      this.preloader = true
      axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
      .then((response) => {
        this.cep = '';
        if(response.data.erro){
          this.error="CEP não encontrado"
          return
        }
        this.address = response.data
      }).catch((error) => {
        this.error = "CEP não Encontrado"
      }).finally(() => {
        this.preloader = false
      })
    },
    resetForm(){
      this.error = false
      this.address = {}
      this.cep = ''
    }
  }
}
</script>
<style scoped>

</style>
