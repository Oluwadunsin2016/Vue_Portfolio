<template>
 <div class="py-4 border-t border-gray-200 dark:border-gray-900 flex flex-col items-center sm:flex-row sm:justify-between px-8">
  <h1 class="font-semibold">&copy; {{currentUser?.firstName}} {{ getYear(currentUser?.created_at) }}</h1>
  <p>All rights reserved</p>
 </div>
</template>

<script>
export default {
data(){
return{
currentUser:{}
}
}, 
mounted(){
  window.emitter.on('current_user',(user_info)=>{
  this.currentUser=user_info
  })
},
methods:{
getYear(date){
const dateObject = new Date(date);
return dateObject.getFullYear();
}
},
}
</script>

<style>

</style>