<template>
  <main>
    <section>
      <div class="margem" style="display: flex; flex-flow: column; height: 94%">
        <h1>{{ currentTime }}</h1>
        <div style="display: flex; flex-flow: column; height: 100%; justify-content: center;">
          <h2>Olá João</h2>
          <div class="grid-2" style="width: 30%;">
            <a class="card bloco">
              <figure>
                <img src="@/assets/img/visitas.webp" />
                <figcaption class="margem abs">Visitas</figcaption>
              </figure>
            </a>
            <a class="card bloco">
              <figure>
                <img src="@/assets/img/atividades.webp" />
                <figcaption class="margem abs">Atividades</figcaption>
              </figure>
            </a>
            <a class="card bloco">
              <figure>
                <img src="@/assets/img/ligação.webp" />
                <figcaption class="margem abs">Ligação</figcaption>
              </figure>
            </a>
            <a class="card bloco">
              <figure>
                <img src="@/assets/img/consultas.webp" />
                <figcaption class="margem abs">Consultas</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  setup() {
    const currentTime = ref("");
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      currentTime.value = `${hours}:${minutes}`;
    };
    onMounted(() => {
      updateClock();
      const interval = setInterval(updateClock, 1000);
      onUnmounted(() => {
        clearInterval(interval);
      });
    });

    return {
      currentTime,
    };
  }
}
</script>
<style scoped>
h1 {
  font-size: 48px;
  margin: 0;
  color: var(--cor-bg);
}

h2 {
  color: var(--cor-bg);
  font-size: 28px;
}

main {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(@/assets/img/paisagemLogin.jpg) center / cover no-repeat;
  opacity: 0.6;
  z-index: -1;
}
</style>