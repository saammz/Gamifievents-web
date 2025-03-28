
export default function setupScrollObserver() {
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationName = element.getAttribute('data-aos');
        const delay = element.getAttribute('data-aos-delay') || '0';
        
        setTimeout(() => {
          if (animationName === 'fade-up') {
            element.classList.add('animate-slide-in-bottom');
          } else if (animationName === 'fade-right') {
            element.classList.add('animate-fade-in-right');
          } else if (animationName === 'fade-left') {
            element.classList.add('animate-fade-in-left');
          } else if (animationName === 'fade-in') {
            element.classList.add('animate-fade-in');
          } else if (animationName === 'scale-in') {
            element.classList.add('animate-scale-in');
          }
          
          element.classList.remove('opacity-0');
        }, parseInt(delay));
        
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  return observer;
}
