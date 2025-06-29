import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Award, 
  BarChart3, 
  User, 
  Settings,
  Building2,
  Mail,
  Phone
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: any) => void;
  onMobileClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, onMobileClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleItemClick = (id: string) => {
    setActiveView(id);
    onMobileClose();
  };

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-80 h-screen bg-white shadow-2xl flex flex-col"
    >
      {/* Profile Header */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Building2 size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold">Sagar More</h2>
            <p className="text-blue-100">Civil Engineer</p>
            <p className="text-blue-200 text-sm">JSPM Imperial College</p>
          </div>
        </div>
        
        <div className="mt-4 flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full text-sm"
          >
            <Mail size={14} />
            <span>Contact</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full text-sm"
          >
            <Phone size={14} />
            <span>Call</span>
          </motion.button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t">
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Projects</span>
              <span className="font-semibold text-blue-600">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Experience</span>
              <span className="font-semibold text-green-600">3+ Years</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Certifications</span>
              <span className="font-semibold text-purple-600">5</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;