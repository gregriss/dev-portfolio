import React from 'react';
// import { Link } from "react-router-dom";

function Project(props) {
    return (
        <div style={{ padding: '20px 40px 60px 40px' }}>
            <h3 style={{ fontSize: '150%', color: '#e7e7e7' }}>
                {`${props.id}. ${props.title}`}
            </h3>
            <img
                src={props.image}
                alt={props.title}
                style={{
                    width: 'clamp(300px, 600px, 800px)'
                }}
            />
            {/* <Link to={{
                pathname: `${props.repo}`
            }} */}
            <a href={props.repo}
                target="_blank"
                rel="noreferrer"
                className="port-link"
                style={{
                    display: 'block',
                    background: 'black',
                    filter: 'brightness(2)',
                    margin: '5px',
                    padding: '8px',
                    fontSize: '125%',
                    fontWeight: 'bold'
                }}
            >
                Code
            </a>
            {/* </Link> */}
            {/* <Link to={{
                pathname: `${props.deployment}`
            }} */}
            <a href={props.deployment}
                target="_blank"
                rel="noreferrer"
                style={{
                    display: 'block',
                    background: 'black',
                    filter: 'brightness(2)',
                    margin: '5px',
                    padding: '8px',
                    fontSize: '125%',
                    fontWeight: 'bold'
                }}
            >
                Live Site
            </a>
            {/* </Link> */}
            <ul>{props.tech.map(item => (
                <li style={{
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: '#00004d',
                    color: '#e7e7e7',
                    fontSize: '105%',
                    fontWeight: 'normal',
                    textAlign: 'center',
                    margin: '3px',
                    padding: '0px 3px',
                    height: '50px',
                    border: '1px solid #e7e7e7',
                    borderRadius: '20px'
                }}
                >
                    {`${item}`}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Project;