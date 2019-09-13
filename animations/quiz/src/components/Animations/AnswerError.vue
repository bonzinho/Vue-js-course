<template>
    <div class="alert alert-danger text-center">
        <h2>{{title}}</h2>
        <hr>
        <p>Resposta Errada!</p>
        <button @click.prevent="next" class="btn btn-danger">Próxima Pergunta</button>        
    </div>
</template>
<script>
export default {
    data(){
        return{
            title: 'Erro!',
        }
    },
    methods: {
        next(){
            let mode = 'app-question';
            this.$emit('changeMode', mode);
        }
    }
}
</script>
<style  scoped>
.error{
    border: 2px solid red;
    padding:10px;
}
</style>