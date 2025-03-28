
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  LineChart, 
  Line, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data
const engagementData = [
  { name: 'Day 1', points: 4000, challenges: 2400, sessions: 1200 },
  { name: 'Day 2', points: 3000, challenges: 1398, sessions: 900 },
  { name: 'Day 3', points: 2000, challenges: 9800, sessions: 3200 },
  { name: 'Day 4', points: 2780, challenges: 3908, sessions: 2000 },
  { name: 'Day 5', points: 1890, challenges: 4800, sessions: 2181 },
  { name: 'Day 6', points: 2390, challenges: 3800, sessions: 2500 },
  { name: 'Day 7', points: 3490, challenges: 4300, sessions: 2100 },
];

const usersData = [
  { name: 'Jan', active: 4000, new: 2400 },
  { name: 'Feb', active: 3000, new: 1398 },
  { name: 'Mar', active: 2000, new: 9800 },
  { name: 'Apr', active: 2780, new: 3908 },
  { name: 'May', active: 1890, new: 4800 },
  { name: 'Jun', active: 2390, new: 3800 },
  { name: 'Jul', active: 3490, new: 4300 },
];

const distributionData = [
  { name: '0-100', users: 120 },
  { name: '101-500', users: 200 },
  { name: '501-1000', users: 150 },
  { name: '1001-2000', users: 80 },
  { name: '2001-5000', users: 40 },
  { name: '5001+', users: 10 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track engagement, user behavior, and ROI metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="last30">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7">Last 7 days</SelectItem>
              <SelectItem value="last30">Last 30 days</SelectItem>
              <SelectItem value="last90">Last 90 days</SelectItem>
              <SelectItem value="year">This year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
          <TabsTrigger value="roi">ROI</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
                <CardDescription>Points, challenges completed, and session attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={engagementData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="points" fill="#9b87f5" name="Points Earned" />
                    <Bar dataKey="challenges" fill="#03DAC5" name="Challenges Completed" />
                    <Bar dataKey="sessions" fill="#FFB300" name="Sessions Attended" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Metrics</CardTitle>
                <CardDescription>Active users and new registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={usersData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="active" stroke="#9b87f5" name="Active Users" />
                    <Line type="monotone" dataKey="new" stroke="#03DAC5" name="New Users" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Points Distribution</CardTitle>
                <CardDescription>Number of users by point range</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={distributionData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#9b87f5" name="Number of Users" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="engagement" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <p>Detailed engagement analytics would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <p>Detailed user analytics would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <p>Content performance analytics would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="roi" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <p>ROI analytics would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
