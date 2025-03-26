
import { useState, useEffect } from 'react';

const projectsData = [
  {
    title: "Portfolio V2",
    description: "Saya juga mengembangkan portfolio berbasis terminal jika ingin mengunjungi nya silakan: syhrlmyzid.github.io/portfolio-v2",
    tags: ["HTML", "CSS", "TailwindCSS", "Javascript", "PHP", "Mysql"],
    image: "https://github.com/SyhrlmyZID/portfolio-v2/blob/main/screenshot.PNG?raw=true"
  },
  {
    title: "SyhrlmyZ Games",
    description: "Saya juga sekarang sedang membuat project website menyediakan game gratis / crack dengan fitur website tanpa iklan dan mudah.",
    tags: ["HTML", "CSS", "TailwindCSS", "Javascript"],
    image: "/img/project_2.PNG"
  },
  {
    title: "Todo-List | Luxe Task",
    description: "Saya juga telah membuat website Todo-List bernama Luxe Task untuk project kegiatan Ujikompetensi.",
    tags: ["HTML", "CSS", "Javascript", "TailwindCSS", "PHP", "Mysql"],
    image: "/img/project_3.PNG"
  },
  {
    title: "Wifi Customer Management System",
    description: "Project kali ini yaitu mirip todolist yang dimana sitem nya mencatat customer yang berlangganan.",
    tags: ["HTML", "CSS", "Javascript", "TailwindCSS", "PHP", "Mysql"],
    image: "/img/project_4.PNG"
  },
  {
    title: "Migrasi Data Klipaa",
    description: "Saya pernah prakerin di PT. Klipaa indonesia melakukan migrasi data desa ke aplikasi terbaru.",
    tags: ["HTML", "CSS", "Javascript", "TailwindCSS", "Laravel"],
    image: "/img/project_5.png"
  },
  {
    title: "IP-Info Python",
    description: "Project ip-info ini adalah sebuah tools yang dimana dengan memasukan url/ip website maka akan mendapatkan beberapa informasi tentang website tersebut.",
    tags: ["Python"],
    image: "https://github.com/SyhrlmyZID/ip-info/blob/main/img/screenshot.png?raw=true"
  },
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-hacker-red font-cyber">&gt;</span> Projek
          </h2>
          <div className="w-20 h-1 bg-hacker-red mx-auto mb-6"></div>
          <p className="text-gray-300 font-code">
            Berikut beberapa project yang pernah atau sedang saya kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className={`glass-card rounded-md overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-hacker-red/50 hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <div className="aspect-video bg-black group-hover:shadow-[0_0_20px_rgba(255,0,0,0.7)] transition-shadow duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-40"
                  />
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
