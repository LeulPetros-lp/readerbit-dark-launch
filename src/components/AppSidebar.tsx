
import { useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  BarChart3, 
  TrendingUp, 
  BookOpen, 
  Target, 
  Lightbulb, 
  Users, 
  User, 
  Settings, 
  HelpCircle,
  Home
} from "lucide-react";

const menuItems = [
  { title: "Overview", url: "/dashboard", icon: BarChart3 },
  { title: "Reading Stats", url: "/dashboard/stats", icon: TrendingUp },
  { title: "Books", url: "/dashboard/books", icon: BookOpen },
  { title: "Goals", url: "/dashboard/goals", icon: Target },
  { title: "Insights", url: "/dashboard/insights", icon: Lightbulb },
  { title: "Social", url: "/dashboard/social", icon: Users },
];

const settingsItems = [
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "Help", url: "/dashboard/help", icon: HelpCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r`}>
      <SidebarContent>
        {/* Logo Section */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8" />
            {!collapsed && (
              <h2 className="text-xl font-comfortaa font-bold">
                readerbit
              </h2>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-2">
            {!collapsed && "Dashboard"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    className={`
                      mx-3 mb-1 rounded-lg transition-all duration-200
                      ${isActive(item.url) 
                        ? 'bg-accent text-accent-foreground' 
                        : 'hover:bg-accent/50'
                      }
                    `}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="px-6 py-2">
            {!collapsed && "Account"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    className={`
                      mx-3 mb-1 rounded-lg transition-all duration-200
                      ${isActive(item.url) 
                        ? 'bg-accent text-accent-foreground' 
                        : 'hover:bg-accent/50'
                      }
                    `}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Back to Landing */}
        <div className="p-4 border-t mt-4">
          <SidebarMenuButton
            onClick={() => navigate('/')}
            className="w-full hover:bg-accent/50 transition-all duration-200 rounded-lg"
          >
            <Home className="h-4 w-4" />
            {!collapsed && <span>Back to Home</span>}
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
