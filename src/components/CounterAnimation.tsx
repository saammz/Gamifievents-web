
import React, { useEffect, useState, useRef } from 'react';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  roundTo?: number;
}

const CounterAnimation = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  roundTo = 0
}: CounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const easeOutQuad = (t: number) => t * (2 - t);

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      const currentCount = Math.min(Math.floor(easedProgress * end), end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="inline-block">
      {prefix}
      {count.toFixed(roundTo)}
      {suffix}
    </div>
  );
};

export default CounterAnimation;
