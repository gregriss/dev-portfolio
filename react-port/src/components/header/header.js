import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/">
                    Greg Riss
                </Link>
                <div>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/home"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Home
                                </Link>
                        </li>
                        <li>
                            <Link
                                to="/portfolio"
                                className={
                                    window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                            >
                                My Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={
                                    window.location.pathname === "/contact"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Contact
                                </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={
                                    window.location.pathname === "/about"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                About Me
                                </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;