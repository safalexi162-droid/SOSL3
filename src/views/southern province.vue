<template>
  <div class="min-h-screen bg-gray-100">

    <div class="relative h-[70vh]">
      <img
        src=""
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 class="text-5xl font-bold text-white">
          Relax in Southern Province
        </h1>
      </div>
    </div>

    <section class="max-w-7xl mx-auto py-16 px-6">
      <h2 class="text-4xl font-bold text-green-700 mb-6">
        Explore Southern Rwanda
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/src/assets/ny.jpg" class="h-60 w-full object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold">Nyungwe Forest</h3>
            <p class="text-gray-600 mt-3">
              One of Africa's oldest rainforests.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/src/assets/nyungwe.jpg" class="h-60 w-full object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold">Canopy Walk</h3>
            <p class="text-gray-600 mt-3">
              Enjoy breathtaking views above the forest.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/src/assets/nyanza.jpg" class="h-60 w-full object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold">King's Palace Museum</h3>
            <p class="text-gray-600 mt-3">
              Discover Rwanda's royal history in Nyanza.
            </p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>