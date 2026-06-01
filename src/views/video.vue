<template>
  <div class="relative min-h-screen overflow-hidden">

    <!-- Background Video -->
    <video
      autoplay
      loop
      controls
      class="w-full h-screen object-cover"
    >
      <source src="/src/assets/visit rwanda.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div class="text-center px-6 max-w-4xl">

        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
          Discover Rwanda
        </h1>

        <p class="text-xl md:text-2xl text-gray-200 mb-8">
          Experience breathtaking landscapes, majestic wildlife,
          vibrant culture, and unforgettable adventures in the
          Land of a Thousand Hills.
        </p>

        <button
          class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
        >
          Explore Rwanda
        </button>

      </div>
    </div>

  </div>
</template>

<script setup>
</script>