<template>
    <div class="alert alert-success text-center">
        <h2>{{title}}</h2>
        <hr>
        <p>Resposta Correta!</p>
        <button class="btn btn-success" @click.prevent="next">Próxima Pergunta</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title: 'Sucesso!',
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
.success{
    border:2px solid green;
    padding:10px;
}
</style>