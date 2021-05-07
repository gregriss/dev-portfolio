import React from 'react';

function About() {
    return (
        <div id="about-caption">
            <h1 id="about-h1" class="about">
                About Me
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-person-fill icon" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
            </h1>
            <p class="about-me-p lead">
                I'm a Full Stack Web Developer with an eye for detail and a passion for clarity. I've always been keen at
                spotting mistakes, even in published books and magazines. My skills include HTML, CSS, JavaScript,
                jQuery, Node.js, APIs, Express, Handlebars, SQL, and NoSQL.
          </p>
        </div>
    )
}

export default About;