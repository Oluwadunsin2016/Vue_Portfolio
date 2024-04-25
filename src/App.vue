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
  },
};
</script>

<style>
*{
scroll-behavior: smooth !important;
}

::-webkit-scrollbar{
width:5px;
background-color:#1F2937;
}
::-webkit-scrollbar-thumb{
width:5px;
background-color:#111827;
border-radius: 5px;
}
</style>
