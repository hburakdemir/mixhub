import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import HukukView from './Hukuk-view';

export default function Hukuk() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <HukukView />
        <RightSidebar />
      </div>
    </div>
  );
} 