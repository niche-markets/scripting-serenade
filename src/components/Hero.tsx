
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (heading) {
      heading.classList.add("animate-fade-in-up");
      heading.style.animationDelay = "0.2s";
    }

    if (subtitle) {
      subtitle.classList.add("animate-fade-in-up");
      subtitle.style.animationDelay = "0.4s";
    }

    if (cta) {
      cta.classList.add("animate-fade-in-up");
      cta.style.animationDelay = "0.6s";
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex flex-col items-center justify-center pt-16 pb-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary text-sm font-medium opacity-0 animate-fade-in">
          Python & C# Developer
        </div>
        
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight opacity-0"
        >
          Python Scripting & Automation
          <br />
          <span className="text-primary/90">& Backend Specialist</span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0"
        >
          Crafting efficient, scalable backend solutions and automating complex processes
          to solve real-world problems with clean, maintainable code.
        </p>
        
        <div ref={ctaRef} className="opacity-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
      
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      </div>
    </section>
  );
}
