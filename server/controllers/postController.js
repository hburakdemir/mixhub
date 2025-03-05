const pool = require('../db');

// Tüm gönderileri getir
const getAllPosts = async (req, res) => {
  try {
    const query = `
      SELECT 
        p.id,
        p.title,
        p.content,
        p.created_at,
        t.title as topic_title,
        u.username,
        u.profile_image
      FROM posts p
      JOIN topics t ON p.topic_id = t.id
      JOIN users u ON p.user_id = u.id
      ORDER BY p.created_at DESC
    `;

    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
};

module.exports = {
  getAllPosts
}; 