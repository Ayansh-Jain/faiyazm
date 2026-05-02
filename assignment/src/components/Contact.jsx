import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Legal.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. We will get back to you soon.");
    };

    return (
        <div className="legal-page">
            <h1>Contact Us</h1>
            <div className="legal-content">
                <p>We would love to hear from you. Whether you have a question about our initiatives, want to partner with us, or just want to say hello.</p>

                <div className="contact-container">
                    <div className="contact-info-card">
                        <div className="contact-method">
                            <Mail size={24} color="#d4af37" />
                            <div>
                                <h3>Email Us</h3>
                                <p>For general inquiries:</p>
                                <a href="mailto:info@madath.com">info@madath.com</a>
                            </div>
                        </div>

                        <div className="contact-method">
                            <Phone size={24} color="#d4af37" />
                            <div>
                                <h3>Call Us</h3>
                                <p>Mon-Fri from 9am to 6pm:</p>
                                <a href="tel:+918951172002">+91 89511 72002</a>
                            </div>
                        </div>

                        <div className="contact-method">
                            <MapPin size={24} color="#d4af37" />
                            <div>
                                <h3>Visit Us</h3>
                                <p>Hyderabad, India</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" required placeholder="John Doe" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" required placeholder="john@example.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" required placeholder="How can we help?" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" required placeholder="Your message here..."></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
