import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Footer() {

    function toggleDisplay() {
        this.classList.toggle('hide');
        // document.querySelector('#phone-modal').classList.toggle('hide');
    }
    return (
        <footer>
            <span
                onClick={() => toggleDisplay}
                id="phone"
                className="footer-links">
                <span
                    id="phone-modal"
                    className="footer-links hide">
                    608-513-4734
                </span>
                <img
                    src="assets/phone-icon.svg"
                    className="icon"
                    alt="phone icon"
                />
            </span>
            <Link
                to={{
                    pathname: "mailto:gregriss23@gmail.com"
                }}
                id="email"
                className="footer-links"
            >
                <img
                    src="assets/envelope-icon-sm.svg"
                    className="icon"
                    alt="envelope icon"
                />
            </Link>
            <Link
                to={{
                    pathname: "assets/resume/resume.pdf"
                }}
                id="resume"
                className="footer-links"
                target="_blank">
                <span
                    id="resume-modal"
                    className="footer-links hide">
                </span>
                <img
                    src="assets/pdf-icon.svg"
                    alt="pdf icon"
                />
            </Link>
            <Link
                to=
                {{
                    pathname: "https://www.linkedin.com/in/greg-riss-3023b191/"
                }}
                id="linkedIn"
                className="footer-links icon"
                target="_blank">
                <img src="assets/linkedin-icon.svg" alt="linkedin icon" />
            </Link>
            <Link
                to=
                {{
                    pathname: "https://github.com/gregriss"
                }}
                id="github"
                className="footer-links icon"
                target="_blank">
                <img
                    src="assets/github-icon-lg.svg"
                    alt="github icon"
                />
            </Link>
            <h5>{[<span>&#169; </span>, 'Greg Riss 2021']}</h5>
        </footer >
    )
}

export default Footer;