
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import EventManagement from '@/components/dashboard/EventManagement';
import Analytics from '@/components/dashboard/Analytics';
import ContentStudio from '@/components/dashboard/ContentStudio';
import RewardsMarketplace from '@/components/dashboard/RewardsMarketplace';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview />;
      case 'events':
        return <EventManagement />;
      case 'analytics':
        return <Analytics />;
      case 'content':
        return <ContentStudio />;
      case 'rewards':
        return <RewardsMarketplace />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
