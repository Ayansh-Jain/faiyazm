const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    if (req.method === 'POST' && req.body) console.log('Body keys:', Object.keys(req.body));
    next();
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure uploads folder exists
if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
    fs.mkdirSync(path.join(__dirname, 'uploads'));
}

// Multer storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// MongoDB Connection
// We will use process.env.MONGO_URI, otherwise default to a local one
const MONGODB_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/madath_db';
console.log('Attempting to connect to MongoDB...');
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error details:');
        console.error(err.message);
        if (err.name === 'MongoServerError' && err.code === 8000) {
            console.error('Authentication failed. Please check your username and password.');
        }
    });

// Schemas & Models
const ngoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    established: { type: String, required: true },
    website: { type: String },
    logoPath: { type: String },
    status: { type: String, default: 'pending' }, // pending, approved, rejected
    createdAt: { type: Date, default: Date.now }
});

const csrSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    established: { type: String, required: true },
    website: { type: String },
    logoPath: { type: String },
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

const NGO = mongoose.model('NGO', ngoSchema);
const CSR = mongoose.model('CSR', csrSchema);

// --- Public Routes ---

// Submit NGO Application
app.post('/api/ngo', upload.single('logo'), async (req, res) => {
    try {
        const { name, location, category, description, established, website } = req.body;
        const newNgo = new NGO({
            name,
            location,
            category,
            description,
            established,
            website,
            logoPath: req.file ? `/uploads/${req.file.filename}` : ''
        });
        await newNgo.save();
        res.status(201).json({ message: 'Application submitted successfully. It will be viewed soon.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error while submitting application' });
    }
});

// Submit CSR Application
app.post('/api/csr', upload.single('logo'), async (req, res) => {
    try {
        const { companyName, location, category, description, established, website } = req.body;
        const newCsr = new CSR({
            companyName,
            location,
            category,
            description,
            established,
            website,
            logoPath: req.file ? `/uploads/${req.file.filename}` : ''
        });
        await newCsr.save();
        res.status(201).json({ message: 'Application submitted successfully. It will be viewed soon.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error while submitting application' });
    }
});

// Get Approved NGOs
app.get('/api/public/ngos', async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            // Fallback to mock data if DB is not connected
            return res.json([
                { _id: '1', name: 'Green Earth Foundation', location: 'Mumbai', category: 'Environment', description: 'Working towards a greener planet through reforestation and waste management.', website: 'https://example.org', logoPath: '', status: 'approved' },
                { _id: '2', name: 'Health for All', location: 'Delhi', category: 'Healthcare', description: 'Providing free medical checkups and medicines to underprivileged communities.', website: 'https://example.org', logoPath: '', status: 'approved' }
            ]);
        }
            console.log('Fetching NGOs from DB...');
            const ngos = await NGO.find({ status: 'approved' }).sort({ createdAt: -1 });
            console.log('Fetched NGOs:', ngos.length);
            res.json(ngos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch NGOs' });
    }
});

// Get Approved CSRs
app.get('/api/public/csrs', async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            // Fallback to mock data
            return res.json([
                { _id: '1', companyName: 'TechCorp Solutions', location: 'Bangalore', category: 'Education', description: 'Empowering students with digital literacy and coding skills.', website: 'https://example.com', logoPath: '', status: 'approved' }
            ]);
        }
        const csrs = await CSR.find({ status: 'approved' }).sort({ createdAt: -1 });
        res.json(csrs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch CSRs' });
    }
});

// --- Admin Routes ---

// Get all NGOs
app.get('/api/admin/ngos', async (req, res) => {
    try {
        const ngos = await NGO.find().sort({ createdAt: -1 });
        res.json(ngos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch NGOs' });
    }
});

// Get all CSRs
app.get('/api/admin/csrs', async (req, res) => {
    try {
        const csrs = await CSR.find().sort({ createdAt: -1 });
        res.json(csrs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch CSRs' });
    }
});

// Update NGO status
app.put('/api/admin/ngo/:id/status', async (req, res) => {
    try {
        const { status } = req.body; // 'approved' or 'rejected'
        const ngo = await NGO.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(ngo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update NGO status' });
    }
});

// Update CSR status
app.put('/api/admin/csr/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const csr = await CSR.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(csr);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update CSR status' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
