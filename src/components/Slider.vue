


<template>
  <!-- <Transition name="slide">
  <h1 v-if="show" class="mx-5">Hello</h1>
  </Transition> -->
<transition>
  <p v-if="show">hello</p>
</transition>
<button class="bg-blue-500 rounded px-2" @click="slide">Slide</button>

  <!-- <button class="bg-blue-500 rounded px-2" @click="show = !show">Toggle</button>
  <Transition :duration="550" name="nested">
    <div v-if="show" class="outer">
      <div class="inner">
   			Hello
      </div>
    </div>
  </Transition> -->
</template>
<script>
 

  export default {
   data() {
    return {
      show: true
    }
   },

   methods: {
    slide() {
    this.show=!this.show
    },
   },
  };
</script>

<style>
/* .slide-enter-from,.slide-leave-to{
opacity: 0;
transform: translateY(-100px);
}


.slide-enter-active,.slide-leave-active{
transition: all 0.3s ease-in-out;
} */

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
transform: translateX(1000px);
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
transform: translateX(0);
  opacity: 1;
}
</style>
