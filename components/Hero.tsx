import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE, RESUME_URL, SectionId } from '../constants';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById(SectionId.PROJECTS);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-100 blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <FadeIn delay={100}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Available for opportunities
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{PROFILE.name}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-xl md:text-2xl text-slate-600 font-medium mb-2">
                {PROFILE.role}
              </p>
              <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto md:mx-0">
                Building scalable, responsive web applications with modern technologies.
                <span className="block mt-1 font-semibold text-slate-700">{PROFILE.experience}</span>
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button
                  onClick={scrollToProjects}
                  className="group px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={RESUME_URL}
                  download="Mohan_Vishwakarma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="mt-12 flex items-center justify-center md:justify-start space-x-6 text-slate-400">
                <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${PROFILE.email}`} className="hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Mail size={24} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Visual/Image Placeholder */}
          <div className="flex-1 w-full max-w-md md:max-w-full">
            <FadeIn delay={300} direction="left">
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-200 group">
                {/* Profile Photo */}
                <img
                  src="/images/profile.jpg"
                  alt="Mohan - Frontend Developer"
                  className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="font-mono text-sm text-blue-300 mb-1">Current Focus</div>
                    <div className="text-xl font-bold">React Architecture & Performance</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;