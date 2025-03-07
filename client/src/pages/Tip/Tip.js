import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import TipView from './Tip-view';

export default function Tip() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <TipView />
        <RightSidebar />
      </div>
    </div>
  );
} 