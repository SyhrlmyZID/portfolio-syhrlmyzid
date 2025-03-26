
import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: "AI Prompt",
    description: "A tool to create optimized prompts for various AI platforms with templates and adjustable parameters.",
    tags: ["React", "Node.js", "GPT API"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "E-Commerce Dashboard",
    description: "Interactive dashboard for e-commerce analytics with responsive design and real-time data visualization.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    demoLink: "#",
    repoLink: "#"
  },
  {
    title: "Personal Assistant UI",
    description: "Modern user interface for a virtual assistant with voice commands and customizable themes.",
    tags: ["JavaScript", "CSS", "Speech API"],
    image: "https://images.unsplash.com/photo-1618912690063-4d9a34465174?auto=format&fit=crop&w=800&q=80",
    demoLink: "#",
    repoLink: "#"
  },
  {
    title: "Portfolio Generator",
    description: "Web application that helps users create professional portfolios with minimal effort.",
    tags: ["TypeScript", "React", "Firebase"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
    demoLink: "#",
    repoLink: "#"
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-hacker-dark relative">
      {/* Binary code background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="w-full h-full font-mono text-[8px] text-hacker-red opacity-20 leading-3 select-none">
          {Array(100).fill(0).map((_, i) => (
            <div key={i} className="w-full">
              {Array(200).fill(0).map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-hacker-red font-cyber">&gt;</span> Projects
          </h2>
          <div className="w-20 h-1 bg-hacker-red mx-auto mb-6"></div>
          <p className="text-gray-300 font-code">
            Berikut terdapat beberapa foto saya sedang mengerjakan project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className={`glass-card rounded-md overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-hacker-red/20 hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <div className="aspect-video bg-black">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-40"
                  />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a 
                      href={project.demoLink} 
                      className="p-3 bg-hacker-red rounded-full hover:bg-red-700 transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                    <a 
                      href={project.repoLink} 
                      className="p-3 bg-hacker-dark rounded-full hover:bg-hacker-darker border border-hacker-red transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-hacker-red font-cyber">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-hacker-gray px-3 py-1 rounded-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
