import React from 'react';
import { Link } from 'react-router-dom';
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="madath-footer">
            <div className="footer-content">

                {/* Brand Section */}
                <div className="footer-section">
                    <img src="/nav_logo.png" alt="Madath Logo" className="footer-logo-img" />
                    <p className="footer-text">
                        Building products, platforms, and services that are truly good for humanity. Business as a Service to Humanity.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/philosophy">Philosophy</Link></li>
                        <li><Link to="/multicorn">Multicorn</Link></li>
                        <li><Link to="/purpose">Our Purpose</Link></li>
                        <li><Link to="/focus">Focus Areas</Link></li>
                        <li><Link to="/join">Join Us</Link></li>
                        <li><Link to="/admin">Admin Portal</Link></li>
                    </ul>
                </div>

                {/* Policies */}
                <div className="footer-section">
                    <h3>Legal & Policies</h3>
                    <ul className="footer-links">
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/shipping">Shipping Policy</Link></li>
                        <li><Link to="/refund">Refund Policy</Link></li>
                        <li><Link to="/contact">Contact Support</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul className="contact-info">
                        <li>
                            <Phone size={18} color="#d4af37" />
                            <a href="tel:+918951172002">+91 89511 72002</a>
                        </li>
                        <li>
                            <Mail size={18} color="#d4af37" />
                            <a href="mailto:info@madath.com">info@madath.com</a>
                        </li>
                        {/* <li>
              <MapPin size={18} color="#d4af37" />
              <span>Hyderabad, India</span>
            </li> */}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Madath Good Startups. All rights reserved.</p>
                <p className="powered-by">
                    Powered by <a href="https://www.myprofunnels.com" style={{ color: '#d4af37', textDecoration: 'none' }}>MyProFunnels</a>
                </p>
            </div>
        </footer>
    );
};


export default Footer;
