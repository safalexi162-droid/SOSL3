<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
      
      <!-- About Section -->
      <div class="max-w-xs">
        <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA URWANDA</h3>
        <p class="text-sm text-green-200">Discover the beauty of the land of a Thousand Hills</p>
      </div>

      <!-- Quick Links Section -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-yellow-300 transition-colors">Home</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-yellow-300 transition-colors">About</RouterLink></li>
          <li><RouterLink to="/service" class="hover:text-yellow-300 transition-colors">Services</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-yellow-300 transition-colors">Contact</RouterLink></li>
        </ul>
      </div>

      <!-- Destination Section -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/destinations/northern" class="hover:text-yellow-300 transition-colors">Northern Province</RouterLink></li>
          <li><RouterLink to="/destinations/southern" class="hover:text-yellow-300 transition-colors">Southern Province</RouterLink></li>
          <li><RouterLink to="/destinations/western" class="hover:text-yellow-300 transition-colors">Western Province</RouterLink></li>
          <li><RouterLink to="/destinations/eastern" class="hover:text-yellow-300 transition-colors">Eastern Province</RouterLink></li>
          <li><RouterLink to="/destinations/kigalicity" class="hover:text-yellow-300 transition-colors">Kigali City</RouterLink></li>
        </ul>
      </div>

      <!-- Contacts Section -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">Contacts</h3>
        <ul class="space-y-2 text-sm text-green-200">
          <li class="hover:text-yellow-300 transition-colors">Nkurikiyimana@gmail.com</li>
          <li class="hover:text-yellow-300 transition-colors">0788449380</li>
          <li>Kagarama, Kigali, Rwanda</li>
        </ul>
      </div>

    </div>
    <!--This is copyright-->
    <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
        <p class="text-center">&copy; 2025 Tembera URwanda.All rights reversed</p>
    </div>
  </footer>
</template>
