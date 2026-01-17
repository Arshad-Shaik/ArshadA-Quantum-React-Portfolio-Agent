// Navbars.jsx
import React, { useEffect, useState, useRef } from 'react';
import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiAward } from 'react-icons/fi';
import SocialCube from './SocialCube';
import SecurityAgent from './SecurityAgent';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWelcomeCard, setShowWelcomeCard] = useState(false);
  const [isAgentActivated, setIsAgentActivated] = useState(false);
  const [navAnimation, setNavAnimation] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [batteryCharging, setBatteryCharging] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [clickedSection, setClickedSection] = useState(null);
  
  // Circuit animation states
  const [circuitActive, setCircuitActive] = useState(false);
  const [circuitPaths, setCircuitPaths] = useState([]);
  const circuitTimeoutRef = useRef(null);

  // Audio refs for sounds
  const sound1Ref = useRef(null);
  const sound2Ref = useRef(null);

  // Generate circuit paths for navbar
  const generateCircuitPaths = () => {
    const paths = [];
    const numPaths = window.innerWidth < 768 ? 3 : window.innerWidth < 1024 ? 5 : 8;
    
    for (let i = 0; i < numPaths; i++) {
      paths.push({
        id: i,
        delay: Math.random() * 2,
        duration: 1 + Math.random() * 2,
        y: Math.random() * 100,
        direction: Math.random() > 0.5 ? 'right' : 'left'
      });
    }
    
    return paths;
  };

  // Initialize circuit paths
  useEffect(() => {
    setCircuitPaths(generateCircuitPaths());
    
    const handleResize = () => {
      setCircuitPaths(generateCircuitPaths());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Circuit animation on scroll
  useEffect(() => {
    if (isScrolled && isAgentActivated && !circuitActive) {
      setCircuitActive(true);
      
      // Cycle circuit animation
      const cycleCircuit = () => {
        if (circuitTimeoutRef.current) clearTimeout(circuitTimeoutRef.current);
        
        circuitTimeoutRef.current = setTimeout(() => {
          if (isScrolled && isAgentActivated) {
            setCircuitActive(false);
            setTimeout(() => setCircuitActive(true), 500);
          }
        }, 8000); // Cycle every 8 seconds
      };
      
      cycleCircuit();
    } else if (!isScrolled) {
      setCircuitActive(false);
      if (circuitTimeoutRef.current) clearTimeout(circuitTimeoutRef.current);
    }
    
    return () => {
      if (circuitTimeoutRef.current) clearTimeout(circuitTimeoutRef.current);
    };
  }, [isScrolled, isAgentActivated]);

  // FIXED: Universal Battery Status for all browsers including Brave
  useEffect(() => {
    let batteryInterval;
    let isBraveBrowser = false;
    
    // Check if Brave browser (has specific properties)
    if (navigator.brave && typeof navigator.brave.isBrave === 'function') {
      isBraveBrowser = true;
    }
    
    const updateBatteryStatus = async () => {
      try {
        // Try Battery Status API first
        if ('getBattery' in navigator && !isBraveBrowser) {
          const battery = await navigator.getBattery();
          const level = Math.round(battery.level * 100);
          setBatteryLevel(level);
          setBatteryCharging(battery.charging);
          
          battery.addEventListener('levelchange', () => {
            const newLevel = Math.round(battery.level * 100);
            setBatteryLevel(newLevel);
          });
          
          battery.addEventListener('chargingchange', () => {
            setBatteryCharging(battery.charging);
          });
          
        } else {
          // For Brave and other browsers without Battery API
          let simulatedLevel = 85;
          let isCharging = false;
          
          // Try to get real battery info for Chrome
          if (window.navigator.getBattery) {
            try {
              const battery = await window.navigator.getBattery();
              simulatedLevel = Math.round(battery.level * 100);
              isCharging = battery.charging;
            } catch (e) {
              console.log("Falling back to simulated battery");
            }
          }
          
          setBatteryLevel(simulatedLevel);
          setBatteryCharging(isCharging);
          
          // Smart simulation for all browsers
          batteryInterval = setInterval(() => {
            setBatteryLevel(prev => {
              let newLevel;
              
              // If charging, increase battery
              if (Math.random() > 0.7) { // 30% chance of charging
                setBatteryCharging(true);
                newLevel = Math.min(100, prev + 0.5);
              } else {
                setBatteryCharging(false);
                newLevel = Math.max(0, prev - 0.2);
                
                // Reset to 85% when empty
                if (newLevel <= 0) {
                  newLevel = 85;
                  // Random charging start
                  setTimeout(() => {
                    setBatteryCharging(true);
                  }, 2000);
                }
              }
              
              return Math.round(newLevel);
            });
          }, 15000); // Update every 15 seconds for realistic feel
        }
      } catch (error) {
        console.log("Battery API error, using universal fallback:", error);
        // Universal fallback for all browsers
        let simulatedLevel = 85;
        batteryInterval = setInterval(() => {
          setBatteryLevel(prev => {
            const newLevel = Math.max(0, prev - 0.1);
            if (newLevel <= 0) return 85;
            return Math.round(newLevel);
          });
        }, 30000);
      }
    };

    updateBatteryStatus();

    return () => {
      if (batteryInterval) clearInterval(batteryInterval);
    };
  }, []);

  // FIXED: Improved scroll detection - Only update activeSection when section is actually at/near top
  useEffect(() => {
    if (!isAgentActivated) return;

    const handleScroll = () => {
      if (isNavigating) return; // Don't update active section while navigating
      
      const sections = ['about', 'skills', 'experience', 'education', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      
      let currentActive = "";
      let closestToTop = Infinity;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Calculate how close the section is to the top (after navbar)
          const distanceFromTop = Math.abs(scrollPosition - (sectionTop - navbarHeight - 20));
          
          // Check if section is in viewport (more strict check)
          // Section is considered "active" when its top is near the top of viewport
          const isSectionAtTop = 
            scrollPosition >= sectionTop - navbarHeight - 100 && 
            scrollPosition <= sectionTop - navbarHeight + 100;
          
          // Section is in viewport
          const isSectionInViewport = 
            scrollPosition + navbarHeight + 100 >= sectionTop && 
            scrollPosition + 100 <= sectionBottom;
          
          if (isSectionInViewport) {
            // Priority: section at the top > closest to top
            if (isSectionAtTop) {
              currentActive = sectionId;
              break; // Found the section at top, stop checking
            } else if (distanceFromTop < closestToTop) {
              closestToTop = distanceFromTop;
              currentActive = sectionId;
            }
          }
        }
      }

      // Only update if we found a section and it's been some time since last click
      const now = Date.now();
      if (now - lastClickTime > 300 && currentActive) {
        setActiveSection(currentActive);
        // Clear clickedSection once scroll detection picks it up
        if (clickedSection === currentActive) {
          setClickedSection(null);
        }
      }
      
      // Update scroll state for circuit animation
      setIsScrolled(window.scrollY > 50);
    };

    // Throttle scroll events
    let scrollTimeout;
    const throttledScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isAgentActivated, lastClickTime, isNavigating, clickedSection]);

  // Check if mobile/tablet view
  useEffect(() => {
    const checkMobileView = () => {
      const isMobile = window.innerWidth < 1024;
      setIsMobileView(isMobile);
    };
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  // Preload sounds
  useEffect(() => {
    // Initialize audio elements
    try {
      sound1Ref.current = new Audio('/sounds/Sound 1.mp3');
      sound2Ref.current = new Audio('/sounds/Sound 2.mp3');
      
      if (sound1Ref.current) sound1Ref.current.volume = 0.3;
      if (sound2Ref.current) sound2Ref.current.volume = 0.3;
      
      // Preload audio for faster playback
      const preloadAudio = async () => {
        try {
          if (sound1Ref.current) {
            sound1Ref.current.preload = 'auto';
          }
          if (sound2Ref.current) {
            sound2Ref.current.preload = 'auto';
          }
        } catch (error) {
          console.log("Audio preload failed, will load on play:", error);
        }
      };
      
      preloadAudio();
    } catch (error) {
      console.log("Audio initialization error:", error);
    }

    return () => {
      if (sound1Ref.current) {
        sound1Ref.current.pause();
        sound1Ref.current = null;
      }
      if (sound2Ref.current) {
        sound2Ref.current.pause();
        sound2Ref.current = null;
      }
    };
  }, []);

  // Typewriter effect
  const [quoteText, setQuoteText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typewriterStartedRef = useRef(false);
  const fullQuote = "MY GAME, MY PRESENCE";

  useEffect(() => {
    if (!isAgentActivated && !typewriterStartedRef.current) {
      typewriterStartedRef.current = true;
      setIsTyping(true);
      setQuoteText("");

      let currentIndex = 0;
      const typeWriter = () => {
        if (currentIndex < fullQuote.length) {
          setQuoteText(fullQuote.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeWriter, 80);
        } else {
          setIsTyping(false);
        }
      };
      setTimeout(typeWriter, 500);
    }

    if (isAgentActivated) {
      typewriterStartedRef.current = false;
      setIsTyping(false);
      setQuoteText("");
    }
  }, [isAgentActivated]);

  // Main effect
  useEffect(() => {
    if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
      setTimeout(() => {
        setShowWelcomeCard(true);
      }, 1000);
    }

    if (sessionStorage.getItem("isAgentActivated") === "true") {
      setIsAgentActivated(true);
      setNavAnimation(true);
    }

    window.isPortfolioAgentActivated = isAgentActivated;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAgentActivated]);

  const handleScroll = () => {
    if (isAgentActivated) {
      setIsScrolled(window.scrollY > 50);
    }
  };

  // Get female voice
  const getFemaleVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    return voices.find((voice) =>
      voice.name.toLowerCase().includes("female") ||
      voice.name.toLowerCase().includes("zira") ||
      voice.name.toLowerCase().includes("samantha")
    );
  };

  // Speak security message
  const speakSecurityMessage = () => {
    if (!window.isPortfolioAgentActivated) return;

    const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
    const msg = new SpeechSynthesisUtterance(message);

    const femaleVoice = getFemaleVoice();
    if (femaleVoice) {
      msg.voice = femaleVoice;
      msg.pitch = 1.1;
      msg.rate = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    } else {
      msg.pitch = 1.1;
      msg.rate = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    }
  };

  // Speak welcome message
  const speakWelcomeMessage = () => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    const speak = () => {
      const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
      const femaleVoice = getFemaleVoice();
      if (femaleVoice) message.voice = femaleVoice;
      message.pitch = 1.1;
      message.rate = 1;
      message.volume = 1.0;

      window.speechSynthesis.speak(message);
    };

    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', () => {
        speak();
      }, { once: true });
    } else {
      speak();
    }
  };

  // Activate portfolio agent
  const activatePortfolioAgent = () => {
    setShowWelcomeCard(false);
    setIsAgentActivated(true);
    sessionStorage.setItem("hasSeenWelcomeCard", "true");
    sessionStorage.setItem("isAgentActivated", "true");
    window.isPortfolioAgentActivated = true;

    setTimeout(() => {
      setNavAnimation(true);
    }, 300);

    setTimeout(() => {
      speakWelcomeMessage();
    }, 50);
  };

  // Speak navigation message
  const speakNavigation = (text) => {
    if (!isAgentActivated || isSpeaking || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    setIsSpeaking(true);

    const message = new SpeechSynthesisUtterance(text);
    const femaleVoice = getFemaleVoice();
    if (femaleVoice) message.voice = femaleVoice;
    message.pitch = 1.1;
    message.rate = 1;

    message.onend = () => {
      setIsSpeaking(false);
    };

    message.onerror = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(message);
  };

  // Play Sound 1 - Hamburger menu sound
  const playSound1 = () => {
    if (!sound1Ref.current) return;
    
    try {
      sound1Ref.current.currentTime = 0;
      sound1Ref.current.play().catch(e => {
        console.log("Sound 1 play failed:", e);
        // Fallback: create new audio element
        try {
          const audio = new Audio('/sounds/Sound 1.mp3');
          audio.volume = 0.3;
          audio.play();
        } catch (fallbackError) {
          console.log("Fallback audio also failed:", fallbackError);
        }
      });
    } catch (error) {
      console.log("Sound 1 audio error:", error);
    }
  };

  // Play Sound 2 - Desktop hover sound
  const playSound2 = () => {
    if (!sound2Ref.current) return;
    
    try {
      sound2Ref.current.currentTime = 0;
      sound2Ref.current.play().catch(e => {
        console.log("Sound 2 play failed:", e);
        // Fallback: create new audio element
        try {
          const audio = new Audio('/sounds/Sound 2.mp3');
          audio.volume = 0.3;
          audio.play();
        } catch (fallbackError) {
          console.log("Fallback audio also failed:", fallbackError);
        }
      });
    } catch (error) {
      console.log("Sound 2 audio error:", error);
    }
  };

  // Highlight section with border
  const highlightSectionWithBorder = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Save original styles
    const originalBorder = section.style.border;
    const originalBoxShadow = section.style.boxShadow;
    const originalTransition = section.style.transition;
    const originalPosition = section.style.position;

    // Add blue glowing border
    section.style.border = '3px solid #00ccff';
    section.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6)';
    section.style.transition = 'all 0.3s ease';
    section.style.position = 'relative';
    
    // Add pulse animation
    section.style.animation = 'agent-border-pulse 0.5s ease-in-out 4';

    // Remove after 3 seconds
    setTimeout(() => {
      section.style.border = originalBorder;
      section.style.boxShadow = originalBoxShadow;
      section.style.transition = originalTransition;
      section.style.position = originalPosition;
      section.style.animation = '';
    }, 3000);
  };

  // FIXED: Menu click handler - DON'T set activeSection immediately
  const handleMenuItemClick = (sectionId, label) => {
    console.log(`Clicked: ${sectionId} - ${label}`);
    
    if (!isAgentActivated || isNavigating) return;

    // Set navigating flag
    setIsNavigating(true);
    
    // Record click time and clicked section
    const clickTime = Date.now();
    setLastClickTime(clickTime);
    setClickedSection(sectionId); // Track which section was clicked
    
    // IMPORTANT: DO NOT setActiveSection here - let scroll detection handle it
    
    // Close mobile menu
    setIsOpen(false);
    
    // Check if user is already in the same section
    const isAlreadyInSection = activeSection === sectionId;
    
    // Speak appropriate message
    if (isAlreadyInSection) {
      speakNavigation(`You're in ${label} section`);
    } else {
      speakNavigation(`Navigating to ${label} section`);
    }
    
    // Apply blue border animation
    highlightSectionWithBorder(sectionId);
    
    // Wait for menu to close, then navigate
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      
      if (section) {
        console.log(`Section found: ${sectionId}, scrolling now...`);
        
        // Get navbar height for offset
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        
        // Calculate exact scroll position - section should touch navbar
        const sectionTop = section.offsetTop;
        const scrollPosition = Math.max(0, sectionTop - navbarHeight - 10); // 10px padding
        
        console.log(`Scrolling to position: ${scrollPosition}px (sectionTop: ${sectionTop}, navbarHeight: ${navbarHeight})`);
        
        // Scroll to position where section touches navbar
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
        
        // After scrolling is complete
        setTimeout(() => {
          console.log(`Scroll completed. Current position: ${window.scrollY}px`);
          
          // Force a scroll event to trigger active section detection
          window.dispatchEvent(new Event('scroll'));
          
          // Clear navigating flag
          setIsNavigating(false);
        }, 1000);
        
      } else {
        console.error(`Section not found: ${sectionId}`);
        setIsNavigating(false);
        setClickedSection(null);
      }
    }, 100);
  };

  // Hamburger menu click with sound
  const handleHamburgerClick = () => {
    if (!isAgentActivated) return;
    
    // PLAY SOUND 1 when hamburger menu is clicked (open/close)
    playSound1();
    
    setIsOpen(!isOpen);
  };

  // Desktop icon hover handler
  const handleDesktopIconHover = () => {
    if (!isAgentActivated || isMobileView) return;
    
    // PLAY SOUND 2 when hovering desktop icons
    playSound2();
  };

  // Logo click
  const handleLogoClick = () => {
    if (!isAgentActivated) return;
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance("Site is, restarting");
    const femaleVoice = getFemaleVoice();
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    utterance.pitch = 1.1;
    utterance.rate = 1;
    utterance.volume = 1;
    
    setIsSpeaking(true);
    
    utterance.onend = () => {
      setIsSpeaking(false);
      setTimeout(() => {
        window.location.href = "/";
      }, 300);
    };
    
    utterance.onerror = () => {
      setIsSpeaking(false);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    };
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    }
  };

  // Menu items
  const menuItems = [
    { id: "about", label: "About", icon: <FiUser size={24} /> },
    { id: "skills", label: "Skills", icon: <FiCode size={30} /> },
    { id: "experience", label: "Experience", icon: <FiBriefcase size={24} /> },
    { id: "education", label: "Education", icon: <FiBook size={24} /> },
    { id: "projects", label: "Projects", icon: <FiFolder size={24} /> },
    { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} /> },
    { id: "contact", label: "Contact", icon: <FiMail size={24} /> },
  ];

  return (
    <>
      <SecurityAgent
        isAgentActivated={isAgentActivated}
        speakSecurityMessage={speakSecurityMessage}
      />

      {/* Welcome Card */}
      {showWelcomeCard && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
          style={{ userSelect: 'none', pointerEvents: 'auto' }}
          onClick={(e) => e.stopPropagation()}>
          <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
            style={{
              userSelect: 'none',
              borderColor: '#00FF00',
              boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}>

            <div className="absolute inset-0 rounded-2xl"
              style={{
                border: '2px solid transparent',
                background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                animation: 'border-glow 3s linear infinite'
              }} />

            <div className="text-center relative z-10">
              <h3 className="text-white text-xl font-bold mb-3" style={{
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              }}>
                🎙️ Portfolio Agent
              </h3>
              <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              }}>
                Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
              </p>
              <button onClick={activatePortfolioAgent}
                className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
                style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
                Activate Agent
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lock Overlay */}
      {!isAgentActivated && (
        <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          style={{ userSelect: 'none' }}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
          <div className="text-center text-white p-8">
            <h2 className="text-2xl font-bold mb-4" style={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}>
              🔒 Portfolio Locked
            </h2>
            <p className="text-lg mb-8" style={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}>
              Please activate the Portfolio Agent to unlock all interactive features. For the complete voice-guided experience, ensure your device volume is turned up
            </p>

            <div className="mt-8">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
                style={{
                  color: '#00ccff',
                  textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
                  fontFamily: "'Arial', sans-serif",
                  letterSpacing: '1.5px',
                  padding: '0 10px',
                  display: 'inline-block',
                  maxWidth: '100%',
                  minHeight: '1.5em',
                }}>
                {quoteText}
                {isTyping && (
                  <span className="typewriter-cursor" style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1.2em',
                    backgroundColor: '#00ccff',
                    marginLeft: '2px',
                    verticalAlign: 'text-bottom',
                    animation: 'blink 1s infinite'
                  }}></span>
                )}
              </div>

              <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
                style={{
                  color: '#66ccff',
                  textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
                  fontFamily: "'Arial', sans-serif",
                  letterSpacing: '1px',
                  padding: '0 10px',
                  display: 'inline-block',
                  maxWidth: '100%',
                }}>
                - ARSHAD WASIB SHAIK
              </div>
            </div>
          </div>
        </div>
      )}

      <SocialCube />

      {/* Main Navbar */}
      <nav 
        className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'}`}
        style={{
          userSelect: 'none',
          transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* IRON MAN GLASSY CIRCUIT BACKGROUND LAYER */}
        <div className={`absolute inset-0 transition-all duration-1000 ease-out ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          {/* Base Glass Effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: isScrolled 
                ? 'linear-gradient(135deg, rgba(0, 30, 60, 0.85) 0%, rgba(0, 20, 40, 0.9) 100%)'
                : 'transparent',
              backdropFilter: isScrolled ? 'blur(15px) saturate(180%)' : 'none',
              WebkitBackdropFilter: isScrolled ? 'blur(15px) saturate(180%)' : 'none',
              border: isScrolled ? '1px solid rgba(0, 200, 255, 0.3)' : 'none',
              borderTop: 'none',
              borderBottom: isScrolled ? '2px solid rgba(0, 255, 255, 0.4)' : 'none',
              boxShadow: isScrolled 
                ? '0 0 60px rgba(0, 150, 255, 0.4), inset 0 0 40px rgba(0, 100, 200, 0.2)'
                : 'none',
            }}
          />
          
          {/* Circuit Grid Pattern */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(0deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: isMobileView ? '20px 20px' : '30px 30px',
            }}
          />
          
          {/* Animated Circuit Lines */}
          {isScrolled && circuitPaths.map((path) => (
            <div
              key={path.id}
              className="absolute h-[1px]"
              style={{
                top: `${path.y}%`,
                left: path.direction === 'left' ? '100%' : '-20%',
                width: '140%',
                background: circuitActive
                  ? 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.8), transparent)'
                  : 'transparent',
                animation: circuitActive
                  ? `circuitFlow${path.direction === 'left' ? 'Reverse' : ''} ${path.duration}s ease-in-out ${path.delay}s infinite`
                  : 'none',
                boxShadow: circuitActive ? '0 0 10px rgba(0, 255, 255, 0.8)' : 'none',
                filter: 'blur(0.5px)',
              }}
            >
              {/* Circuit Nodes */}
              {[20, 40, 60, 80].map((position) => (
                <div
                  key={position}
                  className="absolute w-1 h-1 rounded-full bg-cyan-400"
                  style={{
                    left: `${position}%`,
                    animation: circuitActive ? 'circuitNodePulse 2s infinite' : 'none',
                    animationDelay: `${position * 0.1}s`,
                    boxShadow: circuitActive ? '0 0 8px rgba(0, 255, 255, 0.9)' : 'none',
                  }}
                />
              ))}
            </div>
          ))}
          
          {/* Glowing Border Effect */}
          <div className="absolute inset-0"
            style={{
              border: isScrolled ? '1px solid transparent' : 'none',
              background: isScrolled
                ? 'linear-gradient(90deg, rgba(0, 200, 255, 0.3), rgba(0, 150, 255, 0.2), rgba(0, 200, 255, 0.3)) border-box'
                : 'transparent',
              WebkitMask: isScrolled
                ? 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)'
                : 'none',
              WebkitMaskComposite: isScrolled ? 'xor' : 'none',
              maskComposite: isScrolled ? 'exclude' : 'none',
              animation: isScrolled ? 'borderCircuitGlow 3s linear infinite' : 'none',
            }}
          />
          
          {/* Corner Circuit Nodes */}
          {isScrolled && (
            <>
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
                style={{ animationDuration: '1.5s', boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }} />
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
                style={{ animationDuration: '1.8s', boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }} />
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
                style={{ animationDuration: '2.1s', boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }} />
              <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
                style={{ animationDuration: '2.4s', boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }} />
            </>
          )}
        </div>

        {/* NAVBAR CONTENT - ALL ORIGINAL CONTENT PRESERVED */}
        <div className="relative z-10 flex flex-wrap justify-between items-center py-4 w-full">
          {/* Logo */}
          <div className="cursor-pointer mt-[-15px]" onClick={handleLogoClick}>
            <img 
              src="./hero/Shaik.png" 
              alt="Arshad" 
              className="w-26 h-26 rounded-full object-cover transition-all duration-500"
              style={{ 
                pointerEvents: 'none', 
                userSelect: 'none',
                filter: isScrolled ? 'drop-shadow(0 0 10px rgba(0, 200, 255, 0.5))' : 'none',
                border: isScrolled ? '2px solid rgba(0, 200, 255, 0.3)' : 'none'
              }} 
            />
          </div>

          {/* Hamburger Icon */}
          <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"} relative`}
            onClick={handleHamburgerClick}>
            {isOpen ? (
              <div className="relative">
                <FiX size={28} className="drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]" />
                <div className="absolute inset-0 animate-ping rounded-full bg-red-500/30" style={{ animationDuration: '1.5s' }}></div>
              </div>
            ) : (
              <div className="relative">
                <FiMenu size={28} className="drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]" />
                <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/20" style={{ animationDuration: '2s' }}></div>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
            {menuItems.map((item) => (
              <li key={item.id} className="group relative" style={{ userSelect: 'none' }}>
                <button
                  onClick={() => handleMenuItemClick(item.id, item.label)}
                  onMouseEnter={handleDesktopIconHover}
                  className={`flex items-center justify-center cursor-pointer transition-all duration-300 ${activeSection === item.id
                      ? "text-[#ff0404] scale-110 pulse-animation"
                      : "text-[#00FF00] hover:scale-110"
                    }`}
                  disabled={isNavigating}
                  style={{
                    filter: isScrolled 
                      ? activeSection === item.id
                        ? 'drop-shadow(0 0 15px rgba(255, 4, 4, 0.9))'
                        : 'drop-shadow(0 0 10px rgba(0, 255, 0, 0.7))'
                      : 'none'
                  }}
                >
                  <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
                    {React.cloneElement(item.icon, { 
                      style: { 
                        color: activeSection === item.id ? '#ff0404' : '#00FF00',
                        opacity: isNavigating ? 0.7 : 1
                      }
                    })}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {item.label}
                  </span>
                  
                  {/* Circuit Connection Line (Visible on Scroll) */}
                  {isScrolled && (
                    <div className="absolute -bottom-4 left-1/2 w-0.5 h-4 bg-gradient-to-t from-cyan-400/50 to-transparent"></div>
                  )}
                </button>
                
                {/* Active Circuit Pulse (Visible on Scroll & Active) */}
                {isScrolled && activeSection === item.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-circuitPulse"></div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed top-[72px] left-0 w-full text-[#ffff] font-extrabold py-4 px-3 space-y-3 z-40"
            style={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
              userSelect: 'none',
              background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '2px solid rgba(0, 150, 255, 0.4)',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
              position: 'fixed',
              overflowY: 'scroll',
              WebkitOverflowScrolling: 'touch',
              maxHeight: 'calc(100vh - 72px)',
              minHeight: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 200, 255, 0.6) rgba(0, 20, 60, 0.3)',
            }}>

            {/* Header with Interface Title */}
            <div className="relative p-4 border-b border-cyan-500/40"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0, 150, 255, 0.15), transparent)',
              }}>
              <div className="flex justify-between items-center">
                <div className="text-cyan-300 font-bold text-lg tracking-wider flex items-center">
                  <span className="mr-2">🔷</span> HOLOGRAPHIC INTERFACE V.2.0 <span className="ml-2">🔷</span>
                </div>
              </div>
              
              {/* System Status */}
              <div className="mt-2 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-green-400 font-mono">[⚠️] SYSTEM: ONLINE</span>
                </div>
                <div className="text-cyan-300 font-mono">
                  [{batteryCharging ? '⚡' : '🔋'}] {batteryCharging ? 'CHARGING' : 'BATTERY'} {batteryLevel}%
                </div>
              </div>
              
              {/* Universal Battery Visual - Works in all browsers */}
              <div className="mt-2 w-full bg-gray-900/50 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-1000 ease-out"
                  style={{ width: `${batteryLevel}%` }}
                >
                  {/* Animated shimmer effect */}
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
                {/* Charging indicator */}
                {batteryCharging && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-bold">
                    ⚡
                  </div>
                )}
              </div>
            </div>

            {/* Iron Man Glassy Screen Grid Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />

            {/* Glowing Border Effect */}
            <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
                animation: 'pulse 2s infinite'
              }} />

            <ul className="flex flex-col items-center space-y-3 text-center relative z-10 pb-6">
              {menuItems.map((item) => (
                <li key={item.id} className="flex items-center space-x-2 cursor-pointer w-full justify-center" style={{ userSelect: 'none' }}>
                  <button
                    onClick={() => {
                      console.log('Mobile menu button clicked:', item.id, item.label);
                      handleMenuItemClick(item.id, item.label);
                    }}
                    className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 w-full justify-center group relative ${activeSection === item.id ? "pulse-animation" : ""}`}
                    style={{
                      background: activeSection === item.id
                        ? 'rgba(255, 0, 0, 0.2)'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: activeSection === item.id
                        ? '2px solid rgba(255, 0, 0, 0.7)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: activeSection === item.id
                        ? '0 0 20px rgba(255, 0, 0, 0.7)'
                        : 'none',
                      maxWidth: '90vw',
                      minHeight: '56px',
                      color: activeSection === item.id ? '#ff0404' : '#ffffff',
                      opacity: isNavigating ? 0.7 : 1
                    }}
                    disabled={isNavigating}
                  >
                    <div className="flex items-center justify-center w-6 h-6">
                      {React.cloneElement(item.icon, { 
                        style: { 
                          color: activeSection === item.id ? '#ff0404' : '#ffffff'
                        }
                      })}
                    </div>
                    <span className="font-semibold tracking-wide text-sm sm:text-base">{item.label.toUpperCase()}</span>

                    {/* Active indicator dot */}
                    {activeSection === item.id && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    )}

                    {/* Navigation loading indicator */}
                    {isNavigating && clickedSection === item.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    {/* Circuit line for mobile */}
                    <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes border-glow {
          0% { background-position: -200% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
          }
          50% {
            opacity: 0.7;
            box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
          }
        }
        
        /* Red Pulse Animation for Active Icons */
        @keyframes pulse-red {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 4, 4, 0.8), 0 0 20px rgba(255, 0, 0, 0.6);
            transform: scale(1.1);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 4, 4, 1), 0 0 40px rgba(255, 0, 0, 0.8);
            transform: scale(1.15);
          }
        }
        
        .pulse-animation {
          animation: pulse-red 2s infinite;
        }
        
        /* Shimmer effect for battery */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
        
        /* Blue Border Pulse Animation */
        @keyframes agent-border-pulse {
          0%, 100% {
            border-color: #00ccff;
            box-shadow: 0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6);
            opacity: 1;
          }
          50% {
            border-color: #00ffff;
            box-shadow: 0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 200, 255, 0.8);
            opacity: 0.8;
          }
        }
        
        /* Spinner animation */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        /* Circuit Flow Animations */
        @keyframes circuitFlow {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(-120%);
            opacity: 0;
          }
        }
        
        @keyframes circuitFlowReverse {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(120%);
            opacity: 0;
          }
        }
        
        @keyframes circuitNodePulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 8px rgba(0, 255, 255, 0.9);
          }
          50% {
            transform: scale(1.5);
            box-shadow: 0 0 15px rgba(0, 255, 255, 1);
          }
        }
        
        @keyframes borderCircuitGlow {
          0% { background-position: -200% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes circuitPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scaleX(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }
        
        /* Performance Optimizations */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          @keyframes circuitFlow, @keyframes circuitFlowReverse {
            animation-duration: 1.5s !important;
          }
        }
        
        @media (max-width: 1023px) {
          .lg\\:hidden button {
            min-height: 56px;
            min-width: 56px;
            -webkit-tap-highlight-color: rgba(0, 200, 255, 0.3);
            touch-action: manipulation;
          }
          
          /* Landscape mode */
          @media (orientation: landscape) and (max-height: 500px) {
            .lg\\:hidden.fixed {
              max-height: 60vh !important;
            }
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .lg\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;