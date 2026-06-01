<template>
  <div class="min-h-screen bg-gray-100">

    <!-- Hero Section -->
    <section class="relative h-screen">
      <img
        src="/src/assets/kg tour.jpg"
        alt="Kigali City"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div>
          <h1 class="text-6xl md:text-7xl font-bold text-white mb-6">
            Welcome to Kigali
          </h1>

          <p class="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover Africa's cleanest and most beautiful city.
            Explore culture, history, luxury hotels, restaurants,
            nightlife, and unforgettable experiences.
          </p>

          <button
            class="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg font-semibold transition"
          >
            Explore Kigali
          </button>
        </div>
      </div>
    </section>

    <!-- About Kigali -->
    <section class="max-w-7xl mx-auto py-20 px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 class="text-4xl font-bold text-green-700 mb-6">
            The Heart of Rwanda
          </h2>

          <p class="text-gray-700 leading-8">
            Kigali is Rwanda's capital city and one of Africa's fastest-growing
            urban centers. Known for its cleanliness, safety, and hospitality,
            Kigali offers visitors a unique blend of modern living and rich
            cultural heritage.
          </p>

          <p class="text-gray-700 leading-8 mt-4">
            Whether you're interested in history, shopping, local cuisine,
            nightlife, or simply relaxing in beautiful surroundings,
            Kigali has something for everyone.
          </p>
        </div>

        <img
          src="/src/assets/kg2.jpg"
          class="rounded-2xl shadow-2xl"
        />
      </div>
    </section>

    <!-- Top Attractions -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-5xl font-bold text-center mb-16">
          Top Attractions
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <img src="/src/assets/kg2.jpg" class="h-64 w-full object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                Kigali Genocide Memorial
              </h3>
              <p class="text-gray-600">
                Learn about Rwanda's history and journey toward unity and reconciliation.
              </p>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <img src="/src/assets/kg tour.jpg" class="h-64 w-full object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                Kimironko Market
              </h3>
              <p class="text-gray-600">
                Experience local culture, fresh produce, and handmade crafts.
              </p>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <img src="/src/assets/kg1.jpg" class="h-64 w-full object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                Kigali Convention Centre
              </h3>
              <p class="text-gray-600">
                One of Rwanda's most iconic modern landmarks.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Things To Do -->
    <section class="py-20 bg-gray-100">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-5xl font-bold text-center mb-16">
          Things To Do
        </h2>

        <div class="grid md:grid-cols-4 gap-8">

          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <span class="text-5xl">🏛️</span>
            <h3 class="text-xl font-bold mt-4">Visit Museums</h3>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <span class="text-5xl">🍽️</span>
            <h3 class="text-xl font-bold mt-4">Local Restaurants</h3>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <span class="text-5xl">🛍️</span>
            <h3 class="text-xl font-bold mt-4">Shopping</h3>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <span class="text-5xl">🌃</span>
            <h3 class="text-xl font-bold mt-4">Nightlife</h3>
          </div>

        </div>

      </div>
    </section>

    <!-- Statistics -->
    <section class="bg-green-700 py-20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid md:grid-cols-4 gap-10 text-center text-white">

          <div>
            <h3 class="text-5xl font-bold">1.7M+</h3>
            <p class="mt-3">Population</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">100+</h3>
            <p class="mt-3">Hotels</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">50+</h3>
            <p class="mt-3">Tourist Sites</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">24/7</h3>
            <p class="mt-3">Hospitality</p>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center bg-white">
      <h2 class="text-5xl font-bold mb-6">
        Ready To Explore Kigali?
      </h2>

      <p class="text-gray-600 text-lg mb-8">
        Start your journey and discover the beauty of Rwanda's capital city.
      </p>

      <button
        class="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold"
      >
        Plan Your Visit
      </button>
    </section>

  </div>
</template>