
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  FileEdit, 
  HelpCircle, 
  MapPin, 
  MessageSquare, 
  Plus, 
  Search, 
  Sparkles 
} from 'lucide-react';

const ContentStudio = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Content Studio</h1>
          <p className="text-muted-foreground">Create engaging content for your events</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Search size={16} />
            <span>Browse Templates</span>
          </Button>
          <Button className="gap-2">
            <Plus size={16} />
            <span>Create New</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="quizzes" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="quizzes">Quizzes & Polls</TabsTrigger>
          <TabsTrigger value="hunts">Scavenger Hunts</TabsTrigger>
          <TabsTrigger value="feedback">Feedback Forms</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="quizzes" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <div className="h-36 bg-gradient-to-r from-purple/10 to-teal/10 flex items-center justify-center">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <HelpCircle className="h-8 w-8 text-purple" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Create Quiz</CardTitle>
                <CardDescription>
                  Test knowledge and award points
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Build interactive quizzes with multiple question types, media, and scoring rules.
                </p>
                <Button className="w-full gap-2">
                  <Plus size={16} />
                  <span>Create Quiz</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <div className="h-36 bg-gradient-to-r from-purple/10 to-teal/10 flex items-center justify-center">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Sparkles className="h-8 w-8 text-teal" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Create Poll</CardTitle>
                <CardDescription>
                  Gather opinions with fun polls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Design interactive polls with real-time results visualization for audience engagement.
                </p>
                <Button className="w-full gap-2">
                  <Plus size={16} />
                  <span>Create Poll</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <div className="h-36 bg-gradient-to-r from-purple/10 to-teal/10 flex items-center justify-center">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <FileEdit className="h-8 w-8 text-amber" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Browse Templates</CardTitle>
                <CardDescription>
                  Start with pre-built templates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose from our library of professionally designed quiz and poll templates.
                </p>
                <Button variant="outline" className="w-full gap-2">
                  <Search size={16} />
                  <span>Browse Templates</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="hunts" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <div className="h-36 bg-gradient-to-r from-purple/10 to-teal/10 flex items-center justify-center">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <MapPin className="h-8 w-8 text-purple" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Create Scavenger Hunt</CardTitle>
                <CardDescription>
                  Design interactive location-based challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Design engaging scavenger hunts with QR codes, location challenges, and progressive clues.
                </p>
                <Button className="w-full gap-2">
                  <Plus size={16} />
                  <span>Create Hunt</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="feedback" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <div className="h-36 bg-gradient-to-r from-purple/10 to-teal/10 flex items-center justify-center">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <MessageSquare className="h-8 w-8 text-purple" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Create Feedback Form</CardTitle>
                <CardDescription>
                  Gather insights with gamified feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Design feedback forms that reward participation and provide valuable insights.
                </p>
                <Button className="w-full gap-2">
                  <Plus size={16} />
                  <span>Create Form</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <div className="h-36 bg-gradient-to-r from-purple/10 to-teal/10 flex items-center justify-center">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <MessageSquare className="h-8 w-8 text-purple" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Create Notification</CardTitle>
                <CardDescription>
                  Send targeted messages to attendees
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Create and schedule notifications with segmentation and personalization.
                </p>
                <Button className="w-full gap-2">
                  <Plus size={16} />
                  <span>Create Notification</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentStudio;
