<template>
  <section class="about">

    <div class="overlay">

      <div class="container">

        <h1>About Tembera U Rwanda</h1>

        <p>
          Tembera U Rwanda is a tourism platform that helps people
          discover the beauty of Rwanda including mountains,
          wildlife, culture, lakes, and national parks.
        </p>

        <div class="cards">

          <div class="card">
            <h2>🌍 Our Mission</h2>

            <p>
              To promote tourism and showcase Rwanda to the world.
            </p>
          </div>

          <div class="card">
            <h2>🦍 Wildlife</h2>

            <p>
              Rwanda is famous for mountain gorillas and amazing
              national parks.
            </p>
          </div>

          <div class="card">
            <h2>❤️ Culture</h2>

            <p>
              Experience Rwanda’s traditions, people, music,
              and hospitality.
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
// No JavaScript needed
</script>

<style scoped>

.about {
  min-height: 100vh;

  background-image: url("https://images.unsplash.com/photo-1506744038136-46273834b3fb");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  min-height: 100vh;

  background: rgba(0,0,0,0.7);

  padding: 50px 20px;
}

.container {
  max-width: 1200px;
  margin: auto;

  text-align: center;
  color: white;
}

.container h1 {
  font-size: 60px;
  color: gold;

  margin-bottom: 30px;
}

.container p {
  font-size: 22px;
  line-height: 1.8;

  margin-bottom: 40px;
}

.cards {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 30px;
}

.card {
  background: rgba(255,255,255,0.1);

  padding: 30px;

  border-radius: 15px;
}

.card h2 {
  color: gold;

  margin-bottom: 20px;
}

.card p {
  font-size: 18px;
}

</style>xc