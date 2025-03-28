
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  BarChart,
  Award,
  TrendingUp,
  Eye,
  Settings,
  Copy,
  Clock,
  MoreVertical
} from 'lucide-react';
import CounterAnimation from '@/components/CounterAnimation';

const DashboardOverview = () => {
  // Mock data for active events
  const activeEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2023",
      status: "live",
      startDate: "May 15, 2023",
      endDate: "May 17, 2023",
      attendees: 842,
      engagement: 78,
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=150&fit=crop&crop=faces,center&q=90"
    },
    {
      id: 2,
      title: "Marketing Masterclass Workshop",
      status: "upcoming",
      startDate: "June 8, 2023",
      endDate: "June 9, 2023",
      attendees: 215,
      engagement: 0,
      thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=150&fit=crop&crop=faces,center&q=90"
    },
    {
      id: 3,
      title: "Annual Leadership Conference",
      status: "draft",
      startDate: "July 12, 2023",
      endDate: "July 14, 2023",
      attendees: 0,
      engagement: 0,
      thumbnail: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?w=300&h=150&fit=crop&crop=faces,center&q=90"
    }
  ];

  // Activity feed mock data
  const activityFeed = [
    {
      id: 1,
      type: "achievement",
      title: "Sarah Johnson completed the 'Networking Pro' challenge",
      time: "10 minutes ago",
      event: "Tech Innovation Summit 2023"
    },
    {
      id: 2,
      type: "registration",
      title: "15 new attendees registered for Marketing Masterclass",
      time: "25 minutes ago",
      event: "Marketing Masterclass Workshop"
    },
    {
      id: 3,
      type: "system",
      title: "Gamification system automatically added 3 new challenges",
      time: "1 hour ago",
      event: "Tech Innovation Summit 2023"
    },
    {
      id: 4,
      type: "achievement",
      title: "Mike Chen earned 'Top Contributor' badge",
      time: "2 hours ago",
      event: "Tech Innovation Summit 2023"
    }
  ];

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-green-500 hover:bg-green-600">Live</Badge>;
      case 'upcoming':
        return <Badge className="bg-amber-400 text-amber-950 hover:bg-amber-500">Upcoming</Badge>;
      case 'draft':
        return <Badge variant="outline">Draft</Badge>;
      case 'completed':
        return <Badge className="bg-slate-500 hover:bg-slate-600">Completed</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Welcome back, Jane!</h1>
          <p className="text-muted-foreground">Here's what's happening with your events today.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Eye size={16} />
            <span>View Analytics</span>
          </Button>
          <Button className="gap-2">
            <Calendar size={16} />
            <span>Create New Event</span>
          </Button>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-3xl font-bold">
                <CounterAnimation end={12} />
              </div>
              <div className="ml-auto p-2 bg-purple/10 text-purple rounded-full">
                <Calendar size={18} />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-3xl font-bold">
                <CounterAnimation end={2547} />
              </div>
              <div className="ml-auto p-2 bg-teal/10 text-teal rounded-full">
                <Users size={18} />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-3xl font-bold">
                <CounterAnimation end={78} suffix="%" />
              </div>
              <div className="ml-auto p-2 bg-amber/10 text-amber rounded-full">
                <BarChart size={18} />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Badges Awarded</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-3xl font-bold">
                <CounterAnimation end={1458} />
              </div>
              <div className="ml-auto p-2 bg-purple/10 text-purple rounded-full">
                <Award size={18} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active events */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Active & Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-36">
                <img 
                  src={event.thumbnail} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  {renderStatusBadge(event.status)}
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
                  <button className="h-7 w-7 rounded-full hover:bg-muted flex items-center justify-center">
                    <MoreVertical size={16} />
                  </button>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{event.startDate} - {event.endDate}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Attendees</span>
                    <span className="font-medium">{event.attendees}</span>
                  </div>
                  {event.status === 'live' && (
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Engagement</span>
                        <span className="font-medium">{event.engagement}%</span>
                      </div>
                      <Progress value={event.engagement} className="h-2" />
                    </div>
                  )}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye size={14} className="mr-1" />
                      View
                    </Button>
                    {event.status === 'draft' ? (
                      <Button size="sm" className="w-full">
                        <Settings size={14} className="mr-1" />
                        Edit
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full">
                        <Copy size={14} className="mr-1" />
                        Duplicate
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Activity feed */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Activity Feed</CardTitle>
            <CardDescription>Recent actions, achievements, and system updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityFeed.map((activity) => (
                <div key={activity.id} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
                  <div className={`p-2 rounded-full shrink-0 ${
                    activity.type === 'achievement' ? 'bg-amber/10 text-amber' :
                    activity.type === 'registration' ? 'bg-teal/10 text-teal' :
                    'bg-purple/10 text-purple'
                  }`}>
                    {activity.type === 'achievement' ? <Award size={18} /> :
                     activity.type === 'registration' ? <Users size={18} /> :
                     <TrendingUp size={18} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.title}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <span>{activity.time}</span>
                      <span>•</span>
                      <span>{activity.event}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
