
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className,
  delay = 0
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "feature-card opacity-0",
        className
      )}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-purple/10">
        <Icon className="text-purple h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
