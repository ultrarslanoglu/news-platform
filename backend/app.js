const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// MongoDB Bağlantısı
mongoose.connect('mongodb://mongo:27017/newsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.json());

// Route Tanımlama
app.use('/api/news', require('./routes'));

// Sunucu
app.listen(port, () => console.log(`Server running on port ${port}`));
