// About.jsx
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

import profileImage from "../../assets/hero/CuteBoy.png";
import secondprofileImage from "../../assets/hero/AA.png";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to get female voice (not state, always fresh)
  const getFemaleVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    return voices.find(voice =>
      voice.name.toLowerCase().includes("female") ||
      voice.name.toLowerCase().includes("woman") ||
      voice.name.toLowerCase().includes("alexa") ||
      voice.name.toLowerCase().includes("google us english") ||
      voice.name.toLowerCase().includes("zira") ||
      voice.name.toLowerCase().includes("samantha") ||
      voice.name.toLowerCase().includes("victoria")
    );
  };

  // Function to get male voice for image only
  const getMaleVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    return voices.find((voice) =>
      voice.name.toLowerCase().includes("male") && 
      !voice.name.toLowerCase().includes("david")
    );
  };

  useEffect(() => {
    // 🔒 Security: Prevent text selection, right-click, and keyboard shortcuts
    const preventUnauthorizedActions = (e) => {
      // Check if agent is activated - if not, prevent all actions silently
      if (!window.isPortfolioAgentActivated) {
        // Prevent right-click - SILENT (no voice)
        if (e.type === 'contextmenu') {
          e.preventDefault();
          return false;
        }

        // Prevent text selection - SILENT (no voice)
        if (e.type === 'selectstart') {
          e.preventDefault();
          return false;
        }

        // Prevent keyboard shortcuts for inspect (F12, Ctrl+Shift+I, Ctrl+Shift+C, etc.) - SILENT (no voice)
        if (e.type === 'keydown') {
          if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
            (e.key === 'u' && e.ctrlKey)
          ) {
            e.preventDefault();
            return false;
          }
        }

        // Prevent copy - SILENT (no voice)
        if (e.type === 'copy') {
          e.preventDefault();
          return false;
        }

        // Prevent cut - SILENT (no voice)
        if (e.type === 'cut') {
          e.preventDefault();
          return false;
        }
      }
    };

    // Add event listeners for security
    document.addEventListener('contextmenu', preventUnauthorizedActions);
    document.addEventListener('selectstart', preventUnauthorizedActions);
    document.addEventListener('keydown', preventUnauthorizedActions);
    document.addEventListener('copy', preventUnauthorizedActions);
    document.addEventListener('cut', preventUnauthorizedActions);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('contextmenu', preventUnauthorizedActions);
      document.removeEventListener('selectstart', preventUnauthorizedActions);
      document.removeEventListener('keydown', preventUnauthorizedActions);
      document.removeEventListener('copy', preventUnauthorizedActions);
      document.removeEventListener('cut', preventUnauthorizedActions);
    };
  }, []);

  // All other functions - FEMALE VOICE ONLY
  const speak = (text) => {
    // Check if agent is activated
    if (!window.isPortfolioAgentActivated) return;
    
    const msg = new SpeechSynthesisUtterance(text);
    const femaleVoice = getFemaleVoice();
    if (femaleVoice) {
      msg.voice = femaleVoice;
    }
    msg.pitch = 1.2;
    msg.rate = 1;
    window.speechSynthesis.speak(msg);
  };

  const handleDownloadClick = () => {
    // 1️⃣ Speak initial message
    speak("Download protocol activated. Arshad Shaik's resume ready for transfer. Awaiting destination selection.");

    // 2️⃣ Trigger download
    const link = document.createElement("a");
    link.href = "/CV/ArshadA.pdf";
    link.download = "ArshadA.pdf";
    document.body.appendChild(link);
    link.click();

    // 3️⃣ Use short delay and speak only if file was triggered for download
    setTimeout(() => {
      speak("Thank you,");
    }, 2000);

    document.body.removeChild(link);
  };

  // male voice for the Image ONLY - This is the ONLY place using male voice
  const speakOnHover = () => {
    // Check if agent is activated
    if (!window.isPortfolioAgentActivated) return;
    
    const message = new SpeechSynthesisUtterance("A Passionate Full Stack Developer & Data Analyst with AI expertise, specializing in intelligent voice agents and data-driven web apps. I engineer end-to-end solutions using Python, React, and TensorFlow, deploying scalable systems on GitHub, Vercel, Netlify, PythonAnyWhere, AWS, Docker. Expert in LLMs, RESTful APIs, and cloud platforms. Proficient in SQL, Pandas, scikit-learn, and PyTorch for data analysis, ETL, and ML model deployment. Skilled in Hive, Hadoop, and Airflow for big data processing. Strong in Docker, Kubernetes, and MLOps for seamless deployment. Deliver high-impact software through Agile collaboration, from concept to production. Transform data into actionable insights with Tableau, Power BI, and advanced AI/LLM integration.");
    const maleVoice = getMaleVoice();
    if (maleVoice) {
      message.voice = maleVoice;
    }
    message.pitch = 1;
    message.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);
  };

  // Stop speaking function
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
    >
      {/* IRON MAN HOLOGRAM GLASSY SCREEN CONTAINER */}
      <div className="relative w-full max-w-7xl mx-auto">
        
        {/* TOP BORDER - Iron Man Hologram Style */}
        <div className="relative h-4 md:h-6 mb-2">
          {/* Main glowing line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>
          
          {/* Dotted line effect */}
          <div className="absolute inset-0 flex justify-between items-center px-2">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`top-dot-${i}`}
                className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-cyan-300/80"
                style={{
                  animation: `pulse ${1 + Math.random()}s infinite alternate`,
                  boxShadow: '0 0 4px rgba(0, 255, 255, 0.8)'
                }}
              ></div>
            ))}
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-4 md:w-8 md:h-6 border-l-2 border-t-2 border-cyan-400 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-6 h-4 md:w-8 md:h-6 border-r-2 border-t-2 border-cyan-400 rounded-tr-lg"></div>
        </div>

        {/* GLASSY SCREEN CONTENT AREA */}
        <div 
          className="relative p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(10, 30, 60, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 200, 255, 0.3)',
            boxShadow: `
              0 0 40px rgba(0, 150, 255, 0.3),
              inset 0 0 60px rgba(0, 100, 200, 0.2),
              0 4px 30px rgba(0, 0, 0, 0.3)
            `,
            minHeight: '500px'
          }}
        >
          {/* Hologram grid overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          ></div>
          
          {/* Floating hologram particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-[2px] h-[2px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, transparent 70%)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `floatParticle ${3 + Math.random() * 4}s infinite linear`,
                  animationDelay: `${Math.random() * 2}s`,
                  filter: 'blur(0.5px)'
                }}
              ></div>
            ))}
          </div>

          {/* ALL ORIGINAL CONTENT - COMPLETELY UNCHANGED */}
          <div className="relative z-10">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
              {/* Left Side - EXACTLY AS BEFORE */}
              <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
                  style={{
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Hi, 👋🏻🤩  I'm 
                </h1>
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
                  style={{
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Arshad Wasib Shaik
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#00ff00] leading-tight">
                  <span
                    className="text-white"
                    style={{
                      textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    I am a{" "}
                  </span>
                  <span
                    className="text-[#00ff00]"
                    style={{
                      textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    <Typewriter
                      words={[
                        "AI Engineer",
                        "AI Agent Developer",
                        "Prompt Engineer",
                        "Full stack Developer",
                        "Python Developer",
                        "Data Analyst",
                        "Vibe Coder",
                      ]}
                      loop={0}
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </h3>

                <p
                  className="text-base sm:text-lg md:text-[22px] lg:text-2xl text-white mb-10 mt-8 leading-relaxed text-justify"
                  style={{
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                >
                 A Passionate Full Stack Developer & Data Analyst with AI expertise, specializing in intelligent voice agents and data-driven web apps. I engineer end-to-end solutions using Python, React, and TensorFlow, deploying scalable systems on GitHub, Vercel, Netlify, PythonAnyWhere, AWS, Docker. Expert in LLMs, RESTful APIs, and cloud platforms. Proficient in SQL, Pandas, scikit-learn, and PyTorch for data analysis, ETL, and ML model deployment. Skilled in Hive, Hadoop, and Airflow for big data processing. Strong in Docker, Kubernetes, and MLOps for seamless deployment. Deliver high-impact software through Agile collaboration, from concept to production. Transform data into actionable insights with Tableau, Power BI, and advanced AI/LLM integration.
                </p>

                <button
                  onClick={handleDownloadClick}
                  className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 hover:drop-shadow-[0_10px_30px_rgba(130,69,236,0.5)]"
                  style={{
                    background: "#00b7ff",
                    boxShadow: "0 0 2px #00d9ff, 0 0 4px #00e1ff, 0 0 20px #00c3ff",
                  }}
                >
                  DOWNLOAD RESUME
                </button>
              </div>

              {/* Right Side - EXACTLY AS BEFORE */}
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div
                  className={`transition duration-300 ease-in-out ${
                    isHovered ? "" : "border-none"
                  }`}
                  onMouseEnter={() => {
                    if (!isHovered) {
                      speakOnHover();
                    }
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    stopSpeaking();
                  }}
                >
                  {isHovered ? (
                    <Tilt
                      className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[40rem] ml-[30px] border-4 border-[#00FF00] rounded-full"
                      tiltMaxAngleX={20}
                      tiltMaxAngleY={20}
                      perspective={1000}
                      scale={1.05}
                      transitionSpeed={1000}
                      gyroscope={true}
                    >
                      <img
                        src={profileImage}
                        alt="Arshad Wasib Shaik"
                        className="w-full ml-[1px] h-full rounded-full object-cover drop-shadow-[0_10px_30px_rgba(130,69,236,0.5)]"
                      />
                    </Tilt>
                  ) : (
                    <img
                      src={secondprofileImage}
                      alt="AA Logo"
                      className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[40rem] ml-[30px] object-cover drop-shadow-[0_10px_30px_rgba(130,69,236,0.5)]"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Side glow accents */}
          <div className="absolute top-4 left-0 w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent opacity-60 rounded-r-full"></div>
          <div className="absolute top-4 right-0 w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent opacity-60 rounded-l-full"></div>
        </div>

        {/* BOTTOM BORDER - Iron Man Hologram Style */}
        <div className="relative h-4 md:h-6 mt-2">
          {/* Main glowing line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>
          
          {/* Tech pattern dots */}
          <div className="absolute inset-0 flex justify-between items-center px-3">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`bottom-left-${i}`}
                  className="w-1 h-1 rounded-full bg-cyan-300/70"
                  style={{
                    animation: `pulse ${1.5 + i * 0.2}s infinite alternate`,
                    boxShadow: '0 0 3px rgba(0, 255, 255, 0.6)'
                  }}
                ></div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <div className="w-8 h-1 bg-cyan-400/50 rounded-full"></div>
              <div className="w-8 h-1 bg-cyan-400/50 rounded-full"></div>
              <div className="w-8 h-1 bg-cyan-400/50 rounded-full"></div>
            </div>
            
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`bottom-right-${i}`}
                  className="w-1 h-1 rounded-full bg-cyan-300/70"
                  style={{
                    animation: `pulse ${1.5 + i * 0.2}s infinite alternate`,
                    boxShadow: '0 0 3px rgba(0, 255, 255, 0.6)'
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Corner accents */}
          <div className="absolute bottom-0 left-0 w-6 h-4 md:w-8 md:h-6 border-l-2 border-b-2 border-cyan-400 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-6 h-4 md:w-8 md:h-6 border-r-2 border-b-2 border-cyan-400 rounded-br-lg"></div>
        </div>

        {/* Outer glow effect */}
        <div 
          className="absolute -inset-4 -z-10 rounded-2xl md:rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 100, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        ></div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
        
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .glassy-screen {
            padding: 1.5rem !important;
          }
        }
        
        @media (max-width: 640px) {
          .glassy-screen {
            padding: 1rem !important;
            min-height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;