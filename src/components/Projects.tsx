import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import portfolioImg from '@/assets/portfolio-project.jpg';
import cookingImg from '@/assets/cooking-project.jpg';
import ecommerceImg from '@/assets/ecommerce-project.jpg';
import weatherImg from '@/assets/weather-project.jpg';
import blogImg from '@/assets/blog-project.jpg';
import adminImg from '@/assets/admin-project.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my work and skills. Built with React.js and Tailwind CSS featuring dark theme and smooth animations.",
      image: portfolioImg,
      tech: ["React.js", "Tailwind CSS", "TypeScript"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Cooking Recipe Website",
      description: "A comprehensive recipe platform where users can discover, save, and share cooking recipes. Features include ingredient lists, step-by-step instructions, and user reviews.",
      image: cookingImg,
      tech: ["React.js", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "E-commerce Product Page",
      description: "A fully responsive e-commerce product showcase with shopping cart functionality, product filtering, and payment integration. Modern UI with seamless user experience.",
      image: ecommerceImg,
      tech: ["Next.js", "Tailwind CSS", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Real-time weather application providing accurate forecasts, current conditions, and 7-day outlook. Features location-based weather data and interactive maps.",
      image: weatherImg,
      tech: ["React.js", "Weather API", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Blog Website",
      description: "A content management system for bloggers with rich text editor, category management, and SEO optimization. Features include comments, social sharing, and analytics.",
      image: blogImg,
      tech: ["React.js", "Node.js", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Admin Dashboard",
      description: "A comprehensive admin panel for managing users, content, and analytics. Features data visualization, user management, and real-time monitoring capabilities.",
      image: adminImg,
      tech: ["React.js", "Express.js", "MySQL"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="portfolio-card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;