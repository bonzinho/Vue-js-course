<template>
    <div class="container">
        <h2 v-text="title"></h2>
        <!-- <app-question @changeMode="changeAnswerResultComponent"></app-question> -->
        
        <div class="row">
            <div class="custom-width">
                <transition name="effect" mode="out-in">
                    <component 
                        :is="mode" 
                        @changeMode="changeAnswerResultComponent">
                    </component>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>

import Question from './Question';
import AnswerSuccess from './AnswerSuccess';
import AnswerError from './AnswerError';

export default {
    data(){
        return {
            title: "Quiz",
            mode: 'app-question'
        }
    },

    components: {
        'app-question': Question,
        AnswerSuccess,
        AnswerError        
    },

    methods: {
        changeAnswerResultComponent(mode){            
            this.mode = mode 
        },        
    }
}
</script>

<style scoped>

.effect-leave-active{
    animation: effect-out 1.5s;
}

@keyframes effect-out {
    from {
        transform: rotateY(0deg);
    } 
    
    to {
        transform: rotateY(90deg);
    }
}

.effect-enter-active{
    animation: effect-in 1.5s;
}

@keyframes effect-in {
    from{
        transform: rotateY(90deg);

    }   
    to{
        transform: rotateY(0deg)
    } 
}

.custom-width{
    max-width: 500px;
    margin: 0 auto;
}



</style>