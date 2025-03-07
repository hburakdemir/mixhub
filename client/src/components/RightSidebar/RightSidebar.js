import React from 'react';
import './RightSidebar.css';

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="communities-box">
        <h3 className="box-title">Bizle Olan Topluluklar</h3>
        {/* Topluluk listesi buraya gelecek */}
      </div>
      <div className="ads-box">
        <h3 className="box-title">Google Ads</h3>
        {/* Reklam içeriği buraya gelecek */}
      </div>
    </div>
  );
} 