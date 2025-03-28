
import React from 'react';
import { Bell, Search, Plus, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardHeader = () => {
  return (
    <header className="h-16 border-b border-border bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search events, attendees..."
            className="pl-10 pr-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-purple/30 w-64"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2">
          <Plus size={16} />
          <span>New Event</span>
        </Button>
        
        <button className="relative p-2 rounded-full hover:bg-muted transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-purple w-2 h-2 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-3 border-l border-border">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">Jane Cooper</span>
            <span className="text-xs text-muted-foreground">Admin</span>
          </div>
          <div className="h-9 w-9 bg-purple rounded-full flex items-center justify-center text-white">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
