<template>
 <transition name="imgView">
  <ProjectDetail v-if="show" :detail="projectDetail" :closeModal="closeModal" />
      </transition>
  <div
    id="projects"
    class="px-6 lg:px-8 my-10 py-6 shadow-md bg-slate-100 dark:bg-gray-800 dark:shadow-gray-850"
  >
    <h1 class="text-center text-3xl font-bold">Projects</h1>
    <p class="text-gray-500 dark:text-gray-300 my-2 text-center">
      I seek to push the limits of creativity to create high engaging,
      user-friendly and memorable interactive experiences
    </p>
    <div class="projectTitle px-6 border-b border-gray-200 flex gap-6 md:justify-center items-center overflow-x-scroll my-5">
      <a
        @click="setLocation('All')"
        :class="`cursor-pointer shrink-0 border-b-2 border-transparent px-2 pb-4 text-sm font-medium ${
          currentLocation == 'All'
            ? 'text-sky-500 border-sky-600'
            : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-500 hover:border-gray-300 dark:hover:border-gray-200'
        }`"
      >
        All
      </a>
      <a
        v-for="(specialization, index) in specializations"
        :key="index"
        @click="setLocation(specialization)"
        :class="`cursor-pointer shrink-0 border-b-2 px-2 pb-4 text-sm font-medium ${
          currentLocation == specialization
            ? 'text-sky-500 border-sky-600'
            : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-500 border-transparent hover:border-gray-300 dark:hover:border-gray-200'
        }`"
      >
        {{ specialization }}
      </a>
    </div>

    <div class="px-5 overflow-x-hidden">
      <transition-group tag="div" name="projects" mode="out-in">
    <div
      class="my-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3"
      v-if="currentLocation == 'All'"
    >
      <div
         v-for="(project, index) in selectedProjects"
          :key="index"
          class="relative group h-[16rem] overflow-hidden rounded-lg col-span-1 cursor-pointer shadow-md dark:shadow-gray-700"
          @click="showDetail(project)"
      >
         <img
            :src="`${projectDir}${project.image}`"
            :alt="project.title"
            class="w-full h-full rounded-lg transform transition-transform ease-in-out duration-500 group-hover:scale-110"
          />
          <div
            class="absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-lg"
          >
            <h4
              class="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:translate-y-0 duration-500 text-white right-0 bg-red-600/70 inline-block px-4 py-2 rounded-md font-bold"
            >
              {{ project.title }}
            </h4>
          </div>
      </div>
    </div>  
  </transition-group>

    <transition-group tag='div' v-for="(specialization, index) in specializations"
      :key="index"  name="projects" mode="out-in">
    <div
      class="my-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3"
      v-if="currentLocation == specialization"
    >
      <div
         v-for="(project, index) in selectedProjects"
          :key="index"
          class="relative group h-[16rem] overflow-hidden rounded-lg col-span-1 cursor-pointer shadow-md dark:shadow-gray-700"
          @click="showDetail(project)"
      >
        <img
            :src="`${projectDir}${project.image}`"
            :alt="project.title"
            class="w-full h-full rounded-lg transform transition-transform ease-in-out duration-500 group-hover:scale-110"
          />
          <div
            class="absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-lg"
          >
            <h4
              class="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:translate-y-0 duration-500 text-white right-0 bg-red-600/70 inline-block px-4 py-2 rounded-md font-bold"
            >
              {{ project.title }}
            </h4>
          </div>
      </div>
    </div>
  </transition-group>
        <transition tag="div" name="projects" class="min-h-[22rem] flex items-center justify-center" v-if="selectedProjects.length < 1">
          <h4>There is no project in this category yet</h4>
        </transition>
    </div>
  </div>
</template>

<script>
// import Printivo from "../assets/images/projects/printivo.png";
// import SLA from "../assets/images/projects/SLA.png";
// import University from "../assets/images/projects/University.png";
// import fitness from "../assets/images/projects/fitness.png";
// import tic_tac_toe from "../assets/images/projects/tic_tac_toe.png";
// import netflix from "../assets/images/projects/netflix.png";
// import gallery from "../assets/images/projects/gallery.png";
// import ecommerce from "../assets/images/projects/ecommerce.png";
// import chatApp from "../assets/images/projects/chatApp.png";
// import Open_door from "../assets/images/graphics/Open_door.jpeg";
// import Prayer from "../assets/images/graphics/Prayer.jpeg";
// import Raph from "../assets/images/graphics/EQ2.jpg";
// import orange from "../assets/images/graphics/orange.jpg";
import ProjectDetail from "./ProjectDetail.vue";
import axios from "axios";
import { baseURL, projectDir, userId } from "../main";

export default {
  name: "Projects",
  components: {
    ProjectDetail,
  },
  data() {
    return {
      projectDir,
      projectDetail: {},
      currentLocation: "All",
      selectedProjects: [],
      specializations: [],
      show: false,
      swiper: null,
      projects: [],
      // projects: [
      //   {
      //     id: "Design1",
      //     category: "web",
      //     title: "printivo",
      //     image: Printivo,
      //     description: `It is a simple printivo front page design. Built with HTML and CSS`,
      //     web_link: "https://printivo-xi.vercel.app/",
      //     github_link: "https://github.com/Oluwadunsin2016/Printivo",
      //   },
      //   {
      //     id: "Design2",
      //     category: "web",
      //     title: "She Leads Africa",
      //     image: SLA,
      //     description: `It is a simple SLA front page design. Built with HTML and CSS`,
      //     web_link: "https://level-one-test-bice.vercel.app/",
      //     github_link: "https://github.com/Oluwadunsin2016/LevelOne_Test",
      //   },
      //   {
      //     id: "Design3",
      //     category: "web",
      //     title: "Biggest University",
      //     image: University,
      //     description: `A simple University web design with animation. Built with HTML, CSS and wow js`,
      //     web_link: "https://university-website-design-css.vercel.app/",
      //     github_link:
      //       "https://github.com/Oluwadunsin2016/University-Website-design-css",
      //   },
      //   {
      //     id: "Design4",
      //     category: "web",
      //     title: "Fitness",
      //     image: fitness,
      //     description: `A simple Fitness web design with animation. Built with HTML, CSS and wow js`,
      //     web_link: "https://fitness-css.vercel.app/",
      //     github_link: "https://github.com/Oluwadunsin2016/fitness-css",
      //   },
      //   {
      //     id: "game",
      //     category: "web",
      //     title: "TIC TAC TOE",
      //     image: tic_tac_toe,
      //     description: `A lovable tic tac toe game. Built with HTML, CSS and JavaScript`,
      //     web_link: "https://my-tictactoe-game.vercel.app/",
      //     github_link: "https://github.com/Oluwadunsin2016/my-tictactoe-game",
      //   },
      //   {
      //     id: "movieApp",
      //     category: "web",
      //     title: "Netflix",
      //     image: netflix,
      //     description: `A clone of netlix application where you can watch the latest movie. Built with React Js and tailwind CSS`,
      //     web_link: "https://netflix-2-woad.vercel.app/",
      //     github_link: "https://github.com/Oluwadunsin2016/Netflix_2",
      //   },
      //   {
      //     id: "photo",
      //     category: "web",
      //     title: "Gallery",
      //     image: gallery,
      //     description: `A photo gallery application that allows you to save and view your pictures so that you won't loose them. Built with React Js and tailwind CSS`,
      //     web_link: "https://gallery-gamma-three.vercel.app/",
      //     github_link: "https://github.com/Oluwadunsin2016/Gallery",
      //   },
      //   {
      //     id: "ecommerce",
      //     category: "web",
      //     title: "ALEXISCOM",
      //     image: ecommerce,
      //     description: `AlexisCom provides you with the latest products with cheapest prices, shop with them and enjoy the benefits. No regrets. Built with React Js`,
      //     web_link: "https://alexiscom.netlify.app/",
      //     github_link: "https://github.com/Oluwadunsin2016/Alexiscom_client",
      //   },
      //   {
      //     id: "chatApp",
      //     category: "web",
      //     title: "Let's Discuss",
      //     image: chatApp,
      //     description: `Let's Discuss allows you to chat with your friends and loved ones in real time without obstruction. Try it, you will love it. Built with React Js and Node Js.`,
      //     web_link: "https://discuss-with-me.netlify.app/",
      //     github_link: "https://github.com/Oluwadunsin2016/Let_us_Discuss",
      //   },
      //   {
      //     id: "door",
      //     category: "graphics",
      //     title: "Open Door",
      //     image: Open_door,
      //   },
      //   {
      //     id: "raph",
      //     category: "graphics",
      //     title: "Worrior",
      //     image: Raph,
      //   },
      //   {
      //     id: "prayer",
      //     category: "graphics",
      //     title: "Prayer",
      //     image: Prayer,
      //   },
      //   {
      //     id: "orange",
      //     category: "graphics",
      //     title: "Cut Orange",
      //     image: orange,
      //   },
      // ],
    };
  },
  created() {
    window.emitter.on("specializations", (specializations) => {
      const result = specializations;
      console.log(result);
      result.forEach((specialization) => {
        this.specializations.push(specialization.profession);
      });
    });
    axios
      .get(`${baseURL}getProjects/${userId}`)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          this.projects = res.data;
          this.selectedProjects = this.projects;
        }, 200);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  mounted() {
    this.setLocation("All");
  },
  methods: {
    showDetail(project) {
      if (project.category == "Web Development") {
        this.projectDetail = project;
        this.show = true;
      } else {
        window.location.href = projectDir + project?.image;
      }
    },


    closeModal() {
      this.show = false;
    },
    setLocation(location) {
      this.currentLocation = location;
      if (location == "All") {
        this.selectedProjects = this.projects;
      } else {
        this.selectedProjects = this.projects.filter(
          (project) => project.category == location
        );
      }
    },
  },
};
</script>

<style>
.projects-enter-from {
  transform: translateX(200px);
  opacity: 0;
}
.projects-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
.projects-enter-active,
.projects-leave-active {
  transition: all 0.2s ease;
}


.imgView-enter-from,.imgView-leave-to{
opacity:0;
transform:scale(0.1)
}

.imgView-enter-active,.imgView-leave-active{
transition:all 0.3s ease
}

.projectTitle::-webkit-scrollbar{
height:0
}
</style>
