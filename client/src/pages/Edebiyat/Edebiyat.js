import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import EdebiyatView from './Edebiyat-view';

export default function Edebiyat() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <EdebiyatView />
        <RightSidebar />
      </div>
    </div>
  );
} 