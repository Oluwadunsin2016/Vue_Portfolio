<template>
  <div
    class="my-10 px-4 mt-12 lg:px-8 py-[3rem] md:flex flex-row-reverse shadow bg-slate-100 dark:bg-gray-800 dark:shadow-gray-850"
    id="home"
  >
  <ProfileImage :profilePicture="currentUser?.profileImage??defaultImage" />
    <div class="w-full md:w-[80%] lg:w-[60%] mt-4 md:mx-10 px-5">
      <p class="font-semibold text-2xl">
        Hi, I'm <span class="text-blue-500">{{currentUser?.lastName}}</span>
      </p>
      <h1 id="writer" class="text-3xl font-bold my-2"></h1>
      <p class="my-4 text-lg">
        I have a great passion for working with wonderful team in creating beautiful, intuitive, and accessible experiences. Find some of my projects below.
      </p>

      <div class="flex justify-center md:justify-start gap-10 mt-10">
      <a href="https://meet.google.com/" class="bg-blue-500 rounded text-white py-2 px-4 hover:bg-blue-700">Book a Meeting</a>
      <button @click="downloadCV" class="border-2 border-blue-700 rounded py-2 px-4 hover:bg-blue-700 hover:text-white">Download CV</button>
      </div>   
    </div>
  </div>
  <Loader/>
  <Alert :alertType="alertType" :showAlert="showAlert" :alertText="message" />
</template>

<script>

import Typewriter from 'typewriter-effect/dist/core';
import defaultImage from "../assets/images/defaultImg.jpg";
import ProfileImage from './ProfileImage.vue';
import Alert from './Alert.vue'
import axios from 'axios';
import Loader from "./Loader.vue";
import { watch } from 'vue';
import userId, { baseURL } from '@/main';
export default {
  name: "Hero",
  components:{
  ProfileImage,
  Alert,
      Loader,
  },
  data() {
    return {
     showAlert:false,
        alertType:'',
        message:'',
      specializations:[],
      currentUser: {},
      defaultImage,
    };
  },
  mounted(){
   window.emitter.emit("changeLoaderStatus", true);
     watch(this.specializations,()=>{
     console.log(this.currentUser);
const write=document.getElementById('writer')
new Typewriter(write, {
  strings: this.specializations,
  autoStart: true,
  loop: true,
});
  })


    axios
      .get(`${baseURL}getCurrentUser/${userId}`)
      .then((res) => {
      window.emitter.emit('current_user',res.data)
      console.log(res.data);
        this.currentUser = res.data;
       window.emitter.emit("changeLoaderStatus", false);
      })
      .catch((err) => {
        console.log(err.message);
      });


// Getting area of specializations
    axios
      .get(`${baseURL}getWorkInformation/${userId}`)
      .then((res) => {
      window.emitter.emit('work_information',res.data)
      console.log(res.data);
      window.emitter.emit('specializations',res.data)
res.data.forEach(specialization => {
  this.specializations.push(specialization.professional)
});
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  // computed: {
  //   downloadCV() {
  //   return `${baseURL}download-pdf/${userId}`
  //   },
  // },

  methods: {
    downloadCV() {
    axios.get(`${baseURL}download-pdf/${this.user.userId}`).then(res=>{
    console.log(res);
    }).catch((error) => {
          console.log(error);
          if (error.response.data.message) { 
            this.message=error.response.data.message
      this.alertType='error'
        this.showAlert=true
      setTimeout(()=>{
      this.showAlert=false
      },2000)
          }
        });
    },
  },
};
</script>

<style scoped>

</style>
