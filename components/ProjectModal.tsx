import React, { useEffect } from 'react';
import { X, Layers, CheckCircle, User, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { SectionId } from '../constants';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleContactClick = () => {
    onClose();
    // Wait slightly for modal to unmount before scrolling for better performance
    setTimeout(() => {
      const element = document.getElementById(SectionId.CONTACT);
      if (element) {
        const offset = 80; // Navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-lg border shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        
        {/* Header Image */}
        <div className="relative h-48 sm:h-72 flex-shrink-0 bg-slate-900">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            
            <Button 
                variant="outline"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full bg-background/20 hover:bg-background/40 border-white/20 text-white hover:text-white"
            >
                <X size={18} />
            </Button>

            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary">
                        Case Study
                    </Badge>
                    <Badge variant="outline" className="bg-background/20 text-white border-white/20 backdrop-blur-md">
                        <User size={12} className="mr-1.5" />
                        {project.role}
                    </Badge>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-foreground mb-2 drop-shadow-sm">{project.title}</h2>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-card">
            <div className="p-6 sm:p-10 max-w-3xl mx-auto">
                
                {/* Introduction */}
                <div className="mb-10">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Project Overview</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-12">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center">
                        <Layers className="w-4 h-4 mr-2" />
                        Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <Badge key={t} variant="secondary" className="px-3 py-1 text-sm font-medium">
                                {t}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Key Implementations & Challenges</h3>
                    <div className="space-y-4">
                        {project.responsibilities.map((resp, i) => (
                            <Card key={i} className="flex gap-4 p-5 border-none bg-secondary/30">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <CheckCircle size={14} strokeWidth={3} />
                                    </div>
                                </div>
                                <p className="text-foreground leading-relaxed text-sm sm:text-base">{resp}</p>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </div>
        
        {/* Footer Actions */}
        <div className="p-4 sm:px-10 sm:py-5 border-t bg-muted/20 flex justify-end items-center gap-4">
            <Button variant="outline" onClick={onClose}>
                Close
            </Button>
            <Button onClick={handleContactClick}>
                Contact for details <ArrowRight size={16} className="ml-2" />
            </Button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;