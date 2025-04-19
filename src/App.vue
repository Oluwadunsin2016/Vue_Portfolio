<template>
  <div class="min-h-screen dark:bg-gray-900 bg-gray-50 dark:text-gray-200">
 
    <Loader v-show="isLoading" />
    <div v-show="isError && !isLoading" class="flex justify-center items-center h-screen text-center">
      <NetworkError />
    </div>

   
    
    <div v-show="!isLoading && !isError">
      <Navbar />
      <Hero />
      <About />
      <Languages />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <!-- <Loader /> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Languages from "./components/Languages.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import userId, { baseURL } from '@/main';
import axios from 'axios';
import Loader from './components/Loader.vue';
import NetworkError from './components/NetworkError.vue';
import Testimonial from './components/Testimonial.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    About,
    Languages,
    Services,
    Projects,
    Contact,
    Footer,
    Loader,
    NetworkError,
    Testimonial
  },
  setup() {
    const isLoading = ref(true);
    const isError = ref(false);
    const currentUser = ref(null);

    const getCurrentUser = () => {
      window.emitter.emit("changeLoaderStatus", true);
      axios
        .get(`${baseURL}getCurrentUser/${userId}`)
        .then((res) => {
          // ✅ Cache user data on the emitter object
        window.emitter.userData = res.data;

// ✅ Emit the event
window.emitter.emit("current_user", res.data);
          isLoading.value = false;
          window.emitter.emit("changeLoaderStatus", false);
        })
        .catch((err) => {
          console.error(err.message);
          isLoading.value = false;
          isError.value = true;
        });
    };

    onMounted(() => {
      getCurrentUser();
    });

    return {
      isLoading,
      isError,
    };
  },

};
</script>

<style>
* {
  scroll-behavior: smooth !important;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #1F2937;
}

::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: #111827;
  border-radius: 5px;
}
</style>
