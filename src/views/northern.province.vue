<template>
  <div class="min-h-screen bg-gray-100">

    <!-- Hero Section -->
    <div class="relative h-[70vh]">
      <img
        src="/src/assets/vc.jpg"
        alt="Northern Province"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 class="text-5xl font-bold text-white">
          Relax in Northern Province
        </h1>
      </div>
    </div>

    <!-- Content -->
    <section class="max-w-7xl mx-auto py-16 px-6">
      <h2 class="text-4xl font-bold mb-6 text-green-700">
        Discover Northern Rwanda
      </h2>

      <p class="text-lg text-gray-700 mb-10">
        Northern Province is famous for its breathtaking mountains,
        cool climate, gorilla trekking adventures, and beautiful lakes.
        It is one of the best destinations for relaxation and nature lovers.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/src/assets/vc.jpg" class="h-60 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold">Volcanoes National Park</h3>
            <p class="mt-3 text-gray-600">
              Home of mountain gorillas and stunning volcanoes.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/src/assets/lk3.jpg" class="h-60 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold">Lake Burera</h3>
            <p class="mt-3 text-gray-600">
              Perfect for relaxing boat rides and scenic photography.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/src/assets/ruhondo.jpg" class="h-60 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold">Lake Ruhondo</h3>
            <p class="mt-3 text-gray-600">
              A peaceful lake surrounded by green hills.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>