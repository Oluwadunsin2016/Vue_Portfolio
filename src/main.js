import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowUpRightFromSquare, faBars, faCheckCircle, faCircleCheck, faCircleExclamation, faClock, faEnvelope, faLocationDot, faPhone, faTriangleExclamation, faX } from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue'
import App from './App.vue'
// import { MotionPlugin } from '@vueuse/motion';
import { faAngular, faCss3, faFacebook, faHtml5, faInstagram, faJs, faLinkedin, faReact, faTelegram, faTwitter, faWhatsapp, faYoutube, faNode, faPhp, faLaravel, faVuejs, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { TinyEmitter } from 'tiny-emitter';
const app=createApp(App);

// local directory
// export const baseURL='http://127.0.0.1:8000/api/'


// Remote directory
// export const baseURL='https://porfolio-server-production.up.railway.app/api/'
export const baseURL='https://porfolio-server-dnqn.onrender.com/api/'

// // Get the current URL
const currentUrl = window.location.href;

// // Split the URL by '/'
const urlParts = currentUrl.split('/');

// // Get the last part of the URL which should be '1'
const value = urlParts[urlParts.length - 1];

let userId;
console.log(currentUrl);
console.log(urlParts);
if(value.includes('#')){
userId=value.split("#")[0]
}else{
userId=value
}
console.log(userId);
export default userId

window.emitter=new TinyEmitter()

// app.use(MotionPlugin)
library.add(faBars,faX,faTwitter,faFacebook,faInstagram,faLinkedin,faEnvelope,faPhone,faLocationDot,faClock,faCheckCircle,faTelegram,faYoutube,faWhatsapp,faJs,faReact,faAngular,faVuejs,faHtml5,faCss3,faNode,faPhp,faLaravel,faGithub,faArrowUpRightFromSquare,faCircleExclamation,faCircleCheck,faTriangleExclamation);
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')

