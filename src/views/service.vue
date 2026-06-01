<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- Hero Section -->
    <section
      class="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style="background-image: url('/src/assets/ny.jpg')"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative text-center text-white px-6 max-w-4xl">
        <h1 class="text-5xl font-bold mb-4">
          Explore Our Tourism Services
        </h1>

        <p class="text-lg md:text-xl">
          Discover Rwanda through unforgettable adventures, cultural
          experiences, wildlife safaris, and professional travel services.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="max-w-7xl mx-auto px-6 py-16">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Our Services
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Service Card -->
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
        >
          <img
            :src="service.image"
            :alt="service.title"
            class="w-full h-56 object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-3">
              {{ service.icon }} {{ service.title }}
            </h3>

            <p class="text-gray-600">
              {{ service.description }}
            </p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
const services = [
  {
    icon: "🦍",
    title: "Gorilla Trekking",
    image: "/src/assets/vc.jpg",
    description:
      "Meet the famous mountain gorillas in Volcanoes National Park and experience one of the world's most remarkable wildlife encounters."
  },
  {
    icon: "🐘",
    title: "Wildlife Safaris",
    image: "/src/assets/safari.jpg",
    description:
      "Enjoy game drives in Akagera National Park and discover lions, elephants, giraffes, zebras and many other animals."
  },
  {
    icon: "🌳",
    title: "Nyungwe Forest Tours",
    image: "/src/assets/nyungwe.jpg",
    description:
      "Walk through one of Africa's oldest rainforests and experience the famous canopy walkway."
  },
  {
    icon: "🎭",
    title: "Cultural Experiences",
    image: "/src/assets/INY.jpg",
    description:
      "Discover traditional Rwandan dance, music, crafts, and local community life."
  },
  {
    icon: "⛰️",
    title: "Hiking Adventures",
    image: "/src/assets/kging.jpg",
    description:
      "Explore Rwanda's beautiful mountains, volcanoes, and scenic trails."
  },
  {
    icon: "🏨",
    title: "Hotel Booking",
    image: "/src/assets/hotel.jpg",
    description:
      "Find comfortable accommodation ranging from luxury lodges to affordable guest houses."
  },
  {
    icon: "🚗",
    title: "Transportation",
    image: "/src/assets/trans.jpg",
    description:
      "Airport pickups, private vehicles, tour buses, and car rental services."
  },
  {
    icon: "🏙️",
    title: "Kigali City Tours",
    image: "/src/assets/kg tour.jpg",
    description:
      "Explore Kigali's history, culture, markets, museums, and modern attractions."
  },
  {
    icon: "✈️",
    title: "Travel Assistance",
    image: "/src/assets/ass.jpg",
    description:
      "Professional guidance for trip planning, permits, bookings, and travel information."
  }
];
</script>