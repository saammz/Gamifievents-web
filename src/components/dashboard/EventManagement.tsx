
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Filter, Search } from 'lucide-react';

const EventManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Event Management</h1>
          <p className="text-muted-foreground">Create and manage your gamified events</p>
        </div>
        <Button className="gap-2">
          <Plus size={16} />
          <span>Create New Event</span>
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-purple/30 w-60"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter size={16} />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-0">
              <CardTitle className="text-lg">All Events</CardTitle>
              <CardDescription>
                View and manage all your events in one place
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3 mb-4">
                  <Calendar className="h-8 w-8 text-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No events to display</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  You haven't created any events yet. Start by creating your first gamified event.
                </p>
                <Button>
                  <Plus size={16} className="mr-2" />
                  Create New Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="live" className="mt-0">
          <Card className="border-0 shadow-none">
            <CardContent className="pt-6">
              <p>Live events content would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upcoming" className="mt-0">
          <Card className="border-0 shadow-none">
            <CardContent className="pt-6">
              <p>Upcoming events content would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="draft" className="mt-0">
          <Card className="border-0 shadow-none">
            <CardContent className="pt-6">
              <p>Draft events content would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="past" className="mt-0">
          <Card className="border-0 shadow-none">
            <CardContent className="pt-6">
              <p>Past events content would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventManagement;
