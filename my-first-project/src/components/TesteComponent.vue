<template>
<div class="comp">
    <p>Teste teste teste</p>
    <span>Teste dentro de um span {{ msg }}</span>
    <form-component></form-component>
</div>    
</template>

<script>
import FormComponent from '../components/FormComponent';


export default {

    data(){
        return {
            msg: 'Mensagem personalizada do data:'
        }
    },

    components:{
        FormComponent,
    }
    
}
</script>

<style scoped>
.p {
    color:red;
}

span{
    font-size: 10px;
}

.comp{
    border: 1px solid green;
    margin: 5px;
    padding: 5px;
}
</style>