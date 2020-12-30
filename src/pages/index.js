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
              <a class="transition-link" href="/about">Projects</a>
            </li>
            <li class="list-item">
              <a class="transition-link" href="#about">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="intro">
          <h1>
            Hi, my name is Keith, I am a software developer.
          </h1>
            <img src="images/keith_and_lucy.jpg"></img>
        </div>
        <div>
          <a class="about-text" id="about">
            <h2>A little about me</h2>
            <h3>
              I am a Masters graduate from Abertay University specialising in 3D Environment Art, 
              during this time I started to really enjoy the software development side of my projects and wanted to learn more so I enrolled with CodeClan. 
              Combing both aspects of my experience, I am excited to find a role which would allow me to continue expanding my skill set. 
            </h3>
          </a>
        </div>
        <div>
          <a id="projects">
            <h2>My Recent Work</h2>
            <h3>
              I am a Masters graduate from Abertay University specialising in 3D Environment Art, 
              during this time I started to really enjoy the software development side of my projects and wanted to learn more so I enrolled with CodeClan. 
              Combing both aspects of my experience, I am excited to find a role which would allow me to continue expanding my skill set. 
            </h3>
          </a>
        </div>
      </div>
  );
}
