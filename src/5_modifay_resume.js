import React from 'react';
import ReactDOM from 'react-dom/client';
import './4_resume.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (<div>
<div className="resume">
  {/* HEADER */}
  <div className="header">
    <div className="name-title">
      <h1>KEYUR DHOLAKIYA</h1>
      <div className="title">Full Stack Developer • MERN Stack Specialist</div>
    </div>
    <div className="contact">
      <p>📍 Bhavnagar, Gujarat, India - 364001</p>
      <p>✉️ <a href="mailto:alpeshdholakiya7858@gmail.com">alpeshdholakiya7858@gmail.com</a></p>
      <p>📞 <a href="tel:+919313130821">+91 93131 30821</a></p>
      <p>🔗 <a href="https://www.linkedin.com/in/keyur-dholakiya-4a5406350" target="_blank">linkedin.com/in/keyur-dholakiya</a></p>
    </div>
  </div>
  <div className="content">
    {/* SIDEBAR */}
    <div className="sidebar">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills">
        <div className="skill-badge">HTML5</div>
        <div className="skill-badge">CSS3</div>
        <div className="skill-badge">JavaScript</div>
        <div className="skill-badge">Bootstrap</div>
        <div className="skill-badge">Node.js</div>
        <div className="skill-badge">Express.js</div>
        <div className="skill-badge">MongoDB</div>
        <div className="skill-badge">MySQL</div>
        <div className="skill-badge">Git &amp; GitHub</div>
        <div className="skill-badge">REST APIs</div>
        <div className="skill-badge">MERN Stack</div>
        <div className="skill-badge">Full Stack Development</div>
      </div>
      <h2 className="section-title" style={{"margin-top":"55px"}}>Languages</h2>
      <ul>
        <li>English (Professional)</li>
        <li>Hindi (Native)</li>
        <li>Gujarati (Native)</li>
      </ul>
      <h2 className="section-title" style={{"margin-top":"55px"}}>Awards &amp; Activities</h2>
      <ul>
        <li>Participated in Techmanjari (College Tech Fest)</li>
      </ul>
    </div>
    {/* MAIN CONTENT */}
    <div className="main">
      {/* SUMMARY */}
      <div className="main-section summary">
        <h2 className="section-title">Professional Summary</h2>
        <p>
          Dynamic full-stack developer with a strong foundation in MERN stack technologies.
          Known for effective collaboration and meeting project deadlines, contributing to successful
          outcomes in team environments.
          Eager to leverage technical skills and project management abilities to drive team success.
          Hardworking professional with excellent customer service, multitasking, and time management
          abilities.
          Devoted to giving every customer a positive and memorable experience.
        </p>
      </div>
      {/* EXPERIENCE */}
      <div className="main-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="job">
          <h3>MERN Stack Developer Intern</h3>
          <div className="company">The Easy Learn Academy, Bhavnagar</div>
          <div className="date">2024 – Present</div>
          <ul className="bullets">
            <li>Executed project objectives by collaborating closely with team members and meeting
              deadlines.</li>
            <li>Coordinated with cross-functional teams to achieve shared goals.</li>
            <li>Developed strong skills as a MERN stack developer, contributing to overall project
              success.</li>
            <li>Worked as both frontend and backend developer on multiple live projects.</li>
          </ul>
        </div>
      </div>
      {/* EDUCATION */}
      <div className="main-section">
        <h2 className="section-title">Education</h2>
        <div className="edu">
          <h3>Bachelor of Engineering – Information Technology</h3>
          <div className="company">Gyanmanjari Institute of Technology, Bhavnagar, Gujarat</div>
          <div className="date">2021 – 2025</div>
          <ul className="bullets">
            <li>Actively participated in Techmanjari – College Technical Festival</li>
            <li>Completed intensive MERN Stack Development Course from Easy Learn Academy</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* FOOTER */}
  <div className="footer">
    Passionate about building beautiful and scalable web applications • Open to opportunities
  </div>
</div>

   </div>


)
root.render(output);

