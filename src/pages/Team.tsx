import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Filter,
  MessageSquare,
  Video,
  Phone,
  Mail,
  Star,
  MapPin,
  Calendar,
  Award,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Project Lead',
    department: 'Computer Science',
    email: 'sarah.johnson@university.edu',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['React', 'Node.js', 'Machine Learning', 'Python'],
    projects: 8,
    rating: 4.9,
    isOnline: true,
    lastActive: 'now',
    bio: 'Passionate about AI and web development. Leading multiple research projects in machine learning applications.',
    achievements: ['Best Project Award 2023', 'Research Excellence', 'Team Leadership']
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Full Stack Developer',
    department: 'Computer Science',
    email: 'mike.chen@university.edu',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
    projects: 6,
    rating: 4.7,
    isOnline: false,
    lastActive: '2 hours ago',
    bio: 'Backend specialist with expertise in scalable web applications and database optimization.',
    achievements: ['Code Quality Champion', 'Innovation Award', 'Mentor of the Year']
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Research Assistant',
    department: 'Data Science',
    email: 'emily.davis@university.edu',
    avatar: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Data Analysis', 'R', 'Statistics', 'Tableau'],
    projects: 4,
    rating: 4.8,
    isOnline: true,
    lastActive: 'now',
    bio: 'Data science enthusiast focused on statistical analysis and data visualization for research projects.',
    achievements: ['Research Publication', 'Data Visualization Expert', 'Academic Excellence']
  },
  {
    id: 4,
    name: 'David Brown',
    role: 'UI/UX Designer',
    department: 'Design',
    email: 'david.brown@university.edu',
    avatar: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    projects: 5,
    rating: 4.6,
    isOnline: false,
    lastActive: '1 day ago',
    bio: 'Creative designer passionate about user experience and interface design for academic platforms.',
    achievements: ['Design Excellence', 'User Experience Award', 'Creative Innovation']
  }
];

const availableSkills = [
  'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Django', 'Machine Learning',
  'Data Analysis', 'UI/UX Design', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
  'Figma', 'Adobe XD', 'Statistics', 'R', 'Tableau', 'Git', 'Agile'
];

export const Team: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('my-team');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('all');

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = selectedSkill === 'all' || member.skills.some(skill => 
      skill.toLowerCase().includes(selectedSkill.toLowerCase())
    );
    return matchesSearch && matchesSkill;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Team Collaboration</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Connect with team members and find collaborators
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors">
            <Search className="h-5 w-5 mr-2" />
            Find Members
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            Invite Member
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'my-team', label: 'My Team', count: teamMembers.length },
              { id: 'discover', label: 'Discover', count: null },
              { id: 'invitations', label: 'Invitations', count: 3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  selectedTab === tab.id
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Filters */}
        {selectedTab === 'my-team' && (
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search team members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="all">All Skills</option>
                  {availableSkills.map(skill => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {selectedTab === 'my-team' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
          
          {selectedTab === 'discover' && (
            <div className="text-center py-12">
              <Search className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Discover new collaborators</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Find students and researchers with complementary skills
              </p>
            </div>
          )}

          {selectedTab === 'invitations' && (
            <div className="text-center py-12">
              <Mail className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Team invitations</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage incoming and outgoing collaboration requests
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard: React.FC<{ member: any }> = ({ member }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 ${
              member.isOnline ? 'bg-green-500' : 'bg-gray-400'
            }`}></div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm text-gray-600 dark:text-gray-400">{member.rating}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {member.bio}
        </p>
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{member.department}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{member.projects} projects</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {member.isOnline ? 'Online now' : `Last active ${member.lastActive}`}
        </p>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {member.skills.slice(0, 3).map((skill: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-md">
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
              +{member.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Recent Achievements</h4>
        <div className="space-y-1">
          {member.achievements.slice(0, 2).map((achievement: string, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <Award className="h-3 w-3 text-yellow-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">{achievement}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <MessageSquare className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
            <Video className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Mail className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <Github className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Linkedin className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};