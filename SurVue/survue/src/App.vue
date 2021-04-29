<template>
  <div>
    <AppHeader />
    <AppContainer style="height: 100vh">Hello world</AppContainer>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import AppContainer from "./components/Container"

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppContainer
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
