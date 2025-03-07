import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import KonservatuvarView from './Konservatuvar-view';

export default function Konservatuvar() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <KonservatuvarView />
        <RightSidebar />
      </div>
    </div>
  );
} 