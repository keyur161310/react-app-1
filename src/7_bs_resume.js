import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (
<>


<div class="resume-container">

  
  <header class="header">
    <div class="row align-items-start">
      <div class="col-lg-7">
        <div class="name">
          <h1>KEYUR DHOLAKIYA</h1>
          <div class="title">Full Stack Developer • MERN Stack Specialist</div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="contact-info text-lg-end mt-4 mt-lg-0">
          <p><i class="fas fa-map-marker-alt me-2"></i> Bhavnagar, Gujarat, India - 364001</p>
          <p><i class="fas fa-envelope me-2"></i> <a href="mailto:alpeshdholakiya7858@gmail.com">alpeshdholakiya7858@gmail.com</a></p>
          <p><i class="fas fa-phone me-2"></i> <a href="tel:+919313130821">+91 93131 30821</a></p>
          <p><i class="fab fa-linkedin me-2"></i> <a href="https://www.linkedin.com/in/keyur-dholakiya-4a5406350" target="_blank">linkedin.com/in/keyur-dholakiya</a></p>
        </div>
      </div>
    </div>
  </header>

  
  <div class="row g-0">

    
    <aside class="col-lg-4 sidebar">

      <h2 class="section-title">Technical Skills</h2>
      <div class="d-flex flex-wrap">
        <span class="skill-badge">HTML5</span>
        <span class="skill-badge">CSS3</span>
        <span class="skill-badge">JavaScript</span>
        <span class="skill-badge">Bootstrap</span>
        <span class="skill-badge">Node.js</span>
        <span class="skill-badge">Express.js</span>
        <span class="skill-badge">MongoDB</span>
        <span class="skill-badge">MySQL</span>
        <span class="skill-badge">Git & GitHub</span>
        <span class="skill-badge">REST APIs</span>
        <span class="skill-badge">MERN Stack</span>
        <span class="skill-badge">Full Stack Development</span>
      </div>

      <h2 class="section-title mt-5">Languages</h2>
      <ul class="list-unstyled">
        <li>English (Professional)</li>
        <li>Hindi (Native)</li>
        <li>Gujarati (Native)</li>
      </ul>

      <h2 class="section-title mt-5">Awards & Activities</h2>
      <ul class="list-unstyled">
        <li>Participated in Techmanjari (College Tech Fest)</li>
      </ul>

    </aside>

   
    <main class="col-lg-8 main-content">

      
      <section class="mb-5">
        <h2 class="section-title">Professional Summary</h2>
        <p class="lead fs-6 text-justify">
          Dynamic full-stack developer with a strong foundation in MERN stack technologies.
          Known for effective collaboration and meeting project deadlines, contributing to successful
          outcomes in team environments.
          Eager to leverage technical skills and project management abilities to drive team success.
          Hardworking professional with excellent customer service, multitasking, and time management
          abilities.
          Devoted to giving every customer a positive and memorable experience.
        </p>
      </section>

     
      <section class="mb-5">
        <h2 class="section-title">Professional Experience</h2>

        <div class="mb-4">
          <h3 class="job-title">MERN Stack Developer Intern</h3>
          <div class="company">The Easy Learn Academy, Bhavnagar</div>
          <div class="date">2024 – Present</div>
          <ul class="bullet-list mt-3 ps-0">
            <li>Executed project objectives by collaborating closely with team members and meeting deadlines.</li>
            <li>Coordinated with cross-functional teams to achieve shared goals.</li>
            <li>Developed strong skills as a MERN stack developer, contributing to overall project success.</li>
            <li>Worked as both frontend and backend developer on multiple live projects.</li>
          </ul>
        </div>
      </section>

     
      <section>
        <h2 class="section-title">Education</h2>

        <div>
          <h3 class="job-title">Bachelor of Engineering – Information Technology</h3>
          <div class="company">Gyanmanjari Institute of Technology, Bhavnagar, Gujarat</div>
          <div class="date">2021 – 2025</div>
          <ul class="bullet-list mt-3 ps-0">
            <li>Actively participated in Techmanjari – College Technical Festival</li>
            <li>Completed intensive MERN Stack Development Course from Easy Learn Academy</li>
          </ul>
        </div>
      </section>

    </main>

  </div>

  
  <footer class="footer">
    Passionate about building beautiful and scalable web applications • Open to opportunities
  </footer>

</div>

</>
)
root.render(output);

