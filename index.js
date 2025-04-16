const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGODB_URI; // ✅ Fixed from MONGO_URI to MONGODB_URI

console.log("🚀 Mongo URI:", MONGO_URI); // Optional Debug Line

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Existing test route
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend is working ✅" });
});

// 👇 Add this to handle the root URL ("/")
app.get('/', (req, res) => {
    res.send('🚀 Welcome to Crypto Flasher Backend API');
    // Or if you prefer a 404:
    // res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`🟢 Server running on port ${PORT}`);
});
