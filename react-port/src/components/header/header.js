import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
function Header() {
    return (
        <header className="header">
            <nav>
                <div className="brand-div">

                    <Link to="/">
                        <button className="brand-btn">
                            Greg Riss - Web Developer
                            </button>
                    </Link>
                </div>
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
                                <span className="header-span">
                                    Home
                              </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/portfolio"
                                className={
                                    window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                            >
                                <span className="header-span">
                                    My Projects
                              </span>
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
                                <span className="header-span">
                                    Contact
                            </span>
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
                                <span className="header-span">
                                    About Me
                              </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;