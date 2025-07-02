import React, { useState } from 'react';
import { 
  User, 
  Edit3, 
  Award, 
  BookOpen, 
  FolderOpen, 
  Users,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Trophy,
  Target,
  TrendingUp,
  Download
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const userStats = {
  totalProjects: 15,
  completedProjects: 12,
  publishedPapers: 8,
  collaborations: 24,
  totalPoints: 2450,
  currentRank: 5,
  badges: [
    { name: 'Innovation Leader', icon: '🚀', earned: '2024-01-15' },
    { name: 'Research Excellence', icon: '📚', earned: '2024-02-01' },
    { name: 'Team Player', icon: '🤝', earned: '2024-01-20' },
    { name: 'Code Quality', icon: '💎', earned: '2024-02-10' },
    { name: 'Mentor', icon: '👨‍🏫', earned: '2024-01-25' },
    { name: 'Quick Learner', icon: '⚡', earned: '2024-02-05' },
    { name: 'Problem Solver', icon: '🔧', earned: '2024-01-30' },
    { name: 'Creative Thinker', icon: '💡', earned: '2024-02-08' },
  ]
};

const recentActivity = [
  {
    type: 'project',
    title: 'Completed AI Smart Home System',
    date: '2024-02-12',
    points: 150
  },
  {
    type: 'paper',
    title: 'Published research on Machine Learning',
    date: '2024-02-10',
    points: 200
  },
  {
    type: 'collaboration',
    title: 'Joined Team Beta for Blockchain project',
    date: '2024-02-08',
    points: 50
  },
  {
    type: 'badge',
    title: 'Earned Creative Thinker badge',
    date: '2024-02-08',
    points: 100
  }
];

export const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Manage your academic profile and achievements
          </p>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
        >
          <Edit3 className="h-5 w-5 mr-2" />
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
            <div className="text-center">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user?.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 capitalize">{user?.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{user?.department}</p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5" />
                <span className="text-sm">{user?.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">New York, NY</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Joined January 2023</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                <Github className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FolderOpen className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Projects</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{userStats.totalProjects}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Papers</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{userStats.publishedPapers}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Collaborations</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{userStats.collaborations}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Points</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{userStats.totalPoints}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Performance Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Performance Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{userStats.completedProjects}</p>
                <p className="text-sm text-blue-600">Completed</p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">94%</p>
                <p className="text-sm text-green-600">Success Rate</p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{userStats.badges.length}</p>
                <p className="text-sm text-purple-600">Badges</p>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900 rounded-lg">
                <Trophy className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-orange-600">#{userStats.currentRank}</p>
                <p className="text-sm text-orange-600">Rank</p>
              </div>
            </div>
          </div>

          {/* Badges & Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Badges & Achievements</h3>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {userStats.badges.slice(0, 8).map((badge, index) => (
                <div key={index} className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{badge.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {new Date(badge.earned).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
              <button className="inline-flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                <Download className="h-4 w-4 mr-1" />
                Export
              </button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'project' ? 'bg-blue-100 dark:bg-blue-900' :
                      activity.type === 'paper' ? 'bg-green-100 dark:bg-green-900' :
                      activity.type === 'collaboration' ? 'bg-purple-100 dark:bg-purple-900' :
                      'bg-yellow-100 dark:bg-yellow-900'
                    }`}>
                      {activity.type === 'project' && <FolderOpen className="h-4 w-4 text-blue-600" />}
                      {activity.type === 'paper' && <BookOpen className="h-4 w-4 text-green-600" />}
                      {activity.type === 'collaboration' && <Users className="h-4 w-4 text-purple-600" />}
                      {activity.type === 'badge' && <Award className="h-4 w-4 text-yellow-600" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-green-600">+{activity.points} pts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};