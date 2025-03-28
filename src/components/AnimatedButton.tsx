
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const AnimatedButton = ({
  variant = 'primary',
  size = 'default',
  children,
  className,
  href,
  ...props
}: AnimatedButtonProps) => {
  const buttonClasses = cn(
    'relative inline-flex items-center justify-center overflow-hidden rounded-md font-medium transition-all duration-300',
    'before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-100',
    'focus:outline-none focus:ring-2 focus:ring-purple/30 focus:ring-offset-2',
    'active:scale-[0.98] transform',
    variant === 'primary' 
      ? 'bg-purple text-white before:bg-gradient-to-r before:from-purple-light before:to-purple' 
      : 'bg-white border border-purple text-purple hover:bg-purple/5 before:bg-purple/5',
    size === 'default' ? 'text-sm px-5 py-2.5' : 'text-base px-8 py-3.5',
    className
  );

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

export default AnimatedButton;
