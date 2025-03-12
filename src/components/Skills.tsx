
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";
import { Code, Database, GitBranch, Terminal, Server, Settings } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    items: ["Python", "C#", "SQL", "JavaScript", "TypeScript"]
  },
  {
    category: "Backend Technologies",
    icon: <Server className="h-6 w-6" />,
    items: ["Django", "Flask", "ASP.NET Core", "Node.js", "Express", "RESTful APIs"]
  },
  {
    category: "Automation & Scripting",
    icon: <Terminal className="h-6 w-6" />,
    items: ["Selenium", "Playwright", "PyAutoGUI", "Bash", "PowerShell", "Task Scheduling"]
  },
  {
    category: "Database Systems",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "SQL Server", "Redis"]
  },
  {
    category: "DevOps & Tools",
    icon: <GitBranch className="h-6 w-6" />,
    items: ["Git", "Docker", "CI/CD", "GitHub Actions", "AWS", "Azure"]
  },
  {
    category: "Software Architecture",
    icon: <Settings className="h-6 w-6" />,
    items: ["Microservices", "RESTful Design", "OOP", "Design Patterns", "System Design"]
  }
];

export function Skills() {
  const titleRef = useAnimationOnScroll();
  const descriptionRef = useAnimationOnScroll();
  
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll"
          >
            Technical Expertise
          </h2>
          <p 
            ref={descriptionRef as React.RefObject<HTMLParagraphElement>}
            className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll"
          >
            Specialized in backend development, automation, and creating efficient, scalable solutions
            with a focus on clean code practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const skillRef = useAnimationOnScroll();
            return (
              <div 
                key={index}
                ref={skillRef as React.RefObject<HTMLDivElement>}
                className="glass p-6 rounded-xl animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-primary/10 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
