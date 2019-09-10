<template>
  <div id="app" class="container">    
    <h1>{{ msg }}</h1>
    <list-tasks-component></list-tasks-component>    
  </div>
</template>

<script>
import ListTasksComponent from './components/Tasks/ListTasksComponent'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    ListTasksComponent
  }
}
</script>

<style>

</style>
