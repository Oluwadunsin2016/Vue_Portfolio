<template>
<div class="fixed top-0 left-0 h-full w-full bg-gray-700 bg-opacity-90 transition-all ease-in-out flex justify-center items-center z-50" v-if="loader_status">

<looping-rhombuses-spinner
  :animation-duration="2500"
  :rhombus-size="30"
  color="#e5e7eb"
/>
</div>
</template>

<script>
import { LoopingRhombusesSpinner } from 'epic-spinners'
export default {
components:{
LoopingRhombusesSpinner
},
 data() {
    return {
        loader_status: false,
    }
    },
     mounted(){
  window.emitter.on('changeLoaderStatus',(status)=>{
  this.loader_status=status
  })
  }

}
</script>

<style>

</style>