import React from 'react';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  Activity
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const activityData = [
  { name: 'Jan', projects: 12, papers: 8 },
  { name: 'Feb', projects: 15, papers: 12 },
  { name: 'Mar', projects: 18, papers: 15 },
  { name: 'Apr', projects: 22, papers: 18 },
  { name: 'May', projects: 25, papers: 22 },
  { name: 'Jun', projects: 28, papers: 25 },
];

const statusData = [
  { name: 'Completed', value: 35, color: '#10b981' },
  { name: 'In Progress', value: 45, color: '#3b82f6' },
  { name: 'Pending', value: 20, color: '#f59e0b' },
];

const recentProjects = [
  {
    id: 1,
    title: 'AI-Powered Smart Home System',
    team: 'Team Alpha',
    status: 'in-progress',
    dueDate: '2024-02-15',
    progress: 75
  },
  {
    id: 2,
    title: 'Blockchain Voting Platform',
    team: 'Team Beta',
    status: 'completed',
    dueDate: '2024-01-30',
    progress: 100
  },
  {
    id: 3,
    title: 'IoT Environmental Monitor',
    team: 'Team Gamma',
    status: 'pending',
    dueDate: '2024-02-28',
    progress: 30
  }
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, Alex! 👋</h1>
            <p className="text-blue-100">You have 3 active projects and 2 pending research papers.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-2xl font-bold">2,450</p>
                <p className="text-sm text-blue-100">Points</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-blue-100">Badges</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Projects"
          value="15"
          change="+12%"
          icon={<TrendingUp className="h-6 w-6" />}
          color="bg-blue-500"
        />
        <StatsCard
          title="Team Members"
          value="48"
          change="+5%"
          icon={<Users className="h-6 w-6" />}
          color="bg-green-500"
        />
        <StatsCard
          title="Research Papers"
          value="23"
          change="+18%"
          icon={<BookOpen className="h-6 w-6" />}
          color="bg-purple-500"
        />
        <StatsCard
          title="Achievements"
          value="12"
          change="+2"
          icon={<Award className="h-6 w-6" />}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Activity Overview</h3>
            <Activity className="h-5 w-5 text-gray-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="projects" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="papers" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Status Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Project Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-4 mt-4">
            {statusData.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Projects & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Projects</h3>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{project.title}</h4>
                  <StatusBadge status={project.status} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.team}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Due {project.dueDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{project.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <QuickActionButton 
              icon={<Plus className="h-5 w-5" />}
              text="New Project"
              color="bg-primary-600 hover:bg-primary-700"
            />
            <QuickActionButton 
              icon={<BookOpen className="h-5 w-5" />}
              text="Submit Paper"
              color="bg-secondary-600 hover:bg-secondary-700"
            />
            <QuickActionButton 
              icon={<Users className="h-5 w-5" />}
              text="Find Team"
              color="bg-accent-600 hover:bg-accent-700"
            />
            <QuickActionButton 
              icon={<Award className="h-5 w-5" />}
              text="View Badges"
              color="bg-orange-600 hover:bg-orange-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard: React.FC<{
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}> = ({ title, value, change, icon, color }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        <p className="text-sm text-green-600 mt-1">{change} from last month</p>
      </div>
      <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
        <div className={`${color.replace('bg-', 'text-')} ${color.replace('bg-', 'text-').replace('500', '600')}`}>
          {icon}
        </div>
      </div>
    </div>
  </div>
);

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const styles = {
    'completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
  };

  const icons = {
    'completed': <CheckCircle className="h-3 w-3" />,
    'in-progress': <Clock className="h-3 w-3" />,
    'pending': <AlertCircle className="h-3 w-3" />
  };

  return (
    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
      {icons[status as keyof typeof icons]}
      <span className="capitalize">{status.replace('-', ' ')}</span>
    </span>
  );
};

const QuickActionButton: React.FC<{
  icon: React.ReactNode;
  text: string;
  color: string;
}> = ({ icon, text, color }) => (
  <button className={`w-full flex items-center space-x-3 p-3 rounded-lg ${color} text-white transition-colors`}>
    {icon}
    <span className="font-medium">{text}</span>
  </button>
);