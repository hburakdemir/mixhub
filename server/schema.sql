-- Önce mevcut tabloları siliyoruz
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS topics;
DROP TABLE IF EXISTS users;

-- Users tablosu
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    profile_image VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Topics tablosu
CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Posts tablosu
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    topic_id INTEGER REFERENCES topics(id),
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Örnek kullanıcılar
INSERT INTO users (username, profile_image) VALUES
    ('ahmet_yilmaz', 'https://via.placeholder.com/40'),
    ('ayse_demir', 'https://via.placeholder.com/40'),
    ('mehmet_kaya', 'https://via.placeholder.com/40');

-- Örnek başlıklar
INSERT INTO topics (title) VALUES
    ('Teknoloji'),
    ('Spor'),
    ('Ekonomi'),
    ('Eğitim'),
    ('Sağlık'),
    ('Sanat'),
    ('Bilim'),
    ('Yaşam'),
    ('Dünya'),
    ('Gündem');

-- Örnek gönderiler
INSERT INTO posts (topic_id, user_id, title, content) VALUES
    (1, 1, 'Yapay Zeka Gelişmeleri', 'Son yapay zeka gelişmeleri ve etkileri...'),
    (1, 2, 'Yeni Teknolojiler', '2024 yılının öne çıkan teknolojileri...'),
    (2, 3, 'Futbol Maç Sonuçları', 'Haftanın önemli maç sonuçları...'),
    (3, 1, 'Ekonomi Haberleri', 'Güncel ekonomi haberleri ve analizler...'); 