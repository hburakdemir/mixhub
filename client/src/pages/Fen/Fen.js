import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import FenView from './Fen-view';

export default function Fen() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <FenView />
        <RightSidebar />
      </div>
    </div>
  );
} 