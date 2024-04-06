<template>
 <div class="dark:bg-gray-900 bg-gray-50 dark:text-gray-200">
  <Navbar/>
  <Hero/>
  <About/>
  <Languages/>
  <Services/>
  <Projects/>
  <Contact/>
  <Footer/>
 </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Languages from "./components/Languages.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Slider from "./components/Slider.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Slider,
    About,
    Languages,
    Services,
    Projects,
    Contact,
    Footer,
  },
};
</script>

<style>
*{
scroll-behavior: smooth !important;
}
</style>
