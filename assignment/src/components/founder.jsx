import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';
import './Founder.css';

const FounderSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.1,
                ease: 'easeInOut',
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="founder-section" ref={ref}>
            <div className="founder-bg-texture"></div>

            <div className="founder-container">
                <motion.div
                    className="founder-content-wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className="founder-image-container"
                        variants={itemVariants}
                    >
                        <img
                            src="/founder.png"
                            alt="Founder of Madath"
                            className="founder-image"
                        />
                    </motion.div>

                    <motion.div
                        className="founder-text-content"
                        variants={itemVariants}
                    >
                        <div className="founder-label-container">
                            <div className="founder-label-icon">
                                <User size={16} />
                            </div>
                            <span className="founder-label">About the Founder</span>
                        </div>

                        <h2 className="founder-name">Ghouse Faiyyaz Shaik</h2>

                        <p className="founder-body-text">
                            An IT engineer by profession, Ghouse Faiyyaz Shaik brings over 20 years of experience across:
                        </p>

                        <ul className="founder-list">
                            <li className="founder-list-item">
                                <span className="founder-bullet"></span>
                                Professional careers
                            </li>
                            <li className="founder-list-item">
                                <span className="founder-bullet"></span>
                                NGOs and community building
                            </li>
                            <li className="founder-list-item">
                                <span className="founder-bullet"></span>
                                Leadership roles
                            </li>
                            <li className="founder-list-item">
                                <span className="founder-bullet"></span>
                                Entrepreneurship
                            </li>
                        </ul>

                        <p className="founder-body-text">
                            He is an awarded entrepreneur with a deep passion for building systems, platforms, and services that change how the world experiences what is good.
                        </p>

                        <p className="founder-body-text">
                            Education, nature, and empowering people form the foundation of his work — along with supporting and guiding young entrepreneurs through Madath Good Startups.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FounderSection;
