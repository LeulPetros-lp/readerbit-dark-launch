
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Target, Trophy, Users, Smartphone, Bot } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Smart Analytics",
      description: "Track reading speed, comprehension rates, and progress patterns with advanced data visualization.",
      icon: BarChart3
    },
    {
      title: "Personalized Insights",
      description: "Get tailored recommendations based on your reading habits and preferences.",
      icon: Target
    },
    {
      title: "Goal Tracking",
      description: "Set and achieve reading goals with intelligent milestone tracking and motivation.",
      icon: Trophy
    },
    {
      title: "Social Reading",
      description: "Connect with fellow readers, share insights, and discover new books together.",
      icon: Users
    },
    {
      title: "Multi-Platform",
      description: "Seamlessly sync your reading progress across all your devices and platforms.",
      icon: Smartphone
    },
    {
      title: "AI Recommendations",
      description: "Discover your next favorite book with our AI-powered recommendation engine.",
      icon: Bot
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block">Modern Readers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to take your reading to the next level, powered by cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
