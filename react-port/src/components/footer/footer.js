import React from 'react';
// import { Link } from "react-router-dom";
import './style.css';
// import phone from '../../assets/phone-icon.svg';
import envelope from '../../assets/envelope-icon-sm.svg';
import pdf from '../../assets/pdf-icon.svg';
import resume from '../../assets/resume/resume.pdf';
import github from '../../assets/github-icon-lg.svg';
import linkedIn from '../../assets/linkedin-icon.svg';

function Footer() {
    // const footerItems = [
    //     {
    //         id: 1

    //     }
    // ]
    return (
        <footer>
            <span style={{ fontSize: '110%' }}>
                608-513-4734
            </span>
            {/* <Link */}
            <a
                href="mailto:gregriss23@gmail.com"
                id="email"
                className="footer-links"
            >
                <img
                    src={envelope}
                    className="icon"
                    alt="envelope icon"
                />
            </a>
            {/* </Link> */}
            {/* <Link */}
            <a
                // to={{
                //     pathname: "../../assets/resume/resume.pdf"
                // }}
                href={resume}
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
            </a>
            {/* </Link> */}
            {/* <Link
                to=
                {{
                    pathname: "https://www.linkedin.com/in/greg-riss-3023b191/"
                }} */}
            <a href="https://www.linkedin.com/in/greg-riss"
                id="linkedIn"
                className="footer-links"
                target="_blank">
                <img src={linkedIn} alt="linkedin icon" />
            </a>
            {/* </Link> */}
            {/* <Link
                to=
                {{
                    pathname: "https://github.com/gregriss"
                }} */}
            <a href="https://github.com/gregriss"
                id="github"
                className="footer-links"
                target="_blank">
                <img
                    src={github}
                    alt="github icon"
                />
            </a>
            {/* </Link> */}
            <h5 className="footer-links">{[<span>&#169; </span>, 'Greg Riss 2021']}</h5>
        </footer >
    )
}

export default Footer;