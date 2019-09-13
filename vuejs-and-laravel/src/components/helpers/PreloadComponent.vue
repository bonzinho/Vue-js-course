<template>
  <div v-if="preload">
    <div class="row">
      <div class="col align-content-center">
        <img src="../../assets/preloader.gif" alt="Aguarde..." class="preloader">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    preload: {
      type: Boolean,
      required: true,
      defaul: false,
    }
  },
  data(){
    return {

    }
  }

}
</script>

<style scoped>
.preloader{
  max-width: 60px;
}
</style>
