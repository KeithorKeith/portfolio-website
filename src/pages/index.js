import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Button } from "react-bootstrap"


export default function Home() {
  return (
      <div className="header">
        <nav class="nav-container">
          <a class="named-transition" href="/">
            <span class="keith-nimmo">KN</span>
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
            <img class="profile-pic" src="images/my_dumb_face.jpg"></img>
        </div>
        <div class="about-container">
          <a class="about-text" id="about">
            <h2>A little about me</h2>
            <h3>
              I am a Masters graduate from Abertay University specialising in 3D Environment Art, 
              during this time I started to really enjoy the software development side of my projects and wanted to learn more so I enrolled with CodeClan. 
              Combing both aspects of my experience, I am excited to find a role which would allow me to continue expanding my skill set. 
            </h3>
          </a>
        </div>
        <div class="projects-container">
          <a class="about-text" id="projects">
            <h2>My Recent Work</h2>
          <div class="spicify-container">
            <h3>Spicify</h3>
            <h4>Spicify uses your facial expressions to create playlists based on your mood. 
              The app was created using Javascript and Java.</h4>
            <a href="https://github.com/KeithorKeith/final_project_react_music_app" target="_blank">
              <img src="spicify-images/spice_home.png"></img>
              <img src="spicify-images/emotion_slider.png"></img>
              <img src="spicify-images/playlist.png"></img>
            </a>
          </div>
          <div class="combat-container">
            <h3>Gamebook</h3>
            <h4>Gamebook is an interactive web game where the player chooses the path the story takes.
              The game also includes combat and inventory mechanics inspired by Dungeons and Dragons. The app was created using Vue and Javascript.
            </h4>
            <a href="https://github.com/KeithorKeith/Clan-Of-Code-Browser-Game" target="_blank">
              <img src="combat-images/combat_1.jpg"></img>
              <img src="combat-images/combat_2.jpg"></img>
              <img src="combat-images/combat_3.jpg"></img>
            </a>
          </div>
          <div class="klaus-container">
            <h3>Klaus</h3>
            <h4>A short game made over the holidays, made with the Unity engine and C#.
            </h4>
            <iframe src="https://itch.io/embed/864680" height="167" width="552" frameborder="0"><a href="https://keithorkeith.itch.io/klaus" target="_blank">Klaus by keithorkeith</a></iframe>
          </div>
          </a>
        </div>
        <div class="contact-container">
          <a class="contact-text" id="contact">
            <h2>Contact details:</h2>
            <a href="mailto: keithnimmo@hotmail.co.uk" target="_blank" rel="noopener noreferrer">keithnimmo@hotmail.co.uk</a>
          </a>
        </div>
      </div>
  );
}

