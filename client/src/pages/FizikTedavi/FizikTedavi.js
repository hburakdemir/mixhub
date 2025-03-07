import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import FizikTedaviView from './FizikTedavi-view';

export default function FizikTedavi() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <FizikTedaviView />
        <RightSidebar />
      </div>
    </div>
  );
} 