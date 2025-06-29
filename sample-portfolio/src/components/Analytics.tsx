import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Clock,
  Target,
  Users,
  Award,
  Building2
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('6months');

  const performanceData = [
    { month: 'Jan', projects: 2, revenue: 15, efficiency: 85 },
    { month: 'Feb', projects: 3, revenue: 25, efficiency: 88 },
    { month: 'Mar', projects: 1, revenue: 18, efficiency: 82 },
    { month: 'Apr', projects: 4, revenue: 35, efficiency: 92 },
    { month: 'May', projects: 2, revenue: 28, efficiency: 89 },
    { month: 'Jun', projects: 3, revenue: 42, efficiency: 95 },
  ];

  const projectTypeData = [
    { name: 'Residential', value: 35, color: '#3B82F6' },
    { name: 'Infrastructure', value: 30, color: '#10B981' },
    { name: 'Commercial', value: 20, color: '#F59E0B' },
    { name: 'Industrial', value: 15, color: '#EF4444' },
  ];

  const skillGrowthData = [
    { skill: 'AutoCAD', current: 95, target: 98 },
    { skill: 'STAAD Pro', current: 90, target: 95 },
    { skill: 'Project Mgmt', current: 85, target: 92 },
    { skill: 'ETABS', current: 80, target: 88 },
    { skill: 'Leadership', current: 88, target: 95 },
  ];

  const clientSatisfactionData = [
    { month: 'Jan', satisfaction: 92 },
    { month: 'Feb', satisfaction: 94 },
    { month: 'Mar', satisfaction: 89 },
    { month: 'Apr', satisfaction: 96 },
    { month: 'May', satisfaction: 93 },
    { month: 'Jun', satisfaction: 98 },
  ];

  const kpiCards = [
    {
      title: 'Project Success Rate',
      value: '96%',
      change: '+4%',
      trend: 'up',
      icon: Target,
      color: 'green'
    },
    {
      title: 'Average Project Value',
      value: '₹32Cr',
      change: '+12%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Team Efficiency',
      value: '92%',
      change: '+8%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Client Retention',
      value: '89%',
      change: '+5%',
      trend: 'up',
      icon: Award,
      color: 'orange'
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
          <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
          <p className="text-gray-600 mt-1">Track your professional growth and project metrics</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${kpi.color}-100`}>
                  <Icon className={`text-${kpi.color}-600`} size={24} />
                </div>
                <span className={`text-${kpi.color}-600 text-sm font-medium`}>
                  {kpi.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
              <p className="text-gray-600 text-sm">{kpi.title}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceData}>
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
              <Area 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#3B82F6" 
                fill="#3B82F6"
                fillOpacity={0.1}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Project Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {projectTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {projectTypeData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600">{item.name}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skill Development */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Skill Development Progress</h3>
        <div className="space-y-6">
          {skillGrowthData.map((skill, index) => (
            <motion.div
              key={skill.skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="relative"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900">{skill.skill}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Current: {skill.current}%</span>
                  <span className="text-sm text-blue-600 font-medium">Target: {skill.target}%</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.current}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="bg-blue-600 h-3 rounded-full relative"
                  />
                </div>
                <div 
                  className="absolute top-0 h-3 w-1 bg-green-500 rounded-full"
                  style={{ left: `${skill.target}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Client Satisfaction Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Satisfaction Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={clientSatisfactionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis domain={[80, 100]} stroke="#6b7280" />
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
              dataKey="satisfaction" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Goals & Targets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">2024 Goals & Targets</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { goal: 'Complete 15 Projects', current: 12, target: 15, unit: 'projects' },
            { goal: 'Achieve ₹200Cr Revenue', current: 180, target: 200, unit: 'crores' },
            { goal: 'Team Growth', current: 24, target: 30, unit: 'members' }
          ].map((goal, index) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <motion.div
                key={goal.goal}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#3B82F6"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - progress / 100) }}
                      transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">{Math.round(progress)}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{goal.goal}</h4>
                <p className="text-sm text-gray-600">
                  {goal.current} / {goal.target} {goal.unit}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;