
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedButton from "@/components/AnimatedButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-6">
      <div className="glass-card p-12 text-center max-w-md animate-fade-in">
        <div className="w-20 h-20 mx-auto mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple to-teal rounded-full animate-pulse-slow"></div>
          <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-gradient">404</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-foreground/80 mb-8">
          We couldn't find the page you were looking for. Let's get you back on track.
        </p>
        <AnimatedButton variant="primary" size="large" href="/">
          Return to Home
        </AnimatedButton>
      </div>
    </div>
  );
};

export default NotFound;
