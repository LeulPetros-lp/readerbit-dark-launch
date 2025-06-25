
import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    { number: "50K+", label: "Active Readers" },
    { number: "1M+", label: "Books Tracked" },
    { number: "98%", label: "User Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="stats" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
