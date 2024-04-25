<template>
<div id="services" class="px-4 lg:px-8 py-16">
<h1 class="text-center text-3xl font-bold mb-4">Services</h1>
  <div class=" flex flex-col md:flex-row gap-10 items-center justify-center">
    <div class="flex gap-2 shadow-lg p-4 rounded-md bg-yellow-50 shadow-yellow-200 dark:bg-gray-700 dark:shadow-gray-800">
      <font-awesome-icon
        :icon="['fas', 'clock']"
        class="text-yellow-500 text-xl"
      />
      <p class="text-sm font-bold">In Time Projects</p>
    </div>

    <div class="flex flex-col sm:flex-row gap-5 items-center">
      <div class="flex flex-col items-center">
        <h1 class="period font-bold">{{expertise_information.year_of_experience}}</h1>
        <p class="font-bold">Years of Experience</p>
      </div>
      <div class="flex flex-col items-center">
        <h1 class="period font-bold">{{expertise_information.number_of_projects}}</h1>
        <p class="font-bold">Projects completed</p>
      </div>
      <div class="flex flex-col items-center">
        <h1 class="period font-bold">{{expertise_information.number_of_clients}}</h1>
        <p class="font-bold">Happy Clients</p>
      </div>
    </div>

    <div class="flex gap-2 shadow-lg p-4 rounded-md bg-yellow-50 shadow-yellow-200 dark:bg-gray-700 dark:shadow-gray-800">
      <font-awesome-icon
        :icon="['fas', 'check-circle']"
        class="text-blue-500 text-xl"
      />
      <p class="text-sm font-bold">Projects Done</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "services",
  data() {
    return {
      expertise_information: ''
    }
  },

  mounted(){
    window.emitter.on('expertiseInformation',(info)=>{
  this.expertise_information=info;
  })
  }
};
</script>

<style scoped>
.period{
font-size: 3rem !important;
}
</style>
