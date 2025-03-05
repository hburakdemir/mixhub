import React, { useState, useEffect } from 'react'
import './leftbar.css'
import { useNavigate } from 'react-router-dom'
import { FaFilter } from 'react-icons/fa'

export default function Leftbar() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState('newest'); // 'newest' veya 'popular'

  // Backend'den veri çekme
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/topics?sortBy=${sortBy}`);
        if (!response.ok) {
          throw new Error('Veri çekme hatası');
        }
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchTopics();
  }, [sortBy]);

  const handleClick = (topicId) => {
    navigate(`/konu${topicId}`);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    setShowFilter(false);
  };

  return (
    <div className="leftbar-container">
      <div className="leftbar-content">
        <div className="leftbar-title">
          <p>Başlıklar</p>
          <div className="filter-container">
            <p className='sorting'>Sıralama Ölçütü</p>
            <FaFilter className="filter-icon" onClick={toggleFilter} />
            {showFilter && (
              <div className="filter-dropdown">
                <div 
                  className={`filter-option ${sortBy === 'newest' ? 'active' : ''}`}
                  onClick={() => handleSortChange('newest')}
                >
                  En Yeni
                </div>
                <div 
                  className={`filter-option ${sortBy === 'popular' ? 'active' : ''}`}
                  onClick={() => handleSortChange('popular')}
                >
                  En Popüler
                </div>
              </div>
            )}
          </div>
        </div>
        
        {topics.map((topic) => (
          <div 
            key={topic.id}
            className="menu-item"
            onClick={() => handleClick(topic.id)}
          >
            <span className="topic-title">{topic.title}</span>
            <span className="topic-count">{topic.count}</span>
          </div>
        ))}
      </div>
      <div className="right-border"></div>
    </div>
  )
} 