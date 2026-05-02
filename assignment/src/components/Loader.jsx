import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
            transition={{ duration: 0.5 }}
        >
            <div className="loader-content">
                <motion.div
                    className="logo-wrapper"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
                    }}
                >
                    <motion.img
                        src="/madath_logo.png"
                        alt="Madath Logo"
                        className="loader-logo"
                        animate={{
                            filter: [
                                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
                                "drop-shadow(0 0 25px rgba(212, 175, 55, 0.25))",
                                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))"
                            ]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                <motion.div
                    className="loading-bar-container"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    <motion.div
                        className="loading-bar"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.8 }}
                    />
                </motion.div>

                <motion.div
                    className="loading-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    Good Startups
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
