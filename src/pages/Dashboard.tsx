
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import DashboardContent from "@/components/DashboardContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AppSidebar />
      
      <main className="flex-1 overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-white hover:bg-white/10" />
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          </div>
          <div className="text-sm text-gray-300">
            Welcome back, Reader!
          </div>
        </header>
        
        <div className="p-6 overflow-auto h-[calc(100vh-4rem)]">
          <DashboardContent />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
