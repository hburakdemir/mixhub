import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import AlternatifEnerjiView from './AlternatifEnerji-view';

export default function AlternatifEnerji() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <AlternatifEnerjiView />
        <RightSidebar />
      </div>
    </div>
  );
} 