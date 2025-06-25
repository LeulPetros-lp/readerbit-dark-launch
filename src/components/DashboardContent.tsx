
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardContent = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to your Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Your reading analytics and insights will appear here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardContent;
