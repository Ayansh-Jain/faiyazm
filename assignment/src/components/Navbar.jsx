import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Shopping', path: '/Shopping' },
        { name: 'Learning Community', path: '/Learning' },
        { name: 'Entrepreneurship', path: '/Entrepreneurship' },
        { name: 'NGOs & CSR', path: '/ngo' },

    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/nav_logo.png" alt="Madath Logo" className="nav-logo" />
                </Link>

                {/* Desktop Links */}
                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item.name} className="nav-item">
                            <Link
                                to={item.path}
                                className={location.pathname === item.path ? 'active' : ''}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                </ul>

                {/* Mobile Toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>

                {/* Mobile Menu */}
                <div className={`overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)} />
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <div key={item.name} className="nav-item">
                            <Link
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                    <div className="nav-item" style={{ marginTop: '10px' }}>
                        <a
                            href="https://community.madath.com"
                            className="nav-cta"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Join Community
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
