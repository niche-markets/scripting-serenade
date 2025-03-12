
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enterprise Automation Framework",
    description: "A comprehensive Python framework for automating business processes, reducing manual workload by 80% and saving over 2000 work hours annually.",
    skills: ["Python", "Selenium", "Pandas", "REST API", "SQL"],
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    github: "#",
    demo: "#"
  },
  {
    title: "Real-time Data Processing Pipeline",
    description: "Scalable backend system processing 10k+ events/second, leveraging asynchronous programming and distributed computing principles.",
    skills: ["C#", ".NET Core", "Kafka", "Redis", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    github: "#",
    demo: "#"
  },
  {
    title: "Intelligent Document Processing System",
    description: "Created an AI-powered system to extract, classify and process information from documents, integrating with existing workflow systems.",
    skills: ["Python", "Django", "Machine Learning", "OCR", "Docker"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    github: "#",
    demo: "#"
  }
];

export function Projects() {
  const titleRef = useAnimationOnScroll();
  const descriptionRef = useAnimationOnScroll();
  
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll"
          >
            Featured Projects
          </h2>
          <p 
            ref={descriptionRef as React.RefObject<HTMLParagraphElement>}
            className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll"
          >
            A selection of my recent work, showcasing technical ability and problem-solving skills
            across different domains and technologies.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => {
            const projectRef = useAnimationOnScroll();
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                ref={projectRef as React.RefObject<HTMLDivElement>}
                className="animate-on-scroll"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10`}>
                  <div className="lg:w-1/2 relative overflow-hidden rounded-xl shadow-lg">
                    <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover aspect-video transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                        aria-label="View source code on GitHub"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </a>
                      <a 
                        href={project.demo}
                        className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
