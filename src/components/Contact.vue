<template>
  <div
    id="contact"
    class="px-4 lg:px-8 py-16 bg-slate-100 dark:bg-gray-800 rounded-md"
  >
    <h1 class="text-center font-bold text-3xl">Contact Me</h1>
    <p class="text-center my-3 font-semibold">Got a project? Let's talk</p>

    <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">
      <div class="px-4 md:px-0 col-span-1 sm:col-span-2">
        <h4 class="uppercase font-semibold mt-4">Contact info</h4>
        <ul class="px-2">
          <li class="my-4 flex gap-4 items-center">
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="text-blue-500 text-xl"
            />
            <div>
              <p class="text-gray-600 dark:text-gray-400 font-semibold">
                Talk to me:
              </p>
              <a :href="`mailto:${currentUser?.email}`" class="gmail">{{
                currentUser?.email
              }}</a>
            </div>
          </li>

          <li class="my-4 flex gap-4 items-center">
            <font-awesome-icon
              :icon="['fas', 'phone']"
              class="text-blue-500 text-xl"
            />
            <div>
              <p class="text-gray-600 dark:text-gray-400 font-semibold">
                Call or WhatsApp me:
              </p>
              <a href="tel:`${currentUser.phone_number}`">{{
                currentUser?.phone_number
              }}</a>
              <!-- <a href="tel:+2348168225901">{{currentUser.phone_number}}</a> -->
            </div>
          </li>

          <li class="my-4 flex gap-4 items-center">
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              class="text-blue-500 text-xl"
            />
            <div>
              <p class="text-gray-600 dark:text-gray-400 font-semibold">
                Address:
              </p>
              <a href="#">{{ currentUser?.address }}</a>
            </div>
          </li>
        </ul>

        <div>
          <p class="font-semibold">Follow me:</p>
          <ul class="flex gap-4 my-4">
            <li>
              <a
                id="facebook"
                class=""
                :href="social_information?.facebook"
                ><font-awesome-icon
                  :icon="['fab', 'facebook']"
                  class="text-blue-500 text-xl"
              /></a>
            </li>
            <li>
              <a id="WhatsApp" class="" :href="social_information?.whatsapp"
                ><font-awesome-icon
                  :icon="['fab', 'whatsapp']"
                  class="text-[#49A232] text-xl"
              /></a>
            </li>
            <li>
              <a
                id="instagram"
                :href="social_information?.instagram"
                ><font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="text-blue-500 text-xl"
              /></a>
            </li>
            <!-- <li>
              <a
                id="youtube"
                href="https://youtube.com/@oluwagbemigasundaystephen1738"
                ><font-awesome-icon
                  :icon="['fab', 'youtube']"
                  class="text-red-500 text-xl"
              /></a>
            </li> -->
            <li>
              <a id="twitter" :href="social_information.twitter"
                ><font-awesome-icon
                  :icon="['fab', 'twitter']"
                  class="text-blue-500 text-xl"
              /></a>
            </li>
            <li>
              <a
                id="linkedin"
                :href="social_information?.linkedin"
                ><font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  class="text-blue-500 text-xl"
              /></a>
            </li>
            <li>
              <a id="telegram" :href="social_information?.telegram"
                ><font-awesome-icon
                  :icon="['fab', 'telegram']"
                  class="text-blue-500 text-xl"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <form
        class="px-4 md:px-0 my-4 col-span-1 sm:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4"
        v-on:submit.prevent="submitInformation"
      >
        <div class="">
          <label for="firstname" class="block">First Name</label>
          <input
            type="text"
            name="firstname"
            :class="`border bg-transparent dark:bg-gray-900 dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm ${
              error.firstName ? 'border-red-500':'dark:border-gray-700'
            }`"
            v-model="information.firstName"
          />
          <small class="text-xs text-red-500">{{
            errorMessage.firstName
          }}</small>
        </div>
        <div class="">
          <label for="lastname" class="block">Last Name</label>
          <input
            type="text"
            name="firstname"
            :class="`border bg-transparent dark:bg-gray-900 dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm ${
              error.lastName ? 'border-red-500':'dark:border-gray-700'
            }`"
            v-model="information.lastName"
          />
          <small class="text-xs text-red-500">{{
            errorMessage.lastName
          }}</small>
        </div>
          <div class="">
            <label for="email" class="block">Email Address</label>
            <input
              type="email"
              name="email"
              :class="`border bg-transparent dark:bg-gray-900 dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm ${
                error.email ? 'border-red-500':'dark:border-gray-700'
              }`"
              v-model="information.email"
            />
            <small class="text-xs text-red-500">{{ errorMessage.email }}</small>
          </div>
          <div class="">
            <label for="phone_number" class="block">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              :class="`border bg-transparent dark:bg-gray-900 dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm ${
                error.phone_number ? 'border-red-500':'dark:border-gray-700'
              }`"
              v-model="information.phone_number"
            />
            <small class="text-xs text-red-500">{{
              errorMessage.phone_number
            }}</small>
          </div>
        <div class=" md:col-span-2">
          <label for="subject" class="block">Subject</label>
          <input
            type="text"
            name="subject"
            :class="`border bg-transparent dark:bg-gray-900 dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm ${
              error.subject ? 'border-red-500':'dark:border-gray-700'
            }`"
            v-model="information.subject"
          />
          <small class="text-xs text-red-500">{{ errorMessage.subject }}</small>
        </div>
        <div class=" md:col-span-2">
          <label for="message" class="block">Body</label>
          <textarea
            name="body"
            id=""
            rows="5"
            :class="`border bg-transparent dark:bg-gray-900 dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm ${
              error.body ? 'border-red-500':'dark:border-gray-700'
            }`"
            v-model="information.body"
          ></textarea>
          <small class="text-xs text-red-500">{{ errorMessage.body }}</small>
        </div>
     <div class="flex justify-end md:col-span-2">
        <button
          type="submit"
          class="bg-blue-600 px-4 text-white shadow w-full py-2 sm:w-auto flex items-center justify-center"
        >
        <p v-if="loading" class="flex items-center justify-center">
        <span>Sending</span>
         <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="40px" viewBox="0 0 200 200"><circle fill="#FFF" stroke="#FFF" stroke-width="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.7" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FFF" stroke="#FFF" stroke-width="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.7" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FFF" stroke="#FFF" stroke-width="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.7" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
        </p>
        <span v-else>Send Message</span>
        </button>
     </div>
      </form>
    </div>
    <Alert :alertType="alertType" :showAlert="showAlert" :alertText="message" />
  </div>
</template>

<script>
import axios from "axios";
import userId, { baseURL } from '@/main';
import Alert from './Alert.vue'
export default {
  // name:"Contact"
  components: {
    Alert,
  },
  data() {
    return {
      showAlert:false,
        alertType:'',
        message:'',
        loading:false,
      currentUser: {},
      social_information: {},
      information: {
        firstName: "",
        lastName: "",
        email: "",
        phone_number: "",
        subject: "",
        body: "",
      },
      errorMessage: {
        firstName: "",
        lastName: "",
        email: "",
        phone_number: "",
        subject: "",
        body: "",
      },
      error: {
        firstName: false,
        lastName: false,
        email: false,
        phone_number: false,
        subject: false,
        body: false,
      },
      regex: {
        email: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
        phone_number: /^0[7-9]{1}[0-1]{1}[0-9]{8}$/,
      },
    };
  },
  created() {
    window.emitter.on("current_user", (user_info) => {
      this.currentUser = user_info;
      console.log(this.currentUser);
    });
  axios
        .get(`${baseURL}getSocialInformation/${userId}`)
        .then((res) => {
          console.log(res.data);
          this.social_information=res.data
        })
        .catch((error) => {
          console.log(error.message);
        });
  },
  mounted() {
  },
  methods: {
    //validate first name
    validateFirstName() {
      if (this.information.firstName == "") {
        this.error.firstName = true;
        this.errorMessage.firstName = "First name is required";
      } else if (this.information.firstName.length < 3) {
        this.error.firstName = true;
        this.errorMessage.firstName =
          "First name should be at least three characters";
        this.errorMessage.firstName =
          "First name should be at least three characters";
      } else if (this.information.firstName.length > 15) {
        this.error.firstName = true;
        this.errorMessage.firstName =
          "First name should not be more fifteen characters";
      } else {
        this.error.firstName = false;
        this.errorMessage.firstName = "";
      }
    },

    //validate last name
    validateLastName() {
      if (this.information.lastName == "") {
        this.error.lastName = true;
        this.errorMessage.lastName = "Last name is required";
      } else if (this.information.lastName.length < 3) {
        this.error.lastName = true;
        this.errorMessage.lastName =
          "Last name should be at least three characters";
        this.errorMessage.lastName =
          "Last name should be at least three characters";
      } else if (this.information.lastName.length > 15) {
        this.error.lastName = true;
        this.errorMessage.lastName =
          "Last name should not be more fifteen characters";
      } else {
        this.error.lastName = false;
        this.errorMessage.lastName = "";
      }
    },
    //validate email
    validateEmail() {
      if (this.information.email == "") {
        this.error.email = true;
        this.errorMessage.email = "Email is required";
      } else if (!this.regex.email.test(this.information.email)) {
        this.error.email = true;
        this.errorMessage.email =
          "Email should follow this format: test@gmail.com";
      } else {
        this.error.email = false;
        this.errorMessage.email = "";
      }
    },
    //validate phone_number
    validatePhoneNumber() {
      if (this.information.phone_number == "") {
        this.error.phone_number = true;
        this.errorMessage.phone_number = "Phone number is required";
      } else if (!this.regex.phone_number.test(this.information.phone_number)) {
        this.error.phone_number = true;
        this.errorMessage.phone_number =
          "Phone number should follow this format: 08043786543";
      } else {
        this.error.phone_number = false;
        this.errorMessage.phone_number = "";
      }
    },
    //validate subject
    validateSubject() {
      if (this.information.subject == "") {
        this.error.subject = true;
        this.errorMessage.subject = "Subject is required";
      }else {
        this.error.subject = false;
        this.errorMessage.subject = "";
      }
    },

    //validate body
    validateBody() {
      if (this.information.body == "") {
        this.error.body = true;
        this.errorMessage.body = "Body is required";
      }else {
        this.error.body = false;
        this.errorMessage.body = "";
      }
    },

    //Sending Email
    submitInformation() {
      this.validateFirstName()
      this.validateLastName()
      this.validateEmail()
      this.validatePhoneNumber()
      this.validateSubject()
      this.validateBody()
      if (Object.values(this.error).every(value=>value==false)) {
      console.log(this.information)
      this.loading=true
      axios
        .post(`${baseURL}sendMail/${userId}`, this.information)
        .then((res) => {
          console.log(res);
          this.loading=false
              if(!res.data.error){
           this.currentUser=res.data.user
           this.message=res.data.message
           this.information={
        firstName: "",
        lastName: "",
        email: "",
        phone_number: "",
        subject: "",
        body: "",
      }
      this.alertType='success'
        this.showAlert=true
      setTimeout(()=>{
      this.showAlert=false
      },2000)
          }else{
            this.message=res.data.message
      this.alertType='error'
        this.showAlert=true
      setTimeout(()=>{
      this.showAlert=false
      },2000)
          }
        })
        .catch((error) => {
        this.loading=false
          console.log(error.message);
        });
      }
    },
  },
};
</script>

<style scoped>
a[id] {
  position: relative;
}
a[id]:hover::after,
a[id]:focus::after {
  position: absolute;
  content: attr(id);
  background-color: #080420;
  color: white;
  font-size: 15px;
  left: 0;
  top: -40px;
  padding: 5px 10px;
  border-radius: 5px;
  z-index: 99;
}

.gmail {
  word-break: break-all;
}
</style>
