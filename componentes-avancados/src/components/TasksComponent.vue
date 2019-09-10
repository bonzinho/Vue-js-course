<template>
    <div>
       <h1> {{ title }}</h1>
       <ul>
           <li v-for="(item, index) in items" :key="index">{{item}}</li>
       </ul>
       <input type="text" name="task" v-model="task">
       <button @click.prevent="callParent">Chamar pai</button>
    </div>    
</template>

<script>
export default {
    props:[
        'items',
        'title',
    ],

    data(){
        return {
            task: '',
        }
    },

    methods: {
        callParent(){
            alert("chama o pai");
            this.$emit('calledParent', this.task);
            this.task = '';
        }
    }

}
</script>