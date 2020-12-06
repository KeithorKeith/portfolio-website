import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"


export default function Home() {
  return (
    <div>
      <div className="header">
        <Header headerText="Keith Nimmo" />
      </div>
      <div className="contact-link">
        <Link to="contact/">Contact</Link>
      </div>
      <div classname="portfolio-link">
        <Link to="portfolio/">Portfolio</Link>
      </div>
      <div className="about-link">
        <Link to="about/">About</Link>
      </div>
    </div>
  );
}
