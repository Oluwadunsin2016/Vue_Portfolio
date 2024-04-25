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
  <div class="w-full  dark:shadow-gray-800 dark:shadow-md shadow-sm rounded-lg">
  <div class="profile h-[18rem] w-[18rem] mx-auto">
  <img :src="`${profilePicture}`" alt="" class="w-full object-top h-full object-cover">
  </div>
  </div>
</template>
  
<script>
import profileImage from "../assets/images/Untitled design (1).png";
export default {
props:{
profilePicture:String
},
data() {
    return {
       profileImage,
           }
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