import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench, BarChart3, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Design Software",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: "AutoCAD", level: 95 },
        { name: "STAAD Pro", level: 90 },
        { name: "ETABS", level: 85 },
        { name: "Tekla Structures", level: 80 },
        { name: "Revit", level: 75 },
        { name: "Civil 3D", level: 70 }
      ]
    },
    {
      title: "Analysis Tools",
      icon: <BarChart3 className="text-green-400" size={24} />,
      skills: [
        { name: "SAP2000", level: 88 },
        { name: "MIDAS Civil", level: 82 },
        { name: "SAFE", level: 85 },
        { name: "HEC-RAS", level: 75 },
        { name: "EPANET", level: 70 }
      ]
    },
    {
      title: "Project Management",
      icon: <Users className="text-purple-400" size={24} />,
      skills: [
        { name: "MS Project", level: 90 },
        { name: "Primavera P6", level: 85 },
        { name: "Cost Estimation", level: 88 },
        { name: "Quality Control", level: 92 },
        { name: "Risk Assessment", level: 80 }
      ]
    },
    {
      title: "Technical Skills",
      icon: <Wrench className="text-orange-400" size={24} />,
      skills: [
        { name: "Structural Design", level: 95 },
        { name: "Foundation Design", level: 90 },
        { name: "Earthquake Analysis", level: 85 },
        { name: "Construction Planning", level: 88 },
        { name: "Site Supervision", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in civil engineering software, analysis tools, 
            and project management methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-800 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AutoCAD Certified Professional", issuer: "Autodesk", year: "2023" },
              { name: "STAAD Pro Advanced", issuer: "Bentley Systems", year: "2023" },
              { name: "Project Management Professional", issuer: "PMI", year: "2024" },
              { name: "Structural Design Certification", issuer: "IStructE", year: "2024" },
              { name: "BIM Specialist", issuer: "Autodesk", year: "2024" }
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <h4 className="font-bold text-gray-100 mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-blue-400 text-sm font-medium">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;