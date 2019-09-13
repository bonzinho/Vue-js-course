<template>
    <div class="card">
        <div class="card-header">
            <h2 v-text="question"></h2>
        </div>
        <div class="card-body">
            <form @submit.prevent="checkResult" class="form form-inline">
                <input type="text" name="response" v-model="response" id="response" class="form-control">
                <button type="submit" class="btn btn-primary">Responder</button>
            </form>   
        </div>
             
    </div>
</template>

<script>
export default {
    data(){
        return {            
            question: 'A gerar pergunta...',
            result: 0,
            response: '',
        }
    },

    created() {
        this.generateQuestion()
    },   

    methods:{
        generateQuestion(){
            let numberOne = this.generateRandomNumber(1, 100);
            let numberTwo = this.generateRandomNumber(1, 100);
            
            this.result = numberOne + numberTwo;

            this.question = `Qual é o resultado da soma entre ${numberOne} e ${numberTwo} ?`

        },
        generateRandomNumber(min, max){
            return Math.round(Math.random() * (max - min)) + min;
        },
        checkResult(){

            let mode = 'answer-error';

            if(this.response == this.result){
                mode = 'answer-success'
            }
            
            this.$emit('changeMode', mode);

        }
    }
}
</script>

<style scoped>
.default{
    border: 2px solid blue;
    padding: 10px;
}
</style>