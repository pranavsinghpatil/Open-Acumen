import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Target, Building2, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <GraduationCap className="text-blue-400" size={24} />,
      title: "Education Excellence",
      description: "B.Tech in Civil Engineering from JSPM Imperial College, Pune with distinction"
    },
    {
      icon: <Award className="text-purple-400" size={24} />,
      title: "Professional Certifications",
      description: "AutoCAD Certified Professional, STAAD Pro Advanced, Project Management"
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Team Leadership",
      description: "Led cross-functional teams of 15+ engineers on major infrastructure projects"
    },
    {
      icon: <Target className="text-orange-400" size={24} />,
      title: "Project Success",
      description: "Successfully delivered ₹180+ Crores worth of civil engineering projects"
    }
  ];

  const competencies = [
    "Structural Analysis & Design",
    "Project Planning & Management",
    "Quality Assurance & Control",
    "Site Supervision & Safety",
    "Cost Estimation & Budgeting",
    "AutoCAD & 3D Modeling",
    "Building Information Modeling (BIM)",
    "Earthquake Resistant Design"
  ];

  const stats = [
    { label: "Years Experience", value: "3+", icon: Calendar },
    { label: "Projects Completed", value: "12", icon: Building2 },
    { label: "Team Members Led", value: "24", icon: Users },
    { label: "Certifications", value: "5", icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate civil engineer with expertise in structural design and project management, 
            committed to building sustainable infrastructure for the future.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-lg bg-blue-500/10 mb-4">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-100 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Professional Summary</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As a dedicated Civil Engineering graduate from JSPM Imperial College, Pune, I bring 
                a strong foundation in structural engineering principles combined with hands-on 
                experience in project execution and team management.
              </p>
              <p>
                My expertise spans across residential, commercial, and infrastructure projects, 
                with a particular focus on sustainable design practices and innovative construction 
                methodologies. I have successfully contributed to projects worth over ₹180 Crores, 
                ensuring timely delivery while maintaining the highest quality standards.
              </p>
              <p>
                I am passionate about leveraging cutting-edge technology and sustainable practices 
                to create infrastructure that not only meets today's needs but also contributes 
                to a better tomorrow.
              </p>
            </div>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Core Competencies</h3>
            <div className="grid grid-cols-1 gap-3">
              {competencies.map((competency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <span className="text-gray-200 font-medium">{competency}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-4">
                {achievement.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">Educational Background</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start">
                <GraduationCap className="text-blue-400 mt-1 mr-4" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-100 mb-2">
                    Bachelor of Technology in Civil Engineering
                  </h4>
                  <p className="text-lg text-blue-400 font-medium mb-2">
                    JSPM Imperial College, Pune
                  </p>
                  <p className="text-gray-300 mb-3">
                    Graduated with distinction, specializing in structural engineering and 
                    construction management. Completed advanced coursework in earthquake 
                    engineering, sustainable construction practices, and project management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      Structural Engineering
                    </span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      Construction Management
                    </span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      Project Planning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;