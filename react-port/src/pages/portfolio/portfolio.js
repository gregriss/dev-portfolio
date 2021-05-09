import React from 'react';
import codeIcon from '../../assets/code-icon-lg.svg';
import Project from '../../components/project/project';
import pathfinderImg from '../../assets/images/pathfinder-in-use.png';
import gamebopsImg from '../../assets/images/gamebops-home.png';
import employeeImg from '../../assets/images/screenshot.png';
import burgerImg from '../../assets/images/burger-home.png';
import weatherImg from '../../assets/images/weather.png';
import workImg from '../../assets/images/work-day.png';

function Portfolio() {
    const portStyles = {
        main: {
            display: 'grid',
            margin: '0 auto',
            height: 'auto',
            width: '100%',
            padding: '50px 0 400px 0'
        },

        div: {
            display: 'grid',
            gridTemplateRows: 'repeat(auto-fit, minmax(400px, 800px)'
        },

        h2: {
            fontSize: '180%'
        },

        img: {
            margin: '0px 0px -9px 3px',
        }
    }
    const projects = [
        {
            id: 1,
            title: 'Pathfinder',
            image: pathfinderImg,
            repo: 'https://github.com/Patrick-Kaczmar/Path-Finder',
            deployment: 'https://apple-shortcake-96876.herokuapp.com/',
            tech: ['Node.js', 'Passport.js', 'Handlebars', 'Express', 'MySQL', 'Sequelize', 'Google Maps API', 'Open Weather API', 'HTML/CSS', 'Bootstrap']
        },
        {
            id: 2,
            title: 'Gamebops',
            image: gamebopsImg,
            repo: 'https://github.com/Patrick-Kaczmar/GameBops',
            deployment: 'https://patrick-kaczmar.github.io/GameBops/',
            tech: ['JavaScript', 'jQuery', 'HTML/CSS', 'Foundation', 'Deezer API', 'RAWG API', 'Free-to-Game API']
        },
        {
            id: 3,
            title: 'Employee Directory',
            image: employeeImg,
            repo: 'https://github.com/gregriss/employee-directory',
            deployment: 'https://gregriss.github.io/employee-directory/',
            tech: ['React.js', 'Node.js', 'HTML/CSS', 'NPM', 'Axios', 'CSS', 'Random User API']
        },
        {
            id: 4,
            title: 'Burger Logger',
            image: burgerImg,
            repo: 'https://github.com/gregriss/log-a-burger',
            deployment: 'https://peaceful-coast-04978.herokuapp.com/',
            tech: ['Node.js', 'Express', 'Handlebars', 'JavaScript', 'HTML/CSS', 'MySQL']
        },
        {
            id: 5,
            title: 'Weather Dashboard',
            image: weatherImg,
            repo: 'https://github.com/gregriss/weather-dash',
            deployment: 'https://gregriss.github.io/weather-dash/',
            tech: ['JavaScript', 'jQuery', 'HTML/CSS', 'Open Weather API']
        },
        {
            id: 6,
            title: 'Workday Scheduler',
            image: workImg,
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
                    src={codeIcon}
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