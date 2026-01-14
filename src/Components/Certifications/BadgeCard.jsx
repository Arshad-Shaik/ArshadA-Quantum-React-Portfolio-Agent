// // BadgeCard.jsx
// import React, { useState } from 'react';

// const BadgeCard = ({ badge }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       {/* Badge Card */}
//       <div 
//         className="relative group cursor-pointer"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={openModal}
//       >
//         {/* Badge Container */}
//         <div className="relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md rounded-2xl p-6 border border-[#00FF00]/30 transition-all duration-300 group-hover:border-[#00FF00] group-hover:shadow-[0_0_30px_#00FF00] overflow-hidden">
//           {/* Badge Image */}
//           <div className="relative mb-4">
//             <div className="w-32 h-32 mx-auto relative">
//               <img
//                 src={badge.image}
//                 alt={badge.title}
//                 className="w-full h-full object-contain rounded-xl"
//               />
//               {/* Glow Effect */}
//               <div className="absolute inset-0 rounded-xl border-2 border-[#00FF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
            
//             {/* Hover Effect */}
//             {isHovered && (
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF00]/10 to-transparent rounded-xl"></div>
//             )}
//           </div>
          
//           {/* Badge Title */}
//           <h4 className="text-white font-bold text-center mb-2 line-clamp-2">
//             {badge.title}
//           </h4>
          
//           {/* Badge Issuer */}
//           <p className="text-[#00FF00] text-sm text-center mb-1">
//             {badge.issuer}
//           </p>
          
//           {/* Badge Date */}
//           <p className="text-white/70 text-xs text-center">
//             {badge.earnedDate}
//           </p>
          
//           {/* Hover Indicator */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[#00FF00] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             Click to view details →
//           </div>
//         </div>
        
//         {/* Corner Glow */}
//         <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00FF00]/50 transition-all duration-300 pointer-events-none"></div>
//       </div>

//       {/* Modal for Badge Details */}
//       {isModalOpen && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
//           onClick={closeModal}
//         >
//           <div 
//             className="relative w-full max-w-2xl bg-gradient-to-br from-black/70 to-gray-900/70 backdrop-blur-2xl rounded-2xl border-2 border-[#00FF00]/50 shadow-[0_0_80px_rgba(0,255,0,0.3)] p-8"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white text-2xl hover:text-[#00FF00] transition-colors duration-300"
//             >
//               ✕
//             </button>
            
//             {/* Badge Content */}
//             <div className="flex flex-col md:flex-row gap-8">
//               {/* Badge Image */}
//               <div className="flex-shrink-0">
//                 <div className="w-48 h-48 mx-auto">
//                   <img
//                     src={badge.image}
//                     alt={badge.title}
//                     className="w-full h-full object-contain rounded-xl border-4 border-[#00FF00]/30"
//                   />
//                 </div>
//               </div>
              
//               {/* Badge Details */}
//               <div className="flex-1">
//                 <h3 className="text-2xl font-bold text-white mb-4">
//                   {badge.title}
//                 </h3>
                
//                 <div className="space-y-4">
//                   <div>
//                     <span className="text-[#00FF00] font-semibold">Issuer: </span>
//                     <span className="text-white">{badge.issuer}</span>
//                   </div>
                  
//                   <div>
//                     <span className="text-[#00FF00] font-semibold">Earned: </span>
//                     <span className="text-white">{badge.earnedDate}</span>
//                   </div>
                  
//                   <div>
//                     <span className="text-[#00FF00] font-semibold">Category: </span>
//                     <span className="text-white">{badge.category}</span>
//                   </div>
                  
//                   <div className="mt-6">
//                     <h4 className="text-lg font-bold text-white mb-2">Description</h4>
//                     <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-4">
//                       <p className="text-white leading-relaxed">
//                         {badge.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* CSS Styles */}
//       <style>{`
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </>
//   );
// };

// export default BadgeCard;



















// // BadgeCard.jsx
// import React, { useState, useEffect, useRef } from 'react';

// const BadgeCard = ({ badge }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const audioRef = useRef(null);
//   const audioRef2 = useRef(null);

//   // Initialize audio
//   useEffect(() => {
//     audioRef.current = new Audio('/sounds/Sound 1.mp3');
//     audioRef2.current = new Audio('/sounds/Sound 2.mp3');
    
//     audioRef.current.volume = 0.3;
//     audioRef2.current.volume = 0.3;
    
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current = null;
//       }
//       if (audioRef2.current) {
//         audioRef2.current.pause();
//         audioRef2.current = null;
//       }
//     };
//   }, []);

//   // Function to speak with STRICT female robot voice
//   const speakWithFemaleRobotVoice = (text) => {
//     // Check if browser supports speech synthesis
//     if ('speechSynthesis' in window) {
//       // Cancel any ongoing speech
//       speechSynthesis.cancel();
      
//       // Create a new speech synthesis utterance
//       const utterance = new SpeechSynthesisUtterance(text);
      
//       // Get all available voices
//       const voices = speechSynthesis.getVoices();
      
//       // STRICTLY find a female voice - more specific filters
//       let femaleVoice = null;
      
//       // Try multiple patterns to find female voice
//       femaleVoice = voices.find(voice => 
//         voice.name.includes('Google UK English Female') ||
//         voice.name.includes('Microsoft Zira') || // Common Windows female voice
//         voice.name.includes('Samantha') || // Common macOS female voice
//         voice.name.includes('Karen') || // Common macOS Australian female voice
//         voice.name.includes('Tessa') || // Common macOS South African female voice
//         voice.name.includes('Fiona') || // Common macOS Scottish female voice
//         voice.name.includes('Veena') || // Common Indian female voice
//         voice.name.includes('Female') ||
//         voice.name.includes('Woman') ||
//         voice.name.toLowerCase().includes('female')
//       );
      
//       // If no female voice found, try to find by language and gender hint
//       if (!femaleVoice) {
//         femaleVoice = voices.find(voice => 
//           voice.lang.includes('en') && 
//           (voice.name.includes('US') || voice.name.includes('UK')) &&
//           !voice.name.includes('Male') &&
//           !voice.name.includes('male')
//         );
//       }
      
//       // Set the female voice if found
//       if (femaleVoice) {
//         utterance.voice = femaleVoice;
//         console.log('Using female voice:', femaleVoice.name);
//       } else {
//         console.log('No female voice found, using default voice');
//       }
      
//       // Set voice properties for female robot effect
//       utterance.rate = 0.9; // Slightly slower for robotic effect
//       utterance.pitch = 1.0; // Normal pitch for female voice
//       utterance.volume = 1.0; // Volume
      
//       // Speak the text
//       speechSynthesis.speak(utterance);
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
    
//     // Speak with STRICT female robot voice
//     speakWithFemaleRobotVoice(`Opening ${badge.title}. Issued by ${badge.issuer}.`);
    
//     // Play Sound 1.mp3
//     if (audioRef.current) {
//       audioRef.current.currentTime = 0;
//       audioRef.current.play().catch(e => console.log("Badge Sound 1 failed:", e));
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
    
//     // Play Sound 2.mp3
//     if (audioRef2.current) {
//       audioRef2.current.currentTime = 0;
//       audioRef2.current.play().catch(e => console.log("Badge Sound 2 failed:", e));
//     }
//   };

//   // Close modal on ESC key
//   useEffect(() => {
//     const handleEscKey = (e) => {
//       if (e.key === 'Escape' && isModalOpen) {
//         closeModal();
//       }
//     };
    
//     if (isModalOpen) {
//       window.addEventListener('keydown', handleEscKey);
//     }
    
//     return () => {
//       window.removeEventListener('keydown', handleEscKey);
//     };
//   }, [isModalOpen]);

//   return (
//     <>
//       {/* Badge Card */}
//       <div 
//         className="relative group cursor-pointer"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={openModal}
//       >
//         {/* Badge Container */}
//         <div className="relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md rounded-2xl p-6 border border-[#00FF00]/30 transition-all duration-300 group-hover:border-[#00FF00] group-hover:shadow-[0_0_30px_#00FF00] overflow-hidden">
//           {/* Badge Image */}
//           <div className="relative mb-4">
//             <div className="w-32 h-32 mx-auto relative">
//               <img
//                 src={badge.image}
//                 alt={badge.title}
//                 className="w-full h-full object-contain rounded-xl"
//               />
//               {/* Glow Effect */}
//               <div className="absolute inset-0 rounded-xl border-2 border-[#00FF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
            
//             {/* Hover Effect */}
//             {isHovered && (
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF00]/10 to-transparent rounded-xl"></div>
//             )}
//           </div>
          
//           {/* Badge Title */}
//           <h4 className="text-white font-bold text-center mb-2 line-clamp-2">
//             {badge.title}
//           </h4>
          
//           {/* Badge Issuer */}
//           <p className="text-[#00FF00] text-sm text-center mb-1">
//             {badge.issuer}
//           </p>
          
//           {/* Badge Date */}
//           <p className="text-white/70 text-xs text-center">
//             {badge.earnedDate}
//           </p>
          
//           {/* Hover Indicator */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[#00FF00] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             Click to view details →
//           </div>
//         </div>
        
//         {/* Corner Glow */}
//         <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00FF00]/50 transition-all duration-300 pointer-events-none"></div>
//       </div>

//       {/* Iron Man Virtual Glassy Screen Modal for Badge Details */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-700"
//             onClick={closeModal}
//           />
          
//           {/* Glassy Screen Container */}
//           <div className="relative z-10 w-full max-w-6xl animate-fadeInUp">
//             {/* Iron Man Glassy Screen Effect */}
//             <div className="relative rounded-2xl overflow-hidden">
//               {/* Blue-ish Glassy Background with grid pattern */}
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/15 to-indigo-600/20 backdrop-blur-xl">
//                 {/* Grid Pattern */}
//                 <div className="absolute inset-0 opacity-30">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                     linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                     backgroundSize: '40px 40px'
//                   }}></div>
//                 </div>
                
//                 {/* Glowing Border Effect */}
//                 <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-2xl shadow-[0_0_80px_#00FFFF,0_0_120px_#0066FF] animate-pulse"></div>
                
//                 {/* Scanning Lines Effect */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scanning"></div>
//                 </div>
//               </div>
              
//               {/* Modal Content - Iron Man Glassy Screen Style */}
//               <div className="relative p-4 sm:p-6 lg:p-8" onClick={(e) => e.stopPropagation()}>
//                 {/* Close Button */}
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-red-500/20 border border-red-400/50 flex items-center justify-center text-white hover:bg-red-500/30 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.5)]"
//                   aria-label="Close"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
                
//                 {/* Badge Title */}
//                 <div className="text-center mb-6">
//                   <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2" style={{
//                     textShadow: "0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6)"
//                   }}>
//                     {badge.title}
//                   </h3>
//                   <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto shadow-[0_0_15px_#00FFFF]"></div>
//                 </div>
                
//                 {/* Badge Content */}
//                 <div className="flex flex-col lg:flex-row gap-8">
//                   {/* Badge Image - Full Glassy Screen Style */}
//                   <div className="lg:w-1/3">
//                     <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-cyan-400/30 shadow-[0_0_40px_rgba(0,200,255,0.3)]">
//                       <div className="relative">
//                         <img
//                           src={badge.image}
//                           alt={badge.title}
//                           className="w-full h-auto max-h-[300px] object-contain rounded-lg border-2 border-cyan-400/50 shadow-[0_0_30px_#00FFFF]"
//                         />
//                         {/* Glowing Edge Effect */}
//                         <div className="absolute inset-0 rounded-lg border border-cyan-300/20 animate-pulse pointer-events-none"></div>
//                       </div>
                      
//                       {/* Badge Type Indicator */}
//                       <div className="mt-4 text-center">
//                         <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
//                           DIGITAL BADGE
//                         </span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Badge Details - Glassy Screen Style */}
//                   <div className="lg:w-2/3">
//                     <div className="space-y-6">
//                       {/* Badge Information Grid */}
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20">
//                           <h4 className="text-cyan-300 font-bold mb-2 flex items-center">
//                             <span className="mr-2">🏢</span>
//                             Issuer
//                           </h4>
//                           <p className="text-white text-lg font-semibold">{badge.issuer}</p>
//                         </div>
                        
//                         <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20">
//                           <h4 className="text-cyan-300 font-bold mb-2 flex items-center">
//                             <span className="mr-2">📅</span>
//                             Earned Date
//                           </h4>
//                           <p className="text-white text-lg font-semibold">{badge.earnedDate}</p>
//                         </div>
                        
//                         <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20">
//                           <h4 className="text-cyan-300 font-bold mb-2 flex items-center">
//                             <span className="mr-2">🏷️</span>
//                             Category
//                           </h4>
//                           <p className="text-white text-lg font-semibold">{badge.category}</p>
//                         </div>
                        
//                         <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20">
//                           <h4 className="text-cyan-300 font-bold mb-2 flex items-center">
//                             <span className="mr-2">⚡</span>
//                             Status
//                           </h4>
//                           <p className="text-white text-lg font-semibold">Verified • Active</p>
//                         </div>
//                       </div>
                      
//                       {/* Badge Description - Glassy Screen Style */}
//                       <div>
//                         <h4 className="text-xl font-bold text-white mb-4 flex items-center" style={{
//                           textShadow: "0 0 10px rgba(0, 200, 255, 0.6)"
//                         }}>
//                           <span className="mr-2">📝</span>
//                           Achievement Description
//                         </h4>
//                         <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-4 lg:p-6 shadow-[0_0_20px_rgba(0,200,255,0.2)]">
//                           <div className="absolute inset-0 rounded-xl border border-cyan-300/10 animate-pulse pointer-events-none"></div>
//                           <p className="text-white leading-relaxed text-sm lg:text-base relative z-10">
//                             {badge.description}
//                           </p>
//                         </div>
//                       </div>
                      
//                       {/* Verify Button - Glassy Screen Style */}
//                       {badge.credentialUrl && (
//                         <div className="text-center pt-4 border-t border-cyan-400/20">
//                           <a
//                             href={badge.credentialUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_#00FFFF] text-base sm:text-lg"
//                           >
//                             <span className="mr-2">🔗</span>
//                             Verify Badge Credential
//                             <span className="ml-2 text-lg">↗</span>
//                           </a>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Close Instructions */}
//                 <div className="text-center mt-6 pt-4 border-t border-cyan-400/20">
//                   <p className="text-cyan-300 text-xs sm:text-sm">
//                     Press <kbd className="px-2 py-1 bg-gray-900 rounded border border-cyan-500/50 mx-1">ESC</kbd> 
//                     or click outside to close
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Add CSS animations */}
//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
        
//         @keyframes scanning {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(100vh);
//           }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.7s ease-out forwards;
//         }
        
//         .animate-scanning {
//           animation: scanning 3s linear infinite;
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </>
//   );
// };

// export default BadgeCard;


















// BadgeCard.jsx
import React, { useState, useEffect, useRef } from 'react';

const BadgeCard = ({ badge, isSectionHovered }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);
  const cardHoverAudioRef = useRef(null);

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/sounds/Sound 1.mp3');
    audioRef2.current = new Audio('/sounds/Sound 2.mp3');
    cardHoverAudioRef.current = new Audio('/sounds/Sound 2.mp3');
    
    audioRef.current.volume = 0.3;
    audioRef2.current.volume = 0.3;
    cardHoverAudioRef.current.volume = 0.2;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioRef2.current) {
        audioRef2.current.pause();
        audioRef2.current = null;
      }
      if (cardHoverAudioRef.current) {
        cardHoverAudioRef.current.pause();
        cardHoverAudioRef.current = null;
      }
    };
  }, []);

  // Function to speak with STRICT female robot voice
  const speakWithFemaleRobotVoice = (text) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices();
      
      let femaleVoice = null;
      
      femaleVoice = voices.find(voice => 
        voice.name.includes('Google UK English Female') ||
        voice.name.includes('Microsoft Zira') ||
        voice.name.includes('Samantha') ||
        voice.name.includes('Karen') ||
        voice.name.includes('Tessa') ||
        voice.name.includes('Fiona') ||
        voice.name.includes('Veena') ||
        voice.name.includes('Female') ||
        voice.name.includes('Woman') ||
        voice.name.toLowerCase().includes('female')
      );
      
      if (!femaleVoice) {
        femaleVoice = voices.find(voice => 
          voice.lang.includes('en') && 
          (voice.name.includes('US') || voice.name.includes('UK')) &&
          !voice.name.includes('Male') &&
          !voice.name.includes('male')
        );
      }
      
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      speechSynthesis.speak(utterance);
    }
  };

  // Play card hover sound
  const playCardHoverSound = () => {
    if (cardHoverAudioRef.current) {
      cardHoverAudioRef.current.currentTime = 0;
      cardHoverAudioRef.current.play().catch(e => console.log("Card hover sound failed:", e));
    }
  };

  // Handle card hover
  const handleCardHover = () => {
    setIsHovered(true);
    playCardHoverSound();
  };

  const openModal = () => {
    setIsModalOpen(true);
    speakWithFemaleRobotVoice(`Opening ${badge.title}. Issued by ${badge.issuer}.`);
    
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Badge Sound 1 failed:", e));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
    if (audioRef2.current) {
      audioRef2.current.currentTime = 0;
      audioRef2.current.play().catch(e => console.log("Badge Sound 2 failed:", e));
    }
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Badge Card */}
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={handleCardHover}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openModal}
      >
        {/* Badge Container */}
        <div 
          className="relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md rounded-2xl p-6 transform transition-all duration-300 group-hover:shadow-[0_0_30px] overflow-hidden"
          style={{
            border: `1px solid ${isSectionHovered ? '#00aaff30' : '#00FF0030'}`,
            boxShadow: isHovered
              ? isSectionHovered ? '0 0 30px #00aaff' : '0 0 30px #00FF00'
              : 'none',
            borderColor: isHovered
              ? (isSectionHovered ? '#00aaff' : '#00FF00')
              : (isSectionHovered ? '#00aaff30' : '#00FF0030')
          }}
        >
          {/* Badge Image */}
          <div className="relative mb-4">
            <div className="w-32 h-32 mx-auto relative">
              <img
                src={badge.image}
                alt={badge.title}
                className="w-full h-full object-contain rounded-xl"
              />
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  borderColor: isSectionHovered ? '#00aaff' : '#00FF00'
                }}
              ></div>
            </div>
            
            {/* Hover Effect */}
            {isHovered && (
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent rounded-xl"
                style={{
                  backgroundImage: isSectionHovered 
                    ? 'linear-gradient(to bottom, transparent, rgba(0, 170, 255, 0.1), transparent)' 
                    : 'linear-gradient(to bottom, transparent, rgba(0, 255, 0, 0.1), transparent)'
                }}
              ></div>
            )}
          </div>
          
          {/* Badge Title */}
          <h4 
            className="text-center mb-2 line-clamp-2 font-bold transition-all duration-300"
            style={{
              color: isSectionHovered ? '#93c5fd' : '#ffffff'
            }}
          >
            {badge.title}
          </h4>
          
          {/* Badge Issuer */}
          <p 
            className="text-sm text-center mb-1 transition-all duration-300"
            style={{
              color: isSectionHovered ? '#93c5fd' : '#00FF00'
            }}
          >
            {badge.issuer}
          </p>
          
          {/* Badge Date */}
          <p 
            className="text-xs text-center transition-all duration-300"
            style={{
              color: isSectionHovered ? '#93c5fd' : 'rgba(255, 255, 255, 0.7)'
            }}
          >
            {badge.earnedDate}
          </p>
          
          {/* Hover Indicator */}
          <div 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              color: isSectionHovered ? '#93c5fd' : '#00FF00'
            }}
          >
            Click to view details →
          </div>
        </div>
        
        {/* Corner Glow */}
        <div 
          className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-50 transition-all duration-300 pointer-events-none"
          style={{
            borderColor: isSectionHovered ? '#00aaff' : '#00FF00'
          }}
        ></div>
      </div>

      {/* Iron Man Virtual Glassy Screen Modal for Badge Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-700"
            onClick={closeModal}
          />
          
          {/* Glassy Screen Container */}
          <div className="relative z-10 w-full max-w-6xl animate-fadeInUp">
            {/* Iron Man Glassy Screen Effect */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Blue-ish Glassy Background with grid pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/15 to-indigo-600/20 backdrop-blur-xl">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-2xl shadow-[0_0_80px_#00FFFF,0_0_120px_#0066FF] animate-pulse"></div>
                
                {/* Scanning Lines Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scanning"></div>
                </div>
              </div>
              
              {/* Modal Content - Iron Man Glassy Screen Style */}
              <div className="relative p-4 sm:p-6 lg:p-8" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-red-500/20 border border-red-400/50 flex items-center justify-center text-white hover:bg-red-500/30 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.5)]"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Badge Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2" style={{
                    textShadow: "0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6)"
                  }}>
                    {badge.title}
                  </h3>
                  <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto shadow-[0_0_15px_#00FFFF]"></div>
                </div>
                
                {/* Badge Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Badge Image - Full Glassy Screen Style */}
                  <div className="lg:w-1/3">
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-cyan-400/30 shadow-[0_0_40px_rgba(0,200,255,0.3)]">
                      <div className="relative">
                        <img
                          src={badge.image}
                          alt={badge.title}
                          className="w-full h-auto max-h-[300px] object-contain rounded-lg border-2 border-cyan-400/50 shadow-[0_0_30px_#00FFFF]"
                        />
                        {/* Glowing Edge Effect */}
                        <div className="absolute inset-0 rounded-lg border border-cyan-300/20 animate-pulse pointer-events-none"></div>
                      </div>
                      
                      {/* Badge Type Indicator */}
                      <div className="mt-4 text-center">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                          DIGITAL BADGE
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badge Details - Glassy Screen Style */}
                  <div className="lg:w-2/3">
                    <div className="space-y-6">
                      {/* Badge Information Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20">
                          <h4 className="text-cyan-300 font-bold mb-2 flex items-center">
                            <span className="mr-2">🏢</span>
                            Issuer
                          </h4>
                          <p className="text-white text-lg font-semibold">{badge.issuer}</p>
                        </div>
                        
                        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20">
                          <h4 className="text-cyan-300 font-bold mb-2 flex items-center">
                            <span className="mr-2">📅</span>
                            Earned Date
                          </h4>
                          <p className="text-white text-lg font-semibold">{badge.earnedDate}</p>
                        </div>
                        
                        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20">
                          <h4 className="text-cyan-300 font-bold mb-2 flex items-center">
                            <span className="mr-2">🏷️</span>
                            Category
                          </h4>
                          <p className="text-white text-lg font-semibold">{badge.category}</p>
                        </div>
                        
                        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20">
                          <h4 className="text-cyan-300 font-bold mb-2 flex items-center">
                            <span className="mr-2">⚡</span>
                            Status
                          </h4>
                          <p className="text-white text-lg font-semibold">Verified • Active</p>
                        </div>
                      </div>
                      
                      {/* Badge Description - Glassy Screen Style */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center" style={{
                          textShadow: "0 0 10px rgba(0, 200, 255, 0.6)"
                        }}>
                          <span className="mr-2">📝</span>
                          Achievement Description
                        </h4>
                        <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-4 lg:p-6 shadow-[0_0_20px_rgba(0,200,255,0.2)]">
                          <div className="absolute inset-0 rounded-xl border border-cyan-300/10 animate-pulse pointer-events-none"></div>
                          <p className="text-white leading-relaxed text-sm lg:text-base relative z-10">
                            {badge.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Verify Button - Glassy Screen Style */}
                      {badge.credentialUrl && (
                        <div className="text-center pt-4 border-t border-cyan-400/20">
                          <a
                            href={badge.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_#00FFFF] text-base sm:text-lg"
                          >
                            <span className="mr-2">🔗</span>
                            Verify Badge Credential
                            <span className="ml-2 text-lg">↗</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Close Instructions */}
                <div className="text-center mt-6 pt-4 border-t border-cyan-400/20">
                  <p className="text-cyan-300 text-xs sm:text-sm">
                    Press <kbd className="px-2 py-1 bg-gray-900 rounded border border-cyan-500/50 mx-1">ESC</kbd> 
                    or click outside to close
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes scanning {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .animate-scanning {
          animation: scanning 3s linear infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default BadgeCard;

// Completed............................