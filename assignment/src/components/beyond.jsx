import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const MulticornSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const styles = {
        section: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, rgba(13, 22, 61, 0.92) 0%, rgba(26, 43, 93, 0.88) 50%, rgba(13, 31, 61, 0.92) 100%), url(/beyond_bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            padding: '120px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
        },
        gradientOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
        },
        container: {
            maxWidth: '1000px',
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
        },
        mainHeading: {
            fontSize: 'clamp(32px, 7vw, 84px)',
            fontWeight: '700',
            color: '#d4af37',
            textAlign: 'center',
            marginBottom: '30px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: '1.15',
            letterSpacing: '1px',
        },
        subHeading: {
            fontSize: 'clamp(20px, 3vw, 34px)',
            fontWeight: '400',
            color: '#f5f5dc',
            textAlign: 'center',
            marginBottom: '70px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.4',
            letterSpacing: '0.5px',
        },
        divider: {
            width: '100px',
            height: '1px',
            backgroundColor: '#d4af37',
            opacity: '0.4',
            margin: '0 auto 70px',
        },
        explanatoryText: {
            fontSize: 'clamp(17px, 2vw, 22px)',
            lineHeight: '1.9',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '80px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: '300',
            maxWidth: '850px',
            margin: '0 auto 80px',
            letterSpacing: '0.3px',
        },
        principlesContainer: {
            marginBottom: '80px',
            maxWidth: '750px',
            margin: '0 auto 80px',
        },
        principleItem: {
            fontSize: 'clamp(22px, 2.8vw, 36px)',
            color: '#d4af37',
            textAlign: 'center',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif',
            fontWeight: '500',
            lineHeight: '1.5',
            letterSpacing: '0.5px',
        },
        closingStatement: {
            fontSize: 'clamp(20px, 2.5vw, 32px)',
            color: '#d4af37',
            textAlign: 'center',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            lineHeight: '1.6',
            marginTop: '70px',
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

    const principleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: 'easeOut',
            },
        },
    };

    const principles = [
        'Business as a service',
        'Growth with shared responsibility',
        'Impact-led valuation',
        'Creating only good products and services that do no harm',
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
                <motion.h2 variants={itemVariants} style={styles.mainHeading}>
                    Beyond Unicorns. Toward Multicorns.
                </motion.h2>

                <motion.h3 variants={itemVariants} style={styles.subHeading}>
                    The world does not need more greed-driven unicorns
                </motion.h3>

                <motion.div variants={itemVariants} style={styles.divider}></motion.div>

                <motion.p variants={itemVariants} style={styles.explanatoryText}>
                    Chasing growth at any cost often ignores the long-term harm it creates — to communities, to dignity, to the earth itself. What the world truly needs are ventures that grow with others, not at the cost of others. Success must be redefined not by how fast we extract value, but by how much good we create along the way.
                </motion.p>

                <motion.div
                    style={styles.principlesContainer}
                    variants={containerVariants}
                >
                    {principles.map((principle, index) => (
                        <motion.div
                            key={index}
                            variants={principleVariants}
                            style={styles.principleItem}
                        >
                            {principle}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p variants={itemVariants} style={styles.closingStatement}>
                    "At Madath, valuation follows impact — not the other way around."
                </motion.p>

                <motion.div variants={itemVariants} style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Link to="/join" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '16px 40px',
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#1a2838',
                                backgroundColor: '#d4af37',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontFamily: 'Georgia, serif',
                                letterSpacing: '0.5px'
                            }}
                        >
                            Join the Movement
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div variants={itemVariants} style={styles.bottomDivider}></motion.div>
            </motion.div>
        </section>
    );
};

export default MulticornSection;