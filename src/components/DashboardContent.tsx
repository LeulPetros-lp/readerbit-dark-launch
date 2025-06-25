
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const DashboardContent = () => {
  // Sample data for charts
  const readingProgressData = [
    { month: "Jan", pages: 1200, books: 4 },
    { month: "Feb", pages: 1500, books: 5 },
    { month: "Mar", pages: 1800, books: 6 },
    { month: "Apr", pages: 1300, books: 4 },
    { month: "May", pages: 2100, books: 7 },
    { month: "Jun", pages: 1900, books: 6 },
  ];

  const genreData = [
    { name: "Fiction", value: 35, color: "#8b5cf6" },
    { name: "Science", value: 25, color: "#06b6d4" },
    { name: "Biography", value: 20, color: "#10b981" },
    { name: "History", value: 12, color: "#f59e0b" },
    { name: "Other", value: 8, color: "#ef4444" },
  ];

  const dailyReadingData = [
    { day: "Mon", minutes: 45 },
    { day: "Tue", minutes: 62 },
    { day: "Wed", minutes: 38 },
    { day: "Thu", minutes: 71 },
    { day: "Fri", minutes: 55 },
    { day: "Sat", minutes: 89 },
    { day: "Sun", minutes: 93 },
  ];

  const weeklyGoalData = [
    { week: "Week 1", target: 300, actual: 280 },
    { week: "Week 2", target: 300, actual: 320 },
    { week: "Week 3", target: 300, actual: 295 },
    { week: "Week 4", target: 300, actual: 350 },
  ];

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card border-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Books Read</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">32</div>
            <p className="text-xs text-green-400">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="glass-card border-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Pages Read</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">9,847</div>
            <p className="text-xs text-green-400">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="glass-card border-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Reading Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">15 days</div>
            <p className="text-xs text-yellow-400">Keep it up!</p>
          </CardContent>
        </Card>

        <Card className="glass-card border-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Avg. Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">245 wpm</div>
            <p className="text-xs text-blue-400">+5% improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reading Progress Chart */}
        <Card className="glass-card border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Reading Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={readingProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    border: '1px solid #7c3aed',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="pages"
                  stroke="#8b5cf6"
                  fill="url(#colorGradient)"
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Genre Distribution */}
        <Card className="glass-card border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Reading Genres</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genreData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {genreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    border: '1px solid #7c3aed',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Reading Time */}
        <Card className="glass-card border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Daily Reading Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dailyReadingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    border: '1px solid #7c3aed',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="minutes" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Goals */}
        <Card className="glass-card border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Weekly Goals vs Actual</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weeklyGoalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    border: '1px solid #7c3aed',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line type="monotone" dataKey="target" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" />
                <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Current Reading Goals */}
      <Card className="glass-card border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white">Current Reading Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Monthly Goal: 6 books</span>
              <span className="text-white">4/6 completed</span>
            </div>
            <Progress value={67} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Annual Goal: 50 books</span>
              <span className="text-white">32/50 completed</span>
            </div>
            <Progress value={64} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Reading Streak Goal: 30 days</span>
              <span className="text-white">15/30 days</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardContent;
