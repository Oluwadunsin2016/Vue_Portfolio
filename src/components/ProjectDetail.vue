<template>
  <!-- <transition name="modal"> -->
    <div class="transition-all duration-200 fixed top-0 left-0 w-[100%] h-[100%] dark:bg-gray-900 bg-gray-50 dark:text-gray-200 z-[9998]">
      <div class="px-6 md:px-[5rem] lg:px-[15rem] py-10 flex flex-col justify-between h-full">
      <div class="">
      <img :src="`${projectDir}${detail?.image}`" alt="" class="w-full md:h-[25rem] rounded-lg">
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
  <!-- </transition> -->
  <!-- <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button
                class="modal-default-button"
                @click="$emit('close')"
              >OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition> -->
</template>

<script>
import { projectDir } from '../main';

export default {
  props: {
    detail: Object,
    closeModal:Function
  },
  data(){
  return {
  projectDir
  }
  }
};
</script>

<style scoped>




/* .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
} */

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
</style>
