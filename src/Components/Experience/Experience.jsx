
// Experience.jsx, Phase - 2
import React, { useState, useRef } from 'react';
import { ExperienceInfo } from '../../Constants';

const Experience = () => {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const audioRef = useRef(null);

  // ✅ Play sound effect
  const playSoundEffect = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  // ✅ Updated Voice Function
  const speakExperience = (role, company, desc) => {
    const phrase = `${role}, at, ${company}, ${desc}`;
    const utterance = new SpeechSynthesisUtterance(phrase);
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find((voice) =>
      voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('zira')
    );
    if (femaleVoice) utterance.voice = femaleVoice;
    utterance.pitch = 1.1;
    utterance.rate = 1;
    window.speechSynthesis.cancel(); // Cancel any current speech
    window.speechSynthesis.speak(utterance);
  };

  // ✅ Combined hover handler for card
  const handleCardHover = (role, company, desc) => {
    playSoundEffect();
    speakExperience(role, company, desc);
  };

  // ✅ Stop speaking function
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <section 
      id='experience' 
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2'
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
      onTouchStart={() => setIsSectionHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsSectionHovered(false), 300)}
    >
      {/* Audio element for sound effect */}
      <audio ref={audioRef} preload="auto">
        <source src="/sounds/Sound 2.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{
            backgroundImage: isSectionHovered 
              ? 'linear-gradient(to right, #00aaff, #00ffff, #00aaff)' 
              : 'none',
            backgroundClip: isSectionHovered ? 'text' : 'none',
            WebkitBackgroundClip: isSectionHovered ? 'text' : 'none',
            color: isSectionHovered ? 'transparent' : '#ffffff',
            textShadow: isSectionHovered 
              ? 'none' 
              : '0 0 10px rgba(255, 255, 255, 0.8)',
            animation: isSectionHovered 
              ? 'gradient-shift 3s ease infinite' 
              : 'none',
            backgroundSize: isSectionHovered ? '200% 100%' : '100% 100%'
          }}
        >
          EXPERIENCE
        </h2>
        <div 
          className="w-40 h-[2px] mx-auto mt-2 transition-all duration-300"
          style={{
            backgroundImage: isSectionHovered 
              ? 'linear-gradient(to right, transparent, #00aaff, transparent)' 
              : 'none',
            backgroundColor: isSectionHovered 
              ? 'transparent' 
              : '#00FF00',
            boxShadow: isSectionHovered 
              ? 'none' 
              : '0 0 10px #00FF00'
          }}
        ></div>
        <p className="text-white/80 mt-6 text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold max-w-2xl mx-auto px-4">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className='relative'>
        {/* Vertical line */}
        <div 
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 h-full transition-all duration-300"
          style={{
            backgroundImage: isSectionHovered 
              ? 'linear-gradient(to bottom, transparent, #00aaff, transparent)' 
              : 'none',
            backgroundColor: isSectionHovered 
              ? 'transparent' 
              : '#00FF00'
          }}
        ></div>

        {/* Experience Entries */}
        {ExperienceInfo.map((Experience, index) => (
          <div
            key={Experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div 
              className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 transition-all duration-300"
              style={{
                border: `4px solid ${isSectionHovered ? '#00aaff' : '#00FF00'}`,
                boxShadow: isSectionHovered 
                  ? '0 0 15px #00aaff, 0 0 30px #00aaff' 
                  : '0 0 10px #00FF00'
              }}
            >
              <img
                src={Experience.img}
                alt={Experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl bg-[black] backdrop-blur-md transform transition-all duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8`}
              style={{
                border: `2px solid ${isSectionHovered ? '#00aaff' : '#00FF00'}`,
                boxShadow: isSectionHovered 
                  ? '0 0 30px 2px rgba(0, 170, 255, 0.5), inset 0 0 15px rgba(0, 170, 255, 0.1)' 
                  : '0 0 15px 1px rgba(0, 255, 0, 0.2)'
              }}
              onMouseEnter={() => handleCardHover(Experience.role, Experience.company, Experience.desc)}
              onMouseLeave={stopSpeaking}
              onTouchStart={() => handleCardHover(Experience.role, Experience.company, Experience.desc)}
              onTouchEnd={stopSpeaking}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div 
                  className="w-16 h-16 bg-white rounded-md overflow-hidden transition-all duration-300"
                  style={{
                    boxShadow: isSectionHovered 
                      ? '0 0 15px rgba(0, 170, 255, 0.8)' 
                      : '0 0 10px rgba(0, 255, 0, 0.5)'
                  }}
                >
                  <img
                    src={Experience.img}
                    alt={Experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Decreased font size for role title */}
                    <h3 
                      className="text-lg sm:text-xl font-extrabold transition-all duration-300"
                      style={{
                        color: isSectionHovered ? '#93c5fd' : '#ffffff',
                        textShadow: isSectionHovered 
                          ? '0 0 10px rgba(147, 197, 253, 0.8)' 
                          : '0 0 10px rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {Experience.role}
                    </h3>
                    <h4 
                      className="text-sm sm:text-md font-bold transition-all duration-300"
                      style={{
                        color: isSectionHovered ? '#93c5fd' : '#ffffff'
                      }}
                    >
                      {Experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p 
                    className="text-xs sm:text-sm font-bold mt-2 transition-all duration-300"
                    style={{
                      color: isSectionHovered ? '#93c5fd' : '#ffffff'
                    }}
                  >
                    {Experience.date}
                  </p>
                </div>
              </div>

              <p 
                className="mt-4 text-justify font-bold transition-all duration-300"
                style={{
                  color: isSectionHovered ? '#93c5fd' : '#00FF00'
                }}
              >
                {Experience.desc}
              </p>
              <div className="mt-4">
                <h5 
                  className="font-medium transition-all duration-300"
                  style={{
                    color: isSectionHovered ? '#93c5fd' : '#ffffff'
                  }}
                >
                  Skills:
                </h5>
                <ul className="flex flex-wrap mt-2">
                  {Experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#fff] font-bold px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 transition-all duration-300"
                      style={{
                        border: `2px solid ${isSectionHovered ? '#00aaff' : '#00FF00'}`,
                        color: isSectionHovered ? '#0c4a6e' : '#000000',
                        boxShadow: isSectionHovered 
                          ? '0 0 8px rgba(0, 170, 255, 0.5)' 
                          : '0 0 5px rgba(0, 255, 0, 0.3)'
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .bg-skills-gradient {
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
        }
        
        .clip-path-custom-2 {
          clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
        }
        
        /* Gradient shift animation */
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
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .clip-path-custom-2 {
            clip-path: polygon(0 0, 100% 3%, 100% 97%, 0 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;

// Completed.....................