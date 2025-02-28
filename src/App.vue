<template>
  <div class="flex">
    <div class="flex-auto">
      <nav-bar></nav-bar>
      <router-view>
      </router-view>
    </div>
  </div>


</template>
<script setup>
import NavBar from './layouts/NavBar.vue';
</script>