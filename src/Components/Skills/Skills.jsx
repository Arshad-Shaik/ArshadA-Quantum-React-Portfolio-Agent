
// Skills.jsx final processed
import { useState, useEffect, useRef } from 'react';
import MobileSkillsCube from './MobileSkillsCube';

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const cubeRef = useRef(null);
  const animationRef = useRef(null);

  // Skills data organized in cube structure - UPDATED WITH ALL SKILLS
  const cubeFaces = {
    front: {
      title: "Front-End Technologies",
      color: "#00FF00",
      skills: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "AngularJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
      ]
    },
    right: {
      title: "Back-End Technologies",
      color: "#0077B5", 
      skills: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "SQL Developer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" }
      ]
    },
    back: {
      title: "Programming Languages",
      color: "#FF6B00",
      skills: [
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "RStudio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" }
      ]
    },
    left: {
      title: "Data Science & Tools",
      color: "#FF00FF",
      skills: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg" },
        { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "Vite.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
        { name: "PyCharm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" }
      ]
    }
  };

  // ✅ Voice Feedback Function - EXACTLY AS BEFORE
  const speakSkillName = (name) => {
    if (!window.isPortfolioAgentActivated) return;
    
    const message = new SpeechSynthesisUtterance(name);
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find((voice) =>
      voice.name.toLowerCase().includes("female") || 
      voice.name.toLowerCase().includes("zira") ||
      voice.name.toLowerCase().includes("victoria") ||
      voice.name.toLowerCase().includes("samantha")
    );
    if (femaleVoice) message.voice = femaleVoice;
    message.pitch = 1.1;
    message.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);
  };

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Counterclockwise rotation animation (Desktop only) - FASTER ROTATION
  useEffect(() => {
    if (isMobile || isHovered) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    let rotationY = 0;
    const animate = () => {
      rotationY -= 0.7; // CHANGED FROM 0.4 to 0.7 (75% faster rotation)
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateY(${rotationY}deg)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isMobile]);

  // Handle cube hover for stopping rotation (Desktop only)
  const handleCubeHover = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleCubeLeave = () => {
    if (!isMobile) setIsHovered(false);
  };

  return (
    <section 
      id="skills" 
      className='py-20 px-4 md:px-8 font-sans bg-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden'
      onMouseEnter={() => setIsTitleHovered(true)}
      onMouseLeave={() => setIsTitleHovered(false)}
      onTouchStart={() => setIsTitleHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsTitleHovered(false), 300)}
    >
      
      {/* Section Title - MODIFIED AS REQUESTED */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              backgroundImage: isTitleHovered 
                ? 'linear-gradient(to right, #00aaff, #00ffff, #00aaff)' 
                : 'none',
              backgroundClip: isTitleHovered ? 'text' : 'none',
              WebkitBackgroundClip: isTitleHovered ? 'text' : 'none',
              color: isTitleHovered ? 'transparent' : '#ffffff',
              textShadow: isTitleHovered 
                ? 'none' 
                : '0 0 20px rgba(255, 255, 255, 0.9)',
              animation: isTitleHovered 
                ? 'gradient-shift 3s ease infinite' 
                : 'none',
              backgroundSize: isTitleHovered ? '200% 100%' : '100% 100%'
            }}>
          SKILLS
        </h2>
        <div className="w-40 h-[2px] mx-auto mt-2 transition-all duration-300"
            style={{
              backgroundImage: isTitleHovered 
                ? 'linear-gradient(to right, transparent, #00aaff, transparent)' 
                : 'none',
              backgroundColor: isTitleHovered 
                ? 'transparent' 
                : '#00FF00',
              boxShadow: isTitleHovered 
                ? 'none' 
                : '0 0 20px #00FF00, 0 0 40px #00FF00'
            }}>
        </div>
        <p className="text-white/80 mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
          A Collection of my technical skills and expertise honed through various projects and experiences
        </p>
        <div className="mt-4 text-white/70 text-sm">
          <span className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse"></div>
            {isMobile 
              ? "Swipe or tap to explore skills • Tap for voice" 
              : isHovered 
                ? "Cube rotation paused • Hover skills for voice"
                : "Cube is rotating counterclockwise • Hover cube to pause"}
          </span>
        </div>
      </div>

      {/* Render Mobile Cube for mobile devices, 3D Cube for desktop */}
      {isMobile ? (
        <MobileSkillsCube cubeFaces={cubeFaces} speakSkillName={speakSkillName} />
      ) : (
        <div className="flex-1 flex items-center justify-center w-full max-w-4xl mx-auto">
          <div className="cube-container relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Desktop 3D Cube */}
            <div
              ref={cubeRef}
              className="cube w-full h-full relative transform-preserve-3d transition-transform duration-150"
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={handleCubeHover}
              onMouseLeave={handleCubeLeave}
            >
              {/* Front Face - MINIMIZED SIZE */}
              <div 
                className="cube-face cube-face-front absolute w-full h-full bg-black/70 backdrop-blur-lg border-2 border-[#00FF00] rounded-lg flex flex-col items-center justify-center p-2"
                style={{ 
                  transform: 'rotateY(0deg) translateZ(150px)',
                  color: '#00FF00',
                  boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.1), 0 0 30px #00FF00'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/10 to-transparent rounded-lg"></div>
                <h3 className="text-white text-sm font-bold mb-2 text-center relative z-10 px-1" style={{
                  textShadow: "0 0 15px #00FF00"
                }}>{cubeFaces.front.title}</h3>
                <div className="grid grid-cols-2 gap-1 w-full relative z-10 px-0">
                  {cubeFaces.front.skills.map((skill, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => speakSkillName(skill.name)}
                      className="flex items-center space-x-1 bg-black/50 border border-[#00FF00]/40 rounded-sm p-1 hover:bg-[#00FF00]/20 transition-all duration-300 cursor-pointer"
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-3 h-3" 
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.marginLeft = '0';
                        }}
                      />
                      <span className="text-white text-2xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Face - NORMAL SIZE */}
              <div 
                className="cube-face cube-face-right absolute w-full h-full bg-black/70 backdrop-blur-lg border-2 border-[#0077B5] rounded-lg flex flex-col items-center justify-center p-4"
                style={{ 
                  transform: 'rotateY(90deg) translateZ(150px)',
                  color: '#0077B5',
                  boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.1), 0 0 30px #0077B5'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent rounded-lg"></div>
                <h3 className="text-white text-lg font-bold mb-4 text-center relative z-10" style={{
                  textShadow: "0 0 15px #0077B5"
                }}>{cubeFaces.right.title}</h3>
                <div className="grid grid-cols-2 gap-2 w-full relative z-10">
                  {cubeFaces.right.skills.map((skill, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => speakSkillName(skill.name)}
                      className="flex items-center space-x-2 bg-black/50 border border-[#0077B5]/40 rounded-lg p-2 hover:bg-[#0077B5]/20 transition-all duration-300 cursor-pointer"
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.marginLeft = '0';
                        }}
                      />
                      <span className="text-white text-xs font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back Face - NORMAL SIZE */}
              <div 
                className="cube-face cube-face-back absolute w-full h-full bg-black/70 backdrop-blur-lg border-2 border-[#FF6B00] rounded-lg flex flex-col items-center justify-center p-4"
                style={{ 
                  transform: 'rotateY(180deg) translateZ(150px)',
                  color: '#FF6B00',
                  boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.1), 0 0 30px #FF6B00'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-500/10 to-transparent rounded-lg"></div>
                <h3 className="text-white text-lg font-bold mb-4 text-center relative z-10" style={{
                  textShadow: "0 0 15px #FF6B00"
                }}>{cubeFaces.back.title}</h3>
                <div className="grid grid-cols-2 gap-2 w-full relative z-10">
                  {cubeFaces.back.skills.map((skill, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => speakSkillName(skill.name)}
                      className="flex items-center space-x-2 bg-black/50 border border-[#FF6B00]/40 rounded-lg p-2 hover:bg-[#FF6B00]/20 transition-all duration-300 cursor-pointer"
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.marginLeft = '0';
                        }}
                      />
                      <span className="text-white text-xs font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left Face - MINIMIZED SIZE */}
              <div 
                className="cube-face cube-face-left absolute w-full h-full bg-black/70 backdrop-blur-lg border-2 border-[#FF00FF] rounded-lg flex flex-col items-center justify-center p-2"
                style={{ 
                  transform: 'rotateY(-90deg) translateZ(150px)',
                  color: '#FF00FF',
                  boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.1), 0 0 30px #FF00FF'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent rounded-lg"></div>
                <h3 className="text-white text-sm font-bold mb-2 text-center relative z-10 px-1" style={{
                  textShadow: "0 0 15px #FF00FF"
                }}>{cubeFaces.left.title}</h3>
                <div className="grid grid-cols-2 gap-1 w-full relative z-10 px-0">
                  {cubeFaces.left.skills.map((skill, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => speakSkillName(skill.name)}
                      className="flex items-center space-x-1 bg-black/50 border border-[#FF00FF]/40 rounded-sm p-1 hover:bg-[#FF00FF]/20 transition-all duration-300 cursor-pointer"
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-3 h-3"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.marginLeft = '0';
                        }}
                      />
                      <span className="text-white text-2xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className='text-center mt-8'>
        <p className='text-white/80 text-sm md:text-base' style={{
          textShadow: "0 0 10px rgba(255, 255, 255, 0.6)"
        }}>
          {isMobile ? (
            "📱 Swipe or tap to explore skills • Tap for voice"
          ) : isHovered ? (
            "💡 Cube rotation paused • Hover skills for voice"
          ) : (
            "🔄 Cube is rotating counterclockwise • Hover cube to pause"
          )}
        </p>
      </div>

      <style jsx>{`
        .cube-container {
          perspective: 1200px;
        }

        .cube {
          transform-style: preserve-3d;
        }

        .cube-face {
          backface-visibility: hidden;
        }

        .transform-preserve-3d {
          transform-style: preserve-3d;
        }

        /* Custom smaller text size */
        .text-2xs {
          font-size: 0.6rem;
          line-height: 0.8rem;
        }

        /* Gradient shift animation for Skills title */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Responsive cube size */
        @media (max-width: 640px) {
          .cube-container {
            width: 280px;
            height: 280px;
          }
          
          .cube-face-front,
          .cube-face-right,
          .cube-face-back,
          .cube-face-left {
            transform: translateZ(120px) !important;
          }
        }

        @media (max-width: 480px) {
          .cube-container {
            width: 250px;
            height: 250px;
          }
          
          .cube-face-front,
          .cube-face-right,
          .cube-face-back,
          .cube-face-left {
            transform: translateZ(100px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

// Completed....................