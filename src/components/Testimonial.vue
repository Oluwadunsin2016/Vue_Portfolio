<template>
    <section class="py-12 mb-10 bg-slate-100 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">Testimonials</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feedback from professionals worldwide
          </p>
        </div>
  
        <div class="relative">
          <!-- Left Chevron -->
          <button 
            @click="prevSlide"
            :disabled="currentIndex === 0"
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/40 dark:bg-blue-700/40 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-blue-600/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
  
          <!-- Slider Container -->
          <div 
            ref="slider"
            class="overflow-hidden"
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd"
          >
            <div 
              class="flex transition-transform duration-300 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * slidePercentage}%)` }"
            >
              <div 
                v-for="(testimonial, index) in testimonials" 
                :key="index"
                class="flex-shrink-0 px-2"
                :class="isMobile ? 'w-full' : 'w-1/2'"
              >
                <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md h-full">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100 dark:border-gray-600">
                      <img 
                        :src="testimonial.avatar" 
                        :alt="testimonial.name"
                        class="w-full h-full object-cover"
                      >
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800 dark:text-white">{{ testimonial.name }}</h3>
                      <p class="text-xs text-gray-400">{{ testimonial.position }}, {{ testimonial.location }}</p>
                    </div>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 mb-4 italic">"{{ testimonial.content }}"</p>
                  <div class="flex text-yellow-400">
                    <span v-for="i in 5" :key="i">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-4 w-4" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        :class="{'text-gray-300 dark:text-gray-500': i > testimonial.rating}"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Right Chevron -->
          <button 
            @click="nextSlide"
            :disabled="isAtEnd"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/40 dark:bg-blue-700/40 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-blue-600/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
  
        <!-- Dot Indicators -->
        <div class="flex justify-center mt-8 space-x-2">
          <button 
            v-for="(_, index) in totalSlides" 
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-colors"
            :class="currentSlideGroup === index ? 'bg-blue-600 w-6' : 'bg-gray-300 dark:bg-gray-600'"
            aria-label="Go to testimonial"
          ></button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentUser: {},
        currentIndex: 0,
        touchStartX: 0,
        touchEndX: 0,
        isMobile: window.innerWidth < 768,
        testimonials: []
      };
    },
    computed: {
        processedTestimonials() {
  const firstName = this.currentUser?.firstName || 'this developer';
  const fullName = this.currentUser?.firstName && this.currentUser?.lastName 
    ? `${this.currentUser.firstName} ${this.currentUser.lastName}` 
    : 'this developer';
  
  // Determine pronoun based on user's gender if available, or default to 'they'
  const pronoun = this.currentUser?.gender === 'female' ? 'she' : 
                 this.currentUser?.gender === 'male' ? 'he' : 'they';
  const possessive = this.currentUser?.gender === 'female' ? 'her' : 
                    this.currentUser?.gender === 'male' ? 'his' : 'their';

  return [
    // Nigerian testimonials
    {
      name: "Adebayo Ogunlesi",
      position: "CEO",
      location: "Lagos, Nigeria",
      content: `The Vue applications developed by ${firstName} were exceptional in performance and user experience. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} delivered ahead of schedule with excellent communication throughout.`,
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Amina Mohammed",
      position: "UX Designer",
      location: "Kano, Nigeria",
      content: `${firstName} implemented our designs pixel-perfectly while suggesting technical improvements we hadn't considered. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} is a true professional.`,
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      name: "Chinedu Okoro",
      position: "CTO",
      location: "Abuja, Nigeria",
      content: `Rare to find someone like ${firstName} with such attention to detail and clean code practices. ${possessive.charAt(0).toUpperCase() + possessive.slice(1)} work improved our application's performance dramatically.`,
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Funke Adebayo",
      position: "Marketing Director",
      location: "Ibadan, Nigeria",
      content: `Our website redesign by ${fullName} resulted in a 40% increase in conversions. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} understood our business goals perfectly.`,
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/30.jpg"
    },
    {
      name: "Ngozi Eze",
      position: "Product Owner",
      location: "Port Harcourt, Nigeria",
      content: `${firstName} is the most reliable developer I've worked with. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} met every deadline and proactively suggested improvements to our workflow.`,
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/72.jpg"
    },
    // International testimonials
    {
      name: "Sarah Johnson",
      position: "Product Manager",
      location: "New York, USA",
      content: `Working with ${fullName} was transformative for our project. ${possessive.charAt(0).toUpperCase() + possessive.slice(1)} technical expertise and problem-solving skills are truly top-notch.`,
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Schmidt",
      position: "Lead Developer",
      location: "Berlin, Germany",
      content: `${firstName} collaborated seamlessly with our international team across time zones. ${possessive.charAt(0).toUpperCase() + possessive.slice(1)} code quality and documentation were impeccable.`,
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "James Wilson",
      position: "Director",
      location: "London, UK",
      content: `${fullName} exceeded all expectations on our complex project. ${possessive.charAt(0).toUpperCase() + possessive.slice(1)} architecture decisions have served us well as we've scaled.`,
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      name: "Pierre Dubois",
      position: "Founder",
      location: "Paris, France",
      content: `${firstName} combines technical skills with business acumen. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} delivered exactly what we needed, even when our requirements changed mid-project.`,
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      name: "David Kim",
      position: "Engineering Manager",
      location: "Seoul, South Korea",
      content: `${fullName} integrated perfectly with our agile team. The Vue components ${pronoun} created are now part of our core design system.`,
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/61.jpg"
    }
  ];
},

      slidePercentage() {
        return this.isMobile ? 100 : 50;
      },
      isAtEnd() {
        if (this.isMobile) {
          return this.currentIndex >= this.testimonials.length - 1;
        }
        return this.currentIndex >= this.testimonials.length - 2;
      },
      totalSlides() {
        if (this.isMobile) {
          return this.testimonials.length;
        }
        return Math.ceil(this.testimonials.length / 2);
      },
      currentSlideGroup() {
        if (this.isMobile) {
          return this.currentIndex;
        }
        return Math.floor(this.currentIndex / 2);
      }
    },
    watch: {
    currentUser: {
      immediate: true,
      handler(newVal) {
        // Update testimonials when currentUser changes
        this.testimonials = this.processedTestimonials;
      }
    }
  },
    methods: {
      nextSlide() {
        const increment = this.isMobile ? 1 : 2;
        if (!this.isAtEnd) {
          this.currentIndex = Math.min(this.currentIndex + increment, this.testimonials.length - (this.isMobile ? 1 : 2));
        }
      },
      prevSlide() {
        const decrement = this.isMobile ? 1 : 2;
        if (this.currentIndex > 0) {
          this.currentIndex = Math.max(0, this.currentIndex - decrement);
        }
      },
      goToSlide(index) {
        this.currentIndex = this.isMobile ? index : index * 2;
      },
      touchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
      },
      touchMove(e) {
        this.touchEndX = e.changedTouches[0].screenX;
      },
      touchEnd() {
        if (this.touchStartX - this.touchEndX > 50) {
          this.nextSlide(); // Swipe left
        } else if (this.touchEndX - this.touchStartX > 50) {
          this.prevSlide(); // Swipe right
        }
      },
      handleResize() {
        this.isMobile = window.innerWidth < 768;
        // Reset to first slide when switching between mobile/desktop
        this.currentIndex = 0;
      }
    },
    mounted() {
        if (window.emitter.userData) {
    this.currentUser = window.emitter.userData;
    console.log("Fetched from cached emitter:", this.currentUser);
  }

  // 2. Listen for current_user in case it comes after
  window.emitter.on('current_user', (user_info) => {
    console.log('current_user received:', user_info);
    this.currentUser = {...user_info,gender:'male'};
  });

      window.addEventListener('resize', this.handleResize);
      this.testimonials = this.processedTestimonials;
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    }
  };
  </script>
  
  <style scoped>
  /* Smooth transitions for the slider */
  .transition-transform {
    transition-property: transform;
  }
  .duration-300 {
    transition-duration: 300ms;
  }
  .ease-in-out {
    transition-timing-function: ease-in-out;
  }
  </style>