
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

export function About() {
  const titleRef = useAnimationOnScroll();
  const contentRef = useAnimationOnScroll();
  const imageRef = useAnimationOnScroll();
  
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 
              ref={titleRef as React.RefObject<HTMLHeadingElement>}
              className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll"
            >
              About Me
            </h2>
            
            <div 
              ref={contentRef as React.RefObject<HTMLDivElement>}
              className="space-y-4 animate-on-scroll"
            >
              <p>
                I'm a professional Python and C# developer specializing in backend development, 
                scripting, and automation. With a passion for building efficient, scalable systems 
                and automating complex processes, I help businesses streamline operations and solve 
                technical challenges.
              </p>
              
              <p>
                My journey in software development began over 8 years ago, and I've since worked 
                with various organizations to implement robust backend solutions that handle 
                everything from data processing to system integration.
              </p>
              
              <p>
                I'm particularly passionate about clean code, optimizing performance, and creating 
                maintainable systems that can evolve with business needs. When I'm not coding, 
                I enjoy contributing to open-source projects and staying current with the latest 
                advancements in backend technologies.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className="lg:w-1/2 order-1 lg:order-2 animate-on-scroll"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur opacity-70"></div>
              <div className="relative glass rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
