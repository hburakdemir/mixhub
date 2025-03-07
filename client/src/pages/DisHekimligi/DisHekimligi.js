import React from 'react';
import Navbar from '../../components/navbars/navbar/navbar';
import Leftbar from '../../components/leftbar/leftbar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import DisHekimligiView from './DisHekimligi-view';

export default function DisHekimligi() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Leftbar />
        <DisHekimligiView />
        <RightSidebar />
      </div>
    </div>
  );
} 