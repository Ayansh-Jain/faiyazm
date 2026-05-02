import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FounderSection from './founder';

const PurposeSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const styles = {
        section: {
            minHeight: '100vh',
            backgroundColor: '#f9f3d3ff',
        },
        container: {
            maxWidth: '950px',
            width: '100%',
            margin: '0 auto',
        },
        heading: {
            fontSize: 'clamp(42px, 6vw, 76px)',
            fontWeight: '600',
            color: '#1a2838',
            textAlign: 'center',
            marginBottom: '70px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: '1.2',
            letterSpacing: '0.5px',
        },
        divider: {
            width: '90px',
            height: '1px',
            backgroundColor: '#d4af37',
            opacity: '0.35',
            margin: '0 auto 70px',
        },
        quote: {
            fontSize: 'clamp(19px, 2.3vw, 28px)',
            fontStyle: 'italic',
            color: '#d4af37',
            textAlign: 'center',
            marginBottom: '80px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.7',
            maxWidth: '750px',
            margin: '0 auto 80px',
            letterSpacing: '0.3px',
        },
        purposeText: {
            fontSize: 'clamp(17px, 2vw, 22px)',
            lineHeight: '1.9',
            color: '#3a4a5a',
            textAlign: 'center',
            marginBottom: '90px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: '300',
            maxWidth: '850px',
            margin: '0 auto 90px',
            letterSpacing: '0.2px',
        },
        commitmentsContainer: {
            marginBottom: '90px',
            maxWidth: '700px',
            margin: '0 auto 90px',
        },
        commitmentItem: {
            fontSize: 'clamp(21px, 2.6vw, 34px)',
            color: '#1a2838',
            textAlign: 'center',
            marginBottom: '38px',
            fontFamily: 'Georgia, serif',
            fontWeight: '500',
            lineHeight: '1.5',
            letterSpacing: '0.5px',
        },
        commitmentHighlight: {
            color: '#d4af37',
        },
        questionDivider: {
            width: '90px',
            height: '1px',
            backgroundColor: '#d4af37',
            opacity: '0.35',
            margin: '0 auto 60px',
        },
        coreQuestion: {
            fontSize: 'clamp(24px, 3.5vw, 44px)',
            color: '#d4af37',
            textAlign: 'center',
            fontFamily: 'Georgia, serif',
            fontWeight: '600',
            lineHeight: '1.4',
            marginBottom: '40px',
            letterSpacing: '0.5px',
        },
        questionContext: {
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            color: '#3a4a5a',
            textAlign: 'center',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: '300',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto',
            letterSpacing: '0.2px',
        },
        bottomDivider: {
            width: '90px',
            height: '1px',
            backgroundColor: '#d4af37',
            opacity: '0.35',
            margin: '70px auto 0',
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.1,
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

    const commitmentVariants = {
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

    const commitments = [
        'Uplift communities',
        'Protect human dignity',
        'Encourage ethical growth',
        'Leave a positive footprint in this world and beyond',
    ];

    return (
        <><FounderSection />
        <section style={styles.section} ref={ref} className="responsive-section">
            <motion.div
                style={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2 variants={itemVariants} style={styles.heading}>
                    Our Purpose & Commitment
                </motion.h2>

                <motion.div variants={itemVariants} style={styles.divider}></motion.div>

                <motion.p variants={itemVariants} style={styles.quote}>
                    "The best among people are those who benefit others."
                </motion.p>

                <motion.p variants={itemVariants} style={styles.purposeText}>
                    Madath exists to build systems, products, and platforms that genuinely uplift communities and protect human dignity. We are committed to creating value that respects the wholeness of life — value that honors both material needs and spiritual purpose. Every initiative we undertake is measured not by speed or scale alone, but by the depth of good it brings into the world.
                </motion.p>

                <motion.div
                    style={styles.commitmentsContainer}
                    variants={containerVariants}
                >
                    {commitments.map((commitment, index) => (
                        <motion.div
                            key={index}
                            variants={commitmentVariants}
                            style={styles.commitmentItem}
                        >
                            {commitment}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants} style={styles.questionDivider}></motion.div>

                <motion.p variants={itemVariants} style={styles.coreQuestion}>
                    "Is this good for humanity?"
                </motion.p>

                <motion.p variants={itemVariants} style={styles.questionContext}>
                    This is the single guiding question behind every Madath initiative. If the answer is not a clear and resounding yes, we do not proceed.
                </motion.p>

                <motion.div variants={itemVariants} style={styles.bottomDivider}></motion.div>
            </motion.div>
        </section>
        </>
    );
};

export default PurposeSection;