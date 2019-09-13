<template>
  <div id="app" class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/product">Products</router-link>
    <router-link to="/product/create">+Products</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

</style>
