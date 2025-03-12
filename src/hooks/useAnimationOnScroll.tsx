
import { useEffect, useRef } from 'react';

export function useAnimationOnScroll(
  options = { 
    threshold: 0.1, 
    rootMargin: '0px 0px -10% 0px',
    triggerOnce: true 
  }
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options.triggerOnce) {
          entry.target.classList.remove('visible');
        }
      });
    }, options);
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);
  
  return ref;
}
