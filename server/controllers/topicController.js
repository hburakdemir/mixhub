const pool = require('../db');

// Tüm başlıkları getir
const getAllTopics = async (req, res) => {
  try {
    const { sortBy } = req.query;
    let query = `
      SELECT 
        t.id, 
        t.title, 
        COUNT(p.id) as count,
        MAX(p.created_at) as last_update
      FROM topics t 
      LEFT JOIN posts p ON t.id = p.topic_id 
      GROUP BY t.id, t.title
    `;

    // Sıralama seçeneğine göre ORDER BY ekle
    if (sortBy === 'newest') {
      query += ' ORDER BY last_update DESC NULLS LAST';
    } else if (sortBy === 'popular') {
      query += ' ORDER BY count DESC';
    } else {
      query += ' ORDER BY t.title ASC';
    }

    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
};

module.exports = {
  getAllTopics
}; 