<template>
    <section class="h-screen w-full flex flex-col justify-center items-center text-center bg-slate-100 dark:bg-gray-800">
        <Icon icon="circum:wifi-off" class="text-red-500 text-6xl" />
      <p class="max-w-[400px] mt-5 dark:text-white">
        A network error occurred while fetching data, please try again
      </p>
      <button
        @click="reloadPage"
        class="mt-8 border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-500 hover:text-white transition"
      >
        Reload
      </button>
    </section>
  </template>
  
  <script>
import { Icon } from '@iconify/vue/dist/iconify.js';

  export default {
      data(){
      return {
    }
      },
      components: {
    Icon
  },
    methods: {
        reloadPage() {
    window.location.reload()
  }
    }
  }
  </script>
  