import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Button } from "react-bootstrap"


export default function Home() {
  return (
      <div className="header">
        <nav class="nav-container">
          <a class="named-transition" href="/">
            <h1 class="keith-nimmo">Keith Nimmo</h1>
          </a>
          <ul class="nav-right">
            <li class="list-item">
              <a class="transition-link" href="#about">About</a>
            </li>
            <li class="list-item">
              <a class="transition-link" href="#projects">Projects</a>
            </li>
            <li class="list-item">
              <a class="transition-link" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="intro">
          <h1>
            Hi, my name is Keith, I am a software developer living in Edinburgh, Scotland.
          </h1>
            <img class="profile-pic" src="images/me.jpg" alt="Profile pic of Keith Nimmo"></img>
        </div>
        <div id="about"></div>
        <div class="about-container">
          <a class="about-text" >
            <h2>A little about me</h2>
              <p>
              I am a Masters graduate from Abertay University specialising in 3D Environment Art, 
              during this time I started to really enjoy the software development side of my projects and wanted to learn more so I enrolled with CodeClan. 
              Combing both aspects of my experience, I am excited to find a role which would allow me to continue expanding my skill set.
              </p>
          </a>
        </div>
        <div id="projects"></div>
        <div class="projects-container">
          <a class="about-text">
            <h2>My Recent Work</h2>
          <div class="spicify-container">
            <h3>Spicify</h3>
              <p>
              Spicify uses your facial expressions to create playlists based on your mood. 
              The app was created using Javascript and Java.
              </p>
            <a href="https://github.com/KeithorKeith/final_project_react_music_app" target="_blank">
              <img src="spicify-images/spice_home.png" alt="The home page of the spicify app."></img>
              <img src="spicify-images/emotion_slider.png" alt="Emotion slider."></img>
              <img src="spicify-images/playlist.png" alt="playlist layout."></img>
            </a>
          </div>
          <div class="combat-container">
            <h3>Gamebook</h3>
              <p>
              Gamebook is an interactive web game where the player chooses the path the story takes.
              The game also includes combat and inventory mechanics inspired by Dungeons and Dragons. The app was created using Vue and Javascript.
              </p>
            <a href="https://github.com/KeithorKeith/Clan-Of-Code-Browser-Game" target="_blank">
              <img src="combat-images/combat_1.jpg" alt="Section of the narrative."></img>
              <img src="combat-images/combat_2.jpg" alt="Battle screen."></img>
              <img src="combat-images/combat_3.jpg" alt="special icons."></img>
            </a>
          </div>
          <div class="klaus-container">
            <h3>Klaus</h3>
              <p>
              A short game made over the holidays, made with the Unity engine and C#.
              </p>
            <iframe src="https://itch.io/embed/864680" height="167" width="552" frameborder="0"><a href="https://keithorkeith.itch.io/klaus" target="_blank">Klaus by keithorkeith</a></iframe>
          </div>
          <div class="Kaiju-container">
            <h3>Kaiju Control</h3>
              <p>
              A game made over the course of a week for the GJL Game Parade Spring 2021.
              </p>
            <iframe src="https://itch.io/embed/939487" height="167" width="552" frameborder="0"><a href="https://keithorkeith.itch.io/kaiju-control">Kaiju Control by keithorkeith</a></iframe>
          </div>
          </a>
        </div>
        <div  id="contact"></div>
        <div class="contact-container">
          <a class="contact-text">
            <h2>Contact details:</h2>
            <a href="mailto: keithnimmo@hotmail.co.uk" target="_blank" rel="noopener noreferrer">keithnimmo@hotmail.co.uk</a>
            <a href="https://github.com/KeithorKeith" target="_blank">
              <img class="icons" src="icons/github-icon.png"></img>
            </a>
            <a href="https://linkedin.com/in/keith-nimmo" target="_blank">
              <img class="icons" src="icons/linkdin-icon.png"></img>
            </a>
          </a>
        </div>
      </div>
  );
}

