import React, { useEffect } from 'react';
import Ballpit from './Ballpit';

interface BallpitPopupProps {
  onClose: () => void;
}

const BallpitPopup: React.FC<BallpitPopupProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    
    // Prevent scrolling on background
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
      {/* ESC Hint */}
      <div className="absolute top-4 right-4 z-60">
        <div 
          className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 text-white text-sm font-medium border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-200"
          onClick={onClose}
        >
          Press{" "}
          <kbd 
            className="px-2 py-1 text-xs font-semibold bg-white rounded hover:bg-gray-100 transition-colors cursor-pointer animate-shine"
            onClick={onClose}
            style={{
              backgroundImage: 'linear-gradient(120deg, #1f2937 40%, #ffffff 50%, #1f2937 60%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              animationDuration: '3s',
            }}
          >
            ESC
          </kbd>
          {" "}to close
        </div>
      </div>

      {/* Ballpit Container */}
      <div className="w-full h-full max-w-none max-h-none">
        <div style={{
          position: 'relative', 
          overflow: 'hidden', 
          minHeight: '100vh', 
          maxHeight: '100vh', 
          width: '100%'
        }}>
          <Ballpit
            count={100}
            gravity={0.006}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={true}
            colors={[0x9f41ff, 0x4ade80, 0xff7f00]} // Purple, Green, Orange
          />
        </div>
      </div>

      {/* Click outside to close */}
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default BallpitPopup;