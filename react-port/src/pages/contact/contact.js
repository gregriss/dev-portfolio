import React from 'react';
import './style.css';
import envelope from '../../assets/envelope-icon.svg';
function Contact() {
    return (
        <div className="container">
            <div className="contact-content">
                <form>
                    <h2 className="contact-h2">
                        Contact
                    <img src={envelope} className="icon" alt="envelope icon" />
                    </h2>
                    <div className="form-field">
                        <label className="form-label">Name</label>
                        <input name="name" type="text" id="nameInput" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-field">
                        <label className="form-label">Email</label>
                        <input name="email" type="email" id="emailInput" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="userMessage" className="form-label">Message</label>
                        <textarea id="userMessage" className="form-control" name="userMessage" rows="3"
                            placeholder="Type your message..."></textarea>
                    </div>
                    <button id="contact-submit-btn" type="submit" className="btn btn-outline-light btn-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;