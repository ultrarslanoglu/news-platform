const express = require('express');
const router = express.Router();
const News = require('../models/news');

// Tüm Haberleri Getir
router.get('/', async (req, res) => {
    const news = await News.find();
    res.json(news);
});

// Haber Ekle
router.post('/', async (req, res) => {
    const newNews = new News(req.body);
    await newNews.save();
    res.json(newNews);
});

module.exports = router;
