<template>
  <div class="about-page">

    <!-- Hero Section -->
      <!-- Background Video -->
      <video autoplay muted loop playsinline class="video-bg">
        <source src="/src/assets/visit rwanda.mp4" />
      </video>
    <section class="hero">
      <h1>About Rwanda</h1>
      <p>
        Discover the Heart of Africa and the Land of a Thousand Hills.
      </p>
    </section>

    <!-- History -->
    <section class="section">
      <h2>The History of Rwanda</h2>

      <p>
        Rwanda is a beautiful country located in East Africa. Known as
        the "Land of a Thousand Hills," Rwanda has a rich history,
        vibrant culture, and breathtaking natural beauty.
      </p>

      <p>
        For centuries, Rwanda was home to thriving communities united
        through culture, traditions, and strong leadership. Throughout
        its history, Rwanda has demonstrated resilience and determination.
        Today, Rwanda stands as one of Africa's fastest-growing nations,
        recognized globally for cleanliness, security, innovation,
        environmental conservation, and sustainable development.
      </p>

      <p>
        Modern Rwanda continues to inspire visitors through its remarkable
        transformation, peaceful environment, and welcoming people.
      </p>
    </section>

    
    
      <h2>Leadership of Rwanda</h2>

      
        <img src="/src/assets/paul kagame.jpg" 
        alt="President">
     

        <div></div>

      <p>
        Rwanda's leadership has played an important role in promoting
        national development, unity, education, technology, tourism,
        environmental protection, and economic growth.
      </p>
    
    <!-- Rwanda Video -->
    <section class="section">
      <h2>Explore Rwanda Through Video</h2>
<video autoplay muted loop playsinline class="video-bg">
        <source  style="cover; width: 200%; height: 200%;" src="/src/assets/visit rwanda.mp4" />
      </video>
      <p>
        Add a promotional tourism video showcasing Rwanda's landscapes,
        wildlife, culture, cities, and national parks.
      </p>
    </section>

    <!-- Tourism -->
    <section class="section">
      <h2>Why Visit Rwanda?</h2>

      <p>
        Rwanda offers unforgettable experiences for every traveler.
        Whether you are seeking adventure, relaxation, wildlife,
        photography, or cultural discovery, Rwanda has something unique
        waiting for you.
      </p>

      <div class="cards">

        <div class="card">
          <h3>🦍 Gorilla Trekking</h3>
          <p>
            Visit Volcanoes National Park and encounter mountain gorillas
            in their natural habitat.
          </p>
        </div>

        <div class="card">
          <h3>🌋 Volcanoes</h3>
          <p>
            Explore the magnificent volcanic mountains and hiking trails.
          </p>
        </div>

        <div class="card">
          <h3>🐘 Wildlife</h3>
          <p>
            Discover lions, elephants, giraffes, zebras, and many other
            animals in Rwanda's national parks.
          </p>
        </div>

      </div>
    </section>

    <!-- Beautiful Places -->
    <section class="section">
      <h2>Beautiful Places to Visit in Rwanda</h2>

      <div class="gallery">
        <div>
          <img style="width: 180%;height: 180px;" src="/src/assets/vc.jpg"
        </div>

        <div>
         <img style="width: 180%;height: 180px;" src="/src/assets/aka.jpg"
          alt="Rwandan king">
        </div>

        <div>
          <img style="width: 180%;height: 180px;" src="/src/assets/ny.jpg" 
          alt="Rwandan ceromony">
        </div>
      </div>

<p>
        Rwanda is home to some of Africa's most beautiful natural
        attractions. Visitors can enjoy forests, mountains, lakes,
        wildlife, waterfalls, and stunning landscapes.
      </p>
    </section>

    <!-- Lake Kivu -->
    <section class="section">
      <h2>Relax at Lake Kivu</h2>
 <div class="gallery">

        <div>
          <img style="width: 150%;height: 200px;" src="/src/assets/lk.jpg"
        </div>

        <div>
         <img style="width: 150%;height: 200px;" src="/src/assets/lk2.jpg"
          alt="Rwandan king">
        </div>

        <div>
          <img style="width: 150%;height: 200px;" src="/src/assets/lk3.jpg" 
          alt="Rwandan ceromony">
        </div>

      </div>

      <p>
        Lake Kivu is one of Rwanda's most popular relaxation destinations.
        Visitors enjoy beaches, swimming, boat rides, kayaking, resorts,
        fishing experiences, and breathtaking sunsets.
      </p>

      <p>
        Whether you are traveling with family, friends, or alone,
        Lake Kivu offers peace, comfort, and unforgettable memories.
      </p>
    </section>

    
      <h2>Culture and Traditions</h2>

      <p>
        Rwanda is rich in cultural heritage. Visitors can enjoy traditional
        dances, local cuisine, arts and crafts, storytelling, music, and
        community experiences.
      </p>

      <div class="gallery">

           <div>
          <img style="width: 150%;height: 200px;" src="/src/assets/kic.jpg"
        </div>

        <div>
         <img style="width: 150%;height: 200px;" src="/src/assets/king.jpg"
          alt="Rwandan king">
        </div>

        <div>
          <img style="width: 150%;height: 200px;" src="/src/assets/gil.jpg" 
          alt="Rwandan ceromony">
        </div>

      </div>
    

    <!-- Closing -->
    <section class="section closing">
      <h2>Welcome to Rwanda</h2>

      <p>
        Rwanda is more than a destination. It is an experience filled
        with adventure, culture, beauty, wildlife, and unforgettable
        memories.
      </p>

      <p>
        Whether you dream of seeing mountain gorillas, relaxing at Lake
        Kivu, hiking volcanoes, exploring forests, or experiencing warm
        hospitality, Rwanda welcomes you with open arms.
      </p>

      <h3>Tembera u Rwanda — Discover the Beauty of Rwanda.</h3>
    </section>

  </div>
</template>

<style scoped>

.about-page{
  font-family: Arial, sans-serif;
  line-height: 1.8;
}

.hero{
  background:#006400;
  color:white;
  text-align:center;
  padding:100px 20px;
}

.hero h1{
  font-size:4rem;
}

.section{
  padding:70px 10%;
}

.section h2{
  color:#006400;
  margin-bottom:20px;
}

.placeholder,
.video-placeholder,
.image-box{
  border:3px dashed #999;
  padding:60px;
  text-align:center;
  margin:20px 0;
  border-radius:10px;
}

.cards{
  display:flex;
  gap:20px;
  flex-wrap:wrap;
}

.card{
  flex:1;
  min-width:250px;
  background:#f5f5f5;
  padding:20px;
  border-radius:10px;
}

.gallery{
  display:flex;
  gap:20px;
  flex-wrap:wrap;
}

.image-box{
  flex:1;
  min-width:250px;
}

.closing{
  background:#f5f5f5;
  text-align:center;
}

</style>