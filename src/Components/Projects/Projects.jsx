
// Projects.jsx - COMPLETELY FIXED WITH ALL DESKTOP ANIMATIONS
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ProjectsInfo } from "../../Constants";
import IronManModal from "./IronManModal";
import FixedMobileProjects from "./FixedMobileProjects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const phaseStartTimeRef = useRef(Date.now());

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // OPTIMIZED ANIMATION LOOP - 60 FPS LOCKED, NO STUTTERING (DESKTOP ONLY)
  useEffect(() => {
    if (isMobile || isTablet || isHovering || selectedProject) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFPSUpdate = performance.now();
    
    const animate = (currentTime) => {
      frameCount++;
      
      const elapsed = currentTime - lastTime;
      
      if (elapsed >= frameInterval) {
        const deltaTime = Math.min(elapsed, 100) / 1000;
        
        const now = Date.now();
        const phaseTime = now - phaseStartTimeRef.current;
        
        if (phaseTime < 8000) {
          if (animationPhase !== 0) {
            setAnimationPhase(0);
            setPhaseProgress(0);
          }
          const progress = phaseTime / 8000;
          setPhaseProgress(progress);
          setRotationAngle(prev => (prev + 1.2 * deltaTime) % 360);
        } 
        else if (phaseTime < 11000) {
          if (animationPhase !== 1) {
            setAnimationPhase(1);
            setPhaseProgress(0);
          }
          const progress = (phaseTime - 8000) / 3000;
          setPhaseProgress(progress);
        } 
        else if (phaseTime < 13000) {
          if (animationPhase !== 2) {
            setAnimationPhase(2);
            setPhaseProgress(0);
          }
          const progress = (phaseTime - 11000) / 2000;
          setPhaseProgress(progress);
        } 
        else {
          phaseStartTimeRef.current = now;
          setAnimationPhase(0);
          setPhaseProgress(0);
        }
        
        lastTime = currentTime - (elapsed % frameInterval);
      }
      
      if (currentTime - lastFPSUpdate >= 1000) {
        lastFPSUpdate = currentTime;
        frameCount = 0;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, isMobile, isTablet, selectedProject, animationPhase]);

  // Calculate card position with EQUAL SIZES and CLEAR ANIMATION (DESKTOP ONLY)
  const getCardPosition = (index) => {
    const totalProjects = ProjectsInfo.length;
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let baseRadius;
    if (screenWidth >= 1920) baseRadius = 300;
    else if (screenWidth >= 1440) baseRadius = 260;
    else if (screenWidth >= 1024) baseRadius = 220;
    else baseRadius = 180;
    
    const maxRadius = Math.min(screenWidth * 0.28, screenHeight * 0.32);
    const radius = Math.min(baseRadius, maxRadius);
    
    const baseAngle = (index * (360 / totalProjects)) * (Math.PI / 180);
    
    let x = 0, y = 0, scale = 1, rotation = 0;
    let zIndex = 500;
    
    switch (animationPhase) {
      case 0:
        const rotateAngle = baseAngle + (rotationAngle * Math.PI / 180);
        x = Math.cos(rotateAngle) * radius;
        y = Math.sin(rotateAngle) * radius;
        scale = 1;
        rotation = (index * (360 / totalProjects) + rotationAngle + 90) % 360;
        zIndex = Math.round(x + y + 500);
        break;
        
      case 1:
        const centerProgress = Math.min(phaseProgress, 1);
        const easedProgress = centerProgress < 0.5 
          ? 2 * centerProgress * centerProgress 
          : 1 - Math.pow(-2 * centerProgress + 2, 2) / 2;
        
        const centerAngle = baseAngle + (rotationAngle * Math.PI / 180);
        const targetRadius = radius * 0.3;
        const currentRadius = radius - (radius - targetRadius) * easedProgress;
        
        x = Math.cos(centerAngle) * currentRadius;
        y = Math.sin(centerAngle) * currentRadius;
        scale = 1 + easedProgress * 0.3;
        rotation = (index * (360 / totalProjects) + rotationAngle + 90) % 360;
        zIndex = 600 + Math.round(easedProgress * 100);
        break;
        
      case 2:
        const jumbleProgress = Math.min(phaseProgress, 1);
        const jumbleAngle = baseAngle + (jumbleProgress * Math.PI * 2) + 
                           (index * 0.5 * Math.sin(jumbleProgress * Math.PI));
        
        const jumbleRadius = radius * (0.3 + jumbleProgress * 0.7);
        x = Math.cos(jumbleAngle) * jumbleRadius;
        y = Math.sin(jumbleAngle) * jumbleRadius;
        scale = 1 + Math.sin(jumbleProgress * Math.PI) * 0.1;
        rotation = (jumbleProgress * 180 + index * 30) % 360;
        zIndex = 700 + index;
        break;
    }
    
    if (hoveredCard === index) {
      scale *= 1.2;
      zIndex = 1000;
    }
    
    return {
      transform: `translate3d(${x}px, ${y}px, 0) rotateY(${rotation}deg) scale(${scale})`,
      opacity: hoveredCard === index ? 1 : 0.95,
      zIndex: zIndex,
      width: '280px',
      height: '340px',
      willChange: 'transform, opacity',
      transition: hoveredCard === index 
        ? 'transform 0.2s ease, opacity 0.2s ease' 
        : 'transform 0.5s ease, opacity 0.5s ease'
    };
  };

  // **FIXED: MOBILE HANDLER - SIMPLE AND DIRECT**
  const handleMobileProjectSelect = useCallback((index) => {
    console.log("Mobile project selected - Index:", index, 
                "Project:", ProjectsInfo[index]?.title);
    
    // Direct and immediate - no animation, no delay
    setSelectedProject(ProjectsInfo[index]);
  }, []);

  // Desktop modal handlers - UNCHANGED
  const handleDesktopOpenModal = (project) => {
    setSelectedProject(project);
    setIsHovering(true);
    setHoveredCard(null);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsHovering(false);
  };

  // Reset animation when component mounts (DESKTOP ONLY)
  useEffect(() => {
    if (!isMobile && !isTablet) {
      phaseStartTimeRef.current = Date.now();
    }
  }, [isMobile, isTablet]);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden min-h-screen">
      {/* Optimized Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `
                 linear-gradient(90deg, transparent 49%, #0af 50%, transparent 51%),
                 linear-gradient(0deg, transparent 49%, #0af 50%, transparent 51%)
               `,
               backgroundSize: '80px 80px'
             }}>
        </div>
        
        {[...Array(isMobile ? 5 : isTablet ? 8 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-[#0af] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 1}s`,
              opacity: 0.1 + Math.random() * 0.2
            }}
          />
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0af] via-[#0ff] to-[#0af] bg-clip-text text-transparent"
            style={{
              animation: !isMobile && !isTablet ? 'gradient-shift 3s ease infinite' : 'none',
              backgroundSize: '200% 100%'
            }}>
          PROJECTS
        </h2>
        <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#0af] to-transparent mx-auto mt-2"></div>
        <p className="text-white/80 mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
          {isMobile || isTablet 
            ? "Swipe left or right to navigate • Tap card to explore" 
            : "Watch the holographic animation • Click anywhere to materialize"}
        </p>
        <div className="mt-4 text-[#0af]/70 text-sm">
          <span className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0af] animate-pulse"></div>
            {isMobile || isTablet 
              ? "Manual Swipe Navigation" 
              : `Dynamic Animation: ${animationPhase === 0 ? 'Rotating' : animationPhase === 1 ? 'Coming Closer' : 'Jumbling'}`}
          </span>
        </div>
      </div>

      {/* MOBILE/TABLET - USING FIXED COMPONENT */}
      {(isMobile || isTablet) ? (
        <FixedMobileProjects 
          isMobile={isMobile} 
          isTablet={isTablet}
          handleProjectSelect={handleMobileProjectSelect}
        />
      ) : (
        // DESKTOP HOLOGRAPHIC ANIMATION - UNCHANGED AND FULLY WORKING
        <div className="relative w-full h-[700px] lg:h-[800px] flex items-center justify-center">
          {/* Central Holographic Core */}
          <div className="absolute w-48 h-48 rounded-full z-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0af]/30 to-[#0ff]/20 animate-pulse"
                 style={{ filter: 'blur(25px)', animationDuration: '2s' }}>
            </div>
            <div className="absolute inset-0 rounded-full border border-[#0af]/30"
                 style={{
                   boxShadow: 'inset 0 0 60px rgba(10, 175, 255, 0.3), 0 0 80px rgba(10, 175, 255, 0.2)'
                 }}>
            </div>
          </div>
          
          {/* Animation Container */}
          <div 
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1200px'
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              if (!selectedProject) {
                setIsHovering(false);
                setHoveredCard(null);
              }
            }}
          >
            {/* Orbital Guide Rings */}
            <div className="absolute w-[600px] h-[600px] rounded-full border border-[#0af]/10"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[#0af]/5"></div>
            <div className="absolute w-[200px] h-[200px] rounded-full border border-[#0af]/20"></div>
            
            {/* HOLOGRAPHIC CARDS */}
            {ProjectsInfo.map((project, index) => (
              <div
                key={project.id}
                className="absolute cursor-pointer"
                style={getCardPosition(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => {
                  if (!selectedProject) setHoveredCard(null);
                }}
                onClick={() => handleDesktopOpenModal(project)}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-2xl p-5"
                       style={{
                         background: hoveredCard === index 
                           ? 'linear-gradient(145deg, rgba(10, 175, 255, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%)'
                           : 'linear-gradient(145deg, rgba(10, 175, 255, 0.12) 0%, rgba(0, 0, 0, 0.85) 100%)',
                         backdropFilter: 'blur(10px)',
                         border: hoveredCard === index 
                           ? '2px solid rgba(10, 175, 255, 0.6)' 
                           : '1px solid rgba(10, 175, 255, 0.25)',
                         boxShadow: hoveredCard === index 
                           ? '0 0 40px rgba(10, 175, 255, 0.5), inset 0 0 30px rgba(10, 175, 255, 0.15)'
                           : '0 0 25px rgba(10, 175, 255, 0.25), inset 0 0 20px rgba(10, 175, 255, 0.08)'
                       }}>
                    
                    <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    <h3 className="text-white font-bold text-base mb-3 text-center px-2 truncate"
                        style={{ 
                          textShadow: hoveredCard === index 
                            ? '0 0 20px rgba(10, 175, 255, 0.9)' 
                            : '0 0 10px rgba(10, 175, 255, 0.6)'
                        }}>
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1.5 justify-center mb-3 max-h-14 overflow-y-auto px-1">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs rounded-lg"
                          style={{
                            background: hoveredCard === index 
                              ? 'rgba(10, 175, 255, 0.25)' 
                              : 'rgba(10, 175, 255, 0.15)',
                            color: '#0af',
                            border: '1px solid rgba(10, 175, 255, 0.35)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-center mt-2 pt-2 border-t border-[#0af]/20">
                      <span className="text-[#0af] text-sm font-medium"
                            style={{ textShadow: '0 0 10px rgba(10, 175, 255, 0.6)' }}>
                        {hoveredCard === index ? 'CLICK ANYWHERE →' : 'Hover to focus'}
                      </span>
                    </div>
                  </div>
                  
                  {hoveredCard === index && (
                    <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#0af]/30 to-[#0ff]/20 blur-xl opacity-40"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop animation phase indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-10">
            <div className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full ${animationPhase === 0 ? 'bg-[#0af] scale-125' : 'bg-white/20'}`}></div>
              <span className="text-white/70 text-xs">Rotate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full ${animationPhase === 1 ? 'bg-[#0af] scale-125' : 'bg-white/20'}`}></div>
              <span className="text-white/70 text-xs">Center</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full ${animationPhase === 2 ? 'bg-[#0af] scale-125' : 'bg-white/20'}`}></div>
              <span className="text-white/70 text-xs">Jumble</span>
            </div>
          </div>
        </div>
      )}

      {/* IRON MAN MODAL */}
      {selectedProject && (
        <IronManModal 
          project={selectedProject} 
          onClose={handleCloseModal}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      )}

      {/* Instructions - Different for mobile/tablet vs desktop */}
      <div className="text-center mt-12 sm:mt-16 text-white/80 text-sm relative z-10 px-4">
        {!isMobile && !isTablet ? (
          // DESKTOP INSTRUCTIONS
          <>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
                 style={{
                   background: 'rgba(10, 175, 255, 0.1)',
                   border: '1px solid rgba(10, 175, 255, 0.2)',
                   backdropFilter: 'blur(10px)'
                 }}>
              <div className="w-2 h-2 rounded-full bg-[#0af] animate-pulse"></div>
              <span className="text-[#0af] font-medium">HOW TO INTERACT WITH HOLOGRAPHIC ANIMATION</span>
            </div>
            
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-white/70 mb-4">
                Watch the cards perform a mesmerizing sequence: 
                <span className="text-[#0af] font-medium"> Rotate around center </span> → 
                <span className="text-[#0af] font-medium"> Come closer together </span> → 
                <span className="text-[#0af] font-medium"> Jumble and reorganize </span> → 
                <span className="text-[#0af] font-medium"> Repeat every 13 seconds</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-4 rounded-xl text-left"
                     style={{
                       background: 'rgba(10, 175, 255, 0.05)',
                       border: '1px solid rgba(10, 175, 255, 0.1)'
                     }}>
                  <div className="font-semibold text-[#0af] mb-2">Interaction</div>
                  <p className="text-white/70 text-sm">
                    • Hover over any card to focus and enlarge it<br/>
                    • Click anywhere on the card to open interface<br/>
                    • Cards maintain equal size during all animations
                  </p>
                </div>
                
                <div className="p-4 rounded-xl text-left"
                     style={{
                       background: 'rgba(10, 175, 255, 0.05)',
                       border: '1px solid rgba(10, 175, 255, 0.1)'
                     }}>
                  <div className="font-semibold text-[#0af] mb-2">Performance</div>
                  <p className="text-white/70 text-sm">
                    • Optimized for all hardware (low-end to high-end)<br/>
                    • Consistent 60 FPS animation<br/>
                    • No stuttering or lag across devices<br/>
                    • Equal card dimensions at all times
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // MOBILE/TABLET INSTRUCTIONS
          <div className="max-w-2xl mx-auto mt-8">
            <div className="p-4 rounded-xl text-center"
                 style={{
                   background: 'rgba(10, 175, 255, 0.05)',
                   border: '1px solid rgba(10, 175, 255, 0.1)'
                 }}>
              <div className="font-semibold text-[#0af] mb-3">Mobile/Tablet Mode Active</div>
              <p className="text-white/70 text-sm mb-3">
                • <span className="text-[#0af] font-medium">Desktop animations disabled</span><br/>
                • <span className="text-[#0af] font-medium">No auto-rotation</span><br/>
                • <span className="text-[#0af] font-medium">Direct touch controls</span>
              </p>
              <p className="text-white/60 text-xs">
                Cards won't switch automatically. You have full manual control.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* OPTIMIZED CSS ANIMATIONS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.1; }
          50% { transform: translateY(-8px) translateX(2px); opacity: 0.3; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse, [style*="animation"] {
            animation: none !important;
          }
        }
        
        @media (max-width: 767px) {
          button, [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(10, 175, 255, 0.2) transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar {
          width: 2px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(10, 175, 255, 0.2);
          border-radius: 1px;
        }
        
        .smooth-transition {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .equal-card {
          width: 280px !important;
          height: 340px !important;
          min-width: 280px !important;
          min-height: 340px !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;

// Completed..........................