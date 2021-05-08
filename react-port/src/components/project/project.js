import React from 'react';
import { Link } from "react-router-dom";

function Project(props) {
    return (
        <div>
            <h3>
                {props.title}
            </h3>
            <img
                src={props.image}
                alt={props.title}
                style={{ height: 'auto', width: 'clamp(400px, 600px, 800px)' }}
            />
            <Link to={{
                pathname: `${props.repo}`
            }}
                target="_blank"
                className="port-link"
                style={{ display: 'block' }}
            >
                Code
            </Link>
            <Link to={{
                pathname: `${props.deployment}`
            }}
                target="_blank"
                style={{ display: 'block' }}
            >
                Live Site
            </Link>
        </div>
    )
}

export default Project;