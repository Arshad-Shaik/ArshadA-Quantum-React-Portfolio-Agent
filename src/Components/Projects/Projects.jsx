// import React, { useState } from "react";
// import { ProjectsInfo } from "../../Constants";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   return (

//     <section id="projects" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative">

//         {/* Section Title */}

//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white" style={{
//           textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//         }}>PROJECTS</h2>
//           <div className="w-32 h-1 bg-[#00FF00] mx-auto mt-4"></div>
//           <p className="text-white mt-4 text-lg font-semibold" style={{
//           textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//         }}>
//             A showcase of the projects, I have worked on, highlighting my skills and experience in various technologies
//           </p>
//         </div>

//     </section>
//   )
// }

// export default Projects;












// // Projects.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { ProjectsInfo } from "../../Constants";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   // Circular arrangement configuration
//   const radius = 400; // Distance from center in pixels
//   const totalProjects = ProjectsInfo.length;
  
//   // Start rotation animation
//   useEffect(() => {
//     const rotate = () => {
//       if (!isHovering) {
//         setRotationAngle(prev => (prev + 0.2) % 360);
//       }
//       animationRef.current = requestAnimationFrame(rotate);
//     };
    
//     animationRef.current = requestAnimationFrame(rotate);
    
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isHovering]);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//     setIsHovering(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setIsHovering(false);
//   };

//   // Calculate position for each project card in circle
//   const getCardPosition = (index) => {
//     const angle = (index * (360 / totalProjects) + rotationAngle) * (Math.PI / 180);
//     const x = Math.cos(angle) * radius;
//     const y = Math.sin(angle) * radius;
//     const rotation = (index * (360 / totalProjects) + rotationAngle + 90) % 360;
    
//     return {
//       transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
//       zIndex: Math.round(x + y + 1000)
//     };
//   };

//   return (
//     <section id="projects" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden min-h-screen">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
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
//           PROJECTS SHOWCASE
//         </h2>
//         <div className="w-32 h-1 bg-[#00FF00] mx-auto mt-4 shadow-[0_0_10px_#00FF00]"></div>
//         <p className="text-white mt-4 text-lg font-semibold max-w-2xl mx-auto" style={{
//           textShadow: "0 0 10px rgba(255, 255, 255, 0.6)"
//         }}>
//           Hover to stop rotation • Click to explore in Iron Man-style interface
//         </p>
//         <div className="mt-2 text-white/70 text-sm">
//           <span className="inline-block animate-pulse">🔄 Circular Motion Active</span>
//         </div>
//       </div>

//       {/* Circular Projects Container */}
//       <div 
//         ref={containerRef}
//         className="relative w-full h-[800px] flex items-center justify-center perspective-1000"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => !selectedProject && setIsHovering(false)}
//       >
//         {/* Center glowing orb */}
//         <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#00FF00]/20 to-[#00FF00]/5 blur-xl animate-pulse"></div>
        
//         {/* Project Cards in Circular Arrangement */}
//         {ProjectsInfo.map((project, index) => (
//           <div
//             key={project.id}
//             className="absolute w-64 h-80 transition-all duration-1000 ease-out cursor-pointer group"
//             style={getCardPosition(index)}
//             onMouseEnter={() => setIsHovering(true)}
//             onClick={() => handleOpenModal(project)}
//           >
//             <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110 group-hover:z-50">
//               {/* Card with glass effect */}
//               <div className="absolute inset-0 bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl transition-all duration-300 group-hover:border-[#00FF00] group-hover:shadow-[0_0_30px_#00FF00]">
//                 {/* Project Image */}
//                 <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
                
//                 {/* Project Title */}
//                 <h3 className="text-white font-bold text-lg mb-2 text-center line-clamp-2">
//                   {project.title}
//                 </h3>
                
//                 {/* Tech Tags Preview */}
//                 <div className="flex flex-wrap gap-1 justify-center mb-3">
//                   {project.tags.slice(0, 3).map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="px-2 py-1 bg-[#00FF00]/20 text-[#00FF00] text-xs rounded-full border border-[#00FF00]/30"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                   {project.tags.length > 3 && (
//                     <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
//                       +{project.tags.length - 3}
//                     </span>
//                   )}
//                 </div>
                
//                 {/* Click Hint */}
//                 <div className="text-center">
//                   <span className="text-[#00FF00] text-sm font-semibold animate-pulse">
//                     Click to Explore →
//                   </span>
//                 </div>
//               </div>
              
//               {/* Glowing Border Effect */}
//               <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00FF00] group-hover:shadow-[0_0_20px_#00FF00] transition-all duration-300"></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Iron Man Style Virtual Screen Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleCloseModal}>
//           {/* Backdrop with glass effect */}
//           <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>
          
//           {/* Virtual Screen Container */}
//           <div 
//             className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-2xl border-2 border-[#00FF00]/50 rounded-3xl shadow-2xl overflow-hidden animate-fade-in"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               boxShadow: "0 0 80px rgba(0, 255, 0, 0.6), inset 0 0 40px rgba(0, 255, 0, 0.1)"
//             }}
//           >
//             {/* Animated Border */}
//             <div className="absolute inset-0 rounded-3xl border-2 border-transparent" style={{
//               background: "linear-gradient(45deg, transparent, #00FF00, transparent) border-box",
//               WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
//               mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
//               animation: "border-glow 3s linear infinite"
//             }}></div>
            
//             {/* Header */}
//             <div className="p-6 border-b border-[#00FF00]/30 flex justify-between items-center">
//               <h2 className="text-3xl font-bold text-white" style={{
//                 textShadow: "0 0 15px rgba(0, 255, 0, 0.8)"
//               }}>
//                 {selectedProject.title}
//               </h2>
//               <button
//                 onClick={handleCloseModal}
//                 className="text-white text-2xl hover:text-[#00FF00] transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
//                 style={{
//                   textShadow: "0 0 10px rgba(255, 255, 255, 0.8)"
//                 }}
//               >
//                 ✕
//               </button>
//             </div>
            
//             {/* Content */}
//             <div className="p-8 overflow-y-auto max-h-[70vh]">
//               {/* Project Image */}
//               <div className="mb-8 text-center">
//                 <div className="inline-block relative">
//                   <img
//                     src={selectedProject.image}
//                     alt={selectedProject.title}
//                     className="w-full max-w-2xl h-96 object-cover rounded-xl border-4 border-[#00FF00]/30 shadow-[0_0_40px_#00FF00]"
//                   />
//                   <div className="absolute inset-0 rounded-xl border-2 border-[#00FF00] animate-pulse"></div>
//                 </div>
//               </div>
              
//               {/* Tech Stack Tags */}
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-white mb-4" style={{
//                   textShadow: "0 0 10px rgba(0, 255, 0, 0.6)"
//                 }}>
//                   Technologies Used
//                 </h3>
//                 <div className="flex flex-wrap gap-3">
//                   {selectedProject.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="px-4 py-2 bg-[#00FF00]/20 text-[#00FF00] font-semibold rounded-full border border-[#00FF00]/50 hover:bg-[#00FF00]/30 hover:scale-105 transition-all duration-300"
//                       style={{
//                         boxShadow: "0 0 15px rgba(0, 255, 0, 0.3)"
//                       }}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Project Description */}
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-white mb-4" style={{
//                   textShadow: "0 0 10px rgba(0, 255, 0, 0.6)"
//                 }}>
//                   Project Description
//                 </h3>
//                 <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
//                   <p className="text-white/90 text-lg leading-relaxed">
//                     {selectedProject.description}
//                   </p>
//                 </div>
//               </div>
              
//               {/* Action Buttons */}
//               <div className="flex gap-6 justify-center">
//                 {selectedProject.github && (
//                   <a
//                     href={selectedProject.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-8 py-3 bg-[#00FF00] text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_#00FF00]"
//                     style={{
//                       boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)"
//                     }}
//                   >
//                     View GitHub
//                   </a>
//                 )}
//                 {selectedProject.live && (
//                   <a
//                     href={selectedProject.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-8 py-3 bg-white/20 text-white font-bold rounded-full border border-white/40 hover:scale-105 transition-transform duration-300 hover:bg-white/30 hover:shadow-[0_0_30px_white]"
//                   >
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
            
//             {/* Footer Holographic Effect */}
//             <div className="h-1 bg-gradient-to-r from-transparent via-[#00FF00] to-transparent"></div>
//           </div>
          
//           {/* Floating Particles in Modal */}
//           <div className="absolute inset-0 pointer-events-none">
//             {[...Array(15)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute w-2 h-2 bg-[#00FF00] rounded-full animate-float"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   animationDelay: `${Math.random() * 3}s`,
//                   animationDuration: `${Math.random() * 10 + 10}s`
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Instructions */}
//       <div className="text-center mt-12 text-white/70 text-sm relative z-10">
//         <p className="mb-2">💡 <span className="font-semibold">How to interact:</span></p>
//         <p>• Hover over the circle to stop rotation</p>
//         <p>• Click any project card to open Iron Man-style interface</p>
//         <p>• Click outside or the X button to close virtual screen</p>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) translateX(0);
//             opacity: 0.3;
//           }
//           25% {
//             transform: translateY(-20px) translateX(10px);
//             opacity: 0.6;
//           }
//           50% {
//             transform: translateY(-40px) translateX(-10px);
//             opacity: 0.3;
//           }
//           75% {
//             transform: translateY(-20px) translateX(-5px);
//             opacity: 0.6;
//           }
//         }
        
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
        
//         .animate-float {
//           animation: float linear infinite;
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }
        
//         .perspective-1000 {
//           perspective: 1000px;
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         /* Custom scrollbar for modal */
//         ::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: rgba(0, 255, 0, 0.1);
//           border-radius: 4px;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: rgba(0, 255, 0, 0.3);
//           border-radius: 4px;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 255, 0, 0.5);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;


















// Projects.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { ProjectsInfo } from "../../Constants";
// import IronManModal from "./IronManModal"; // Import the new component

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const [rotationSpeed, setRotationSpeed] = useState(0.2); // Default speed
//   const [isMobile, setIsMobile] = useState(false);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const lastTimeRef = useRef(0);

//   // Detect device type and adjust performance
//   useEffect(() => {
//     const checkDevice = () => {
//       const isMobileDevice = window.innerWidth < 1024;
//       setIsMobile(isMobileDevice);
      
//       // Adjust rotation speed based on device performance
//       if (isMobileDevice) {
//         // Mobile devices - faster rotation for better visibility
//         setRotationSpeed(0.3);
//       } else {
//         // Desktop devices - consistent speed
//         setRotationSpeed(0.25);
//       }
//     };

//     checkDevice();
//     window.addEventListener('resize', checkDevice);
    
//     return () => {
//       window.removeEventListener('resize', checkDevice);
//     };
//   }, []);

//   // Circular arrangement configuration - adjusted for mobile
//   const radius = isMobile ? 200 : 400;
//   const totalProjects = ProjectsInfo.length;
  
//   // OPTIMIZED rotation animation with requestAnimationFrame delta time
//   useEffect(() => {
//     const rotate = (currentTime) => {
//       if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      
//       const deltaTime = currentTime - lastTimeRef.current;
//       lastTimeRef.current = currentTime;
      
//       if (!isHovering) {
//         // Use delta time for consistent rotation across all devices
//         const frameSpeed = rotationSpeed * (deltaTime / 16.67); // Normalize to 60fps
//         setRotationAngle(prev => (prev + frameSpeed) % 360);
//       }
      
//       animationRef.current = requestAnimationFrame(rotate);
//     };
    
//     animationRef.current = requestAnimationFrame(rotate);
    
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isHovering, rotationSpeed]);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//     setIsHovering(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setIsHovering(false);
//   };

//   // Calculate position for each project card - optimized performance
//   const getCardPosition = (index) => {
//     const angle = (index * (360 / totalProjects) + rotationAngle) * (Math.PI / 180);
//     const x = Math.cos(angle) * radius;
//     const y = Math.sin(angle) * radius;
//     const faceRotation = (index * (360 / totalProjects) + rotationAngle + 90) % 360;
    
//     return {
//       transform: `translate3d(${x}px, ${y}px, 0) rotateY(${faceRotation}deg) rotateX(15deg)`,
//       zIndex: Math.round(x + y + 1000),
//       willChange: 'transform', // Optimize for GPU acceleration
//       backfaceVisibility: 'hidden' // Improve 3D performance
//     };
//   };

//   return (
//     <section id="projects" className="py-24 pb-24 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden min-h-screen">
//       {/* Background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(isMobile ? 10 : 20)].map((_, i) => (
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
//       <div className="text-center mb-16 sm:mb-20 lg:mb-32 relative z-10">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{
//           textShadow: "0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0)"
//         }}>
//           PROJECTS
//         </h2>
//         <div className="w-32 h-1 bg-[#00FF00] mx-auto mt-4 shadow-[0_0_10px_#00FF00]"></div>
//         <p className="text-white mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto px-4" style={{
//           textShadow: "0 0 10px rgba(255, 255, 255, 0.6)"
//         }}>
//           {isMobile ? "Tap to stop rotation • Tap project to explore in Iron Man-style interface" : 
//                     "Hover to stop rotation • Click to explore in Iron Man-style interface"}
//         </p>
//         <div className="mt-2 text-white/70 text-sm">
//           <span className="inline-block animate-pulse">🔄 Circular Motion Active</span>
//         </div>
//       </div>

//       {/* Circular Projects Container - Responsive */}
//       <div 
//         ref={containerRef}
//         className="relative w-full h-[500px] sm:h-[600px] lg:h-[800px] flex items-center justify-center perspective-1000 mt-4 sm:mt-8"
//         onMouseEnter={() => !isMobile && setIsHovering(true)}
//         onMouseLeave={() => !isMobile && !selectedProject && setIsHovering(false)}
//         onTouchStart={() => setIsHovering(true)}
//         onTouchEnd={() => !selectedProject && setTimeout(() => setIsHovering(false), 1000)}
//       >
//         {/* Center glowing orb */}
//         <div className="absolute w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-[#00FF00]/30 to-[#00FF00]/25 blur-xl animate-pulse"></div>
        
//         {/* Project Cards - Optimized for performance */}
//         {ProjectsInfo.map((project, index) => (
//           <div
//             key={project.id}
//             className="absolute w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 transition-all duration-700 ease-out cursor-pointer group preserve-3d"
//             style={getCardPosition(index)}
//             onMouseEnter={() => !isMobile && setIsHovering(true)}
//             onClick={() => handleOpenModal(project)}
//             onTouchStart={(e) => {
//               e.stopPropagation();
//               handleOpenModal(project);
//             }}
//           >
//             <div className="relative w-full h-full transition-transform duration-200 group-hover:scale-105 active:scale-105 group-hover:z-50 preserve-3d">
//               <div className="absolute inset-0 bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl transition-all duration-200 group-hover:border-[#00FF00] group-hover:shadow-[0_0_20px_rgba(0,255,0,0.5)] transform-style-3d">
//                 <div className="w-full h-32 sm:h-40 overflow-hidden rounded-lg mb-3 sm:mb-4">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     loading="lazy" // Lazy load for better performance
//                   />
//                 </div>
                
//                 <h3 className="text-white font-bold text-sm sm:text-lg mb-2 text-center line-clamp-2">
//                   {project.title}
//                 </h3>
                
//                 <div className="flex flex-wrap gap-1 justify-center mb-2 sm:mb-3">
//                   {project.tags.slice(0, isMobile ? 2 : 3).map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="px-2 py-1 bg-[#00FF00]/20 text-[#00FF00] text-xs rounded-full border border-[#00FF00]/30"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                   {project.tags.length > (isMobile ? 2 : 3) && (
//                     <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
//                       +{project.tags.length - (isMobile ? 2 : 3)}
//                     </span>
//                   )}
//                 </div>
                
//                 <div className="text-center">
//                   <span className="text-[#00FF00] text-xs sm:text-sm font-semibold animate-pulse">
//                     {isMobile ? "Tap to Explore →" : "Click to Explore →"}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00FF00] group-hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all duration-200"></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* USE THE SEPARATE IRON MAN MODAL COMPONENT */}
//       {selectedProject && (
//         <IronManModal 
//           project={selectedProject} 
//           onClose={handleCloseModal}
//           isMobile={isMobile}
//         />
//       )}

//       {/* Instructions */}
//       <div className="text-center mt-8 sm:mt-12 text-white/70 text-xs sm:text-sm relative z-10 px-4">
//         <p className="mb-2">💡 <span className="font-semibold">How to interact:</span></p>
//         <p>{isMobile ? "• Tap the circle to stop rotation" : "• Hover over the circle to stop rotation"}</p>
//         <p>• {isMobile ? "Tap any project card" : "Click any project card"} to open Iron Man-style interface</p>
//         <p>• {isMobile ? "Tap outside or the X button" : "Click outside or the X button"} to close virtual screen</p>
//       </div>

//       {/* CSS Animations - Optimized */}
//       <style>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }
        
//         .preserve-3d {
//           transform-style: preserve-3d;
//           transform: translateZ(0); /* Hardware acceleration */
//         }
        
//         .transform-style-3d {
//           transform-style: preserve-3d;
//           backface-visibility: hidden;
//         }
        
//         .perspective-1000 {
//           perspective: 1000px;
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         /* Performance optimizations */
//         * {
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }
        
//         /* Mobile optimizations */
//         @media (max-width: 768px) {
//           .perspective-1000 {
//             perspective: 600px;
//           }
          
//           .transition-all {
//             transition-duration: 150ms !important;
//           }
          
//           /* Reduce animation complexity on mobile */
//           .animate-pulse {
//             animation-duration: 2s;
//           }
//         }
        
//         /* Small mobile screens */
//         @media (max-width: 480px) {
//           .perspective-1000 {
//             perspective: 400px;
//           }
          
//           .preserve-3d {
//             transform-style: flat; /* Reduce 3D on very small screens */
//           }
//         }
        
//         /* Tablet optimizations */
//         @media (min-width: 769px) and (max-width: 1024px) {
//           .perspective-1000 {
//             perspective: 800px;
//           }
//         }
        
//         /* Touch device optimizations */
//         @media (hover: none) and (pointer: coarse) {
//           .group-hover\\:scale-105 {
//             transform: scale(1) !important;
//           }
          
//           .group:hover .group-hover\\:scale-105 {
//             transform: scale(1.05) !important;
//           }
          
//           /* Improve tap targets */
//           button, [role="button"], [onclick] {
//             min-height: 44px;
//             min-width: 44px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;

























// // Projects.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { ProjectsInfo } from "../../Constants";
// import IronManModal from "./IronManModal"; // Import the new component

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
//   const [isAutoRotating, setIsAutoRotating] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const mobileIntervalRef = useRef(null);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   // Detect device type and adjust performance
//   useEffect(() => {
//     const checkDevice = () => {
//       const width = window.innerWidth;
//       const isMobileDevice = width < 768;
//       const isTabletDevice = width >= 768 && width < 1024;
//       const isDesktop = width >= 1024;
      
//       setIsMobile(isMobileDevice);
//       setIsTablet(isTabletDevice);
      
//       // Adjust rotation speed based on device performance
//       if (isMobileDevice || isTabletDevice) {
//         // Stop desktop rotation if any
//         if (animationRef.current) {
//           cancelAnimationFrame(animationRef.current);
//         }
        
//         // Start mobile auto-rotation if not already started
//         if (isAutoRotating && !mobileIntervalRef.current) {
//           startMobileAutoRotation();
//         }
//       }
//     };

//     checkDevice();
//     window.addEventListener('resize', checkDevice);
    
//     return () => {
//       window.removeEventListener('resize', checkDevice);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       if (mobileIntervalRef.current) {
//         clearInterval(mobileIntervalRef.current);
//       }
//     };
//   }, [isAutoRotating]);

//   // Desktop 3D rotation animation - FIXED: Consistent speed for all desktops
//   useEffect(() => {
//     if (isMobile || isTablet || isHovering) {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       return;
//     }

//     const rotate = () => {
//       // FIXED: Consistent rotation speed for all desktops/laptops
//       setRotationAngle(prev => (prev + 0.15) % 360); // Fixed speed, no deltaTime
//       animationRef.current = requestAnimationFrame(rotate);
//     };
    
//     animationRef.current = requestAnimationFrame(rotate);
    
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isHovering, isMobile, isTablet]);

//   // Mobile/Tablet auto-rotation - FIXED: Auto carousel functionality
//   const startMobileAutoRotation = () => {
//     if (mobileIntervalRef.current) {
//       clearInterval(mobileIntervalRef.current);
//     }
    
//     mobileIntervalRef.current = setInterval(() => {
//       if (isAutoRotating && !selectedProject) {
//         setCurrentMobileIndex(prev => (prev + 1) % ProjectsInfo.length);
//       }
//     }, 3000); // 3 seconds per slide
//   };

//   // Mobile swipe handlers
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//     setIsAutoRotating(false);
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     const swipeThreshold = 50;
//     const diffX = touchStartX.current - touchEndX.current;
    
//     if (Math.abs(diffX) > swipeThreshold) {
//       if (diffX > 0) {
//         // Swipe left - next project
//         setCurrentMobileIndex(prev => (prev + 1) % ProjectsInfo.length);
//       } else {
//         // Swipe right - previous project
//         setCurrentMobileIndex(prev => (prev - 1 + ProjectsInfo.length) % ProjectsInfo.length);
//       }
//     }
    
//     // Resume auto-rotation after 5 seconds
//     setTimeout(() => {
//       if (!selectedProject) {
//         setIsAutoRotating(true);
//       }
//     }, 5000);
//   };

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//     setIsHovering(true);
//     setIsAutoRotating(false);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setIsHovering(false);
//     if (isMobile || isTablet) {
//       setTimeout(() => setIsAutoRotating(true), 1000);
//     }
//   };

//   // Calculate position for each project card - DESKTOP ONLY
//   const getCardPosition = (index) => {
//     const totalProjects = ProjectsInfo.length;
//     const angle = (index * (360 / totalProjects) + rotationAngle) * (Math.PI / 180);
//     // FIXED: Reduced radius for smaller circular rotation
//     const radius = 280; // Reduced from 400 to prevent overlapping with title
//     const x = Math.cos(angle) * radius;
//     const y = Math.sin(angle) * radius;
//     const faceRotation = (index * (360 / totalProjects) + rotationAngle + 90) % 360;
    
//     return {
//       transform: `translate(${x}px, ${y}px) rotateY(${faceRotation}deg)`,
//       zIndex: Math.round(x + y + 1000)
//     };
//   };

//   // Mobile/Tablet carousel navigation
//   const goToNext = () => {
//     setCurrentMobileIndex(prev => (prev + 1) % ProjectsInfo.length);
//     setIsAutoRotating(false);
//   };

//   const goToPrev = () => {
//     setCurrentMobileIndex(prev => (prev - 1 + ProjectsInfo.length) % ProjectsInfo.length);
//     setIsAutoRotating(false);
//   };

//   // FIXED: Start auto-rotation when component mounts for mobile/tablet
//   useEffect(() => {
//     if ((isMobile || isTablet) && isAutoRotating) {
//       startMobileAutoRotation();
//     }
    
//     return () => {
//       if (mobileIntervalRef.current) {
//         clearInterval(mobileIntervalRef.current);
//       }
//     };
//   }, [isMobile, isTablet, isAutoRotating]);

//   return (
//     <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden min-h-screen">
//       {/* Background particles - Reduced for mobile */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(isMobile ? 8 : isTablet ? 12 : 20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-[#00FF00] rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               opacity: Math.random() * 0.5 + 0.3,
//               animationDuration: isMobile ? '3s' : '2s'
//             }}
//           />
//         ))}
//       </div>

//       {/* Section Title */}
//       <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative z-10"> {/* Reduced margin */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{
//           textShadow: "0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0)"
//         }}>
//           PROJECTS
//         </h2>
//         <div className="w-32 h-1 bg-[#00FF00] mx-auto mt-4 shadow-[0_0_10px_#00FF00]"></div>
//         <p className="text-white mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto px-4" style={{
//           textShadow: "0 0 10px rgba(255, 255, 255, 0.6)"
//         }}>
//           {isMobile || isTablet 
//             ? "Swipe or tap to navigate • Tap project to explore" 
//             : "Hover to stop rotation • Click to explore in Iron Man-style interface"}
//         </p>
//         <div className="mt-2 text-white/70 text-sm">
//           <span className="inline-block animate-pulse">
//             {isMobile || isTablet 
//               ? "📱 Mobile Carousel Active" 
//               : "🔄 Circular Motion Active"}
//           </span>
//         </div>
//       </div>

//       {/* MOBILE/TABLET CAROUSEL */}
//       {(isMobile || isTablet) && (
//         <div className="relative w-full max-w-md mx-auto">
//           {/* Carousel Container */}
//           <div 
//             className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden"
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//             onMouseEnter={() => setIsAutoRotating(false)}
//             onMouseLeave={() => !selectedProject && setIsAutoRotating(true)}
//           >
//             {/* Project Card */}
//             <div
//               key={currentMobileIndex}
//               className="absolute inset-0 bg-black/70 backdrop-blur-lg border-2 border-[#00FF00]/40 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all duration-300 ease-out"
//               onClick={() => handleOpenModal(ProjectsInfo[currentMobileIndex])}
//               onMouseEnter={() => setIsAutoRotating(false)}
//               onMouseLeave={() => !selectedProject && setIsAutoRotating(true)}
//             >
//               <div className="w-full h-48 sm:h-56 overflow-hidden rounded-lg mb-4">
//                 <img
//                   src={ProjectsInfo[currentMobileIndex].image}
//                   alt={ProjectsInfo[currentMobileIndex].title}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                   loading="lazy"
//                 />
//               </div>
              
//               {/* FIXED: Long title handling with ellipsis */}
//               <h3 className="text-white font-bold text-xl sm:text-2xl mb-3 text-center truncate" title={ProjectsInfo[currentMobileIndex].title}>
//                 {ProjectsInfo[currentMobileIndex].title.length > 40 
//                   ? `${ProjectsInfo[currentMobileIndex].title.substring(0, 40)}...`
//                   : ProjectsInfo[currentMobileIndex].title}
//               </h3>
              
//               <div className="flex flex-wrap gap-2 justify-center mb-4">
//                 {ProjectsInfo[currentMobileIndex].tags.slice(0, 3).map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 bg-[#00FF00]/20 text-[#00FF00] text-sm rounded-full border border-[#00FF00]/40"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//                 {ProjectsInfo[currentMobileIndex].tags.length > 3 && (
//                   <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
//                     +{ProjectsInfo[currentMobileIndex].tags.length - 3}
//                   </span>
//                 )}
//               </div>
              
//               <div className="text-center mt-4">
//                 <span className="text-[#00FF00] text-sm sm:text-base font-semibold animate-pulse">
//                   Tap to Explore →
//                 </span>
//               </div>
//             </div>
            
//             {/* Navigation Arrows */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToPrev();
//               }}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm border border-[#00FF00]/40 rounded-full flex items-center justify-center text-[#00FF00] text-xl z-10 hover:bg-[#00FF00]/20 transition-all duration-200"
//               aria-label="Previous project"
//             >
//               ←
//             </button>
            
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToNext();
//               }}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm border border-[#00FF00]/40 rounded-full flex items-center justify-center text-[#00FF00] text-xl z-10 hover:bg-[#00FF00]/20 transition-all duration-200"
//               aria-label="Next project"
//             >
//               →
//             </button>
//           </div>
          
//           {/* Auto-rotation Indicator */}
//           <div className="text-center mt-4">
//             <div className="flex items-center justify-center space-x-2">
//               <div className={`w-2 h-2 rounded-full bg-[#00FF00] ${isAutoRotating ? 'animate-pulse' : 'opacity-30'}`} />
//               <span className="text-white/80 text-sm">
//                 {isAutoRotating ? 'Auto-rotating (3s)' : 'Paused - Interact to resume'}
//               </span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* DESKTOP CIRCULAR PROJECTS CONTAINER */}
//       {!isMobile && !isTablet && (
//         <div 
//           ref={containerRef}
//           className="relative w-full h-[550px] lg:h-[650px] flex items-center justify-center perspective-1000 mt-4" // Reduced height and margin
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => !selectedProject && setIsHovering(false)}
//         >
//           {/* Center glowing orb - reduced size */}
//           <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-[#00FF00]/30 to-[#00FF00]/25 blur-xl animate-pulse"></div>
          
//           {/* Project Cards */}
//           {ProjectsInfo.map((project, index) => (
//             <div
//               key={project.id}
//               className="absolute w-52 h-68 lg:w-60 lg:h-76 cursor-pointer group" // Adjusted card size
//               style={getCardPosition(index)}
//               onMouseEnter={() => setIsHovering(true)}
//               onClick={() => handleOpenModal(project)}
//             >
//               <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:z-50">
//                 <div className="absolute inset-0 bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl transition-all duration-300 group-hover:border-[#00FF00] group-hover:shadow-[0_0_30px_#00FF00] overflow-hidden"> {/* Added overflow-hidden */}
//                   <div className="w-full h-36 overflow-hidden rounded-lg mb-3"> {/* Reduced image height */}
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       loading="lazy"
//                     />
//                   </div>
                  
//                   {/* FIXED: Long title handling with ellipsis for desktop */}
//                   <h3 className="text-white font-bold text-base mb-2 text-center truncate" title={project.title}>
//                     {project.title.length > 30 
//                       ? `${project.title.substring(0, 30)}...`
//                       : project.title}
//                   </h3>
                  
//                   <div className="flex flex-wrap gap-1 justify-center mb-2 max-h-16 overflow-y-auto px-1"> {/* Added scroll for overflow tags */}
//                     {project.tags.map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className="px-2 py-0.5 bg-[#00FF00]/20 text-[#00FF00] text-xs rounded-full border border-[#00FF00]/30 whitespace-nowrap mb-1"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="text-center mt-2">
//                     <span className="text-[#00FF00] text-sm font-semibold animate-pulse whitespace-nowrap">
//                       Click to Explore →
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00FF00] group-hover:shadow-[0_0_20px_#00FF00] transition-all duration-300"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* IRON MAN MODAL */}
//       {selectedProject && (
//         <IronManModal 
//           project={selectedProject} 
//           onClose={handleCloseModal}
//           isMobile={isMobile}
//           isTablet={isTablet}
//         />
//       )}

//       {/* Instructions */}
//       <div className="text-center mt-6 sm:mt-8 text-white/70 text-xs sm:text-sm relative z-10 px-4"> {/* Reduced margin */}
//         <p className="mb-2">💡 <span className="font-semibold">How to interact:</span></p>
//         {isMobile || isTablet ? (
//           <>
//             <p>• Swipe left/right or tap arrows to navigate projects</p>
//             <p>• Tap any project card to open Iron Man-style interface</p>
//             <p>• Tap outside or the X button to close virtual screen</p>
//             <p>• Auto-carousel rotates every 3 seconds (pauses on hover/tap)</p>
//           </>
//         ) : (
//           <>
//             <p>• Hover over the circle to stop rotation</p>
//             <p>• Click any project card to open Iron Man-style interface</p>
//             <p>• Click outside or the X button to close virtual screen</p>
//           </>
//         )}
//       </div>

//       {/* CSS Animations - Optimized */}
//       <style>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }
        
//         .perspective-1000 {
//           perspective: 1000px;
//         }
        
//         .truncate {
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }
        
//         /* FIXED: Performance optimizations for smooth rotation */
//         * {
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }
        
//         /* FIXED: Mobile touch optimizations */
//         @media (max-width: 767px) {
//           button, [role="button"] {
//             min-height: 44px;
//             min-width: 44px;
//           }
          
//           .animate-pulse {
//             animation-duration: 2s;
//           }
//         }
        
//         /* FIXED: Card content overflow prevention */
//         .max-h-16 {
//           max-height: 4rem;
//         }
        
//         .overflow-y-auto {
//           scrollbar-width: thin;
//           scrollbar-color: rgba(0, 255, 0, 0.3) transparent;
//         }
        
//         .overflow-y-auto::-webkit-scrollbar {
//           width: 4px;
//         }
        
//         .overflow-y-auto::-webkit-scrollbar-track {
//           background: transparent;
//         }
        
//         .overflow-y-auto::-webkit-scrollbar-thumb {
//           background-color: rgba(0, 255, 0, 0.3);
//           border-radius: 10px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;






















// // Projects.jsx - Holographic animation successfully done
// import React, { useState, useEffect, useRef } from "react";
// import { ProjectsInfo } from "../../Constants";
// import IronManModal from "./IronManModal";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
//   const [isAutoRotating, setIsAutoRotating] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [animationPhase, setAnimationPhase] = useState(0); // 0: rotate, 1: center, 2: jumble
//   const [phaseProgress, setPhaseProgress] = useState(0);
  
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);
//   const mobileIntervalRef = useRef(null);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);
//   const lastUpdateTimeRef = useRef(0);
//   const phaseStartTimeRef = useRef(Date.now());

//   // Detect device type
//   useEffect(() => {
//     const checkDevice = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//       setIsTablet(width >= 768 && width < 1024);
//     };

//     checkDevice();
//     window.addEventListener('resize', checkDevice);
    
//     return () => {
//       window.removeEventListener('resize', checkDevice);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       if (mobileIntervalRef.current) {
//         clearInterval(mobileIntervalRef.current);
//       }
//     };
//   }, []);

//   // OPTIMIZED ANIMATION LOOP - 60 FPS LOCKED, NO STUTTERING
//   useEffect(() => {
//     if (isMobile || isTablet || isHovering || selectedProject) {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       return;
//     }

//     const targetFPS = 60;
//     const frameInterval = 1000 / targetFPS;
//     let lastTime = performance.now();
//     let frameCount = 0;
//     let lastFPSUpdate = performance.now();
    
//     const animate = (currentTime) => {
//       frameCount++;
      
//       // Calculate elapsed time
//       const elapsed = currentTime - lastTime;
      
//       // Maintain consistent 60 FPS
//       if (elapsed >= frameInterval) {
//         // Calculate delta time in seconds (capped for stability)
//         const deltaTime = Math.min(elapsed, 100) / 1000;
        
//         // Calculate phase time
//         const now = Date.now();
//         const phaseTime = now - phaseStartTimeRef.current;
        
//         // ANIMATION SEQUENCE: 8s rotate → 3s center → 2s jumble → repeat
//         if (phaseTime < 8000) { // Phase 0: Rotate (8 seconds)
//           if (animationPhase !== 0) {
//             setAnimationPhase(0);
//             setPhaseProgress(0);
//           }
//           const progress = phaseTime / 8000;
//           setPhaseProgress(progress);
//           // FASTER ROTATION: 1.2 degrees per second (not too slow)
//           setRotationAngle(prev => (prev + 1.2 * deltaTime) % 360);
//         } 
//         else if (phaseTime < 11000) { // Phase 1: Come closer (3 seconds)
//           if (animationPhase !== 1) {
//             setAnimationPhase(1);
//             setPhaseProgress(0);
//           }
//           const progress = (phaseTime - 8000) / 3000;
//           setPhaseProgress(progress);
//         } 
//         else if (phaseTime < 13000) { // Phase 2: Jumble (2 seconds)
//           if (animationPhase !== 2) {
//             setAnimationPhase(2);
//             setPhaseProgress(0);
//           }
//           const progress = (phaseTime - 11000) / 2000;
//           setPhaseProgress(progress);
//         } 
//         else { // Reset cycle (total 13 seconds per cycle)
//           phaseStartTimeRef.current = now;
//           setAnimationPhase(0);
//           setPhaseProgress(0);
//         }
        
//         lastTime = currentTime - (elapsed % frameInterval);
//       }
      
//       // Update FPS counter every second (debug only)
//       if (currentTime - lastFPSUpdate >= 1000) {
//         lastFPSUpdate = currentTime;
//         frameCount = 0;
//       }
      
//       animationRef.current = requestAnimationFrame(animate);
//     };
    
//     animationRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isHovering, isMobile, isTablet, selectedProject, animationPhase]);

//   // FIXED: Calculate card position with EQUAL SIZES and CLEAR ANIMATION
//   const getCardPosition = (index) => {
//     const totalProjects = ProjectsInfo.length;
    
//     // Responsive radius calculation - FIXED for all screen sizes
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
    
//     let baseRadius;
//     if (screenWidth >= 1920) baseRadius = 300;
//     else if (screenWidth >= 1440) baseRadius = 260;
//     else if (screenWidth >= 1024) baseRadius = 220;
//     else baseRadius = 180;
    
//     const maxRadius = Math.min(screenWidth * 0.28, screenHeight * 0.32);
//     const radius = Math.min(baseRadius, maxRadius);
    
//     // Base angle for each card (even distribution)
//     const baseAngle = (index * (360 / totalProjects)) * (Math.PI / 180);
    
//     let x = 0, y = 0, scale = 1, rotation = 0;
//     let zIndex = 500;
    
//     // CLEAR ANIMATION PHASES
//     switch (animationPhase) {
//       case 0: // ROTATE PHASE - Cards orbit around center
//         const rotateAngle = baseAngle + (rotationAngle * Math.PI / 180);
//         x = Math.cos(rotateAngle) * radius;
//         y = Math.sin(rotateAngle) * radius;
//         // FIXED: Equal scale for all cards (no narrow cards)
//         scale = 1;
//         rotation = (index * (360 / totalProjects) + rotationAngle + 90) % 360;
//         zIndex = Math.round(x + y + 500);
//         break;
        
//       case 1: // CENTER PHASE - Cards come closer
//         const centerProgress = Math.min(phaseProgress, 1);
//         // Smooth ease-in-out curve
//         const easedProgress = centerProgress < 0.5 
//           ? 2 * centerProgress * centerProgress 
//           : 1 - Math.pow(-2 * centerProgress + 2, 2) / 2;
        
//         const centerAngle = baseAngle + (rotationAngle * Math.PI / 180);
//         const targetRadius = radius * 0.3; // Come 70% closer
//         const currentRadius = radius - (radius - targetRadius) * easedProgress;
        
//         x = Math.cos(centerAngle) * currentRadius;
//         y = Math.sin(centerAngle) * currentRadius;
//         // FIXED: Uniform scaling as cards come closer
//         scale = 1 + easedProgress * 0.3;
//         rotation = (index * (360 / totalProjects) + rotationAngle + 90) % 360;
//         zIndex = 600 + Math.round(easedProgress * 100);
//         break;
        
//       case 2: // JUMBLE PHASE - Cards mix up
//         const jumbleProgress = Math.min(phaseProgress, 1);
//         // Chaotic but controlled movement
//         const jumbleAngle = baseAngle + (jumbleProgress * Math.PI * 2) + 
//                            (index * 0.5 * Math.sin(jumbleProgress * Math.PI));
        
//         const jumbleRadius = radius * (0.3 + jumbleProgress * 0.7);
//         x = Math.cos(jumbleAngle) * jumbleRadius;
//         y = Math.sin(jumbleAngle) * jumbleRadius;
//         // FIXED: Maintain equal scale during jumble
//         scale = 1 + Math.sin(jumbleProgress * Math.PI) * 0.1;
//         rotation = (jumbleProgress * 180 + index * 30) % 360;
//         zIndex = 700 + index;
//         break;
//     }
    
//     // Hover effect - FIXED: Consistent scaling
//     if (hoveredCard === index) {
//       scale *= 1.2;
//       zIndex = 1000;
//     }
    
//     // FIXED: Use translate3d for GPU acceleration, maintain equal dimensions
//     return {
//       transform: `translate3d(${x}px, ${y}px, 0) rotateY(${rotation}deg) scale(${scale})`,
//       opacity: hoveredCard === index ? 1 : 0.95,
//       zIndex: zIndex,
//       width: '280px', // FIXED: Equal width for all cards
//       height: '340px', // FIXED: Equal height for all cards
//       willChange: 'transform, opacity',
//       transition: hoveredCard === index 
//         ? 'transform 0.2s ease, opacity 0.2s ease' 
//         : 'transform 0.5s ease, opacity 0.5s ease'
//     };
//   };

//   // Mobile/Tablet auto-rotation
//   const startMobileAutoRotation = () => {
//     if (mobileIntervalRef.current) {
//       clearInterval(mobileIntervalRef.current);
//     }
    
//     mobileIntervalRef.current = setInterval(() => {
//       if (isAutoRotating && !selectedProject) {
//         setCurrentMobileIndex(prev => (prev + 1) % ProjectsInfo.length);
//       }
//     }, 3000);
//   };

//   // Mobile swipe handlers
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//     setIsAutoRotating(false);
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     const swipeThreshold = 50;
//     const diffX = touchStartX.current - touchEndX.current;
    
//     if (Math.abs(diffX) > swipeThreshold) {
//       if (diffX > 0) {
//         setCurrentMobileIndex(prev => (prev + 1) % ProjectsInfo.length);
//       } else {
//         setCurrentMobileIndex(prev => (prev - 1 + ProjectsInfo.length) % ProjectsInfo.length);
//       }
//     }
    
//     setTimeout(() => setIsAutoRotating(true), 5000);
//   };

//   // Whole card clickable
//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//     setIsHovering(true);
//     setIsAutoRotating(false);
//     setHoveredCard(null);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setIsHovering(false);
//     if (isMobile || isTablet) {
//       setTimeout(() => setIsAutoRotating(true), 1000);
//     }
//   };

//   const goToNext = () => {
//     setCurrentMobileIndex(prev => (prev + 1) % ProjectsInfo.length);
//     setIsAutoRotating(false);
//   };

//   const goToPrev = () => {
//     setCurrentMobileIndex(prev => (prev - 1 + ProjectsInfo.length) % ProjectsInfo.length);
//     setIsAutoRotating(false);
//   };

//   // Start mobile auto-rotation
//   useEffect(() => {
//     if ((isMobile || isTablet) && isAutoRotating) {
//       startMobileAutoRotation();
//     }
    
//     return () => {
//       if (mobileIntervalRef.current) {
//         clearInterval(mobileIntervalRef.current);
//       }
//     };
//   }, [isMobile, isTablet, isAutoRotating]);

//   // Reset animation when component mounts
//   useEffect(() => {
//     if (!isMobile && !isTablet) {
//       phaseStartTimeRef.current = Date.now();
//     }
//   }, [isMobile, isTablet]);

//   return (
//     <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden min-h-screen">
//       {/* Optimized Background Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute inset-0 opacity-5"
//              style={{
//                backgroundImage: `
//                  linear-gradient(90deg, transparent 49%, #0af 50%, transparent 51%),
//                  linear-gradient(0deg, transparent 49%, #0af 50%, transparent 51%)
//                `,
//                backgroundSize: '80px 80px'
//              }}>
//         </div>
        
//         {/* Reduced particles for performance */}
//         {[...Array(isMobile ? 5 : isTablet ? 8 : 12)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-[1px] h-[1px] bg-[#0af] rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `float ${3 + Math.random() * 2}s infinite ease-in-out`,
//               animationDelay: `${Math.random() * 1}s`,
//               opacity: 0.1 + Math.random() * 0.2
//             }}
//           />
//         ))}
//       </div>

//       {/* Section Title */}
//       <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-10">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0af] via-[#0ff] to-[#0af] bg-clip-text text-transparent"
//             style={{
//               animation: 'gradient-shift 3s ease infinite',
//               backgroundSize: '200% 100%'
//             }}>
//           PROJECTS
//         </h2>
//         <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#0af] to-transparent mx-auto mt-2"></div>
//         <p className="text-white/80 mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
//           {isMobile || isTablet 
//             ? "Swipe to navigate • Tap anywhere on card to explore" 
//             : "Watch the holographic animation • Click anywhere to materialize"}
//         </p>
//         <div className="mt-4 text-[#0af]/70 text-sm">
//           <span className="inline-flex items-center gap-2">
//             <div className="w-2 h-2 rounded-full bg-[#0af] animate-pulse"></div>
//             {isMobile || isTablet 
//               ? "Mobile Holographic Interface" 
//               : `Dynamic Animation: ${animationPhase === 0 ? 'Rotating' : animationPhase === 1 ? 'Coming Closer' : 'Jumbling'}`}
//           </span>
//         </div>
//       </div>

//       {/* MOBILE/TABLET CAROUSEL - Keep same */}
//       {(isMobile || isTablet) && (
//         <div className="relative w-full max-w-md mx-auto">
//           <div 
//             className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden"
//             style={{
//               background: 'linear-gradient(145deg, rgba(10, 175, 255, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%)',
//               border: '1px solid rgba(10, 175, 255, 0.2)'
//             }}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div
//               key={currentMobileIndex}
//               className="absolute inset-0 rounded-2xl p-6 sm:p-8 cursor-pointer"
//               style={{
//                 background: 'linear-gradient(145deg, rgba(10, 175, 255, 0.08) 0%, rgba(0, 0, 0, 0.85) 100%)',
//                 backdropFilter: 'blur(10px)'
//               }}
//               onClick={() => handleOpenModal(ProjectsInfo[currentMobileIndex])}
//             >
//               <div className="w-full h-48 sm:h-56 overflow-hidden rounded-xl mb-6 relative">
//                 <img
//                   src={ProjectsInfo[currentMobileIndex].image}
//                   alt={ProjectsInfo[currentMobileIndex].title}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 border border-[#0af]/30 rounded-xl pointer-events-none"></div>
//               </div>
              
//               <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 text-center px-2 truncate"
//                   style={{ textShadow: '0 0 15px rgba(10, 175, 255, 0.5)' }}>
//                 {ProjectsInfo[currentMobileIndex].title}
//               </h3>
              
//               <div className="flex flex-wrap gap-2 justify-center mb-6">
//                 {ProjectsInfo[currentMobileIndex].tags.slice(0, 4).map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1.5 text-sm rounded-lg"
//                     style={{
//                       background: 'rgba(10, 175, 255, 0.1)',
//                       color: '#0af',
//                       border: '1px solid rgba(10, 175, 255, 0.3)'
//                     }}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
              
//               <div className="text-center mt-6">
//                 <div className="text-[#0af] text-sm font-semibold animate-pulse">
//                   Tap anywhere to Materialize →
//                 </div>
//               </div>
//             </div>
            
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToPrev();
//               }}
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-[#0af] text-2xl z-10"
//               style={{
//                 background: 'rgba(10, 175, 255, 0.1)',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(10, 175, 255, 0.3)'
//               }}
//               aria-label="Previous project"
//             >
//               ←
//             </button>
            
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToNext();
//               }}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-[#0af] text-2xl z-10"
//               style={{
//                 background: 'rgba(10, 175, 255, 0.1)',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(10, 175, 255, 0.3)'
//               }}
//               aria-label="Next project"
//             >
//               →
//             </button>
//           </div>
          
//           <div className="flex items-center justify-center space-x-2 mt-6">
//             <div className={`w-3 h-3 rounded-full ${isAutoRotating ? 'animate-pulse' : 'opacity-40'}`}
//                  style={{ background: '#0af' }} />
//             <span className="text-white/80 text-sm">
//               {isAutoRotating ? 'Auto-rotating' : 'Paused'}
//             </span>
//             <span className="text-[#0af] text-sm font-medium ml-4">
//               {currentMobileIndex + 1} / {ProjectsInfo.length}
//             </span>
//           </div>
//         </div>
//       )}

//       {/* DESKTOP HOLOGRAPHIC ANIMATION - FIXED: Equal sizes & Clear animation */}
//       {!isMobile && !isTablet && (
//         <div className="relative w-full h-[700px] lg:h-[800px] flex items-center justify-center">
//           {/* Central Holographic Core */}
//           <div className="absolute w-48 h-48 rounded-full z-0">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0af]/30 to-[#0ff]/20 animate-pulse"
//                  style={{ filter: 'blur(25px)', animationDuration: '2s' }}>
//             </div>
//             <div className="absolute inset-0 rounded-full border border-[#0af]/30"
//                  style={{
//                    boxShadow: 'inset 0 0 60px rgba(10, 175, 255, 0.3), 0 0 80px rgba(10, 175, 255, 0.2)'
//                  }}>
//             </div>
//           </div>
          
//           {/* Animation Container with Hardware Acceleration */}
//           <div 
//             ref={containerRef}
//             className="relative w-full h-full flex items-center justify-center"
//             style={{
//               transformStyle: 'preserve-3d',
//               perspective: '1200px'
//             }}
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => {
//               if (!selectedProject) {
//                 setIsHovering(false);
//                 setHoveredCard(null);
//               }
//             }}
//           >
//             {/* Orbital Guide Rings */}
//             <div className="absolute w-[600px] h-[600px] rounded-full border border-[#0af]/10"></div>
//             <div className="absolute w-[400px] h-[400px] rounded-full border border-[#0af]/5"></div>
//             <div className="absolute w-[200px] h-[200px] rounded-full border border-[#0af]/20"></div>
            
//             {/* HOLOGRAPHIC CARDS - FIXED: Equal sizes */}
//             {ProjectsInfo.map((project, index) => (
//               <div
//                 key={project.id}
//                 className="absolute cursor-pointer"
//                 style={getCardPosition(index)}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => {
//                   if (!selectedProject) setHoveredCard(null);
//                 }}
//                 onClick={() => handleOpenModal(project)}
//               >
//                 {/* Entire Card Container - Fully Clickable */}
//                 <div className="relative w-full h-full">
//                   {/* Card Content */}
//                   <div className="absolute inset-0 rounded-2xl p-5"
//                        style={{
//                          background: hoveredCard === index 
//                            ? 'linear-gradient(145deg, rgba(10, 175, 255, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%)'
//                            : 'linear-gradient(145deg, rgba(10, 175, 255, 0.12) 0%, rgba(0, 0, 0, 0.85) 100%)',
//                          backdropFilter: 'blur(10px)',
//                          border: hoveredCard === index 
//                            ? '2px solid rgba(10, 175, 255, 0.6)' 
//                            : '1px solid rgba(10, 175, 255, 0.25)',
//                          boxShadow: hoveredCard === index 
//                            ? '0 0 40px rgba(10, 175, 255, 0.5), inset 0 0 30px rgba(10, 175, 255, 0.15)'
//                            : '0 0 25px rgba(10, 175, 255, 0.25), inset 0 0 20px rgba(10, 175, 255, 0.08)'
//                        }}>
                    
//                     {/* Image Container - Fixed Size */}
//                     <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                         loading="lazy"
//                       />
//                     </div>
                    
//                     {/* Title - Fixed Layout */}
//                     <h3 className="text-white font-bold text-base mb-3 text-center px-2 truncate"
//                         style={{ 
//                           textShadow: hoveredCard === index 
//                             ? '0 0 20px rgba(10, 175, 255, 0.9)' 
//                             : '0 0 10px rgba(10, 175, 255, 0.6)'
//                         }}>
//                       {project.title}
//                     </h3>
                    
//                     {/* Tags - Fixed Layout */}
//                     <div className="flex flex-wrap gap-1.5 justify-center mb-3 max-h-14 overflow-y-auto px-1">
//                       {project.tags.slice(0, 4).map((tag, idx) => (
//                         <span
//                           key={idx}
//                           className="px-2.5 py-1 text-xs rounded-lg"
//                           style={{
//                             background: hoveredCard === index 
//                               ? 'rgba(10, 175, 255, 0.25)' 
//                               : 'rgba(10, 175, 255, 0.15)',
//                             color: '#0af',
//                             border: '1px solid rgba(10, 175, 255, 0.35)'
//                           }}
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
                    
//                     {/* CTA - Fixed Position */}
//                     <div className="text-center mt-2 pt-2 border-t border-[#0af]/20">
//                       <span className="text-[#0af] text-sm font-medium"
//                             style={{ textShadow: '0 0 10px rgba(10, 175, 255, 0.6)' }}>
//                         {hoveredCard === index ? 'CLICK ANYWHERE →' : 'Hover to focus'}
//                       </span>
//                     </div>
//                   </div>
                  
//                   {/* Glow Effect on Hover */}
//                   {hoveredCard === index && (
//                     <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#0af]/30 to-[#0ff]/20 blur-xl opacity-40"></div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Animation Phase Indicator */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-10">
//             <div className="flex items-center gap-1.5">
//               <div className={`w-3 h-3 rounded-full ${animationPhase === 0 ? 'bg-[#0af] scale-125' : 'bg-white/20'}`}></div>
//               <span className="text-white/70 text-xs">Rotate</span>
//             </div>
//             <div className="flex items-center gap-1.5">
//               <div className={`w-3 h-3 rounded-full ${animationPhase === 1 ? 'bg-[#0af] scale-125' : 'bg-white/20'}`}></div>
//               <span className="text-white/70 text-xs">Center</span>
//             </div>
//             <div className="flex items-center gap-1.5">
//               <div className={`w-3 h-3 rounded-full ${animationPhase === 2 ? 'bg-[#0af] scale-125' : 'bg-white/20'}`}></div>
//               <span className="text-white/70 text-xs">Jumble</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* IRON MAN MODAL */}
//       {selectedProject && (
//         <IronManModal 
//           project={selectedProject} 
//           onClose={handleCloseModal}
//           isMobile={isMobile}
//           isTablet={isTablet}
//         />
//       )}

//       {/* Instructions */}
//       <div className="text-center mt-12 sm:mt-16 text-white/80 text-sm relative z-10 px-4">
//         <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
//              style={{
//                background: 'rgba(10, 175, 255, 0.1)',
//                border: '1px solid rgba(10, 175, 255, 0.2)',
//                backdropFilter: 'blur(10px)'
//              }}>
//           <div className="w-2 h-2 rounded-full bg-[#0af] animate-pulse"></div>
//           <span className="text-[#0af] font-medium">DYNAMIC HOLOGRAPHIC ANIMATION</span>
//         </div>
        
//         <div className="max-w-3xl mx-auto mt-6">
//           <p className="text-white/70 mb-4">
//             Watch the cards perform a mesmerizing sequence: 
//             <span className="text-[#0af] font-medium"> Rotate around center </span> → 
//             <span className="text-[#0af] font-medium"> Come closer together </span> → 
//             <span className="text-[#0af] font-medium"> Jumble and reorganize </span> → 
//             <span className="text-[#0af] font-medium"> Repeat every 13 seconds</span>
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div className="p-4 rounded-xl text-left"
//                  style={{
//                    background: 'rgba(10, 175, 255, 0.05)',
//                    border: '1px solid rgba(10, 175, 255, 0.1)'
//                  }}>
//               <div className="font-semibold text-[#0af] mb-2">Interaction</div>
//               <p className="text-white/70 text-sm">
//                 • Hover over any card to focus and enlarge it<br/>
//                 • Click anywhere on the card to open interface<br/>
//                 • Cards maintain equal size during all animations
//               </p>
//             </div>
            
//             <div className="p-4 rounded-xl text-left"
//                  style={{
//                    background: 'rgba(10, 175, 255, 0.05)',
//                    border: '1px solid rgba(10, 175, 255, 0.1)'
//                  }}>
//               <div className="font-semibold text-[#0af] mb-2">Performance</div>
//               <p className="text-white/70 text-sm">
//                 • Optimized for all hardware (low-end to high-end)<br/>
//                 • Consistent 60 FPS animation<br/>
//                 • No stuttering or lag across devices<br/>
//                 • Equal card dimensions at all times
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* OPTIMIZED CSS ANIMATIONS */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0.1; }
//           50% { transform: translateY(-8px) translateX(2px); opacity: 0.3; }
//         }
        
//         @keyframes gradient-shift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         /* Hardware acceleration for smooth animations */
//         .transform-gpu {
//           transform: translateZ(0);
//           backface-visibility: hidden;
//           -webkit-font-smoothing: subpixel-antialiased;
//         }
        
//         /* Performance optimizations */
//         * {
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }
        
//         /* Reduced motion support */
//         @media (prefers-reduced-motion: reduce) {
//           .animate-pulse, [style*="animation"] {
//             animation: none !important;
//           }
//         }
        
//         /* Mobile optimizations */
//         @media (max-width: 767px) {
//           button, [role="button"] {
//             min-height: 44px;
//             min-width: 44px;
//           }
//         }
        
//         /* Scrollbar styling */
//         .overflow-y-auto {
//           scrollbar-width: thin;
//           scrollbar-color: rgba(10, 175, 255, 0.2) transparent;
//         }
        
//         .overflow-y-auto::-webkit-scrollbar {
//           width: 2px;
//         }
        
//         .overflow-y-auto::-webkit-scrollbar-track {
//           background: transparent;
//         }
        
//         .overflow-y-auto::-webkit-scrollbar-thumb {
//           background: rgba(10, 175, 255, 0.2);
//           border-radius: 1px;
//         }
        
//         /* Ensure smooth transitions */
//         .smooth-transition {
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         /* Equal card sizing */
//         .equal-card {
//           width: 280px !important;
//           height: 340px !important;
//           min-width: 280px !important;
//           min-height: 340px !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;




















// Projects.jsx - COMPLETELY FIXED WITH ALL DESKTOP ANIMATIONS
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ProjectsInfo } from "../../Constants";
import IronManModal from "./IronManModal";
import FixedMobileProjects from "./FixedMobileProjects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const phaseStartTimeRef = useRef(Date.now());

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // OPTIMIZED ANIMATION LOOP - 60 FPS LOCKED, NO STUTTERING (DESKTOP ONLY)
  useEffect(() => {
    if (isMobile || isTablet || isHovering || selectedProject) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFPSUpdate = performance.now();
    
    const animate = (currentTime) => {
      frameCount++;
      
      const elapsed = currentTime - lastTime;
      
      if (elapsed >= frameInterval) {
        const deltaTime = Math.min(elapsed, 100) / 1000;
        
        const now = Date.now();
        const phaseTime = now - phaseStartTimeRef.current;
        
        if (phaseTime < 8000) {
          if (animationPhase !== 0) {
            setAnimationPhase(0);
            setPhaseProgress(0);
          }
          const progress = phaseTime / 8000;
          setPhaseProgress(progress);
          setRotationAngle(prev => (prev + 1.2 * deltaTime) % 360);
        } 
        else if (phaseTime < 11000) {
          if (animationPhase !== 1) {
            setAnimationPhase(1);
            setPhaseProgress(0);
          }
          const progress = (phaseTime - 8000) / 3000;
          setPhaseProgress(progress);
        } 
        else if (phaseTime < 13000) {
          if (animationPhase !== 2) {
            setAnimationPhase(2);
            setPhaseProgress(0);
          }
          const progress = (phaseTime - 11000) / 2000;
          setPhaseProgress(progress);
        } 
        else {
          phaseStartTimeRef.current = now;
          setAnimationPhase(0);
          setPhaseProgress(0);
        }
        
        lastTime = currentTime - (elapsed % frameInterval);
      }
      
      if (currentTime - lastFPSUpdate >= 1000) {
        lastFPSUpdate = currentTime;
        frameCount = 0;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, isMobile, isTablet, selectedProject, animationPhase]);

  // Calculate card position with EQUAL SIZES and CLEAR ANIMATION (DESKTOP ONLY)
  const getCardPosition = (index) => {
    const totalProjects = ProjectsInfo.length;
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let baseRadius;
    if (screenWidth >= 1920) baseRadius = 300;
    else if (screenWidth >= 1440) baseRadius = 260;
    else if (screenWidth >= 1024) baseRadius = 220;
    else baseRadius = 180;
    
    const maxRadius = Math.min(screenWidth * 0.28, screenHeight * 0.32);
    const radius = Math.min(baseRadius, maxRadius);
    
    const baseAngle = (index * (360 / totalProjects)) * (Math.PI / 180);
    
    let x = 0, y = 0, scale = 1, rotation = 0;
    let zIndex = 500;
    
    switch (animationPhase) {
      case 0:
        const rotateAngle = baseAngle + (rotationAngle * Math.PI / 180);
        x = Math.cos(rotateAngle) * radius;
        y = Math.sin(rotateAngle) * radius;
        scale = 1;
        rotation = (index * (360 / totalProjects) + rotationAngle + 90) % 360;
        zIndex = Math.round(x + y + 500);
        break;
        
      case 1:
        const centerProgress = Math.min(phaseProgress, 1);
        const easedProgress = centerProgress < 0.5 
          ? 2 * centerProgress * centerProgress 
          : 1 - Math.pow(-2 * centerProgress + 2, 2) / 2;
        
        const centerAngle = baseAngle + (rotationAngle * Math.PI / 180);
        const targetRadius = radius * 0.3;
        const currentRadius = radius - (radius - targetRadius) * easedProgress;
        
        x = Math.cos(centerAngle) * currentRadius;
        y = Math.sin(centerAngle) * currentRadius;
        scale = 1 + easedProgress * 0.3;
        rotation = (index * (360 / totalProjects) + rotationAngle + 90) % 360;
        zIndex = 600 + Math.round(easedProgress * 100);
        break;
        
      case 2:
        const jumbleProgress = Math.min(phaseProgress, 1);
        const jumbleAngle = baseAngle + (jumbleProgress * Math.PI * 2) + 
                           (index * 0.5 * Math.sin(jumbleProgress * Math.PI));
        
        const jumbleRadius = radius * (0.3 + jumbleProgress * 0.7);
        x = Math.cos(jumbleAngle) * jumbleRadius;
        y = Math.sin(jumbleAngle) * jumbleRadius;
        scale = 1 + Math.sin(jumbleProgress * Math.PI) * 0.1;
        rotation = (jumbleProgress * 180 + index * 30) % 360;
        zIndex = 700 + index;
        break;
    }
    
    if (hoveredCard === index) {
      scale *= 1.2;
      zIndex = 1000;
    }
    
    return {
      transform: `translate3d(${x}px, ${y}px, 0) rotateY(${rotation}deg) scale(${scale})`,
      opacity: hoveredCard === index ? 1 : 0.95,
      zIndex: zIndex,
      width: '280px',
      height: '340px',
      willChange: 'transform, opacity',
      transition: hoveredCard === index 
        ? 'transform 0.2s ease, opacity 0.2s ease' 
        : 'transform 0.5s ease, opacity 0.5s ease'
    };
  };

  // **FIXED: MOBILE HANDLER - SIMPLE AND DIRECT**
  const handleMobileProjectSelect = useCallback((index) => {
    console.log("Mobile project selected - Index:", index, 
                "Project:", ProjectsInfo[index]?.title);
    
    // Direct and immediate - no animation, no delay
    setSelectedProject(ProjectsInfo[index]);
  }, []);

  // Desktop modal handlers - UNCHANGED
  const handleDesktopOpenModal = (project) => {
    setSelectedProject(project);
    setIsHovering(true);
    setHoveredCard(null);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsHovering(false);
  };

  // Reset animation when component mounts (DESKTOP ONLY)
  useEffect(() => {
    if (!isMobile && !isTablet) {
      phaseStartTimeRef.current = Date.now();
    }
  }, [isMobile, isTablet]);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden min-h-screen">
      {/* Optimized Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `
                 linear-gradient(90deg, transparent 49%, #0af 50%, transparent 51%),
                 linear-gradient(0deg, transparent 49%, #0af 50%, transparent 51%)
               `,
               backgroundSize: '80px 80px'
             }}>
        </div>
        
        {[...Array(isMobile ? 5 : isTablet ? 8 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-[#0af] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 1}s`,
              opacity: 0.1 + Math.random() * 0.2
            }}
          />
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0af] via-[#0ff] to-[#0af] bg-clip-text text-transparent"
            style={{
              animation: !isMobile && !isTablet ? 'gradient-shift 3s ease infinite' : 'none',
              backgroundSize: '200% 100%'
            }}>
          PROJECTS
        </h2>
        <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#0af] to-transparent mx-auto mt-2"></div>
        <p className="text-white/80 mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
          {isMobile || isTablet 
            ? "Swipe left or right to navigate • Tap card to explore" 
            : "Watch the holographic animation • Click anywhere to materialize"}
        </p>
        <div className="mt-4 text-[#0af]/70 text-sm">
          <span className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0af] animate-pulse"></div>
            {isMobile || isTablet 
              ? "Manual Swipe Navigation" 
              : `Dynamic Animation: ${animationPhase === 0 ? 'Rotating' : animationPhase === 1 ? 'Coming Closer' : 'Jumbling'}`}
          </span>
        </div>
      </div>

      {/* MOBILE/TABLET - USING FIXED COMPONENT */}
      {(isMobile || isTablet) ? (
        <FixedMobileProjects 
          isMobile={isMobile} 
          isTablet={isTablet}
          handleProjectSelect={handleMobileProjectSelect}
        />
      ) : (
        // DESKTOP HOLOGRAPHIC ANIMATION - UNCHANGED AND FULLY WORKING
        <div className="relative w-full h-[700px] lg:h-[800px] flex items-center justify-center">
          {/* Central Holographic Core */}
          <div className="absolute w-48 h-48 rounded-full z-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0af]/30 to-[#0ff]/20 animate-pulse"
                 style={{ filter: 'blur(25px)', animationDuration: '2s' }}>
            </div>
            <div className="absolute inset-0 rounded-full border border-[#0af]/30"
                 style={{
                   boxShadow: 'inset 0 0 60px rgba(10, 175, 255, 0.3), 0 0 80px rgba(10, 175, 255, 0.2)'
                 }}>
            </div>
          </div>
          
          {/* Animation Container */}
          <div 
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1200px'
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              if (!selectedProject) {
                setIsHovering(false);
                setHoveredCard(null);
              }
            }}
          >
            {/* Orbital Guide Rings */}
            <div className="absolute w-[600px] h-[600px] rounded-full border border-[#0af]/10"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[#0af]/5"></div>
            <div className="absolute w-[200px] h-[200px] rounded-full border border-[#0af]/20"></div>
            
            {/* HOLOGRAPHIC CARDS */}
            {ProjectsInfo.map((project, index) => (
              <div
                key={project.id}
                className="absolute cursor-pointer"
                style={getCardPosition(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => {
                  if (!selectedProject) setHoveredCard(null);
                }}
                onClick={() => handleDesktopOpenModal(project)}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-2xl p-5"
                       style={{
                         background: hoveredCard === index 
                           ? 'linear-gradient(145deg, rgba(10, 175, 255, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%)'
                           : 'linear-gradient(145deg, rgba(10, 175, 255, 0.12) 0%, rgba(0, 0, 0, 0.85) 100%)',
                         backdropFilter: 'blur(10px)',
                         border: hoveredCard === index 
                           ? '2px solid rgba(10, 175, 255, 0.6)' 
                           : '1px solid rgba(10, 175, 255, 0.25)',
                         boxShadow: hoveredCard === index 
                           ? '0 0 40px rgba(10, 175, 255, 0.5), inset 0 0 30px rgba(10, 175, 255, 0.15)'
                           : '0 0 25px rgba(10, 175, 255, 0.25), inset 0 0 20px rgba(10, 175, 255, 0.08)'
                       }}>
                    
                    <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    <h3 className="text-white font-bold text-base mb-3 text-center px-2 truncate"
                        style={{ 
                          textShadow: hoveredCard === index 
                            ? '0 0 20px rgba(10, 175, 255, 0.9)' 
                            : '0 0 10px rgba(10, 175, 255, 0.6)'
                        }}>
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1.5 justify-center mb-3 max-h-14 overflow-y-auto px-1">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs rounded-lg"
                          style={{
                            background: hoveredCard === index 
                              ? 'rgba(10, 175, 255, 0.25)' 
                              : 'rgba(10, 175, 255, 0.15)',
                            color: '#0af',
                            border: '1px solid rgba(10, 175, 255, 0.35)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-center mt-2 pt-2 border-t border-[#0af]/20">
                      <span className="text-[#0af] text-sm font-medium"
                            style={{ textShadow: '0 0 10px rgba(10, 175, 255, 0.6)' }}>
                        {hoveredCard === index ? 'CLICK ANYWHERE →' : 'Hover to focus'}
                      </span>
                    </div>
                  </div>
                  
                  {hoveredCard === index && (
                    <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#0af]/30 to-[#0ff]/20 blur-xl opacity-40"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop animation phase indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-10">
            <div className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full ${animationPhase === 0 ? 'bg-[#0af] scale-125' : 'bg-white/20'}`}></div>
              <span className="text-white/70 text-xs">Rotate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full ${animationPhase === 1 ? 'bg-[#0af] scale-125' : 'bg-white/20'}`}></div>
              <span className="text-white/70 text-xs">Center</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full ${animationPhase === 2 ? 'bg-[#0af] scale-125' : 'bg-white/20'}`}></div>
              <span className="text-white/70 text-xs">Jumble</span>
            </div>
          </div>
        </div>
      )}

      {/* IRON MAN MODAL */}
      {selectedProject && (
        <IronManModal 
          project={selectedProject} 
          onClose={handleCloseModal}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      )}

      {/* Instructions - Different for mobile/tablet vs desktop */}
      <div className="text-center mt-12 sm:mt-16 text-white/80 text-sm relative z-10 px-4">
        {!isMobile && !isTablet ? (
          // DESKTOP INSTRUCTIONS
          <>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
                 style={{
                   background: 'rgba(10, 175, 255, 0.1)',
                   border: '1px solid rgba(10, 175, 255, 0.2)',
                   backdropFilter: 'blur(10px)'
                 }}>
              <div className="w-2 h-2 rounded-full bg-[#0af] animate-pulse"></div>
              <span className="text-[#0af] font-medium">HOW TO INTERACT WITH HOLOGRAPHIC ANIMATION</span>
            </div>
            
            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-white/70 mb-4">
                Watch the cards perform a mesmerizing sequence: 
                <span className="text-[#0af] font-medium"> Rotate around center </span> → 
                <span className="text-[#0af] font-medium"> Come closer together </span> → 
                <span className="text-[#0af] font-medium"> Jumble and reorganize </span> → 
                <span className="text-[#0af] font-medium"> Repeat every 13 seconds</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-4 rounded-xl text-left"
                     style={{
                       background: 'rgba(10, 175, 255, 0.05)',
                       border: '1px solid rgba(10, 175, 255, 0.1)'
                     }}>
                  <div className="font-semibold text-[#0af] mb-2">Interaction</div>
                  <p className="text-white/70 text-sm">
                    • Hover over any card to focus and enlarge it<br/>
                    • Click anywhere on the card to open interface<br/>
                    • Cards maintain equal size during all animations
                  </p>
                </div>
                
                <div className="p-4 rounded-xl text-left"
                     style={{
                       background: 'rgba(10, 175, 255, 0.05)',
                       border: '1px solid rgba(10, 175, 255, 0.1)'
                     }}>
                  <div className="font-semibold text-[#0af] mb-2">Performance</div>
                  <p className="text-white/70 text-sm">
                    • Optimized for all hardware (low-end to high-end)<br/>
                    • Consistent 60 FPS animation<br/>
                    • No stuttering or lag across devices<br/>
                    • Equal card dimensions at all times
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // MOBILE/TABLET INSTRUCTIONS
          <div className="max-w-2xl mx-auto mt-8">
            <div className="p-4 rounded-xl text-center"
                 style={{
                   background: 'rgba(10, 175, 255, 0.05)',
                   border: '1px solid rgba(10, 175, 255, 0.1)'
                 }}>
              <div className="font-semibold text-[#0af] mb-3">Mobile/Tablet Mode Active</div>
              <p className="text-white/70 text-sm mb-3">
                • <span className="text-[#0af] font-medium">Desktop animations disabled</span><br/>
                • <span className="text-[#0af] font-medium">No auto-rotation</span><br/>
                • <span className="text-[#0af] font-medium">Direct touch controls</span>
              </p>
              <p className="text-white/60 text-xs">
                Cards won't switch automatically. You have full manual control.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* OPTIMIZED CSS ANIMATIONS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.1; }
          50% { transform: translateY(-8px) translateX(2px); opacity: 0.3; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse, [style*="animation"] {
            animation: none !important;
          }
        }
        
        @media (max-width: 767px) {
          button, [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(10, 175, 255, 0.2) transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar {
          width: 2px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(10, 175, 255, 0.2);
          border-radius: 1px;
        }
        
        .smooth-transition {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .equal-card {
          width: 280px !important;
          height: 340px !important;
          min-width: 280px !important;
          min-height: 340px !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;

// Completed..........................