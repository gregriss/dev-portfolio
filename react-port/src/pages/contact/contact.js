import React from 'react';

function Contact() {
    return (
        <div class="container contact-content col-lg-7">
            <h2 class="contact-h2">
                Contact
            <img src="assets/envelope-icon.svg" class="icon" alt="envelope icon" />
            </h2>
            <hr />
            <form netlify>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input name="name" type="text" id="nameInput" class="form-control" placeholder="Name" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input name="email" type="email" id="emailInput" class="form-control" placeholder="Email" />
                </div>
                <div class="mb-3">
                    <label for="userMessage" class="form-label">Message</label>
                    <textarea id="userMessage" class="form-control" name="userMessage" rows="3"
                        placeholder="Type your message..."></textarea>
                </div>
                <button id="contact-submit-btn" type="submit" class="btn btn-outline-light btn-lg">Submit</button>
            </form>
            <hr />
        </div>
    )
}

export default Contact;