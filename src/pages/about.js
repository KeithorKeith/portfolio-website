import React from "react"
import Header from "../components/header"

export default function About() {
    return (
        <div style={{ color: 'purple' }}>
            <Header headerText="About Keith"/>
            <Header headerText="Testing"/>
            <p>Artist turned software developer.</p>
        </div>
    );
}