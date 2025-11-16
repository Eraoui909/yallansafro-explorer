import DashboardSidebarLayout from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  CreditCard,
  DollarSign,
  Search,
  Tag,
  TrendingUp,
} from "lucide-react";

const AgencyDashboard = () => {
  const summaryCards = [
    {
      label: "Total Bookings",
      value: "1,204",
      change: "+5.2% this month",
      icon: Calendar,
    },
    {
      label: "Upcoming Trips",
      value: "18",
      change: "+2 this week",
      icon: Tag,
    },
    {
      label: "Revenue this Month",
      value: "$45,890",
      change: "+12.5%",
      icon: DollarSign,
    },
    {
      label: "Active Promotions",
      value: "5",
      change: "+1 from yesterday",
      icon: TrendingUp,
    },
  ];

  const recentBookings = [
    {
      id: 1,
      customer: "Liam Johnson",
      trip: "Bali Jungle Adventure",
      date: "2023-10-28",
      status: "Confirmed",
      statusColor: "bg-emerald-500",
      amount: "$2,450.00",
    },
    {
      id: 2,
      customer: "Olivia Smith",
      trip: "Kyoto Cherry Blossoms",
      date: "2023-10-27",
      status: "Pending",
      statusColor: "bg-amber-500",
      amount: "$3,120.00",
    },
    {
      id: 3,
      customer: "Noah Williams",
      trip: "Roman Holiday",
      date: "2023-10-26",
      status: "Confirmed",
      statusColor: "bg-emerald-500",
      amount: "$1,800.00",
    },
    {
      id: 4,
      customer: "Emma Brown",
      trip: "Safari in Kenya",
      date: "2023-10-25",
      status: "Cancelled",
      statusColor: "bg-rose-500",
      amount: "$4,500.00",
    },
  ];

  return (
    <DashboardSidebarLayout variant="agency">
      <div className="space-y-8">
          {/* Top bar */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome, Nomadly Agency!
              </h1>
              <p className="text-muted-foreground">
                Here&apos;s a summary of your agency&apos;s performance today.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-background border shadow-sm min-w-[260px]">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search trips, bookings, customers..."
                  className="border-0 p-0 h-7 focus-visible:ring-0 text-sm"
                />
              </div>
              <Button className="w-full md:w-auto">
                <CreditCard className="mr-2 h-4 w-4" />
                Create New Trip
              </Button>
            </div>
          </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {summaryCards.map((card) => (
              <Card key={card.label} className="border border-border/60 shadow-sm">
                <CardContent className="p-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5">
                      {card.label}
                    </p>
                    <p className="text-2xl font-semibold mb-1">{card.value}</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">
                      {card.change}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <card.icon className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        {/* Recent bookings */}
        <Card className="border border-border/60 shadow-sm overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between gap-2">
              <div>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>
                  Latest reservations across your active trips.
                </CardDescription>
              </div>
              <Button variant="link" className="px-0">
                View All Bookings
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-muted/60 border-b">
                    <tr className="text-left">
                      <th className="px-6 py-3 font-medium text-muted-foreground">Customer</th>
                      <th className="px-6 py-3 font-medium text-muted-foreground">Trip</th>
                      <th className="px-6 py-3 font-medium text-muted-foreground">Date</th>
                      <th className="px-6 py-3 font-medium text-muted-foreground">Status</th>
                      <th className="px-6 py-3 font-medium text-muted-foreground text-right">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr
                        key={booking.id}
                        className="border-b last:border-b-0 hover:bg-muted/40 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">{booking.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-primary">
                          {booking.trip}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                          {booking.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge
                            variant="outline"
                            className="gap-2 border-transparent bg-background"
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${booking.statusColor}`}
                            />
                            {booking.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                          {booking.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
      </div>
    </DashboardSidebarLayout>
  );
};

export default AgencyDashboard;
