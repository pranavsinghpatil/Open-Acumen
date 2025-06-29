import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  Download,
  Upload,
  Trash2,
  Eye,
  EyeOff,
  Save,
  RefreshCw
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    projectUpdates: true,
    teamMessages: false,
    systemAlerts: true
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: true,
    allowMessages: true
  });
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'data', label: 'Data & Export', icon: Download }
  ];

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handlePrivacyChange = (key: string, value: any) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="Sagar More"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="sagar.more@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="+91 98765 43210"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              defaultValue="Pune, Maharashtra, India"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Language & Region</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Asia/Kolkata (IST)</option>
              <option>UTC</option>
              <option>America/New_York</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <h4 className="font-medium text-gray-900 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <p className="text-sm text-gray-600">
                  {key === 'email' && 'Receive notifications via email'}
                  {key === 'push' && 'Browser push notifications'}
                  {key === 'sms' && 'SMS notifications for urgent updates'}
                  {key === 'projectUpdates' && 'Updates about your projects'}
                  {key === 'teamMessages' && 'Messages from team members'}
                  {key === 'systemAlerts' && 'System maintenance and alerts'}
                </p>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNotificationChange(key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <motion.span
                  animate={{ x: value ? 20 : 4 }}
                  className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                />
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Controls</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <h4 className="font-medium text-gray-900 mb-2">Profile Visibility</h4>
            <div className="space-y-2">
              {['public', 'private', 'contacts'].map((option) => (
                <label key={option} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="profileVisibility"
                    value={option}
                    checked={privacy.profileVisibility === option}
                    onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 capitalize">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl">
            <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Show Email Address</span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePrivacyChange('showEmail', !privacy.showEmail)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    privacy.showEmail ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <motion.span
                    animate={{ x: privacy.showEmail ? 20 : 4 }}
                    className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                  />
                </motion.button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Show Phone Number</span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePrivacyChange('showPhone', !privacy.showPhone)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    privacy.showPhone ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <motion.span
                    animate={{ x: privacy.showPhone ? 20 : 4 }}
                    className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Theme Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['light', 'dark', 'auto'].map((themeOption) => (
            <motion.button
              key={themeOption}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setTheme(themeOption)}
              className={`p-6 rounded-xl border-2 transition-all ${
                theme === themeOption
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className={`w-12 h-8 rounded mb-3 mx-auto ${
                themeOption === 'light' ? 'bg-white border border-gray-300' :
                themeOption === 'dark' ? 'bg-gray-800' :
                'bg-gradient-to-r from-white to-gray-800'
              }`} />
              <span className="font-medium text-gray-900 capitalize">{themeOption}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Display Options</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <h4 className="font-medium text-gray-900">Compact Mode</h4>
              <p className="text-sm text-gray-600">Reduce spacing and padding</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors"
            >
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
            </motion.button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <h4 className="font-medium text-gray-900">High Contrast</h4>
              <p className="text-sm text-gray-600">Improve accessibility</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors"
            >
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            <Download className="text-blue-600 mb-3" size={24} />
            <h4 className="font-semibold text-gray-900 mb-2">Export Data</h4>
            <p className="text-sm text-gray-600">Download all your portfolio data</p>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors"
          >
            <Upload className="text-green-600 mb-3" size={24} />
            <h4 className="font-semibold text-gray-900 mb-2">Import Data</h4>
            <p className="text-sm text-gray-600">Import projects and skills data</p>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-orange-50 rounded-xl border border-orange-200 hover:bg-orange-100 transition-colors"
          >
            <RefreshCw className="text-orange-600 mb-3" size={24} />
            <h4 className="font-semibold text-gray-900 mb-2">Sync Data</h4>
            <p className="text-sm text-gray-600">Synchronize with external services</p>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-red-50 rounded-xl border border-red-200 hover:bg-red-100 transition-colors"
          >
            <Trash2 className="text-red-600 mb-3" size={24} />
            <h4 className="font-semibold text-gray-900 mb-2">Delete Account</h4>
            <p className="text-sm text-gray-600">Permanently delete your account</p>
          </motion.button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Storage Usage</h3>
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700">Used Storage</span>
            <span className="font-semibold text-gray-900">2.4 GB / 5 GB</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '48%' }} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Projects</span>
              <div className="font-medium text-gray-900">1.8 GB</div>
            </div>
            <div>
              <span className="text-gray-600">Images</span>
              <div className="font-medium text-gray-900">0.5 GB</div>
            </div>
            <div>
              <span className="text-gray-600">Documents</span>
              <div className="font-medium text-gray-900">0.1 GB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account preferences and privacy settings</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 lg:mt-0 inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          <Save size={20} />
          <span>Save Changes</span>
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{tab.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            {activeTab === 'general' && renderGeneralSettings()}
            {activeTab === 'notifications' && renderNotificationSettings()}
            {activeTab === 'privacy' && renderPrivacySettings()}
            {activeTab === 'appearance' && renderAppearanceSettings()}
            {activeTab === 'data' && renderDataSettings()}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;