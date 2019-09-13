<template>
  <div>
      <h1 v-text="title"></h1>
      <task-add-component></task-add-component>
      <ul>
        <li v-for="(task, index) in getTasksSorted" :key="index" :class="{'completed' : task.completed}">
          {{task.name}} |  <a href="#" @click.prevent="completedTask(task)">Toogle</a>
        </li>
      </ul>
  </div>
</template>

<script>
import TaskAddComponent from './TaskAddComponent';
export default {
  data(){
    return {
      title: "Tasks"
    }
  },
  methods:{
    completedTask(task){
      this.$store.commit('TOOGLE_TASKS', task)
    }
  },
  computed:{
    getTasks(){
      return this.$store.state.Tasks.tasks;
    },
    getTasksSorted(){
      return this.$store.getters.Tasks.sortedTasks
    }
  },
  components: {
    TaskAddComponent,
  }
}
</script>

<style scoped>
 .completed{
   border: 2px solig green;
   background-color: green;
   color: #fff;
 }
</style>
