import React from 'react';

function About() {
    const aboutStyles = {
        main: {
            display: 'grid',
            placeItems: 'center'
        },

        div: {
            width: 'clamp(425px, 70%, 800px)',
            padding: '2rem',
            margin: '1rem auto',
            textAlign: 'left'
        }
    }
    return (
        <main style={aboutStyles.main}>
            <div id="about-caption" style={aboutStyles.div}>
                <h1 id="about-h1" className="about">
                    About Me
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-person-fill icon" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                </h1>
                <p className="about-me-p lead">
                    I'm a Full Stack Web Developer with an eye for detail and a passion for clarity. I've always been keen at
                    spotting mistakes, even in published books and magazines. My skills include HTML, CSS, JavaScript, React,
                    jQuery, Node.js, APIs, Express, Handlebars, SQL, and NoSQL.
                </p>
            </div>
        </main>
    )
}

export default About;