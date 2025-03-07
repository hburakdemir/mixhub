import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import SporBilimleriView from './SporBilimleri-view';

export default function SporBilimleri() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <SporBilimleriView />
        <RightSidebar />
      </div>
    </div>
  );
} 