<template>
    <transition name="fade">
        <swiper v-if="isVisible" @click="hideScreen" :effect="'fade'" :spaceBetween="30" :centeredSlides="true"
            :autoplay="{
                delay: 10000,
                disableOnInteraction: false
            }" :navigation="false" :modules="modules" class="mySwiper">
            <swiper-slide><img src="/images/1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/images/2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/images/3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/images/4.jpg" alt=""></swiper-slide>
        </swiper>
    </transition>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, EffectFade],
        };
    },
    data() {
        return {
            images: [
                '/images/image1',
                '/images/image2',
                '/images/image3',
                '/images/image4',
            ],

            isVisible: false,
            inactivityTimeout: null,
        };
    },
    methods: {
        showScreen() {
            this.isVisible = true;
        },
        hideScreen() {
            this.isVisible = false;
            this.resetInactivityTimer(); // Reinicia o timer ao esconder a tela
        },
        resetInactivityTimer() {
            clearTimeout(this.inactivityTimeout);
            this.inactivityTimeout = setTimeout(this.showScreen, 5000); // Mostra a tela após 10 segundos de inatividade
        }
    },
    mounted() {
        // Detecta interações do usuário
        window.addEventListener("mousemove", this.resetInactivityTimer);
        window.addEventListener("keydown", this.resetInactivityTimer);
        window.addEventListener("click", this.resetInactivityTimer);
        window.addEventListener("touchstart", this.resetInactivityTimer);

        // Inicia o timer ao montar o componente
        this.resetInactivityTimer();
    },
    beforeUnmount() {
        // Remove os event listeners ao desmontar o componente
        window.removeEventListener("mousemove", this.resetInactivityTimer);
        window.removeEventListener("keydown", this.resetInactivityTimer);
        window.removeEventListener("click", this.resetInactivityTimer);
        window.removeEventListener("touchstart", this.resetInactivityTimer);
        clearTimeout(this.inactivityTimeout);
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
    /* Controle da duração e suavidade do fade */
}

.fade-enter-from {
    opacity: 0;
}

.fade-leave-to {
    opacity: 0;
}

.swiper {
    width: 100vw;
    height: 100vh;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>