import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Heart, Clock, TrendingUp, DollarSign } from "lucide-react";

const Dashboard = () => {
  const [userRole] = useState("traveler"); // This would come from auth context

  // Mock data
  const upcomingBookings = [
    {
      id: 1,
      tripName: "Sahara Desert Adventure",
      destination: "Morocco",
      date: "2024-06-15",
      status: "confirmed",
      price: 1299,
    },
  ];

  const pastBookings = [
    {
      id: 2,
      tripName: "Alpine Hiking Experience",
      destination: "Switzerland",
      date: "2024-03-20",
      status: "completed",
      price: 1599,
    },
  ];

  const favorites = [
    {
      id: 1,
      tripName: "Northern Lights Iceland",
      destination: "Iceland",
      image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 bg-muted/30">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Welcome back! Here's your travel overview
            </p>
          </div>

          {userRole === "traveler" && (
            <>
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Upcoming Trips</p>
                        <p className="text-3xl font-bold">1</p>
                      </div>
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Completed</p>
                        <p className="text-3xl font-bold">5</p>
                      </div>
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Favorites</p>
                        <p className="text-3xl font-bold">8</p>
                      </div>
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
                        <p className="text-3xl font-bold">$8.4K</p>
                      </div>
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <Tabs defaultValue="bookings" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                </TabsList>

                <TabsContent value="bookings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Trips</CardTitle>
                      <CardDescription>Your confirmed bookings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {upcomingBookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{booking.tripName}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{booking.destination}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{booking.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="mb-2">{booking.status}</Badge>
                            <p className="text-lg font-bold">${booking.price}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Past Trips</CardTitle>
                      <CardDescription>Your travel history</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {pastBookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{booking.tripName}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{booking.destination}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{booking.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Button variant="outline" size="sm">
                              Write Review
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="favorites">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Favorites</CardTitle>
                      <CardDescription>Trips you want to remember</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {favorites.map((fav) => (
                          <div key={fav.id} className="border rounded-lg overflow-hidden">
                            <img
                              src={fav.image}
                              alt={fav.tripName}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-semibold mb-1">{fav.tripName}</h3>
                              <p className="text-sm text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {fav.destination}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Settings</CardTitle>
                      <CardDescription>Manage your account information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Profile settings coming soon...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
