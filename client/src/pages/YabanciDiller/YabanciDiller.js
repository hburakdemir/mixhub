import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import YabanciDillerView from './YabanciDiller-view';

export default function YabanciDiller() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <YabanciDillerView />
        <RightSidebar />
      </div>
    </div>
  );
} 