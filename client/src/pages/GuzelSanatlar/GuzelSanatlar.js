import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import GuzelSanatlarView from './GuzelSanatlar-view';

export default function GuzelSanatlar() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <GuzelSanatlarView />
        <RightSidebar />
      </div>
    </div>
  );
} 