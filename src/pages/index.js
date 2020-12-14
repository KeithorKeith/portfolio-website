import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


export default function Home() {
  return (
    <div>
      <div className="header">
        <h1 className="text-danger">Keith Nimmo</h1>
      </div>
      <br></br>
      <blockquote>Hey this is a test to see if mother fricking
      stuff be working k</blockquote>
      <div className="blockquote-footer">yo</div>
      <div className="about-link">
        <Link className="about-link" to="about/">About</Link>
      </div>
      <div>
        <Link className="portfolio-link" to="portfolio/">Portfolio</Link>
      </div>
      <div>
        <Link className="contact-link" to="contact/">Contact</Link>
      </div>
    </div>
  );
}
