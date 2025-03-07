import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import MakineView from './Makine-view';

export default function Makine() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <MakineView />
        <RightSidebar />
      </div>
    </div>
  );
} 