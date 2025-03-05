const express = require('express');
const router = express.Router();
const { getAllPosts } = require('../controllers/postController');

// Tüm gönderileri getir
router.get('/', getAllPosts);

module.exports = router; 