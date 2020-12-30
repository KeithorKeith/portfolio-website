import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Button } from "react-bootstrap"


export default function Home() {
  return (
    <div>
      <div className="header">
        <nav class="nav-container">
          <a class="named-transition" href="/">
            <span class="keith-nimmo">Keith Nimmo</span>
          </a>
          <ul class="nav-right">
            <li class="list-item">
              <a class="transition-link" href="/about">About</a>
            </li>
            <li class="list-item">
              <a class="transition-link" href="/about">Projects</a>
            </li>
            <li class="list-item">
              <a class="transition-link" href="/about">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
