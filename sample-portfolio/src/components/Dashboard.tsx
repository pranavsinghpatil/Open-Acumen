import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Building2, 
  Award, 
  Clock, 
  DollarSign,
  Users,
  MapPin,
  Calendar
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const projectData = [
    { month: 'Jan', projects: 2, value: 15 },
    { month: 'Feb', projects: 3, value: 25 },
    { month: 'Mar', projects: 1, value: 18 },
    { month: 'Apr', projects: 4, value: 35 },
    { month: 'May', projects: 2, value: 28 },
    { month: 'Jun', projects: 3, value: 42 },
  ];

  const skillsData = [
    { name: 'AutoCAD', value: 95, color: '#3B82F6' },
    { name: 'STAAD Pro', value: 90, color: '#10B981' },
    { name: 'Project Mgmt', value: 85, color: '#F59E0B' },
    { name: 'ETABS', value: 80, color: '#EF4444' },
  ];

  const stats = [
    {
      title: 'Total Projects',
      value: '12',
      change: '+2 this month',
      icon: Building2,
      color: 'blue',
      trend: 'up'
    },
    {
      title: 'Project Value',
      value: '₹180Cr',
      change: '+15% from last quarter',
      icon: DollarSign,
      color: 'green',
      trend: 'up'
    },
    {
      title: 'Team Members',
      value: '24',
      change: '+3 new hires',
      icon: Users,
      color: 'purple',
      trend: 'up'
    },
    {
      title: 'Certifications',
      value: '5',
      change: '2 pending',
      icon: Award,
      color: 'orange',
      trend: 'neutral'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'Completed structural analysis',
      project: 'Residential Complex Phase 2',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      id: 2,
      action: 'Updated project timeline',
      project: 'Highway Bridge Construction',
      time: '4 hours ago',
      status: 'updated'
    },
    {
      id: 3,
      action: 'Client meeting scheduled',
      project: 'Industrial Warehouse',
      time: '1 day ago',
      status: 'scheduled'
    },
    {
      id: 4,
      action: 'Design review completed',
      project: 'Water Treatment Plant',
      time: '2 days ago',
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Engineering Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back, Sagar! Here's your project overview.
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar size={16} />
            <span>{currentTime.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock size={16} />
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin size={16} />
            <span>Pune, India</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                  <Icon className={`text-${stat.color}-600`} size={24} />
                </div>
                <TrendingUp className={`text-${stat.color}-500`} size={16} />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 text-sm mt-1">{stat.title}</p>
                <p className={`text-${stat.color}-600 text-xs mt-2 font-medium`}>
                  {stat.change}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Timeline Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Skills Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skillsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {skillsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: skill.color }}
                />
                <span className="text-sm text-gray-600">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className={`w-3 h-3 rounded-full ${
                activity.status === 'completed' ? 'bg-green-500' :
                activity.status === 'updated' ? 'bg-blue-500' :
                activity.status === 'scheduled' ? 'bg-orange-500' : 'bg-gray-500'
              }`} />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.project}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;