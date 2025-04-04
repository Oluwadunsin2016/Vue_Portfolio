<template>
  <div id="languages" class="px-4 md:px-6 lg:px-8 py-8">
    <h1 class="text-center text-3xl font-bold">Programming Languages</h1>
    <div v-if="isLoading" class="flex justify-center items-center min-h-[200px]">
  <font-awesome-icon :icon="['fas', 'spinner']" spin class="text-blue-500 text-3xl" />
    </div>
    <div v-else class="flex justify-center items-center flex-wrap gap-6 mt-8 px-4 md:px-6">

     <a v-for="(language,i) in languages" :key="i" :id="getLanguage(language?.name)?.id" :href="getLanguage(language?.name)?.url">
     <Icon :title="language?.name" :color="getLanguage(language?.name)?.color" :size="getLanguage(language?.name)?.size" />
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import userId, { baseURL } from '@/main';
import Icon from './Icon.vue'
export default {
components:{
Icon,
},
data() {
  return {
    languages: [],
    isLoading: true,
  }
},

computed:{

},

mounted(){
 axios
      .get(`${baseURL}getLanguages/${userId}`)
      .then((res) => {
        console.log(res.data);
        if(res.data){
        console.log(this.languages);
         this.languages= res?.data
        }
        this.isLoading= false;
      })
      .catch((err) => {
        console.log(err.message);
        this.isLoading= false;
      });
},
methods: {
getLanguage(name){
if(name=="HTML"){
return {id:name,url:"https://www.w3schools.com/html/html_intro.asp",color:'#E5532D', size:50}
}
else if(name=="CSS"){
return {id:name,url:"https://developer.mozilla.org/en-US/docs/Web/CSS",color:'#0852E9', size:50}
}
else if(name=="Sass"){
return {id:name,url:"https://sass-lang.com/",color:'#C76395', size:50}
}
else if(name=="BootStrap"){
return {id:name,url:"https://getbootstrap.com/",color:'#6F10F4', size:50}
}
else if(name=="TailwindCss"){
return {id:name,url:"https://tailwindcss.com/",color:'#0852E9', size:60}
}
else if(name=="JavaScript"){
return {id:name,url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",color:'#E8D44D', size:50}
}
else if(name=="ReactJs"){
return {id:name,url:"https://react.dev/",size:50,color:'#00D1F7'}
}
else if(name=="Angular"){
return {id:name,url:"https://angular.io/docs",size:50,color:'#DE0837'}
}
else if(name=="NextJs"){
return {id:name,url:"https://nextjs.org/",size:50,color:'#000000'}
}
else if(name=="Flutter"){
return {id:name,url:"https://flutter.dev/",size:50,color:'#2EB2F3'}
}
else if(name=="VueJs"){
return {id:name,url:"https://vuejs.org/",size:50,color:'#47BA87'}
}
else if(name=="Java"){
return {id:name,url:"https://www.java.com/en/",size:50,color:'#37839F'}
}
else if(name=="Svelte"){
return {id:name,url:"https://svelte.dev/",size:50,color:'#F73B00'}
}
else if(name=="Golang"){
return {id:name,url:"https://go.dev/",size:50,color:'#00A6D0'}
}
else if(name=="Gin"){
return {id:name,url:"https://gin-gonic.com/",size:50,color:'#00A6D0'}
}
else if(name=="Firebase"){
return {id:name,url:"https://firebase.google.com/", size:50,color:'#F7C427'}
}
else if(name=="NodeJs"){
return {id:name,url:"https://expressjs.com/",size:100,color:'#5BA74C'}
}
else if(name=="PHP"){
return {id:name,url:"#",size:50,color:'#7277AD'}
}
else if(name=="Laravel"){
return {id:name,url:"https://laravel.com/",size:50,color:'#DE0837'}
}
else if(name=="Django"){
return {id:name,url:"https://www.djangoproject.com/",size:50,color:'#0A2D1F'}
}
else if(name=="Python"){
return {id:name,url:"https://www.python.org/",size:50,color:'#F7E06E'}
}
},
},
};
</script>

<style scoped>
a[id]{
  position: relative;
}
a[id]:hover::after{
  position: absolute;
  content: attr(id);
  background-color: #080420;
  color: white;
  font-size: 15px;
  left: 0;
  top: -30px;
  padding: 5px 10px;
  border-radius: 5px;
}

.b{
color: #cccc07;
}
</style>
