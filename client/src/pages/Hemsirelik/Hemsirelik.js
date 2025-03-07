import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import HemsirelikView from './Hemsirelik-view';

export default function Hemsirelik() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <HemsirelikView />
        <RightSidebar />
      </div>
    </div>
  );
} 