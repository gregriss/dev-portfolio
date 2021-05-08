import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    const styles = {
        main: {
            height: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'column wrap'
        },

        button: {
            padding: '1rem',
            marginTop: '2rem',
            fontSize: 'x-large',
            background: 'hsl(230, 95%, 60%)',
            color: 'white'
        }
    }
    return (
        <main style={styles.main}>
            <h1>
                Greg Riss - Web Developer
            </h1>
            <Link to="/portfolio">
                <button style={styles.button}>
                    View My Projects
                    </button>
            </Link>
        </main>
    )
}

export default Home;