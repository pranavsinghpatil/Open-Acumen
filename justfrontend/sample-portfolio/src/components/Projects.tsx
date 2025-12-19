import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, DollarSign, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'Residential', 'Infrastructure', 'Industrial', 'Commercial'];

  const projects = [
    {
      id: 1,
      title: "Multi-Story Residential Complex",
      category: "Residential",
      description: "Design and supervision of a 15-story residential building with modern amenities and earthquake-resistant features.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AutoCAD", "STAAD Pro", "ETABS", "MS Project"],
      duration: "18 months",
      budget: "₹25 Crores",
      location: "Pune, Maharashtra",
      completion: "March 2024",
      details: "Led the structural design analysis for a 15-story residential complex housing 120 apartments. Implemented advanced earthquake-resistant design principles and supervised construction activities."
    },
    {
      id: 2,
      title: "Highway Bridge Construction",
      category: "Infrastructure",
      description: "Structural analysis and design of a 4-lane highway bridge spanning 180 meters with pre-stressed concrete technology.",
      image: "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["MIDAS Civil", "AutoCAD", "STAAD Pro", "Primavera P6"],
      duration: "24 months",
      budget: "₹45 Crores",
      location: "Mumbai-Pune Expressway",
      completion: "August 2023",
      details: "Comprehensive structural design and analysis of a major highway bridge using pre-stressed concrete technology. Conducted load analysis and foundation design."
    },
    {
      id: 3,
      title: "Industrial Warehouse Facility",
      category: "Industrial",
      description: "Design of large-span steel structure warehouse with advanced fire safety and material handling systems.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Tekla Structures", "STAAD Pro", "AutoCAD", "SAP2000"],
      duration: "12 months",
      budget: "₹18 Crores",
      location: "MIDC Aurangabad",
      completion: "December 2023",
      details: "Designed a large-span industrial warehouse using steel frame construction. Optimized structural members for cost efficiency while maintaining safety standards."
    },
    {
      id: 4,
      title: "Water Treatment Plant",
      category: "Infrastructure",
      description: "Civil works design for 50 MLD water treatment plant including pumping stations and distribution network.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AutoCAD", "EPANET", "HEC-RAS", "Civil 3D"],
      duration: "15 months",
      budget: "₹35 Crores",
      location: "Nashik, Maharashtra",
      completion: "June 2024",
      details: "Comprehensive civil engineering design for a 50 MLD capacity water treatment plant. Designed concrete structures for treatment units and pumping stations."
    },
    {
      id: 5,
      title: "Commercial Office Complex",
      category: "Commercial",
      description: "Green building certified office complex with sustainable design features and modern amenities.",
      image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Revit", "ETABS", "AutoCAD", "Green Building Studio"],
      duration: "20 months",
      budget: "₹60 Crores",
      location: "Baner, Pune",
      completion: "September 2024",
      details: "Coordinated the design and construction of a LEED Gold certified office complex. Implemented sustainable design features including rainwater harvesting and solar panels."
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of civil engineering projects spanning residential, 
            commercial, and infrastructure developments.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-gray-100 shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign size={14} className="mr-2" />
                      <span>{project.budget}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin size={14} className="mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={14} className="mr-2" />
                      <span>{project.completion}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 bg-gray-700 hover:bg-blue-600 text-gray-200 py-3 rounded-lg transition-all duration-300"
                  >
                    <Eye size={16} />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-gray-900/80 text-gray-100 p-2 rounded-full hover:bg-gray-900 transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedProject.details}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-2">Project Details</h4>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div>Budget: {selectedProject.budget}</div>
                        <div>Duration: {selectedProject.duration}</div>
                        <div>Location: {selectedProject.location}</div>
                        <div>Completed: {selectedProject.completion}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;