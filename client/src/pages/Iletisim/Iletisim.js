import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import IletisimView from './Iletisim-view';

export default function Iletisim() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <IletisimView />
        <RightSidebar />
      </div>
    </div>
  );
} 