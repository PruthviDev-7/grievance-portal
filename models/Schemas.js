const mongoose = require('mongoose');

// User Schema (Handles both Citizens and Officials)
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    idNumber: { type: String, required: true, unique: true }, // Aadhaar or Official ID
    password: { type: String, required: true },
    role: { type: String, enum: ['citizen', 'official'], default: 'citizen' },
    department: { type: String } // Only for officials
});

// Complaint Schema
const complaintSchema = new mongoose.Schema({
    citizenId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    category: String,
    description: String,
    location: String,
    priority: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'] },
    status: { type: String, default: 'Pending' }, // Pending, In Progress, Resolved
    filedDate: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = { User, Complaint };
