import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import MimarlikView from './Mimarlik-view';

export default function Mimarlik() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <MimarlikView />
        <RightSidebar />
      </div>
    </div>
  );
} 