
import { useState } from "react";
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

const menuItems = [
  { title: "Overview", url: "/dashboard", icon: "📊" },
  { title: "Reading Stats", url: "/dashboard/stats", icon: "📈" },
  { title: "Books", url: "/dashboard/books", icon: "📚" },
  { title: "Goals", url: "/dashboard/goals", icon: "🎯" },
  { title: "Insights", url: "/dashboard/insights", icon: "💡" },
  { title: "Social", url: "/dashboard/social", icon: "👥" },
];

const settingsItems = [
  { title: "Profile", url: "/dashboard/profile", icon: "👤" },
  { title: "Settings", url: "/dashboard/settings", icon: "⚙️" },
  { title: "Help", url: "/dashboard/help", icon: "❓" },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} bg-black/40 backdrop-blur-md border-r border-white/10`}>
      <SidebarContent className="bg-transparent">
        {/* Logo Section */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📖</div>
            {!collapsed && (
              <h2 className="text-xl font-comfortaa font-bold gradient-text">
                ReaderBit
              </h2>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 px-6 py-2">
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
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-purple-500/30' 
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >
                    <span className="text-lg mr-3">{item.icon}</span>
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="text-gray-400 px-6 py-2">
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
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-purple-500/30' 
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >
                    <span className="text-lg mr-3">{item.icon}</span>
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Back to Landing */}
        <div className="p-4 border-t border-white/10 mt-4">
          <SidebarMenuButton
            onClick={() => navigate('/')}
            className="w-full text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-lg"
          >
            <span className="text-lg mr-3">🏠</span>
            {!collapsed && <span>Back to Home</span>}
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
