<template>
  <div>
      <h1 v-text="title"></h1>
      <form @submit.prevent="createTask">
        <input type="text" placeholder="Task" v-model="task.name">
        <button type="submit">Create</button>
      </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: "Create Tasks",
      task: {
        name: '',
        completed: false,
      }
    }
  },
  methods: {
    createTask(){
      // Mutation, alteração sem requisição ajax
      // this.$store.commit('ADD_TASK', this.task)

      // Action, para poder alteerar os dados através de APi e só depois alterar com o mutator
      this.$store.dispatch('addTask', this.task)

      this.task = {}
    }
  },
  computed:{

  },
}
</script>

<style scoped>

</style>
