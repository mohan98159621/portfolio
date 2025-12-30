import React from 'react';
import { SKILLS, SectionId } from '../constants';
import FadeIn from './FadeIn';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wide text-primary uppercase mb-2">My Toolkit</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h3>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <FadeIn key={skillGroup.category} delay={index * 150} direction="up" className="h-full">
              <Card className="h-full hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-4 border-b">
                  <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;