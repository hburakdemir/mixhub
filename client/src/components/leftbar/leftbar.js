import React, { useState } from 'react'
import './leftbar.css'
import { FaSort, FaSortAlphaDown, FaClock, FaChartLine, FaChevronDown, FaGraduationCap, FaHospital, FaIndustry } from 'react-icons/fa'
import { useNavigate, Link, useLocation } from 'react-router-dom'

export default function Leftbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSort, setSelectedSort] = useState('alphabetic');
  const [expandedCampus, setExpandedCampus] = useState(null);
  const [openMenus, setOpenMenus] = useState({
    beytepe: false,
    sihhiye: false,
    osb: false
  });

  const campusData = {
    beytepe: {
      name: 'Beytepe',
      departments: [
        { name: 'Edebiyat', path: '/edebiyat' },
        { name: 'Eğitim', path: '/egitim' },
        { name: 'Fen', path: '/fen' },
        { name: 'Güzel Sanatlar', path: '/güzel-sanatlar' },
        { name: 'Hukuk', path: '/hukuk' },
        { name: 'İktisadi ve İdari Bilimler', path: '/iibf' },
        { name: 'İletişim', path: '/iletişim' },
        { name: 'Konservatuvar', path: '/konservatuvar' },
        { name: 'Mimarlık', path: '/mimarlik' },
        { name: 'Mühendislik', path: '/mühendislik' },
        { name: 'Spor Bilimleri', path: '/spor-bilimleri' }
      ]
    },
    sihhiye: {
      name: 'Sıhhiye',
      departments: [
        { name: 'Diş Hekimliği', path: '/diş-hekimliği' },
        { name: 'Eczacılık', path: '/eczacılık' },
        { name: 'Fizik Tedavi', path: '/fizik-tedavi' },
        { name: 'Hemşirelik', path: '/hemşirelik' },
        { name: 'Sağlık Bilimleri', path: '/sağlık-bilimleri' },
        { name: 'Tıp', path: '/tıp' }
      ]
    },
    osb: {
      name: 'OSB',
      departments: [
        { name: 'Alternatif Enerji', path: '/alternatif-enerji' },
        { name: 'Elektrik', path: '/elektrik' },
        { name: 'Endüstri Ürünleri', path: '/endüstri-ürünleri' },
        { name: 'Makine', path: '/makine' }
      ]
    }
  };

  const handleCampusClick = (campus) => {
    setExpandedCampus(expandedCampus === campus ? null : campus);
  };

  const handleSortChange = (sortType) => {
    setSelectedSort(sortType);
  };

  const handleDepartmentClick = (path) => {
    navigate(path);
  };

  const getSortedDepartments = (departments) => {
    switch (selectedSort) {
      case 'alphabetic':
        return [...departments].sort((a, b) => a.name.localeCompare(b.name));
      // Diğer sıralama seçenekleri için gerekli fonksiyonlar eklenebilir
      default:
        return departments;
    }
  };

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="leftbar">
      <div className="sort-section">
        <h3>Sıralama</h3>
        <div className="sort-options">
          <button 
            className={`sort-button ${selectedSort === 'alphabetic' ? 'active' : ''}`}
            onClick={() => handleSortChange('alphabetic')}
          >
            <FaSortAlphaDown /> Alfabetik
          </button>
          <button 
            className={`sort-button ${selectedSort === 'recent' ? 'active' : ''}`}
            onClick={() => handleSortChange('recent')}
          >
            <FaClock /> Son Güncellenen
          </button>
          <button 
            className={`sort-button ${selectedSort === 'popular' ? 'active' : ''}`}
            onClick={() => handleSortChange('popular')}
          >
            <FaChartLine /> En Çok Yüklenen
          </button>
        </div>
      </div>

      <div className="campus-section">
        <h3>Kampüsler</h3>
        {Object.entries(campusData).map(([key, campus]) => (
          <div key={key} className="campus-container">
            <div 
              className={`campus-header ${expandedCampus === key ? 'expanded' : ''}`}
              onClick={() => handleCampusClick(key)}
            >
              <span>{campus.name}</span>
              <FaSort className="expand-icon" />
            </div>
            {expandedCampus === key && (
              <div className="departments-list">
                {getSortedDepartments(campus.departments).map((department, index) => (
                  <div 
                    key={index} 
                    className="department-item"
                    onClick={() => handleDepartmentClick(department.path)}
                  >
                    {department.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      
        
    </div>
  )
} 