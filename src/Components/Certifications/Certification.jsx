// // Certification.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { CertificationsInfo, BadgesInfo } from '../../Constants';
// import CuteBoy from '../../assets/hero/CuteBoy.png';
// import BadgeCard from './BadgeCard';

// const Certifications = () => {
//   const [activeTab, setActiveTab] = useState('certificates');
//   const [activeCertIndex, setActiveCertIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const timelineRef = useRef(null);
//   const locationSymbolRef = useRef(null);

//   // Handle timeline circle click
//   const handleCircleClick = (index) => {
//     if (isAnimating || index === activeCertIndex) return;
    
//     setIsAnimating(true);
//     setActiveCertIndex(index);
    
//     // Move location symbol
//     if (timelineRef.current && locationSymbolRef.current) {
//       const circles = timelineRef.current.querySelectorAll('.timeline-circle');
//       if (circles[index]) {
//         const circleRect = circles[index].getBoundingClientRect();
//         const timelineRect = timelineRef.current.getBoundingClientRect();
        
//         const circleCenterX = circleRect.left + circleRect.width / 2 - timelineRect.left;
//         const circleCenterY = circleRect.top + circleRect.height / 2 - timelineRect.top;
        
//         locationSymbolRef.current.style.left = `${circleCenterX - 20}px`;
//         locationSymbolRef.current.style.top = `${circleCenterY - 40}px`;
//       }
//     }
    
//     // Animation complete
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   // Initialize location symbol position
//   useEffect(() => {
//     if (timelineRef.current && locationSymbolRef.current) {
//       setTimeout(() => handleCircleClick(0), 100);
//     }
//   }, []);

//   // Navigation functions
//   const nextCertificate = () => {
//     if (activeCertIndex < CertificationsInfo.length - 1) {
//       handleCircleClick(activeCertIndex + 1);
//     }
//   };

//   const prevCertificate = () => {
//     if (activeCertIndex > 0) {
//       handleCircleClick(activeCertIndex - 1);
//     }
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (activeTab === 'certificates') {
//         if (e.key === 'ArrowRight') nextCertificate();
//         if (e.key === 'ArrowLeft') prevCertificate();
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [activeCertIndex, activeTab]);

//   // Current certificate
//   const currentCert = CertificationsInfo[activeCertIndex];

//   return (
//     <section id="certifications" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden min-h-screen">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-[#00FF00] rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               opacity: Math.random() * 0.5 + 0.3
//             }}
//           />
//         ))}
//       </div>

//       {/* Section Title */}
//       <div className="text-center mb-16 relative z-10">
//         <h2 className="text-4xl font-bold text-white" style={{
//           textShadow: "0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.4)"
//         }}>
//           CERTIFICATIONS & BADGES
//         </h2>
//         <div className="w-32 h-1 bg-[#00FF00] mx-auto mt-4 shadow-[0_0_10px_#00FF00]"></div>
//         <p className="text-white mt-4 text-lg font-semibold max-w-2xl mx-auto" style={{
//           textShadow: "0 0 10px rgba(255, 255, 255, 0.6)"
//         }}>
//           Interactive timeline showcasing professional achievements and credentials
//         </p>
//       </div>

//       {/* Tabs Navigation */}
//       <div className="flex justify-center mb-12">
//         <div className="bg-black/40 backdrop-blur-md rounded-full p-1 inline-flex border border-[#00FF00]/30">
//           <button
//             onClick={() => setActiveTab('certificates')}
//             className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
//               activeTab === 'certificates'
//                 ? 'bg-[#00FF00] text-black shadow-[0_0_20px_#00FF00]'
//                 : 'text-white hover:text-[#00FF00]'
//             }`}
//           >
//             Certificates ({CertificationsInfo.length})
//           </button>
//           <button
//             onClick={() => setActiveTab('badges')}
//             className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
//               activeTab === 'badges'
//                 ? 'bg-[#00FF00] text-black shadow-[0_0_20px_#00FF00]'
//                 : 'text-white hover:text-[#00FF00]'
//             }`}
//           >
//             Badges ({BadgesInfo.length})
//           </button>
//         </div>
//       </div>

//       {/* Certificates Tab Content */}
//       {activeTab === 'certificates' && (
//         <div className="relative">
//           {/* Timeline */}
//           <div 
//             ref={timelineRef}
//             className="relative mb-16 mx-4"
//           >
//             {/* Timeline Line */}
//             <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-[#00FF00] to-transparent opacity-30"></div>
            
//             {/* Location Symbol with CuteBoy Head */}
//             <div 
//               ref={locationSymbolRef}
//               className="absolute z-20 transition-all duration-500 ease-out"
//               style={{ transform: 'translate(-50%, -100%)' }}
//             >
//               <div className="relative">
//                 {/* Location Pin Body */}
//                 <div className="w-10 h-10 bg-gradient-to-b from-[#00FF00] to-[#00cc00] rounded-full flex items-center justify-center shadow-[0_0_20px_#00FF00]">
//                   {/* CuteBoy Head */}
//                   <img 
//                     src={CuteBoy} 
//                     alt="My Avatar" 
//                     className="w-8 h-8 rounded-full object-cover border-2 border-white"
//                   />
//                 </div>
//                 {/* Pin Point */}
//                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00FF00] rotate-45"></div>
//               </div>
//             </div>

//             {/* Timeline Circles */}
//             <div className="relative flex justify-between">
//               {CertificationsInfo.map((cert, index) => (
//                 <button
//                   key={cert.id}
//                   onClick={() => handleCircleClick(index)}
//                   className={`relative z-10 timeline-circle ${
//                     index === activeCertIndex 
//                       ? 'scale-125' 
//                       : 'hover:scale-110'
//                   } transition-transform duration-300`}
//                 >
//                   {/* Circle */}
//                   <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
//                     index === activeCertIndex
//                       ? 'bg-[#00FF00] border-[#00FF00] shadow-[0_0_20px_#00FF00]'
//                       : 'bg-black border-[#00FF00]/50 hover:border-[#00FF00] hover:shadow-[0_0_10px_#00FF00]'
//                   }`}>
//                     {index === activeCertIndex && (
//                       <div className="w-3 h-3 bg-black rounded-full"></div>
//                     )}
//                   </div>
                  
//                   {/* Circle Label */}
//                   <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-white/70">
//                     {index + 1}
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Certificate Card Display */}
//           <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-[#00FF00]/30 p-8 shadow-[0_0_40px_rgba(0,255,0,0.2)]">
//             {/* Certificate Image */}
//             <div className="mb-8 text-center">
//               <div className="inline-block relative">
//                 <img
//                   src={currentCert.image}
//                   alt={currentCert.title}
//                   className="w-full max-w-3xl h-64 object-contain rounded-xl border-4 border-[#00FF00]/30 shadow-[0_0_40px_#00FF00]"
//                 />
//                 <div className="absolute inset-0 rounded-xl border-2 border-[#00FF00] animate-pulse"></div>
//               </div>
//             </div>

//             {/* Certificate Details */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Left Column */}
//               <div>
//                 <h3 className="text-3xl font-bold text-white mb-4" style={{
//                   textShadow: "0 0 10px rgba(0, 255, 0, 0.6)"
//                 }}>
//                   {currentCert.title}
//                 </h3>
                
//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <span className="text-[#00FF00] font-semibold mr-3">Issuer:</span>
//                     <span className="text-white">{currentCert.issuer}</span>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <span className="text-[#00FF00] font-semibold mr-3">Date:</span>
//                     <span className="text-white">{currentCert.date || `${currentCert.Start_date} - ${currentCert.End_date}`}</span>
//                   </div>
                  
//                   {currentCert.credentialId && (
//                     <div className="flex items-center">
//                       <span className="text-[#00FF00] font-semibold mr-3">Credential ID:</span>
//                       <span className="text-white">{currentCert.credentialId}</span>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Right Column - Description */}
//               <div>
//                 <h4 className="text-xl font-bold text-white mb-4" style={{
//                   textShadow: "0 0 10px rgba(0, 255, 0, 0.4)"
//                 }}>
//                   Description
//                 </h4>
//                 <div className="bg-black/60 backdrop-blur-sm border border-white/20 rounded-xl p-6">
//                   <p className="text-white leading-relaxed">
//                     {currentCert.description}
//                   </p>
//                 </div>
                
//                 {/* Credential Links */}
//                 {(currentCert.credentialUrl || currentCert.CredentialUrl) && (
//                   <div className="mt-6">
//                     <a
//                       href={currentCert.credentialUrl || currentCert.CredentialUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center px-6 py-3 bg-[#00FF00] text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_#00FF00]"
//                     >
//                       Verify Credential
//                       <span className="ml-2">↗</span>
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-8 pt-8 border-t border-[#00FF00]/30">
//               <button
//                 onClick={prevCertificate}
//                 disabled={activeCertIndex === 0}
//                 className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center ${
//                   activeCertIndex === 0
//                     ? 'opacity-50 cursor-not-allowed'
//                     : 'hover:scale-105 hover:shadow-[0_0_20px_#00FF00]'
//                 }`}
//                 style={{
//                   background: 'rgba(0, 255, 0, 0.1)',
//                   border: '2px solid rgba(0, 255, 0, 0.5)',
//                   color: '#00FF00'
//                 }}
//               >
//                 ← Previous
//               </button>
              
//               <div className="text-white text-center">
//                 <span className="text-[#00FF00] font-bold">{activeCertIndex + 1}</span>
//                 <span className="mx-2">/</span>
//                 <span>{CertificationsInfo.length}</span>
//               </div>
              
//               <button
//                 onClick={nextCertificate}
//                 disabled={activeCertIndex === CertificationsInfo.length - 1}
//                 className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center ${
//                   activeCertIndex === CertificationsInfo.length - 1
//                     ? 'opacity-50 cursor-not-allowed'
//                     : 'hover:scale-105 hover:shadow-[0_0_20px_#00FF00]'
//                 }`}
//                 style={{
//                   background: 'rgba(0, 255, 0, 0.1)',
//                   border: '2px solid rgba(0, 255, 0, 0.5)',
//                   color: '#00FF00'
//                 }}
//               >
//                 Next →
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Badges Tab Content */}
//       {activeTab === 'badges' && (
//         <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-[#00FF00]/30 p-8 shadow-[0_0_40px_rgba(0,255,0,0.2)]">
//           <h3 className="text-2xl font-bold text-white mb-8 text-center" style={{
//             textShadow: "0 0 15px rgba(0, 255, 0, 0.8)"
//           }}>
//             Digital Badges Collection
//           </h3>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {BadgesInfo.map((badge) => (
//               <BadgeCard key={badge.id} badge={badge} />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Instructions */}
//       <div className="text-center mt-12 text-white/70 text-sm">
//         <p className="mb-2">💡 <span className="font-semibold">How to interact:</span></p>
//         <p>• Click timeline circles to navigate certificates</p>
//         <p>• Use arrow keys (← →) for quick navigation</p>
//         <p>• Switch between Certificates and Badges tabs</p>
//       </div>
//     </section>
//   );
// };

// export default Certifications;













// // Certification.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { CertificationsInfo, BadgesInfo } from '../../Constants';
// import CuteBoy from '../../assets/hero/CuteBoy.png';
// import BadgeCard from './BadgeCard';

// const Certifications = () => {
//   const [activeTab, setActiveTab] = useState('certificates');
//   const [activeCertIndex, setActiveCertIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [showCertificateModal, setShowCertificateModal] = useState(false);
//   const timelineRef = useRef(null);
//   const locationSymbolRef = useRef(null);
//   const circlesContainerRef = useRef(null);
//   const autoCarouselRef = useRef(null);
//   const audioRef = useRef(null);
//   const audioRef2 = useRef(null);
//   const circleClickAudioRef = useRef(null);
  
//   // State for mobile carousel
//   const [visibleCircles, setVisibleCircles] = useState([]);

//   // Sort certificates by latest date first
//   const sortedCertifications = [...CertificationsInfo].sort((a, b) => {
//     // Helper function to extract date for comparison
//     const getDateValue = (item) => {
//       // Priority: date > Start_date
//       if (item.date) {
//         // Handle date strings like "November 20, 2025" or "July 1, 2025 - September 30, 2025"
//         const dateStr = item.date.split(' - ')[0]; // Take start date if range
//         return new Date(dateStr);
//       } else if (item.Start_date) {
//         return new Date(item.Start_date);
//       }
//       return new Date(0); // Very old date if no date found
//     };
    
//     const dateA = getDateValue(a);
//     const dateB = getDateValue(b);
    
//     // Sort descending (newest first)
//     return dateB - dateA;
//   });

//   // Sort badges by latest date first
//   const sortedBadges = [...BadgesInfo].sort((a, b) => {
//     const dateA = a.earnedDate ? new Date(a.earnedDate) : new Date(0);
//     const dateB = b.earnedDate ? new Date(b.earnedDate) : new Date(0);
//     return dateB - dateA; // Newest first
//   });

//   // Initialize audio
//   useEffect(() => {
//     // Create audio instances
//     audioRef.current = new Audio('/sounds/Sound 1.mp3');
//     audioRef2.current = new Audio('/sounds/Sound 2.mp3');
//     circleClickAudioRef.current = new Audio('/sounds/Sound 2.mp3');
    
//     // Set audio volume
//     audioRef.current.volume = 0.3;
//     audioRef2.current.volume = 0.3;
//     circleClickAudioRef.current.volume = 0.2; // Lower volume for circle clicks
    
//     // Preload audio for mobile (important for mobile browsers)
//     const preloadAudio = async () => {
//       try {
//         await audioRef.current.load();
//         await audioRef2.current.load();
//         await circleClickAudioRef.current.load();
//       } catch (error) {
//         console.log("Audio preload failed, will load on play:", error);
//       }
//     };
    
//     preloadAudio();
    
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current = null;
//       }
//       if (audioRef2.current) {
//         audioRef2.current.pause();
//         audioRef2.current = null;
//       }
//       if (circleClickAudioRef.current) {
//         circleClickAudioRef.current.pause();
//         circleClickAudioRef.current = null;
//       }
//     };
//   }, []);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       setIsMobileView(window.innerWidth < 1024);
//     };
    
//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, []);

//   // Update visible circles for mobile/tablet
//   useEffect(() => {
//     if (isMobileView) {
//       const circles = [];
//       const totalCircles = sortedCertifications.length;
      
//       // Show current circle and next circle
//       if (activeCertIndex < totalCircles - 1) {
//         circles.push(activeCertIndex);
//         circles.push(activeCertIndex + 1);
//       } else {
//         circles.push(activeCertIndex - 1);
//         circles.push(activeCertIndex);
//       }
      
//       // Make sure we don't go out of bounds
//       const validCircles = circles.filter(index => index >= 0 && index < totalCircles);
//       setVisibleCircles(validCircles);
//     } else {
//       // Desktop - show all circles
//       setVisibleCircles(sortedCertifications.map((_, index) => index));
//     }
//   }, [activeCertIndex, isMobileView, sortedCertifications]);

//   // Function to play sound for mobile - with user interaction requirement
//   const playMobileSound = (audioInstance) => {
//     if (!audioInstance) return;
    
//     // For mobile browsers, audio needs to be triggered by user interaction
//     // We'll create a new audio instance each time for mobile
//     try {
//       const mobileAudio = new Audio(audioInstance.current.src);
//       mobileAudio.volume = audioInstance.current.volume;
//       mobileAudio.currentTime = 0;
      
//       // Play with a promise and catch any errors
//       const playPromise = mobileAudio.play();
//       if (playPromise !== undefined) {
//         playPromise.catch(error => {
//           console.log("Mobile audio play failed, trying alternative:", error);
//           // Try alternative approach for mobile
//           setTimeout(() => {
//             try {
//               mobileAudio.play().catch(e => console.log("Second attempt failed:", e));
//             } catch (e) {
//               console.log("Mobile audio completely failed:", e);
//             }
//           }, 100);
//         });
//       }
//     } catch (error) {
//       console.log("Mobile audio initialization failed:", error);
//     }
//   };

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

//   // Handle tab switching WITHOUT voice
//   const handleTabSwitch = (tabName) => {
//     setActiveTab(tabName);
//   };

//   // Handle certificate modal open with STRICT female robot voice
//   const handleCertificateOpen = () => {
//     setShowCertificateModal(true);
    
//     // Get current certificate info for voice
//     const currentCert = sortedCertifications[activeCertIndex];
    
//     // Speak with STRICT female robot voice
//     speakWithFemaleRobotVoice(`Opening ${currentCert.title}. Issued by ${currentCert.issuer}.`);
    
//     // Play Sound 1.mp3 - Different approach for mobile vs desktop
//     if (isMobileView) {
//       // Mobile: Use special mobile sound function
//       playMobileSound(audioRef);
//     } else {
//       // Desktop: Normal play
//       if (audioRef.current) {
//         audioRef.current.currentTime = 0;
//         audioRef.current.play().catch(e => console.log("Desktop Sound 1 failed:", e));
//       }
//     }
//   };

//   // Handle certificate modal close WITHOUT voice
//   const handleCertificateClose = () => {
//     setShowCertificateModal(false);
    
//     // Play Sound 2.mp3 - Different approach for mobile vs desktop
//     if (isMobileView) {
//       // Mobile: Use special mobile sound function
//       playMobileSound(audioRef2);
//     } else {
//       // Desktop: Normal play
//       if (audioRef2.current) {
//         audioRef2.current.currentTime = 0;
//         audioRef2.current.play().catch(e => console.log("Desktop Sound 2 failed:", e));
//       }
//     }
//   };

//   // Handle timeline circle click WITHOUT voice
//   const handleCircleClick = (index) => {
//     if (isAnimating || index === activeCertIndex) return;
    
//     setIsAnimating(true);
//     setActiveCertIndex(index);
    
//     // Move location symbol
//     moveLocationSymbol(index);
    
//     // Play sound for desktop circle clicks only (Sound 2.mp3) - NO VOICE
//     if (!isMobileView && circleClickAudioRef.current) {
//       try {
//         circleClickAudioRef.current.currentTime = 0;
//         circleClickAudioRef.current.play().catch(e => {
//           console.log("Desktop circle click sound failed:", e);
//         });
//       } catch (error) {
//         console.log("Desktop circle click audio error:", error);
//       }
//     }
    
//     // Animation complete
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   // Function to move location symbol
//   const moveLocationSymbol = (index) => {
//     if (timelineRef.current && locationSymbolRef.current) {
//       // Get all circles (both desktop and mobile)
//       const circles = timelineRef.current.querySelectorAll('.timeline-circle-btn');
      
//       if (circles.length > 0 && circles[index]) {
//         const circleRect = circles[index].getBoundingClientRect();
//         const timelineRect = timelineRef.current.getBoundingClientRect();
        
//         // Calculate position relative to timeline
//         const circleCenterX = circleRect.left + circleRect.width / 2 - timelineRect.left;
//         const circleCenterY = circleRect.top + circleRect.height / 2 - timelineRect.top;
        
//         // Set position with proper offsets
//         locationSymbolRef.current.style.left = `${circleCenterX}px`;
//         locationSymbolRef.current.style.top = `${circleCenterY}px`;
//         locationSymbolRef.current.style.transform = 'translate(-50%, -100%)';
//       }
//     }
//   };

//   // Initialize location symbol position
//   useEffect(() => {
//     const initLocationSymbol = () => {
//       if (timelineRef.current && locationSymbolRef.current) {
//         setTimeout(() => {
//           moveLocationSymbol(activeCertIndex);
//         }, 300); // Small delay to ensure DOM is ready
//       }
//     };

//     initLocationSymbol();
    
//     // Also update on window resize
//     const handleResize = () => {
//       setTimeout(() => {
//         moveLocationSymbol(activeCertIndex);
//       }, 100);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [activeCertIndex]);

//   // Function to start auto carousel for mobile/tablet
//   const startAutoCarousel = () => {
//     // Clear any existing interval first
//     if (autoCarouselRef.current) {
//       clearInterval(autoCarouselRef.current);
//       autoCarouselRef.current = null;
//     }
    
//     // Only start auto carousel for mobile/tablet
//     if (isMobileView && activeTab === 'certificates' && !showCertificateModal && !isHovered) {
//       autoCarouselRef.current = setInterval(() => {
//         setActiveCertIndex(prevIndex => {
//           const nextIndex = prevIndex === sortedCertifications.length - 1 ? 0 : prevIndex + 1;
          
//           // Move location symbol for auto carousel
//           setTimeout(() => moveLocationSymbol(nextIndex), 10);
          
//           return nextIndex;
//         });
//       }, 3000); // Change every 3 seconds
//     }
//   };

//   // Function to stop auto carousel
//   const stopAutoCarousel = () => {
//     if (autoCarouselRef.current) {
//       clearInterval(autoCarouselRef.current);
//       autoCarouselRef.current = null;
//     }
//   };

//   // Auto carousel for mobile/tablet ONLY - with proper hover control
//   useEffect(() => {
//     // Start auto carousel when conditions are met
//     if (isMobileView && activeTab === 'certificates' && !showCertificateModal && !isHovered) {
//       startAutoCarousel();
//     } else {
//       stopAutoCarousel();
//     }
    
//     // Cleanup on unmount or dependency change
//     return () => {
//       stopAutoCarousel();
//     };
//   }, [isMobileView, activeTab, showCertificateModal, isHovered, activeCertIndex]);

//   // Handle hover for auto carousel pause - MOBILE/TABLET ONLY
//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     // Stop auto carousel when hovered (for mobile/tablet)
//     if (isMobileView) {
//       stopAutoCarousel();
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     // Resume auto carousel when hover ends (for mobile/tablet)
//     if (isMobileView) {
//       // Start auto carousel after a small delay
//       setTimeout(() => {
//         if (!isHovered && isMobileView && activeTab === 'certificates' && !showCertificateModal) {
//           startAutoCarousel();
//         }
//       }, 500);
//     }
//   };

//   // Handle touch for mobile
//   const handleTouchStart = () => {
//     setIsHovered(true);
//     // Stop auto carousel on touch start (for mobile/tablet)
//     if (isMobileView) {
//       stopAutoCarousel();
//     }
//   };

//   const handleTouchEnd = () => {
//     // Resume auto carousel after touch ends with delay
//     setTimeout(() => {
//       setIsHovered(false);
//       if (isMobileView) {
//         // Start auto carousel after touch ends
//         setTimeout(() => {
//           if (!isHovered && isMobileView && activeTab === 'certificates' && !showCertificateModal) {
//             startAutoCarousel();
//           }
//         }, 1000);
//       }
//     }, 100);
//   };

//   // Close modal on ESC key
//   useEffect(() => {
//     const handleEscKey = (e) => {
//       if (e.key === 'Escape' && showCertificateModal) {
//         handleCertificateClose();
//       }
//     };
    
//     window.addEventListener('keydown', handleEscKey);
//     return () => window.removeEventListener('keydown', handleEscKey);
//   }, [showCertificateModal]);

//   // Navigation functions WITHOUT voice
//   const nextCertificate = () => {
//     if (activeCertIndex < sortedCertifications.length - 1) {
//       handleCircleClick(activeCertIndex + 1);
//     } else {
//       handleCircleClick(0); // Loop back to start
//     }
//   };

//   const prevCertificate = () => {
//     if (activeCertIndex > 0) {
//       handleCircleClick(activeCertIndex - 1);
//     } else {
//       handleCircleClick(sortedCertifications.length - 1); // Loop to end
//     }
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (activeTab === 'certificates') {
//         if (e.key === 'ArrowRight') nextCertificate();
//         if (e.key === 'ArrowLeft') prevCertificate();
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [activeCertIndex, activeTab]);

//   // Mobile-specific navigation
//   const goToNextCircle = () => {
//     nextCertificate();
//   };

//   const goToPrevCircle = () => {
//     prevCertificate();
//   };

//   // Current certificate
//   const currentCert = sortedCertifications[activeCertIndex];

//   return (
//     <>
//       <section id="certifications" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden min-h-screen">
//         {/* Animated background particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(15)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-[#00FF00] rounded-full animate-pulse"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 opacity: Math.random() * 0.5 + 0.3
//               }}
//             />
//           ))}
//         </div>

//         {/* Section Title */}
//         <div className="text-center mb-10 lg:mb-16 relative z-10">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" style={{
//             textShadow: "0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0)"
//           }}>
//             CERTIFICATIONS & BADGES
//           </h2>
//           <div className="w-32 h-1 bg-[#00FF00] mx-auto mt-4 shadow-[0_0_10px_#00FF00]"></div>
//           <p className="text-white mt-4 text-sm sm:text-base lg:text-lg font-semibold max-w-2xl mx-auto px-4" style={{
//             textShadow: "0 0 10px rgba(255, 255, 255, 0.6)"
//           }}>
//             Interactive timeline showcasing professional achievements and credentials
//           </p>
//         </div>

//         {/* Tabs Navigation */}
//         <div className="flex justify-center mb-8 lg:mb-12 px-4">
//           <div className="bg-black/40 backdrop-blur-md rounded-full p-1 inline-flex border border-[#00FF00]/30">
//             <button
//               onClick={() => handleTabSwitch('certificates')}
//               className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
//                 activeTab === 'certificates'
//                   ? 'bg-[#00FF00] text-black shadow-[0_0_20px_#00FF00]'
//                   : 'text-white hover:text-[#00FF00]'
//               }`}
//             >
//               Certificates ({sortedCertifications.length})
//             </button>
//             <button
//               onClick={() => handleTabSwitch('badges')}
//               className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
//                 activeTab === 'badges'
//                   ? 'bg-[#00FF00] text-black shadow-[0_0_20px_#00FF00]'
//                   : 'text-white hover:text-[#00FF00]'
//               }`}
//             >
//               Badges ({sortedBadges.length})
//             </button>
//           </div>
//         </div>

//         {/* Certificates Tab Content */}
//         {activeTab === 'certificates' && (
//           <div className="relative">
//             {/* Mobile/Tablet Carousel Navigation Arrows */}
//             <div className="lg:hidden flex justify-between items-center mb-6 px-4">
//               <button
//                 onClick={goToPrevCircle}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 onTouchStart={handleTouchStart}
//                 onTouchEnd={handleTouchEnd}
//                 disabled={activeCertIndex === 0}
//                 className={`p-3 rounded-full transition-all duration-300 ${
//                   activeCertIndex === 0
//                     ? 'opacity-30 cursor-not-allowed'
//                     : 'hover:scale-110 active:scale-95'
//                 }`}
//                 style={{
//                   background: 'rgba(0, 255, 0, 0.1)',
//                   border: '2px solid rgba(0, 255, 0, 0.5)',
//                   color: '#00FF00'
//                 }}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
              
//               <div className="text-white text-center">
//                 <div className="flex items-center justify-center">
//                   <span className="text-[#00FF00] font-bold text-lg">{activeCertIndex + 1}</span>
//                   <span className="mx-2">/</span>
//                   <span className="text-lg">{sortedCertifications.length}</span>
//                 </div>
//                 <p className="text-xs text-gray-300 mt-1">
//                   {isHovered ? 'Paused' : 'Auto-scrolling'}
//                 </p>
//               </div>
              
//               <button
//                 onClick={goToNextCircle}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 onTouchStart={handleTouchStart}
//                 onTouchEnd={handleTouchEnd}
//                 disabled={activeCertIndex === sortedCertifications.length - 1}
//                 className={`p-3 rounded-full transition-all duration-300 ${
//                   activeCertIndex === sortedCertifications.length - 1
//                     ? 'opacity-30 cursor-not-allowed'
//                     : 'hover:scale-110 active:scale-95'
//                 }`}
//                 style={{
//                   background: 'rgba(0, 255, 0, 0.1)',
//                   border: '2px solid rgba(0, 255, 0, 0.5)',
//                   color: '#00FF00'
//                 }}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>

//             {/* Timeline */}
//             <div 
//               ref={timelineRef}
//               className="relative mb-8 lg:mb-16 mx-2 lg:mx-4"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               onTouchStart={handleTouchStart}
//               onTouchEnd={handleTouchEnd}
//             >
//               {/* Timeline Line - Hide on mobile, show on desktop */}
//               <div className="hidden lg:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-[#00FF00] to-transparent opacity-30"></div>
              
//               {/* Mobile Timeline Line (shorter, between visible circles) */}
//               <div className="lg:hidden absolute left-1/4 right-1/4 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-[#00FF00] via-[#00FF00] to-[#00FF00] opacity-30"></div>
              
//               {/* Location Symbol with CuteBoy Head - REVERTED TO ORIGINAL */}
//               <div 
//                 ref={locationSymbolRef}
//                 className="absolute z-30 transition-all duration-500 ease-out"
//                 style={{ 
//                   transform: 'translate(-50%, -100%)',
//                   willChange: 'left, top'
//                 }}
//               >
//                 <div className="relative">
//                   {/* Location Pin Body - ORIGINAL VERSION */}
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-b from-[#00FF00] to-[#00cc00] rounded-full flex items-center justify-center shadow-[0_0_20px_#00FF00] animate-pulse">
//                     {/* CuteBoy Head - ORIGINAL VERSION (no transform, no object-position) */}
//                     <img 
//                       src={CuteBoy} 
//                       alt="My Avatar" 
//                       className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white"
//                     />
//                   </div>
//                   {/* Pin Point */}
//                   <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-[#00FF00] rotate-45 shadow-[0_0_10px_#00FF00]"></div>
//                 </div>
//               </div>

//               {/* Timeline Circles */}
//               <div 
//                 ref={circlesContainerRef}
//                 className="relative flex justify-between lg:justify-between"
//               >
//                 {/* Desktop: Show all circles */}
//                 <div className="hidden lg:flex w-full justify-between">
//                   {sortedCertifications.map((cert, index) => (
//                     <button
//                       key={cert.id}
//                       onClick={() => handleCircleClick(index)}
//                       className={`relative z-10 timeline-circle-btn ${
//                         index === activeCertIndex 
//                           ? 'scale-125' 
//                           : 'hover:scale-110'
//                       } transition-transform duration-300`}
//                     >
//                       {/* Circle */}
//                       <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
//                         index === activeCertIndex
//                           ? 'bg-[#00FF00] border-[#00FF00] shadow-[0_0_20px_#00FF00]'
//                           : 'bg-black border-[#00FF00]/50 hover:border-[#00FF00] hover:shadow-[0_0_10px_#00FF00]'
//                       }`}>
//                         {index === activeCertIndex && (
//                           <div className="w-3 h-3 bg-black rounded-full"></div>
//                         )}
//                       </div>
                      
//                       {/* Circle Label */}
//                       <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-white/70">
//                         {index + 1}
//                       </div>
//                     </button>
//                   ))}
//                 </div>

//                 {/* Mobile/Tablet: Show only visible circles in carousel */}
//                 <div className="lg:hidden flex w-full justify-around">
//                   {visibleCircles.map((index) => {
//                     const cert = sortedCertifications[index];
//                     return (
//                       <button
//                         key={cert.id}
//                         onClick={() => handleCircleClick(index)}
//                         onMouseEnter={handleMouseEnter}
//                         onMouseLeave={handleMouseLeave}
//                         onTouchStart={handleTouchStart}
//                         onTouchEnd={handleTouchEnd}
//                         className={`relative z-20 timeline-circle-btn ${
//                           index === activeCertIndex 
//                             ? 'scale-125' 
//                             : 'opacity-70 hover:opacity-100'
//                         } transition-all duration-300`}
//                       >
//                         {/* Circle */}
//                         <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
//                           index === activeCertIndex
//                             ? 'bg-[#00FF00] border-[#00FF00] shadow-[0_0_20px_#00FF00]'
//                             : 'bg-black border-[#00FF00]/50'
//                         }`}>
//                           {index === activeCertIndex && (
//                             <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full"></div>
//                           )}
//                           {index !== activeCertIndex && (
//                             <span className="text-white text-sm sm:text-base font-bold">{index + 1}</span>
//                           )}
//                         </div>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>

//             {/* Certificate Card Display */}
//             <div 
//               className="bg-black/40 backdrop-blur-lg rounded-2xl border border-[#00FF00]/30 p-4 sm:p-6 lg:p-8 shadow-[0_0_40px_rgba(0,255,0,0.2)]"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               onTouchStart={handleTouchStart}
//               onTouchEnd={handleTouchEnd}
//             >
//               {/* Certificate Image - Removed text above image for mobile/tablet */}
//               <div className="mb-6 lg:mb-8 text-center">
//                 <div 
//                   className="inline-block relative group cursor-pointer transform transition-transform duration-500 hover:scale-105"
//                   onClick={handleCertificateOpen}
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <img
//                     src={currentCert.image}
//                     alt={currentCert.title}
//                     className="w-full max-w-3xl h-48 sm:h-56 lg:h-64 object-contain rounded-xl border-4 border-[#00FF00]/30 shadow-[0_0_40px_#00FF00] group-hover:shadow-[0_0_60px_#00FF00] transition-all duration-500"
//                   />
//                   <div className="absolute inset-0 rounded-xl border-2 border-[#00FF00] animate-pulse"></div>
                  
//                   {/* Hover Overlay Effect */}
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#00FF00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
//                   {/* Hover Text */}
//                   <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap bg-black/70 px-3 py-1 rounded-full">
//                     Click/Tap to view full certificate
//                   </div>
//                 </div>
//               </div>

//               {/* Certificate Details */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
//                 {/* Left Column */}
//                 <div>
//                   <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4" style={{
//                     textShadow: "0 0 10px rgba(0, 255, 0, 0.6)"
//                   }}>
//                     {currentCert.title}
//                   </h3>
                  
//                   <div className="space-y-3 lg:space-y-4">
//                     <div className="flex items-center">
//                       <span className="text-[#00FF00] font-semibold mr-3 text-sm lg:text-base">Issuer:</span>
//                       <span className="text-white text-sm lg:text-base">{currentCert.issuer}</span>
//                     </div>
                    
//                     <div className="flex items-center">
//                       <span className="text-[#00FF00] font-semibold mr-3 text-sm lg:text-base">Date:</span>
//                       <span className="text-white text-sm lg:text-base">{currentCert.date || `${currentCert.Start_date} - ${currentCert.End_date}`}</span>
//                     </div>
                    
//                     {currentCert.credentialId && (
//                       <div className="flex items-center">
//                         <span className="text-[#00FF00] font-semibold mr-3 text-sm lg:text-base">Credential ID:</span>
//                         <span className="text-white text-sm lg:text-base">{currentCert.credentialId}</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Right Column - Description */}
//                 <div>
//                   <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4" style={{
//                     textShadow: "0 0 10px rgba(0, 255, 0, 0.4)"
//                   }}>
//                     Description
//                   </h4>
//                   <div className="bg-black/60 backdrop-blur-sm border border-white/20 rounded-xl p-4 lg:p-6">
//                     <p className="text-white leading-relaxed text-sm lg:text-base">
//                       {currentCert.description}
//                     </p>
//                   </div>
                  
//                   {/* Credential Links */}
//                   {(currentCert.credentialUrl || currentCert.CredentialUrl) && (
//                     <div className="mt-4 lg:mt-6">
//                       <a
//                         href={currentCert.credentialUrl || currentCert.CredentialUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-[#00FF00] text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_#00FF00] text-sm lg:text-base"
//                       >
//                         Verify Credential
//                         <span className="ml-2">↗</span>
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Navigation Buttons - Only for desktop */}
//               <div className="hidden lg:flex justify-between mt-8 pt-8 border-t border-[#00FF00]/30">
//                 <button
//                   onClick={prevCertificate}
//                   disabled={activeCertIndex === 0}
//                   className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center ${
//                     activeCertIndex === 0
//                       ? 'opacity-50 cursor-not-allowed'
//                       : 'hover:scale-105 hover:shadow-[0_0_20px_#00FF00]'
//                   }`}
//                   style={{
//                     background: 'rgba(0, 255, 0, 0.1)',
//                     border: '2px solid rgba(0, 255, 0, 0.5)',
//                     color: '#00FF00'
//                   }}
//                 >
//                   ← Previous
//                 </button>
                
//                 <div className="text-white text-center">
//                   <span className="text-[#00FF00] font-bold">{activeCertIndex + 1}</span>
//                   <span className="mx-2">/</span>
//                   <span>{sortedCertifications.length}</span>
//                 </div>
                
//                 <button
//                   onClick={nextCertificate}
//                   disabled={activeCertIndex === sortedCertifications.length - 1}
//                   className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center ${
//                     activeCertIndex === sortedCertifications.length - 1
//                       ? 'opacity-50 cursor-not-allowed'
//                       : 'hover:scale-105 hover:shadow-[0_0_20px_#00FF00]'
//                   }`}
//                   style={{
//                     background: 'rgba(0, 255, 0, 0.1)',
//                     border: '2px solid rgba(0, 255, 0, 0.5)',
//                     color: '#00FF00'
//                   }}
//                 >
//                   Next →
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Badges Tab Content */}
//         {activeTab === 'badges' && (
//           <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-[#00FF00]/30 p-4 sm:p-6 lg:p-8 shadow-[0_0_40px_rgba(0,255,0,0.2)]">
//             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 text-center" style={{
//               textShadow: "0 0 15px rgba(0, 255, 0, 0.8)"
//             }}>
//               Digital Badges Collection
//             </h3>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//               {sortedBadges.map((badge) => (
//                 <BadgeCard key={badge.id} badge={badge} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Instructions - Updated for sound info */}
//         <div className="text-center mt-6 sm:mt-8 lg:mt-12 text-white/70 text-xs sm:text-sm">
//           <p className="mb-2">💡 <span className="font-semibold">How to interact:</span></p>
//           <p className="mb-1 hidden lg:block">• Click certificate image to view full certificate</p>
//           <p className="mb-1 hidden lg:block">• Click timeline circles to navigate certificates</p>
//           <p className="mb-1 lg:hidden">• Tap certificate image to view full certificate</p>
//           <p className="mb-1 lg:hidden">• Tap circles to navigate</p>
//           <p>• Switch between Certificates and Badges tabs</p>
//         </div>
//       </section>

//       {/* Iron Man Virtual Glassy Screen Modal - SIMPLIFIED VERSION */}
//       {showCertificateModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-700"
//             onClick={handleCertificateClose}
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
              
//               {/* Modal Content - SIMPLIFIED: Only Full Certificate and Verify Credential */}
//               <div className="relative p-4 sm:p-6 lg:p-8">
//                 {/* Close Button */}
//                 <button
//                   onClick={handleCertificateClose}
//                   className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-red-500/20 border border-red-400/50 flex items-center justify-center text-white hover:bg-red-500/30 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.5)]"
//                   aria-label="Close"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
                
//                 {/* Certificate Title */}
//                 <div className="text-center mb-6">
//                   <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2" style={{
//                     textShadow: "0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6)"
//                   }}>
//                     {currentCert.title}
//                   </h3>
//                   <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto shadow-[0_0_15px_#00FFFF]"></div>
//                 </div>
                
//                 {/* Full Certificate Image - LARGER and CENTERED */}
//                 <div className="relative mb-6">
//                   <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-cyan-400/30 shadow-[0_0_40px_rgba(0,200,255,0.3)]">
//                     <img
//                       src={currentCert.image}
//                       alt={`Full Certificate - ${currentCert.title}`}
//                       className="w-full h-auto max-h-[75vh] object-contain rounded-lg border-2 border-cyan-400/50 shadow-[0_0_30px_#00FFFF]"
//                     />
//                     {/* Glowing Edge Effect */}
//                     <div className="absolute inset-0 rounded-lg border border-cyan-300/20 animate-pulse pointer-events-none"></div>
//                   </div>
//                 </div>
                
//                 {/* Verify Credential Button - CENTERED */}
//                 <div className="text-center">
//                   {(currentCert.credentialUrl || currentCert.CredentialUrl) && (
//                     <a
//                       href={currentCert.credentialUrl || currentCert.CredentialUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_#00FFFF] text-base sm:text-lg"
//                     >
//                       🔗 Verify Credential
//                       <span className="ml-2 text-lg">↗</span>
//                     </a>
//                   )}
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
//       `}</style>
//     </>
//   );
// };

// export default Certifications;





















// Certification.jsx
import React, { useState, useEffect, useRef } from 'react';
import { CertificationsInfo, BadgesInfo } from '../../Constants';
import CuteBoy from '../../assets/hero/CuteBoy.png';
import BadgeCard from './BadgeCard';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('certificates');
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const timelineRef = useRef(null);
  const locationSymbolRef = useRef(null);
  const circlesContainerRef = useRef(null);
  const autoCarouselRef = useRef(null);
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);
  const circleClickAudioRef = useRef(null);
  const sectionHoverAudioRef = useRef(null);
  
  // State for mobile carousel
  const [visibleCircles, setVisibleCircles] = useState([]);

  // Sort certificates by latest date first
  const sortedCertifications = [...CertificationsInfo].sort((a, b) => {
    // Helper function to extract date for comparison
    const getDateValue = (item) => {
      // Priority: date > Start_date
      if (item.date) {
        // Handle date strings like "November 20, 2025" or "July 1, 2025 - September 30, 2025"
        const dateStr = item.date.split(' - ')[0]; // Take start date if range
        return new Date(dateStr);
      } else if (item.Start_date) {
        return new Date(item.Start_date);
      }
      return new Date(0); // Very old date if no date found
    };
    
    const dateA = getDateValue(a);
    const dateB = getDateValue(b);
    
    // Sort descending (newest first)
    return dateB - dateA;
  });

  // Sort badges by latest date first
  const sortedBadges = [...BadgesInfo].sort((a, b) => {
    const dateA = a.earnedDate ? new Date(a.earnedDate) : new Date(0);
    const dateB = b.earnedDate ? new Date(b.earnedDate) : new Date(0);
    return dateB - dateA; // Newest first
  });

  // Initialize audio
  useEffect(() => {
    // Create audio instances
    audioRef.current = new Audio('/sounds/Sound 1.mp3');
    audioRef2.current = new Audio('/sounds/Sound 2.mp3');
    circleClickAudioRef.current = new Audio('/sounds/Sound 2.mp3');
    sectionHoverAudioRef.current = new Audio('/sounds/Sound 2.mp3');
    
    // Set audio volume
    audioRef.current.volume = 0.3;
    audioRef2.current.volume = 0.3;
    circleClickAudioRef.current.volume = 0.2;
    sectionHoverAudioRef.current.volume = 0.2;
    
    // Preload audio for mobile (important for mobile browsers)
    const preloadAudio = async () => {
      try {
        await audioRef.current.load();
        await audioRef2.current.load();
        await circleClickAudioRef.current.load();
        await sectionHoverAudioRef.current.load();
      } catch (error) {
        console.log("Audio preload failed, will load on play:", error);
      }
    };
    
    preloadAudio();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioRef2.current) {
        audioRef2.current.pause();
        audioRef2.current = null;
      }
      if (circleClickAudioRef.current) {
        circleClickAudioRef.current.pause();
        circleClickAudioRef.current = null;
      }
      if (sectionHoverAudioRef.current) {
        sectionHoverAudioRef.current.pause();
        sectionHoverAudioRef.current = null;
      }
    };
  }, []);

  // Check if mobile/tablet view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  // Update visible circles for mobile/tablet
  useEffect(() => {
    if (isMobileView) {
      const circles = [];
      const totalCircles = sortedCertifications.length;
      
      // Show current circle and next circle
      if (activeCertIndex < totalCircles - 1) {
        circles.push(activeCertIndex);
        circles.push(activeCertIndex + 1);
      } else {
        circles.push(activeCertIndex - 1);
        circles.push(activeCertIndex);
      }
      
      // Make sure we don't go out of bounds
      const validCircles = circles.filter(index => index >= 0 && index < totalCircles);
      setVisibleCircles(validCircles);
    } else {
      // Desktop - show all circles
      setVisibleCircles(sortedCertifications.map((_, index) => index));
    }
  }, [activeCertIndex, isMobileView, sortedCertifications]);

  // Function to play sound for mobile - with user interaction requirement
  const playMobileSound = (audioInstance) => {
    if (!audioInstance) return;
    
    // For mobile browsers, audio needs to be triggered by user interaction
    try {
      const mobileAudio = new Audio(audioInstance.current.src);
      mobileAudio.volume = audioInstance.current.volume;
      mobileAudio.currentTime = 0;
      
      const playPromise = mobileAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Mobile audio play failed, trying alternative:", error);
          setTimeout(() => {
            try {
              mobileAudio.play().catch(e => console.log("Second attempt failed:", e));
            } catch (e) {
              console.log("Mobile audio completely failed:", e);
            }
          }, 100);
        });
      }
    } catch (error) {
      console.log("Mobile audio initialization failed:", error);
    }
  };

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

  // Play section hover sound
  const playSectionHoverSound = () => {
    if (sectionHoverAudioRef.current) {
      sectionHoverAudioRef.current.currentTime = 0;
      sectionHoverAudioRef.current.play().catch(e => console.log("Section hover sound failed:", e));
    }
  };

  // Handle tab switching WITHOUT voice
  const handleTabSwitch = (tabName) => {
    setActiveTab(tabName);
  };

  // Handle certificate modal open with STRICT female robot voice
  const handleCertificateOpen = () => {
    setShowCertificateModal(true);
    
    const currentCert = sortedCertifications[activeCertIndex];
    speakWithFemaleRobotVoice(`Opening ${currentCert.title}. Issued by ${currentCert.issuer}.`);
    
    if (isMobileView) {
      playMobileSound(audioRef);
    } else {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => console.log("Desktop Sound 1 failed:", e));
      }
    }
  };

  // Handle certificate modal close WITHOUT voice
  const handleCertificateClose = () => {
    setShowCertificateModal(false);
    
    if (isMobileView) {
      playMobileSound(audioRef2);
    } else {
      if (audioRef2.current) {
        audioRef2.current.currentTime = 0;
        audioRef2.current.play().catch(e => console.log("Desktop Sound 2 failed:", e));
      }
    }
  };

  // Handle timeline circle click WITHOUT voice
  const handleCircleClick = (index) => {
    if (isAnimating || index === activeCertIndex) return;
    
    setIsAnimating(true);
    setActiveCertIndex(index);
    moveLocationSymbol(index);
    
    if (!isMobileView && circleClickAudioRef.current) {
      try {
        circleClickAudioRef.current.currentTime = 0;
        circleClickAudioRef.current.play().catch(e => {
          console.log("Desktop circle click sound failed:", e);
        });
      } catch (error) {
        console.log("Desktop circle click audio error:", error);
      }
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Function to move location symbol
  const moveLocationSymbol = (index) => {
    if (timelineRef.current && locationSymbolRef.current) {
      const circles = timelineRef.current.querySelectorAll('.timeline-circle-btn');
      
      if (circles.length > 0 && circles[index]) {
        const circleRect = circles[index].getBoundingClientRect();
        const timelineRect = timelineRef.current.getBoundingClientRect();
        
        const circleCenterX = circleRect.left + circleRect.width / 2 - timelineRect.left;
        const circleCenterY = circleRect.top + circleRect.height / 2 - timelineRect.top;
        
        locationSymbolRef.current.style.left = `${circleCenterX}px`;
        locationSymbolRef.current.style.top = `${circleCenterY}px`;
        locationSymbolRef.current.style.transform = 'translate(-50%, -100%)';
      }
    }
  };

  // Initialize location symbol position
  useEffect(() => {
    const initLocationSymbol = () => {
      if (timelineRef.current && locationSymbolRef.current) {
        setTimeout(() => {
          moveLocationSymbol(activeCertIndex);
        }, 300);
      }
    };

    initLocationSymbol();
    
    const handleResize = () => {
      setTimeout(() => {
        moveLocationSymbol(activeCertIndex);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeCertIndex]);

  // Function to start auto carousel for mobile/tablet
  const startAutoCarousel = () => {
    if (autoCarouselRef.current) {
      clearInterval(autoCarouselRef.current);
      autoCarouselRef.current = null;
    }
    
    if (isMobileView && activeTab === 'certificates' && !showCertificateModal && !isHovered) {
      autoCarouselRef.current = setInterval(() => {
        setActiveCertIndex(prevIndex => {
          const nextIndex = prevIndex === sortedCertifications.length - 1 ? 0 : prevIndex + 1;
          setTimeout(() => moveLocationSymbol(nextIndex), 10);
          return nextIndex;
        });
      }, 3000);
    }
  };

  // Function to stop auto carousel
  const stopAutoCarousel = () => {
    if (autoCarouselRef.current) {
      clearInterval(autoCarouselRef.current);
      autoCarouselRef.current = null;
    }
  };

  // Auto carousel for mobile/tablet ONLY - with proper hover control
  useEffect(() => {
    if (isMobileView && activeTab === 'certificates' && !showCertificateModal && !isHovered) {
      startAutoCarousel();
    } else {
      stopAutoCarousel();
    }
    
    return () => {
      stopAutoCarousel();
    };
  }, [isMobileView, activeTab, showCertificateModal, isHovered, activeCertIndex]);

  // Handle hover for auto carousel pause - MOBILE/TABLET ONLY
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isMobileView) {
      stopAutoCarousel();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isMobileView) {
      setTimeout(() => {
        if (!isHovered && isMobileView && activeTab === 'certificates' && !showCertificateModal) {
          startAutoCarousel();
        }
      }, 500);
    }
  };

  // Handle touch for mobile
  const handleTouchStart = () => {
    setIsHovered(true);
    if (isMobileView) {
      stopAutoCarousel();
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsHovered(false);
      if (isMobileView) {
        setTimeout(() => {
          if (!isHovered && isMobileView && activeTab === 'certificates' && !showCertificateModal) {
            startAutoCarousel();
          }
        }, 1000);
      }
    }, 100);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && showCertificateModal) {
        handleCertificateClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showCertificateModal]);

  // Navigation functions WITHOUT voice
  const nextCertificate = () => {
    if (activeCertIndex < sortedCertifications.length - 1) {
      handleCircleClick(activeCertIndex + 1);
    } else {
      handleCircleClick(0);
    }
  };

  const prevCertificate = () => {
    if (activeCertIndex > 0) {
      handleCircleClick(activeCertIndex - 1);
    } else {
      handleCircleClick(sortedCertifications.length - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeTab === 'certificates') {
        if (e.key === 'ArrowRight') nextCertificate();
        if (e.key === 'ArrowLeft') prevCertificate();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCertIndex, activeTab]);

  // Mobile-specific navigation
  const goToNextCircle = () => {
    nextCertificate();
  };

  const goToPrevCircle = () => {
    prevCertificate();
  };

  // Current certificate
  const currentCert = sortedCertifications[activeCertIndex];

  return (
    <>
      <section 
        id="certifications" 
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden min-h-screen"
        onMouseEnter={() => {
          setIsSectionHovered(true);
          playSectionHoverSound();
        }}
        onMouseLeave={() => setIsSectionHovered(false)}
        onTouchStart={() => {
          setIsSectionHovered(true);
          playSectionHoverSound();
        }}
        onTouchEnd={() => setTimeout(() => setIsSectionHovered(false), 300)}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-pulse transition-all duration-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.3,
                backgroundColor: isSectionHovered ? '#00aaff' : '#00FF00'
              }}
            />
          ))}
        </div>

        {/* Section Title - MODIFIED */}
        <div className="text-center mb-10 lg:mb-16 relative z-10">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            style={{
              backgroundImage: isSectionHovered 
                ? 'linear-gradient(to right, #00aaff, #00ffff, #00aaff)' 
                : 'none',
              backgroundClip: isSectionHovered ? 'text' : 'none',
              WebkitBackgroundClip: isSectionHovered ? 'text' : 'none',
              color: isSectionHovered ? 'transparent' : '#ffffff',
              textShadow: isSectionHovered 
                ? 'none' 
                : '0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0)',
              animation: isSectionHovered 
                ? 'gradient-shift 3s ease infinite' 
                : 'none',
              backgroundSize: isSectionHovered ? '200% 100%' : '100% 100%'
            }}
          >
            CERTIFICATIONS & BADGES
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
          <p className="text-white/80 mt-6 text-sm sm:text-base lg:text-lg font-semibold max-w-2xl mx-auto px-4">
            Interactive timeline showcasing professional achievements and credentials
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 lg:mb-12 px-4">
          <div 
            className="bg-black/40 backdrop-blur-md rounded-full p-1 inline-flex transition-all duration-300"
            style={{
              border: `1px solid ${isSectionHovered ? '#00aaff' : '#00FF00'}30`
            }}
          >
            <button
              onClick={() => handleTabSwitch('certificates')}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'certificates'
                  ? 'text-black shadow-[0_0_20px]'
                  : 'text-white hover:text-[#00FF00]'
              }`}
              style={{
                backgroundColor: activeTab === 'certificates' 
                  ? (isSectionHovered ? '#00aaff' : '#00FF00')
                  : 'transparent',
                boxShadow: activeTab === 'certificates' 
                  ? isSectionHovered ? '0 0 20px #00aaff' : '0 0 20px #00FF00'
                  : 'none'
              }}
            >
              Certificates ({sortedCertifications.length})
            </button>
            <button
              onClick={() => handleTabSwitch('badges')}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'badges'
                  ? 'text-black shadow-[0_0_20px]'
                  : 'text-white hover:text-[#00FF00]'
              }`}
              style={{
                backgroundColor: activeTab === 'badges' 
                  ? (isSectionHovered ? '#00aaff' : '#00FF00')
                  : 'transparent',
                boxShadow: activeTab === 'badges' 
                  ? isSectionHovered ? '0 0 20px #00aaff' : '0 0 20px #00FF00'
                  : 'none'
              }}
            >
              Badges ({sortedBadges.length})
            </button>
          </div>
        </div>

        {/* Certificates Tab Content */}
        {activeTab === 'certificates' && (
          <div className="relative">
            {/* Mobile/Tablet Carousel Navigation Arrows */}
            <div className="lg:hidden flex justify-between items-center mb-6 px-4">
              <button
                onClick={goToPrevCircle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                disabled={activeCertIndex === 0}
                className={`p-3 rounded-full transition-all duration-300 ${
                  activeCertIndex === 0
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:scale-110 active:scale-95'
                }`}
                style={{
                  background: isSectionHovered ? 'rgba(0, 170, 255, 0.1)' : 'rgba(0, 255, 0, 0.1)',
                  border: `2px solid ${isSectionHovered ? 'rgba(0, 170, 255, 0.5)' : 'rgba(0, 255, 0, 0.5)'}`,
                  color: isSectionHovered ? '#00aaff' : '#00FF00'
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="text-white text-center">
                <div className="flex items-center justify-center">
                  <span 
                    className="font-bold text-lg transition-all duration-300"
                    style={{ color: isSectionHovered ? '#93c5fd' : '#00FF00' }}
                  >
                    {activeCertIndex + 1}
                  </span>
                  <span className="mx-2">/</span>
                  <span className="text-lg">{sortedCertifications.length}</span>
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  {isHovered ? 'Paused' : 'Auto-scrolling'}
                </p>
              </div>
              
              <button
                onClick={goToNextCircle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                disabled={activeCertIndex === sortedCertifications.length - 1}
                className={`p-3 rounded-full transition-all duration-300 ${
                  activeCertIndex === sortedCertifications.length - 1
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:scale-110 active:scale-95'
                }`}
                style={{
                  background: isSectionHovered ? 'rgba(0, 170, 255, 0.1)' : 'rgba(0, 255, 0, 0.1)',
                  border: `2px solid ${isSectionHovered ? 'rgba(0, 170, 255, 0.5)' : 'rgba(0, 255, 0, 0.5)'}`,
                  color: isSectionHovered ? '#00aaff' : '#00FF00'
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Timeline */}
            <div 
              ref={timelineRef}
              className="relative mb-8 lg:mb-16 mx-2 lg:mx-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Timeline Line - Hide on mobile, show on desktop */}
              <div 
                className="hidden lg:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 transition-all duration-300"
                style={{
                  backgroundImage: isSectionHovered 
                    ? 'linear-gradient(to right, transparent, #00aaff, transparent)' 
                    : 'linear-gradient(to right, transparent, #00FF00, transparent)',
                  opacity: 0.3
                }}
              ></div>
              
              {/* Mobile Timeline Line (shorter, between visible circles) */}
              <div 
                className="lg:hidden absolute left-1/4 right-1/4 top-1/2 transform -translate-y-1/2 h-1 transition-all duration-300"
                style={{
                  backgroundImage: isSectionHovered 
                    ? 'linear-gradient(to right, #00aaff, #00aaff, #00aaff)' 
                    : 'linear-gradient(to right, #00FF00, #00FF00, #00FF00)',
                  opacity: 0.3
                }}
              ></div>
              
              {/* Location Symbol with CuteBoy Head */}
              <div 
                ref={locationSymbolRef}
                className="absolute z-30 transition-all duration-500 ease-out"
                style={{ 
                  transform: 'translate(-50%, -100%)',
                  willChange: 'left, top'
                }}
              >
                <div className="relative">
                  {/* Location Pin Body */}
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-[0_0_20px] animate-pulse transition-all duration-300"
                    style={{
                      background: isSectionHovered 
                        ? 'linear-gradient(to bottom, #00aaff, #0088cc)' 
                        : 'linear-gradient(to bottom, #00FF00, #00cc00)',
                      boxShadow: isSectionHovered 
                        ? '0 0 20px #00aaff' 
                        : '0 0 20px #00FF00'
                    }}
                  >
                    <img 
                      src={CuteBoy} 
                      alt="My Avatar" 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  {/* Pin Point */}
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rotate-45 shadow-[0_0_10px] transition-all duration-300"
                    style={{
                      backgroundColor: isSectionHovered ? '#00aaff' : '#00FF00',
                      boxShadow: isSectionHovered 
                        ? '0 0 10px #00aaff' 
                        : '0 0 10px #00FF00'
                    }}
                  ></div>
                </div>
              </div>

              {/* Timeline Circles */}
              <div 
                ref={circlesContainerRef}
                className="relative flex justify-between lg:justify-between"
              >
                {/* Desktop: Show all circles */}
                <div className="hidden lg:flex w-full justify-between">
                  {sortedCertifications.map((cert, index) => (
                    <button
                      key={cert.id}
                      onClick={() => handleCircleClick(index)}
                      className={`relative z-10 timeline-circle-btn ${
                        index === activeCertIndex 
                          ? 'scale-125' 
                          : 'hover:scale-110'
                      } transition-all duration-300`}
                    >
                      {/* Circle */}
                      <div 
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          index === activeCertIndex
                            ? 'shadow-[0_0_20px]'
                            : 'hover:shadow-[0_0_10px]'
                        }`}
                        style={{
                          backgroundColor: index === activeCertIndex
                            ? (isSectionHovered ? '#00aaff' : '#00FF00')
                            : 'black',
                          borderColor: index === activeCertIndex
                            ? (isSectionHovered ? '#00aaff' : '#00FF00')
                            : isSectionHovered ? '#00aaff80' : '#00FF0080',
                          boxShadow: index === activeCertIndex
                            ? isSectionHovered ? '0 0 20px #00aaff' : '0 0 20px #00FF00'
                            : 'none'
                        }}
                      >
                        {index === activeCertIndex && (
                          <div className="w-3 h-3 bg-black rounded-full"></div>
                        )}
                      </div>
                      
                      {/* Circle Label */}
                      <div 
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs transition-all duration-300"
                        style={{
                          color: isSectionHovered ? '#93c5fd' : 'rgba(255, 255, 255, 0.7)'
                        }}
                      >
                        {index + 1}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Mobile/Tablet: Show only visible circles in carousel */}
                <div className="lg:hidden flex w-full justify-around">
                  {visibleCircles.map((index) => {
                    const cert = sortedCertifications[index];
                    return (
                      <button
                        key={cert.id}
                        onClick={() => handleCircleClick(index)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        className={`relative z-20 timeline-circle-btn ${
                          index === activeCertIndex 
                            ? 'scale-125' 
                            : 'opacity-70 hover:opacity-100'
                        } transition-all duration-300`}
                      >
                        {/* Circle */}
                        <div 
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            index === activeCertIndex
                              ? 'shadow-[0_0_20px]'
                              : 'border-opacity-50'
                          }`}
                          style={{
                            backgroundColor: index === activeCertIndex
                              ? (isSectionHovered ? '#00aaff' : '#00FF00')
                              : 'black',
                            borderColor: index === activeCertIndex
                              ? (isSectionHovered ? '#00aaff' : '#00FF00')
                              : isSectionHovered ? '#00aaff80' : '#00FF0080',
                            boxShadow: index === activeCertIndex
                              ? isSectionHovered ? '0 0 20px #00aaff' : '0 0 20px #00FF00'
                              : 'none'
                          }}
                        >
                          {index === activeCertIndex && (
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full"></div>
                          )}
                          {index !== activeCertIndex && (
                            <span 
                              className="font-bold text-sm sm:text-base transition-all duration-300"
                              style={{ color: isSectionHovered ? '#93c5fd' : '#ffffff' }}
                            >
                              {index + 1}
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Certificate Card Display */}
            <div 
              className="bg-black/40 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 shadow-[0_0_40px] transform transition-all duration-300"
              style={{
                border: `1px solid ${isSectionHovered ? '#00aaff30' : '#00FF0030'}`,
                boxShadow: isSectionHovered 
                  ? '0 0 40px rgba(0, 170, 255, 0.2)' 
                  : '0 0 40px rgba(0, 255, 0, 0.2)'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Certificate Image */}
              <div className="mb-6 lg:mb-8 text-center">
                <div 
                  className="inline-block relative group cursor-pointer transform transition-transform duration-500 hover:scale-105"
                  onClick={handleCertificateOpen}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={currentCert.image}
                    alt={currentCert.title}
                    className="w-full max-w-3xl h-48 sm:h-56 lg:h-64 object-contain rounded-xl border-4 shadow-[0_0_40px] group-hover:shadow-[0_0_60px] transition-all duration-500"
                    style={{
                      borderColor: isSectionHovered ? '#00aaff30' : '#00FF0030',
                      boxShadow: isSectionHovered 
                        ? '0 0 40px #00aaff' 
                        : '0 0 40px #00FF00',
                    }}
                  />
                  <div 
                    className="absolute inset-0 rounded-xl border-2 animate-pulse transition-all duration-300"
                    style={{
                      borderColor: isSectionHovered ? '#00aaff' : '#00FF00'
                    }}
                  ></div>
                  
                  {/* Hover Overlay Effect */}
                  <div 
                    className="absolute inset-0 rounded-xl bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage: isSectionHovered 
                        ? 'linear-gradient(to top, rgba(0, 170, 255, 0.2), transparent, transparent)' 
                        : 'linear-gradient(to top, rgba(0, 255, 0, 0.2), transparent, transparent)'
                    }}
                  ></div>
                  
                  {/* Hover Text */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap bg-black/70 px-3 py-1 rounded-full">
                    Click/Tap to view full certificate
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Left Column */}
                <div>
                  <h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 transition-all duration-300"
                    style={{
                      color: isSectionHovered ? '#93c5fd' : '#ffffff',
                      textShadow: isSectionHovered 
                        ? '0 0 10px rgba(147, 197, 253, 0.6)' 
                        : '0 0 10px rgba(0, 255, 0, 0.6)'
                    }}
                  >
                    {currentCert.title}
                  </h3>
                  
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center">
                      <span 
                        className="font-semibold mr-3 text-sm lg:text-base transition-all duration-300"
                        style={{ color: isSectionHovered ? '#93c5fd' : '#00FF00' }}
                      >
                        Issuer:
                      </span>
                      <span 
                        className="text-sm lg:text-base transition-all duration-300"
                        style={{ color: isSectionHovered ? '#93c5fd' : '#ffffff' }}
                      >
                        {currentCert.issuer}
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <span 
                        className="font-semibold mr-3 text-sm lg:text-base transition-all duration-300"
                        style={{ color: isSectionHovered ? '#93c5fd' : '#00FF00' }}
                      >
                        Date:
                      </span>
                      <span 
                        className="text-sm lg:text-base transition-all duration-300"
                        style={{ color: isSectionHovered ? '#93c5fd' : '#ffffff' }}
                      >
                        {currentCert.date || `${currentCert.Start_date} - ${currentCert.End_date}`}
                      </span>
                    </div>
                    
                    {currentCert.credentialId && (
                      <div className="flex items-center">
                        <span 
                          className="font-semibold mr-3 text-sm lg:text-base transition-all duration-300"
                          style={{ color: isSectionHovered ? '#93c5fd' : '#00FF00' }}
                        >
                          Credential ID:
                        </span>
                        <span 
                          className="text-sm lg:text-base transition-all duration-300"
                          style={{ color: isSectionHovered ? '#93c5fd' : '#ffffff' }}
                        >
                          {currentCert.credentialId}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Description */}
                <div>
                  <h4 
                    className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 transition-all duration-300"
                    style={{
                      color: isSectionHovered ? '#93c5fd' : '#ffffff',
                      textShadow: isSectionHovered 
                        ? '0 0 10px rgba(147, 197, 253, 0.4)' 
                        : '0 0 10px rgba(0, 255, 0, 0.4)'
                    }}
                  >
                    Description
                  </h4>
                  <div 
                    className="bg-black/60 backdrop-blur-sm border rounded-xl p-4 lg:p-6 transition-all duration-300"
                    style={{
                      borderColor: isSectionHovered ? 'rgba(0, 170, 255, 0.2)' : 'rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <p 
                      className="leading-relaxed text-sm lg:text-base transition-all duration-300"
                      style={{ color: isSectionHovered ? '#93c5fd' : '#ffffff' }}
                    >
                      {currentCert.description}
                    </p>
                  </div>
                  
                  {/* Credential Links */}
                  {(currentCert.credentialUrl || currentCert.CredentialUrl) && (
                    <div className="mt-4 lg:mt-6">
                      <a
                        href={currentCert.credentialUrl || currentCert.CredentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 font-bold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px] text-sm lg:text-base"
                        style={{
                          backgroundColor: isSectionHovered ? '#00aaff' : '#00FF00',
                          color: '#000000',
                          boxShadow: isSectionHovered 
                            ? '0 0 30px #00aaff' 
                            : '0 0 30px #00FF00'
                        }}
                      >
                        Verify Credential
                        <span className="ml-2">↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons - Only for desktop */}
              <div className="hidden lg:flex justify-between mt-8 pt-8 transition-all duration-300"
                   style={{ borderTop: `1px solid ${isSectionHovered ? '#00aaff30' : '#00FF0030'}` }}>
                <button
                  onClick={prevCertificate}
                  disabled={activeCertIndex === 0}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center ${
                    activeCertIndex === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105 hover:shadow-[0_0_20px]'
                  }`}
                  style={{
                    background: isSectionHovered ? 'rgba(0, 170, 255, 0.1)' : 'rgba(0, 255, 0, 0.1)',
                    border: `2px solid ${isSectionHovered ? 'rgba(0, 170, 255, 0.5)' : 'rgba(0, 255, 0, 0.5)'}`,
                    color: isSectionHovered ? '#00aaff' : '#00FF00',
                    boxShadow: isSectionHovered ? '0 0 20px #00aaff' : '0 0 20px #00FF00'
                  }}
                >
                  ← Previous
                </button>
                
                <div className="text-white text-center">
                  <span 
                    className="font-bold transition-all duration-300"
                    style={{ color: isSectionHovered ? '#93c5fd' : '#00FF00' }}
                  >
                    {activeCertIndex + 1}
                  </span>
                  <span className="mx-2">/</span>
                  <span>{sortedCertifications.length}</span>
                </div>
                
                <button
                  onClick={nextCertificate}
                  disabled={activeCertIndex === sortedCertifications.length - 1}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center ${
                    activeCertIndex === sortedCertifications.length - 1
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105 hover:shadow-[0_0_20px]'
                  }`}
                  style={{
                    background: isSectionHovered ? 'rgba(0, 170, 255, 0.1)' : 'rgba(0, 255, 0, 0.1)',
                    border: `2px solid ${isSectionHovered ? 'rgba(0, 170, 255, 0.5)' : 'rgba(0, 255, 0, 0.5)'}`,
                    color: isSectionHovered ? '#00aaff' : '#00FF00',
                    boxShadow: isSectionHovered ? '0 0 20px #00aaff' : '0 0 20px #00FF00'
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Badges Tab Content */}
        {activeTab === 'badges' && (
          <div 
            className="bg-black/40 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 shadow-[0_0_40px] transition-all duration-300"
            style={{
              border: `1px solid ${isSectionHovered ? '#00aaff30' : '#00FF0030'}`,
              boxShadow: isSectionHovered 
                ? '0 0 40px rgba(0, 170, 255, 0.2)' 
                : '0 0 40px rgba(0, 255, 0, 0.2)'
            }}
          >
            <h3 
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center transition-all duration-300"
              style={{
                color: isSectionHovered ? '#93c5fd' : '#ffffff',
                textShadow: isSectionHovered 
                  ? '0 0 15px rgba(147, 197, 253, 0.8)' 
                  : '0 0 15px rgba(0, 255, 0, 0.8)'
              }}
            >
              Digital Badges Collection
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {sortedBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} isSectionHovered={isSectionHovered} />
              ))}
            </div>
          </div>
        )}

        {/* Instructions - Updated for sound info */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-12 text-xs sm:text-sm">
          <p className="mb-2 transition-all duration-300" style={{ color: isSectionHovered ? '#93c5fd' : 'rgba(255, 255, 255, 0.7)' }}>
            💡 <span className="font-semibold">How to interact:</span>
          </p>
          <p className="mb-1 hidden lg:block transition-all duration-300" style={{ color: isSectionHovered ? '#93c5fd' : 'rgba(255, 255, 255, 0.7)' }}>
            • Click certificate image to view full certificate
          </p>
          <p className="mb-1 hidden lg:block transition-all duration-300" style={{ color: isSectionHovered ? '#93c5fd' : 'rgba(255, 255, 255, 0.7)' }}>
            • Click timeline circles to navigate certificates
          </p>
          <p className="mb-1 lg:hidden transition-all duration-300" style={{ color: isSectionHovered ? '#93c5fd' : 'rgba(255, 255, 255, 0.7)' }}>
            • Tap certificate image to view full certificate
          </p>
          <p className="mb-1 lg:hidden transition-all duration-300" style={{ color: isSectionHovered ? '#93c5fd' : 'rgba(255, 255, 255, 0.7)' }}>
            • Tap circles to navigate
          </p>
          <p className="transition-all duration-300" style={{ color: isSectionHovered ? '#93c5fd' : 'rgba(255, 255, 255, 0.7)' }}>
            • Switch between Certificates and Badges tabs
          </p>
        </div>
      </section>

      {/* Iron Man Virtual Glassy Screen Modal - SIMPLIFIED VERSION */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-700"
            onClick={handleCertificateClose}
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
              
              {/* Modal Content - SIMPLIFIED: Only Full Certificate and Verify Credential */}
              <div className="relative p-4 sm:p-6 lg:p-8">
                {/* Close Button */}
                <button
                  onClick={handleCertificateClose}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-red-500/20 border border-red-400/50 flex items-center justify-center text-white hover:bg-red-500/30 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.5)]"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Certificate Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2" style={{
                    textShadow: "0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6)"
                  }}>
                    {currentCert.title}
                  </h3>
                  <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto shadow-[0_0_15px_#00FFFF]"></div>
                </div>
                
                {/* Full Certificate Image - LARGER and CENTERED */}
                <div className="relative mb-6">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-cyan-400/30 shadow-[0_0_40px_rgba(0,200,255,0.3)]">
                    <img
                      src={currentCert.image}
                      alt={`Full Certificate - ${currentCert.title}`}
                      className="w-full h-auto max-h-[75vh] object-contain rounded-lg border-2 border-cyan-400/50 shadow-[0_0_30px_#00FFFF]"
                    />
                    {/* Glowing Edge Effect */}
                    <div className="absolute inset-0 rounded-lg border border-cyan-300/20 animate-pulse pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Verify Credential Button - CENTERED */}
                <div className="text-center">
                  {(currentCert.credentialUrl || currentCert.CredentialUrl) && (
                    <a
                      href={currentCert.credentialUrl || currentCert.CredentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_#00FFFF] text-base sm:text-lg"
                    >
                      🔗 Verify Credential
                      <span className="ml-2 text-lg">↗</span>
                    </a>
                  )}
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
      `}</style>
    </>
  );
};

export default Certifications;

// Completed.........................