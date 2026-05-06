import React, { useState } from 'react';
import { X, UploadCloud } from 'lucide-react';
import { API_BASE } from '../config';
import './ApplicationForm.css';

const ApplicationForm = ({ type, onClose }) => {
    const isNGO = type === 'ngo';
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        category: '',
        description: '',
        established: '',
        website: '',
        logo: null
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, logo: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        
        const data = new FormData();
        data.append(isNGO ? 'name' : 'companyName', formData.name);
        data.append('location', formData.location);
        data.append('category', formData.category);
        data.append('description', formData.description);
        data.append('established', formData.established);
        if (formData.website) {
            data.append('website', formData.website);
        }
        if (formData.logo) {
            data.append('logo', formData.logo);
        }

        try {
            const endpoint = isNGO ? `${API_BASE}/api/ngo` : `${API_BASE}/api/csr`;
            const response = await fetch(endpoint, {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                setSuccessMessage('Application submitted successfully. It will be viewed soon.');
                setTimeout(() => {
                    onClose();
                }, 3000);
            } else {
                const err = await response.json();
                setErrorMessage(err.error || 'Failed to submit application');
            }
        } catch (error) {
            setErrorMessage('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}><X size={24} /></button>
                <h2>{isNGO ? 'Add my NGO' : 'Add my CSR'}</h2>
                
                {successMessage ? (
                    <div className="success-message">{successMessage}</div>
                ) : (
                    <form onSubmit={handleSubmit} className="application-form">
                        <div className="form-group">
                            <label>{isNGO ? 'Name of NGO *' : 'Name of company *'}</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={isNGO ? 'Name of ngo' : 'Name of company'} />
                        </div>
                        
                        <div className="form-group">
                            <label>Location *</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="Location" />
                        </div>
                        
                        <div className="form-group">
                            <label>Category *</label>
                            <input type="text" name="category" value={formData.category} onChange={handleChange} required placeholder={isNGO ? "Category (animal welfare, education, social activity etc.)" : "Category"} />
                        </div>
                        
                        <div className="form-group">
                            <label>Basic Description *</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="Basic Description" rows={4} />
                        </div>

                        <div className="form-group file-upload">
                            <label>Logo Upload</label>
                            <div className="file-upload-box">
                                <UploadCloud size={32} />
                                <p>PDF, DOC/DOCX, XLS/CSV, JPG/JPEG, PNG, GIF</p>
                                <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png,.gif" />
                                {formData.logo && <span className="file-name">{formData.logo.name}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>When established *</label>
                            <input type="text" name="established" value={formData.established} onChange={handleChange} required placeholder="When established" />
                        </div>

                        <div className="form-group">
                            <label>Website URL</label>
                            <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://example.com" />
                        </div>
                        
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        
                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ApplicationForm;
