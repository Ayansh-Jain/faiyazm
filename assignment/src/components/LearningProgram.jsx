import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, ArrowRight, Target, ShieldCheck } from 'lucide-react';
import './LearningProgram.css';

const LearningProgram = () => {
    return (
        <section className="learning-section">
            <div className="learning-hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="main-title">Learning Community</h1>
                    <h2 className="sub-title">Madath Learning Platform (MLP)</h2>
                </motion.div>
            </div>

            <div className="content-container">
                {/* Philosophy Section */}
                <motion.div
                    className="content-block philosophy"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="quote-box">
                        <p>
                            "Knowledge is divine—a gift that enables us to distinguish right from wrong, to learn from our experiences, and to choose the best possible course of action. <br />
                            <span className="highlight">Skill, on the other hand, is a basic necessity for survival and a fundamental right of every individual.</span>"
                        </p>
                    </div>
                    <div className="cta-button-container">
                                        <a
                        href="https://community.madath.com"
                        className="cta-button"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                        Join the Community <ArrowRight size={20} />
                    </a>
                    </div>
                </motion.div>

                {/* The Challenge */}
                <motion.div
                    className="content-block challenge"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="section-header">
                        <Target size={40} className="section-icon" />
                        <h3>The Challenge</h3>
                    </div>
                    <p className="text-body">
                        In today’s era, skills have become heavily monetized. Quality skill training is often confined to the elite and those who can afford high fees. Financially weak learners are pushed into the trap of so-called commercial training institutes that charge premium prices but deliver average training through under-skilled trainers. These programs are rarely real-time or industry-relevant, and most fail to lead to actual employment.
                    </p>
                    <p className="text-body">
                        NGOs step in to rescue the situation by funding training centers, but they too have limitations in scale, reach, and sustainability.
                    </p>
                </motion.div>

                {/* The Solution */}
                <motion.div
                    className="content-block solution"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="section-header">
                        <Lightbulb size={40} className="section-icon" />
                        <h3>The Solution: Madath Learning Platform</h3>
                    </div>
                    <p className="text-body">
                        <strong>Madath Learning Platform (MLP)</strong> is an initiative of Madath Good Startups created to address this universal challenge.
                    </p>
                    <div className="feature-cards">
                        <div className="feature-card">
                            <Users size={32} />
                            <h4>For Mentors</h4>
                            <p>If you possess practical skills and can train others with quality, industry experience, MLP provides a free platform and assistance to create full-fledged courses. Join a community of experts.</p>
                        </div>
                        <div className="feature-card">
                            <ShieldCheck size={32} />
                            <h4>For NGOs</h4>
                            <p>Partner with MLP to provide infrastructure, funding, and mentorship, scaling your impact sustainably.</p>
                        </div>
                        <div className="feature-card">
                            <Target size={32} />
                            <h4>For Students</h4>
                            <p>Join skill communities at minimal cost. Learn with peers and pay only for 1:1 mentorship or advanced training at reasonable prices.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Vision & CTA */}
                <motion.div
                    className="content-block vision"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="vision-text">
                        <p>This is learning with purpose.</p>
                        <p>This is skill empowerment with dignity.</p>
                    </div>

                    <a
                        href="https://community.madath.com"
                        className="cta-button"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                        Join the Community <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default LearningProgram;
