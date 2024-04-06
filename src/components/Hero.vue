<template>
  <div
    class="my-10 px-6 mt-12 lg:px-8 py-[3rem] md:flex flex-row-reverse shadow bg-slate-100 dark:bg-gray-800 dark:shadow-gray-850"
    id="home"
  >
  <!-- <Slider/> -->
  <ProfileImage :profilePicture="profileImage" />
    <!-- <div class="md:mx-10"> -->
    <!-- <div class="myImage mx-auto"> -->
      <!-- <img
        :src="profileImage"
        alt="Profile_Image"
        width="400"
        class="mx-auto rounded-md"
      /> -->
    <!-- </div> -->
    <!-- </div> -->
    <div class="w-full md:w-[80%] lg:w-[60%] mt-4 md:mx-10 px-5">
      <p class="font-semibold text-xl">
        Hi, I'm <span class="text-blue-700">{{currentUser?.lastName}}</span>
      </p>
      <h1 id="writer" class="text-3xl font-bold my-2"></h1>
      <p class="my-4 text-lg">
        I have a great passion for working with wonderful team in creating beautiful, intuitive, and accessible experiences. Find some of my projects below.
      </p>

      <div class="flex gap-10 mt-10">
      <a href="https://meet.google.com/" class="bg-blue-500 rounded text-white py-2 px-4 hover:bg-blue-700">Book a Meeting</a>
      <a :href="downloadCV" class="border-2 border-blue-700 rounded py-2 px-4 hover:bg-blue-700 hover:text-white">Download CV</a>
      </div>   
    </div>
  </div>
  <Loader/>
</template>

<script>

import Typewriter from 'typewriter-effect/dist/core';
// import profileImage from "../assets/images/Untitled design (1).png";
// import my_cv from '../assets/cv/Steven.pdf'
import ProfileImage from './ProfileImage.vue';
import Slider from './Slider.vue';
import axios from 'axios';
import Loader from "./Loader.vue";
import { watch } from 'vue';
import { baseURL, profileDir, userId } from '@/main';
export default {
  name: "Hero",
  components:{
  ProfileImage,
      Slider,
      Loader,
  },
  data() {
    return {
      profileImage:'',
      specializations:[],
      currentUser: {},
      // my_cv,
    };
  },
  computed: {
    // myProfileImage() {
    // console.log(`${profileDir}${this.currentUser?.profileImage}`);
    //   return `${profileDir}${this.currentUser?.profileImage}` 
    // },
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
        this.profileImage =`${profileDir}${res.data?.profileImage}` 
        console.log(this.profileImage);
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
  computed: {
    downloadCV() {
    return `${baseURL}download-pdf/${userId}`
    },
  },

  methods: {
    name() {
      
    },
  },
};
</script>

<style scoped>

</style>
