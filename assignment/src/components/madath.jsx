import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Madath.css';

const JoinMadathSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const styles = {
        section: {
            minHeight: '100vh',
            backgroundColor: '#f9f3d3ff',
        },
        container: {
            maxWidth: '1000px',
            width: '100%',
            margin: '0 auto',
        },
        heading: {
            fontSize: 'clamp(32px, 7vw, 84px)',
            fontWeight: '600',
            color: '#1a2838',
            textAlign: 'center',
            marginBottom: '30px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: '1.2',
            letterSpacing: '0.5px',
        },
        introLine: {
            fontSize: 'clamp(20px, 2.5vw, 30px)',
            lineHeight: '1.6',
            color: '#3a4a5a',
            textAlign: 'center',
            marginBottom: '90px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400',
            letterSpacing: '0.3px',
        },
        pathsContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
            marginBottom: '80px',
        },
        pathBlock: {
            textAlign: 'center',
            padding: '50px 30px',
            borderTop: '1px solid rgba(212, 175, 55, 0.2)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        },
        pathTitle: {
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '600',
            color: '#1a2838',
            marginBottom: '25px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.3',
            letterSpacing: '0.5px',
        },
        pathDescription: {
            fontSize: 'clamp(16px, 1.9vw, 20px)',
            lineHeight: '1.8',
            color: '#3a4a5a',
            marginBottom: '40px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: '300',
            maxWidth: '700px',
            margin: '0 auto 40px',
            letterSpacing: '0.2px',
        },
        buttonBase: {
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            fontWeight: '500',
            padding: '18px 45px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            letterSpacing: '0.5px',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            textDecoration: 'none',
        },
        ideaButton: {
            backgroundColor: '#d4af37',
            color: '#1a2838',
        },
        skillButton: {
            backgroundColor: '#1a2838',
            color: '#ffffff',
        },
        investmentButton: {
            backgroundColor: '#0d3d2d',
            color: '#d4af37',
        },
        divider: {
            width: '100px',
            height: '1px',
            backgroundColor: '#d4af37',
            opacity: '0.35',
            margin: '0 auto',
        },
        pathImage: {
            width: '120px',
            height: 'auto',
            marginBottom: '30px',
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
            transition: 'transform 0.3s ease',
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.1,
                ease: 'easeInOut',
                staggerChildren: 0.35,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    const pathVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.95,
                ease: 'easeOut',
            },
        },
    };

    const buttonHoverVariants = {
        hover: {
            scale: 1.03,
            transition: { duration: 0.25, ease: 'easeOut' }
        },
        tap: {
            scale: 0.98,
            transition: { duration: 0.15 }
        }
    };

    const participationPaths = [
        {
            title: 'Idea',
            description: 'Share ideas that can benefit individuals, communities, or society. Submit an idea title, description, and supporting material that reflects your vision for positive change.',
            buttonLabel: 'Share an Idea',
            buttonStyle: styles.ideaButton,
            link: 'https://community.madath.com',
            imgSrc: '/idea_icon.png',
        },
        {
            title: 'Skill',
            description: 'Contribute your skills — technical, educational, creative, or operational — and be part of building meaningful systems that serve humanity with purpose and integrity.',
            buttonLabel: 'Contribute Your Skills',
            buttonStyle: styles.skillButton,
            link: 'https://community.madath.com',
            imgSrc: '/skill_icon.png',
        },
        {
            title: 'Investment',
            description: 'Support initiatives you believe can create real and lasting positive impact. Join us in building ventures where capital serves goodness, dignity, and long-term responsibility.',
            buttonLabel: 'Support with Investment',
            buttonStyle: styles.investmentButton,
            link: 'https://community.madath.com',
            imgSrc: '/investment_icon.png',
        },
    ];

    return (
        <section style={styles.section} ref={ref} className="responsive-section">
            <motion.div
                style={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2 variants={itemVariants} style={styles.heading}>
                    Join Madath
                </motion.h2>

                <motion.p variants={itemVariants} style={styles.introLine}>
                    Everyone can contribute something good.
                </motion.p>

                <motion.div
                    className="join-paths-container"
                    variants={containerVariants}
                >
                    {participationPaths.map((path, index) => (
                        <motion.div
                            key={index}
                            variants={pathVariants}
                            className="join-path-block"
                        >
                            <motion.img
                                src={path.imgSrc}
                                alt={path.title}
                                style={styles.pathImage}
                                whileHover={{ scale: 1.1 }}
                            />
                            <h3 style={styles.pathTitle}>{path.title}</h3>
                            <p style={styles.pathDescription}>{path.description}</p>
                            <motion.a
                                href={path.link}
                                style={{ ...styles.buttonBase, ...path.buttonStyle }}
                                variants={buttonHoverVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                {path.buttonLabel}
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants} style={styles.divider}></motion.div>
            </motion.div>
        </section>
    );
};

export default JoinMadathSection;