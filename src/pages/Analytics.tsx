import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';

const submissionData = [
  { month: 'Jan', projects: 12, papers: 8, submissions: 20 },
  { month: 'Feb', projects: 15, papers: 12, submissions: 27 },
  { month: 'Mar', projects: 18, papers: 15, submissions: 33 },
  { month: 'Apr', projects: 22, papers: 18, submissions: 40 },
  { month: 'May', projects: 25, papers: 22, submissions: 47 },
  { month: 'Jun', projects: 28, papers: 25, submissions: 53 },
];

const departmentData = [
  { name: 'Computer Science', projects: 45, papers: 32 },
  { name: 'Engineering', projects: 38, papers: 28 },
  { name: 'Mathematics', projects: 25, papers: 18 },
  { name: 'Physics', projects: 22, papers: 15 },
  { name: 'Biology', projects: 18, papers: 12 },
];

const statusDistribution = [
  { name: 'Completed', value: 35, color: '#10b981' },
  { name: 'In Progress', value: 45, color: '#3b82f6' },
  { name: 'Pending Review', value: 15, color: '#f59e0b' },
  { name: 'Rejected', value: 5, color: '#ef4444' },
];

const performanceData = [
  { semester: 'Fall 2023', avgGrade: 85, submissionRate: 92, completionRate: 88 },
  { semester: 'Spring 2024', avgGrade: 87, submissionRate: 95, completionRate: 91 },
  { semester: 'Summer 2024', avgGrade: 89, submissionRate: 98, completionRate: 94 },
];

export const Analytics: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('6months');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Track performance and insights across all projects and research
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center space-x-3">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Submissions"
          value="247"
          change="+18.2%"
          trend="up"
          icon={<TrendingUp className="h-6 w-6" />}
          color="bg-blue-500"
        />
        <MetricCard
          title="Active Students"
          value="1,432"
          change="+12.5%"
          trend="up"
          icon={<Users className="h-6 w-6" />}
          color="bg-green-500"
        />
        <MetricCard
          title="Published Papers"
          value="89"
          change="+24.1%"
          trend="up"
          icon={<BookOpen className="h-6 w-6" />}
          color="bg-purple-500"
        />
        <MetricCard
          title="Completion Rate"
          value="94.2%"
          change="+3.4%"
          trend="up"
          icon={<Award className="h-6 w-6" />}
          color="bg-orange-500"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submission Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Submission Trends</h3>
            <RefreshCw className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={submissionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="submissions" 
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Status Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Project Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {statusDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Department Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Department Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="projects" fill="#3b82f6" name="Projects" />
              <Bar dataKey="papers" fill="#8b5cf6" name="Papers" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Academic Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="semester" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="avgGrade" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Avg Grade"
              />
              <Line 
                type="monotone" 
                dataKey="submissionRate" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Submission Rate"
              />
              <Line 
                type="monotone" 
                dataKey="completionRate" 
                stroke="#f59e0b" 
                strokeWidth={2}
                name="Completion Rate"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Detailed Statistics</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Total Projects
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Published Papers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Completion Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Avg Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {departmentData.map((dept, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {dept.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {dept.projects}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {dept.papers}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {(Math.random() * 20 + 80).toFixed(1)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {(Math.random() * 10 + 85).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}> = ({ title, value, change, trend, icon, color }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        <div className="flex items-center mt-2">
          <TrendingUp className={`h-4 w-4 ${trend === 'up' ? 'text-green-600' : 'text-red-600'} mr-1`} />
          <span className={`text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last period</span>
        </div>
      </div>
      <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
        <div className={`${color.replace('bg-', 'text-')} ${color.replace('bg-', 'text-').replace('500', '600')}`}>
          {icon}
        </div>
      </div>
    </div>
  </div>
);