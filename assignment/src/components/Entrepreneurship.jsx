import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe, Handshake, ArrowRight } from 'lucide-react';
import './Entrepreneurship.css';

const Entrepreneurship = () => {
    return (
        <section className="entrepreneurship-section">
            <div className="entrepreneurship-hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="main-title1">Entrepreneurship</h1>
                    <h2 className="sub-title">Madath Good Startups (MGS)</h2>
                </motion.div>
            </div>

            <div className="content-container">
                <motion.div
                    className="content-block mgs-intro"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="narrative-text">
                        <p>
                            You may have an idea that could help humanity—but it fades away because you don’t have the time.
                        </p>
                        <p>
                            Someone, somewhere else in the world, has the investment your idea needs.
                        </p>
                        <p>
                            And someone else has the skills to bring it to life.
                        </p>
                    </div>

                    <div className="highlight-box">
                        <p className="main-statement">
                            Madath Good Startups (MGS) Entrepreneurship is the place where all of you come together.
                        </p>
                        <p className="sub-statement">
                            A community to connect ideas, skills, and resources—discuss openly, collaborate meaningfully, and turn good ideas into reality for the goodness of humanity.
                        </p>
                    </div>
                </motion.div>

                {/* Call Action */}
                <motion.div
                    className="cta-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://community.madath.com"
                        className="cta-button"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                        Join Good Startups <ArrowRight size={20} />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Entrepreneurship;
