
import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  className?: string;
  delay?: number;
}

const Testimonial = ({ 
  quote, 
  author, 
  role, 
  company, 
  className,
  delay = 0
}: TestimonialProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 opacity-0",
        className
      )}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="mb-4">
        <Quote className="h-8 w-8 text-purple/30" />
      </div>
      <p className="mb-4 text-lg italic text-foreground/80">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple to-teal flex items-center justify-center text-white font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
