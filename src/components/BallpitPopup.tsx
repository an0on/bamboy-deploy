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
          className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 text-white text-sm font-medium border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-200 animate-shine"
          onClick={onClose}
          style={{
            backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
            backgroundSize: '200% 100%',
            animationDuration: '3s',
          }}
        >
          Press <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-white rounded ml-1 mr-1">ESC</kbd> to close
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