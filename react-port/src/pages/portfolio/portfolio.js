import React from 'react';
import Project from '../../components/project/project';

function Portfolio() {

    const portStyles = {
        div: {
            display: 'flex',
            flexFlow: 'row wrap'
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
        <div className="container" style={portStyles.div}>
            <h2>
                My Projects
            </h2>
            <div className="projects-content">
                {projects.map(project => (
                    <Project
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
            {/* <Link
                to={{
                    pathname: "https://github.com/Patrick-Kaczmar/Path-Finder"
                }}
                target="_blank"
                className="port-link">
                Repo
            </Link> */}
        </div>
    )
}

export default Portfolio;