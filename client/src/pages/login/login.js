import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">

    {/* (Sol Taraf)*/}
    <div className='left-container'>
      
    <h1 className='left-baslik'>lorem ipsm</h1>
    <h3 className='left-altbaslik'>lorem ipsum</h3>
    <p className='left-text'> Lorem ipsum dolorLorem ipsum dolor <br />Lorem ipsum dolor </p>
      </div>
      {/* (Giriş Formu) */}
      <div className="login-signin-container">
        <h2 onClick={()=> navigate('/home')}>GİRİŞ YAP</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <div className="login-input-group">
            <label htmlFor="login-username-label" id='login-username-label'>Kullanıcı Adı</label>
            <input
              type="text"
              id="login-username-box"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Kullanıcı Adınızı Giriniz"
            />
          </div>

          <div className="login-input-group">
            <label htmlFor="login-password-label" id='login-password-label'>Şifre</label>
            <input
              type="password"
              id="login-password-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Şifrenizi Giriniz"
            />
          </div>
          
          <button type="submit" id="login-submit-button" onClick={() => navigate('/anasayfa')}>Giriş Yap</button>
         <p id='kayıt-ol' onClick={() => navigate('/kayıt ol')}> Kayıt Ol</p>
         <p className='non-register' onClick={() => navigate('/anasayfa')}> Ziyaretçi Olarak Devam Et</p>
         </form>
      </div>
    

    </div>
    
  );
};

export default Login;
