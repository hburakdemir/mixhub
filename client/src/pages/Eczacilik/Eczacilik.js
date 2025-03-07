import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import EczacilikView from './Eczacilik-view';

export default function Eczacilik() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <EczacilikView />
        <RightSidebar />
      </div>
    </div>
  );
} 