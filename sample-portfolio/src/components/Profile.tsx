import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Building2,
  GraduationCap,
  Edit3,
  Save,
  X,
  Camera,
  Linkedin,
  Github,
  Download
} from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Sagar More',
    title: 'Civil Engineering Professional',
    email: 'sagar.more@email.com',
    phone: '+91 98765 43210',
    location: 'Pune, Maharashtra, India',
    bio: 'Passionate civil engineer with expertise in structural design and project management, committed to building sustainable infrastructure for the future.',
    experience: '3+ Years',
    projects: '12 Completed',
    education: 'B.Tech Civil Engineering, JSPM Imperial College',
    specialization: 'Structural Design & Project Management'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  const handleDownloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/sagar-more-cv.pdf';
    link.download = 'Sagar-More-CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const achievements = [
    {
      title: 'Project Excellence Award',
      organization: 'JSPM Imperial College',
      year: '2024',
      description: 'Outstanding performance in structural design project'
    },
    {
      title: 'AutoCAD Certified Professional',
      organization: 'Autodesk',
      year: '2023',
      description: 'Advanced certification in 2D drafting and 3D modeling'
    },
    {
      title: 'Team Leadership Recognition',
      organization: 'Current Organization',
      year: '2024',
      description: 'Led successful completion of ₹45Cr highway bridge project'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Civil Engineer',
      company: 'Infrastructure Solutions Ltd.',
      description: 'Leading major infrastructure projects worth ₹180+ Crores'
    },
    {
      year: '2023',
      title: 'Civil Engineer',
      company: 'Construction Dynamics Pvt. Ltd.',
      description: 'Structural design and project coordination for residential complexes'
    },
    {
      year: '2022',
      title: 'Junior Engineer',
      company: 'BuildTech Engineering',
      description: 'Site supervision and quality control for commercial projects'
    },
    {
      year: '2021',
      title: 'Graduate',
      company: 'JSPM Imperial College, Pune',
      description: 'B.Tech in Civil Engineering with distinction'
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
          <h1 className="text-3xl font-bold text-gray-900">Professional Profile</h1>
          <p className="text-gray-600 mt-1">Manage your professional information and achievements</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsEditing(!isEditing)}
          className="mt-4 lg:mt-0 inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          {isEditing ? <X size={20} /> : <Edit3 size={20} />}
          <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
        </motion.button>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
      >
        {/* Cover Photo */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-700 relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          {isEditing && (
            <button className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <Camera className="text-white" size={20} />
            </button>
          )}
        </div>

        <div className="px-8 pb-8">
          {/* Profile Picture */}
          <div className="relative -mt-16 mb-6">
            <div className="w-32 h-32 bg-white rounded-full p-2 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">SM</span>
              </div>
            </div>
            {isEditing && (
              <button className="absolute bottom-2 right-2 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                <Camera className="text-white" size={16} />
              </button>
            )}
          </div>

          {/* Profile Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="text-3xl font-bold text-gray-900 bg-transparent border-b-2 border-blue-600 focus:outline-none w-full"
                    />
                    <input
                      type="text"
                      value={profileData.title}
                      onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                      className="text-xl text-blue-600 bg-transparent border-b border-gray-300 focus:outline-none w-full"
                    />
                  </div>
                ) : (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h2>
                    <p className="text-xl text-blue-600 mb-4">{profileData.title}</p>
                  </div>
                )}

                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-400" size={20} />
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <span className="text-gray-700">{profileData.email}</span>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-gray-400" size={20} />
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <span className="text-gray-700">{profileData.phone}</span>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-gray-400" size={20} />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <span className="text-gray-700">{profileData.location}</span>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/sagarmore"
                  className="p-3 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors"
                >
                  <Linkedin className="text-blue-600" size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/sagarmore"
                  className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Github className="text-gray-600" size={20} />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDownloadCV}
                  className="p-3 bg-green-100 rounded-xl hover:bg-green-200 transition-colors"
                >
                  <Download className="text-green-600" size={20} />
                </motion.button>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{profileData.experience}</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{profileData.projects}</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">₹180Cr+</div>
                  <div className="text-sm text-gray-600">Project Value</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">5</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <GraduationCap className="text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                </div>
                <p className="text-gray-700 font-medium">{profileData.education}</p>
                <p className="text-gray-600 text-sm mt-1">{profileData.specialization}</p>
              </div>
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex justify-end"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
              >
                <Save size={20} />
                <span>Save Changes</span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements & Certifications</h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <Award className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                <p className="text-blue-600 text-sm font-medium">{achievement.organization}</p>
                <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
              </div>
              <span className="text-gray-500 text-sm">{achievement.year}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Career Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Timeline</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white text-xs font-bold">{item.year.slice(-2)}</span>
                </div>
                <div className="flex-1 pb-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-blue-600 text-sm font-medium">{item.company}</p>
                    <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;