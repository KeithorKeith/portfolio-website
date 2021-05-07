import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Button } from "react-bootstrap"


export default function Portfolio() {
  return (
    <div className="header">
        <nav class="nav-container">
          <a class="named-transition" href="/">
            <span class="keith-nimmo">Keith Nimmo</span>
          </a>
          <ul class="nav-right">
            <li class="list-item">
              <a class="transition-link" href="/index">About</a>
            </li>
            <li class="list-item">
              <a class="transition-link" href="#projects">Projects</a>
            </li>
            <li class="list-item">
              <a class="transition-link" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}