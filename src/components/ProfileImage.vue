<template>
<svg fill="#D9D9D9" class="clippy">
<defs>
<clipPath id="profile" clipPathUnits="objectBoundingBox">
<path  fill-rule="evenodd" clip-rule="evenodd" :style="{
                fill: '#D9D9D9',
                fillOpacity: 0.5,
                strokeWidth: 0.26458332,
              }" d="M0.03356 0.607583C-0.00617062 0.574264 -0.0113683 0.515046 0.0219507 0.475315L0.392417 0.03356C0.425736 -0.00617062 0.484954 -0.0113683 0.524685 0.0219507L0.686256 0.157448C0.689637 0.160284 0.694957 0.157262 0.694639 0.15286C0.69444 0.150115 0.694339 0.147342 0.694339 0.144546C0.694339 0.0817916 0.745212 0.0309189 0.807967 0.0309189C0.870721 0.0309189 0.921594 0.0817916 0.921594 0.144546C0.921594 0.207301 0.870721 0.258174 0.807967 0.258174C0.807426 0.258174 0.807174 0.258853 0.807589 0.259201L0.96644 0.392417C1.00617 0.425736 1.01137 0.484954 0.978049 0.524685L0.848344 0.679349C0.847616 0.680218 0.846182 0.679678 0.846182 0.678544C0.846182 0.615789 0.795309 0.564916 0.732555 0.564916C0.6698 0.564916 0.618927 0.615789 0.618927 0.678544C0.618927 0.741298 0.6698 0.792171 0.732555 0.792171C0.735853 0.792171 0.739119 0.792031 0.742347 0.791755C0.746782 0.791377 0.749887 0.796752 0.747027 0.800163L0.607583 0.96644C0.574264 1.00617 0.515046 1.01137 0.475315 0.978049L0.03356 0.607583Z" fill="#D9D9D9"/>
</clipPath>
</defs>
</svg>
<!-- <svg width="1077" height="1077" viewBox="0 0 1077 1077" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_284_37)">
<rect width="1077" height="1077" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.677 612.587C-8.58838 573.749 -8.93453 510.433 29.9038 471.168L465.605 30.677C504.443 -8.58838 567.759 -8.93453 607.024 29.9038L773.682 194.749C773.615 193.035 773.581 191.311 773.581 189.58C773.581 117.783 831.784 59.5803 903.581 59.5803C975.378 59.5803 1033.58 117.783 1033.58 189.58C1033.58 261.377 975.378 319.58 903.581 319.58C902.327 319.58 901.077 319.563 899.831 319.527L1047.51 465.605C1086.78 504.443 1087.13 567.759 1048.29 607.024L903.005 753.904C903.386 749.847 903.581 745.737 903.581 741.58C903.581 669.783 845.378 611.58 773.581 611.58C701.784 611.58 643.581 669.783 643.581 741.58C643.581 813.377 701.784 871.58 773.581 871.58C778.221 871.58 782.804 871.337 787.318 870.863L612.587 1047.51C573.749 1086.78 510.433 1087.13 471.168 1048.29L30.677 612.587Z" fill="#D9D9D9"/>
</g>
<defs>
<clipPath id="clip0_284_37">
<rect width="1077" height="1077" fill="white"/>
</clipPath>
</defs>
</svg> -->
  <div class="w-full  dark:shadow-gray-800 dark:shadow-md shadow-sm rounded-lg">
  <!-- <div class="profile h-[16rem] w-[16rem] md:h-[20rem] md:w-[20rem] mx-auto"> -->
  <div class="profile h-[18rem] w-[18rem] mx-auto">
  <img :src="`${profile_picture}`" alt="" class="w-full object-top h-full object-cover">
  <!-- <img src="http://127.0.0.1:8000/storage/ProfileImages/1709110208.jpeg" alt="" class="w-full object-top h-full object-cover"> -->
  </div>
  </div>
</template>

<script>
import profileImage from "../assets/images/Untitled design (1).png";
// import profileImage from "http://127.0.0.1:8000/storage/ProfileImages/1709110208.jpeg";
export default {
props:{
profilePicture:String
},
data() {
    return {
       profileImage,
       profile_picture:'',
           }
},
mounted(){
setTimeout(()=>{ 
this.profile_picture=this.profilePicture
},2000)
},
}
</script>

<style>
/* .profile{
background: linear-gradient(yellow,blue);
} */
.profile img{

clip-path: url('#profile');
}

svg.clippy{
position: absolute;
top: -999px;
left: -999px;
width: 0;
height: 0;
}
</style>