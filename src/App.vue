<template>

<div class="app">
<header class="header">
            <h1>SOS Technical High School</h1>
            
      <p>Building Skills, Innovation, and Future Leaders</p>
    </header>

    <div class="container">

      <section class="section">
        <h2>About SOS Technical High School</h2>

        <p>
          SOS Technical High School is a modern institution focused on providing
          students with quality technical and academic education. The school helps
          students gain practical skills, creativity, discipline, and leadership
          abilities needed in today’s world.
        </p>
      </section>
      <section class="section">
        <h2>How The School Functions</h2>

        <p>
          The school operates through classroom learning and practical technical
          training. Students attend theory lessons and also participate in
          workshops and laboratory sessions for hands-on experience.
        </p>

        <ul>
          <li>Academic learning</li>
          <li>Technical workshops</li>
          <li>Leadership programs</li>
          <li>Innovation projects</li>
          <li>Career preparation activities</li>
        </ul>
      </section>

      <section class="section">
        <h2>Departments & Programs</h2>

        <div class="programs">

          <div class="card">
            <h3>Information Technology</h3>
            <p>
              Students learn programming, networking, and digital technologies.
            </p>
          </div>

          <div class="card">
            <h3>Electronics</h3>
            <p>
              Focuses on electrical systems, electronic devices, and circuit design.
            </p>
          </div>

          <div class="card">
            <h3>Construction</h3>
            <p>
              Students gain skills in engineering and construction techniques.
            </p>
          </div>

          <div class="card">
            <h3>Business Studies</h3>
            <p>
              Helps students develop entrepreneurship and management skills.
            </p>
          </div>

        </div>
    
</section>
      <section class="section">
        <h2>Student Life</h2>

        <p>
          Students participate in sports, innovation clubs, technology exhibitions,
          leadership training, and community service programs.
        </p>
      </section>

      <section class="section">
        <h2>Vision</h2>

        <p>
          To become a leading technical education institution that develops skilled,
          innovative, and responsible graduates.
        </p>
      </section>

      <section class="section">
        <h2>Mission</h2>

        <p>
          To provide quality technical and academic education that prepares students
          for employment, entrepreneurship, and lifelong learning.
        </p>
      </section>

    </div>

    <footer class="footer">
      <p>&copy; 2026 SOS Technical High School | All Rights Reserved</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: Arial, sans-serif;
}

.app{
  background: #f4f4f4;
  min-height: 100vh;
  color: #333;
}
.header{
  background: linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), url('./assets/sos.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  text-align: center;
  padding: 50px 20px;
}

.header h1{
  font-size: 42px;
  margin-bottom: 10px;
}

.header p{
  font-size: 18px;
}
.container{
  width: 90%;
  max-width: 1100px;
  margin: 30px auto;
}

.section{
  background: white;
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.section h2{
  color: #003366;
  margin-bottom: 15px;
}

.section p{
  line-height: 1.7;
}

.section ul{
  margin-top: 15px;
  padding-left: 20px;
}

.section li{
  margin-bottom: 10px;
}
.card{
  background: #eef4ff;
  padding: 20px;
  border-radius: 10px;
}
.card h3{
  color: #003366;
  margin-bottom: 10px;
}
.leader-card{
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
.image-placeholder{
  width: 100px;  
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #f2f2f2 0%, #e8e8e8 100%);
  color: #777;
  font-size: 14px;
  font-weight: bold;
}
.footer{
  background: #003366;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

</style>