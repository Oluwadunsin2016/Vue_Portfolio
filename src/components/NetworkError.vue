<template>
    <div class="h-screen w-full flex flex-col justify-center items-center text-center">
        <font-awesome-icon :icon="['fas', 'wifi']" class="text-red-500 text-4xl" />
      <p class="max-w-[400px] mt-5">
        A network error occurred while fetching data, please try again
      </p>
      <button
        @click="reloadPage"
        class="mt-8 border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-500 hover:text-white transition"
      >
        Reload
      </button>
    </div>
  </template>
  
  <script>
  export default {
      data(){
      return {
    }
      },
    methods: {
        reloadPage() {
    window.location.reload()
  }
    }
  }
  </script>
  