import { useEffect, useRef, useState } from 'react';

interface AnimatedHeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const AnimatedHeroSection: React.FC<AnimatedHeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // SSR fallback - only run on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    const container = containerRef.current;
    
    // Initialize mouse position to center of container
    const initializePosition = () => {
      if (!container) return;
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
  }, [isClient]);

  return (
    <section
      ref={containerRef}
      className={`
        relative min-h-screen w-full flex items-center justify-center overflow-hidden
        ${className}
      `}
      role="banner"
      aria-label="Hero section with animated background"
      style={{
        background: isClient 
          ? `radial-gradient(
              600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0.08) 25%,
              rgba(255, 255, 255, 0.03) 50%,
              transparent 70%
            ),
            linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 
          className="
            text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6
            leading-tight tracking-tight
            drop-shadow-lg
          "
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p 
            className="
              text-lg md:text-xl lg:text-2xl text-white/90 mb-8
              font-light leading-relaxed max-w-2xl mx-auto
              drop-shadow-sm
            "
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
          >
            {subtitle}
          </p>
        )}

        {/* Call-to-Action Button */}
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="
              inline-flex items-center justify-center
              px-8 py-4 text-lg font-semibold
              text-white bg-white/20 backdrop-blur-sm
              border border-white/30 rounded-full
              hover:bg-white/30 hover:border-white/50
              transition-all duration-300 ease-out
              focus:outline-none focus:ring-4 focus:ring-white/30
              transform hover:scale-105 active:scale-95
              shadow-lg hover:shadow-xl
            "
            aria-label={`${buttonText} - Call to action button`}
          >
            {buttonText}
          </button>
        )}
      </div>

      {/* Ambient light overlay for enhanced depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: isClient 
            ? `radial-gradient(
                400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(255, 255, 255, 0.1) 0%,
                transparent 60%
              )`
            : 'transparent'
        }}
      />

      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
    </section>
  );
};

export default AnimatedHeroSection;