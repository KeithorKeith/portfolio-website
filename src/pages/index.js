import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


export default function Home() {
  return (
    <div>
      <div className="header">
        <h1>Keith Nimmo</h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Link className="about-link" to="about/">About</Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Link className="portfolio-link" to="portfolio/">Portfolio</Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Link className="contact-link" to="contact/">Contact</Link>
      </div>
    </div>
  );
}
