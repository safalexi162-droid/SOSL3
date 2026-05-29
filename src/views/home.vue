<!-- HomePage.vue -->

<template>
  <section class="home">

    <!-- Dark Overlay -->
    <div class="overlay">

      <!-- Hero Content -->
      <div class="content">

        <h1>Tembera U Rwanda</h1>

        <h2>Discover The Beauty Of Rwanda</h2>

        <p>
          Tembera U Rwanda is a tourism and travel platform created
          to showcase the beauty, culture, wildlife, and breathtaking
          destinations of Rwanda. From the famous mountain gorillas
          of Volcanoes National Park to the relaxing beaches of Lake
          Kivu, Rwanda offers unforgettable adventures for every traveler.
        </p>

        <p>
          Our mission is to help visitors explore Rwanda’s natural beauty,
          rich traditions, modern cities, and unique tourism experiences.
          Whether you love nature, culture, adventure, or photography,
          Rwanda is the perfect destination to discover.
        </p>

        <button>
          Explore Rwanda
        </button>

      </div>

    </div>

  </section>
</template>

<script setup>
// No JavaScript needed
</script>

<style scoped>


.home {
  height: 100vh;

  
  background-image: url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


.overlay {
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px;
}


.content {
  max-width: 900px;

  text-align: center;
  color: white;
}


.content h1 {
  font-size: 70px;
  color: gold;
  margin-bottom: 10px;
}

.content h2 {
  font-size: 40px;
  margin-bottom: 30px;
}

/* PARAGRAPHS */
.content p {
  font-size: 22px;
  line-height: 1.8;

  margin-bottom: 25px;
}

/* BUTTON */
button {
  padding: 18px 40px;

  border: none;
  border-radius: 10px;

  background: gold;
  color: black;

  font-size: 20px;
  font-weight: bold;

  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: white;
}

/* MOBILE RESPONSIVE */
@media (max-width: 768px) {

  .content h1 {
    font-size: 45px;
  }

  .content h2 {
    font-size: 28px;
  }

  .content p {
    font-size: 18px;
  }

  button {
    width: 100%;
  }
}

</style>