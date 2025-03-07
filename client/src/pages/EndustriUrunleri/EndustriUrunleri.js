import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import EndustriUrunleriView from './EndustriUrunleri-view';

export default function EndustriUrunleri() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <EndustriUrunleriView />
        <RightSidebar />
      </div>
    </div>
  );
} 