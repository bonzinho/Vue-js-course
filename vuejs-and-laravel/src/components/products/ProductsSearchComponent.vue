<template>
  <div>
    <form class="form form-inline" @submit.prevent="pesquisa">
      <div class="form-group">
        <input type="text" placeholder="Termo de pesquisa" class="form-control" v-model="filter">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary custom-btn">Pesquisar</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props:{

  },
  data(){
    return {
      filter: '',
    }
  },
  methods:{
    pesquisa(){
      this.$emit('search', this.filter)
    }
  }
}
</script>

<style scoped>
.custom-btn{
  margin: 0 10px;
}
</style>
