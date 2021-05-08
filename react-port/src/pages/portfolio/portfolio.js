import React from 'react';
import Project from '../../components/project/project';

function Portfolio() {
    const portStyles = {
        main: {
            display: 'grid',
            margin: '0 auto'
            // padding: '2rem'
            // justifyContent: 'center',
            // flexFlow: 'row wrap'
        },
        div: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '1rem',
            // display: 'flex',
            // flexFlow: 'column wrap',
            // alignItems: 'flex-start',
            // marginBottom: '300px',
            // width: 'clamp(800px, 100%, 1600px)',
            border: '1px solid black'
        },

        h2: {
            fontSize: '180%'
        },

        img: {
            margin: '0px 0px -9px 3px'
        }
    }
    const projects = [
        {
            id: 1,
            title: 'Pathfinder',
            image: 'assets/images/pathfinder-in-use.png',
            repo: 'https://github.com/Patrick-Kaczmar/Path-Finder',
            deployment: 'https://apple-shortcake-96876.herokuapp.com/',
            tech: ['Node.js', 'Passport.js', 'Handlebars', 'Express', 'MySQL', 'Sequelize', 'Google Maps API', 'Open Weather API', 'HTML/CSS', 'Bootstrap']
        },
        {
            id: 2,
            title: 'Gamebops',
            image: 'assets/images/gamebops-home.png',
            repo: 'https://github.com/Patrick-Kaczmar/GameBops',
            deployment: 'https://patrick-kaczmar.github.io/GameBops/',
            tech: ['JavaScript', 'jQuery', 'HTML/CSS', 'Foundation', 'Deezer API', 'RAWG API', 'Free-to-Game API']
        },
        {
            id: 3,
            title: 'Employee Directory',
            image: 'assets/images/screenshot.png',
            repo: 'https://github.com/gregriss/employee-directory',
            deployment: 'https://gregriss.github.io/employee-directory/',
            tech: ['React.js', 'Node.js', 'HTML/CSS', 'Node Package Manager', 'Axios', 'CSS', 'Random User Generator API']
        },
        {
            id: 4,
            title: 'Burger Logger',
            image: 'assets/images/burger-home.png',
            repo: 'https://github.com/gregriss/log-a-burger',
            deployment: 'https://peaceful-coast-04978.herokuapp.com/',
            tech: ['Node.js', 'Express', 'Handlebars', 'JavaScript', 'HTML/CSS', 'MySQL']
        },
        {
            id: 5,
            title: 'Weather Dashboard',
            image: 'assets/images/weather.png',
            repo: 'https://github.com/gregriss/weather-dash',
            deployment: 'https://gregriss.github.io/weather-dash/',
            tech: ['JavaScript', 'jQuery', 'HTML/CSS', 'Open Weather API']
        },
        {
            id: 6,
            title: 'Workday Scheduler',
            image: 'assets/images/work-day.png',
            repo: 'https://github.com/gregriss/plan-your-day',
            deployment: 'https://gregriss.github.io/plan-your-day/',
            tech: ['JavaScript', 'jQuery', 'HTML/CSS']
        },
    ]
    return (
        <main className="container" style={portStyles.main}>
            <h2 style={portStyles.h2}>
                My Projects
                <img
                    src="assets/code-icon-lg.svg"
                    alt="code icon"
                    style={portStyles.img}
                />
            </h2>
            <div className="projects-content" style={portStyles.div}>
                {projects.map(project => (
                    <Project
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
        </main>
    )
}

export default Portfolio;