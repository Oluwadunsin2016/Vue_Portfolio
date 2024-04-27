<template>
    <div class="transition-all duration-200 fixed top-0 left-0 w-[100%] h-[100%] dark:bg-gray-900 bg-gray-50 dark:text-gray-200 z-[9998]">
      <div class="px-6 md:px-[5rem] lg:px-[15rem] py-10 flex flex-col justify-between h-full">
      <div class="">
      <img :src="detail?.image" alt="" class="w-full md:h-[25rem] rounded-lg">
          <div class="flex justify-between my-4">
          <a class="bg-slate-900 text-white px-4 py-1 rounded-3xl flex gap-2 items-center hover:bg-slate-950 dark:bg-slate-200 dark:text-black font-semibold dark:hover:bg-slate-300" :href="detail.github_link"><p>GitHub</p><font-awesome-icon :icon="['fab', 'github']" class="text-sm" /></a>
          <a class="bg-slate-900 text-white px-5 py-1 md:py-2 rounded-3xl flex gap-2 items-center hover:bg-slate-950 dark:bg-slate-200 dark:text-black font-semibold dark:hover:bg-slate-300" :href="detail.web_link"><p>Website</p> <font-awesome-icon :icon="['fasl', 'arrow-up-right-from-square']" class="text-sm" /></a>
          </div>
          <div class="my-10">
          <h1 class="text-xl capitalize font-bold my-2">{{detail.title}}</h1>
          <p class="text-slate-600 dark:text-slate-400">{{ detail.description }}</p>
          </div>
      </div>
      <button class="md:absolute top-5 mt-10 md:mt-0 w-full md:w-auto justify-center right-10 flex items-center gap-2 px-5 py-2 bg-slate-100 hover:bg-slate-200 rounded-3xl dark:bg-slate-500/25 dark:hover:bg-slate-500/40" @click="closeModal"> <font-awesome-icon class="text-sm font-thin"
          icon="x"
        /><p>Close</p></button>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    detail: Object,
    closeModal:Function
  },
  data(){
  return {
  }
  }
};
</script>

<style scoped>
</style>
