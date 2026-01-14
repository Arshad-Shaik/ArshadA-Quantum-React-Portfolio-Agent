// // MobileSkillsCube.jsx
// import { useState, useEffect, useRef } from 'react';

// const MobileSkillsCube = ({ cubeFaces, speakSkillName }) => {
//   const [currentFace, setCurrentFace] = useState(0);
//   const [isAutoRotating, setIsAutoRotating] = useState(true);
//   const [isHovered, setIsHovered] = useState(false);
//   const intervalRef = useRef(null);

//   const faces = [
//     { key: 'front', data: cubeFaces.front },
//     { key: 'right', data: cubeFaces.right },
//     { key: 'back', data: cubeFaces.back },
//     { key: 'left', data: cubeFaces.left }
//   ];

//   const colors = {
//     front: '#00FF00',
//     right: '#0077B5', 
//     back: '#FF6B00',
//     left: '#FF00FF'
//   };

//   // Auto-rotation for mobile
//   useEffect(() => {
//     if (!isAutoRotating || isHovered) return;

//     intervalRef.current = setInterval(() => {
//       setCurrentFace(prev => (prev + 1) % 4);
//     }, 3000); // Change face every 3 seconds

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [isAutoRotating, isHovered]);

//   const handleFaceClick = (index) => {
//     setIsAutoRotating(false);
//     setCurrentFace(index);
    
//     // Resume auto-rotation after 5 seconds
//     setTimeout(() => {
//       if (!isHovered) {
//         setIsAutoRotating(true);
//       }
//     }, 5000);
//   };

//   const handleSwipe = (direction) => {
//     setIsAutoRotating(false);
//     if (direction === 'left') {
//       setCurrentFace(prev => (prev + 1) % 4);
//     } else {
//       setCurrentFace(prev => (prev - 1 + 4) % 4);
//     }
    
//     setTimeout(() => {
//       if (!isHovered) {
//         setIsAutoRotating(true);
//       }
//     }, 5000);
//   };

//   // Handle mouse enter (hover) - pause auto rotation
//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   };

//   // Handle mouse leave - resume auto rotation
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     if (isAutoRotating && !intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         setCurrentFace(prev => (prev + 1) % 4);
//       }, 3000);
//     }
//   };

//   // Function to determine if face needs minimized size
//   const needsMinimizedSize = (faceKey) => {
//     return faceKey === 'front' || faceKey === 'left'; // Front-End & Data Science faces
//   };

//   // Enhanced hover handler with proper event management and visibility check
//   const handleSkillHover = (skillName, event, isCurrentFace) => {
//     event.stopPropagation();
//     // Only speak if this is the current active face
//     if (isCurrentFace) {
//       speakSkillName(skillName);
//     }
//   };

//   // Enhanced touch handler for skills with visibility check
//   const handleSkillTouch = (skillName, event, isCurrentFace) => {
//     event.stopPropagation();
//     // Only speak if this is the current active face
//     if (isCurrentFace) {
//       speakSkillName(skillName);
//     }
//   };

//   return (
//     <div className="mobile-cube-container w-full max-w-sm mx-auto">
//       {/* Navigation Dots */}
//       <div className="flex justify-center space-x-3 mb-4">
//         {faces.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleFaceClick(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentFace === index 
//                 ? 'bg-[#00FF00] scale-125' 
//                 : 'bg-white/30'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Cube Face Display */}
//       <div 
//         className="relative w-72 h-72 mx-auto mb-4"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onTouchStart={(e) => {
//           const touch = e.touches[0];
//           const startX = touch.clientX;
          
//           const handleTouchMove = (moveEvent) => {
//             const currentTouch = moveEvent.touches[0];
//             const diffX = currentTouch.clientX - startX;
            
//             if (Math.abs(diffX) > 50) {
//               handleSwipe(diffX > 0 ? 'right' : 'left');
//               document.removeEventListener('touchmove', handleTouchMove);
//             }
//           };
          
//           document.addEventListener('touchmove', handleTouchMove, { once: true });
//         }}
//       >
//         {faces.map((face, index) => {
//           const isMinimized = needsMinimizedSize(face.key);
//           const isCurrentFace = currentFace === index;
          
//           return (
//             <div
//               key={face.key}
//               className={`absolute inset-0 bg-black/80 backdrop-blur-lg border-2 rounded-lg flex flex-col items-center justify-center transition-all duration-500 transform ${
//                 isCurrentFace
//                   ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto'
//                   : 'opacity-0 scale-90 pointer-events-none'
//               } ${index > currentFace ? 'translate-x-20' : '-translate-x-20'} ${
//                 isMinimized ? 'p-2' : 'p-4'
//               }`}
//               style={{
//                 borderColor: colors[face.key],
//                 boxShadow: `inset 0 0 30px rgba(255, 255, 255, 0.1), 0 0 30px ${colors[face.key]}`
//               }}
//             >
//               {/* Glass Reflection Effect */}
//               <div 
//                 className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-lg pointer-events-none"
//                 style={{
//                   background: `linear-gradient(135deg, transparent, ${colors[face.key]}10, transparent)`
//                 }}
//               />
              
//               <h3 
//                 className={`text-white font-bold text-center relative z-10 px-1 ${
//                   isMinimized ? 'text-sm mb-2' : 'text-base mb-3'
//                 }`}
//                 style={{ textShadow: `0 0 15px ${colors[face.key]}` }}
//               >
//                 {face.data.title}
//               </h3>
              
//               <div className={`grid grid-cols-2 w-full relative z-10 px-1 ${
//                 isMinimized ? 'gap-1' : 'gap-2'
//               }`}>
//                 {face.data.skills.map((skill, skillIndex) => (
//                   <div
//                     key={skillIndex}
//                     onMouseEnter={(e) => handleSkillHover(skill.name, e, isCurrentFace)}
//                     onTouchStart={(e) => handleSkillTouch(skill.name, e, isCurrentFace)}
//                     onClick={(e) => handleSkillTouch(skill.name, e, isCurrentFace)}
//                     className={`flex items-center bg-black/60 border border-white/20 active:bg-white/20 transition-all duration-200 ${
//                       isCurrentFace ? 'cursor-pointer' : 'cursor-default'
//                     } ${
//                       isMinimized 
//                         ? 'space-x-1 rounded-md p-1' 
//                         : 'space-x-2 rounded-lg p-2'
//                     }`}
//                     style={{
//                       borderColor: `${colors[face.key]}50`,
//                       boxShadow: `0 0 10px ${colors[face.key]}30`
//                     }}
//                   >
//                     <img 
//                       src={skill.logo} 
//                       alt={skill.name} 
//                       className={isMinimized ? "w-3 h-3" : "w-4 h-4"}
//                       onError={(e) => {
//                         e.target.style.display = 'none';
//                         if (e.target.nextSibling) {
//                           e.target.nextSibling.style.marginLeft = '0';
//                         }
//                       }}
//                     />
//                     <span className={`text-white font-medium whitespace-nowrap overflow-hidden text-ellipsis ${
//                       isMinimized ? 'text-2xs' : 'text-xs'
//                     }`}>
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Auto-rotation Indicator */}
//       <div className="text-center mb-3">
//         <div className="flex items-center justify-center space-x-2">
//           <div className={`w-2 h-2 rounded-full bg-[#00FF00] animate-pulse ${!isAutoRotating || isHovered ? 'opacity-30' : ''}`} />
//           <span className="text-white/80 text-sm">
//             {isHovered ? 'Hovering - Auto-rotation paused' : 
//              isAutoRotating ? 'Auto-rotating' : 'Paused - Tap to resume'}
//           </span>
//         </div>
//       </div>

//       {/* Swipe Instructions */}
//       <div className="text-center">
//         <p className="text-white/60 text-xs">
//           {isHovered 
//             ? "💡 Hovering - Auto-rotation paused • Hover skills for voice"
//             : "💡 Swipe left/right or tap dots to navigate • Tap skills for voice"
//           }
//         </p>
//       </div>

//       <style jsx>{`
//         .text-2xs {
//           font-size: 0.6rem;
//           line-height: 0.8rem;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MobileSkillsCube;















// MobileSkillsCube.jsx
import { useState, useEffect, useRef } from 'react';

const MobileSkillsCube = ({ cubeFaces, speakSkillName }) => {
  const [currentFace, setCurrentFace] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const lastSpokenRef = useRef({}); // Track last spoken skill to prevent duplicate speech
  const isSpeakingRef = useRef(false); // Track if currently speaking
  const containerRef = useRef(null);

  const faces = [
    { key: 'front', data: cubeFaces.front },
    { key: 'right', data: cubeFaces.right },
    { key: 'back', data: cubeFaces.back },
    { key: 'left', data: cubeFaces.left }
  ];

  const colors = {
    front: '#00FF00',
    right: '#0077B5', 
    back: '#FF6B00',
    left: '#FF00FF'
  };

  // Optimized auto-rotation without dots
  useEffect(() => {
    if (!isAutoRotating || isHovered) return;

    const rotationInterval = 3000; // 3 seconds
    
    intervalRef.current = setInterval(() => {
      setCurrentFace(prev => (prev + 1) % 4);
    }, rotationInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoRotating, isHovered]);

  // Handle swipe for mobile
  const handleSwipe = (direction) => {
    setIsAutoRotating(false);
    if (direction === 'left') {
      setCurrentFace(prev => (prev + 1) % 4);
    } else {
      setCurrentFace(prev => (prev - 1 + 4) % 4);
    }
    
    // Resume auto-rotation after 5 seconds
    const resumeTimer = setTimeout(() => {
      if (!isHovered) {
        setIsAutoRotating(true);
      }
    }, 5000);
    
    return () => clearTimeout(resumeTimer);
  };

  // Handle mouse enter (hover) - pause auto rotation
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Handle mouse leave - resume auto rotation
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isAutoRotating && !intervalRef.current) {
      setIsAutoRotating(true);
    }
  };

  // Function to determine special layout for specific faces
  const getFaceLayout = (faceKey) => {
    if (faceKey === 'front') {
      return 'small-size'; // Front-End Technologies - smaller size
    } else if (faceKey === 'left') {
      return 'three-columns'; // Data Science & Tools - 3 columns
    }
    return 'normal'; // Backend and Programming Languages - normal
  };

  // Enhanced speech function with queue system and duplicate prevention
  const speakWithQueue = (skillName) => {
    // Cancel any ongoing speech first
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    
    // Prevent duplicate speech within 2 seconds
    const now = Date.now();
    const lastSpoken = lastSpokenRef.current[skillName];
    
    if (lastSpoken && (now - lastSpoken) < 2000) {
      return; // Skip if same skill was spoken recently
    }
    
    // Update last spoken time
    lastSpokenRef.current[skillName] = now;
    
    // Mark as speaking
    isSpeakingRef.current = true;
    
    // Speak the skill name
    speakSkillName(skillName);
    
    // Reset speaking flag after a delay
    setTimeout(() => {
      isSpeakingRef.current = false;
    }, 1500);
  };

  // Optimized hover handler
  const handleSkillHover = (skillName, event, isCurrentFace) => {
    event.stopPropagation();
    event.preventDefault();
    
    // Only speak if this is the current active face
    if (isCurrentFace && !isSpeakingRef.current) {
      speakWithQueue(skillName);
    }
  };

  // Optimized touch handler for skills
  const handleSkillTouch = (skillName, event, isCurrentFace) => {
    event.stopPropagation();
    event.preventDefault();
    
    // Only speak if this is the current active face
    if (isCurrentFace && !isSpeakingRef.current) {
      speakWithQueue(skillName);
    }
  };

  // Handle click with better touch support
  const handleSkillClick = (skillName, event, isCurrentFace) => {
    event.stopPropagation();
    event.preventDefault();
    
    if (isCurrentFace && !isSpeakingRef.current) {
      speakWithQueue(skillName);
    }
  };

  // Ensure voice synthesis is available and working
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        window.skillVoices = voices;
      };
      
      loadVoices();
      
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
      }
      
      return () => {
        if (window.speechSynthesis) {
          window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
        }
      };
    }
  }, []);

  // Touch handlers for swipe
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
      const swipeThreshold = 50;
      const diffX = touchStartX - touchEndX;

      if (Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
          // Swipe left
          handleSwipe('left');
        } else {
          // Swipe right
          handleSwipe('right');
        }
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="mobile-cube-container w-full max-w-sm mx-auto px-2" ref={containerRef}>
      {/* Cube Face Display - NO DOTS */}
      <div 
        className="relative mx-auto mb-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: 'min(90vw, 380px)',
          height: 'min(90vw, 380px)',
          maxWidth: '380px',
          maxHeight: '380px'
        }}
      >
        {faces.map((face, index) => {
          const layout = getFaceLayout(face.key);
          const isCurrentFace = currentFace === index;
          
          return (
            <div
              key={face.key}
              className={`absolute inset-0 bg-black/80 backdrop-blur-lg border-2 rounded-lg flex flex-col items-center justify-start transition-all duration-500 transform ${
                isCurrentFace
                  ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto z-10'
                  : 'opacity-0 scale-90 pointer-events-none z-0'
              } ${index > currentFace ? 'translate-x-20' : '-translate-x-20'} ${
                layout === 'small-size' ? 'p-2.5' : 
                layout === 'three-columns' ? 'p-2.5' : 'p-4'
              }`}
              style={{
                borderColor: colors[face.key],
                boxShadow: `inset 0 0 30px rgba(255, 255, 255, 0.1), 0 0 30px ${colors[face.key]}`,
              }}
            >
              {/* Glass Reflection Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-lg pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, transparent, ${colors[face.key]}10, transparent)`
                }}
              />
              
              <h3 
                className={`text-white font-bold text-center relative z-10 px-1 mb-2 ${
                  layout === 'small-size' ? 'text-xs mb-1.5' : 
                  layout === 'three-columns' ? 'text-xs mb-1.5' : 'text-base mb-3'
                }`}
                style={{ textShadow: `0 0 15px ${colors[face.key]}` }}
              >
                {face.data.title}
              </h3>
              
              {/* Skills Container - Different layouts for different faces */}
              <div className={`w-full relative z-10 px-0.5 flex-grow ${
                layout === 'three-columns' ? 'overflow-y-auto' : ''
              }`}>
                <div className={`w-full ${
                  layout === 'small-size' ? 'grid grid-cols-2 gap-1' :
                  layout === 'three-columns' ? 'grid grid-cols-3 gap-1' :
                  'grid grid-cols-2 gap-2'
                }`}>
                  {face.data.skills.map((skill, skillIndex) => (
                    <button
                      key={skillIndex}
                      onMouseEnter={(e) => handleSkillHover(skill.name, e, isCurrentFace)}
                      onTouchStart={(e) => handleSkillTouch(skill.name, e, isCurrentFace)}
                      onClick={(e) => handleSkillClick(skill.name, e, isCurrentFace)}
                      className={`flex items-center justify-start bg-black/60 border border-white/20 active:bg-white/20 hover:bg-white/10 transition-all duration-200 ${
                        isCurrentFace ? 'cursor-pointer' : 'cursor-default'
                      } ${
                        layout === 'small-size' ? 'rounded p-1' :
                        layout === 'three-columns' ? 'rounded p-1 flex-col justify-center items-center' :
                        'rounded-lg p-2'
                      }`}
                      style={{
                        borderColor: `${colors[face.key]}50`,
                        boxShadow: `0 0 8px ${colors[face.key]}30`,
                        outline: 'none',
                        WebkitTapHighlightColor: 'rgba(255, 255, 255, 0.1)',
                        minHeight: layout === 'three-columns' ? 'auto' : '40px'
                      }}
                      aria-label={`${skill.name} skill`}
                    >
                      <div className={`
                        ${layout === 'small-size' ? 'w-4 h-4 flex-shrink-0 flex items-center justify-center' :
                        layout === 'three-columns' ? 'w-4 h-4 flex-shrink-0 flex items-center justify-center mb-0.5' :
                        'w-5 h-5 flex-shrink-0 flex items-center justify-center'}
                      `}>
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className={`
                            ${layout === 'small-size' ? "max-w-3 max-h-3" :
                            layout === 'three-columns' ? "max-w-4 max-h-4" :
                            "max-w-5 max-h-5"}
                          `}
                          loading="lazy"
                          onError={(e) => {
                            // If logo fails to load, show a fallback icon
                            e.target.style.display = 'none';
                            const parent = e.target.parentElement;
                            const fallback = document.createElement('div');
                            fallback.className = layout === 'small-size' ? 'w-3 h-3 bg-white/20 rounded flex items-center justify-center' :
                                              layout === 'three-columns' ? 'w-4 h-4 bg-white/20 rounded flex items-center justify-center' :
                                              'w-5 h-5 bg-white/20 rounded flex items-center justify-center';
                            const text = document.createElement('span');
                            text.className = 'text-white text-xs font-bold';
                            text.textContent = skill.name.charAt(0);
                            fallback.appendChild(text);
                            parent.appendChild(fallback);
                          }}
                        />
                      </div>
                      <span className={
                        layout === 'small-size' ? "text-white font-medium text-2xs ml-1.5 text-left flex-grow truncate" :
                        layout === 'three-columns' ? "text-white font-medium text-3xs text-center w-full mt-0.5 leading-tight" :
                        "text-white font-medium text-xs ml-2 text-left flex-grow"
                      }>
                        {skill.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Auto-rotation Indicator - No Dots */}
      <div className="text-center mb-3">
        <div className="flex items-center justify-center space-x-2">
          <div className={`w-2 h-2 rounded-full bg-[#00FF00] ${
            isAutoRotating && !isHovered ? 'animate-pulse' : 'opacity-30'
          }`} />
          <span className="text-white/80 text-sm">
            {isHovered ? 'Hovering - Auto-rotation paused' : 
             isAutoRotating ? 'Auto-rotating' : 'Paused - Tap to resume'}
          </span>
        </div>
      </div>

      {/* Instructions - Updated for no dots */}
      <div className="text-center px-2">
        <p className="text-white/60 text-xs">
          {isHovered 
            ? "💡 Hover over skills to hear them speak • Auto-rotates when not hovering"
            : "💡 Swipe left/right to navigate • Tap skills to hear them speak • Auto-rotates every 3 seconds"
          }
        </p>
      </div>

      <style jsx>{`
        /* Performance optimizations */
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .mobile-cube-container {
            transform: translateZ(0);
            backface-visibility: hidden;
            padding: 0 0.5rem;
          }
          
          .mobile-cube-container > div:first-child {
            width: min(88vw, 340px) !important;
            height: min(88vw, 340px) !important;
          }
          
          /* Adjust Data Science 3-column layout for mobile */
          .mobile-cube-container > div:first-child > div > div > div:nth-child(4) > div > div {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
        
        /* Tablet-specific optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .mobile-cube-container {
            max-width: 420px;
          }
          
          .mobile-cube-container > div:first-child {
            width: min(85vw, 360px) !important;
            height: min(85vw, 360px) !important;
          }
        }
        
        /* Custom scrollbar for skills container */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0) transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        
        /* Text size for different layouts */
        .text-2xs {
          font-size: 0.95rem;
          line-height: 0.65rem;
        }
        
        .text-3xs {
          font-size: 0.78rem;
          line-height: 0.50rem;
        }
        
        /* Ensure truncation works */
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        /* Ensure skills are properly sized */
        .leading-tight {
          line-height: 2;
        }
        
        .flex-grow {
          flex-grow: 1;
        }
        
        /* Improve image display */
        .max-w-3 {
          max-width: 12px;
        }
        
        .max-h-3 {
          max-height: 12px;
        }
        
        .max-w-4 {
          max-width: 16px;
        }
        
        .max-h-4 {
          max-height: 16px;
        }
        
        .max-w-5 {
          max-width: 20px;
        }
        
        .max-h-5 {
          max-height: 20px;
        }
      `}</style>
    </div>
  );
};

export default MobileSkillsCube;


// Completed.....................