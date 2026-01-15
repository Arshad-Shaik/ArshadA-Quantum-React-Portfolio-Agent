
// Footer.jsx - WITH CUSTOM QUANTUM REACT ICON
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaRocket,
  FaCode,
  FaRobot,
  FaQuoteRight,
  FaRegCopy,
  FaCheck,
  FaCircle,
  FaArrowUp,
  FaHome,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaAddressBook,
  FaBolt,
  FaAtom,
  FaMicrochip
} from 'react-icons/fa';
import { SiReact, SiVite, SiJavascript } from 'react-icons/si';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [activeIcon, setActiveIcon] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);
  const audioRef = useRef(null);
  const speechSynthesisRef = useRef(null);

  // QUOTES ARRAY - Your quote + Famous dev quotes
  const quotes = [
    // YOUR QUOTE (Always appears after others)
    {
      text: "My Game, My Presence | Quantum React × AI-Prompt Engineering | - Arshad Wasib Shaik",
      type: "personal",
      author: "Arshad Wasib Shaik"
    },
    // Famous Dev Quotes
    {
      text: "Any application that can be written in JavaScript, will eventually be written in JavaScript | Atwood's Law | - Jeff Atwood",
      type: "dev",
      author: "Jeff Atwood"
    },
    {
      text: "The best way to predict the future is to invent it | Innovation Principle | - Alan Kay",
      type: "dev",
      author: "Alan Kay"
    },
    {
      text: "First, solve the problem. Then, write the code | Programming Wisdom | - John Johnson",
      type: "dev",
      author: "John Johnson"
    },
    {
      text: "The only way to learn a new programming language is by writing programs in it | Learning Method | - Dennis Ritchie",
      type: "dev", 
      author: "Dennis Ritchie"
    },
    {
      text: "Premature optimization is the root of all evil | Code Optimization | - Donald Knuth",
      type: "dev",
      author: "Donald Knuth"
    }
  ];

  // Social links - UPDATED WITH YOUR ACTUAL LINKS
  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/arshadshaik41ashu",
      color: "#0077B5",
      pulseColor: "#0077B5",
      className: "pulse-linkedin"
    },
    { 
      icon: <FaGithub />, 
      label: "GitHub", 
      url: "https://github.com/Arshad-Shaik",
      color: "#ffffff",
      pulseColor: "#ffffff",
      className: "pulse-github"
    }
  ];

  // Dock icons data
  const dockIcons = [
    {
      id: 'home',
      icon: <FaHome style={{ color: '#00FF00', fontSize: '20px' }} />,
      label: 'Home',
      description: 'Back to Top'
    },
    {
      id: 'experience',
      icon: <FaBriefcase style={{ color: '#00FF00', fontSize: '20px' }} />,
      label: 'Experience',
      description: 'Work History'
    },
    {
      id: 'education',
      icon: <FaGraduationCap style={{ color: '#00FF00', fontSize: '20px' }} />,
      label: 'Education',
      description: 'Qualifications'
    },
    {
      id: 'skills',
      icon: <FaCode style={{ color: '#00FF00', fontSize: '20px' }} />,
      label: 'Skills',
      description: 'Tech Stack'
    },
    {
      id: 'projects',
      icon: <FaRocket style={{ color: '#00FF00', fontSize: '20px' }} />,
      label: 'Projects',
      description: 'My Work'
    },
    {
      id: 'contact',
      icon: <FaAddressBook style={{ color: '#00FF00', fontSize: '20px' }} />,
      label: 'Contact',
      description: 'Get in Touch'
    },
    {
      id: 'ai',
      icon: <FaRobot style={{ color: '#00FF00', fontSize: '20px' }} />,
      label: 'AI Agent',
      description: 'Meet Aashisyaa'
    },
  ];

  // CUSTOM QUANTUM REACT ICON COMPONENT
  const QuantumReactIcon = () => (
    <div 
      className="quantum-react-icon-container" 
      title="Quantum React Developer"
      onMouseEnter={() => speakMessage("Quantum React Developer - Next-gen React Innovation")}
      onClick={() => speakMessage("Quantum React Developer - Next-gen React Innovation")}
    >
      <div className="quantum-react-icon">
        {/* React Atom Core */}
        <div className="atom-core"></div>
        
        {/* Electron Orbits - 3 levels like React logo */}
        <div className="orbit orbit-1">
          <div className="electron"></div>
          <div className="quantum-wave"></div>
        </div>
        <div className="orbit orbit-2">
          <div className="electron"></div>
          <div className="quantum-wave"></div>
        </div>
        <div className="orbit orbit-3">
          <div className="electron"></div>
          <div className="quantum-wave"></div>
        </div>
        
        {/* Circuit Board Pattern */}
        <div className="circuit-lines">
          <div className="circuit-line horizontal"></div>
          <div className="circuit-line vertical"></div>
          <div className="circuit-line diagonal-1"></div>
          <div className="circuit-line diagonal-2"></div>
        </div>
        
        {/* Quantum Particles */}
        <div className="quantum-particle particle-1"></div>
        <div className="quantum-particle particle-2"></div>
        <div className="quantum-particle particle-3"></div>
        <div className="quantum-particle particle-4"></div>
        
        {/* Energy Waves */}
        <div className="energy-wave wave-1"></div>
        <div className="energy-wave wave-2"></div>
        <div className="energy-wave wave-3"></div>
      </div>
    </div>
  );

  // AI Prompt Engineering Icon
  const AIPromptIcon = () => (
    <div 
      className="ai-prompt-icon" 
      title="AI Prompt Engineering"
      onMouseEnter={() => speakMessage("AI Prompt Engineering - Intelligent Automation")}
      onClick={() => speakMessage("AI Prompt Engineering - Intelligent Automation")}
    >
      <div className="ai-icon-core">
        <FaRobot className="ai-robot" />
        <div className="prompt-lines">
          <div className="prompt-line"></div>
          <div className="prompt-line"></div>
          <div className="prompt-line"></div>
        </div>
        <div className="neural-network">
          <div className="neuron"></div>
          <div className="neuron"></div>
          <div className="neuron"></div>
          <div className="neural-connection"></div>
        </div>
      </div>
    </div>
  );

  // Full Stack Innovator Icon
  const FullStackIcon = () => (
    <div 
      className="full-stack-icon" 
      title="Full Stack Innovator"
      onMouseEnter={() => speakMessage("Full Stack Innovator - End-to-End Solutions")}
      onClick={() => speakMessage("Full Stack Innovator - End-to-End Solutions")}
    >
      <div className="stack-layers">
        <div className="layer frontend">
          <FaCode />
          <span>FE</span>
        </div>
        <div className="layer backend">
          <FaMicrochip />
          <span>BE</span>
        </div>
        <div className="layer devops">
          <FaRocket />
          <span>DevOps</span>
        </div>
      </div>
      <div className="innovation-spark">
        <FaBolt />
      </div>
    </div>
  );

  // Initialize audio for sound effects
  useEffect(() => {
    audioRef.current = new Audio('/sounds/Sound 2.mp3');
    audioRef.current.volume = 0.3; // Set volume to 30%
    
    // Initialize speech synthesis
    speechSynthesisRef.current = window.speechSynthesis;
    
    // Cancel any ongoing speech when component unmounts
    return () => {
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
    };
  }, []);

  // Play sound effect for dock icons
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  // Speak message using Speech Synthesis
  const speakMessage = (message) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const speech = new SpeechSynthesisUtterance(message);
      const voice = getFemaleVoice();
      
      if (voice) {
        speech.voice = voice;
        speech.pitch = 1.1;
      }
      speech.rate = 1.0;
      speech.volume = 1.0;
      
      // Speak the message
      window.speechSynthesis.speak(speech);
    }
  };

  // Get female voice for AI agent
  const getFemaleVoice = () => {
    if ('speechSynthesis' in window) {
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('female') ||
        voice.name.toLowerCase().includes('samantha') ||
        voice.name.toLowerCase().includes('zira') ||
        voice.name.toLowerCase().includes('google uk english female') ||
        voice.name.toLowerCase().includes('microsoft zira')
      );
      return femaleVoice || voices[0];
    }
    return null;
  };

  // Speak "Available for hire" message with female voice
  const speakAvailableForHire = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const speech = new SpeechSynthesisUtterance("Arshad Shaik is Available for hire");
      const femaleVoice = getFemaleVoice();
      
      if (femaleVoice) {
        speech.voice = femaleVoice;
        speech.pitch = 1.1;
      }
      speech.rate = 1.0;
      speech.volume = 1.0;
      
      // Speak the message
      window.speechSynthesis.speak(speech);
    }
  };

  // Handle icon clicks with sound
  const handleIconClick = (iconId) => {
    playSound();
    setActiveIcon(iconId);
    
    switch(iconId) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
        
      case 'experience':
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        break;
        
      case 'education':
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        break;
        
      case 'skills':
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        break;
        
      case 'projects':
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;
        
      case 'contact':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
        
      case 'ai':
        if ('speechSynthesis' in window) {
          const speech = new SpeechSynthesisUtterance(
            "Greetings! I'm Aashisyaa, Arshad's AI portfolio agent. Quantum React meets AI innovation in his work!"
          );
          const femaleVoice = getFemaleVoice();
          if (femaleVoice) {
            speech.voice = femaleVoice;
            speech.pitch = 1.1;
          }
          speech.rate = 0.9;
          speech.volume = 1.0;
          window.speechSynthesis.speak(speech);
        }
        break;
    }
    
    setTimeout(() => setActiveIcon(null), 1000);
  };

  // Handle social link clicks with voice messages
  const handleSocialClick = (e, social) => {
    e.preventDefault();
    
    // Cancel any ongoing speech
    if (speechSynthesisRef.current) {
      speechSynthesisRef.current.cancel();
    }
    
    // Speak the opening message
    if (social.label === "GitHub") {
      speakMessage("Opening GitHub");
      // Small delay before actual navigation
      setTimeout(() => {
        window.open(social.url, '_blank');
      }, 800);
    } else if (social.label === "LinkedIn") {
      speakMessage("Opening LinkedIn");
      // Small delay before actual navigation
      setTimeout(() => {
        window.open(social.url, '_blank');
      }, 800);
    }
  };

  // Custom rotation logic
  const rotateQuotes = () => {
    setActiveQuote((prev) => {
      if (quotes[prev].type === "dev") {
        const nextIndex = (prev + 1) % quotes.length;
        if (quotes[nextIndex].type === "dev" && Math.random() > 0.7) {
          return quotes.findIndex(q => q.type === "personal");
        }
        return nextIndex;
      }
      return quotes.findIndex(q => q.type === "dev");
    });
  };

  // Initialize time and quotes rotation
  useEffect(() => {
    const quoteInterval = setInterval(rotateQuotes, 8000);
    return () => clearInterval(quoteInterval);
  }, []);

  // Get tech stack icons
  const getTechIcons = () => (
    <div className="tech-icons">
      <SiReact title="React" />
      <SiVite title="Vite" />
      <SiJavascript title="JavaScript" />
      <FaRobot title="AI" />
    </div>
  );

  return (
    <footer className="cosmic-dock-footer">
      {/* Animated Background Particles */}
      <div className="particle-field">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0.3
            }}
            animate={{
              x: [null, Math.random() * 100 + 'vw'],
              y: [null, Math.random() * 100 + 'vh'],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="footer-glow"></div>

      {/* Main Container */}
      <div className="footer-container">
        
        {/* Quote Display */}
        <div className="quote-section">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="quote-container"
            >
              <FaQuoteRight className="quote-icon" />
              <p className="quote-text">"{quotes[activeQuote].text}"</p>
              <div className="quote-tag">
                {quotes[activeQuote].type === "personal" ? (
                  <span className="personal-tag">My Quote</span>
                ) : (
                  <span className="dev-tag">Dev Wisdom</span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Specialties Section with Custom Icons */}
          <div className="specialties-section">
            <div className="specialties-container">
              {/* Quantum React Developer */}
              <div className="specialty-item">
                <div className="specialty-icon">
                  <QuantumReactIcon />
                </div>
                <div className="specialty-info">
                  <h4 className="specialty-title">Quantum React Developer</h4>
                  <p className="specialty-desc">Next-gen React innovation</p>
                </div>
              </div>
              
              <div className="specialty-separator"></div>
              
              {/* AI Prompt Engineering */}
              <div className="specialty-item">
                <div className="specialty-icon">
                  <AIPromptIcon />
                </div>
                <div className="specialty-info">
                  <h4 className="specialty-title">AI Prompt Engineering</h4>
                  <p className="specialty-desc">Intelligent automation</p>
                </div>
              </div>
              
              <div className="specialty-separator"></div>
              
              {/* Full Stack Innovator */}
              <div className="specialty-item">
                <div className="specialty-icon">
                  <FullStackIcon />
                </div>
                <div className="specialty-info">
                  <h4 className="specialty-title">Full Stack Innovator</h4>
                  <p className="specialty-desc">End-to-end solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cosmic Dock with Navbar-style Icons */}
        <div className="cosmic-dock">
          {dockIcons.map((item) => (
            <motion.div
              key={item.id}
              className={`dock-icon-container ${activeIcon === item.id ? 'active' : ''} ${item.className || ''}`}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleIconClick(item.id)}
            >
              {/* Icon */}
              <div className="dock-icon">
                <span className="icon-symbol">{item.icon}</span>
                
                {/* Status Ring */}
                <motion.div
                  className="status-ring"
                  animate={{
                    scale: activeIcon === item.id ? [1, 1.2, 1] : 1
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Active Glow */}
                {activeIcon === item.id && (
                  <motion.div
                    className="active-glow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 2 }}
                    exit={{ scale: 0 }}
                  />
                )}
              </div>
              
              {/* Label Tooltip */}
              <motion.div
                className="tooltip"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                <span className="tooltip-label">{item.label}</span>
                <span className="tooltip-desc">{item.description}</span>
                
                {/* Special Indicators */}
                {item.id === 'email' && copiedEmail && (
                  <span className="copied-indicator">
                    <FaCheck /> Copied!
                  </span>
                )}
              </motion.div>
              
              {/* Connection Line */}
              {item.id !== 'scrolltop' && (
                <div className="connection-line"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Info Bar */}
        <div className="info-bar">
          <div className="info-left">
            <span className="copyright">
              © {currentYear} Arshad Wasib Shaik
            </span>
            <span className="separator">•</span>
            <span className="tech-stack">
              Built with {getTechIcons()} & quantum particles
            </span>
          </div>
          
          <div className="info-right">
            <motion.span 
              className="status-indicator"
              onMouseEnter={speakAvailableForHire}
              onClick={speakAvailableForHire}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: 'pointer' }}
            >
              <FaCircle className="status-dot" />
              <span className="status-text">Available for hire</span>
            </motion.span>
          </div>
        </div>

        {/* Social Quicklinks with Voice Messages */}
        <div className="social-quicklinks">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link ${social.className}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: social.color }}
              onClick={(e) => handleSocialClick(e, social)}
            >
              <span className="social-icon-wrapper">
                {social.icon}
                {/* Pulse Effect */}
                <motion.div
                  className="social-pulse"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundColor: social.pulseColor
                  }}
                />
              </span>
              <span className="social-label">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .cosmic-dock-footer {
          position: relative;
          background: linear-gradient(
            180deg,
            rgba(10, 10, 26, 0.97) 0%,
            rgba(15, 10, 35, 0.97) 100%
          );
          border-top: 1px solid rgba(0, 170, 255, 0.3);
          backdrop-filter: blur(15px);
          padding: 25px 0 20px;
          overflow: hidden;
          margin-top: 60px;
        }

        .particle-field {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(0, 170, 255, 0.7);
          border-radius: 50%;
          filter: blur(0.5px);
        }

        .footer-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(0, 170, 255, 0.6), 
            transparent
          );
          animation: glowMove 3s infinite linear;
        }

        @keyframes glowMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .footer-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Quote Section */
        .quote-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
          border: 1px solid rgba(0, 170, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .quote-container {
          flex: 1;
          position: relative;
          padding-left: 40px;
          min-height: 80px;
        }

        .quote-icon {
          position: absolute;
          left: 0;
          top: 0;
          color: #00aaff;
          font-size: 28px;
          filter: drop-shadow(0 0 10px rgba(0, 170, 255, 0.5));
        }

        .quote-text {
          color: white;
          font-size: 15px;
          font-weight: 500;
          margin: 0 0 10px 0;
          line-height: 1.5;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .quote-tag {
          display: flex;
          gap: 10px;
        }

        .personal-tag {
          background: linear-gradient(135deg, #00aaff, #6b46c1);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .dev-tag {
          background: linear-gradient(135deg, #6b46c1, #00aaff);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* Specialties Section with Custom Icons */
        .specialties-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(0, 170, 255, 0.1);
          padding: 15px 20px;
          border-radius: 15px;
          border: 1px solid rgba(0, 170, 255, 0.3);
          min-width: 350px;
        }

        .specialties-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 15px;
        }

        .specialty-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          text-align: center;
          cursor: pointer;
        }

        .specialty-icon {
          width: 50px;
          height: 50px;
          position: relative;
          margin-bottom: 8px;
          cursor: pointer;
        }

        .specialty-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .specialty-title {
          color: #00FF00;
          font-size: 12px;
          font-weight: 800;
          margin: 0;
          line-height: 1.2;
          text-shadow: 0 0 8px rgba(0, 255, 0, 0.5);
        }

        .specialty-desc {
          color: rgba(255, 255, 255, 0.8);
          font-size: 10px;
          font-weight: 500;
          margin: 0;
          letter-spacing: 0.3px;
        }

        .specialty-separator {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(0, 255, 0, 0.5), transparent);
        }

        /* ========================= */
        /* CUSTOM QUANTUM REACT ICON */
        /* ========================= */
        .quantum-react-icon-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .quantum-react-icon {
          position: relative;
          width: 45px;
          height: 45px;
          animation: quantumFloat 3s infinite ease-in-out;
        }

        @keyframes quantumFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }

        /* Atom Core */
        .atom-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, #00FFFF 0%, #0077FF 70%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 15px #00FFFF, 0 0 30px #0077FF;
          z-index: 10;
        }

        /* Electron Orbits */
        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 50%;
          transform-origin: center;
        }

        .orbit-1 {
          width: 30px;
          height: 30px;
          margin-top: -15px;
          margin-left: -15px;
          animation: orbitSpin 6s linear infinite;
        }

        .orbit-2 {
          width: 40px;
          height: 20px;
          margin-top: -10px;
          margin-left: -20px;
          animation: orbitSpin 8s linear infinite reverse;
        }

        .orbit-3 {
          width: 20px;
          height: 40px;
          margin-top: -20px;
          margin-left: -10px;
          animation: orbitSpin 10s linear infinite;
        }

        @keyframes orbitSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Electrons */
        .electron {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #00FFFF;
          border-radius: 50%;
          top: -3px;
          left: 50%;
          margin-left: -3px;
          box-shadow: 0 0 10px #00FFFF;
          animation: electronGlow 1.5s infinite alternate;
        }

        @keyframes electronGlow {
          0% { box-shadow: 0 0 5px #00FFFF; transform: scale(1); }
          100% { box-shadow: 0 0 15px #00FFFF; transform: scale(1.2); }
        }

        /* Quantum Waves */
        .quantum-wave {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid transparent;
          border-top-color: rgba(0, 255, 255, 0.5);
          animation: wavePulse 2s infinite;
        }

        @keyframes wavePulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.5; }
        }

        /* Circuit Lines */
        .circuit-lines {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .circuit-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #8A2BE2, transparent);
          opacity: 0.3;
        }

        .circuit-line.horizontal {
          top: 50%;
          left: 10%;
          right: 10%;
          height: 1px;
        }

        .circuit-line.vertical {
          left: 50%;
          top: 10%;
          bottom: 10%;
          width: 1px;
        }

        .circuit-line.diagonal-1 {
          top: 10%;
          left: 10%;
          width: 70%;
          height: 1px;
          transform: rotate(45deg);
          transform-origin: left top;
        }

        .circuit-line.diagonal-2 {
          bottom: 10%;
          left: 10%;
          width: 70%;
          height: 1px;
          transform: rotate(-45deg);
          transform-origin: left bottom;
        }

        /* Quantum Particles */
        .quantum-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #00FFFF;
          border-radius: 50%;
          box-shadow: 0 0 8px #00FFFF;
          z-index: 5;
        }

        .particle-1 {
          top: 20%;
          left: 20%;
          animation: particleFloat 4s infinite ease-in-out;
        }

        .particle-2 {
          top: 60%;
          right: 20%;
          animation: particleFloat 5s infinite ease-in-out 0.5s;
        }

        .particle-3 {
          bottom: 20%;
          left: 40%;
          animation: particleFloat 6s infinite ease-in-out 1s;
        }

        .particle-4 {
          top: 40%;
          right: 40%;
          animation: particleFloat 7s infinite ease-in-out 1.5s;
        }

        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0.7; }
          25% { transform: translate(5px, -5px); opacity: 1; }
          50% { transform: translate(-5px, 5px); opacity: 0.7; }
          75% { transform: translate(3px, -3px); opacity: 1; }
        }

        /* Energy Waves */
        .energy-wave {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1px solid rgba(0, 255, 255, 0.2);
          transform: translate(-50%, -50%);
        }

        .wave-1 {
          width: 45px;
          height: 45px;
          animation: waveExpand 3s infinite;
        }

        .wave-2 {
          width: 40px;
          height: 40px;
          animation: waveExpand 3s infinite 0.5s;
        }

        .wave-3 {
          width: 35px;
          height: 35px;
          animation: waveExpand 3s infinite 1s;
        }

        @keyframes waveExpand {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }

        /* ======================== */
        /* AI PROMPT ENGINEERING ICON */
        /* ======================== */
        .ai-prompt-icon {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .ai-icon-core {
          position: relative;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ai-robot {
          color: #00FF00;
          font-size: 24px;
          filter: drop-shadow(0 0 8px rgba(0, 255, 0, 0.5));
          animation: robotPulse 2s infinite;
        }

        @keyframes robotPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .prompt-lines {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        .prompt-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #00FF00, transparent);
          height: 1px;
          opacity: 0.6;
          animation: promptFlow 2s infinite;
        }

        .prompt-line:nth-child(1) {
          top: 30%;
          left: 0;
          right: 0;
          animation-delay: 0s;
        }

        .prompt-line:nth-child(2) {
          top: 50%;
          left: 0;
          right: 0;
          animation-delay: 0.3s;
        }

        .prompt-line:nth-child(3) {
          top: 70%;
          left: 0;
          right: 0;
          animation-delay: 0.6s;
        }

        @keyframes promptFlow {
          0% { opacity: 0.3; transform: translateX(-20px); }
          50% { opacity: 0.8; }
          100% { opacity: 0.3; transform: translateX(20px); }
        }

        .neural-network {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .neuron {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00FF00;
          border-radius: 50%;
          box-shadow: 0 0 6px #00FF00;
        }

        .neuron:nth-child(1) { top: 10%; left: 10%; }
        .neuron:nth-child(2) { top: 80%; right: 10%; }
        .neuron:nth-child(3) { bottom: 10%; left: 50%; }

        .neural-connection {
          position: absolute;
          top: 10%;
          left: 10%;
          right: 10%;
          bottom: 10%;
          border: 1px solid rgba(0, 255, 0, 0.2);
          border-radius: 50%;
          animation: neuralPulse 3s infinite;
        }

        @keyframes neuralPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }

        /* ===================== */
        /* FULL STACK INNOVATOR ICON */
        /* ===================== */
        .full-stack-icon {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .stack-layers {
          position: relative;
          width: 40px;
          height: 40px;
        }

        .layer {
          position: absolute;
          width: 30px;
          height: 30px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 170, 255, 0.4);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          color: #00aaff;
          font-size: 10px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .layer.frontend {
          top: 0;
          left: 0;
          animation: layerFloat 4s infinite;
        }

        .layer.backend {
          top: 5px;
          left: 5px;
          z-index: 1;
          animation: layerFloat 4s infinite 0.5s;
        }

        .layer.devops {
          top: 10px;
          left: 10px;
          z-index: 2;
          animation: layerFloat 4s infinite 1s;
        }

        @keyframes layerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .layer svg {
          font-size: 12px;
        }

        .innovation-spark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #FFD700;
          font-size: 16px;
          filter: drop-shadow(0 0 10px #FFD700);
          animation: sparkle 1.5s infinite alternate;
        }

        @keyframes sparkle {
          0% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }

        /* Cosmic Dock */
        .cosmic-dock {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-bottom: 30px;
          position: relative;
          overflow-x: auto;
          padding: 10px 0;
        }

        .dock-icon-container {
          position: relative;
          cursor: pointer;
          padding: 8px;
        }

        .dock-icon {
          position: relative;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(0, 255, 0, 0.3);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .dock-icon:hover {
          background: rgba(0, 255, 0, 0.15);
          border-color: rgba(0, 255, 0, 0.6);
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 255, 0, 0.3);
        }

        .dock-icon.active {
          background: rgba(0, 255, 0, 0.25);
          border-color: rgba(0, 255, 0, 0.8);
          box-shadow: 0 0 40px rgba(0, 255, 0, 0.6);
          animation: iconActive 1s ease;
        }

        @keyframes iconActive {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .icon-symbol {
          z-index: 2;
          position: relative;
          filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5));
        }

        .status-ring {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border: 2px solid rgba(0, 255, 0, 0.6);
          border-radius: 18px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .dock-icon:hover .status-ring {
          opacity: 1;
        }

        .active-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0, 255, 0, 0.4) 0%, transparent 70%);
          border-radius: 15px;
          z-index: 1;
        }

        /* Iron Man Arrow Special Style */
        .ironman-arrow .dock-icon {
          border-color: rgba(0, 200, 255, 0.5);
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 40, 85, 0.6));
        }

        .ironman-arrow .dock-icon:hover {
          border-color: rgba(0, 200, 255, 0.8);
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 60, 120, 0.8));
          box-shadow: 0 15px 30px rgba(0, 200, 255, 0.4);
        }

        .ironman-arrow .icon-symbol svg {
          filter: drop-shadow(0 0 8px rgba(0, 200, 255, 0.8));
          animation: ironman-arrow-pulse 2s infinite;
        }

        @keyframes ironman-arrow-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(0, 200, 255, 0.8));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(0, 200, 255, 1));
          }
        }

        .tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10, 10, 26, 0.95);
          border: 1px solid rgba(0, 255, 0, 0.4);
          border-radius: 10px;
          padding: 10px 15px;
          white-space: nowrap;
          z-index: 100;
          pointer-events: none;
          margin-bottom: 15px;
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          min-width: 120px;
        }

        .tooltip-label {
          display: block;
          color: #00FF00;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 5px;
          text-align: center;
        }

        .tooltip-desc {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          font-size: 12px;
          text-align: center;
        }

        .copied-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: #00ff00;
          font-size: 11px;
          margin-top: 8px;
          font-weight: 600;
        }

        .connection-line {
          position: absolute;
          top: 50%;
          right: -4px;
          width: 4px;
          height: 2px;
          background: linear-gradient(90deg, rgba(0, 255, 0, 0.4), transparent);
          transform: translateY(-50%);
        }

        /* Info Bar */
        .info-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          flex-wrap: wrap;
          gap: 15px;
        }

        .info-left, .info-right {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .copyright, .tech-stack, .status-indicator, .availability {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 500;
        }

        .separator {
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
        }

        .tech-stack {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tech-icons {
          display: flex;
          gap: 8px;
        }

        .tech-icons svg {
          color: #00aaff;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .tech-icons svg:hover {
          color: #00ffff;
          transform: scale(1.2);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 255, 0, 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid rgba(0, 255, 0, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .status-indicator:hover {
          background: rgba(0, 255, 0, 0.15);
          border-color: rgba(0, 255, 0, 0.5);
          box-shadow: 0 5px 15px rgba(0, 255, 0, 0.2);
        }

        .status-dot {
          color: #00ff00;
          font-size: 12px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .status-text {
          color: #00ff00;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
        }

        /* Social Quicklinks */
        .social-quicklinks {
          display: flex;
          justify-content: center;
          gap: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 15px;
          padding: 12px 25px;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          min-width: 140px;
          justify-content: center;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .social-link:hover {
          color: white;
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .social-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }

        .social-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          z-index: -1;
        }

        .social-label {
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
        }

        /* LinkedIn Specific Pulse */
        .pulse-linkedin {
          color: #0077B5 !important;
          border-color: rgba(0, 119, 181, 0.3) !important;
          background: rgba(0, 119, 181, 0.08) !important;
        }

        .pulse-linkedin:hover {
          color: #ffffff !important;
          background: rgba(0, 119, 181, 0.25) !important;
          border-color: rgba(0, 119, 181, 0.6) !important;
          box-shadow: 0 10px 25px rgba(0, 119, 181, 0.3) !important;
        }

        .pulse-linkedin .social-pulse {
          background-color: #0077B5 !important;
        }

        /* GitHub Specific Pulse */
        .pulse-github {
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          background: rgba(255, 255, 255, 0.08) !important;
        }

        .pulse-github:hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.2) !important;
          border-color: rgba(255, 255, 255, 0.6) !important;
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2) !important;
        }

        .pulse-github .social-pulse {
          background-color: #ffffff !important;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .cosmic-dock {
            justify-content: flex-start;
            padding-left: 10px;
            padding-right: 10px;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 0 15px;
          }
          
          .quote-section {
            flex-direction: column;
            gap: 20px;
            padding: 15px;
          }
          
          .quote-text {
            font-size: 14px;
          }
          
          .specialties-section {
            min-width: 100%;
            padding: 15px;
          }
          
          .specialties-container {
            flex-direction: column;
            gap: 20px;
          }
          
          .specialty-item {
            flex-direction: row;
            width: 100%;
            text-align: left;
            gap: 15px;
          }
          
          .specialty-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 0;
            flex-shrink: 0;
          }
          
          .specialty-separator {
            width: 80%;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(0, 255, 0, 0.3), transparent);
          }
          
          .quantum-react-icon,
          .ai-prompt-icon,
          .full-stack-icon {
            transform: scale(0.9);
          }
          
          .cosmic-dock {
            gap: 5px;
          }
          
          .dock-icon {
            width: 45px;
            height: 45px;
          }
          
          .info-bar {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          
          .info-left, .info-right {
            justify-content: center;
            width: 100%;
          }
          
          .social-quicklinks {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .social-link {
            width: 100%;
            max-width: 250px;
          }
        }

        @media (max-width: 480px) {
          .quote-container {
            padding-left: 30px;
          }
          
          .quote-icon {
            font-size: 22px;
          }
          
          .quote-text {
            font-size: 13px;
          }
          
          .specialty-title {
            font-size: 11px;
          }
          
          .specialty-desc {
            font-size: 9px;
          }
          
          .dock-icon-container {
            padding: 5px;
          }
          
          .dock-icon {
            width: 40px;
            height: 40px;
          }
          
          .tooltip {
            min-width: 100px;
            padding: 8px 12px;
            font-size: 12px;
          }
          
          .copyright, .tech-stack, .status-indicator {
            font-size: 12px;
          }
          
          .tech-icons svg {
            font-size: 16px;
          }
          
          .quantum-react-icon {
            transform: scale(0.8);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;