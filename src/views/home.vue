<template>
  <div>

    <!-- Hero Section -->
    <section class="hero">

      <!-- Background Video -->
      <video autoplay muted loop playsinline class="video-bg">
        <source src="/src/assets/visit rwanda.mp4" />
      </video>

      <div class="overlay"></div>

      <div class="hero-content">
        <h1>Welcome to Tembera u Rwanda</h1>

        <p>
          Discover the Land of a Thousand Hills. Explore breathtaking
          landscapes, encounter mountain gorillas, experience vibrant
          culture, and create unforgettable memories in Rwanda.
        </p>

        <button class="btn">Explore Rwanda</button>
      </div>

    </section>

    <!-- About Rwanda -->
    <section class="about">
      <h2>Why Visit Rwanda?</h2>

      <p>
        Rwanda is one of Africa's most beautiful and safest destinations.
        From Volcanoes National Park and Lake Kivu to the modern city of
        Kigali, Rwanda offers unique adventures, stunning scenery, and
        warm hospitality.
      </p>
    </section>

    <!-- Attractions -->
    <section class="attractions">

      <div class="card">
        <h3>🦍 Gorilla Trekking</h3>
        <p>
          Experience a once-in-a-lifetime adventure with mountain gorillas.
        </p>
      </div>

      <div class="card">
        <h3>🏞 Beautiful Landscapes</h3>
        <p>
          Explore rolling hills, lakes, forests, and breathtaking views.
        </p>
      </div>

      <div class="card">
        <h3>🎭 Rich Culture</h3>
        <p>
          Discover traditional dances, local food, and Rwandan heritage.
        </p>
      </div>

    </section>

  </div>
</template>

<script setup>
// No JavaScript needed for now
</script>

<style scoped>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.hero{
  position:relative;
  height:100vh;
  overflow:hidden;
}

.video-bg{
  position:absolute;
  width:100%;
  height:100%;
  object-fit:cover;
}

.overlay{
  position:absolute;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
}

.hero-content{
  position:relative;
  z-index:2;
  color:white;
  text-align:center;
  top:50%;
  transform:translateY(-50%);
  padding:20px;
}

.hero-content h1{
  font-size:4rem;
  margin-bottom:20px;
}

.hero-content p{
  max-width:800px;
  margin:auto;
  font-size:1.3rem;
  line-height:1.8;
}

.btn{
  margin-top:30px;
  padding:15px 35px;
  border:none;
  background:#FFD700;
  font-size:18px;
  font-weight:bold;
  border-radius:30px;
  cursor:pointer;
}

.btn:hover{
  background:white;
}

.about{
  padding:80px 10%;
  text-align:center;
}

.about h2{
  font-size:2.5rem;
  color:#006400;
  margin-bottom:20px;
}

.about p{
  font-size:1.1rem;
  line-height:1.8;
}

.attractions{
  padding:80px 10%;
  display:flex;
  gap:30px;
  flex-wrap:wrap;
  justify-content:center;
  background:#f5f5f5;
}

.card{
  width:300px;
  background:white;
  padding:25px;
  border-radius:15px;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.card h3{
  margin-bottom:15px;
  color:#006400;
}

.card p{
  line-height:1.6;
}

</style>