<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
      
      <!-- About Section -->
      <div class="max-w-xs">
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ $t('footer.brand') }}</h3>
        <p class="text-sm text-green-200">{{ $t('footer.tagline') }}</p>
      </div>

      <!-- Quick Links Section -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ $t('footer.quickLinks') }}</h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-yellow-300 transition-colors">{{ $t('nav.home') }}</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-yellow-300 transition-colors">{{ $t('nav.about') }}</RouterLink></li>
          <li><RouterLink to="/service" class="hover:text-yellow-300 transition-colors">{{ $t('nav.services') }}</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-yellow-300 transition-colors">{{ $t('nav.contact') }}</RouterLink></li>
        </ul>
      </div>

      <!-- Destination Section -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ $t('footer.destinations') }}</h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/northern" class="hover:text-yellow-300 transition-colors">{{ $t('footer.northernProvince') }}</RouterLink></li>
          <li><RouterLink to="/southern" class="hover:text-yellow-300 transition-colors">{{ $t('footer.southernProvince') }}</RouterLink></li>
          <li><RouterLink to="/western" class="hover:text-yellow-300 transition-colors">{{ $t('footer.westernProvince') }}</RouterLink></li>
          <li><RouterLink to="/eastern" class="hover:text-yellow-300 transition-colors">{{ $t('footer.easternProvince') }}</RouterLink></li>
          <li><RouterLink to="/kigalicity" class="hover:text-yellow-300 transition-colors">{{ $t('footer.kigaliCity') }}</RouterLink></li>
        </ul>
      </div>

      <!-- Contacts Section -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ $t('footer.contacts') }}</h3>
        <ul class="space-y-2 text-sm text-green-200">
          <li class="hover:text-yellow-300 transition-colors">{{ $t('footer.email') }}</li>
          <li class="hover:text-yellow-300 transition-colors">{{ $t('footer.phone') }}</li>
          <li>{{ $t('footer.address') }}</li>
        </ul>
      </div>

    </div>
    <!--This is copyright-->
    <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
        <p class="text-center">{{ $t('footer.copyright') }}</p>
    </div>
  </footer>
</template>
