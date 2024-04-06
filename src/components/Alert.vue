<template>
  <div v-if="showAlert" :class="`fixed top-20 text-gray-200 ${bgColor} right-5  p-4 rounded slideIn`">
      <p class="flex items-center gap-1"><font-awesome-icon class="text-lg" :icon="icon" /> {{alertText}}</p>
      </div>
</template>

<script>
export default {
name:'Alert',
props:{
showAlert:Boolean,
alertText:String,
alertType:String,
},
computed:{
bgColor(){
if (this.alertType=='error') {
    return 'bg-red-500'
} 
else if(this.alertType=='success') {
    return 'bg-green-500'   
}
else if(this.alertType=='warning') {
    return 'bg-yellow-500'   
}
},
icon(){
if (this.alertType=='error') {
    return ['fas', 'circle-exclamation']
} 
else if(this.alertType=='success') {
    return ['fas', 'circle-check']
}
else if(this.alertType=='warning') {
    return ['fas', 'triangle-exclamation']
}

}
}
}
</script>

<style scoped>
.slideIn {
  animation: slideIn 0.3s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    right: -5rem;
  }
  to {
    opacity: 1;
    right: 1.25rem;
  }
}
</style>