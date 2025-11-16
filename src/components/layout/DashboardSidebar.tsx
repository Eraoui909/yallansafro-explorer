import { Link, useLocation } from "react-router-dom";
import { Compass, LayoutDashboard, Calendar, Briefcase, Ticket, Wallet, Settings, LogOut, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type DashboardSidebarProps = {
  children: React.ReactNode;
  variant?: "traveler" | "agency" | "guide";
};

const DashboardSidebarLayout = ({ children, variant = "traveler" }: DashboardSidebarProps) => {
  const location = useLocation();

  const isTraveler = variant === "traveler";
  const isAgency = variant === "agency";

  const baseItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      to: isTraveler ? "/dashboard" : isAgency ? "/agency-dashboard" : "/guide-dashboard",
    },
    ...(isTraveler
      ? [
          { label: "Trips", icon: Compass, to: "/trips" },
          { label: "Bookings", icon: Ticket, to: "/dashboard#bookings" },
          { label: "Favorites", icon: Users, to: "/dashboard#favorites" },
        ]
      : []),
    ...(isAgency
      ? [
          { label: "Trips", icon: Compass, to: "/agency-dashboard#trips" },
          { label: "Bookings", icon: Ticket, to: "/agency-dashboard#bookings" },
          { label: "Promotions", icon: Briefcase, to: "/agency-dashboard#promotions" },
        ]
      : []),
    ...(!isTraveler && !isAgency
      ? [
          { label: "My Services", icon: Briefcase, to: "/guide-dashboard#services" },
          { label: "Calendar", icon: Calendar, to: "/guide-dashboard#calendar" },
          { label: "Bookings", icon: Ticket, to: "/guide-dashboard#bookings" },
          { label: "Payouts", icon: Wallet, to: "/guide-dashboard#payouts" },
        ]
      : []),
  ];

  const menuItems = [
    ...baseItems,
    {
      label: "Settings",
      icon: Settings,
      to: "/settings",
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar className="bg-background border-r" collapsible="offcanvas">
        <SidebarHeader className="px-4 pt-6 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Compass className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-emerald-900">YallaNsafro</span>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-2">
          <SidebarGroup className="mt-2">
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.to.split("#")[0];

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="h-9 rounded-xl px-3 text-[13px] font-medium text-emerald-900/80 hover:bg-emerald-50 hover:text-emerald-700 data-[active=true]:bg-emerald-50 data-[active=true]:text-emerald-700"
                    >
                      <Link to={item.to}>
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="mt-auto px-2 pb-4">
          <SidebarMenu className="pt-2 border-t border-emerald-50">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="h-9 rounded-xl px-3 text-[13px] font-medium text-emerald-900/80 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <button type="button" className="w-full text-left flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-muted/30">
        <div className="flex flex-col min-h-svh">
          <div className="flex items-center justify-between px-4 pt-4 md:px-8 md:pt-6">
            <SidebarTrigger className="h-8 w-8 rounded-full border border-emerald-50 bg-background shadow-sm hover:bg-emerald-50 md:h-9 md:w-9" />
          </div>
          <div className="flex-1 px-4 py-4 md:px-8 md:py-6">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardSidebarLayout;
