import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Ana Sayfa
import Login from '../pages/login/login.js';
import Home from '../pages/homepage/homepage'
import Register from '../pages/register/register';

// beytepe
import Edebiyat from '../pages/Edebiyat/Edebiyat'
import Egitim from '../pages/Egitim/Egitim.js'
import Fen from '../pages/Fen/Fen.js'
import GuzelSanatlar from '../pages/GuzelSanatlar/GuzelSanatlar.js'
import Hukuk from '../pages/Hukuk/Hukuk.js'
import Iibf from '../pages/IktisadiIdari/IktisadiIdari.js'
import Iletisim from '../pages/Iletisim/Iletisim.js'
import Konservatur from '../pages/Konservatuvar/Konservatuvar.js'
import Mimarlik from '../pages/Mimarlik/Mimarlik.js'
import Mühendislik from '../pages/Muhendislik/Muhendislik.js'
import SporBilimleri from '../pages/SporBilimleri/SporBilimleri.js'

// sihhiye
import Diş from '../pages/DisHekimligi/DisHekimligi.js'
import Eczacılık from '../pages/Eczacilik/Eczacilik.js'
import FizikTedavi from '../pages/FizikTedavi/FizikTedavi.js'
import Hemşirelik from '../pages/Hemsirelik/Hemsirelik.js'
import SaglıkBlm from '../pages/SaglikBilimleri/SaglikBilimleri.js'
import Tıp from '../pages/Tip/Tip.js'

// osb
import AlternatifEnerji from '../pages/AlternatifEnerji/AlternatifEnerji.js'
import ElektrikElektronik from '../pages/ElektrikElektronik/ElektrikElektronik.js'
import EndustriUrunleri from '../pages/EndustriUrunleri/EndustriUrunleri.js'
import Makine from '../pages/Makine/Makine.js'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Ana Sayfa Route'ları */}
        <Route path="/" element={<Login />} />
        <Route path='/anasayfa' element={<Home />} />
        <Route path='/kayıt ol' element={<Register/>} />

        {/* Beytepe Kampüsü */}
        <Route path='/edebiyat' element={<Edebiyat/>} />
        <Route path='/egitim' element={<Egitim/>} />
        <Route path='/fen' element={<Fen/>} />
        <Route path='/güzel-sanatlar' element={<GuzelSanatlar/>} />
        <Route path='/hukuk' element={<Hukuk/>} />
        <Route path='/iibf' element={<Iibf/>} />
        <Route path='/iletişim' element={<Iletisim/>} />
        <Route path='/konservatuvar' element={<Konservatur/>} />
        <Route path='/mimarlik' element={<Mimarlik/>} />
        <Route path='/mühendislik' element={<Mühendislik/>} />
        <Route path='/spor-bilimleri' element={<SporBilimleri/>} />

        {/* Sıhhiye Kampüsü */}
        <Route path='/diş-hekimliği' element={<Diş/>} />
        <Route path='/eczacılık' element={<Eczacılık/>} />
        <Route path='/fizik-tedavi' element={<FizikTedavi/>} />
        <Route path='/hemşirelik' element={<Hemşirelik/>} />
        <Route path='/sağlık-bilimleri' element={<SaglıkBlm/>} />
        <Route path='/tıp' element={<Tıp/>} />

        {/* OSB */}
        <Route path='/alternatif-enerji' element={<AlternatifEnerji/>} />
        <Route path='/elektrik' element={<ElektrikElektronik/>} />
        <Route path='/endüstri-ürünleri' element={<EndustriUrunleri/>} />
        <Route path='/makine' element={<Makine/>} />
      </Routes>
    </Router>
  );
} 