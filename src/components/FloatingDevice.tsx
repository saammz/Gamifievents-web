
import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingDeviceProps {
  imageSrc: string;
  alt: string;
  className?: string;
  delay?: number;
}

const FloatingDevice = ({ 
  imageSrc, 
  alt, 
  className,
  delay = 0
}: FloatingDeviceProps) => {
  const animationDelayStyle = {
    animationDelay: `${delay}ms`
  };

  return (
    <div 
      className={cn(
        "relative rounded-xl overflow-hidden shadow-lg animate-float", 
        className
      )}
      style={animationDelayStyle}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-purple/20 to-teal/20 backdrop-blur-xs"></div>
      <img src={imageSrc} alt={alt} className="w-full h-auto relative z-10" />
    </div>
  );
};

export default FloatingDevice;
