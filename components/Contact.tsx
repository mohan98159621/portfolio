import React from 'react';
import { SectionId, PROFILE } from '../constants';
import FadeIn from './FadeIn';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right">
            <div>
              <h2 className="text-sm font-bold tracking-wide text-primary uppercase mb-2">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's build something amazing together.</h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                I'm currently available for freelance work or full-time opportunities. 
                If you have a project that needs a skilled React developer, feel free to reach out.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg mr-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-white transition-colors">
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <a href={`tel:${PROFILE.phone}`} className="text-slate-400 hover:text-white transition-colors">
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-slate-400">{PROFILE.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <Card className="border-none shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <Input 
                      id="name" 
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;