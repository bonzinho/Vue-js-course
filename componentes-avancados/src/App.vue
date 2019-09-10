<template>
  <div id="app">
    
    <h1>{{ msg }}</h1>

    <tasks-components 
      :items="tasks" 
      :title="'Titulo passado pelo component pai através das props'" 
      @calledParent="answerSon">
    </tasks-components>

    <hr> 

    <list-items-component 
      :title="'Lista de Items (componente)'" 
      :items="['val1','val2','val3','val4', ]">
    </list-items-component>

  </div>
</template>

<script>
import TasksComponents from './components/TasksComponent'
import ListItemsComponent from './components/ListItemsComponent'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tasks: ['task 1', 'task2', 'task3', 'task4']
    }
  },

  methods:{
    answerSon(task){
      this.tasks.push(task);
    }
  },

  components: {
    TasksComponents,
    ListItemsComponent
  }
}
</script>

<style>
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
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
