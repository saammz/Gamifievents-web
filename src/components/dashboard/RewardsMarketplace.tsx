
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Plus, 
  Award, 
  ShoppingBag, 
  Tag, 
  Edit, 
  Trash2, 
  Eye,
  Clock
} from 'lucide-react';

const RewardsMarketplace = () => {
  // Mock data for rewards
  const digitalRewards = [
    {
      id: 1,
      title: "VIP Access Pass",
      description: "Exclusive access to VIP areas and special content",
      pointCost: 500,
      category: "access",
      limited: true,
      remaining: 15,
      image: "https://images.unsplash.com/photo-1560439271-98a1e3b3c6c4?w=300&h=200&fit=crop&crop=faces,center&q=90"
    },
    {
      id: 2,
      title: "Premium Content Bundle",
      description: "Collection of premium downloadable resources",
      pointCost: 300,
      category: "content",
      limited: false,
      image: "https://images.unsplash.com/photo-1586892478025-2b5472316f22?w=300&h=200&fit=crop&crop=faces,center&q=90"
    },
    {
      id: 3,
      title: "1-on-1 Speaker Session",
      description: "15-minute virtual meeting with a keynote speaker",
      pointCost: 1000,
      category: "experience",
      limited: true,
      remaining: 5,
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=300&h=200&fit=crop&crop=faces,center&q=90"
    }
  ];

  const physicalRewards = [
    {
      id: 4,
      title: "Event T-Shirt",
      description: "Limited edition branded t-shirt",
      pointCost: 350,
      category: "merchandise",
      limited: true,
      remaining: 50,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=200&fit=crop&crop=faces,center&q=90"
    },
    {
      id: 5,
      title: "Premium Swag Bag",
      description: "Collection of high-quality branded items",
      pointCost: 600,
      category: "merchandise",
      limited: true,
      remaining: 25,
      image: "https://images.unsplash.com/photo-1581260466152-d2c0303e52b5?w=300&h=200&fit=crop&crop=faces,center&q=90"
    }
  ];

  const badges = [
    {
      id: 1,
      title: "Networking Champion",
      description: "Awarded for connecting with at least 20 other attendees",
      pointValue: 100,
      category: "social",
      image: "https://images.unsplash.com/photo-1607583444345-fa40bc221e3f?w=200&h=200&fit=crop&crop=faces,center&q=90"
    },
    {
      id: 2,
      title: "Content Creator",
      description: "Awarded for sharing at least 5 posts about the event",
      pointValue: 150,
      category: "social",
      image: "https://images.unsplash.com/photo-1581260466152-d2c0303e52b5?w=200&h=200&fit=crop&crop=faces,center&q=90"
    },
    {
      id: 3,
      title: "Early Bird",
      description: "Awarded for attending all morning sessions on time",
      pointValue: 75,
      category: "attendance",
      image: "https://images.unsplash.com/photo-1620428268482-cf1851a383aa?w=200&h=200&fit=crop&crop=faces,center&q=90"
    }
  ];

  // Mock data for redemptions
  const redemptions = [
    {
      id: 1,
      reward: "VIP Access Pass",
      attendee: "John Smith",
      date: "May 14, 2023",
      status: "pending"
    },
    {
      id: 2,
      reward: "Event T-Shirt",
      attendee: "Sarah Johnson",
      date: "May 13, 2023",
      status: "fulfilled"
    },
    {
      id: 3,
      reward: "Premium Content Bundle",
      attendee: "Michael Chen",
      date: "May 12, 2023",
      status: "fulfilled"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Rewards Marketplace</h1>
          <p className="text-muted-foreground">Manage rewards, badges, and redemptions</p>
        </div>
        <Button className="gap-2">
          <Plus size={16} />
          <span>Add New Reward</span>
        </Button>
      </div>

      <Tabs defaultValue="rewards" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="badges">Badges & Achievements</TabsTrigger>
          <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
        </TabsList>

        <TabsContent value="rewards" className="mt-0">
          <Tabs defaultValue="digital" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="digital">Digital Rewards</TabsTrigger>
                <TabsTrigger value="physical">Physical Rewards</TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Tag size={16} />
                  <span>Categories</span>
                </Button>
              </div>
            </div>

            <TabsContent value="digital" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {digitalRewards.map((reward) => (
                  <Card key={reward.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={reward.image} 
                        alt={reward.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{reward.title}</CardTitle>
                          <CardDescription>{reward.description}</CardDescription>
                        </div>
                        <Badge className="bg-purple">{reward.pointCost} pts</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="bg-background text-xs">
                          {reward.category}
                        </Badge>
                        {reward.limited && (
                          <Badge variant="outline" className="bg-background text-xs flex items-center gap-1">
                            <Clock size={12} />
                            <span>{reward.remaining} remaining</span>
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 border-t pt-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit size={14} className="mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye size={14} className="mr-1" />
                        Preview
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 size={14} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}

                <Card className="flex flex-col items-center justify-center p-8 h-[300px] border-dashed">
                  <Gift size={48} className="text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Add Digital Reward</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Create exclusive digital content, access passes, or virtual experiences
                  </p>
                  <Button>
                    <Plus size={16} className="mr-2" />
                    Add Reward
                  </Button>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="physical" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {physicalRewards.map((reward) => (
                  <Card key={reward.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={reward.image} 
                        alt={reward.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{reward.title}</CardTitle>
                          <CardDescription>{reward.description}</CardDescription>
                        </div>
                        <Badge className="bg-purple">{reward.pointCost} pts</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="bg-background text-xs">
                          {reward.category}
                        </Badge>
                        {reward.limited && (
                          <Badge variant="outline" className="bg-background text-xs flex items-center gap-1">
                            <Clock size={12} />
                            <span>{reward.remaining} remaining</span>
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 border-t pt-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit size={14} className="mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye size={14} className="mr-1" />
                        Preview
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 size={14} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>
        
        <TabsContent value="badges" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {badges.map((badge) => (
              <Card key={badge.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 flex justify-center">
                  <div className="rounded-full overflow-hidden w-24 h-24 border-4 border-purple/20">
                    <img 
                      src={badge.image} 
                      alt={badge.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-lg">{badge.title}</CardTitle>
                  <CardDescription>{badge.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="bg-purple my-2">{badge.pointValue} pts</Badge>
                  <Badge variant="outline" className="bg-background text-xs ml-2">
                    {badge.category}
                  </Badge>
                </CardContent>
                <CardFooter className="flex gap-2 border-t pt-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 size={14} />
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="flex flex-col items-center justify-center p-8 h-[300px] border-dashed">
              <Award size={48} className="text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Create New Badge</h3>
              <p className="text-muted-foreground text-center mb-4">
                Design custom achievement badges to recognize attendee participation
              </p>
              <Button>
                <Plus size={16} className="mr-2" />
                Create Badge
              </Button>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="redemptions" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Recent Redemptions</CardTitle>
              <CardDescription>Track and manage reward redemptions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-muted">
                    <tr>
                      <th scope="col" className="px-6 py-3">Reward</th>
                      <th scope="col" className="px-6 py-3">Attendee</th>
                      <th scope="col" className="px-6 py-3">Date</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {redemptions.map((redemption) => (
                      <tr key={redemption.id} className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">{redemption.reward}</td>
                        <td className="px-6 py-4">{redemption.attendee}</td>
                        <td className="px-6 py-4">{redemption.date}</td>
                        <td className="px-6 py-4">
                          {redemption.status === 'pending' ? (
                            <Badge className="bg-amber-400 text-amber-950 hover:bg-amber-500">Pending</Badge>
                          ) : (
                            <Badge className="bg-green-500 hover:bg-green-600">Fulfilled</Badge>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye size={14} />
                            </Button>
                            {redemption.status === 'pending' && (
                              <Button variant="outline" size="sm">
                                <ShoppingBag size={14} className="mr-1" />
                                Fulfill
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RewardsMarketplace;
