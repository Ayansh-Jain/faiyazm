import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PhilosophySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const styles = {
        section: {
            minHeight: '100vh',
            backgroundColor: '#f9f3d3ff',
        },
        container: {
            maxWidth: '900px',
            width: '100%',
            margin: '0 auto',
        },
        heading: {
            fontSize: 'clamp(32px, 6vw, 72px)',
            fontWeight: '600',
            color: '#1a2838',
            textAlign: 'center',
            marginBottom: '20px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: '1.2',
        },
        subHeading: {
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontWeight: '400',
            color: '#d4af37',
            textAlign: 'center',
            marginBottom: '80px',
            fontFamily: 'Georgia, serif',
            letterSpacing: '1px',
        },
        divider: {
            width: '80px',
            height: '1px',
            backgroundColor: '#d4af37',
            opacity: '0.3',
            margin: '0 auto 60px',
        },
        verse: {
            fontSize: 'clamp(18px, 2.2vw, 26px)',
            fontStyle: 'italic',
            color: '#d4af37',
            textAlign: 'center',
            marginBottom: '80px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto 80px',
        },
        philosophyText: {
            fontSize: 'clamp(17px, 2vw, 21px)',
            lineHeight: '1.9',
            color: '#3a4a5a',
            textAlign: 'center',
            marginBottom: '80px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: '300',
            maxWidth: '800px',
            margin: '0 auto 80px',
        },
        beliefsContainer: {
            marginBottom: '80px',
        },
        beliefItem: {
            fontSize: 'clamp(20px, 2.5vw, 32px)',
            color: '#1a2838',
            textAlign: 'center',
            marginBottom: '35px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400',
            lineHeight: '1.5',
        },
        beliefHighlight: {
            color: '#d4af37',
            fontWeight: '500',
        },
        closingLine: {
            fontSize: 'clamp(19px, 2.3vw, 28px)',
            color: '#d4af37',
            textAlign: 'center',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            lineHeight: '1.6',
            marginTop: '60px',
        },
        bottomDivider: {
            width: '80px',
            height: '1px',
            backgroundColor: '#d4af37',
            opacity: '0.3',
            margin: '60px auto 0',
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
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

    const beliefVariants = {
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

    const beliefs = [
        { main: 'Responsibility', rest: 'over exploitation' },
        { main: 'Cooperation', rest: 'over competition' },
        { main: 'Service', rest: 'over self-interest' },
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
                    The Philosophy
                </motion.h2>

                <motion.h3 variants={itemVariants} style={styles.subHeading}>
                    Our Spiritual Foundation
                </motion.h3>

                <motion.div variants={itemVariants} style={styles.divider}></motion.div>

                <motion.p variants={itemVariants} style={styles.verse}>
                    "And We made you nations and communities so that you may know one another."
                </motion.p>

                <motion.p variants={itemVariants} style={styles.philosophyText}>
                    The Creator allows differences and challenges not to divide us, but so that humanity learns to support, serve, and uplift one another. When business is guided by sincere intention and deep responsibility, it transforms from transaction into service — from profit into purpose. This is not idealism. This is the recognition that our work, our ventures, and our innovations are meant to be instruments of good in the world.
                </motion.p>

                <motion.div
                    style={styles.beliefsContainer}
                    variants={containerVariants}
                >
                    {beliefs.map((belief, index) => (
                        <motion.div
                            key={index}
                            variants={beliefVariants}
                            style={styles.beliefItem}
                        >
                            <span style={styles.beliefHighlight}>{belief.main}</span> {belief.rest}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p variants={itemVariants} style={styles.closingLine}>
                    Here, impact is not an afterthought — it is the starting point.
                </motion.p>

                <motion.div variants={itemVariants} style={styles.bottomDivider}></motion.div>
            </motion.div>
        </section>
    );
};

export default PhilosophySection;