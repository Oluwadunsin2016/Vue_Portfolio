<template>
  <div id="about" class="px-6 lg:px-8 py-8 shadow bg-slate-100 dark:bg-gray-800 dark:shadow-gray-850">
    <h1 class="text-3xl my-3 text-center font-bold">About Me</h1>
    <div class="px-4 md:px-10 md:grid grid-cols-8 gap-4">
      <div v-if="yearOfExperience" class="col-span-2 flex items-center md:flex-col gap-5">
        <h1 class="text-9xl font-bold m-0">{{ yearOfExperience }}</h1>
        <p class="text-xl font-bold m-0">
          Years <br />
          Working <br />
          Experience
        </p>
      </div>
      <div v-else class="animate-pulse col-span-2 flex items-center md:flex-col gap-5 my-4 md:my-0">
        <div class="h-[6rem] w-[5rem] md:h-[8rem] md:w-[9rem] rounded bg-gray-300 dark:bg-gray-700"></div>
        <div class="space-y-3">
          <div class="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div class="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div class="h-6 w-28 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      <div class="col-span-6">
        <p>
          {{currentUser.self_description}}
        </p>

        <p class="font-bold my-4"><a :href="`mailto:${currentUser.email}`">{{ currentUser.email }}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import userId, { baseURL } from '@/main';
import axios from 'axios';


export default {
  name: "About",
  data() {
    return {
      currentUser: {},
      yearOfExperience: '',
      isloading: true
    }
  },
  created(){
},
  mounted() {
    if (window.emitter.userData) {
    this.currentUser = window.emitter.userData;
    console.log("Fetched from cached emitter:", this.currentUser);
  }

  // 2. Listen for current_user in case it comes after
  window.emitter.on('current_user', (user_info) => {
    console.log('current_user received:', user_info);
    this.currentUser = user_info;
  });
   axios
      .get(`${baseURL}getExpertiseInformation/${userId}`)
      .then((res) => {
        console.log(res.data);
        this.yearOfExperience= res?.data.year_of_experience
        window.emitter.emit('expertiseInformation',res.data)
        console.log(this.yearOfExperience);
        this.isloading = false;
      })
      .catch((err) => {
        console.log(err.message);
        this.isloading = false;
      });
  },
};
</script>

<style scope>
</style>
