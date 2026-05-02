import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FocusAreasSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const styles = {
        section: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, rgba(13, 21, 61, 0.92) 0%, rgba(26, 35, 93, 0.88) 50%, rgba(13, 17, 61, 0.92) 100%), url(/focus_bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative',
        },
        gradientOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
        },
        container: {
            maxWidth: '1000px',
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
        },
        heading: {
            fontSize: 'clamp(42px, 6.5vw, 80px)',
            fontWeight: '700',
            color: '#d4af37',
            textAlign: 'center',
            marginBottom: '50px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: '1.2',
            letterSpacing: '0.5px',
        },
        introLine: {
            fontSize: 'clamp(17px, 2vw, 22px)',
            lineHeight: '1.8',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '90px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: '300',
            maxWidth: '800px',
            margin: '0 auto 90px',
            letterSpacing: '0.3px',
        },
        divider: {
            width: '100px',
            height: '1px',
            backgroundColor: '#d4af37',
            opacity: '0.4',
            margin: '0 auto 80px',
        },
        focusAreasContainer: {
            marginBottom: '90px',
        },
        focusAreaItem: {
            marginBottom: '70px',
            textAlign: 'center',
        },
        focusAreaTitle: {
            fontSize: 'clamp(26px, 3.2vw, 42px)',
            color: '#d4af37',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            fontWeight: '600',
            lineHeight: '1.3',
            letterSpacing: '0.5px',
        },
        focusAreaDescription: {
            fontSize: 'clamp(16px, 1.9vw, 20px)',
            lineHeight: '1.8',
            color: '#f5f5dc',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: '300',
            maxWidth: '750px',
            margin: '0 auto',
            letterSpacing: '0.2px',
        },
        closingLine: {
            fontSize: 'clamp(20px, 2.5vw, 30px)',
            color: '#d4af37',
            textAlign: 'center',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            lineHeight: '1.6',
            marginTop: '80px',
            letterSpacing: '0.5px',
        },
        bottomDivider: {
            width: '100px',
            height: '1px',
            backgroundColor: '#d4af37',
            opacity: '0.4',
            margin: '70px auto 0',
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: 'easeInOut',
                staggerChildren: 0.4,
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

    const focusAreaVariants = {
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

    const focusAreas = [
        {
            title: 'Education & Community Learning',
            description: 'Creating meaningful learning experiences rooted in values and real-life relevance.',
        },
        {
            title: 'Good Startup Incubation Platform',
            description: 'Supporting founders and ideas that aim to build responsibly and serve society.',
        },
        {
            title: 'In-House Products & Services',
            description: 'Developing solutions that benefit humanity in this world and beyond.',
        },
    ];

    return (
        <section style={styles.section} ref={ref} className="responsive-section">
            <div style={styles.gradientOverlay}></div>

            <motion.div
                style={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2 variants={itemVariants} style={styles.heading}>
                    Where Madath Is Building
                </motion.h2>

                <motion.p variants={itemVariants} style={styles.introLine}>
                    Our journey is long-term and multi-domain, guided by responsibility and rooted in service. We are building across areas where impact can be deep, lasting, and truly good.
                </motion.p>

                <motion.div variants={itemVariants} style={styles.divider}></motion.div>

                <motion.div
                    style={styles.focusAreasContainer}
                    variants={containerVariants}
                >
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            variants={focusAreaVariants}
                            style={styles.focusAreaItem}
                        >
                            <h3 style={styles.focusAreaTitle}>{area.title}</h3>
                            <p style={styles.focusAreaDescription}>{area.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p variants={itemVariants} style={styles.closingLine}>
                    "Our portfolio will continue to grow. We invite you to grow with us."
                </motion.p>

                <motion.div variants={itemVariants} style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '14px 35px',
                                fontSize: '17px',
                                fontWeight: '500',
                                color: '#d4af37',
                                backgroundColor: 'transparent',
                                border: '1px solid #d4af37',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                letterSpacing: '0.5px'
                            }}
                        >
                            Partner with Us
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div variants={itemVariants} style={styles.bottomDivider}></motion.div>
            </motion.div>
        </section>
    );
};

export default FocusAreasSection;