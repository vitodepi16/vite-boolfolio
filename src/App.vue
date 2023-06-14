<template>
  <header>
    <HeaderApp />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <FooterApp />
  </footer>
</template>
<script>
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  background-color: #281b6e;
}
</style>
