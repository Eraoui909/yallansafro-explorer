import DashboardSidebarLayout from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, DollarSign, Search, Users } from "lucide-react";

const GuideDashboard = () => {
  const summaryCards = [
    {
      label: "Pending Requests",
      value: "4",
      change: "+2% vs last week",
      positive: true,
    },
    {
      label: "Upcoming Bookings",
      value: "12",
      change: "+5% vs last week",
      positive: true,
    },
    {
      label: "Monthly Earnings",
      value: "$3,450",
      change: "-1.5% vs last month",
      positive: false,
    },
  ];

  const pendingBookings = [
    {
      id: 1,
      traveler: "Alex Johnson",
      guests: "2 guests",
      service: "Historic City Walk",
      date: "Oct 28, 2023",
      avatar: "https://images.unsplash.com/photo-1494797710133-75adf6c1f4a3?w=200&h=200&fit=crop",
      initials: "AJ",
    },
    {
      id: 2,
      traveler: "Ben Carter",
      guests: "1 guest",
      service: "Culinary Delights Tour",
      date: "Oct 29, 2023",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      initials: "BC",
    },
    {
      id: 3,
      traveler: "Chloe Davis",
      guests: "4 guests",
      service: "Mountain Hike Adventure",
      date: "Nov 2, 2023",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
      initials: "CD",
    },
    {
      id: 4,
      traveler: "David Evans",
      guests: "2 guests",
      service: "Historic City Walk",
      date: "Nov 5, 2023",
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop",
      initials: "DE",
    },
  ];

  return (
    <DashboardSidebarLayout variant="guide">
      <div className="space-y-8">
          {/* Top bar */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome, Maria!</h1>
              <p className="text-muted-foreground">
                Here&apos;s a summary of your guide activity today.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-background border shadow-sm min-w-[260px]">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search bookings, travelers..."
                  className="border-0 p-0 h-7 focus-visible:ring-0 text-sm"
                />
              </div>
              <Button className="w-full md:w-auto">
                <Calendar className="mr-2 h-4 w-4" />
                Add New Service
              </Button>
            </div>
          </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {summaryCards.map((card) => (
              <Card key={card.label} className="border border-border/60 shadow-sm">
                <CardContent className="p-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5">
                      {card.label}
                    </p>
                    <p className="text-2xl font-semibold mb-1">{card.value}</p>
                    <p
                      className={`text-xs ${
                        card.positive
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-rose-600 dark:text-rose-400"
                      }`}
                    >
                      {card.change}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {card.label === "Monthly Earnings" ? (
                      <DollarSign className="h-5 w-5" />
                    ) : (
                      <Users className="h-5 w-5" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        {/* Bookings list */}
        <Card className="border border-border/60 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle>Your Bookings</CardTitle>
              <CardDescription>Manage your upcoming and past guide requests.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pending" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="pending">Pending (4)</TabsTrigger>
                  <TabsTrigger value="confirmed">Confirmed (12)</TabsTrigger>
                  <TabsTrigger value="past">Past (86)</TabsTrigger>
                </TabsList>

                <TabsContent value="pending" className="space-y-1">
                  <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)_120px] text-xs font-medium text-muted-foreground px-2 pb-2">
                    <span>Traveler</span>
                    <span>Service</span>
                    <span>Date</span>
                    <span className="text-right pr-1">Actions</span>
                  </div>

                  <div className="divide-y rounded-lg border bg-background/80">
                    {pendingBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="grid grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1fr)_120px] items-center gap-3 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={booking.avatar} alt={booking.traveler} />
                            <AvatarFallback>{booking.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">{booking.traveler}</p>
                            <p className="text-xs text-muted-foreground">{booking.guests}</p>
                          </div>
                        </div>

                        <div className="text-sm">
                          <p className="font-medium">{booking.service}</p>
                        </div>

                        <div className="text-sm text-muted-foreground">{booking.date}</div>

                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Decline
                          </Button>
                          <Button size="sm">Accept</Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 text-center">
                    <Button variant="link" className="text-sm">
                      View All Requests
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="confirmed">
                  <div className="text-sm text-muted-foreground">
                    Confirmed bookings view coming soon.
                  </div>
                </TabsContent>

                <TabsContent value="past">
                  <div className="text-sm text-muted-foreground">
                    Past booking history view coming soon.
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
      </div>
    </DashboardSidebarLayout>
  );
};

export default GuideDashboard;
