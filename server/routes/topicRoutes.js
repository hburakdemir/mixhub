const express = require('express');
const router = express.Router();
const { getAllTopics } = require('../controllers/topicController');

// Tüm başlıkları getir
router.get('/', getAllTopics);

module.exports = router; 