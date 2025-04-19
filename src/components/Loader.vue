<template>
<!-- <div class="fixed top-0 left-0 h-full w-full bg-gray-700 bg-opacity-90 transition-all ease-in-out flex justify-center items-center z-50" v-if="loader_status">

<looping-rhombuses-spinner
  :animation-duration="2500"
  :rhombus-size="30"
  color="#e5e7eb"
/>
</div> -->
<section class="flex flex-col items-center justify-center gap-2 min-h-screen bg-slate-100 dark:bg-gray-800">

<semipolar-spinner
  :animation-duration="2500"
  :rhombus-size="30"
  color="#3B82F6"
/>
<p>Just a moment...</p>
</section>
</template>

<script>
import { SemipolarSpinner  } from 'epic-spinners'
export default {
components:{
  SemipolarSpinner
},
//  data() {
//     return {
//         loader_status: false,
//     }
//     },
//      mounted(){
//   window.emitter.on('changeLoaderStatus',(status)=>{
//   this.loader_status=status
//   })
//   }

}
</script>

<style>

</style>