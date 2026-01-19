const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { User, Complaint } = require('./models/Schemas');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/grievanceDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'));

app.post('/api/login', async (req, res) => {
    const { idNumber, password, role } = req.body;
    const user = await User.findOne({ idNumber, password, role });
    if (user) {
        res.json({ success: true, user });
    } else {
        res.json({ success: false, message: 'Invalid Credentials' });
    }
});

app.get('/api/complaints/:userId', async (req, res) => {
    const complaints = await Complaint.find({ citizenId: req.params.userId });
    res.json(complaints);
});

app.post('/api/complaints', async (req, res) => {
    const newComplaint = new Complaint(req.body);
    await newComplaint.save();
    res.json({ success: true, message: 'Complaint Filed' });
});

app.get('/api/stats/:userId', async (req, res) => {
    const total = await Complaint.countDocuments({ citizenId: req.params.userId });
    const pending = await Complaint.countDocuments({ citizenId: req.params.userId, status: 'Pending' });
    const resolved = await Complaint.countDocuments({ citizenId: req.params.userId, status: 'Resolved' });
    const inProgress = await Complaint.countDocuments({ citizenId: req.params.userId, status: 'In Progress' });

    res.json({ total, pending, resolved, inProgress });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
