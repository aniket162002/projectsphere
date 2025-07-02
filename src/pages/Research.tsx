import React, { useState } from 'react';
import { 
  BookOpen, 
  Plus, 
  Search, 
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  ExternalLink,
  Download,
  Star,
  MessageSquare,
  Brain,
  FileText,
  Lightbulb
} from 'lucide-react';

const papers = [
  {
    id: 1,
    title: 'Machine Learning Applications in Smart City Infrastructure',
    abstract: 'This paper explores the integration of machine learning algorithms in smart city systems, focusing on traffic optimization, energy management, and citizen services enhancement.',
    authors: ['Alex Thompson', 'Dr. Sarah Wilson'],
    status: 'under-review',
    stage: 'peer-review',
    progress: 75,
    submittedDate: '2024-01-15',
    dueDate: '2024-03-01',
    journal: 'IEEE Smart Cities',
    citations: 12,
    keywords: ['Machine Learning', 'Smart Cities', 'IoT', 'Optimization'],
    aiScore: 92
  },
  {
    id: 2,
    title: 'Blockchain-Based Identity Management for Educational Institutions',
    abstract: 'A comprehensive study on implementing blockchain technology for secure student identity management and credential verification systems.',
    authors: ['Emily Davis', 'Prof. Michael Chen'],
    status: 'published',
    stage: 'published',
    progress: 100,
    submittedDate: '2023-11-20',
    dueDate: '2024-01-30',
    journal: 'Journal of Educational Technology',
    citations: 28,
    keywords: ['Blockchain', 'Identity Management', 'Education', 'Security'],
    aiScore: 88
  },
  {
    id: 3,
    title: 'Sustainable Energy Solutions Using IoT and Data Analytics',
    abstract: 'This research investigates how IoT sensors and advanced data analytics can optimize renewable energy consumption in residential buildings.',
    authors: ['Lisa Wang', 'Dr. Robert Kim'],
    status: 'draft',
    stage: 'writing',
    progress: 45,
    submittedDate: null,
    dueDate: '2024-04-15',
    journal: 'Renewable Energy Journal',
    citations: 0,
    keywords: ['IoT', 'Data Analytics', 'Renewable Energy', 'Sustainability'],
    aiScore: 85
  }
];

const aiSuggestions = [
  {
    type: 'related-papers',
    title: 'Related Papers Found',
    count: 15,
    icon: <BookOpen className="h-5 w-5" />,
    color: 'text-blue-600'
  },
  {
    type: 'collaboration',
    title: 'Potential Collaborators',
    count: 8,
    icon: <Users className="h-5 w-5" />,
    color: 'text-green-600'
  },
  {
    type: 'insights',
    title: 'Research Insights',
    count: 23,
    icon: <Lightbulb className="h-5 w-5" />,
    color: 'text-yellow-600'
  }
];

export const Research: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('my-papers');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || paper.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Research Hub</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Manage your research papers and discover new opportunities
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors">
            <Brain className="h-5 w-5 mr-2" />
            AI Assistant
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            New Paper
          </button>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiSuggestions.map((suggestion) => (
          <div key={suggestion.type} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700 ${suggestion.color}`}>
                {suggestion.icon}
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{suggestion.count}</span>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">{suggestion.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">AI-powered recommendations</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'my-papers', label: 'My Papers', count: papers.length },
              { id: 'collaborations', label: 'Collaborations', count: 5 },
              { id: 'discover', label: 'Discover', count: null }
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
        {selectedTab === 'my-papers' && (
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search papers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="all">All Status</option>
                  <option value="draft">Draft</option>
                  <option value="under-review">Under Review</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {selectedTab === 'my-papers' && (
            <div className="space-y-6">
              {filteredPapers.map((paper) => (
                <ResearchPaperCard key={paper.id} paper={paper} />
              ))}
              {filteredPapers.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No papers found</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          )}
          
          {selectedTab === 'collaborations' && (
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Collaboration opportunities</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Find researchers with similar interests and start collaborating
              </p>
            </div>
          )}

          {selectedTab === 'discover' && (
            <div className="text-center py-12">
              <Search className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Discover new research</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Explore trending papers and research topics in your field
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ResearchPaperCard: React.FC<{ paper: any }> = ({ paper }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'under-review': return <Clock className="h-5 w-5 text-blue-600" />;
      case 'draft': return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      default: return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'under-review': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{paper.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(paper.status)}`}>
              {paper.status.replace('-', ' ')}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
            {paper.abstract}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Authors: {paper.authors.join(', ')}</span>
            <span>•</span>
            <span>Journal: {paper.journal}</span>
            {paper.citations > 0 && (
              <>
                <span>•</span>
                <span>{paper.citations} citations</span>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <Star className="h-5 w-5" />
          </button>
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-1">
              <Brain className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">AI Score: {paper.aiScore}</span>
            </div>
            <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: `${paper.aiScore}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {paper.keywords.map((keyword: string, index: number) => (
          <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
            {keyword}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {getStatusIcon(paper.status)}
            <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
              {paper.stage.replace('-', ' ')}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${paper.progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{paper.progress}%</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center px-3 py-1.5 text-sm text-primary-600 hover:text-primary-700 transition-colors">
            <MessageSquare className="h-4 w-4 mr-1" />
            AI Review
          </button>
          <button className="inline-flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
            <Download className="h-4 w-4 mr-1" />
            Export
          </button>
          <button className="inline-flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
            <ExternalLink className="h-4 w-4 mr-1" />
            View
          </button>
        </div>
      </div>
    </div>
  );
};