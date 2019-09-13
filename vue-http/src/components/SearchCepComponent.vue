<template>
    <div>
        <h1>{{title}}</h1>
        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Qual o CEP a pesquisar?" v-model="cep">
            <button type="submit">Procurar</button>
        </form>

        <div v-show="loading">
            A carregar ...
        </div>

        <div  v-show="error != ''">{{error}}</div>

        <div v-show="address.bairro != ''">
            <p><strong>Bairro:</strong> {{address.bairro}}</p>
            <p><strong>Cidade:</strong> {{address.cidade}}</p>
            <p><strong>Logadouro:</strong> {{address.logadouro}}</p>
            <p><strong>CEP:</strong> {{address.cep}}</p>
        </div>
    </div>
</template>

<script>

import ErrorComponent from './ErrorComponent';


export default {

    components: {
        ErrorComponent,
    },

    data(){
        return {
            title: "Procurar por CEP",
            cep: '',
            error: "",
            loading: false,
            address: {
                bairro: '',                
            }
        }
    },
    methods: {
        onSubmit(){

            this.loading = true;

            this.reset()

            let url = "https://api.postmon.com.br/v1/cep/";

            let vm = this;
            this.$http.get(url + this.cep)
                .then((response) => {                    
                    this.address = response.body;
                }, (error) => {                    
                    this.error = 'Cep errado';
                }).finally(()=>{
                    vm.loading = false;
                });
        },

        reset(){
            this.error = ''; 
            this.address = {bairro: ''}        
        }
    }
}
</script>

<style scoped>

</style>