import React, { useState, useEffect } from 'react';
import { FaRegComment, FaRegHeart, FaRegShareSquare } from 'react-icons/fa';
import CreatePostButton from '../../components/CreatePostButton/CreatePostButton';
import './Makine.css';

export default function MakineView() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts?department=Makine');
        if (!response.ok) {
          throw new Error('Veri çekme hatası');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="loading">Yükleniyor...</div>;
  }

  return (
    <div className="department-container">
      <div className="posts-section">
        <h1 className="department-title">Makine Mühendisliği</h1>
        {posts.length === 0 ? (
          <div className="no-posts">Henüz gönderi bulunmuyor.</div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="user-info">
                  <img 
                    src={post.profile_image || 'https://via.placeholder.com/40'} 
                    alt={post.username} 
                    className="profile-image"
                  />
                  <span className="username">{post.username}</span>
                </div>
                <span className="topic-title">{post.topic_title}</span>
              </div>

              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-text">{post.content}</p>
              </div>

              <div className="post-footer">
                <div className="post-actions">
                  <button className="action-button">
                    <FaRegComment /> <span>Yorum Yap</span>
                  </button>
                  <button className="action-button">
                    <FaRegHeart /> <span>Beğen</span>
                  </button>
                  <button className="action-button">
                    <FaRegShareSquare /> <span>Paylaş</span>
                  </button>
                </div>
                <span className="post-date">{formatDate(post.created_at)}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <CreatePostButton />
    </div>
  );
} 