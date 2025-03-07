import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import SaglikBilimleriView from './SaglikBilimleri-view';

export default function SaglikBilimleri() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <SaglikBilimleriView />
        <RightSidebar />
      </div>
    </div>
  );
} 