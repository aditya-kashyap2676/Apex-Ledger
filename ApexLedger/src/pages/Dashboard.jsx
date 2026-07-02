import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import HeaderTwo from '../components/HeaderTwo';
import { ActiveTabContext } from '../components/Context/Context';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <ActiveTabContext.Provider value={activeTab}>
      <div className='flex w-full'>
        <div className="h-screen ">
          <NavBar setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className='w-full'>
          <HeaderTwo />
        </div>
      </div>
    </ActiveTabContext.Provider>
  );
};

export default Dashboard;
