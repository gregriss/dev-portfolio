import React from 'react';
import { Link } from "react-router-dom";

function Project(props) {
    return (
        <div style={{ background: '#808080', padding: '20px 40px 60px 40px' }}>
            <h3 style={{ fontSize: '150%' }}>
                {props.title}
            </h3>
            <img
                src={props.image}
                alt={props.title}
                style={{ width: 'clamp(300px, 600px, 800px)' }}
            />
            <Link to={{
                pathname: `${props.repo}`
            }}
                target="_blank"
                className="port-link"
                style={{ display: 'block', margin: '5px', fontSize: '120%' }}
            >
                Code
            </Link>
            <Link to={{
                pathname: `${props.deployment}`
            }}
                target="_blank"
                style={{ display: 'block', margin: '5px', fontSize: '120%' }}
            >
                Live Site
            </Link>
            <ul>{props.tech.map(item => (
                <li style={{ backgroundColor: '#00004d', color: 'white', height: '40px', padding: '5px', textAlign: 'center', alignSelf: 'center', borderRadius: '20px' }}>{`${item}`}</li>
            ))}</ul>
        </div>
    )
}

export default Project;