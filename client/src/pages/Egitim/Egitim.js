import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import EgitimView from './Egitim-view';

export default function Egitim() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <EgitimView />
        <RightSidebar />
      </div>
    </div>
  );
} 