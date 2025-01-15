<template>
  <main>
    <div class="margem" style="width: 100%; box-sizing: border-box; max-height: 100svh; overflow: auto">
      <h1>{{ currentTime }}</h1>
      <h2>Olá João</h2>
      <div class="image-grid">
        <div v-for="(image, index) in images" :key="index" class="image-item">
          <img :src="image.wrl" alt="Image" />
            <span class="overlay-text">{{ image.label }}</span>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  data() {
    return {
      images: [
        { label: 'Visitas', wrl: "/images/menu/visitas.webp" },
        { label: 'Atividades', wrl: "/images/menu/atividades.webp" },
        { label: 'Ligação', wrl: "/images/menu/ligação.webp" },
        { label: 'Consultas', wrl: "/images/menu/consultas.webp" },
        { label: 'Visitas', wrl: "/images/menu/visitas.webp" },
        { label: 'Atividades', wrl: "/images/menu/atividades.webp" },
        { label: 'Ligação', wrl: "/images/menu/ligação.webp" },
        { label: 'Consultas', wrl: "/images/menu/consultas.webp" },
      ],
    }
  },
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
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: clamp(1rem, 2vw, 2rem);;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  text-align: center;
  pointer-events: none;
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 0px 10px;
}

.image-grid {
  box-sizing: border-box;
  width: 99%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;
  padding: 16px;
}

.image-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-item img {
  width: 100%;
  height: auto;
  display: block;
}


main {
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}

main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  background: url(@/assets/img/paisagemLogin.jpg) center / cover no-repeat;
  opacity: 0.6;
  z-index: -1;
}
</style>