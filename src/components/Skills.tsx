
import { useState, useEffect } from 'react';

const skillCategories = [
  {
    name: "Prompt Engineering",
    skills: [
      { name: "GPT Prompt Design", level: 90 },
      { name: "Context Optimization", level: 85 },
      { name: "Parameter Tuning", level: 80 },
      { name: "Output Formatting", level: 85 },
      { name: "Prompt Chaining", level: 75 },
    ]
  },
  {
    name: "Front-End Development",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "UI/UX Design", level: 75 },
    ]
  },
  {
    name: "Other Skills",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Responsive Design", level: 85 },
      { name: "API Integration", level: 75 },
      { name: "Web Performance", level: 70 },
      { name: "Problem Solving", level: 85 },
    ]
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-hacker-darker relative">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB4PSI0NiIgeT0iNDAiIHdpZHRoPSI4IiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjJkNTUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSIzNSIgcj0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmYyZDU1IiBzdHJva2Utd2lkdGg9IjAuNSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNjUiIHI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmMmQ1NSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iNTAiIHkxPSIzOCIgeDI9IjUwIiB5Mj0iNDAiIHN0cm9rZT0iI2ZmMmQ1NSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iNTAiIHkxPSI2MCIgeDI9IjUwIiB5Mj0iNjIiIHN0cm9rZT0iI2ZmMmQ1NSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iNDAiIHkxPSIzNSIgeDI9IjQ3IiB5Mj0iMzUiIHN0cm9rZT0iI2ZmMmQ1NSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iNDAiIHkxPSI2NSIgeDI9IjQ3IiB5Mj0iNjUiIHN0cm9rZT0iI2ZmMmQ1NSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmYyZDU1IiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIzMCIgeTE9IjI3LjUiIHgyPSI0MCIgeTI9IjM1IiBzdHJva2U9IiNmZjJkNTUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTTcwLDI3LjUgQzgwLDQwIDgwLDYwIDcwLDcyLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmMmQ1NSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48Y2lyY2xlIGN4PSI3MCIgY3k9IjI3LjUiIHI9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmMmQ1NSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48Y2lyY2xlIGN4PSI3MCIgY3k9IjcyLjUiIHI9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmMmQ1NSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-hacker-red font-cyber">&gt;</span> Skills
          </h2>
          <div className="w-20 h-1 bg-hacker-red mx-auto mb-6"></div>
          <p className="text-gray-300 font-code">
            My technical expertise and proficiency in various technologies and methodologies.
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Tabs navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-sm text-sm md:text-base transition-all duration-300 ${
                  activeTab === index
                    ? "bg-hacker-red text-white"
                    : "bg-hacker-gray text-gray-300 hover:bg-hacker-red/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills display */}
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-md p-6 border-hacker-red/20">
              <h3 className="text-xl font-bold mb-4 text-hacker-red">
                {skillCategories[activeTab].name}
              </h3>
              
              <div className="space-y-6">
                {skillCategories[activeTab].skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-code">{skill.name}</span>
                      <span className="text-hacker-red font-cyber">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-hacker-gray rounded-sm overflow-hidden">
                      <div 
                        className="h-full bg-hacker-red rounded-sm transition-all duration-1000 animate-pulse-glow"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 300}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
