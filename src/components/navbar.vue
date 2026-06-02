<script setup>
import { useI18n } from 'vue-i18n';


const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem('language', lang);
};
</script>

<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full">
    <img src="../assets/image/logo.jpg" alt="Logo" class="h-15 w-15">

    <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
      <li><a href="/" class="hover:text-yellow-300">{{ $t('nav.home') }}</a></li>
      <li><a href="/about" class="hover:text-yellow-300">{{ $t('nav.about') }}</a></li>
      <li><a href="/service" class="hover:text-yellow-300">{{ $t('nav.services') }}</a></li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">{{ $t('nav.gallery') }}<span>🔽</span></a>
        <ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50">
          <li><a href="photo" class="block px-4 py-2 hover:bg-green-200">{{ $t('nav.photos') }}</a></li>
          <li><a href="video" class="block px-4 py-2 hover:bg-green-200">{{ $t('nav.videos') }}</a></li>
        </ul>
      </li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">{{ $t('nav.destination') }}<span>🔽</span></a>
        <ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50">
          <li><a href="/northern" class="block px-4 py-2 hover:bg-green-700">{{ $t('nav.northernProvince') }}</a></li>
          <li><a href="/southern" class="block px-4 py-2 hover:bg-green-700">{{ $t('nav.southernProvince') }}</a></li>
          <li><a href="/kigalicity" class="block px-4 py-2 hover:bg-green-700">{{ $t('nav.kigaliCity') }}</a></li>
          <li><a href="/eastern" class="block px-4 py-2 hover:bg-green-700">{{ $t('nav.easternProvince') }}</a></li>
          <li><a href="/western" class="block px-4 py-2 hover:bg-green-700">{{ $t('nav.westernProvince') }}</a></li>
        </ul>
      </li>

      <li class="relative flex items-center gap-2">
        <span class="text-sm hover:text-yellow-300">{{ $t('nav.language') }}</span>
        <select
          :value="locale"
          aria-label="Select language"
          class="bg-green-900 text-white rounded px-2 py-1 border border-white"
          @change="changeLanguage($event.target.value)"
        >
          <option value="en">ENGLISH</option>
          <option value="fr">FRANÇAIS</option>
          <option value="rw">KINYARWANDA</option>
        </select>
      </li>

      <li><RouterLink to="/contact" class="hover:text-yellow-300">contact us </RouterLink></li>
     <li><RouterLink to="/Login" class="bg-yellow-400 text-green-900 px-4 py-1 rounded font semibold hover:bg-yellow-300">Login</RouterLink></li>
    
    </ul>
  </nav>
</template>