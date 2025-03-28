
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  BarChart2, 
  FileEdit, 
  Gift, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const DashboardSidebar = ({ activeSection, setActiveSection }: DashboardSidebarProps) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'events', label: 'Event Management', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'content', label: 'Content Studio', icon: FileEdit },
    { id: 'rewards', label: 'Rewards', icon: Gift },
  ];

  return (
    <aside className="bg-white w-64 border-r border-border flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple to-teal rounded-md animate-pulse-slow"></div>
            <div className="absolute inset-1 bg-white rounded-md flex items-center justify-center">
              <span className="text-xl font-bold text-gradient">G</span>
            </div>
          </div>
          <span className="text-xl font-poppins font-bold">Gamifievents</span>
        </div>
      </div>
      
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-purple/10 text-purple' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                  {isActive && <ChevronRight size={16} className="ml-auto" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <ul className="space-y-1">
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors">
              <Settings size={18} />
              <span>Settings</span>
            </button>
          </li>
          <li>
            <Link to="/" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors">
              <LogOut size={18} />
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
