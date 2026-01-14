// FixedMobileProjects.jsx - SIMPLIFIED AND FIXED
import React, { useState, useCallback, useRef } from 'react';
import { ProjectsInfo } from '../../Constants';

const FixedMobileProjects = ({ 
  isMobile, 
  isTablet,
  handleProjectSelect 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const clickInProgressRef = useRef(false);

  // SIMPLE navigation - NO auto-rotation, NO delays
  const goToNext = useCallback((e) => {
    e?.stopPropagation();
    e?.preventDefault();
    if (clickInProgressRef.current) return;
    
    setCurrentIndex(prev => {
      const nextIndex = (prev + 1) % ProjectsInfo.length;
      console.log("Going to next index:", nextIndex, "Project:", ProjectsInfo[nextIndex]?.title);
      return nextIndex;
    });
  }, []);

  const goToPrev = useCallback((e) => {
    e?.stopPropagation();
    e?.preventDefault();
    if (clickInProgressRef.current) return;
    
    setCurrentIndex(prev => {
      const prevIndex = (prev - 1 + ProjectsInfo.length) % ProjectsInfo.length;
      console.log("Going to prev index:", prevIndex, "Project:", ProjectsInfo[prevIndex]?.title);
      return prevIndex;
    });
  }, []);

  // Mobile swipe handlers
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const swipeThreshold = 50;
    const diffX = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diffX) > swipeThreshold) {
      if (diffX > 0) {
        // Swipe left - go to next
        goToNext({});
      } else {
        // Swipe right - go to previous
        goToPrev({});
      }
    }
  }, [goToNext, goToPrev]);

  // DIRECT CLICK HANDLER - Opens the CURRENT project, not a different one
  const handleCardClick = useCallback(() => {
    if (clickInProgressRef.current) return;
    clickInProgressRef.current = true;
    
    console.log("Card clicked - Current Index:", currentIndex, 
                "Current Project:", ProjectsInfo[currentIndex]?.title);
    
    // Call the parent handler with CURRENT index
    if (handleProjectSelect) {
      handleProjectSelect(currentIndex);
    }
    
    // Reset click lock
    setTimeout(() => {
      clickInProgressRef.current = false;
    }, 300);
  }, [currentIndex, handleProjectSelect]);

  const currentProject = ProjectsInfo[currentIndex];

  return (
    <>
      <div className="relative w-full max-w-md mx-auto">
        {/* HOLOGRAPHIC CARD CONTAINER */}
        <div 
          className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(10, 175, 255, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%)',
            border: '1px solid rgba(10, 175, 255, 0.2)',
            boxShadow: '0 0 40px rgba(10, 175, 255, 0.3), inset 0 0 30px rgba(10, 175, 255, 0.1)'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* HOLOGRAPHIC CARD - WITH GLASS EFFECT */}
          <div 
            className="absolute inset-0 rounded-2xl p-6 sm:p-8 cursor-pointer active:scale-[0.99] transition-transform duration-200"
            style={{
              background: 'linear-gradient(145deg, rgba(10, 175, 255, 0.08) 0%, rgba(0, 0, 0, 0.85) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(10, 175, 255, 0.3)'
            }}
            onClick={handleCardClick}
            onTouchStart={(e) => e.stopPropagation()}
          >
            {/* GLOWING BORDER EFFECT */}
            <div className="absolute inset-0 rounded-2xl border border-[#0af] opacity-20 animate-pulse"></div>
            
            {/* PROJECT IMAGE */}
            <div className="w-full h-48 sm:h-56 overflow-hidden rounded-xl mb-6 relative">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* IMAGE GLOW */}
              <div className="absolute inset-0 border border-[#0af]/30 rounded-xl pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0af]/10 to-transparent rounded-xl pointer-events-none"></div>
            </div>
            
            {/* PROJECT TITLE */}
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 text-center px-2"
                style={{ 
                  textShadow: '0 0 15px rgba(10, 175, 255, 0.5)'
                }}>
              {currentProject.title}
            </h3>
            
            {/* TAGS */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {currentProject.tags.slice(0, 4).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-sm rounded-lg"
                  style={{
                    background: 'rgba(10, 175, 255, 0.1)',
                    color: '#0af',
                    border: '1px solid rgba(10, 175, 255, 0.3)',
                    textShadow: '0 0 10px rgba(10, 175, 255, 0.3)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* CLICK INSTRUCTION */}
            <div className="text-center mt-6">
              <div className="text-[#0af] text-sm font-semibold animate-pulse mb-2"
                   style={{ textShadow: '0 0 10px rgba(10, 175, 255, 0.5)' }}>
                Tap to Open "{currentProject.title}" →
              </div>
              <div className="text-white/60 text-xs">
                <span className="inline-flex items-center gap-1">
                  <span className="text-[#0af]">←</span> Swipe left/right to navigate 
                  <span className="text-[#0af]">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* MANUAL NAVIGATION ARROWS - BELOW THE CARD */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={goToPrev}
            onTouchStart={(e) => {
              e.stopPropagation();
              goToPrev(e);
            }}
            disabled={clickInProgressRef.current}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-[#0af] text-2xl z-10 transition-all duration-300 ${
              clickInProgressRef.current 
                ? 'opacity-50 cursor-not-allowed' 
                : 'active:scale-95 hover:scale-110'
            }`}
            style={{
              background: 'rgba(10, 175, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(10, 175, 255, 0.3)',
              boxShadow: '0 0 20px rgba(10, 175, 255, 0.2)'
            }}
            aria-label="Previous project"
          >
            ←
          </button>
          
          <div className="flex flex-col items-center">
            <div className="text-white/80 text-sm mb-1">
              Project {currentIndex + 1} of {ProjectsInfo.length}
            </div>
            <span className="text-[#0af] text-sm font-medium"
                  style={{ textShadow: '0 0 10px rgba(10, 175, 255, 0.5)' }}>
              {currentIndex + 1} / {ProjectsInfo.length}
            </span>
          </div>
          
          <button
            onClick={goToNext}
            onTouchStart={(e) => {
              e.stopPropagation();
              goToNext(e);
            }}
            disabled={clickInProgressRef.current}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-[#0af] text-2xl z-10 transition-all duration-300 ${
              clickInProgressRef.current 
                ? 'opacity-50 cursor-not-allowed' 
                : 'active:scale-95 hover:scale-110'
            }`}
            style={{
              background: 'rgba(10, 175, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(10, 175, 255, 0.3)',
              boxShadow: '0 0 20px rgba(10, 175, 255, 0.2)'
            }}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
      
      {/* MOBILE/TABLET INSTRUCTIONS */}
      <div className="text-center mt-12 text-white/80 text-sm relative z-10 px-4">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
             style={{
               background: 'rgba(10, 175, 255, 0.1)',
               border: '1px solid rgba(10, 175, 255, 0.2)',
               backdropFilter: 'blur(10px)'
             }}>
          <div className="w-2 h-2 rounded-full bg-[#0af] animate-pulse"></div>
          <span className="text-[#0af] font-medium">MOBILE/TABLET MODE</span>
        </div>
        
        <div className="max-w-3xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl text-center"
                 style={{
                   background: 'rgba(10, 175, 255, 0.05)',
                   border: '1px solid rgba(10, 175, 255, 0.1)'
                 }}>
              <div className="font-semibold text-[#0af] mb-2">Simple Navigation</div>
              <p className="text-white/70 text-xs">
                Use ← → buttons or swipe to navigate projects
              </p>
            </div>
            
            <div className="p-4 rounded-xl text-center"
                 style={{
                   background: 'rgba(10, 175, 255, 0.05)',
                   border: '1px solid rgba(10, 175, 255, 0.1)'
                 }}>
              <div className="font-semibold text-[#0af] mb-2">Direct Access</div>
              <p className="text-white/70 text-xs">
                Tap card to open that exact project's details
              </p>
            </div>
            
            <div className="p-4 rounded-xl text-center"
                 style={{
                   background: 'rgba(10, 175, 255, 0.05)',
                   border: '1px solid rgba(10, 175, 255, 0.1)'
                 }}>
              <div className="font-semibold text-[#0af] mb-2">No Auto-Rotation</div>
              <p className="text-white/70 text-xs">
                Projects won't switch automatically
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedMobileProjects;

// Completed.......................