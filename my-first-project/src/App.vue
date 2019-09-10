<template>
  <div id="app" class="comp">
    Teste {{msg}}
    <teste-component></teste-component>
    <form-component></form-component>
    <tasks-component></tasks-component>
  </div>
</template>

<script>

// Imports
import TesteComponent from './components/TesteComponent';
import FormComponent from './components/FormComponent'
import TasksComponent from './components/TasksComponent';

export default { 

  data() {     
      return {
        msg: 'Curso Vuejs com VueCli Component App.vue'
        } 
  },

  components: {
    TesteComponent,
    FormComponent,
    TasksComponent,
  }

}
</script>

<style>

.comp{
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {  
  padding: 0;
}

li {  
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
