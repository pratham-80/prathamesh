"use client";

import Image, { ImageProps } from "next/image";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { useState } from "react";

interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  fallback?: React.ReactNode;
  className?: string;
}

export default function LazyImage({ 
  src, 
  alt, 
  fallback,
  className = "",
  ...props 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  // Update visibility state when intersection changes
  if (entry?.isIntersecting && !isInView) {
    setIsInView(true);
  }

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const defaultFallback = (
    <div className={`bg-gray-200 animate-pulse ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      {!isInView ? (
        fallback || defaultFallback
      ) : (
        <Image
          src={src}
          alt={alt}
          onLoad={handleLoad}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
}
