import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
// import phone from '../../assets/phone-icon.svg';
import envelope from '../../assets/envelope-icon-sm.svg';
import pdf from '../../assets/pdf-icon.svg';
import github from '../../assets/github-icon-lg.svg';
import linkedIn from '../../assets/linkedin-icon.svg';

function Footer() {
    return (
        <footer>
            <span style={{ fontSize: '125%' }}>
                608-513-4734
            </span>
            <Link
                to={{
                    pathname: "mailto:gregriss23@gmail.com"
                }}
                id="email"
                className="footer-links"
            >
                <img
                    src={envelope}
                    className="icon"
                    alt="envelope icon"
                />
            </Link>
            <Link
                to={{
                    pathname: "../../assets/resume/resume.pdf"
                }}
                id="resume"
                className="footer-links"
                target="_blank">
                <span
                    id="resume-modal"
                    className="footer-links hide">
                </span>
                <img
                    src={pdf}
                    alt="resume icon"
                />
            </Link>
            <Link
                to=
                {{
                    pathname: "https://www.linkedin.com/in/greg-riss-3023b191/"
                }}
                id="linkedIn"
                className="footer-links"
                target="_blank">
                <img src={linkedIn} alt="linkedin icon" />
            </Link>
            <Link
                to=
                {{
                    pathname: "https://github.com/gregriss"
                }}
                id="github"
                className="footer-links"
                target="_blank">
                <img
                    src={github}
                    alt="github icon"
                />
            </Link>
            <h5 className="footer-links">{[<span>&#169; </span>, 'Greg Riss 2021']}</h5>
        </footer >
    )
}

export default Footer;