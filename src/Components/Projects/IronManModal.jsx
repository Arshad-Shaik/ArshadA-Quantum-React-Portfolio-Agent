
// IronManModal.jsx - FIXED: Removed voice for mobile/tablet only
import React, { useEffect, useRef, useState } from 'react';

const IronManModal = ({ project, onClose, isMobile, isTablet }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [hardwareScore, setHardwareScore] = useState(100);
  const [lockState, setLockState] = useState('locked'); // 'locked', 'unlocking', 'unlocked'
  const openSoundRef = useRef(null);
  const closeSoundRef = useRef(null);
  const buttonSoundRef = useRef(null);
  const currentSpeechRef = useRef(null);
  const hasSpokenTitleRef = useRef(false);
  const voicesLoadedRef = useRef(false);
  const modalReadyRef = useRef(false);
  const projectRef = useRef(project);
  const unlockSoundRef = useRef(null);
  const scrollContainerRef = useRef(null);
  
  // Store current project in ref to prevent stale closures
  useEffect(() => {
    projectRef.current = project;
  }, [project]);
  
  // Detect hardware performance
  useEffect(() => {
    const detectHardware = () => {
      let score = 100;
      
      if ('deviceMemory' in navigator) {
        const memory = navigator.deviceMemory || 4;
        if (memory <= 2) score -= 40;
        else if (memory <= 4) score -= 20;
      }
      
      if ('hardwareConcurrency' in navigator) {
        const cores = navigator.hardwareConcurrency || 4;
        if (cores <= 2) score -= 30;
        else if (cores <= 4) score -= 15;
      }
      
      if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection) {
          if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            score -= 25;
          } else if (connection.effectiveType === '3g') {
            score -= 10;
          }
        }
      }
      
      if (isMobile) score -= 20;
      if (isTablet) score -= 10;
      
      setHardwareScore(Math.max(20, Math.min(100, score)));
    };
    
    detectHardware();
  }, [isMobile, isTablet]);
  
  // Check if device is in landscape mode
  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  // SPEECH FUNCTION - FOR DESKTOP ONLY (Mobile/Tablet: NO SPEECH)
  const speakFullTitle = () => {
    // FOR MOBILE/TABLET: NO SPEECH AT ALL
    if (isMobile || isTablet) {
      return;
    }
    
    // FOR DESKTOP: Keep existing behavior
    if (!window.speechSynthesis || hasSpokenTitleRef.current || !projectRef.current.title) {
      return;
    }
    
    // Mark as speaking to prevent duplicates
    hasSpokenTitleRef.current = true;
    
    // Get the current project title from ref
    const currentProjectTitle = projectRef.current.title;
    
    // Create utterance with "Opening - " prefix
    const utterance = new SpeechSynthesisUtterance(`Opening - ${currentProjectTitle}`);
    currentSpeechRef.current = utterance;
    
    // Get female voice - STRICTLY FEMALE VOICE ONLY
    const getFemaleVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      
      // Priority order for female voices
      const femaleVoices = voices.filter(voice => {
        const voiceName = voice.name.toLowerCase();
        return (
          voiceName.includes('female') ||
          voiceName.includes('samantha') ||
          voiceName.includes('zira') ||
          voiceName.includes('victoria') ||
          voiceName.includes('google uk english female') ||
          voiceName.includes('microsoft zira desktop') ||
          voiceName.includes('karen') ||
          voiceName.includes('ava') ||
          voiceName.includes('allison') ||
          voiceName.includes('susan') ||
          voiceName.includes('monica')
        );
      });
      
      // Select the best female voice
      if (femaleVoices.length > 0) {
        // Prefer native-sounding voices
        const preferredVoice = femaleVoices.find(voice => 
          voice.lang.includes('en-US') || 
          voice.lang.includes('en-GB') ||
          voice.lang.includes('en')
        ) || femaleVoices[0];
        
        utterance.voice = preferredVoice;
        utterance.lang = preferredVoice.lang || 'en-US';
      } else {
        // Fallback to any available voice
        utterance.lang = 'en-US';
      }
    };
    
    getFemaleVoice();
    
    // If voices not loaded yet, wait for them
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', getFemaleVoice);
    }
    
    // Set speech parameters for clear female voice
    utterance.rate = 0.85; // Slower for clarity
    utterance.pitch = 1.1; // Slightly higher pitch for female voice
    utterance.volume = 1.0;
    
    // Speech event handlers
    utterance.onstart = () => {
      setIsSpeaking(true);
    };
    
    utterance.onend = () => {
      setIsSpeaking(false);
      currentSpeechRef.current = null;
      
      // Clean up event listener
      window.speechSynthesis.removeEventListener('voiceschanged', getFemaleVoice);
    };
    
    utterance.onerror = (event) => {
      console.log('Speech error:', event);
      setIsSpeaking(false);
      currentSpeechRef.current = null;
      
      // Clean up event listener
      window.speechSynthesis.removeEventListener('voiceschanged', getFemaleVoice);
    };
    
    // Cancel any ongoing speech before speaking
    window.speechSynthesis.cancel();
    
    // Small delay to ensure cancellation is complete
    setTimeout(() => {
      try {
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        console.error('Speech synthesis error:', error);
        setIsSpeaking(false);
      }
    }, 50);
  };

  // Initialize modal with lock/unlock sequence
  useEffect(() => {
    // Reset flags for new modal
    hasSpokenTitleRef.current = false;
    voicesLoadedRef.current = false;
    modalReadyRef.current = false;
    setContentLoaded(false);
    
    // Set modal as visible
    setModalVisible(true);
    
    // Create audio elements
    openSoundRef.current = new Audio('/sounds/Sound 1.mp3');
    closeSoundRef.current = new Audio('/sounds/Sound 2.mp3');
    buttonSoundRef.current = new Audio('/sounds/Sound 2.mp3');
    unlockSoundRef.current = new Audio('/sounds/Sound 1.mp3');
    
    // Adjust volume
    const baseVolume = hardwareScore > 70 ? 1.0 : 0.8;
    const openVolume = isMobile ? 0.25 * baseVolume : (isTablet ? 0.35 * baseVolume : 0.45 * baseVolume);
    const buttonVolume = isMobile ? 0.2 * baseVolume : (isTablet ? 0.25 * baseVolume : 0.3 * baseVolume);
    
    openSoundRef.current.volume = openVolume;
    closeSoundRef.current.volume = buttonVolume;
    buttonSoundRef.current.volume = buttonVolume;
    unlockSoundRef.current.volume = openVolume;
    
    // Preload audio
    openSoundRef.current.preload = 'auto';
    closeSoundRef.current.preload = 'auto';
    buttonSoundRef.current.preload = 'auto';
    unlockSoundRef.current.preload = 'auto';
    
    // MOBILE/TABLET: Start unlock sequence WITHOUT SPEECH
    if (isMobile || isTablet) {
      setLockState('locked');
      
      // Start unlocking animation after short delay
      setTimeout(() => {
        setLockState('unlocking');
        
        // Play unlock sound
        setTimeout(() => {
          if (unlockSoundRef.current) {
            unlockSoundRef.current.play().catch(() => {
              // Silent fail if browser blocks autoplay
            });
          }
        }, 200);
        
        // NO SPEECH FOR MOBILE/TABLET (removed the speech call)
        
        // Complete unlock and show content
        setTimeout(() => {
          setLockState('unlocked');
          modalReadyRef.current = true;
          
          // Show content immediately (no waiting for speech)
          setContentLoaded(true);
        }, 1000);
      }, 100);
    } 
    // DESKTOP: Direct open WITH SPEECH (unchanged)
    else {
      setLockState('unlocked');
      setContentLoaded(true);
      
      // Play opening sound
      const playOpeningSound = () => {
        if (openSoundRef.current) {
          const delay = hardwareScore > 70 ? 250 : 400;
          setTimeout(() => {
            openSoundRef.current.play().catch(() => {
              // Silent fail if browser blocks autoplay
            });
          }, delay);
        }
      };
      
      playOpeningSound();
      
      // Speak project title immediately for desktop
      setTimeout(() => {
        modalReadyRef.current = true;
        if (window.speechSynthesis) {
          speakFullTitle();
        }
      }, hardwareScore > 70 ? 200 : 300);
    }
    
    // Cleanup function
    return () => {
      // Cancel any speech (for desktop only)
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      currentSpeechRef.current = null;
      hasSpokenTitleRef.current = false;
      modalReadyRef.current = false;
      
      // Remove any event listeners
      window.speechSynthesis.removeEventListener('voiceschanged', speakFullTitle);
    };
  }, [project.title, isMobile, isTablet, hardwareScore]);
  
  // Handle Escape key and body scroll
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        handleCloseWithAnimation();
      }
    };
    
    window.addEventListener('keydown', handleEscapeKey);
    document.body.style.overflow = 'hidden';
    
    // Optimize scroll performance for mobile/tablet
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.webkitOverflowScrolling = 'touch';
      scrollContainerRef.current.style.overflowScrolling = 'touch';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
      
      // Stop any ongoing speech when closing (desktop only)
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      currentSpeechRef.current = null;
      hasSpokenTitleRef.current = false;
    };
  }, [onClose]);
  
  // Optimize scroll performance
  useEffect(() => {
    const handleTouchMove = (e) => {
      // Allow natural scrolling
    };
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
      
      // Enable hardware acceleration for smooth scrolling
      container.style.transform = 'translateZ(0)';
      container.style.backfaceVisibility = 'hidden';
      container.style.perspective = '1000px';
    }
    
    return () => {
      if (container) {
        container.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);
  
  // Function to play button sound
  const playButtonSound = () => {
    if (buttonSoundRef.current && hardwareScore > 40) {
      buttonSoundRef.current.currentTime = 0;
      buttonSoundRef.current.play().catch(() => {
        // Silent fail
      });
    }
  };
  
  // Function to play close sound
  const playCloseSound = () => {
    if (closeSoundRef.current && hardwareScore > 40) {
      closeSoundRef.current.currentTime = 0;
      closeSoundRef.current.play().catch(() => {
        // Silent fail
      });
    }
  };
  
  // FOR MOBILE/TABLET: NO description speech function
  // FOR DESKTOP: Keep existing description speech
  const speakDescription = () => {
    // FOR MOBILE/TABLET: Do nothing (no description speech)
    if (isMobile || isTablet) {
      return;
    }
    
    // FOR DESKTOP: Keep existing behavior
    if (!window.speechSynthesis || isSpeaking) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(project.description);
    currentSpeechRef.current = utterance;
    
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => 
      voice.name.toLowerCase().includes('female') ||
      voice.name.toLowerCase().includes('samantha') ||
      voice.name.toLowerCase().includes('zira') ||
      voice.name.toLowerCase().includes('victoria')
    );
    
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    utterance.rate = 0.95;
    utterance.pitch = 1.2;
    utterance.volume = 1.0;
    
    setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      currentSpeechRef.current = null;
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      currentSpeechRef.current = null;
    };
    
    window.speechSynthesis.speak(utterance);
  };
  
  // Function to stop description speech
  const stopDescriptionSpeech = () => {
    if (window.speechSynthesis && isSpeaking && currentSpeechRef.current) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      currentSpeechRef.current = null;
    }
  };
  
  // Handle description interaction - DIFFERENT FOR MOBILE/TABLET
  const handleDescriptionInteractionStart = () => {
    if (isMobile || isTablet) {
      return;
    }
    
    speakDescription();
  };
  
  const handleDescriptionInteractionEnd = () => {
    if (isMobile || isTablet) {
      return;
    }
    
    stopDescriptionSpeech();
  };
  
  // Handle button click with sound
  const handleButtonClick = (e, url) => {
    e.stopPropagation();
    playButtonSound();
    setTimeout(() => {
      if (url) window.open(url, '_blank', 'noopener,noreferrer');
    }, 200);
  };
  
  // Handle close with animation
  const handleCloseWithAnimation = () => {
    playCloseSound();
    stopDescriptionSpeech();
    setModalVisible(false);
    setContentLoaded(false);
    setTimeout(() => {
      onClose();
    }, hardwareScore > 70 ? 300 : 150);
  };

  return (
    <div 
      className={`ironman-modal-overlay ${modalVisible ? 'visible' : ''} ${isLandscape ? 'landscape' : ''}`}
      onClick={handleCloseWithAnimation}
    >
      <div 
        className={`ironman-modal-container ${contentLoaded ? 'loaded' : ''} ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'} ${isLandscape ? 'landscape-mode' : ''} ${hardwareScore <= 50 ? 'low-end' : hardwareScore <= 75 ? 'mid-end' : 'high-end'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="holographic-grid"></div>
        <div className="scan-lines"></div>
        
        {/* Lock/Unlock Animation for Mobile/Tablet */}
        {(isMobile || isTablet) && lockState !== 'unlocked' && (
          <div className="lock-animation-overlay">
            <div className={`lock-icon ${lockState}`}>
              {lockState === 'locked' ? '🔒' : lockState === 'unlocking' ? '🔓' : '🔓'}
            </div>
            <div className="lock-status-text">
              {lockState === 'locked' ? 'Locked' : 
               lockState === 'unlocking' ? 'Unlocking...' : 
               'Unlocked'}
            </div>
            {lockState === 'unlocking' && (
              <div className="unlock-progress-bar">
                <div className="unlock-progress-fill"></div>
              </div>
            )}
            {/* REMOVED: Speaking indicator for mobile/tablet (no voice) */}
          </div>
        )}
        
        <div className="ironman-modal-header">
          <h2 className="ironman-title">
            {project.title}
          </h2>
          <button
            onClick={handleCloseWithAnimation}
            className="ironman-close-btn"
            aria-label="Close modal"
            onMouseEnter={playButtonSound}
            onTouchStart={playButtonSound}
          >
            ✕
          </button>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="ironman-scroll-content"
        >
          <div className="ironman-content-inner">
            {/* PROJECT IMAGE CONTAINER */}
            <div className="ironman-image-container">
              <div 
                className="ironman-image-frame"
                onMouseEnter={playButtonSound}
                onTouchStart={playButtonSound}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="ironman-image"
                  loading={hardwareScore > 70 ? "lazy" : "eager"}
                  style={{
                    filter: hardwareScore <= 50 ? 'none' : 'brightness(1.05)'
                  }}
                />
                <div className="blue-overlay"></div>
              </div>
            </div>
            
            <div className="ironman-section">
              <h3 className="ironman-section-title">
                Technologies Used
              </h3>
              <div className="ironman-tags-container">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="ironman-tag"
                    onMouseEnter={playButtonSound}
                    onTouchStart={playButtonSound}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="ironman-section">
              <h3 className="ironman-section-title">
                Project Description
              </h3>
              <div 
                className="ironman-description-panel"
                onMouseEnter={isMobile || isTablet ? undefined : handleDescriptionInteractionStart}
                onMouseLeave={isMobile || isTablet ? undefined : handleDescriptionInteractionEnd}
                onTouchStart={isMobile || isTablet ? undefined : handleDescriptionInteractionStart}
                onTouchEnd={isMobile || isTablet ? undefined : handleDescriptionInteractionEnd}
              >
                <p className="ironman-description-text">
                  {project.description}
                </p>
                
                <div className={`voice-status-indicator ${isSpeaking ? 'active' : ''}`}>
                  {/* DIFFERENT TEXT FOR MOBILE/TABLET VS DESKTOP */}
                  {isMobile || isTablet 
                    ? '📄 Project Description' 
                    : (isSpeaking ? '🔊 Speaking...' : '🎤 Hover/Tap to hear')}
                </div>
              </div>
            </div>
            
            <div className="ironman-buttons-container">
              {project.github && (
                <button
                  onClick={(e) => handleButtonClick(e, project.github)}
                  onMouseEnter={playButtonSound}
                  onTouchStart={playButtonSound}
                  className="ironman-btn ironman-btn-primary"
                >
                  <span className="btn-icon">⚡</span>
                  <span className="btn-text">GitHub</span>
                </button>
              )}
              {project.live && (
                <button
                  onClick={(e) => handleButtonClick(e, project.live)}
                  onMouseEnter={playButtonSound}
                  onTouchStart={playButtonSound}
                  className="ironman-btn ironman-btn-secondary"
                >
                  <span className="btn-icon">🌐</span>
                  <span className="btn-text">Live Demo</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles with performance optimizations */}
      <style jsx>{`
        .ironman-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 10, 30, 0.95);
          backdrop-filter: ${hardwareScore > 50 ? 'blur(10px)' : 'none'};
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease-out;
          padding: ${isMobile ? '10px' : isTablet ? '15px' : '30px'};
          overflow: hidden;
          -webkit-tap-highlight-color: transparent;
          touch-action: none;
        }
        
        .ironman-modal-overlay.visible {
          opacity: 1;
        }
        
        .ironman-modal-overlay.landscape {
          padding: ${isMobile ? '5px' : '10px'};
        }
        
        /* Lock Animation Overlay */
        .lock-animation-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 20, 50, 0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 100;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .lock-icon {
          font-size: ${isMobile ? '4rem' : '5rem'};
          margin-bottom: 20px;
          transition: all 0.5s ease;
          will-change: transform;
        }
        
        .lock-icon.locked {
          animation: lockPulse 2s infinite;
        }
        
        .lock-icon.unlocking {
          animation: unlockRotate 0.8s ease-out;
        }
        
        .lock-status-text {
          color: #66d9ff;
          font-size: ${isMobile ? '1.2rem' : '1.4rem'};
          font-weight: bold;
          margin-bottom: 20px;
          text-shadow: 0 0 10px rgba(102, 217, 255, 0.5);
        }
        
        .unlock-progress-bar {
          width: ${isMobile ? '200px' : '250px'};
          height: 6px;
          background: rgba(0, 180, 255, 0.2);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 10px;
        }
        
        .unlock-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00a2ff, #00ffcc);
          border-radius: 3px;
          animation: unlockProgress 0.8s ease-out;
          width: 0%;
          will-change: width;
        }
        
        /* REMOVED: .speaking-indicator styles for mobile/tablet */
        
        @keyframes lockPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        @keyframes unlockRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes unlockProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        /* MAIN CONTAINER - Optimized for performance */
        .ironman-modal-container {
          background: ${hardwareScore > 70 ? 
            'linear-gradient(135deg, rgba(0, 40, 100, 0.95) 0%, rgba(0, 20, 60, 0.98) 50%, rgba(0, 60, 120, 0.92) 100%)' : 
            'rgba(0, 30, 70, 0.95)'};
          backdrop-filter: ${hardwareScore > 50 ? `blur(${isMobile ? '15px' : isTablet ? '20px' : '25px'}) saturate(180%)` : 'none'};
          -webkit-backdrop-filter: ${hardwareScore > 50 ? `blur(${isMobile ? '15px' : isTablet ? '20px' : '25px'}) saturate(180%)` : 'none'};
          border: 1px solid rgba(0, 180, 255, 0.4);
          border-radius: 12px;
          width: 100%;
          max-width: ${isMobile ? (isLandscape ? '95%' : '100%') : isTablet ? '90%' : '800px'};
          max-height: ${isMobile ? (isLandscape ? '95vh' : '90vh') : isTablet ? '90vh' : '85vh'};
          height: ${isMobile ? (isLandscape ? '95vh' : '90vh') : isTablet ? '90vh' : '85vh'};
          overflow: hidden;
          position: relative;
          opacity: 0;
          transform: ${isMobile ? 'translateY(20px) scale(0.95)' : 'translateY(20px) scale(0.98)'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          
          /* FOR DESKTOP: Full glowing effect */
          ${!isMobile && !isTablet ? `
            box-shadow: 0 0 100px rgba(0, 120, 255, 0.8), 
                        inset 0 0 50px rgba(0, 220, 255, 0.4),
                        0 0 0 1px rgba(255, 255, 255, 0.1);
            animation: desktopPulse 4s infinite;
            background: linear-gradient(135deg, rgba(0, 30, 70, 0.98) 0%, rgba(0, 15, 45, 0.99) 100%);
          ` : `
            /* FOR MOBILE/TABLET: Blue-ish glass effect */
            box-shadow: 0 10px 40px rgba(0, 100, 255, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.15),
                        0 0 0 1px rgba(0, 180, 255, 0.2);
          `}
        }
        
        /* Low-end hardware optimizations */
        .ironman-modal-container.low-end {
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: 0 5px 20px rgba(0, 100, 255, 0.2);
          border: 1px solid rgba(0, 150, 255, 0.3);
        }
        
        .ironman-modal-container.mid-end {
          backdrop-filter: blur(10px) saturate(160%);
          -webkit-backdrop-filter: blur(10px) saturate(160%);
        }
        
        .ironman-modal-container.loaded {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .ironman-modal-container.landscape-mode {
          max-width: ${isMobile ? '95%' : '90%'};
          max-height: 95vh;
        }
        
        /* Holographic Grid Pattern - Optimized */
        .holographic-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(0, 180, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 255, 0.1) 1px, transparent 1px);
          background-size: ${hardwareScore > 70 ? '20px 20px' : '30px 30px'};
          opacity: 0.3;
          pointer-events: none;
          z-index: 1;
        }
        
        /* Low-end: simpler grid */
        .ironman-modal-container.low-end .holographic-grid {
          background-size: 40px 40px;
          opacity: 0.2;
        }
        
        /* Scan Lines - Optimized */
        .scan-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 220, 255, 0.05) 2px,
            rgba(0, 220, 255, 0.05) 4px
          );
          opacity: 0.4;
          pointer-events: none;
          z-index: 2;
          animation: ${hardwareScore > 70 ? 'scanMove 20s linear infinite' : 'none'};
          will-change: background-position;
        }
        
        /* Low-end: static scan lines */
        .ironman-modal-container.low-end .scan-lines {
          animation: none;
          opacity: 0.2;
        }
        
        /* FOR DESKTOP ONLY: Border glow animation */
        ${(!isMobile && !isTablet) && `
          .ironman-modal-container::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 12px;
            border: 2px solid transparent;
            background: linear-gradient(90deg, transparent, rgba(0, 220, 255, 0.6), transparent) border-box;
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            animation: borderGlow 3s linear infinite;
            pointer-events: none;
          }
        `}
        
        /* HEADER - Optimized for touch */
        .ironman-modal-header {
          padding: ${isMobile ? '14px 16px' : '18px 20px'};
          border-bottom: 1px solid rgba(0, 180, 255, 0.3);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0, 40, 100, 0.7);
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: ${hardwareScore > 50 ? 'blur(10px)' : 'none'};
          -webkit-backdrop-filter: ${hardwareScore > 50 ? 'blur(10px)' : 'none'};
          touch-action: pan-y;
        }
        
        .ironman-title {
          color: #e0f7ff;
          font-size: ${isMobile ? '1.2rem' : isTablet ? '1.4rem' : '1.6rem'};
          font-weight: bold;
          margin: 0;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 10px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          
          /* FOR DESKTOP: Text glow */
          ${!isMobile && !isTablet ? `
            text-shadow: 0 0 20px rgba(0, 220, 255, 0.9);
          ` : ''}
        }
        
        .ironman-close-btn {
          background: rgba(255, 80, 80, 0.3);
          border: 1px solid rgba(255, 120, 120, 0.5);
          color: #ff9999;
          width: ${isMobile ? '34px' : '38px'};
          height: ${isMobile ? '34px' : '38px'};
          border-radius: 50%;
          font-size: ${isMobile ? '1.1rem' : '1.3rem'};
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
          backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          -webkit-backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          -webkit-tap-highlight-color: transparent;
          user-select: none;
          touch-action: manipulation;
        }
        
        .ironman-close-btn:hover,
        .ironman-close-btn:active {
          background: rgba(255, 100, 100, 0.5);
          border-color: #ff6666;
          color: #ffffff;
        }
        
        /* Low-end: simpler close button */
        .ironman-modal-container.low-end .ironman-close-btn {
          background: rgba(255, 80, 80, 0.4);
          border: 1px solid rgba(255, 120, 120, 0.6);
        }
        
        /* SCROLL CONTENT - Optimized for smooth scrolling */
        .ironman-scroll-content {
          height: calc(100% - ${isMobile ? '62px' : '74px'});
          overflow-y: auto;
          overflow-x: hidden;
          padding: ${isMobile ? '16px' : '20px'};
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 180, 255, 0.3) transparent;
          position: relative;
          z-index: 3;
          will-change: transform;
          transform: translateZ(0);
          backfaceVisibility: hidden;
          perspective: 1000px;
          -webkit-overflow-scrolling: touch !important;
          overscroll-behavior: contain;
          touch-action: pan-y;
        }
        
        .ironman-scroll-content::-webkit-scrollbar {
          width: 4px;
        }
        
        .ironman-scroll-content::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .ironman-scroll-content::-webkit-scrollbar-thumb {
          background: rgba(0, 180, 255, 0.3);
          border-radius: 2px;
        }
        
        .ironman-content-inner {
          display: flex;
          flex-direction: column;
          gap: ${isMobile ? '20px' : isTablet ? '24px' : '28px'};
          transform: translateZ(0);
        }
        
        /* IMAGE CONTAINER - Optimized */
        .ironman-image-container {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          transform: translateZ(0);
        }
        
        .ironman-image-frame {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(0, 180, 255, 0.4);
          background: rgba(0, 30, 70, 0.9);
          transform: translateZ(0);
        }
        
        .ironman-image {
          width: 100%;
          height: ${isMobile ? (isLandscape ? '200px' : '180px') : isTablet ? '250px' : '300px'};
          object-fit: cover;
          display: block;
          transform: translateZ(0);
          backfaceVisibility: hidden;
        }
        
        /* Blue overlay for image */
        .blue-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0, 100, 255, 0.1), transparent);
          pointer-events: none;
        }
        
        /* FOR DESKTOP ONLY: Image glow effect */
        ${(!isMobile && !isTablet) && `
          .ironman-image-frame::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(0, 220, 255, 0.15) 50%, transparent 70%);
            opacity: 0;
            animation: imageGlow 5s infinite;
            pointer-events: none;
          }
        `}
        
        .ironman-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
          transform: translateZ(0);
        }
        
        .ironman-section-title {
          color: #66d9ff;
          font-size: ${isMobile ? '1.1rem' : '1.25rem'};
          font-weight: bold;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          
          /* FOR DESKTOP: Text glow */
          ${!isMobile && !isTablet ? `
            text-shadow: 0 0 15px rgba(0, 220, 255, 0.7);
          ` : ''}
        }
        
        .ironman-tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          transform: translateZ(0);
        }
        
        .ironman-tag {
          background: rgba(0, 120, 255, 0.2);
          border: 1px solid rgba(0, 180, 255, 0.4);
          color: #c2eeff;
          padding: ${isMobile ? '6px 12px' : '8px 14px'};
          border-radius: 20px;
          font-size: ${isMobile ? '0.85rem' : '0.9rem'};
          transition: all 0.2s ease;
          cursor: default;
          backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          -webkit-backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          user-select: none;
          transform: translateZ(0);
        }
        
        .ironman-tag:hover,
        .ironman-tag:active {
          background: rgba(0, 180, 255, 0.3);
          border-color: #66d9ff;
          color: #ffffff;
        }
        
        /* DESCRIPTION PANEL - Optimized */
        .ironman-description-panel {
          background: rgba(0, 40, 90, 0.6);
          border: 1px solid rgba(0, 180, 255, 0.3);
          border-radius: 8px;
          padding: ${isMobile ? '16px' : '18px'};
          min-height: ${isMobile ? '100px' : '120px'};
          display: flex;
          flex-direction: column;
          gap: 12px;
          backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          -webkit-backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          transform: translateZ(0);
          overflow: hidden;
        }
        
        .ironman-description-text {
          color: #e6f7ff;
          font-size: ${isMobile ? '0.95rem' : '1rem'};
          line-height: 1.6;
          margin: 0;
          transform: translateZ(0);
        }
        
        .voice-status-indicator {
          color: #99eeff;
          font-size: ${isMobile ? '0.85rem' : '0.9rem'};
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(0, 80, 160, 0.5);
          border-radius: 6px;
          border: 1px solid rgba(0, 180, 255, 0.3);
          backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          -webkit-backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          transform: translateZ(0);
          user-select: none;
        }
        
        /* FOR DESKTOP ONLY: Active voice indicator */
        ${!isMobile && !isTablet ? `
          .voice-status-indicator.active {
            color: #00ffbb;
            background: rgba(0, 100, 80, 0.6);
            border-color: #00ffbb;
            box-shadow: 0 0 20px rgba(0, 255, 187, 0.4);
          }
        ` : ''}
        
        /* BUTTONS - Optimized for touch */
        .ironman-buttons-container {
          display: flex;
          gap: ${isMobile ? '12px' : '16px'};
          margin-top: ${isMobile ? '8px' : '16px'};
          flex-wrap: ${isMobile ? 'wrap' : 'nowrap'};
          justify-content: center;
          transform: translateZ(0);
        }
        
        .ironman-btn {
          padding: ${isMobile ? '12px 20px' : '14px 24px'};
          border: none;
          border-radius: 8px;
          font-size: ${isMobile ? '1rem' : '1.05rem'};
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: ${isMobile ? '140px' : '160px'};
          max-width: ${isMobile ? '200px' : '220px'};
          flex: ${isMobile ? '1' : '0 1 auto'};
          backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          -webkit-backdrop-filter: ${hardwareScore > 50 ? 'blur(5px)' : 'none'};
          -webkit-tap-highlight-color: transparent;
          user-select: none;
          touch-action: manipulation;
          transform: translateZ(0);
        }
        
        .btn-icon {
          font-size: ${isMobile ? '1.1rem' : '1.2rem'};
        }
        
        .btn-text {
          white-space: nowrap;
        }
        
        .ironman-btn-primary {
          background: linear-gradient(135deg, rgba(0, 140, 255, 0.9) 0%, rgba(0, 180, 255, 0.95) 100%);
          color: white;
          border: 1px solid rgba(0, 200, 255, 0.6);
        }
        
        .ironman-btn-secondary {
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.9) 0%, rgba(255, 180, 0, 0.95) 100%);
          color: white;
          border: 1px solid rgba(255, 200, 0, 0.6);
        }
        
        .ironman-btn:hover,
        .ironman-btn:active {
          transform: translateY(-2px) translateZ(0);
        }
        
        .ironman-btn-primary:hover,
        .ironman-btn-primary:active {
          background: linear-gradient(135deg, rgba(0, 160, 255, 1) 0%, rgba(0, 200, 255, 1) 100%);
          border-color: #66eeff;
        }
        
        .ironman-btn-secondary:hover,
        .ironman-btn-secondary:active {
          background: linear-gradient(135deg, rgba(255, 160, 0, 1) 0%, rgba(255, 200, 0, 1) 100%);
          border-color: #ffee66;
        }
        
        /* Low-end: simpler buttons */
        .ironman-modal-container.low-end .ironman-btn {
          background: rgba(0, 140, 255, 0.9);
          border: 1px solid rgba(0, 180, 255, 0.7);
        }
        
        .ironman-modal-container.low-end .ironman-btn-secondary {
          background: rgba(255, 140, 0, 0.9);
          border: 1px solid rgba(255, 180, 0, 0.7);
        }
        
        /* FOR DESKTOP ONLY: Button shadows */
        ${!isMobile && !isTablet ? `
          .ironman-btn:hover,
          .ironman-btn:active {
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
            transform: translateY(-2px) scale(1.05) translateZ(0);
          }
          
          .ironman-btn-primary:hover,
          .ironman-btn-primary:active {
            box-shadow: 0 12px 25px rgba(0, 120, 255, 0.5);
          }
          
          .ironman-btn-secondary:hover,
          .ironman-btn-secondary:active {
            box-shadow: 0 12px 25px rgba(255, 120, 0, 0.5);
          }
        ` : ''}
        
        /* ANIMATIONS - Optimized */
        @keyframes scanMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100px;
          }
        }
        
        /* DESKTOP ANIMATIONS ONLY */
        ${!isMobile && !isTablet ? `
          @keyframes desktopPulse {
            0%, 100% { box-shadow: 0 0 150px rgba(0, 120, 255, 1), inset 0 0 75px rgba(0, 220, 255, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1); }
            50% { box-shadow: 0 0 180px rgba(0, 120, 255, 1), inset 0 0 90px rgba(0, 220, 255, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.15); }
          }
          
          @keyframes borderGlow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          
          @keyframes imageGlow {
            0%, 100% { opacity: 0; transform: translateX(-100%); }
            50% { opacity: 0.6; }
            100% { opacity: 0; transform: translateX(100%); }
          }
        ` : ''}
        
        /* Performance optimizations for mobile/tablet */
        @media (hover: none) and (pointer: coarse) {
          .ironman-tag:hover,
          .ironman-btn:hover,
          .ironman-close-btn:hover {
            transform: none;
          }
          
          .ironman-btn:active,
          .ironman-close-btn:active {
            transform: scale(0.95);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .ironman-buttons-container {
            flex-direction: ${isLandscape ? 'row' : 'column'};
          }
          
          .ironman-btn {
            flex: ${isLandscape ? '1' : '1 0 auto'};
            min-width: ${isLandscape ? '120px' : '140px'};
          }
        }
        
        @media (max-width: 480px) {
          .ironman-modal-container {
            max-height: ${isLandscape ? '95vh' : '88vh'};
          }
          
          .ironman-scroll-content {
            height: calc(${isLandscape ? '95vh' : '88vh'} - 62px);
            padding: 14px;
          }
          
          .ironman-content-inner {
            gap: 16px;
          }
          
          .ironman-title {
            font-size: 1.1rem;
          }
          
          .ironman-description-text {
            font-size: 0.9rem;
          }
          
          .ironman-btn {
            min-width: 120px;
            max-width: 160px;
            padding: 11px 16px;
          }
          
          .lock-icon {
            font-size: 3.5rem;
          }
        }
        
        /* Landscape specific optimizations */
        @media (orientation: landscape) and (max-height: 600px) {
          .ironman-modal-container {
            max-height: 92vh;
          }
          
          .ironman-scroll-content {
            height: calc(92vh - 62px);
            padding: 12px;
          }
          
          .ironman-content-inner {
            gap: 12px;
          }
          
          .ironman-image {
            height: 140px;
          }
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .ironman-modal-container,
          .ironman-tag,
          .ironman-btn,
          .ironman-description-panel,
          .lock-icon,
          .unlock-progress-fill,
          .scan-lines {
            transition: none;
            animation: none;
          }
          
          .ironman-modal-container.desktop {
            animation: none;
          }
        }
        
        /* Focus styles for accessibility */
        .ironman-btn:focus-visible,
        .ironman-close-btn:focus-visible {
          outline: 3px solid #00eeff;
          outline-offset: 2px;
        }
        
        /* Disable text selection for better UX */
        .ironman-modal-container {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .ironman-description-text {
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }
      `}</style>
    </div>
  );
};

export default IronManModal;