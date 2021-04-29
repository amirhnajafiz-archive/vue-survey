<template>
  <div>
    <AppHeader />
    <h1>Hello world</h1>
  </div>
</template>

<script>
import AppHeader from './components/Header'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
