<template>
  <div class="about-page">

    <!-- Hero Section -->
      <!-- Background Video -->
      <video autoplay muted loop playsinline class="video-bg">
        <source src="/src/assets/visit rwanda.mp4" />
      </video>
    <section class="hero">
      <h1>{{ $t('about.pageTitle') }}</h1>
      <p>
        {{ $t('about.tagline') }}
      </p>
    </section>

    <!-- History -->
    <section class="section">
      <h2>{{ $t('about.historyTitle') }}</h2>

      <p>
        {{ $t('about.historyP1') }}
      </p>

      <p>
        {{ $t('about.historyP2') }}
      </p>

      <p>
        {{ $t('about.historyP3') }}
      </p>
    </section>

    
    
      <h2>{{ $t('about.leadershipTitle') }}</h2>

      
        <img src="/src/assets/paul kagame.jpg" 
        alt="President">
     

        <div></div>

      <p>
        {{ $t('about.leadershipDesc') }}
      </p>
    
    <!-- Rwanda Video -->
    <section class="section">
      <h2>{{ $t('about.videoTitle') }}</h2>
<video autoplay muted loop playsinline class="video-bg">
        <source src="/src/assets/visit rwanda.mp4" />
      </video>
      <p>
        {{ $t('about.videoDesc') }}
      </p>
    </section>

    <!-- Tourism -->
    <section class="section">
      <h2>{{ $t('about.tourismTitle') }}</h2>

      <p>
        {{ $t('about.tourismDesc') }}
      </p>

      <div class="cards">

        <div class="card">
          <h3>{{ $t('about.gorillaTitle') }}</h3>
          <p>
            {{ $t('about.gorillaDesc') }}
          </p>
        </div>

        <div class="card">
          <h3>{{ $t('about.volcanoTitle') }}</h3>
          <p>
            {{ $t('about.volcanoDesc') }}
          </p>
        </div>

        <div class="card">
          <h3>{{ $t('about.wildlifeTitle') }}</h3>
          <p>
            {{ $t('about.wildlifeDesc') }}
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