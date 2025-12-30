import React, { useState } from 'react';
import { PROJECTS, SectionId } from '../constants';
import { Project } from '../types';
import FadeIn from './FadeIn';
import { Layers, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wide text-primary uppercase mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Featured Domains</h3>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A collection of platforms and tools I've developed, focusing on performance, scalability, and user experience across different industries.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <div key={project.title} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
              
              {/* Project Visual */}
              <div className="w-full lg:w-1/2">
                <FadeIn direction={index % 2 === 1 ? 'right' : 'left'}>
                  <div 
                    className="group relative rounded-xl overflow-hidden shadow-xl border border-border bg-card aspect-video cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    
                    {/* Hover Overlay with "View" text */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Badge variant="secondary" className="px-6 py-2 text-sm backdrop-blur-md bg-white/90">
                            Read Case Study
                        </Badge>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                <FadeIn direction={index % 2 === 1 ? 'left' : 'right'} delay={200}>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      {project.role}
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide flex items-center">
                      <Layers size={16} className="mr-2" /> Key Tech
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map(t => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                      {project.tech.length > 5 && (
                        <Badge variant="outline">
                          +{project.tech.length - 5}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Highlights</h5>
                    <ul className="space-y-2 mb-6">
                      {project.responsibilities.slice(0, 2).map((resp, i) => (
                        <li key={i} className="flex items-start text-muted-foreground text-sm md:text-base">
                          <span className="mr-3 text-primary font-bold mt-1">•</span>
                          <span className="line-clamp-2">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => setSelectedProject(project)}
                    variant="link"
                    className="p-0 text-lg font-bold group"
                  >
                    View Case Study 
                    <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;