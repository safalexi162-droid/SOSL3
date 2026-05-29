<template>
  <div class="home">
    <h1>Welcome to Rwanda</h1>
    <p>The land of a thousand hills</p>
    
    <div class="cards">
      <router-link to="/products" class="card">Explorer place</router-link>
      <router-link to="/dashboard" class="card">Learn More</router-link>
    </div>
    <p>
          Welcome to RWANDA where your dreams becomes reality where you enjoye the beautifull
          sun rise of the universe😉 whith the peacefull  vide and carement which you can't find on any other place in the wolrd 🌎
        </p>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;

  background-image:url('/src/assets/kg2.jpg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.home {
  text-align: center;
  padding: 60px 20px;
  font-family: Arial, sans-serif;
}
.home h1 {
  font-size: 3rem;
  color: #222;
}
.home p {
  font-size: 1.3rem;
  color: rgb(255, 235, 235)aea;
  margin: 20px 0 40px;
}
.cards {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  display: inline-block;
  padding: 20px 30px;
  background-color: #f0a500;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: 0.3s;
}
.card:hover {
  background-color: #d48a00;
  transform: translateY(-5px);
}
</style>