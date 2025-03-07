import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import IktisadiIdariView from './IktisadiIdari-view';

export default function IktisadiIdari() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <IktisadiIdariView />
        <RightSidebar />
      </div>
    </div>
  );
} 