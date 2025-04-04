<template>
  <div
    class="my-10 px-4 mt-12 lg:px-8 py-[3rem] md:flex flex-row-reverse shadow bg-slate-100 dark:bg-gray-800 dark:shadow-gray-850"
    id="home"
  >
    <ProfileImage :profilePicture="currentUser?.profileImage ?? defaultImage" />
    
    <div class="w-full md:w-[80%] lg:w-[60%] mt-4 md:mx-10 px-5">
      <p class="font-semibold text-2xl">
        Hi, I'm <span class="text-blue-500">{{ currentUser?.firstName }}</span>
      </p>

      <!-- Skeleton Loader for Typewriter Text -->
      <h1 id="writer" class="text-3xl font-bold my-2"></h1>
      <h1 v-if="loading" class="text-3xl font-bold my-2 bg-gray-300 dark:bg-gray-600 h-8 w-full rounded-md animate-pulse"></h1>

      <!-- Skeleton Loader for Paragraph -->
      <p v-if="loading" class="my-4 text-lg">
        <span class="block bg-gray-300 dark:bg-gray-600 h-5 w-full rounded-md animate-pulse"></span>
        <span class="block bg-gray-300 dark:bg-gray-600 h-5 w-4/5 rounded-md animate-pulse mt-2"></span>
      </p>
      <p v-else class="my-4 text-lg">
        I have a great passion for working with a wonderful team in creating beautiful, intuitive, and accessible experiences. Find some of my projects below.
      </p>

      <!-- Skeleton Loader for Buttons -->
      <div class="flex justify-center md:justify-start gap-10 mt-10">
        <a v-if="!loading" href="https://meet.google.com/" class="bg-blue-500 rounded text-white py-2 px-4 hover:bg-blue-700">
          Book a Meeting
        </a>
        <span v-else class="bg-gray-300 dark:bg-gray-600 h-10 w-40 rounded-md animate-pulse"></span>

        <a v-if="!loading" :href="downloadCV" @click="handleClick" class="border-2 border-blue-700 rounded py-2 px-4 hover:bg-blue-700 hover:text-white">
          Download CV
        </a>
        <span v-else class="bg-gray-300 dark:bg-gray-600 h-10 w-40 rounded-md animate-pulse"></span>
      </div>
    </div>
  </div>

  <Alert :alertType="alertType" :showAlert="showAlert" :alertText="message" />
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";
import defaultImage from "../assets/images/defaultImg.jpg";
import ProfileImage from "./ProfileImage.vue";
import Alert from "./Alert.vue";
import axios from "axios";
import { watch } from "vue";
import userId, { baseURL } from "@/main";

export default {
  name: "Hero",
  components: {
    ProfileImage,
    Alert,
  },
  data() {
    return {
      showAlert: false,
      alertType: "",
      message: "",
      specializations: [],
      currentUser: null, // Change to null to check for loading
      loading: true, // Added loading state
      defaultImage,
    };
  },
  mounted() {
    if (window.emitter.userData) {
      this.currentUser = window.emitter.userData;
      console.log("Fetched from cached emitter:", this.currentUser);
    }

    window.emitter.on("current_user", (user_info) => {
      console.log("current_user received:", user_info);
      this.currentUser = user_info;
    });

    watch(this.specializations, () => {
      if (this.specializations.length > 0) {
        const write = document.getElementById("writer");
        new Typewriter(write, {
          strings: this.specializations,
          autoStart: true,
          loop: true,
        });
      }
    });

    // Getting area of specializations
//     axios
//       .get(`${baseURL}getWorkInformation/${userId}`)
//       .then((res) => {
//       window.emitter.emit('work_information',res.data)
//       console.log(res.data);
//       window.emitter.emit('specializations',res.data)
//       this.specializations = JSON.parse(JSON.stringify(res.data.map(specialization => specialization.professional)));

    
//     // Ensure Typewriter initializes once data is available
//     this.initTypewriter();
// console.log(this.specializations)
// this.loading=false
// })
// .catch((err) => {
//   console.log(err.message);
//   this.loading=false
//       })

axios
.get(`${baseURL}getWorkInformation/${userId}`)
.then((res) => {
  window.emitter.emit('work_information',res.data)
  console.log(res.data);
  window.emitter.emit('specializations',res.data)
  res.data.forEach(specialization => {
    this.specializations.push(specialization.professional)
  });
  console.log(this.specializations);
  
  this.loading=false
})
.catch((err) => {
  console.log(err.message);
    this.loading=false
      });
  },
  computed: {
    downloadCV() {
      if (!this.currentUser?.cv_URL) {
        return "#";
      } else {
        return `${baseURL}download-pdf/${userId}`;
      }
    },
  },
  methods: {
    handleClick() {
      if (!this.currentUser?.cv_URL) {
        this.message = "User doesn't have a CV yet";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 2000);
      }
    },

    initTypewriter() {
    if (this.specializations.length > 0) {
      const writerElement = document.getElementById('writer');
      new Typewriter(writerElement, {
        strings: this.specializations,
        autoStart: true,
        loop: true,
      });
    }
  }
  },
};
</script>
