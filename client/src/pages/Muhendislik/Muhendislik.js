import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import MuhendislikView from './Muhendislik-view';

export default function Muhendislik() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <MuhendislikView />
        <RightSidebar />
      </div>
    </div>
  );
} 