import { useEffect, useRef } from 'react';

export const useMouseGradient = (containerId: string) => {
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Initialize mouse position to center of container
    const initializePosition = () => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseRef.current = { x: centerX, y: centerY };
      currentPosRef.current = { x: centerX, y: centerY };
      
      // Set initial CSS variables
      container.style.setProperty('--mouse-x', `${centerX}px`);
      container.style.setProperty('--mouse-y', `${centerY}px`);
    };

    // Mouse and touch event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current.x = touch.clientX;
        mouseRef.current.y = touch.clientY;
      }
    };

    // Smooth animation with requestAnimationFrame
    const animate = () => {
      if (!container) return;

      // Smooth interpolation (lerp) for fluid movement
      const lerp = 0.1;
      currentPosRef.current.x += (mouseRef.current.x - currentPosRef.current.x) * lerp;
      currentPosRef.current.y += (mouseRef.current.y - currentPosRef.current.y) * lerp;

      // Update CSS variables for gradient position
      container.style.setProperty('--mouse-x', `${currentPosRef.current.x}px`);
      container.style.setProperty('--mouse-y', `${currentPosRef.current.y}px`);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Resize handler to maintain correct positioning
    const handleResize = () => {
      initializePosition();
    };

    // Initialize and start animation
    initializePosition();
    animationRef.current = requestAnimationFrame(animate);

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [containerId]);
};