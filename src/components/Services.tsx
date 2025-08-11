import { Code, Palette, Database, Zap, Globe, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and databases. I build scalable applications with clean architecture.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces that provide exceptional user experiences across all devices and browsers.",
      features: ["React.js Applications", "Responsive Design", "Modern UI/UX", "Cross-browser Compatibility"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backend Development",
      description: "Building robust server-side applications with secure APIs, efficient databases, and scalable architecture.",
      features: ["RESTful APIs", "Database Management", "Server Architecture", "Security Implementation"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Complete website development from concept to deployment, ensuring modern design standards and optimal performance.",
      features: ["Landing Pages", "Business Websites", "E-commerce Platforms", "Content Management"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I provide comprehensive web development services to help bring your ideas to life with modern, scalable solutions
          </p>
        </div>

        {/* Main Service Highlight */}
        <div className="mb-16">
          <Card className="portfolio-card p-8 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Zap className="w-16 h-16 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 hero-text">Full-Stack Web Development</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I build scalable full-stack applications with modern UI and robust backend architecture. 
              From concept to deployment, I handle every aspect of web development to deliver 
              exceptional digital experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "TypeScript"].map((tech, index) => (
                <span 
                  key={index}
                  className="skill-tag px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="portfolio-card p-6 group">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your next project?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary hover:text-accent transition-colors font-medium text-lg underline underline-offset-4"
          >
            Let's discuss your project →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;