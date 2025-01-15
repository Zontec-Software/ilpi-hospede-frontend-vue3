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
<style>
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--cor-separador);
  border-radius: 20px;
}
</style>
