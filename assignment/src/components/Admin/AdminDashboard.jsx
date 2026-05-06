import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, LogOut, Loader2 } from 'lucide-react';
import { API_BASE } from '../../config';
import { fetchNGOs, updateNGOStatus, loadGoogleScript, initGoogleClient, initTokenClient } from '../../utils/googleSheetsService';
import './Admin.css';

const AdminDashboard = () => {
    const [ngos, setNgos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [tokenClient, setTokenClient] = useState(null);
    const [processingId, setProcessingId] = useState(null);
    const [error, setError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        // Check for existing session
        const isAuth = localStorage.getItem('madath_admin_auth');
        if (isAuth === 'true') {
            setIsAuthenticated(true);
            loadNGOs();
        } else {
            setLoading(false);
        }
    }, []);

    const [viewMode, setViewMode] = useState('ngo'); // 'ngo' | 'csr'
    const [filterStatus, setFilterStatus] = useState('pending'); // 'pending' | 'approved'
    const [csrs, setCsrs] = useState([]);

    const loadNGOs = async () => {
        setLoading(true);
        try {
            const [ngoRes, csrRes] = await Promise.all([
                fetch(`${API_BASE}/api/admin/ngos`),
                fetch(`${API_BASE}/api/admin/csrs`)
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
            setError("Failed to load data.");
        } finally {
            setLoading(false);
        }
    };

    const handleSimpleLogin = (e) => {
        e.preventDefault();
        // Hardcoded credentials for now
        if (email === 'admin@madath.com' && password === 'Madath@2025') {
            setIsAuthenticated(true);
            localStorage.setItem('madath_admin_auth', 'true');
            loadNGOs();
            setLoginError('');
        } else {
            setLoginError('Invalid email or password.');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('madath_admin_auth');
        setNgos([]);
        setCsrs([]);
        setEmail('');
        setPassword('');
    };

    const handleAction = async (item, action) => {
        const newStatus = action === 'approve' ? 'approved' : 'rejected';
        setProcessingId(item._id);
        
        try {
            const type = viewMode === 'ngo' ? 'ngo' : 'csr';
            const res = await fetch(`${API_BASE}/api/admin/${type}/${item._id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            
            if (res.ok) {
                if (viewMode === 'ngo') {
                    setNgos(prev => prev.map(i => i._id === item._id ? { ...i, status: newStatus } : i));
                } else {
                    setCsrs(prev => prev.map(i => i._id === item._id ? { ...i, status: newStatus } : i));
                }
            } else {
                alert('Failed to update status');
            }
        } catch (err) {
            console.error(err);
            alert('Error updating status');
        } finally {
            setProcessingId(null);
        }
    };

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <Loader2 className="animate-spin text-blue-500" size={48} />
        </div>
    );

    if (!isAuthenticated) {
        return (
            <div className="admin-layout">
                <div className="login-container">
                    <motion.div
                        className="login-box"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-2xl font-bold mb-2">Admin Portal</h1>
                        <p className="text-gray-600 mb-6">Enter your credentials to access the dashboard.</p>

                        <form onSubmit={handleSimpleLogin} className="admin-login-form">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    required
                                    className="admin-input"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="admin-input"
                                />
                            </div>

                            {loginError && <p className="error-msg">{loginError}</p>}

                            <button type="submit" className="login-btn">
                                Login to Dashboard
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        );
    }

    const currentList = viewMode === 'ngo' ? ngos : csrs;
    const pendingItems = currentList.filter(n => n.status === 'pending');
    const approvedItems = currentList.filter(n => n.status === 'approved');
    const displayItems = filterStatus === 'pending' ? pendingItems : approvedItems;

    return (
        <div className="admin-layout">
            <header className="admin-header">
                <div className="admin-logo">Madath Admin</div>
                <div className="admin-user">
                    <span>Administrator</span>
                    <button onClick={handleLogout} className="text-red-500 hover:bg-red-50 p-2 rounded">
                        <LogOut size={20} />
                    </button>
                </div>
            </header>

            <main className="admin-container">
                <div className="flex gap-4 mb-6">
                    <button
                        className={`px-4 py-2 rounded font-medium ${viewMode === 'ngo' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
                        onClick={() => setViewMode('ngo')}
                    >
                        NGO Submissions
                    </button>
                    <button
                        className={`px-4 py-2 rounded font-medium ${viewMode === 'csr' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
                        onClick={() => setViewMode('csr')}
                    >
                        CSR Submissions
                    </button>
                </div>

                <div className="flex gap-4 mb-6 border-b pb-2">
                    <button
                        className={`px-3 py-1 font-medium ${filterStatus === 'pending' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                        onClick={() => setFilterStatus('pending')}
                    >
                        Pending ({pendingItems.length})
                    </button>
                    <button
                        className={`px-3 py-1 font-medium ${filterStatus === 'approved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                        onClick={() => setFilterStatus('approved')}
                    >
                        Approved ({approvedItems.length})
                    </button>
                </div>

                <h2 className="text-xl font-bold mb-6 text-gray-800">
                    {filterStatus === 'pending' ? 'Pending' : 'Approved'} {viewMode === 'ngo' ? 'NGO' : 'CSR'} Submissions
                </h2>

                {displayItems.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                        <p className="text-gray-500 text-lg">No {filterStatus} submissions.</p>
                    </div>
                ) : (
                    <div className="ngo-grid">
                        {displayItems.map((item) => (
                            <motion.div
                                key={item._id}
                                className="admin-ngo-card"
                                layout
                            >
                                <div className="card-header">
                                    <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                                        {item.logoPath && <img src={`${API_BASE}${item.logoPath}`} alt="Logo" style={{width: 40, height: 40, borderRadius: '50%', objectFit: 'cover'}} />}
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900">{viewMode === 'ngo' ? item.name : item.companyName}</h3>
                                            <span className="text-sm text-gray-500">{item.category} • {item.location}</span>
                                        </div>
                                    </div>
                                    <span className={`status-badge status-${filterStatus}`}>
                                        {filterStatus === 'pending' ? 'Pending' : 'Approved'}
                                    </span>
                                </div>
                                <div className="card-body">
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <div className="text-sm">
                                        <p><strong>Established:</strong> {item.established}</p>
                                        {item.website && <p><strong>Website:</strong> <a href={item.website} target="_blank" rel="noreferrer" className="text-blue-600">{item.website}</a></p>}
                                        {item.logoPath && <p><strong>File:</strong> <a href={`${API_BASE}${item.logoPath}`} target="_blank" rel="noreferrer" className="text-blue-600">View Attachment</a></p>}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    {filterStatus === 'pending' ? (
                                        <>
                                            <button
                                                onClick={() => handleAction(item, 'approve')}
                                                disabled={processingId === item._id}
                                                className={`btn-approve ${processingId === item._id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            >
                                                <Check size={18} /> Approve
                                            </button>
                                            <button
                                                onClick={() => handleAction(item, 'reject')}
                                                disabled={processingId === item._id}
                                                className={`btn-reject ${processingId === item._id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            >
                                                <X size={18} /> Reject
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => handleAction(item, 'reject')}
                                            disabled={processingId === item._id}
                                            className={`btn-reject w-full flex justify-center items-center gap-2 ${processingId === item._id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <X size={18} /> Remove / Revoke Approval
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
