const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ THIS IS REQUIRED
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('Server is running ✅');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch(err => console.error('❌ DB connection error:', err));
app.use('/api/tasks', require('./routes/task'));
