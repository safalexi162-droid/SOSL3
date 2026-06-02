<script setup> 
import { RouterView.useRoute } from 'vue-router';
import Navbar from './components/navbar.vue'; 
import Footer from './components/footer.vue';
</script>

<template>
  <Navbar/>
  <RouterView/>
  <Footer/>
</template>

 