import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import ElektrikElektronikView from './ElektrikElektronik-view';

export default function ElektrikElektronik() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <ElektrikElektronikView />
        <RightSidebar />
      </div>
    </div>
  );
} 