import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Tech Computer Science Engineering",
      organization: "Sanjeev Agrawal Global Education University (SAGE)",
      location: "Bhopal",
      period: "2022 - 2026",
      status: " 4th Year",
      type: "education"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Web Developer Intern",
      organization: "Naman Digital",
      location: "Remote",
      period: "2025 - Present",
      status: "Current Position",
      type: "work"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-4 hero-text">My Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I like building websites and turning ideas into clean, functional code. 
                I'm currently pursuing my B.Tech in Computer Science Engineering at SAGE University, 
                Bhopal, where I'm in my 7th semester.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently working as a Web Developer Intern at Naman Digital, I focus on creating 
                modern, responsive web applications using the latest technologies. My passion lies 
                in full-stack development, where I can bring both creative designs and robust 
                backend systems to life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and staying updated with the ever-evolving world of web development.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 hero-text">Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="portfolio-card relative">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${
                        item.type === 'education' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-primary font-medium mb-2">{item.organization}</p>
                        <p className="text-muted-foreground text-sm mb-2">{item.location}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status.includes('Current') 
                              ? 'bg-accent/20 text-accent' 
                              : 'bg-muted/50 text-muted-foreground'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;