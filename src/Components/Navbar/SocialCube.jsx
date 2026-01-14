// // SocialCube.jsx
// import { useState, useRef } from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const SocialCube = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const cubeRef = useRef(null);

//   // Function to get female voice
//   const getFemaleVoice = () => {
//     if (typeof window === 'undefined' || !window.speechSynthesis) return null;
//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") || 
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("victoria") ||
//       voice.name.toLowerCase().includes("samantha") ||
//       voice.name.toLowerCase().includes("google") ||
//       voice.name.toLowerCase().includes("alexa")
//     );
//   };

//   // Function to speak message
//   const speakMessage = (text) => {
//     if (!window.isPortfolioAgentActivated) return;
//     if (typeof window === 'undefined' || !window.speechSynthesis) return;
    
//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.cancel();
//     window.speechSynthesis.speak(message);
//   };

//   // Handle cube click
//   const handleCubeClick = () => {
//     if (!window.isPortfolioAgentActivated) return;
//     setIsExpanded(!isExpanded);
//   };

//   // Handle social icon click
//   const handleSocialClick = (platform, url) => {
//     if (!window.isPortfolioAgentActivated) return;
    
//     // Speak the platform name when clicked
//     if (platform === "GitHub") {
//       speakMessage("Opening GitHub");
//     } else if (platform === "LinkedIn") {
//       speakMessage("Opening LinkedIn");
//     }
    
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
//       {/* 3D Cube Container */}
//       <div className="relative">
//         {/* Expanded Social Icons with Different Neon Glows */}
//         <div 
//           className={`absolute left-full ml-4 flex flex-col space-y-4 transition-all duration-1000 ease-in-out ${
//             isExpanded 
//               ? 'opacity-100 transform translate-x-0' 
//               : 'opacity-0 transform -translate-x-4 pointer-events-none'
//           }`}
//         >
//           {/* GitHub with Lime Neon Glow */}
//           <button
//             onClick={() => handleSocialClick("GitHub", "https://github.com/Arshad-Shaik")}
//             className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
//             style={{
//               boxShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00',
//               animation: 'pulseGlowGitHub 2s infinite'
//             }}
//           >
//             <FaGithub 
//               size={24} 
//               className="text-white"
//               style={{
//                 filter: 'drop-shadow(0 0 5px #00FF00) drop-shadow(0 0 10px #00FF00)'
//               }}
//             />
//           </button>
          
//           {/* LinkedIn with Blue Neon Glow */}
//           <button
//             onClick={() => handleSocialClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu")}
//             className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
//             style={{
//               boxShadow: '0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5',
//               animation: 'pulseGlowLinkedIn 2s infinite'
//             }}
//           >
//             <FaLinkedin 
//               size={24} 
//               className="text-white"
//               style={{
//                 filter: 'drop-shadow(0 0 5px #0077B5) drop-shadow(0 0 10px #0077B5)'
//               }}
//             />
//           </button>
//         </div>

//         {/* 3D Cube with proper perspective */}
//         <div className="perspective-1000">
//           <div
//             ref={cubeRef}
//             className={`relative w-16 h-16 cursor-pointer transform-gpu transition-all duration-1000 ${
//               isHovered ? 'scale-110' : 'scale-100'
//             }`}
//             style={{
//               transformStyle: 'preserve-3d',
//               animation: 'rotateCube 15s infinite linear',
//             }}
//             onClick={handleCubeClick}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {/* Front Face - GitHub with Lime Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-green-400/30 to-blue-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
//               }}
//             >
//               <FaGithub 
//                 className="text-white text-xl" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #00FF00)'
//                 }}
//               />
//             </div>
            
//             {/* Back Face - LinkedIn with Blue Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateY(180deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)'
//               }}
//             >
//               <FaLinkedin 
//                 className="text-white text-xl" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #0077B5)'
//                 }}
//               />
//             </div>
            
//             {/* Right Face - GitHub with Lime Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateY(90deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
//               }}
//             >
//               <FaGithub 
//                 className="text-white text-xl" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #00FF00)'
//                 }}
//               />
//             </div>
            
//             {/* Left Face - LinkedIn with Blue Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-pink-500/30 to-green-400/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateY(-90deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)'
//               }}
//             >
//               <FaLinkedin 
//                 className="text-white text-xl" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #0077B5)'
//                 }}
//               />
//             </div>
            
//             {/* Top Face - GitHub with Lime Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-green-400/30 to-blue-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateX(90deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
//               }}
//             >
//               <FaGithub 
//                 className="text-white text-xl" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #00FF00)'
//                 }}
//               />
//             </div>
            
//             {/* Bottom Face - LinkedIn with Blue Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateX(-90deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)'
//               }}
//             >
//               <FaLinkedin 
//                 className="text-white text-xl" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #0077B5)'
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
        
//         @keyframes rotateCube {
//           0% {
//             transform: rotateX(-15deg) rotateY(0deg);
//           }
//           25% {
//             transform: rotateX(15deg) rotateY(90deg);
//           }
//           50% {
//             transform: rotateX(45deg) rotateY(180deg);
//           }
//           75% {
//             transform: rotateX(15deg) rotateY(270deg);
//           }
//           100% {
//             transform: rotateX(-15deg) rotateY(360deg);
//           }
//         }
        
//         @keyframes pulseGlowGitHub {
//           0% {
//             box-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
//           }
//           50% {
//             box-shadow: 0 0 15px #00FF00, 0 0 25px #00FF00, 0 0 35px #00FF00, 0 0 45px #00FF00;
//           }
//           100% {
//             box-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
//           }
//         }
        
//         @keyframes pulseGlowLinkedIn {
//           0% {
//             box-shadow: 0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5;
//           }
//           50% {
//             box-shadow: 0 0 15px #0077B5, 0 0 25px #0077B5, 0 0 35px #0077B5, 0 0 45px #0077B5;
//           }
//           100% {
//             box-shadow: 0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5;
//           }
//         }
        
//         .transform-gpu {
//           transform: translate3d(0, 0, 0);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SocialCube;


















// // SocialCube.jsx
// import { useState, useRef } from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const SocialCube = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const cubeRef = useRef(null);

//   // Function to get female voice
//   const getFemaleVoice = () => {
//     if (typeof window === 'undefined' || !window.speechSynthesis) return null;
//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") || 
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("victoria") ||
//       voice.name.toLowerCase().includes("samantha") ||
//       voice.name.toLowerCase().includes("google") ||
//       voice.name.toLowerCase().includes("alexa")
//     );
//   };

//   // Function to speak message
//   const speakMessage = (text) => {
//     if (!window.isPortfolioAgentActivated) return;
//     if (typeof window === 'undefined' || !window.speechSynthesis) return;
    
//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.cancel();
//     window.speechSynthesis.speak(message);
//   };

//   // Handle cube click
//   const handleCubeClick = () => {
//     if (!window.isPortfolioAgentActivated) return;
//     setIsExpanded(!isExpanded);
//   };

//   // Handle social icon click
//   const handleSocialClick = (platform, url) => {
//     if (!window.isPortfolioAgentActivated) return;
    
//     // Speak the platform name when clicked
//     if (platform === "GitHub") {
//       speakMessage("Opening GitHub");
//     } else if (platform === "LinkedIn") {
//       speakMessage("Opening LinkedIn");
//     }
    
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
//       {/* 3D Cube Container */}
//       <div className="relative">
//         {/* Expanded Social Icons with Different Neon Glows */}
//         <div 
//           className={`absolute left-full ml-4 flex flex-col space-y-4 transition-all duration-1000 ease-in-out ${
//             isExpanded 
//               ? 'opacity-100 transform translate-x-0' 
//               : 'opacity-0 transform -translate-x-4 pointer-events-none'
//           }`}
//         >
//           {/* GitHub with Lime Neon Glow */}
//           <button
//             onClick={() => handleSocialClick("GitHub", "https://github.com/Arshad-Shaik")}
//             className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
//             style={{
//               boxShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00',
//               animation: 'pulseGlowGitHub 2s infinite'
//             }}
//           >
//             <FaGithub 
//               size={30} 
//               className="text-white"
//               style={{
//                 filter: 'drop-shadow(0 0 5px #00FF00) drop-shadow(0 0 10px #00FF00)'
//               }}
//             />
//           </button>
          
//           {/* LinkedIn with Blue Neon Glow */}
//           <button
//             onClick={() => handleSocialClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu")}
//             className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
//             style={{
//               boxShadow: '0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5',
//               animation: 'pulseGlowLinkedIn 2s infinite'
//             }}
//           >
//             <FaLinkedin 
//               size={30} 
//               className="text-white"
//               style={{
//                 filter: 'drop-shadow(0 0 5px #0077B5) drop-shadow(0 0 10px #0077B5)'
//               }}
//             />
//           </button>
//         </div>

//         {/* 3D Cube with proper perspective */}
//         <div className="perspective-1000">
//           <div
//             ref={cubeRef}
//             className={`relative w-16 h-16 cursor-pointer transform-gpu transition-all duration-1000 ${
//               isHovered ? 'scale-110' : 'scale-100'
//             }`}
//             style={{
//               transformStyle: 'preserve-3d',
//               animation: 'rotateCube 15s infinite linear',
//             }}
//             onClick={handleCubeClick}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {/* Front Face - GitHub with Lime Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-green-400/30 to-blue-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
//               }}
//             >
//               <FaGithub 
//                 className="text-white" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #00FF00)'
//                 }}
//               />
//             </div>
            
//             {/* Back Face - LinkedIn with Blue Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateY(180deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)'
//               }}
//             >
//               <FaLinkedin 
//                 className="text-white" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #0077B5)'
//                 }}
//               />
//             </div>
            
//             {/* Right Face - GitHub with Lime Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateY(90deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
//               }}
//             >
//               <FaGithub 
//                 className="text-white" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #00FF00)'
//                 }}
//               />
//             </div>
            
//             {/* Left Face - LinkedIn with Blue Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-pink-500/30 to-green-400/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateY(-90deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)'
//               }}
//             >
//               <FaLinkedin 
//                 className="text-white" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #0077B5)'
//                 }}
//               />
//             </div>
            
//             {/* Top Face - GitHub with Lime Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-green-400/30 to-blue-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateX(90deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
//               }}
//             >
//               <FaGithub 
//                 className="text-white" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #00FF00)'
//                 }}
//               />
//             </div>
            
//             {/* Bottom Face - LinkedIn with Blue Glow */}
//             <div 
//               className="absolute w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center"
//               style={{ 
//                 transform: 'rotateX(-90deg) translateZ(20px)',
//                 boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)'
//               }}
//             >
//               <FaLinkedin 
//                 className="text-white" 
//                 style={{
//                   filter: 'drop-shadow(0 0 3px #0077B5)'
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
        
//         @keyframes rotateCube {
//           0% {
//             transform: rotateX(-15deg) rotateY(0deg);
//           }
//           25% {
//             transform: rotateX(15deg) rotateY(90deg);
//           }
//           50% {
//             transform: rotateX(45deg) rotateY(180deg);
//           }
//           75% {
//             transform: rotateX(15deg) rotateY(270deg);
//           }
//           100% {
//             transform: rotateX(-15deg) rotateY(360deg);
//           }
//         }
        
//         @keyframes pulseGlowGitHub {
//           0% {
//             box-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
//           }
//           50% {
//             box-shadow: 0 0 15px #00FF00, 0 0 25px #00FF00, 0 0 35px #00FF00, 0 0 45px #00FF00;
//           }
//           100% {
//             box-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
//           }
//         }
        
//         @keyframes pulseGlowLinkedIn {
//           0% {
//             box-shadow: 0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5;
//           }
//           50% {
//             box-shadow: 0 0 15px #0077B5, 0 0 25px #0077B5, 0 0 35px #0077B5, 0 0 45px #0077B5;
//           }
//           100% {
//             box-shadow: 0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5;
//           }
//         }
        
//         .transform-gpu {
//           transform: translate3d(0, 0, 0);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SocialCube;


























// // SocialCube.jsx
// import { useState, useRef, useEffect } from 'react';
// import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

// const SocialCube = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [showCube, setShowCube] = useState(false);
//   const cubeRef = useRef(null);
//   const socialIconsRef = useRef(null);

//   // Function to get female voice
//   const getFemaleVoice = () => {
//     if (typeof window === 'undefined' || !window.speechSynthesis) return null;
//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") || 
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("victoria") ||
//       voice.name.toLowerCase().includes("samantha") ||
//       voice.name.toLowerCase().includes("google") ||
//       voice.name.toLowerCase().includes("alexa")
//     );
//   };

//   // Function to speak message
//   const speakMessage = (text) => {
//     if (!window.isPortfolioAgentActivated) return;
//     if (typeof window === 'undefined' || !window.speechSynthesis) return;
    
//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.cancel();
//     window.speechSynthesis.speak(message);
//   };

//   // Handle click outside to close cube
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       // If cube is shown and user clicks outside the cube area
//       if (showCube && cubeRef.current && !cubeRef.current.contains(event.target)) {
//         // Also check if click is not on social icons
//         if (!socialIconsRef.current || !socialIconsRef.current.contains(event.target)) {
//           setShowCube(false);
//           setIsExpanded(false);
//           speakMessage("Social cube closed");
//         }
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [showCube]);

//   // Handle arrow menu click
//   const handleArrowClick = () => {
//     if (!window.isPortfolioAgentActivated) return;
//     setShowCube(true);
//     speakMessage("Social cube activated");
//   };

//   // Handle cube click - only toggles expansion
//   const handleCubeClick = (e) => {
//     e.stopPropagation();
//     if (!window.isPortfolioAgentActivated) return;
//     setIsExpanded(!isExpanded);
//   };

//   // Handle social icon click
//   const handleSocialClick = (platform, url, e) => {
//     e.stopPropagation();
//     if (!window.isPortfolioAgentActivated) return;
    
//     // Speak the platform name when clicked
//     if (platform === "GitHub") {
//       speakMessage("Opening GitHub");
//     } else if (platform === "LinkedIn") {
//       speakMessage("Opening LinkedIn");
//     }
    
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
//       {/* Blue-ish Arrow Menu - Always visible when cube is not shown */}
//       {!showCube && (
//         <div className="relative">
//           <button
//             onClick={handleArrowClick}
//             className="ml-2 p-3 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-r-lg hover:bg-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
//             style={{
//               boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(59, 130, 246, 0.2)'
//             }}
//           >
//             <FaArrowRight 
//               size={20} 
//               className="text-blue-300 group-hover:text-blue-100 transition-colors duration-300"
//               style={{
//                 filter: 'drop-shadow(0 0 3px rgba(59, 130, 246, 0.8))'
//               }}
//             />
//             {/* Tooltip */}
//             <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//               Click to reveal Social Cube
//             </div>
//           </button>
//         </div>
//       )}

//       {/* Social Cube Container - Only shown after clicking arrow */}
//       {showCube && (
//         <div className="relative ml-8">
//           {/* 3D Cube with proper perspective */}
//           <div className="perspective-1000" ref={cubeRef}>
//             <div
//               className={`relative w-16 h-16 cursor-pointer transform-gpu transition-all duration-1000 ${
//                 isHovered ? 'scale-110' : 'scale-100'
//               }`}
//               style={{
//                 transformStyle: 'preserve-3d',
//                 animation: 'rotateCube 15s infinite linear',
//               }}
//               onClick={handleCubeClick}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               {/* Front Face - GitHub with Lime Glow */}
//               <div 
//                 className="absolute w-full h-full bg-gradient-to-br from-green-400/30 to-blue-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center"
//                 style={{ 
//                   transform: 'translateZ(20px)',
//                   boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
//                 }}
//               >
//                 <FaGithub 
//                   className="text-white" 
//                   style={{
//                     filter: 'drop-shadow(0 0 3px #00FF00)'
//                   }}
//                 />
//               </div>
              
//               {/* Back Face - LinkedIn with Blue Glow */}
//               <div 
//                 className="absolute w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center"
//                 style={{ 
//                   transform: 'rotateY(180deg) translateZ(20px)',
//                   boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)'
//                 }}
//               >
//                 <FaLinkedin 
//                   className="text-white" 
//                   style={{
//                     filter: 'drop-shadow(0 0 3px #0077B5)'
//                   }}
//                 />
//               </div>
              
//               {/* Right Face - GitHub with Lime Glow */}
//               <div 
//                 className="absolute w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center"
//                 style={{ 
//                   transform: 'rotateY(90deg) translateZ(20px)',
//                   boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
//                 }}
//               >
//                 <FaGithub 
//                   className="text-white" 
//                   style={{
//                     filter: 'drop-shadow(0 0 3px #00FF00)'
//                   }}
//                 />
//               </div>
              
//               {/* Left Face - LinkedIn with Blue Glow */}
//               <div 
//                 className="absolute w-full h-full bg-gradient-to-br from-pink-500/30 to-green-400/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center"
//                 style={{ 
//                   transform: 'rotateY(-90deg) translateZ(20px)',
//                   boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)'
//                 }}
//               >
//                 <FaLinkedin 
//                   className="text-white" 
//                   style={{
//                     filter: 'drop-shadow(0 0 3px #0077B5)'
//                   }}
//                 />
//               </div>
              
//               {/* Top Face - GitHub with Lime Glow */}
//               <div 
//                 className="absolute w-full h-full bg-gradient-to-br from-green-400/30 to-blue-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center"
//                 style={{ 
//                   transform: 'rotateX(90deg) translateZ(20px)',
//                   boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
//                 }}
//               >
//                 <FaGithub 
//                   className="text-white" 
//                   style={{
//                     filter: 'drop-shadow(0 0 3px #00FF00)'
//                   }}
//                 />
//               </div>
              
//               {/* Bottom Face - LinkedIn with Blue Glow */}
//               <div 
//                 className="absolute w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center"
//                 style={{ 
//                   transform: 'rotateX(-90deg) translateZ(20px)',
//                   boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)'
//                 }}
//               >
//                 <FaLinkedin 
//                   className="text-white" 
//                   style={{
//                     filter: 'drop-shadow(0 0 3px #0077B5)'
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Expanded Social Icons with Different Neon Glows - Physically removed when not expanded */}
//           {isExpanded && (
//             <div 
//               ref={socialIconsRef}
//               className="absolute left-full ml-4 flex flex-col space-y-4 animate-expandIcons"
//             >
//               {/* GitHub with Lime Neon Glow */}
//               <button
//                 onClick={(e) => handleSocialClick("GitHub", "https://github.com/Arshad-Shaik", e)}
//                 className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
//                 style={{
//                   boxShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00',
//                   animation: 'pulseGlowGitHub 2s infinite'
//                 }}
//               >
//                 <FaGithub 
//                   size={24} 
//                   className="text-white"
//                   style={{
//                     filter: 'drop-shadow(0 0 5px #00FF00) drop-shadow(0 0 10px #00FF00)'
//                   }}
//                 />
//               </button>
              
//               {/* LinkedIn with Blue Neon Glow */}
//               <button
//                 onClick={(e) => handleSocialClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu", e)}
//                 className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
//                 style={{
//                   boxShadow: '0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5',
//                   animation: 'pulseGlowLinkedIn 2s infinite'
//                 }}
//               >
//                 <FaLinkedin 
//                   size={24} 
//                   className="text-white"
//                   style={{
//                     filter: 'drop-shadow(0 0 5px #0077B5) drop-shadow(0 0 10px #0077B5)'
//                   }}
//                 />
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       <style>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
        
//         @keyframes rotateCube {
//           0% {
//             transform: rotateX(-15deg) rotateY(0deg);
//           }
//           25% {
//             transform: rotateX(15deg) rotateY(90deg);
//           }
//           50% {
//             transform: rotateX(45deg) rotateY(180deg);
//           }
//           75% {
//             transform: rotateX(15deg) rotateY(270deg);
//           }
//           100% {
//             transform: rotateX(-15deg) rotateY(360deg);
//           }
//         }
        
//         @keyframes pulseGlowGitHub {
//           0% {
//             box-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
//           }
//           50% {
//             boxShadow: 0 0 15px #00FF00, 0 0 25px #00FF00, 0 0 35px #00FF00, 0 0 45px #00FF00;
//           }
//           100% {
//             box-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
//           }
//         }
        
//         @keyframes pulseGlowLinkedIn {
//           0% {
//             box-shadow: 0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5;
//           }
//           50% {
//             boxShadow: 0 0 15px #0077B5, 0 0 25px #0077B5, 0 0 35px #0077B5, 0 0 45px #0077B5;
//           }
//           100% {
//             box-shadow: 0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5;
//           }
//         }
        
//         @keyframes expandIcons {
//           from {
//             opacity: 0;
//             transform: translateX(-20px) scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }
        
//         .animate-expandIcons {
//           animation: expandIcons 0.5s ease-out forwards;
//         }
        
//         .transform-gpu {
//           transform: translate3d(0, 0, 0);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SocialCube;































// SocialCube.jsx
import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const SocialCube = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showCube, setShowCube] = useState(false);
  const cubeRef = useRef(null);
  const socialIconsRef = useRef(null);

  // Function to get female voice
  const getFemaleVoice = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    return voices.find((voice) =>
      voice.name.toLowerCase().includes("female") || 
      voice.name.toLowerCase().includes("zira") ||
      voice.name.toLowerCase().includes("victoria") ||
      voice.name.toLowerCase().includes("samantha") ||
      voice.name.toLowerCase().includes("google") ||
      voice.name.toLowerCase().includes("alexa")
    );
  };

  // Function to speak message
  const speakMessage = (text) => {
    if (!window.isPortfolioAgentActivated) return;
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    
    const message = new SpeechSynthesisUtterance(text);
    const femaleVoice = getFemaleVoice();
    if (femaleVoice) message.voice = femaleVoice;
    message.pitch = 1.1;
    message.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);
  };

  // Handle click outside to close cube
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If cube is shown and user clicks outside the cube area
      if (showCube && cubeRef.current && !cubeRef.current.contains(event.target)) {
        // Also check if click is not on social icons
        if (!socialIconsRef.current || !socialIconsRef.current.contains(event.target)) {
          setShowCube(false);
          setIsExpanded(false);
          speakMessage("Social cube closed");
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCube]);

  // Handle arrow menu click
  const handleArrowClick = () => {
    if (!window.isPortfolioAgentActivated) return;
    setShowCube(true);
    speakMessage("Social cube activated");
  };

  // Handle cube click - only toggles expansion
  const handleCubeClick = (e) => {
    e.stopPropagation();
    if (!window.isPortfolioAgentActivated) return;
    setIsExpanded(!isExpanded);
  };

  // Handle social icon click
  const handleSocialClick = (platform, url, e) => {
    e.stopPropagation();
    if (!window.isPortfolioAgentActivated) return;
    
    // Speak the platform name when clicked
    if (platform === "GitHub") {
      speakMessage("Opening GitHub");
    } else if (platform === "LinkedIn") {
      speakMessage("Opening LinkedIn");
    }
    
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
      {/* Blue-ish Arrow Menu - Always visible when cube is not shown */}
      {!showCube && (
        <div className="relative">
          <button
            onClick={handleArrowClick}
            className="ml-2 p-3 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-r-lg hover:bg-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center group cursor-pointer"
            style={{
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(59, 130, 246, 0.2)'
            }}
          >
            <FaArrowRight 
              size={20} 
              className="text-blue-300 group-hover:text-blue-100 transition-colors duration-300"
              style={{
                filter: 'drop-shadow(0 0 3px rgba(59, 130, 246, 0.8))'
              }}
            />
            {/* Tooltip */}
            <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Click to reveal Social Cube
            </div>
          </button>
        </div>
      )}

      {/* Social Cube Container - Only shown after clicking arrow */}
      {showCube && (
        <div className="relative ml-8">
          {/* 3D Cube with proper perspective */}
          <div className="perspective-1000" ref={cubeRef}>
            {/* Wrapper div that handles the click event - This makes the entire cube clickable */}
            <div
              className="relative w-16 h-16 cursor-pointer"
              onClick={handleCubeClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                cursor: 'pointer'
              }}
            >
              {/* The rotating cube */}
              <div
                className={`relative w-full h-full transform-gpu transition-all duration-1000 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  animation: 'rotateCube 15s infinite linear',
                  cursor: 'pointer'
                }}
              >
                {/* Front Face - GitHub with Lime Glow */}
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-green-400/30 to-blue-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ 
                    transform: 'translateZ(20px)',
                    boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  <FaGithub 
                    className="text-white cursor-pointer" 
                    style={{
                      filter: 'drop-shadow(0 0 3px #00FF00)'
                    }}
                  />
                </div>
                
                {/* Back Face - LinkedIn with Blue Glow */}
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ 
                    transform: 'rotateY(180deg) translateZ(20px)',
                    boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  <FaLinkedin 
                    className="text-white cursor-pointer" 
                    style={{
                      filter: 'drop-shadow(0 0 3px #0077B5)'
                    }}
                  />
                </div>
                
                {/* Right Face - GitHub with Lime Glow */}
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ 
                    transform: 'rotateY(90deg) translateZ(20px)',
                    boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  <FaGithub 
                    className="text-white cursor-pointer" 
                    style={{
                      filter: 'drop-shadow(0 0 3px #00FF00)'
                    }}
                  />
                </div>
                
                {/* Left Face - LinkedIn with Blue Glow */}
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-pink-500/30 to-green-400/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ 
                    transform: 'rotateY(-90deg) translateZ(20px)',
                    boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  <FaLinkedin 
                    className="text-white cursor-pointer" 
                    style={{
                      filter: 'drop-shadow(0 0 3px #0077B5)'
                    }}
                  />
                </div>
                
                {/* Top Face - GitHub with Lime Glow */}
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-green-400/30 to-blue-500/30 backdrop-blur-lg border-2 border-lime-400/50 rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ 
                    transform: 'rotateX(90deg) translateZ(20px)',
                    boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  <FaGithub 
                    className="text-white cursor-pointer" 
                    style={{
                      filter: 'drop-shadow(0 0 3px #00FF00)'
                    }}
                  />
                </div>
                
                {/* Bottom Face - LinkedIn with Blue Glow */}
                <div 
                  className="absolute w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-lg border-2 border-blue-400/50 rounded-lg flex items-center justify-center cursor-pointer"
                  style={{ 
                    transform: 'rotateX(-90deg) translateZ(20px)',
                    boxShadow: '0 0 15px rgba(0, 119, 181, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  <FaLinkedin 
                    className="text-white cursor-pointer" 
                    style={{
                      filter: 'drop-shadow(0 0 3px #0077B5)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Social Icons with Different Neon Glows - Physically removed when not expanded */}
          {isExpanded && (
            <div 
              ref={socialIconsRef}
              className="absolute left-full ml-4 flex flex-col space-y-4 animate-expandIcons"
            >
              {/* GitHub with Lime Neon Glow */}
              <button
                onClick={(e) => handleSocialClick("GitHub", "https://github.com/Arshad-Shaik", e)}
                className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{
                  boxShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00',
                  animation: 'pulseGlowGitHub 2s infinite'
                }}
              >
                <FaGithub 
                  size={24} 
                  className="text-white cursor-pointer"
                  style={{
                    filter: 'drop-shadow(0 0 5px #00FF00) drop-shadow(0 0 10px #00FF00)'
                  }}
                />
              </button>
              
              {/* LinkedIn with Blue Neon Glow */}
              <button
                onClick={(e) => handleSocialClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu", e)}
                className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{
                  boxShadow: '0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5',
                  animation: 'pulseGlowLinkedIn 2s infinite'
                }}
              >
                <FaLinkedin 
                  size={24} 
                  className="text-white cursor-pointer"
                  style={{
                    filter: 'drop-shadow(0 0 5px #0077B5) drop-shadow(0 0 10px #0077B5)'
                  }}
                />
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes rotateCube {
          0% {
            transform: rotateX(-15deg) rotateY(0deg);
          }
          25% {
            transform: rotateX(15deg) rotateY(90deg);
          }
          50% {
            transform: rotateX(45deg) rotateY(180deg);
          }
          75% {
            transform: rotateX(15deg) rotateY(270deg);
          }
          100% {
            transform: rotateX(-15deg) rotateY(360deg);
          }
        }
        
        @keyframes pulseGlowGitHub {
          0% {
            box-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
          }
          50% {
            boxShadow: 0 0 15px #00FF00, 0 0 25px #00FF00, 0 0 35px #00FF00, 0 0 45px #00FF00;
          }
          100% {
            box-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
          }
        }
        
        @keyframes pulseGlowLinkedIn {
          0% {
            box-shadow: 0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5;
          }
          50% {
            boxShadow: 0 0 15px #0077B5, 0 0 25px #0077B5, 0 0 35px #0077B5, 0 0 45px #0077B5;
          }
          100% {
            box-shadow: 0 0 10px #0077B5, 0 0 20px #0077B5, 0 0 30px #0077B5;
          }
        }
        
        @keyframes expandIcons {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        .animate-expandIcons {
          animation: expandIcons 0.5s ease-out forwards;
        }
        
        .transform-gpu {
          transform: translate3d(0, 0, 0);
        }
        
        /* Ensure the entire cube area is clickable */
        .relative.w-16.h-16 {
          cursor: pointer !important;
        }
        
        .relative.w-16.h-16 > div {
          cursor: pointer !important;
        }
        
        .absolute.w-full.h-full {
          cursor: pointer !important;
        }
        
        /* Additional CSS to ensure proper click area */
        .perspective-1000 > div {
          cursor: pointer !important;
        }
      `}</style>
    </div>
  );
};

export default SocialCube;

// Completed....................