<template>
  <div id="app">
    <RestScreen />
    <router-view />
  </div>
</template>

<script>
import RestScreen from "./components/telaDescanso.vue";

export default {
  components: {
    RestScreen,
  },
};
</script>
