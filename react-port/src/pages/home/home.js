import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    const styles = {
        main: {
            color: '#e7e7e7',
            textAlign: 'center',
            padding: '8vmax 3vmax'
        },

        content: {
            padding: 0,
            margin: '0 auto',
            maxWidth: '500px',
            background: 'black'
            // border: '1px solid white'
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
            <div style={styles.content}>
                <h1>
                    Greg Riss - Web Developer
            </h1>
                <Link to="/portfolio">
                    <button style={styles.button}>
                        View My Projects
                    </button>
                </Link>
            </div>
        </main>
    )
}

export default Home;