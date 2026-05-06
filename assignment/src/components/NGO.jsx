import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, Handshake, Building2, User, DollarSign, CheckCircle, PlusCircle } from 'lucide-react';
import ApplicationForm from './ApplicationForm';
import { API_BASE } from '../config';
import './NGO.css';

const SocialImpactSection = () => {
    const [activeTab, setActiveTab] = useState('ngo'); // 'ngo' or 'csr'
    const [ngos, setNgos] = useState([]);
    const [csrs, setCsrs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showFormType, setShowFormType] = useState(null); // 'ngo' or 'csr'

    // Search States
    const [selectedCategory, setSelectedCategory] = useState('');
    const [location, setLocation] = useState('');

    const categories = [
        "Education", "Healthcare", "Environment", "Poverty Alleviation", "Animal Welfare", "Women Empowerment"
    ];

    // Fetch NGOs and CSRs from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [ngoRes, csrRes] = await Promise.all([
                    fetch(`${API_BASE}/api/public/ngos`),
                    fetch(`${API_BASE}/api/public/csrs`)
                ]);
                
                if (ngoRes.ok) {
                    const ngoData = await ngoRes.json();
                    setNgos(ngoData);
                }
                
                if (csrRes.ok) {
                    const csrData = await csrRes.json();
                    setCsrs(csrData);
                }
            } catch (error) {
                console.error("Failed to load data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filteredNGOs = ngos.filter(ngo => {
        return (selectedCategory === '' || ngo.category === selectedCategory) &&
            (location === '' || ngo.location?.toLowerCase().includes(location.toLowerCase()));
    });

    return (
        <section className="impact-section">
            <div className="impact-hero">
                <div className="impact-hero-overlay"></div>
                <motion.div
                    className="impact-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="impact-title">Social Impact Hub</h1>
                    <p className="impact-subtitle">
                        Connecting Changemakers with Resources. <br />
                        Find trusted NGOs or discover Corporate Social Responsibility partners.
                    </p>
                </motion.div>
            </div>

            <div className="impact-container">
                {/* Toggle Controls */}
                <div className="impact-toggle-container">
                    <button
                        className={`impact-toggle-btn ${activeTab === 'ngo' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ngo')}
                    >
                        <Handshake size={24} />
                        <span>Find NGOs</span>
                    </button>
                    <button
                        className={`impact-toggle-btn ${activeTab === 'csr' ? 'active' : ''}`}
                        onClick={() => setActiveTab('csr')}
                    >
                        <Building2 size={24} />
                        <span>CSR</span>
                    </button>
                </div>

                <AnimatePresence mode='wait'>
                    {activeTab === 'ngo' ? (
                        <motion.div
                            key="ngo-view"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* NGO Filter Section */}
                            <div className="impact-search-bar">
                                <div className="search-group">
                                    <label>Category</label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value="">All Categories</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="search-group">
                                    <label>Location</label>
                                    <div className="input-with-icon">
                                        <MapPin size={18} />
                                        <input
                                            type="text"
                                            placeholder="Enter city..."
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* NGO Grid */}
                            {loading ? (
                                <div className="loading-state">Loading NGOs...</div>
                            ) : filteredNGOs.length === 0 ? (
                                <div className="empty-state">No NGOs found matching your criteria.</div>
                            ) : (
                                <div className="impact-grid">
                                    {filteredNGOs.map(ngo => (
                                        <motion.div
                                            key={ngo._id}
                                            className="impact-card"
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="card-header ngo-header">
                                                <img
                                                    src={ngo.logoPath ? `${API_BASE}${ngo.logoPath}` : "https://placehold.co/100"}
                                                    alt={ngo.name}
                                                    className="card-logo"
                                                    onError={(e) => e.target.src = "https://placehold.co/100?text=NGO"}
                                                />
                                                <div>
                                                    <h3>{ngo.name}</h3>
                                                    <span className="badge">{ngo.category}</span>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p>{ngo.description}</p>
                                                <div className="meta-row">
                                                    <MapPin size={16} /> {ngo.location}
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href={ngo.website || "#"} target="_blank" rel="noopener noreferrer" className="action-btn">
                                                    <Globe size={16} /> Visit Website
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* Add Listing Button */}
                            <motion.div
                                className="add-listing-section"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <button
                                    onClick={() => setShowFormType('ngo')}
                                    className="add-listing-btn"
                                >
                                    <PlusCircle size={24} />
                                    Add my NGO
                                </button>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="csr-view"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* CSR Grid */}
                            {loading ? (
                                <div className="loading-state">Loading CSRs...</div>
                            ) : csrs.length === 0 ? (
                                <div className="empty-state">No CSRs found.</div>
                            ) : (
                                <div className="impact-grid">
                                    {csrs.map(company => (
                                        <motion.div
                                            key={company._id}
                                            className="impact-card"
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="card-header csr-header">
                                                {company.logoPath ? (
                                                    <img src={`${API_BASE}${company.logoPath}`} alt={company.companyName} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', marginRight: '15px' }} />
                                                ) : (
                                                    <Building2 size={40} className="csr-icon-placeholder" />
                                                )}
                                                <div>
                                                    <h3>{company.companyName}</h3>
                                                    <span className="badge">{company.category}</span>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p>{company.description}</p>
                                                <div className="info-item mt-2">
                                                    <MapPin size={16} />
                                                    <span>{company.location}</span>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href={company.website || "#"} target="_blank" rel="noopener noreferrer" className="action-btn csr-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                                    <Globe size={16} /> Visit Website
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* Add Listing Button */}
                            <motion.div
                                className="add-listing-section"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <button
                                    onClick={() => setShowFormType('csr')}
                                    className="add-listing-btn"
                                >
                                    <PlusCircle size={24} />
                                    Add my CSR
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Application Modal Form */}
            {showFormType && (
                <ApplicationForm
                    type={showFormType}
                    onClose={() => setShowFormType(null)}
                />
            )}
        </section>
    );
};

export default SocialImpactSection;
