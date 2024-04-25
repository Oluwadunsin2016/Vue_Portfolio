<template>
  <header class="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 py-4 dark:shadow-gray-900 z-[90] shadow-md fixed w-full top-0">
    <div class="mx-auto px-4 lg:px-8">
      <div class="flex justify-between items-center relative">
        <h1 class="text-2xl tracking-wider uppercase font-helvetica text-blue-400">Portfolio</h1>
        <ul class="gap-4 hidden md:flex cursor-pointer">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#languages">Languages</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="hidden items-center gap-4 md:flex">
          <button class="bg-blue-700 py-1 px-3 rounded text-white">
            Hire Me
          </button>
          |
           <span :class="`${!showLabelTwo&&'hidden'} animate-bounce absolute top-10 right-0 bg-slate-200 dark:bg-slate-500 rounded-full px-3 py-1`">{{isChecked?'Change to light mode':'Change to dark mode'}}</span>
        <label for="toggleSwitch" class="relative h-6 w-12 cursor-pointer" @mouseover="showLabelTwo=true" @mouseleave="showLabelTwo=false">
          <input
            type="checkbox"
            id="toggleSwitch"
            :checked="isChecked"
            @change="darkMode"
            class="peer sr-only"
          />
          <span
            class="absolute inset-0 shadow-inner bg-gray-300 h-6 w-14 rounded-full peer-checked:bg-blue-500"
          ></span>
          <span
            class="absolute inset-[2px] start-[2px] top-[2px] peer-checked:start-[34px] bg-gray-100 h-5 w-5 transition-all rounded-full shadow-sm"
          ></span>
        </label>

        </div>
        <font-awesome-icon
          icon="bars"
          class="md:hidden h-5 w-5 active:mt-[2px] cursor-pointer"
          @click="openSidebar"
        />
      </div>
    </div>


  </header>
    <div
      :class="`sideNav shadow-md bg-slate-100 dark:bg-gray-800 dark:shadow-gray-850 transition-all duration-300 dark:text-white fixed z-[99] h-full top-0 py-4 right-0 ${isOpened ? 'w-full px-5' : 'w-0'}`"
      
    >
      <div>
        <font-awesome-icon
          icon="x"
          class="hover:bg-gray-50/30 cursor-pointer p-2 dark:hover:text-black rounded-full font-thin"
          @click="closeSidebar"
        />
      </div>
      <div class="flex my-4 justify-between relative">
        <h4 class="font-bold">Dark Mode</h4>
        <span :class="`${!showLabelOne&&'hidden'} animate-bounce absolute top-8 right-0 bg-slate-200 dark:bg-slate-500 rounded-full px-3 py-1`">{{isChecked?'Change to light mode':'Change to dark mode'}}</span>
        <label for="toggleSwitch" class="relative h-6 w-12 cursor-pointer" @mouseover="showLabelOne=true" @mouseleave="showLabelOne=false">
          <input
            type="checkbox"
            id="toggleSwitch"
            :checked="isChecked"
            @change="darkMode"
            class="peer sr-only"
          />
          <span
            class="absolute inset-0 shadow-inner bg-gray-300 h-6 w-14 rounded-full peer-checked:bg-blue-500"
          ></span>
          <span
            class="absolute inset-[2px] start-[2px] top-[2px] peer-checked:start-[34px] bg-gray-100 h-5 w-5 transition-all rounded-full shadow-sm"
          ></span>
        </label>
      </div>
      <hr class="my-2" />
      <ul>
        <li
          class="my-4 cursor-pointer w-full hover:bg-gray-200 px-2 rounded dark:hover:text-black"
          @click="closeSidebar"
        >
         <a href="#home" class="block">Home</a>
        </li>
        <li
          class="my-4 cursor-pointer w-full hover:bg-gray-200 px-2 rounded dark:hover:text-black"
          @click="closeSidebar"
        >
        <a href="#about" class="block">About me</a>
        </li>
        <li
          class="my-4 cursor-pointer w-full hover:bg-gray-200 px-2 rounded dark:hover:text-black"
          @click="closeSidebar"
        >
        <a href="#languages" class="block">Languages</a>
        </li>
        <li
          class="my-4 cursor-pointer w-full hover:bg-gray-200 px-2 rounded dark:hover:text-black"
          @click="closeSidebar"
        >
        <a href="#services" class="block">Services</a>
        </li>
        <li
          class="my-4 cursor-pointer w-full hover:bg-gray-200 px-2 rounded dark:hover:text-black"
          @click="closeSidebar"
        >
        <a href="#projects" class="block">Projects</a>
        </li>
        <li
          class="my-4 cursor-pointer w-full hover:bg-gray-200 px-2 rounded dark:hover:text-black"
          @click="closeSidebar"
        >
          <a href="#contact" class="block">Contact</a>
        </li>
      </ul>
      <button class="bg-blue-700 py-1 px-3 rounded text-white my-2">
        Hire Me
      </button>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpened: false,
      isChecked: false,
      showLabelOne: false,
      showLabelTwo: false,
    };
  },
mounted(){
if (localStorage.isChecked) {
 const outcome=JSON.parse(localStorage.getItem('isChecked'))
  if (outcome.checked) {
      this.isChecked = outcome.checked;
}else{
  this.isChecked = false;
}

}
   if (this.isChecked) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
},
  methods: {
    openSidebar() {
      this.isOpened = true;
    },
    closeSidebar() {
      this.isOpened = false;
    },
    darkMode(e) {
    const checked={checked:e.target.checked}
      localStorage.setItem('isChecked',JSON.stringify(checked))
     const outcome=JSON.parse(localStorage.getItem('isChecked'))
      this.isChecked = outcome.checked;
      if (this.isChecked) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>

<style>
.font-helvetica{
font-family: Exo\ 2,Helvetica Neue,Arial,sans-serif !important;
font-weight: 600;
}
</style>
