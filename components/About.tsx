import React from 'react';
import { PROFILE, SectionId } from '../constants';
import FadeIn from './FadeIn';
import { User, Globe, Code } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wide text-primary uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Professional Summary</h3>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <FadeIn delay={100} className="h-full">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-2">
                  <Code size={24} />
                </div>
                <CardTitle>Frontend Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Proficient in building interactive features and responsive web applications using React, TypeScript, and modern CSS frameworks like Tailwind.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

           {/* Card 2 */}
           <FadeIn delay={200} className="h-full">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-2">
                  <User size={24} />
                </div>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Skilled in client communication, requirement gathering, and collaborative knowledge-sharing platforms to deliver high-quality solutions.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

           {/* Card 3 */}
           <FadeIn delay={300} className="h-full">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-2">
                  <Globe size={24} />
                </div>
                <CardTitle>Problem Solving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Flexible and quick to adapt to new environments. Experienced in solving complex technical problems while maintaining code quality.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="bg-slate-900 rounded-xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
              <p className="text-lg md:text-xl leading-relaxed opacity-90 font-light">
                "{PROFILE.summary}"
              </p>
              <div className="mt-6 flex items-center justify-center md:justify-start">
                <div className="h-px w-12 bg-primary mr-4"></div>
                <span className="font-bold text-primary-foreground">Mohan Sharma</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;