import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, LayoutGrid, Heart, Sparkles } from 'lucide-react';
import './Shopping.css';

const Shopping = () => {
    return (
        <section className="shopping-section">
            <div className="shopping-hero">
                <div className="hero-pattern"></div>
                <motion.div
                    className="shopping-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="icon-wrapper">
                        <ShoppingCart size={40} />
                    </div>
                    <h1 className="shopping-title">Madath Shopping</h1>
                    <h2 className="shopping-subtitle">Community-Driven Marketplace for Good</h2>
                    
                </motion.div>
            </div>

            <div className="shopping-container">
                <div className="shopping-intro-card">
                    <motion.div
                        className="content-block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <p className="main-desc">
                            Madath Shopping is a <strong>community-driven marketplace</strong> for good products, meaningful services, and quality educational courses—built by Madath members, for the benefit of humanity.
                        </p>
                        <div className="features-grid">
                            <div className="feature-item">
                                <LayoutGrid className="feature-icon" />
                                <span>Curated Categories</span>
                            </div>
                            <div className="feature-item">
                                <Heart className="feature-icon" />
                                <span>Meaningful Impact</span>
                            </div>
                            <div className="feature-item">
                                <Sparkles className="feature-icon" />
                                <span>Member Growth</span>
                            </div>
                        </div>
                        <p className="secondary-desc">
                            Browse our product categories, choose what resonates with you, and become part of the Madath family. As a member, you don’t just buy—you gain the opportunity to <strong>build your own idea from scratch</strong> and grow it all the way to the Madath Shopping platform.
                        </p>
                        <a
                                href="https://shop.madath.com/"
                                className="shop-now-btn"
                            >
                                <ShoppingCart size={20} />
                                Visit Madath Shop
                            </a>
                    </motion.div>
                </div>

                <motion.div
                    className="shop-cta-section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <div className="shop-visual-card">
                        <div className="card-overlay"></div>
                        <div className="shop-content-wrapper">
                            <Sparkles className="sparkle-icon" size={40} />
                            <h3 className="cta-heading">Explore the Marketplace</h3>
                            <p className="cta-subtext">
                                Step into our curated world of ethical products and community-driven excellence.
                            </p>
                            <a
                                href="https://shop.madath.com/"
                                className="shop-now-btn"
                            >
                                <ShoppingCart size={20} />
                                Visit Madath Shop
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Shopping;
