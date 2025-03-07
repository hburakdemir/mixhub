import React, { useState } from 'react';
import './CreatePostModal.css';
import { FaTimes, FaImage, FaFile } from 'react-icons/fa';

export default function CreatePostModal({ onClose }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [content, setContent] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const departments = {
    beytepe: {
      name: 'Beytepe',
      departments: [
        'Konservatuvar', 'Edebiyat', 'Eğitim', 'Fen', 'Güzel Sanatlar',
        'Hukuk', 'İktisadi ve İdari Bilimler', 'İletişim', 'Mimarlık',
        'Mühendislik', 'Spor Bilimleri'
      ]
    },
    sihhiye: {
      name: 'Sıhhiye',
      departments: [
        'Diş Hekimliği', 'Hemşirelik', 'Eczacılık', 'Fizik Tedavi',
        'Sağlık Bilimleri', 'Tıp'
      ]
    },
    osb: {
      name: 'OSB',
      departments: [
        'Elektrik', 'Alternatif Enerji', 'Endüstri Ürünleri', 'Makine'
      ]
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const removeFile = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API'ye gönderme işlemi burada yapılacak
    console.log({
      content,
      selectedDepartment,
      files: selectedFiles
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Yeni Gönderi Oluştur</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="department-select">
            <label>Bölüm Seçin:</label>
            <select 
              value={selectedDepartment} 
              onChange={(e) => setSelectedDepartment(e.target.value)}
              required
            >
              <option value="">Bölüm seçin...</option>
              {Object.entries(departments).map(([campusKey, campus]) => (
                <optgroup key={campusKey} label={campus.name}>
                  {campus.departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div className="content-area">
            <textarea
              placeholder="Gönderi içeriğini yazın..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="file-upload-section">
            <div className="upload-buttons">
              <label className="upload-button">
                <FaImage /> Resim Ekle
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  hidden
                />
              </label>
              <label className="upload-button">
                <FaFile /> Dosya Ekle
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  hidden
                />
              </label>
            </div>

            {selectedFiles.length > 0 && (
              <div className="selected-files">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="file-item">
                    <span>{file.name}</span>
                    <button 
                      type="button" 
                      onClick={() => removeFile(index)}
                      className="remove-file"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button type="submit" className="submit-button">
            Gönderiyi Paylaş
          </button>
        </form>
      </div>
    </div>
  );
} 