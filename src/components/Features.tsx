
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Smart Analytics",
      description: "Track reading speed, comprehension rates, and progress patterns with advanced data visualization.",
      icon: "📊"
    },
    {
      title: "Personalized Insights",
      description: "Get tailored recommendations based on your reading habits and preferences.",
      icon: "🎯"
    },
    {
      title: "Goal Tracking",
      description: "Set and achieve reading goals with intelligent milestone tracking and motivation.",
      icon: "🏆"
    },
    {
      title: "Social Reading",
      description: "Connect with fellow readers, share insights, and discover new books together.",
      icon: "👥"
    },
    {
      title: "Multi-Platform",
      description: "Seamlessly sync your reading progress across all your devices and platforms.",
      icon: "📱"
    },
    {
      title: "AI Recommendations",
      description: "Discover your next favorite book with our AI-powered recommendation engine.",
      icon: "🤖"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="gradient-text block">Modern Readers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to take your reading to the next level, powered by cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border-purple-500/20"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
