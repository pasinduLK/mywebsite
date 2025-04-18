import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import UiUx from "./uiux";
import WebDev from "./webdev";
import GameUI from "./gameui";
import Modeling from "./modeling";
import FallingStars from "./FallingStars";
import SlowMouseEffect from "./SlowMouseEffect";

const socialList = [
  { name: "Artstation", icon: "artstation.png", url: "https://www.behance.net/" },
  { name: "Behance", icon: "behance.png", url: "https://dribbble.com/" },
  { name: "CurseForge", icon: "curseforge.png", url: "https://www.python.org/" },
  { name: "GitHub", icon: "github.png", url: "https://github.com/" },
  { name: "Itch.io", icon: "itch-io.png", url: "https://www.python.org/" },
  { name: "LinkedIn", icon: "linkedin.png", url: "https://www.linkedin.com/" },
];

const skillsList = [
  { name: "HTML", icon: "html.png" },
  { name: "CSS", icon: "css.png" },
  { name: "Javascript", icon: "js.png" },
  { name: "Vite", icon: "vite.png" },
  { name: "Python", icon: "python.png" },
  { name: "C", icon: "c.png" },
  { name: "Sql", icon: "mysql.png" },
];

const toolsList = [
  { name: "Aseprite", icon: "aseprite.png" },
  { name: "Blender", icon: "blender.png" },
  { name: "Figma", icon: "figma.png" },
  { name: "Adobe XD", icon: "xd.png" },
  { name: "Illustrator", icon: "illustrator.png" },
  { name: "Photoshop", icon: "photoshop.png" },
  { name: "VS Code", icon: "visualstudio.png" },
  { name: "Notion", icon: "notion.png" },
];

const contactList = [
  { name: "Gmail", icon: "gmail.png", url: "https://www.behance.net/" },
  { name: "Discord", icon: "discord.png", url: "https://dribbble.com/" },
  { name: "Linkedin", icon: "linkedin.png", url: "https://github.com/" },
];

const cards = [
  { title: "UI/UX Designing", bg: "homepage/uiux.png", path: "/uiux" },
  { title: "Web Development", bg: "homepage/web.png", path: "/webdev" },
  { title: "3D Modeling", bg: "homepage/3d.png", path: "/modeling" },
  { title: "Game UI Designing", bg: "homepage/gameui.png", path: "/gameui" },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/homepage/readme.txt";
    link.download = "readme.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">

      <div className="landing-page-wrapper">
        <section className="landingpage">
          <h1 className="name">L A K R U W A N</h1>
          <p className="tagline">Creative designer and a developer</p>
          <center>
            <a href="#" onClick={handleDownload} className="resume">
              <div className="resume-background"></div>
              <div className="resume-outline">RESUME</div>
            </a>
          </center>
          <br />
          <div className="skills-icons">
            {socialList.map((social, index) => (
              <div key={index} className="skill-container">
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="skill-link">
                  <img src={`/social/${social.icon}`} alt={social.name} className="skill-icon" />
                </a>
                <span className="skill-name">{social.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <br />

      {/* About Me Section */}
      <section className="aboutmepage">
        <div className="about-me">
          <h2 className="about-text">ABOUT ME</h2>
        </div>
        <div className="aboutme-description">
          <p>
            Hi, I’m Lakruwan, an Undergraduate designer and developer<br /> who loves blending creativity with technology.<br />
            I enjoy working on UI/UX designs, game art, website design, and developing interactive solutions.
          </p>
        </div>
        <center>
          <section className="photo-section">
            <div className="photo-container">
              <div className="photo-outline"></div>
              <div className="photo-content">
                <img src="/homepage/dp.jpeg" alt="Your Photo" className="photo-image" />
              </div>
            </div>
          </section>
        </center>
      </section>
      <br />

      {/* Skills & Tools Section */}
      <section className="skillspage">
        <div className="skills">
          <h2 className="about-text">Skills & Tools</h2>
        </div>
        <br />
        <div className="skills-icons">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-container">
              <div className="skill-link">
                <img src={`/skills/${skill.icon}`} alt={skill.name} className="skill-icon" />
              </div>
              
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
        <br />
        <div className="skills-icons">
          {toolsList.map((skill, index) => (
            <div key={index} className="skill-container">
              <div className="skill-link">
                <img src={`/skills/${skill.icon}`} alt={skill.name} className="skill-icon"/>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
            
          ))}
        </div>
        <br />
      </section>

      {/* My Works Section */}
      <section className="workpage">
        <div className="works">
          <h2 className="about-text">My Works</h2>
        </div>
        <div className="cards-section">
          {cards.map((card, index) => (
            <div key={index} className="card-container" onClick={() => navigate(card.path)}>
              <div className="card-outline"></div>
              <div className="card" style={{ backgroundImage: `url(${card.bg})` }}>
                <h3 className="card-title">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="contact-me">
          <h2 className="about-text">Contact ME</h2>
        </div>
        <br />
        <div className="skills-icons">
          {contactList.map((social, index) => (
            <div key={index} className="skill-container">
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="skill-link">
                <img src={`/contact/${social.icon}`} alt={social.name} className="skill-icon" />
              </a>
              <span className="skill-name">{social.name}</span>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-content">Crafted with pixels and passion. 🦊</div>
      </footer>
      <FallingStars/>
      <SlowMouseEffect />
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/uiux" element={<UiUx />} />
      <Route path="/webdev" element={<WebDev />} />
      <Route path="/gameui" element={<GameUI />} />
      <Route path="/modeling" element={<Modeling />} />
    </Routes>
  </Router>
);

export default App;
