import { Code, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "Bootstrap", "Next.js"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "Figma", "Postman", "Firebase"]
    }
  ];

  const mainSkills = [
    "React.js", "Tailwind CSS", "JavaScript", "Bootstrap", 
    "Next.js", "Node.js", "Java"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging modern technologies to build scalable and efficient web applications
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {mainSkills.map((skill, index) => (
              <span 
                key={index}
                className="skill-tag px-6 py-3 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="portfolio-card p-6 text-center group"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="text-muted-foreground text-sm py-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;