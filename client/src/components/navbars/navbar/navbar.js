import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <h1 className='logo' onClick={() => navigate('/anasayfa')}>MixHub</h1>
      </div>

      <div className="navbar-center">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Ara..." 
            className="search-input"
          />
        </div>
      </div>

      <div className="navbar-right">
        <div className="profile" onClick={() => navigate('/profil')}>
          <Icon icon="gg:profile" width="32" height="32" />
        </div>
      </div>
    </nav>
  );
}
