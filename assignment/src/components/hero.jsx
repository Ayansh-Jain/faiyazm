import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, BookOpen, ShoppingCart, Handshake } from 'lucide-react';

const MadathHeroSection = () => {
    const styles = {
        heroContainer: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, rgba(13, 19, 61, 0.95) 0%, rgba(26, 39, 93, 0.95) 50%, rgba(13, 19, 61, 0.95) 100%), url(/hero_bg_new.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '100px 15px',
        },
        backgroundTexture: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)',
            pointerEvents: 'none',
        },
        radialGlow: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
            zIndex: 0,
        },
        contentWrapper: {
            maxWidth: '1200px',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
        },
        tagline: {
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#d4af37',
            fontWeight: '400',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
        },
        mainHeading: {
            fontSize: 'clamp(26px, 9vw, 76px)',
            fontWeight: '700',
            color: '#d4af37',
            marginBottom: '15px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: '1.2',
            textShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
        },
        subHeading: {
            fontSize: 'clamp(16px, 2.8vw, 28px)',
            fontWeight: '400',
            color: '#f5f5dc',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.4',
        },
        hubContainer: {
            position: 'relative',
            minHeight: '450px',
            margin: '40px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        centerDescription: {
            maxWidth: '500px',
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            lineHeight: '1.8',
            color: '#ffffff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: '300',
            padding: '30px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '50%',
            border: '1px solid rgba(212, 175, 55, 0.1)',
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 40px rgba(0,0,0,0.2)',
            backdropFilter: 'blur(5px)',
            zIndex: 2,
        },
        diagonalBtn: {
            position: 'absolute',
            width: '260px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '20px',
            padding: '20px',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            backdropFilter: 'blur(10px)',
            textDecoration: 'none',
            zIndex: 3,
        },
        iconCircle: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#d4af37',
            transition: 'all 0.3s ease',
        },
        btnTitle: {
            fontSize: '17px',
            fontWeight: '600',
            color: '#d4af37',
            fontFamily: 'Georgia, serif',
        },
        btnDesc: {
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: '1.4',
        },
        quranQuote: {
            fontSize: 'clamp(13px, 1.6vw, 16px)',
            fontStyle: 'italic',
            color: '#d4af37',
            marginTop: '80px',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.6',
            opacity: '0.8',
        },
        awardBadge: {
            fontSize: 'clamp(12px, 1.4vw, 14px)',
            color: '#f5f5dc',
            opacity: 0.7,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    const DirectionalButton = ({ icon: Icon, title, desc, link, external, positionStyle, colorTheme, className }) => {
        const theme = {
            gold: { color: '#d4af37', bg: 'rgba(212, 175, 55, 0.1)', border: 'rgba(212, 175, 55, 0.2)', hover: 'rgba(212, 175, 55, 0.15)' },
            cyan: { color: '#00d2ff', bg: 'rgba(0, 210, 255, 0.1)', border: 'rgba(0, 210, 255, 0.2)', hover: 'rgba(0, 210, 255, 0.15)' },
            rose: { color: '#ff4b82', bg: 'rgba(255, 75, 130, 0.1)', border: 'rgba(255, 75, 130, 0.2)', hover: 'rgba(255, 75, 130, 0.15)' },
            green: { color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)', border: 'rgba(34, 197, 94, 0.2)', hover: 'rgba(34, 197, 94, 0.15)' }
        }[colorTheme] || { color: '#d4af37', bg: 'rgba(212, 175, 55, 0.1)', border: 'rgba(212, 175, 55, 0.2)', hover: 'rgba(212, 175, 55, 0.15)' };

        const content = (
            <motion.div
                whileHover={{
                    scale: 1.05,
                    backgroundColor: theme.hover,
                    borderColor: theme.color,
                    boxShadow: `0 15px 35px ${theme.border}`
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                    ...styles.diagonalBtn,
                    ...positionStyle,
                    borderColor: theme.border,
                }}
                className={`diagonal-button-item ${className}`}
            >
                <div style={{ ...styles.iconCircle, background: theme.bg, color: theme.color }} className="icon-circle">
                    <Icon size={24} />
                </div>
                <div style={{ ...styles.btnTitle, color: theme.color }}>{title}</div>
                <div style={styles.btnDesc}>{desc}</div>
            </motion.div>
        );

        if (external) {
            return (
                <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    {content}
                </a>
            );
        }

        return (
            <Link to={link || "#"} style={{ textDecoration: 'none' }}>
                {content}
            </Link>
        );
    };

    return (
        <div style={styles.heroContainer}>
            <div style={styles.backgroundTexture}></div>
            <div style={styles.radialGlow}></div>

            <motion.div
                style={styles.contentWrapper}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} style={styles.tagline}>
                    Business as a Service to Humanity
                </motion.div>

                <motion.h1 variants={itemVariants} style={styles.mainHeading} className="hero-main-title">
                    Madath Good Startups
                </motion.h1>

                <motion.h2 variants={itemVariants} style={styles.subHeading}>
                    Helping Each Other in Goodness
                </motion.h2>

                <div style={styles.hubContainer} className="hero-circular-hub">
                    <style>
                        {`
                        .hero-circular-hub {
                            transition: all 0.5s ease;
                        }
                        
                        @media (min-width: 1025px) {
                            .pos-tl { top: 0; left: 0; transform: translate(-20%, -20%); }
                            .pos-tr { top: 0; right: 20px; transform: translate(20%, -20%); text-align: right; align-items: flex-end; }
                            .pos-bl { bottom: 0; left: 0; transform: translate(-20%, 20%); }
                            .pos-br { bottom: 0; right: 20px; transform: translate(20%, 20%); text-align: right; align-items: flex-end; }
                            
                            .hero-circular-hub::before {
                                content: '';
                                position: absolute;
                                width: 80%;
                                height: 80%;
                                border: 1px dashed rgba(255, 255, 255, 0.05);
                                border-radius: 50%;
                                pointer-events: none;
                            }
                        }

                        @media (max-width: 1024px) {
                            .hero-circular-hub {
                                flex-direction: column;
                                min-height: auto !important;
                                gap: 20px;
                                margin: 20px 0;
                            }
                            .center-description-wrapper {
                                width: 100%;
                                display: flex;
                                justify-content: center;
                                order: -1;
                            }
                            .hero-circular-hub > div:first-child > div { /* centerDescription */
                                max-width: 450px !important;
                                height: auto !important;
                                aspect-ratio: auto !important;
                                padding: 30px 20px !important;
                                border-radius: 24px !important;
                                margin-bottom: 10px;
                            }
                            .diagonal-grid-mobile {
                                display: grid;
                                grid-template-columns: 1fr 1fr;
                                gap: 15px;
                                width: 100%;
                                max-width: 800px;
                            }
                            .diagonal-button-item {
                                position: static !important;
                                width: 100% !important;
                                transform: none !important;
                                text-align: left !important;
                                align-items: flex-start !important;
                                padding: 20px 20px !important;
                            }
                        }

                        @media (max-width: 640px) {
                            .diagonal-grid-mobile {
                                grid-template-columns: 1fr;
                                gap: 12px;
                            }
                            .hero-circular-hub > div:first-child > div {
                                max-width: 100% !important;
                                padding: 25px 15px !important;
                            }
                            .hero-main-title {
                                margin-bottom: 10px !important;
                            }
                        }
                        `}
                    </style>

                    <div className="center-description-wrapper">
                        <motion.div variants={itemVariants} style={styles.centerDescription}>
                            <p>Madath Good Startups is a conscious initiative created to build products, platforms, and services that are truly good for humanity — where business becomes a means of service, responsibility, and long-term good.</p>
                        </motion.div>
                    </div>

                    <div className="diagonal-grid-mobile">
                        <motion.div variants={itemVariants}>
                            <DirectionalButton
                                icon={Lightbulb}
                                title="Entrepreneurship"
                                desc="Join community with Ideas/investment/skills"
                                link="/entrepreneurship"
                                colorTheme="gold"
                                className="pos-tl"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <DirectionalButton
                                icon={BookOpen}
                                title="Madath Learning"
                                desc="Join Madath Learning community"
                                link="/learning"
                                colorTheme="cyan"
                                className="pos-tr"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <DirectionalButton
                                icon={ShoppingCart}
                                title="Madath Shopping"
                                desc="Buy community products & services"
                                link="/shopping"
                                colorTheme="rose"
                                className="pos-bl"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <DirectionalButton
                                icon={Handshake}
                                title="NGO and CSR"
                                desc="Find and list NGO/CSR"
                                link="/ngo"
                                colorTheme="green"
                                className="pos-br"
                            />
                        </motion.div>
                    </div>
                </div>

                <motion.p variants={itemVariants} style={styles.quranQuote}>
                    "Help one another in goodness and responsibility."
                </motion.p>

                <motion.div variants={itemVariants} style={styles.awardBadge}>
                    <span>🏆 EVP Best Socio-Economic Model Startup Award Winner – 2025</span>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MadathHeroSection;

