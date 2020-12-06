import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import spice_home from "../../public/spicify-images/spice_home.png"

export default function Contact() {
    return (
        <div style={{ color: 'teal' }}>
            <Link to="/">Home</Link>
            <Header headerText="Portfolio" />
            <p>My previous projects.</p>
            <div>
                <img src={spice_home} height="50%" width="50%"/>
            </div>
        </div>
    )
}