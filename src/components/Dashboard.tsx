
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import DashboardContent from "@/components/DashboardContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      
      <main className="flex-1 overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 border-b">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="text-sm text-muted-foreground">
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
