
//In iPad Mini screen device the navbar menu items it means 'ABOUT SKILLS EXPERIENCE EDUCATION CONTACT and next GitHub icon, LinkedIn Icon are not fully responsive so for to make it fully responsiveness when we access in iPad Mini then the menu items must be cover in Hamburger menu icon in both Portrait and Landscape',/ In iPad Air 4 the menu items are overlapping on the logo so when we access in iPad Air 4 then make it fully responsiveness such as placing menu items cover in Hamburger menu icon in both Portrait and Landscape,/ In iPad PRO 11 same problem like in iPad Air 4 so when we access in iPad PRO 11 then make it fully responsiveness such as placing menu items cover in Hamburger menu icon in both Portrait and Landscape,/ In Galaxy Tab S7 same problem like in iPad Air 4 so when we access in Galaxy Tab S7 then make it fully responsiveness such as placing menu items cover in Hamburger menu icon in both Portrait and Landscape,/ In Microsoft Surface Duo same problem like in iPad Air 4 so when we access in MicroSoft Surface Duo then make it fully responsiveness such as placing menu items cover in Hamburger menu icon in both Portrait and Landscape


// import React, { useEffect, useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleMenuItemClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);

//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const menuItems = [
//     { id: "about", label: "ABOUT" },
//     { id: "skills", label: "SKILLS" },
//     { id: "experience", label: "EXPERIENCE" },
//     { id: "projects", label: "PROJECTS" },
//     { id: "education", label: "EDUCATION" },
//     { id: "contact", label: "CONTACT" },
//   ];

//   return (
//     <nav
//       className={`fixed z-50 transition duration-300 px-[7vw] md:px-[9vw] lg:px-[10vw] top-0 w-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
//         isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" : "bg-black-200"
//       }`}
//     >
//       <div className="flex flex-wrap justify-between items-center py-4 w-full">
//         {/* Logo */}
//         <div className="cursor-pointer mt-[-30px] hover:drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]">
//           <a href="/">
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-35 h-35 rounded-full object-cover" />
//           </a>
//         </div>

//         {/* Hamburger Icon - Appears on screens below 1024px */}
//         <div
//           className={`lg:hidden z-50 cursor-pointer ${
//             isOpen ? "text-[#ff0000]" : "text-[#00FF00]"
//           }`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </div>

//         {/* Desktop Menu (hidden on tablets and smaller) */}
//         <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px] ">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`text-[20px] lg:text-[23px] cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
//                 activeSection === item.id
//                   ? "text-[#ff0404]"
//                   : isScrolled
//                   ? "text-[#ffffff] font-semibold drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//                   : "text-[#00FF00] font-bold "
//               }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id)}>
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons (Desktop Only) */}
//         <div className="hidden lg:flex space-x-4 mt-[-85px] mr-[-20px]">
//           <a
//             href="https://github.com/Arshad-Shaik"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`hover:text-[#00FF00] ${
//               isScrolled ? "text-[#00FF00]" : "text-[#ffff]"
//             }`}
//           >
//             <FaGithub size={35} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/arshadwasibshaik41ashu"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`hover:text-[#00FF00] ${
//               isScrolled ? "text-[#00FF00]" : "text-[#ffff]"
//             }`}
//           >
//             <FaLinkedin size={35} />
//           </a>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto bg-white/5 backdrop-blur-md text-[#ffff] font-extrabold py-4 px-3 space-y-4 rounded-lg shadow-lg z-40" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//           <ul className="flex flex-col items-center space-y-4 text-center" >
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`text-base xs:text-sm cursor-pointer hover:text-[#00FF00] ${
//                   activeSection === item.id ? "text-[#6008f8]" : ""
//                 }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id)}>
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-center space-x-4 pt-4">
//             <a
//               href="https://github.com/Arshad-Shaik"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#00FF00]"
//             >
//               <FaGithub size={20} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/arshadwasibshaik41ashu"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#00FF00]"
//             >
//               <FaLinkedin size={20} />
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;










// import { useEffect, useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null); // Used to delay speaking until scroll

//   useEffect(() => {
//     // ✅ One-time Welcome Message
//     if (!sessionStorage.getItem("hasSpokenWelcome")) {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Speaking Portfolio, I'm Aashistha, Arshad'ss, Portfolio Agent");
//       const voices = window.speechSynthesis.getVoices();
//       const femaleVoice = voices.find((voice) =>
//         voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("zira")
//       );
//       if (femaleVoice) message.voice = femaleVoice;
//       message.pitch = 1.1;
//       message.rate = 1;
//       window.speechSynthesis.speak(message);
//       sessionStorage.setItem("hasSpokenWelcome", "true");
//     }

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       if (pendingSpeakText) {
//         speakNavigation(pendingSpeakText);
//         setPendingSpeakText(null);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pendingSpeakText]);

//   // 🔊 Speak with female voice
//   const speakNavigation = (text) => {
//     const message = new SpeechSynthesisUtterance(text);
//     const voices = window.speechSynthesis.getVoices();
//     const femaleVoice = voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("zira")
//     );
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.speak(message);
//   };

//   // ✨ Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);
//     setPendingSpeakText(`Navigating to ${label} section`);
//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // 🌐 Social icon voice
//   const handleIconClick = (label, url) => {
//     speakNavigation(`Opening, ${label}`);
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   // 🖼️ Logo click voice
//   const handleLogoClick = () => {
//     speakNavigation("Site is, Restarted");
//     window.location.href = "/";
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//     { id: "education", label: "Education" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className={`fixed z-50 transition duration-300 px-[7vw] md:px-[9vw] lg:px-[10vw] top-0 w-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
//         isScrolled
//           ? "bg-white/5 backdrop-blur-lg shadow-lg drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//           : "bg-black-200"
//       }`}
//     >
//       <div className="flex flex-wrap justify-between items-center py-4 w-full">
//         {/* Logo */}
//         <div
//           className="cursor-pointer mt-[-30px] hover:drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//           onClick={handleLogoClick}
//         >
//           <img
//             src="src/assets/hero/Shaik.png"
//             alt="Arshad"
//             className="w-35 h-35 rounded-full object-cover"
//           />
//         </div>

//         {/* Hamburger */}
//         <div
//           className={`lg:hidden z-50 cursor-pointer ${
//             isOpen ? "text-[#ff0000]" : "text-[#00FF00]"
//           }`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`text-[20px] lg:text-[23px] cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
//                 activeSection === item.id
//                   ? "text-[#ff0404]"
//                   : isScrolled
//                   ? "text-[#ffffff] font-semibold drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//                   : "text-[#00FF00] font-bold "
//               }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                 {item.label.toUpperCase()}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden lg:flex space-x-4 mt-[-85px] mr-[-20px]">
//           <button
//             onClick={() =>
//               handleIconClick("GitHub", "https://github.com/Arshad-Shaik")
//             }
//             className={`hover:text-[#00FF00] ${
//               isScrolled ? "text-[#00FF00]" : "text-[#ffff]"
//             }`}
//           >
//             <FaGithub size={35} />
//           </button>
//           <button
//             onClick={() =>
//               handleIconClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu")
//             }
//             className={`hover:text-[#00FF00] ${
//               isScrolled ? "text-[#00FF00]" : "text-[#ffff]"
//             }`}
//           >
//             <FaLinkedin size={35} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto bg-white/5 backdrop-blur-md text-[#ffff] font-extrabold py-4 px-3 space-y-4 rounded-lg shadow-lg z-40"
//           style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
//         >
//           <ul className="flex flex-col items-center space-y-4 text-center">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`text-base xs:text-sm cursor-pointer hover:text-[#00FF00] ${
//                   activeSection === item.id ? "text-[#6008f8]" : ""
//                 }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                   {item.label.toUpperCase()}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-center space-x-4 pt-4">
//             <button
//               onClick={() =>
//                 handleIconClick("GitHub", "https://github.com/Arshad-Shaik")
//               }
//               className="hover:text-[#00FF00]"
//             >
//               <FaGithub size={20} />
//             </button>
//             <button
//               onClick={() =>
//                 handleIconClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu")
//               }
//               className="hover:text-[#00FF00]"
//             >
//               <FaLinkedin size={20} />
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;









// // " 'Aashisyaa' - One who is full of divine blessings, brings peace and light, and is cherished by all."
// // Navbars.jsx
// import { useEffect, useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null); // Used to delay speaking until scroll

//   useEffect(() => {
//     // ✅ One-time Welcome Message
//     if (!sessionStorage.getItem("hasSpokenWelcome")) {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Speaking Portfolio, I'm Aashistha, Arshad's, Portfolio Agent");
//       const voices = window.speechSynthesis.getVoices();
//       const femaleVoice = voices.find((voice) =>
//         voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("zira")
//       );
//       if (femaleVoice) message.voice = femaleVoice;
//       message.pitch = 1.1;
//       message.rate = 1;
//       window.speechSynthesis.speak(message);
//       sessionStorage.setItem("hasSpokenWelcome", "true");
//     }

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       if (pendingSpeakText) {
//         speakNavigation(pendingSpeakText);
//         setPendingSpeakText(null);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pendingSpeakText]);

//   // 🔊 Speak with female voice
//   const speakNavigation = (text) => {
//     const message = new SpeechSynthesisUtterance(text);
//     const voices = window.speechSynthesis.getVoices();
//     const femaleVoice = voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("zira")
//     );
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.speak(message);
//   };

//   // ✨ Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);
//     setPendingSpeakText(`Navigating to ${label} section`);
//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // 🌐 Social icon voice
//   const handleIconClick = (label, url) => {
//     speakNavigation(`Opening, ${label}`);
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   // 🖼️ Logo click voice
//   const handleLogoClick = () => {
//     speakNavigation("Site is, Restarted");
//     window.location.href = "/";
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//     { id: "education", label: "Education" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className={`fixed z-50 transition duration-300 px-[7vw] md:px-[9vw] lg:px-[10vw] top-0 w-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
//         isScrolled
//           ? "bg-white/5 backdrop-blur-lg shadow-lg drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//           : "bg-black-200"
//       }`}
//     >
//       <div className="flex flex-wrap justify-between items-center py-4 w-full">
//         {/* Logo */}
//         <div
//           className="cursor-pointer mt-[-30px] hover:drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//           onClick={handleLogoClick}
//         >
//           <img
//             src="src/assets/hero/Shaik.png"
//             alt="Arshad"
//             className="w-35 h-35 rounded-full object-cover"
//           />
//         </div>

//         {/* Hamburger */}
//         <div
//           className={`lg:hidden z-50 cursor-pointer ${
//             isOpen ? "text-[#ff0000]" : "text-[#00FF00]"
//           }`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`text-[20px] lg:text-[23px] cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
//                 activeSection === item.id
//                   ? "text-[#ff0404]"
//                   : isScrolled
//                   ? "text-[#ffffff] font-semibold drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//                   : "text-[#00FF00] font-bold "
//               }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                 {item.label.toUpperCase()}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden lg:flex space-x-4 mt-[-85px] mr-[-20px]">
//           <button
//             onClick={() =>
//               handleIconClick("GitHub", "https://github.com/Arshad-Shaik")
//             }
//             className={`hover:text-[#00FF00] ${
//               isScrolled ? "text-[#00FF00]" : "text-[#ffff]"
//             }`}
//           >
//             <FaGithub size={35} />
//           </button>
//           <button
//             onClick={() =>
//               handleIconClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu")
//             }
//             className={`hover:text-[#00FF00] ${
//               isScrolled ? "text-[#00FF00]" : "text-[#ffff]"
//             }`}
//           >
//             <FaLinkedin size={35} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto bg-white/5 backdrop-blur-md text-[#ffff] font-extrabold py-4 px-3 space-y-4 rounded-lg shadow-lg z-40"
//           style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
//         >
//           <ul className="flex flex-col items-center space-y-4 text-center">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`text-base xs:text-sm cursor-pointer hover:text-[#00FF00] ${
//                   activeSection === item.id ? "text-[#6008f8]" : ""
//                 }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                   {item.label.toUpperCase()}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-center space-x-4 pt-4">
//             <button
//               onClick={() =>
//                 handleIconClick("GitHub", "https://github.com/Arshad-Shaik")
//               }
//               className="hover:text-[#00FF00]"
//             >
//               <FaGithub size={20} />
//             </button>
//             <button
//               onClick={() =>
//                 handleIconClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu")
//               }
//               className="hover:text-[#00FF00]"
//             >
//               <FaLinkedin size={20} />
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







// Navbars.jsx
// import { useEffect, useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null); // Used to delay speaking until scroll

//   useEffect(() => {
//     // ✅ One-time Welcome Message - FEMALE VOICE ONLY (SPEAKS ONLY ONCE)
//     if (!sessionStorage.getItem("hasSpokenWelcome")) {
//       let hasSpoken = false; // Local flag to prevent multiple speaks

//       const speakWelcome = () => {
//         if (hasSpoken || sessionStorage.getItem("hasSpokenWelcome")) return; // Double check to prevent multiple executions

//         const voices = window.speechSynthesis.getVoices();
//         const femaleVoice = voices.find((voice) =>
//           voice.name.toLowerCase().includes("female") || 
//           voice.name.toLowerCase().includes("zira") ||
//           voice.name.toLowerCase().includes("victoria") ||
//           voice.name.toLowerCase().includes("samantha")
//         );

//         if (femaleVoice && !hasSpoken) {
//           const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent");
//           message.voice = femaleVoice;
//           message.pitch = 1.1;
//           message.rate = 1;

//           // Set flags BEFORE speaking to prevent any race conditions
//           hasSpoken = true;
//           sessionStorage.setItem("hasSpokenWelcome", "true");

//           window.speechSynthesis.speak(message);

//           // Remove the event listener immediately
//           window.speechSynthesis.removeEventListener('voiceschanged', speakWelcome);
//         }
//       };

//       // Check if voices are already loaded - use only ONE method
//       const voices = window.speechSynthesis.getVoices();
//       if (voices.length > 0) {
//         setTimeout(() => speakWelcome(), 500);
//       } else {
//         window.speechSynthesis.addEventListener('voiceschanged', speakWelcome);
//       }

//     }

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       if (pendingSpeakText) {
//         speakNavigation(pendingSpeakText);
//         setPendingSpeakText(null);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pendingSpeakText]);

//   // 🔊 Speak with female voice for navigation
//   const speakNavigation = (text) => {
//     const message = new SpeechSynthesisUtterance(text);
//     const voices = window.speechSynthesis.getVoices();
//     const femaleVoice = voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("zira")
//     );
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.speak(message);
//   };

//   // ✨ Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);
//     setPendingSpeakText(`Navigating to ${label} section`);
//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // 🌐 Social icon voice
//   const handleIconClick = (label, url) => {
//     speakNavigation(`Opening, ${label}`);
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   // 🖼️ Logo click voice
//   const handleLogoClick = () => {
//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//     { id: "education", label: "Education" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className={`fixed z-50 transition duration-300 px-[7vw] md:px-[9vw] lg:px-[10vw] top-0 w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${
//         isScrolled
//           ? "bg-white/5 backdrop-blur-lg shadow-lg "
//           : "bg-black-200"
//       }`}
//     >
//       <div className="flex flex-wrap justify-between items-center py-4 w-full">
//         {/* Logo */}
//         <div
//           className="cursor-pointer mt-[-21px] "
//           onClick={handleLogoClick}
//         >
//           <img
//             src="src/assets/hero/Shaik.png"
//             alt="Arshad"
//             className="w-35 h-35 rounded-full object-cover"
//           />
//         </div>

//         {/* Hamburger */}
//         <div
//           className={`lg:hidden z-50 cursor-pointer ${
//             isOpen ? "text-[#ff0000]" : "text-[#00FF00]"
//           }`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`text-[20px] lg:text-[23px] cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
//                 activeSection === item.id
//                   ? "text-[#ff0404]"
//                   : isScrolled
//                   ? "text-[#ffffff] font-semibold drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//                   : "text-[#00FF00] font-bold "
//               }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                 {item.label.toUpperCase()}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden lg:flex space-x-4 mt-[-85px] mr-[-20px]">
//           <button
//             onClick={() =>
//               handleIconClick("GitHub", "https://github.com/Arshad-Shaik")
//             }
//             className={`hover:text-[#00FF00] ${
//               isScrolled ? "text-[#00FF00]" : "text-[#ffff]"
//             }`}
//           >
//             <FaGithub size={35} />
//           </button>
//           <button
//             onClick={() =>
//               handleIconClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu")
//             }
//             className={`hover:text-[#00FF00] ${
//               isScrolled ? "text-[#00FF00]" : "text-[#ffff]"
//             }`}
//           >
//             <FaLinkedin size={35} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto bg-white/5 backdrop-blur-md text-[#ffff] font-extrabold py-4 px-3 space-y-4 rounded-lg shadow-lg z-40"
//           style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
//         >
//           <ul className="flex flex-col items-center space-y-4 text-center">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`text-base xs:text-sm cursor-pointer hover:text-[#00FF00] ${
//                   activeSection === item.id ? "text-[#6008f8]" : ""
//                 }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                   {item.label.toUpperCase()}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-center space-x-4 pt-4">
//             <button
//               onClick={() =>
//                 handleIconClick("GitHub", "https://github.com/Arshad-Shaik")
//               }
//               className="hover:text-[#00FF00]"
//             >
//               <FaGithub size={20} />
//             </button>
//             <button
//               onClick={() =>
//                 handleIconClick("LinkedIn", "https://www.linkedin.com/in/arshadwasibshaik41ashu")
//               }
//               className="hover:text-[#00FF00]"
//             >
//               <FaLinkedin size={20} />
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







// // Navbars.jsx
// import { useEffect, useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import SocialCube from './SocialCube'; // Import the SocialCube component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);

//   // Function to get female voice
//   const getFemaleVoice = () => {
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

//   // Function to speak welcome message
//   const speakWelcomeMessage = () => {
//     const femaleVoice = getFemaleVoice();

//     if (femaleVoice) {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//       message.voice = femaleVoice;
//       message.pitch = 1.1;
//       message.rate = 1;

//       // Cancel any current speech
//       window.speechSynthesis.cancel();

//       // Speak the message
//       window.speechSynthesis.speak(message);

//       console.log("Welcome message spoken successfully");
//     } else {
//       // If no female voice found, try again after a short delay
//       console.log("Female voice not found, retrying...");
//       setTimeout(() => {
//         const retryVoice = getFemaleVoice();
//         if (retryVoice) {
//           const retryMessage = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//           retryMessage.voice = retryVoice;
//           retryMessage.pitch = 1.1;
//           retryMessage.rate = 1;
//           window.speechSynthesis.cancel();
//           window.speechSynthesis.speak(retryMessage);
//           console.log("Welcome message spoken on retry");
//         } else {
//           console.log("No female voice available after retry");
//         }
//       }, 500);
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//       // Removed speakScrollDirection('up');
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//       // Removed speakScrollDirection('down');
//     }
//   };

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // 🔒 Security: Prevent text selection, right-click, and keyboard shortcuts - Only if agent NOT activated
//     const preventUnauthorizedActions = (e) => {
//       if (!isAgentActivated) {
//         // Prevent right-click
//         if (e.type === 'contextmenu') {
//           e.preventDefault();
//           return false;
//         }

//         // Prevent text selection
//         if (e.type === 'selectstart') {
//           e.preventDefault();
//           return false;
//         }

//         // Prevent keyboard shortcuts for inspect (F12, Ctrl+Shift+I, Ctrl+Shift+C, etc.)
//         if (e.type === 'keydown') {
//           if (
//             e.key === 'F12' ||
//             (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
//             (e.key === 'u' && e.ctrlKey)
//           ) {
//             e.preventDefault();
//             return false;
//           }
//         }

//         // Prevent copy
//         if (e.type === 'copy') {
//           e.preventDefault();
//           return false;
//         }

//         // Prevent cut
//         if (e.type === 'cut') {
//           e.preventDefault();
//           return false;
//         }
//       }
//     };

//     // Add event listeners for security - Always active
//     document.addEventListener('contextmenu', preventUnauthorizedActions);
//     document.addEventListener('selectstart', preventUnauthorizedActions);
//     document.addEventListener('keydown', preventUnauthorizedActions);
//     document.addEventListener('copy', preventUnauthorizedActions);
//     document.addEventListener('cut', preventUnauthorizedActions);

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     // Completely disable body scroll and hide scrollbars - ALWAYS
//     document.body.style.overflow = 'hidden';
//     document.documentElement.style.overflow = 'hidden';

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);

//         if (pendingSpeakText) {
//           speakNavigation(pendingSpeakText);
//           setPendingSpeakText(null);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listeners on component unmount
//     return () => {
//       document.removeEventListener('contextmenu', preventUnauthorizedActions);
//       document.removeEventListener('selectstart', preventUnauthorizedActions);
//       document.removeEventListener('keydown', preventUnauthorizedActions);
//       document.removeEventListener('copy', preventUnauthorizedActions);
//       document.removeEventListener('cut', preventUnauthorizedActions);
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [pendingSpeakText, isAgentActivated]);

//   // Activate portfolio agent function - UNLOCKS EVERYTHING
//   const activatePortfolioAgent = () => {
//     console.log("Activate Agent button clicked");

//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");

//     // Update global state
//     window.isPortfolioAgentActivated = true;

//     // Wait a moment for state to update, then speak welcome message
//     setTimeout(() => {
//       console.log("Attempting to speak welcome message...");
//       speakWelcomeMessage();
//     }, 300);
//   };

//   // 🔊 Speak with female voice for navigation - Only works if agent is activated
//   const speakNavigation = (text) => {
//     if (!isAgentActivated) return;

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.speak(message);
//   };

//   // ✨ Menu click + scroll - Only works if agent is activated
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     setActiveSection(sectionId);
//     setIsOpen(false);
//     setPendingSpeakText(`Navigating to ${label} section`);
//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // 🌐 Social icon voice - Only works if agent is activated
//   const handleIconClick = (label, url) => {
//     if (!isAgentActivated) return;

//     speakNavigation(`Opening, ${label}`);
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   // 🖼️ Logo click voice - Only works if agent is activated
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;

//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   // Hamburger menu - Only works if agent is activated
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//     { id: "education", label: "Education" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <>
//       {/* Welcome Card Overlay */}
//       {showWelcomeCard && (
//         <div 
//           className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//           onClick={(e) => {
//             // Prevent clicks outside the card from doing anything
//             e.stopPropagation();
//           }}
//         >
//           <div 
//             className="animate-slide-down bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out"
//             onClick={(e) => e.stopPropagation()} // Prevent card clicks from bubbling
//           >
//             <div className="text-center">
//               <h3 className="text-white text-xl font-bold mb-3" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.6)" }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button
//                 onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)]"
//                 style={{
//                   boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00",
//                 }}
//               >
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay - Shows when agent not activated */}
//       {!isAgentActivated && (
//         <div 
//           className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//           onClick={(e) => {
//             // Completely silent - no voice messages when clicking anywhere
//             e.preventDefault();
//             e.stopPropagation();
//           }}
//         >
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg" style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.6)" }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar */}
//       <nav
//         className={`fixed z-50 transition duration-300 px-[7vw] md:px-[9vw] lg:px-[10vw] top-0 w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${
//           isScrolled
//             ? "bg-white/5 backdrop-blur-lg shadow-lg "
//             : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-50 pointer-events-none' : ''}`}
//         onClick={(e) => {
//           if (!isAgentActivated) {
//             e.preventDefault();
//             e.stopPropagation();
//           }
//         }}
//       >
//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div
//             className="cursor-pointer mt-[-21px] "
//             onClick={handleLogoClick}
//           >
//             <img
//               src="src/assets/hero/Shaik.png"
//               alt="Arshad"
//               className="w-35 h-35 rounded-full object-cover"
//             />
//           </div>

//           {/* Hamburger */}
//           <div
//             className={`lg:hidden z-50 cursor-pointer ${
//               isOpen ? "text-[#ff0000]" : "text-[#00FF00]"
//             }`}
//             onClick={handleHamburgerClick}
//           >
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`text-[20px] lg:text-[23px] cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
//                   activeSection === item.id
//                     ? "text-[#ff0404]"
//                     : isScrolled
//                     ? "text-[#ffffff] font-semibold drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//                     : "text-[#00FF00] font-bold "
//                 }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                   {item.label.toUpperCase()}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* REMOVED Social Icons section from here */}
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div
//             className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto bg-white/5 backdrop-blur-md text-[#ffff] font-extrabold py-4 px-3 space-y-4 rounded-lg shadow-lg z-40"
//             style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
//           >
//             <ul className="flex flex-col items-center space-y-4 text-center">
//               {menuItems.map((item) => (
//                 <li
//                   key={item.id}
//                   className={`text-base xs:text-sm cursor-pointer hover:text-[#00FF00] ${
//                     activeSection === item.id ? "text-[#6008f8]" : ""
//                   }`}
//                 >
//                   <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                     {item.label.toUpperCase()}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             {/* REMOVED Social Icons from mobile menu */}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;







// // Navbars.jsx
// import { useEffect, useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent'; // Import the security component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);

//   // Function to get female voice
//   const getFemaleVoice = () => {
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

//   // Function to speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Function to speak welcome message
//   const speakWelcomeMessage = () => {
//     // Wait for voices to be loaded
//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         const femaleVoice = getFemaleVoice();
//         if (femaleVoice) {
//           const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//           message.voice = femaleVoice;
//           message.pitch = 1.1;
//           message.rate = 1;

//           window.speechSynthesis.cancel();
//           window.speechSynthesis.speak(message);
//         }
//       });
//     } else {
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) {
//         const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//         message.voice = femaleVoice;
//         message.pitch = 1.1;
//         message.rate = 1;

//         window.speechSynthesis.cancel();
//         window.speechSynthesis.speak(message);
//       }
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//         if (pendingSpeakText) {
//           speakNavigation(pendingSpeakText);
//           setPendingSpeakText(null);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [pendingSpeakText, isAgentActivated]);

//   // Activate portfolio agent function
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     // Speak welcome message when agent is activated
//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 100);
//   };

//   // 🔊 Speak with female voice for navigation
//   const speakNavigation = (text) => {
//     if (!isAgentActivated) return;

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.speak(message);
//   };

//   // Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     setActiveSection(sectionId);
//     setIsOpen(false);
//     setPendingSpeakText(`Navigating to ${label} section`);
//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   // Hamburger menu
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//     { id: "education", label: "Education" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <>
//       {/* Security Agent for Entire Website */}
//       <SecurityAgent 
//         isAgentActivated={isAgentActivated} 
//         speakSecurityMessage={speakSecurityMessage} 
//       />

//       {/* Welcome Card Overlay */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//              style={{ userSelect: 'none', pointerEvents: 'auto' }}
//              onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out"
//                style={{ userSelect: 'none' }}
//                onClick={(e) => e.stopPropagation()}>
//             <div className="text-center">
//               <h3 className="text-white text-xl font-bold mb-3" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.6)" }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)]"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//              style={{ userSelect: 'none' }}
//              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg" style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.6)" }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar */}
//       <nav className={`fixed z-50 transition duration-300 px-[7vw] md:px-[9vw] lg:px-[10vw] top-0 w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${
//           isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-50 pointer-events-none' : ''}`}
//         style={{ userSelect: 'none' }}
//         onClick={(e) => { if (!isAgentActivated) { e.preventDefault(); e.stopPropagation(); } }}>

//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-21px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-35 h-35 rounded-full object-cover"
//                  style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"}`}
//                onClick={handleHamburgerClick}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} className={`text-[20px] lg:text-[23px] cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ${
//                   activeSection === item.id ? "text-[#ff0404]" : isScrolled ? "text-[#ffffff] font-semibold drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" : "text-[#00FF00] font-bold "
//                 }`} style={{ userSelect: 'none' }}>
//                 <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                   {item.label.toUpperCase()}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto bg-white/5 backdrop-blur-md text-[#ffff] font-extrabold py-4 px-3 space-y-4 rounded-lg shadow-lg z-40"
//                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", userSelect: 'none' }}>
//             <ul className="flex flex-col items-center space-y-4 text-center">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`text-base xs:text-sm cursor-pointer hover:text-[#00FF00] ${
//                     activeSection === item.id ? "text-[#6008f8]" : ""
//                   }`} style={{ userSelect: 'none' }}>
//                   <button onClick={() => handleMenuItemClick(item.id, item.label)}>
//                     {item.label.toUpperCase()}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;


















// Navbar Icons changed

// // Navbars.jsx
// import { useEffect, useState } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiPackage } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent'; // Import the security component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);

//   // Function to get female voice
//   const getFemaleVoice = () => {
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

//   // Function to speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Function to speak welcome message
//   const speakWelcomeMessage = () => {
//     // Wait for voices to be loaded
//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         const femaleVoice = getFemaleVoice();
//         if (femaleVoice) {
//           const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//           message.voice = femaleVoice;
//           message.pitch = 1.1;
//           message.rate = 1;

//           window.speechSynthesis.cancel();
//           window.speechSynthesis.speak(message);
//         }
//       });
//     } else {
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) {
//         const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//         message.voice = femaleVoice;
//         message.pitch = 1.1;
//         message.rate = 1;

//         window.speechSynthesis.cancel();
//         window.speechSynthesis.speak(message);
//       }
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//         if (pendingSpeakText) {
//           speakNavigation(pendingSpeakText);
//           setPendingSpeakText(null);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [pendingSpeakText, isAgentActivated]);

//   // Activate portfolio agent function
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     // Trigger navbar animation after a short delay
//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     // Speak welcome message when agent is activated
//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 100);
//   };

//   // 🔊 Speak with female voice for navigation
//   const speakNavigation = (text) => {
//     if (!isAgentActivated) return;

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.speak(message);
//   };

//   // Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     setActiveSection(sectionId);
//     setIsOpen(false);
//     setPendingSpeakText(`Navigating to ${label} section`);
//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   // Hamburger menu
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
//     setIsOpen(!isOpen);
//   };

//   // Custom Skills icon as < />
//   const SkillsIcon = () => (
//     <span className="text-xl font-bold" style={{ fontFamily: 'monospace', color: '#00FF00' }}>
//       &lt;/&gt;
//     </span>
//   );

//   // Menu items with Fi icons and custom Skills icon - with lime color
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <SkillsIcon /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiPackage size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       {/* Security Agent for Entire Website */}
//       <SecurityAgent 
//         isAgentActivated={isAgentActivated} 
//         speakSecurityMessage={speakSecurityMessage} 
//       />

//       {/* Welcome Card Overlay */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//              style={{ userSelect: 'none', pointerEvents: 'auto' }}
//              onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out"
//                style={{ userSelect: 'none' }}
//                onClick={(e) => e.stopPropagation()}>
//             <div className="text-center">
//               <h3 className="text-white text-xl font-bold mb-3" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.6)" }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)]"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//              style={{ userSelect: 'none' }}
//              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg" style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.6)" }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar with smooth animation */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${
//           isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${
//           navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{ 
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}
//         onClick={(e) => { if (!isAgentActivated) { e.preventDefault(); e.stopPropagation(); } }}>

//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-21px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-35 h-35 rounded-full object-cover"
//                  style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"}`}
//                onClick={handleHamburgerClick}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu with Icons */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} 
//                   className="group relative"
//                   style={{ userSelect: 'none' }}>
//                 <button 
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${
//                     activeSection === item.id 
//                       ? "text-[#ff0404] scale-110" 
//                       : "text-[#00FF00] hover:scale-110"
//                   }`}
//                 >
//                   {/* Icon */}
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>

//                   {/* Tooltip text on hover */}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu (Keep text for mobile for better UX) */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto bg-white/5 backdrop-blur-md text-[#ffff] font-extrabold py-4 px-3 space-y-4 rounded-lg shadow-lg z-40"
//                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", userSelect: 'none' }}>
//             <ul className="flex flex-col items-center space-y-4 text-center">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] ${
//                     activeSection === item.id ? "text-[#6008f8]" : ""
//                   }`} style={{ userSelect: 'none' }}>
//                   <button 
//                     onClick={() => handleMenuItemClick(item.id, item.label)}
//                     className="flex items-center space-x-2"
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span>{item.label.toUpperCase()}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;










// // Navbars.jsx
// import { useEffect, useState } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiPackage, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent'; // Import the security component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);

//   // Function to get female voice
//   const getFemaleVoice = () => {
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

//   // Function to speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Function to speak welcome message
//   const speakWelcomeMessage = () => {
//     // Wait for voices to be loaded
//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         const femaleVoice = getFemaleVoice();
//         if (femaleVoice) {
//           const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//           message.voice = femaleVoice;
//           message.pitch = 1.1;
//           message.rate = 1;

//           window.speechSynthesis.cancel();
//           window.speechSynthesis.speak(message);
//         }
//       });
//     } else {
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) {
//         const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//         message.voice = femaleVoice;
//         message.pitch = 1.1;
//         message.rate = 1;

//         window.speechSynthesis.cancel();
//         window.speechSynthesis.speak(message);
//       }
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//         if (pendingSpeakText) {
//           speakNavigation(pendingSpeakText);
//           setPendingSpeakText(null);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [pendingSpeakText, isAgentActivated]);

//   // Activate portfolio agent function
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     // Trigger navbar animation after a short delay
//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     // Speak welcome message when agent is activated
//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 100);
//   };

//   // 🔊 Speak with female voice for navigation
//   const speakNavigation = (text) => {
//     if (!isAgentActivated) return;

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;
//     window.speechSynthesis.speak(message);
//   };

//   // Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     setActiveSection(sectionId);
//     setIsOpen(false);
//     setPendingSpeakText(`Navigating to ${label} section`);
//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   // Hamburger menu
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
//     setIsOpen(!isOpen);
//   };

//   // Custom Skills icon as < />
//   const SkillsIcon = () => (
//     <span className="text-xl font-bold" style={{ fontFamily: 'monospace', color: '#00FF00' }}>
//       &lt;/&gt;
//     </span>
//   );

//   // Menu items with Fi icons and custom Skills icon - with lime color
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <SkillsIcon /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiPackage size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       {/* Security Agent for Entire Website */}
//       <SecurityAgent 
//         isAgentActivated={isAgentActivated} 
//         speakSecurityMessage={speakSecurityMessage} 
//       />

//       {/* Welcome Card Overlay with Lime Border */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//              style={{ userSelect: 'none', pointerEvents: 'auto' }}
//              onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//                style={{ 
//                  userSelect: 'none',
//                  borderColor: '#00FF00',
//                  boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//                }}
//                onClick={(e) => e.stopPropagation()}>

//             {/* Animated border effect */}
//             <div className="absolute inset-0 rounded-2xl"
//                  style={{
//                    border: '2px solid transparent',
//                    background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                    WebkitMaskComposite: 'xor',
//                    maskComposite: 'exclude',
//                    animation: 'border-glow 3s linear infinite'
//                  }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//              style={{ userSelect: 'none' }}
//              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar with smooth animation */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${
//           isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${
//           navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{ 
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}
//         onClick={(e) => { if (!isAgentActivated) { e.preventDefault(); e.stopPropagation(); } }}>

//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-21px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-35 h-35 rounded-full object-cover"
//                  style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"}`}
//                onClick={handleHamburgerClick}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu with Icons */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} 
//                   className="group relative"
//                   style={{ userSelect: 'none' }}>
//                 <button 
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${
//                     activeSection === item.id 
//                       ? "text-[#ff0404] scale-110" 
//                       : "text-[#00FF00] hover:scale-110"
//                   }`}
//                 >
//                   {/* Icon */}
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>

//                   {/* Tooltip text on hover */}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu (Keep text for mobile for better UX) */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto bg-white/5 backdrop-blur-md text-[#ffff] font-extrabold py-4 px-3 space-y-4 rounded-lg shadow-lg z-40"
//                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", userSelect: 'none' }}>
//             <ul className="flex flex-col items-center space-y-4 text-center">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] ${
//                     activeSection === item.id ? "text-[#6008f8]" : ""
//                   }`} style={{ userSelect: 'none' }}>
//                   <button 
//                     onClick={() => handleMenuItemClick(item.id, item.label)}
//                     className="flex items-center space-x-2"
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span>{item.label.toUpperCase()}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animation for border glow and custom scrollbar */}
//       <style>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }

//         /* Custom scrollbar styling */
//         ::-webkit-scrollbar {
//           width: 12px;
//           height: 12px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #000000;
//           border-radius: 6px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: #00FF00;
//           border-radius: 6px;
//           border: 2px solid #000000;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #00CC00;
//           box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
//         }

//         ::-webkit-scrollbar-corner {
//           background: #000000;
//         }

//         /* For Firefox */
//         * {
//           scrollbar-width: thin;
//           scrollbar-color: #00FF00 #000000;
//         }

//         /* For IE and Edge */
//         body {
//           -ms-overflow-style: none;
//         }

//         body::-webkit-scrollbar-track {
//           background: #000000;
//         }

//         body::-webkit-scrollbar-thumb {
//           background: #00FF00;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;













// // Navbars.jsx
// import { useEffect, useState } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiPackage, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent'; // Import the security component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false); // NEW: Track if currently speaking

//   // Function to get female voice
//   const getFemaleVoice = () => {
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

//   // Function to speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Function to speak welcome message
//   const speakWelcomeMessage = () => {
//     // Wait for voices to be loaded
//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         const femaleVoice = getFemaleVoice();
//         if (femaleVoice) {
//           const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//           message.voice = femaleVoice;
//           message.pitch = 1.1;
//           message.rate = 1;

//           window.speechSynthesis.cancel();
//           window.speechSynthesis.speak(message);
//         }
//       });
//     } else {
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) {
//         const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//         message.voice = femaleVoice;
//         message.pitch = 1.1;
//         message.rate = 1;

//         window.speechSynthesis.cancel();
//         window.speechSynthesis.speak(message);
//       }
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//         // REMOVED: The pendingSpeakText logic that was causing double speech
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Activate portfolio agent function
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     // Trigger navbar animation after a short delay
//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     // Speak welcome message when agent is activated
//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 100);
//   };

//   // 🔊 Speak with female voice for navigation - FIXED: Cancel any ongoing speech first
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     // Reset speaking flag when speech ends
//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Menu click + scroll - FIXED: Speak only once, no pending text
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setActiveSection(sectionId);
//     setIsOpen(false);

//     // Speak immediately only once
//     speakNavigation(`Navigating to ${label} section`);

//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   // Hamburger menu
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
//     setIsOpen(!isOpen);
//   };

//   // Custom Skills icon as < />
//   const SkillsIcon = () => (
//     <span className="text-xl font-bold" style={{ fontFamily: 'monospace', color: '#00FF00' }}>
//       &lt;/&gt;
//     </span>
//   );

//   // Menu items with Fi icons and custom Skills icon - with lime color
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <SkillsIcon /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiPackage size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       {/* Security Agent for Entire Website */}
//       <SecurityAgent 
//         isAgentActivated={isAgentActivated} 
//         speakSecurityMessage={speakSecurityMessage} 
//       />

//       {/* Welcome Card Overlay with Lime Border */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//              style={{ userSelect: 'none', pointerEvents: 'auto' }}
//              onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//                style={{ 
//                  userSelect: 'none',
//                  borderColor: '#00FF00',
//                  boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//                }}
//                onClick={(e) => e.stopPropagation()}>

//             {/* Animated border effect */}
//             <div className="absolute inset-0 rounded-2xl"
//                  style={{
//                    border: '2px solid transparent',
//                    background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                    WebkitMaskComposite: 'xor',
//                    maskComposite: 'exclude',
//                    animation: 'border-glow 3s linear infinite'
//                  }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//              style={{ userSelect: 'none' }}
//              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar with smooth animation */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${
//           isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${
//           navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{ 
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}
//         onClick={(e) => { if (!isAgentActivated) { e.preventDefault(); e.stopPropagation(); } }}>

//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-21px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-35 h-35 rounded-full object-cover"
//                  style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"}`}
//                onClick={handleHamburgerClick}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu with Icons */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} 
//                   className="group relative"
//                   style={{ userSelect: 'none' }}>
//                 <button 
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${
//                     activeSection === item.id 
//                       ? "text-[#ff0404] scale-110" 
//                       : "text-[#00FF00] hover:scale-110"
//                   }`}
//                 >
//                   {/* Icon */}
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>

//                   {/* Tooltip text on hover */}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu (Keep text for mobile for better UX) */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto bg-white/5 backdrop-blur-md text-[#ffff] font-extrabold py-4 px-3 space-y-4 rounded-lg shadow-lg z-40"
//                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", userSelect: 'none' }}>
//             <ul className="flex flex-col items-center space-y-4 text-center">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] ${
//                     activeSection === item.id ? "text-[#6008f8]" : ""
//                   }`} style={{ userSelect: 'none' }}>
//                   <button 
//                     onClick={() => handleMenuItemClick(item.id, item.label)}
//                     className="flex items-center space-x-2"
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span>{item.label.toUpperCase()}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animation for border glow and custom scrollbar */}
//       <style>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }

//         /* Custom scrollbar styling */
//         ::-webkit-scrollbar {
//           width: 12px;
//           height: 12px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #000000;
//           border-radius: 6px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: #00FF00;
//           border-radius: 6px;
//           border: 2px solid #000000;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #00CC00;
//           box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
//         }

//         ::-webkit-scrollbar-corner {
//           background: #000000;
//         }

//         /* For Firefox */
//         * {
//           scrollbar-width: thin;
//           scrollbar-color: #00FF00 #000000;
//         }

//         /* For IE and Edge */
//         body {
//           -ms-overflow-style: none;
//         }

//         body::-webkit-scrollbar-track {
//           background: #000000;
//         }

//         body::-webkit-scrollbar-thumb {
//           background: #00FF00;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;





















// // Navbars.jsx
// import { useEffect, useState } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiPackage, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent'; // Import the security component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false); // NEW: Track if currently speaking
//   const [isMobileView, setIsMobileView] = useState(false); // NEW: Track mobile/tablet view

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       setIsMobileView(window.innerWidth < 1024);
//     };

//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, []);

//   // Function to get female voice
//   const getFemaleVoice = () => {
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

//   // Function to speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Function to speak welcome message - FIXED FOR MOBILE
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) {
//       console.log('Speech synthesis not supported');
//       return;
//     }

//     // Cancel any ongoing speech first
//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");

//       // Get female voice
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) {
//         message.voice = femaleVoice;
//       }

//       // Set properties for female robot voice
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       // For mobile/tablet, ensure it's triggered immediately after user gesture
//       if (isMobileView) {
//         // On mobile, we need to speak immediately without waiting
//         setTimeout(() => {
//           window.speechSynthesis.speak(message);
//         }, 10);
//       } else {
//         window.speechSynthesis.speak(message);
//       }

//       message.onerror = (e) => {
//         console.log('Speech synthesis error on mobile:', e);
//       };
//     };

//     // Wait for voices if needed
//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         speak();
//       }, { once: true });
//     } else {
//       speak();
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//         // REMOVED: The pendingSpeakText logic that was causing double speech
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Activate portfolio agent function - FIXED FOR MOBILE
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     // Trigger navbar animation after a short delay
//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     // Speak welcome message when agent is activated - FIXED FOR MOBILE
//     // On mobile, must speak IMMEDIATELY after user click
//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 50); // Reduced delay for mobile
//   };

//   // 🔊 Speak with female voice for navigation - FIXED: Cancel any ongoing speech first
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     // Reset speaking flag when speech ends
//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Menu click + scroll - FIXED: Speak only once, no pending text
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setActiveSection(sectionId);
//     setIsOpen(false);

//     // Speak immediately only once
//     speakNavigation(`Navigating to ${label} section`);

//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   // Hamburger menu
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
//     setIsOpen(!isOpen);
//   };

//   // Custom Skills icon as < />
//   const SkillsIcon = () => (
//     <span className="text-xl font-bold" style={{ fontFamily: 'monospace', color: '#00FF00' }}>
//       &lt;/&gt;
//     </span>
//   );

//   // Menu items with Fi icons and custom Skills icon - with lime color
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <SkillsIcon /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiPackage size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       {/* Security Agent for Entire Website */}
//       <SecurityAgent 
//         isAgentActivated={isAgentActivated} 
//         speakSecurityMessage={speakSecurityMessage} 
//       />

//       {/* Welcome Card Overlay with Lime Border */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//              style={{ userSelect: 'none', pointerEvents: 'auto' }}
//              onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//                style={{ 
//                  userSelect: 'none',
//                  borderColor: '#00FF00',
//                  boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//                }}
//                onClick={(e) => e.stopPropagation()}>

//             {/* Animated border effect */}
//             <div className="absolute inset-0 rounded-2xl"
//                  style={{
//                    border: '2px solid transparent',
//                    background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                    WebkitMaskComposite: 'xor',
//                    maskComposite: 'exclude',
//                    animation: 'border-glow 3s linear infinite'
//                  }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//              style={{ userSelect: 'none' }}
//              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar with smooth animation */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${
//           isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${
//           navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{ 
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}
//         onClick={(e) => { if (!isAgentActivated) { e.preventDefault(); e.stopPropagation(); } }}>

//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-21px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-35 h-35 rounded-full object-cover"
//                  style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"}`}
//                onClick={handleHamburgerClick}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu with Icons */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} 
//                   className="group relative"
//                   style={{ userSelect: 'none' }}>
//                 <button 
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${
//                     activeSection === item.id 
//                       ? "text-[#ff0404] scale-110" 
//                       : "text-[#00FF00] hover:scale-110"
//                   }`}
//                 >
//                   {/* Icon */}
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>

//                   {/* Tooltip text on hover */}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu with Blur Glass Morphism Effect - FIXED */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto text-[#ffff] font-extrabold py-4 px-3 space-y-4 z-40"
//                style={{ 
//                  textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", 
//                  userSelect: 'none',
//                  background: 'rgba(255, 255, 255, 0.05)',
//                  backdropFilter: 'blur(20px) saturate(180%)',
//                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//                  border: '1px solid rgba(255, 255, 255, 0.1)',
//                  borderTop: 'none',
//                  borderLeft: 'none',
//                  borderRight: 'none',
//                  borderBottomLeftRadius: '12px',
//                  borderBottomRightRadius: '12px',
//                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
//                }}>
//             {/* Additional blur overlay for better readability */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none rounded-b-lg"></div>

//             <ul className="flex flex-col items-center space-y-4 text-center relative z-10">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] w-full justify-center ${
//                     activeSection === item.id ? "text-[#6008f8]" : "text-white"
//                   }`} style={{ userSelect: 'none' }}>
//                   <button 
//                     onClick={() => handleMenuItemClick(item.id, item.label)}
//                     className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 w-full max-w-xs justify-center"
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span className="font-semibold tracking-wide">{item.label.toUpperCase()}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animation for border glow and custom scrollbar */}
//       <style>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }

//         /* Custom scrollbar styling */
//         ::-webkit-scrollbar {
//           width: 12px;
//           height: 12px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #000000;
//           border-radius: 6px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: #00FF00;
//           border-radius: 6px;
//           border: 2px solid #000000;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #00CC00;
//           box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
//         }

//         ::-webkit-scrollbar-corner {
//           background: #000000;
//         }

//         /* For Firefox */
//         * {
//           scrollbar-width: thin;
//           scrollbar-color: #00FF00 #000000;
//         }

//         /* For IE and Edge */
//         body {
//           -ms-overflow-style: none;
//         }

//         body::-webkit-scrollbar-track {
//           background: #000000;
//         }

//         body::-webkit-scrollbar-thumb {
//           background: #00FF00;
//         }

//         /* Mobile-specific optimizations */
//         @media (max-width: 1023px) {
//           /* Ensure welcome card button works on mobile */
//           button.bg-\\[\\#00FF00\\] {
//             -webkit-tap-highlight-color: rgba(0, 255, 0, 0.3);
//             touch-action: manipulation;
//           }

//           /* Improve mobile menu touch targets */
//           .lg\\:hidden button {
//             min-height: 48px;
//             min-width: 48px;
//           }
//         }

//         /* Mobile voice message fix */
//         @media (max-width: 1023px) and (orientation: portrait) {
//           /* Ensure speech synthesis works on mobile portrait */
//           .fixed.z-\\[100\\] button {
//             position: relative;
//             z-index: 1000;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;



























// // Navbars.jsx
// import { useEffect, useState, useRef } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiPackage, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent'; // Import the security component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false); // NEW: Track if currently speaking
//   const [isMobileView, setIsMobileView] = useState(false); // NEW: Track mobile/tablet view

//   // Audio refs for sound effects
//   const sound1Ref = useRef(null);
//   const sound2Ref = useRef(null);

//   // NEW: Preload female voice for mobile/tablet
//   const [voicesReady, setVoicesReady] = useState(false);
//   const femaleVoiceRef = useRef(null);

//   // Initialize audio and preload voices for mobile/tablet
//   useEffect(() => {
//     // Create audio elements only for mobile/tablet
//     if (typeof window !== 'undefined' && window.innerWidth < 1024) {
//       sound1Ref.current = new Audio('/sounds/Sound 1.mp3');
//       sound2Ref.current = new Audio('/sounds/Sound 2.mp3');

//       // Set volume (0.0 to 1.0)
//       if (sound1Ref.current) sound1Ref.current.volume = 0.3;
//       if (sound2Ref.current) sound2Ref.current.volume = 0.3;

//       // Preload audio for faster playback
//       const preloadAudio = async () => {
//         try {
//           if (sound1Ref.current) {
//             sound1Ref.current.preload = 'auto';
//             await sound1Ref.current.load();
//           }
//           if (sound2Ref.current) {
//             sound2Ref.current.preload = 'auto';
//             await sound2Ref.current.load();
//           }
//         } catch (error) {
//           console.log("Audio preload failed, will load on play:", error);
//         }
//       };

//       preloadAudio();

//       // CRITICAL FOR MOBILE: Preload voices immediately
//       if ('speechSynthesis' in window) {
//         // Get voices and cache female voice
//         const loadVoices = () => {
//           const voices = window.speechSynthesis.getVoices();
//           const femaleVoice = voices.find((voice) =>
//             voice.name.toLowerCase().includes("female") || 
//             voice.name.toLowerCase().includes("zira") ||
//             voice.name.toLowerCase().includes("victoria") ||
//             voice.name.toLowerCase().includes("samantha") ||
//             voice.name.toLowerCase().includes("google") ||
//             voice.name.toLowerCase().includes("alex")
//           );

//           if (femaleVoice) {
//             femaleVoiceRef.current = femaleVoice;
//             setVoicesReady(true);
//           }
//         };

//         // Load voices immediately
//         loadVoices();

//         // Some browsers need voiceschanged event
//         if (window.speechSynthesis.getVoices().length === 0) {
//           window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
//         }
//       }
//     }

//     return () => {
//       if (sound1Ref.current) {
//         sound1Ref.current.pause();
//         sound1Ref.current = null;
//       }
//       if (sound2Ref.current) {
//         sound2Ref.current.pause();
//         sound2Ref.current = null;
//       }
//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.removeEventListener('voiceschanged', () => {});
//       }
//     };
//   }, []);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobileView(isMobile);

//       // If mobile view detected and voices not loaded yet, load them now
//       if (isMobile && 'speechSynthesis' in window && !voicesReady) {
//         const voices = window.speechSynthesis.getVoices();
//         const femaleVoice = voices.find((voice) =>
//           voice.name.toLowerCase().includes("female") || 
//           voice.name.toLowerCase().includes("zira") ||
//           voice.name.toLowerCase().includes("samantha")
//         );
//         if (femaleVoice) {
//           femaleVoiceRef.current = femaleVoice;
//           setVoicesReady(true);
//         }
//       }
//     };

//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, [voicesReady]);

//   // Function to play Sound 1 (for hamburger menu open/close)
//   const playSound1 = () => {
//     if (!isMobileView || !sound1Ref.current) return;

//     try {
//       sound1Ref.current.currentTime = 0;
//       sound1Ref.current.play().catch(e => {
//         console.log("Sound 1 play failed:", e);
//       });
//     } catch (error) {
//       console.log("Sound 1 audio error:", error);
//     }
//   };

//   // Function to play Sound 2 (for menu item clicks)
//   const playSound2 = () => {
//     if (!isMobileView || !sound2Ref.current) return;

//     try {
//       sound2Ref.current.currentTime = 0;
//       sound2Ref.current.play().catch(e => {
//         console.log("Sound 2 play failed:", e);
//       });
//     } catch (error) {
//       console.log("Sound 2 audio error:", error);
//     }
//   };

//   // Function to get female voice - OPTIMIZED FOR MOBILE
//   const getFemaleVoice = () => {
//     // For mobile/tablet, use cached voice if available
//     if (isMobileView && femaleVoiceRef.current) {
//       return femaleVoiceRef.current;
//     }

//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") || 
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("victoria") ||
//       voice.name.toLowerCase().includes("samantha") ||
//       voice.name.toLowerCase().includes("google") ||
//       voice.name.toLowerCase().includes("alex")
//     );
//   };

//   // Function to speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Function to speak welcome message - HEAVILY OPTIMIZED FOR MOBILE/TABLET
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) {
//       console.log('Speech synthesis not supported');
//       return;
//     }

//     // CRITICAL: Cancel any ongoing speech first
//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");

//       // Get female voice - optimized for mobile
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) {
//         message.voice = femaleVoice;
//       }

//       // Set properties for female robot voice
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       // MOBILE/TABLET OPTIMIZATION: Immediate speech with minimal delay
//       if (isMobileView) {
//         // On mobile, we use direct speech without setTimeout for faster response
//         try {
//           window.speechSynthesis.speak(message);
//         } catch (e) {
//           console.log('Mobile speech error, retrying:', e);
//           // If first attempt fails, try once more
//           setTimeout(() => {
//             window.speechSynthesis.speak(message);
//           }, 10);
//         }
//       } else {
//         // Desktop behavior unchanged
//         window.speechSynthesis.speak(message);
//       }

//       message.onerror = (e) => {
//         console.log('Speech synthesis error:', e);
//       };
//     };

//     // OPTIMIZED VOICE LOADING FOR MOBILE
//     if (isMobileView) {
//       // For mobile: If we have cached voice, speak immediately
//       if (femaleVoiceRef.current || voicesReady) {
//         speak();
//       } else {
//         // If no cached voice, get voices and speak immediately
//         const voices = window.speechSynthesis.getVoices();
//         if (voices.length > 0) {
//           const femaleVoice = voices.find((voice) =>
//             voice.name.toLowerCase().includes("female") || 
//             voice.name.toLowerCase().includes("zira") ||
//             voice.name.toLowerCase().includes("samantha")
//           );
//           if (femaleVoice) {
//             femaleVoiceRef.current = femaleVoice;
//             speak();
//           } else {
//             // No female voice found, use default
//             speak();
//           }
//         } else {
//           // Wait for voiceschanged event but with minimal delay
//           window.speechSynthesis.addEventListener('voiceschanged', () => {
//             const voices = window.speechSynthesis.getVoices();
//             if (voices.length > 0) {
//               const femaleVoice = voices.find((voice) =>
//                 voice.name.toLowerCase().includes("female") || 
//                 voice.name.toLowerCase().includes("zira")
//               );
//               if (femaleVoice) femaleVoiceRef.current = femaleVoice;
//               speak();
//             }
//           }, { once: true });
//         }
//       }
//     } else {
//       // Desktop behavior unchanged
//       const voices = window.speechSynthesis.getVoices();
//       if (voices.length === 0) {
//         window.speechSynthesis.addEventListener('voiceschanged', () => {
//           speak();
//         }, { once: true });
//       } else {
//         speak();
//       }
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//         // REMOVED: The pendingSpeakText logic that was causing double speech
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Activate portfolio agent function - OPTIMIZED FOR MOBILE/TABLET
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     // Trigger navbar animation after a short delay
//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     // MOBILE/TABLET OPTIMIZATION: Immediate voice response
//     // For mobile/tablet: Speak immediately without delay
//     if (isMobileView) {
//       // Cancel any existing speech
//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.cancel();
//       }

//       // Speak welcome message immediately after user click
//       // This is within the user gesture context, so autoplay restrictions don't apply
//       setTimeout(() => {
//         speakWelcomeMessage();
//       }, 0); // Zero delay for mobile/tablet
//     } else {
//       // Desktop behavior unchanged
//       setTimeout(() => {
//         speakWelcomeMessage();
//       }, 50);
//     }
//   };

//   // 🔊 Speak with female voice for navigation
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     // Reset speaking flag when speech ends
//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setActiveSection(sectionId);
//     setIsOpen(false);

//     // Play Sound 2 for menu item click on mobile/tablet
//     if (isMobileView) {
//       playSound2();
//     }

//     // Speak immediately only once
//     speakNavigation(`Navigating to ${label} section`);

//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   // Hamburger menu
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;

//     // Play Sound 1 for hamburger click on mobile/tablet
//     if (isMobileView) {
//       playSound1();
//     }

//     setIsOpen(!isOpen);
//   };

//   // Custom Skills icon as < />
//   const SkillsIcon = () => (
//     <span className="text-xl font-bold" style={{ fontFamily: 'monospace', color: '#00FF00' }}>
//       &lt;/&gt;
//     </span>
//   );

//   // Menu items with Fi icons and custom Skills icon - with lime color
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <FiCode size={24} style={{ color: '#00FF00' }} /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiFolder size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       {/* Security Agent for Entire Website */}
//       <SecurityAgent 
//         isAgentActivated={isAgentActivated} 
//         speakSecurityMessage={speakSecurityMessage} 
//       />

//       {/* Welcome Card Overlay with Lime Border */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//              style={{ userSelect: 'none', pointerEvents: 'auto' }}
//              onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//                style={{ 
//                  userSelect: 'none',
//                  borderColor: '#00FF00',
//                  boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//                }}
//                onClick={(e) => e.stopPropagation()}>

//             {/* Animated border effect */}
//             <div className="absolute inset-0 rounded-2xl"
//                  style={{
//                    border: '2px solid transparent',
//                    background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                    WebkitMaskComposite: 'xor',
//                    maskComposite: 'exclude',
//                    animation: 'border-glow 3s linear infinite'
//                  }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay WITH QUOTE TEXT INSIDE */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//              style={{ userSelect: 'none' }}
//              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg mb-8" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>

//             {/* Simple Blue-ish Glowing Quote Text - NO GLASSY BACKGROUND */}
//             <div className="mt-8">
//               {/* Main Quote Text - SINGLE LINE with proper width */}
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
//                    style={{
//                      color: '#00ccff',
//                      textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
//                      fontFamily: "'Arial', sans-serif",
//                      letterSpacing: '1.5px',
//                      padding: '0 10px',
//                      display: 'inline-block',
//                      maxWidth: '100%',
//                    }}>
//                 MY GAME, MY PRESENCE
//               </div>

//               {/* Name Text - SINGLE LINE below the quote with proper width */}
//               <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
//                    style={{
//                      color: '#66ccff',
//                      textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
//                      fontFamily: "'Arial', sans-serif",
//                      letterSpacing: '1px',
//                      padding: '0 10px',
//                      display: 'inline-block',
//                      maxWidth: '100%',
//                    }}>
//                 - ARSHAD WASIB SHAIK
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar with smooth animation */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${
//           isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${
//           navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{ 
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}
//         onClick={(e) => { if (!isAgentActivated) { e.preventDefault(); e.stopPropagation(); } }}>

//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-21px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-35 h-35 rounded-full object-cover"
//                  style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"}`}
//                onClick={handleHamburgerClick}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu with Icons */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} 
//                   className="group relative"
//                   style={{ userSelect: 'none' }}>
//                 <button 
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${
//                     activeSection === item.id 
//                       ? "text-[#ff0404] scale-110" 
//                       : "text-[#00FF00] hover:scale-110"
//                   }`}
//                 >
//                   {/* Icon */}
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>

//                   {/* Tooltip text on hover */}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* MOBILE MENU WITH IRON MAN VIRTUAL GLASSY SHINING SCREEN EFFECT */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto text-[#ffff] font-extrabold py-4 px-3 space-y-4 z-40 animate-fadeInUp"
//                style={{ 
//                  textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", 
//                  userSelect: 'none',
//                  // Iron Man Virtual Glassy Screen Background
//                  background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
//                  backdropFilter: 'blur(20px) saturate(180%)',
//                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//                  border: '2px solid rgba(0, 150, 255, 0.4)',
//                  borderTop: 'none',
//                  borderLeft: 'none',
//                  borderRight: 'none',
//                  borderBottomLeftRadius: '12px',
//                  borderBottomRightRadius: '12px',
//                  boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
//                  position: 'relative',
//                  overflow: 'hidden',
//                }}>

//             {/* Iron Man Glassy Screen Grid Pattern */}
//             <div className="absolute inset-0 opacity-20 pointer-events-none"
//                  style={{
//                    backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                    backgroundSize: '30px 30px'
//                  }} />

//             {/* Glowing Border Effect */}
//             <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
//                  style={{
//                    boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
//                    animation: 'pulse 2s infinite'
//                  }} />

//             {/* Scanning Line Effect */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent pointer-events-none"
//                  style={{
//                    animation: 'scanning 3s linear infinite'
//                  }} />

//             {/* Additional blur overlay for better readability */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none rounded-b-lg"></div>

//             <ul className="flex flex-col items-center space-y-4 text-center relative z-10">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] w-full justify-center ${
//                     activeSection === item.id ? "text-[#6008f8]" : "text-white"
//                   }`} style={{ userSelect: 'none' }}>
//                   <button 
//                     onClick={() => handleMenuItemClick(item.id, item.label)}
//                     className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 w-full max-w-xs justify-center group relative"
//                     style={{
//                       background: activeSection === item.id 
//                         ? 'rgba(0, 150, 255, 0.2)' 
//                         : 'rgba(255, 255, 255, 0.05)',
//                       border: activeSection === item.id
//                         ? '1px solid rgba(0, 200, 255, 0.5)'
//                         : '1px solid rgba(255, 255, 255, 0.1)',
//                       boxShadow: activeSection === item.id
//                         ? '0 0 20px rgba(0, 200, 255, 0.4)'
//                         : 'none'
//                     }}
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span className="font-semibold tracking-wide">{item.label.toUpperCase()}</span>

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animation for border glow, custom scrollbar, and Iron Man effects */}
//       <style jsx>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
//           }
//           50% {
//             opacity: 0.7;
//             box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
//           }
//         }

//         @keyframes scanning {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(100%);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.5s ease-out forwards;
//         }

//         /* Custom scrollbar styling */
//         ::-webkit-scrollbar {
//           width: 12px;
//           height: 12px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #000000;
//           border-radius: 6px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: #00FF00;
//           border-radius: 6px;
//           border: 2px solid #000000;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #00CC00;
//           box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
//         }

//         ::-webkit-scrollbar-corner {
//           background: #000000;
//         }

//         /* For Firefox */
//         * {
//           scrollbar-width: thin;
//           scrollbar-color: #00FF00 #000000;
//         }

//         /* For IE and Edge */
//         body {
//           -ms-overflow-style: none;
//         }

//         body::-webkit-scrollbar-track {
//           background: #000000;
//         }

//         body::-webkit-scrollbar-thumb {
//           background: #00FF00;
//         }

//         /* MOBILE/TABLET SPECIFIC OPTIMIZATIONS */
//         @media (max-width: 1023px) {
//           /* Ensure welcome card button works perfectly on mobile */
//           button.bg-\\[\\#00FF00\\] {
//             -webkit-tap-highlight-color: rgba(0, 255, 0, 0.3);
//             touch-action: manipulation;
//             cursor: pointer;
//             user-select: none;
//           }

//           /* Improve mobile menu touch targets */
//           .lg\\:hidden button {
//             min-height: 48px;
//             min-width: 48px;
//           }

//           /* Mobile voice message optimization */
//           .fixed.z-\\[100\\] button {
//             position: relative;
//             z-index: 1000;
//           }

//           /* Mobile speech synthesis optimization */
//           .fixed.inset-0 {
//             /* Ensure click events are captured properly */
//             pointer-events: auto;
//           }

//           /* Mobile quote text adjustment for proper display */
//           .mt-8 {
//             margin-top: 1.5rem !important;
//           }

//           .text-xl {
//             font-size: 1.25rem !important;
//             letter-spacing: 1px !important;
//           }

//           .text-base {
//             font-size: 1rem !important;
//             letter-spacing: 0.8px !important;
//           }

//           /* On very small mobile screens, ensure full text visibility */
//           @media (max-width: 360px) {
//             .text-xl {
//               font-size: 1.1rem !important;
//               letter-spacing: 0.8px !important;
//             }

//             .text-base {
//               font-size: 0.9rem !important;
//               letter-spacing: 0.6px !important;
//             }
//           }
//         }

//         /* Tablet specific optimizations */
//         @media (min-width: 768px) and (max-width: 1023px) {
//           /* Tablet touch targets */
//           button.bg-\\[\\#00FF00\\] {
//             padding: 14px 32px;
//             font-size: 1.1rem;
//           }

//           /* Tablet quote text for proper display */
//           .text-xl {
//             font-size: 1.75rem !important;
//             letter-spacing: 1.3px !important;
//           }

//           .text-base {
//             font-size: 1.25rem !important;
//             letter-spacing: 0.9px !important;
//           }
//         }

//         /* Desktop specific - unchanged */
//         @media (min-width: 1024px) {
//           /* Desktop devices keep existing behavior */
//           .lg\\:hidden {
//             display: none !important;
//           }

//           /* Desktop quote text */
//           .text-xl {
//             font-size: 2.5rem !important;
//           }

//           .text-base {
//             font-size: 1.5rem !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;























// First Iteration - after clearing all issues.......

// Navbars.jsx
// import { useEffect, useState, useRef } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiPackage, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent'; // Import the security component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);

//   // Audio refs for sound effects
//   const sound1Ref = useRef(null);
//   const sound2Ref = useRef(null);

//   // Preload female voice for mobile/tablet
//   const [voicesReady, setVoicesReady] = useState(false);
//   const femaleVoiceRef = useRef(null);

//   // State for typewriter effect - FIXED
//   const [quoteText, setQuoteText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const typewriterStartedRef = useRef(false); // NEW: Track if typewriter already started
//   const fullQuote = "MY GAME, MY PRESENCE";

//   // Initialize audio and preload voices for mobile/tablet
//   useEffect(() => {
//     // Create audio elements only for mobile/tablet
//     if (typeof window !== 'undefined' && window.innerWidth < 1024) {
//       sound1Ref.current = new Audio('/sounds/Sound 1.mp3');
//       sound2Ref.current = new Audio('/sounds/Sound 2.mp3');

//       // Set volume (0.0 to 1.0)
//       if (sound1Ref.current) sound1Ref.current.volume = 0.3;
//       if (sound2Ref.current) sound2Ref.current.volume = 0.3;

//       // Preload audio for faster playback
//       const preloadAudio = async () => {
//         try {
//           if (sound1Ref.current) {
//             sound1Ref.current.preload = 'auto';
//             await sound1Ref.current.load();
//           }
//           if (sound2Ref.current) {
//             sound2Ref.current.preload = 'auto';
//             await sound2Ref.current.load();
//           }
//         } catch (error) {
//           console.log("Audio preload failed, will load on play:", error);
//         }
//       };

//       preloadAudio();

//       // CRITICAL FOR MOBILE: Preload voices immediately
//       if ('speechSynthesis' in window) {
//         // Get voices and cache female voice
//         const loadVoices = () => {
//           const voices = window.speechSynthesis.getVoices();
//           const femaleVoice = voices.find((voice) =>
//             voice.name.toLowerCase().includes("female") || 
//             voice.name.toLowerCase().includes("zira") ||
//             voice.name.toLowerCase().includes("victoria") ||
//             voice.name.toLowerCase().includes("samantha") ||
//             voice.name.toLowerCase().includes("google") ||
//             voice.name.toLowerCase().includes("alex")
//           );

//           if (femaleVoice) {
//             femaleVoiceRef.current = femaleVoice;
//             setVoicesReady(true);
//           }
//         };

//         // Load voices immediately
//         loadVoices();

//         // Some browsers need voiceschanged event
//         if (window.speechSynthesis.getVoices().length === 0) {
//           window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
//         }
//       }
//     }

//     return () => {
//       if (sound1Ref.current) {
//         sound1Ref.current.pause();
//         sound1Ref.current = null;
//       }
//       if (sound2Ref.current) {
//         sound2Ref.current.pause();
//         sound2Ref.current = null;
//       }
//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.removeEventListener('voiceschanged', () => {});
//       }
//     };
//   }, []);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobileView(isMobile);

//       // If mobile view detected and voices not loaded yet, load them now
//       if (isMobile && 'speechSynthesis' in window && !voicesReady) {
//         const voices = window.speechSynthesis.getVoices();
//         const femaleVoice = voices.find((voice) =>
//           voice.name.toLowerCase().includes("female") || 
//           voice.name.toLowerCase().includes("zira") ||
//           voice.name.toLowerCase().includes("samantha")
//         );
//         if (femaleVoice) {
//           femaleVoiceRef.current = femaleVoice;
//           setVoicesReady(true);
//         }
//       }
//     };

//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, [voicesReady]);

//   // Function to play Sound 1 (for hamburger menu open/close)
//   const playSound1 = () => {
//     if (!isMobileView || !sound1Ref.current) return;

//     try {
//       sound1Ref.current.currentTime = 0;
//       sound1Ref.current.play().catch(e => {
//         console.log("Sound 1 play failed:", e);
//       });
//     } catch (error) {
//       console.log("Sound 1 audio error:", error);
//     }
//   };

//   // Function to play Sound 2 (for menu item clicks)
//   const playSound2 = () => {
//     if (!isMobileView || !sound2Ref.current) return;

//     try {
//       sound2Ref.current.currentTime = 0;
//       sound2Ref.current.play().catch(e => {
//         console.log("Sound 2 play failed:", e);
//       });
//     } catch (error) {
//       console.log("Sound 2 audio error:", error);
//     }
//   };

//   // Function to get female voice - OPTIMIZED FOR MOBILE
//   const getFemaleVoice = () => {
//     // For mobile/tablet, use cached voice if available
//     if (isMobileView && femaleVoiceRef.current) {
//       return femaleVoiceRef.current;
//     }

//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") || 
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("victoria") ||
//       voice.name.toLowerCase().includes("samantha") ||
//       voice.name.toLowerCase().includes("google") ||
//       voice.name.toLowerCase().includes("alex")
//     );
//   };

//   // Function to speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Function to speak welcome message - HEAVILY OPTIMIZED FOR MOBILE/TABLET
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) {
//       console.log('Speech synthesis not supported');
//       return;
//     }

//     // CRITICAL: Cancel any ongoing speech first
//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");

//       // Get female voice - optimized for mobile
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) {
//         message.voice = femaleVoice;
//       }

//       // Set properties for female robot voice
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       // MOBILE/TABLET OPTIMIZATION: Immediate speech with minimal delay
//       if (isMobileView) {
//         // On mobile, we use direct speech without setTimeout for faster response
//         try {
//           window.speechSynthesis.speak(message);
//         } catch (e) {
//           console.log('Mobile speech error, retrying:', e);
//           // If first attempt fails, try once more
//           setTimeout(() => {
//             window.speechSynthesis.speak(message);
//           }, 10);
//         }
//       } else {
//         // Desktop behavior unchanged
//         window.speechSynthesis.speak(message);
//       }

//       message.onerror = (e) => {
//         console.log('Speech synthesis error:', e);
//       };
//     };

//     // OPTIMIZED VOICE LOADING FOR MOBILE
//     if (isMobileView) {
//       // For mobile: If we have cached voice, speak immediately
//       if (femaleVoiceRef.current || voicesReady) {
//         speak();
//       } else {
//         // If no cached voice, get voices and speak immediately
//         const voices = window.speechSynthesis.getVoices();
//         if (voices.length > 0) {
//           const femaleVoice = voices.find((voice) =>
//             voice.name.toLowerCase().includes("female") || 
//             voice.name.toLowerCase().includes("zira") ||
//             voice.name.toLowerCase().includes("samantha")
//           );
//           if (femaleVoice) {
//             femaleVoiceRef.current = femaleVoice;
//             speak();
//           } else {
//             // No female voice found, use default
//             speak();
//           }
//         } else {
//           // Wait for voiceschanged event but with minimal delay
//           window.speechSynthesis.addEventListener('voiceschanged', () => {
//             const voices = window.speechSynthesis.getVoices();
//             if (voices.length > 0) {
//               const femaleVoice = voices.find((voice) =>
//                 voice.name.toLowerCase().includes("female") || 
//                 voice.name.toLowerCase().includes("zira")
//               );
//               if (femaleVoice) femaleVoiceRef.current = femaleVoice;
//               speak();
//             }
//           }, { once: true });
//         }
//       }
//     } else {
//       // Desktop behavior unchanged
//       const voices = window.speechSynthesis.getVoices();
//       if (voices.length === 0) {
//         window.speechSynthesis.addEventListener('voiceschanged', () => {
//           speak();
//         }, { once: true });
//       } else {
//         speak();
//       }
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   };

//   // FIXED: Typewriter effect for quote text - prevents duplicate typing
//   useEffect(() => {
//     // Only run if portfolio is locked AND typewriter hasn't started yet
//     if (!isAgentActivated && !typewriterStartedRef.current) {
//       typewriterStartedRef.current = true; // Mark as started
//       setIsTyping(true);
//       setQuoteText("");

//       let currentIndex = 0;
//       const typeWriter = () => {
//         if (currentIndex < fullQuote.length) {
//           setQuoteText(fullQuote.substring(0, currentIndex + 1));
//           currentIndex++;
//           setTimeout(typeWriter, 80); // Typing speed (80ms per character)
//         } else {
//           setIsTyping(false);
//         }
//       };

//       // Start typing after a short delay
//       setTimeout(typeWriter, 500);
//     }

//     // Reset typewriter when agent is activated
//     if (isAgentActivated) {
//       typewriterStartedRef.current = false;
//       setIsTyping(false);
//       setQuoteText("");
//     }
//   }, [isAgentActivated]);

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Activate portfolio agent function - OPTIMIZED FOR MOBILE/TABLET
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     // Trigger navbar animation after a short delay
//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     // MOBILE/TABLET OPTIMIZATION: Immediate voice response
//     // For mobile/tablet: Speak immediately without delay
//     if (isMobileView) {
//       // Cancel any existing speech
//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.cancel();
//       }

//       // Speak welcome message immediately after user click
//       // This is within the user gesture context, so autoplay restrictions don't apply
//       setTimeout(() => {
//         speakWelcomeMessage();
//       }, 0);
//     } else {
//       // Desktop behavior unchanged
//       setTimeout(() => {
//         speakWelcomeMessage();
//       }, 50);
//     }
//   };

//   // 🔊 Speak with female voice for navigation
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     // Reset speaking flag when speech ends
//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setActiveSection(sectionId);
//     setIsOpen(false);

//     // Play Sound 2 for menu item click on mobile/tablet
//     if (isMobileView) {
//       playSound2();
//     }

//     // Speak immediately only once
//     speakNavigation(`Navigating to ${label} section`);

//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   // Hamburger menu
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;

//     // Play Sound 1 for hamburger click on mobile/tablet
//     if (isMobileView) {
//       playSound1();
//     }

//     setIsOpen(!isOpen);
//   };

//   // Custom Skills icon as < />
//   const SkillsIcon = () => (
//     <span className="text-xl font-bold" style={{ fontFamily: 'monospace', color: '#00FF00' }}>
//       &lt;/&gt;
//     </span>
//   );

//   // Menu items with Fi icons and custom Skills icon - with lime color
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <FiCode size={30} style={{color: '#00FF00'}} /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiFolder size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       {/* Security Agent for Entire Website */}
//       <SecurityAgent 
//         isAgentActivated={isAgentActivated} 
//         speakSecurityMessage={speakSecurityMessage} 
//       />

//       {/* Welcome Card Overlay with Lime Border */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//              style={{ userSelect: 'none', pointerEvents: 'auto' }}
//              onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//                style={{ 
//                  userSelect: 'none',
//                  borderColor: '#00FF00',
//                  boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//                }}
//                onClick={(e) => e.stopPropagation()}>

//             {/* Animated border effect */}
//             <div className="absolute inset-0 rounded-2xl"
//                  style={{
//                    border: '2px solid transparent',
//                    background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                    WebkitMaskComposite: 'xor',
//                    maskComposite: 'exclude',
//                    animation: 'border-glow 3s linear infinite'
//                  }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay WITH QUOTE TEXT INSIDE */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//              style={{ userSelect: 'none' }}
//              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg mb-8" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>

//             {/* Simple Blue-ish Glowing Quote Text with Typewriter Effect */}
//             <div className="mt-8">
//               {/* Main Quote Text - SINGLE LINE with Typewriter Effect */}
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
//                    style={{
//                      color: '#00ccff',
//                      textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
//                      fontFamily: "'Arial', sans-serif",
//                      letterSpacing: '1.5px',
//                      padding: '0 10px',
//                      display: 'inline-block',
//                      maxWidth: '100%',
//                      minHeight: '1.5em',
//                    }}>
//                 {quoteText}
//                 {/* Blinking cursor */}
//                 {isTyping && (
//                   <span className="typewriter-cursor" style={{
//                     display: 'inline-block',
//                     width: '2px',
//                     height: '1.2em',
//                     backgroundColor: '#00ccff',
//                     marginLeft: '2px',
//                     verticalAlign: 'text-bottom',
//                     animation: 'blink 1s infinite'
//                   }}></span>
//                 )}
//               </div>

//               {/* Name Text - SINGLE LINE below the quote with proper width */}
//               <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
//                    style={{
//                      color: '#66ccff',
//                      textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
//                      fontFamily: "'Arial', sans-serif",
//                      letterSpacing: '1px',
//                      padding: '0 10px',
//                      display: 'inline-block',
//                      maxWidth: '100%',
//                    }}>
//                 - ARSHAD WASIB SHAIK
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar with smooth animation */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${
//           isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${
//           navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{ 
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}
//         onClick={(e) => { if (!isAgentActivated) { e.preventDefault(); e.stopPropagation(); } }}>

//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-21px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-35 h-35 rounded-full object-cover"
//                  style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"}`}
//                onClick={handleHamburgerClick}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu with Icons */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} 
//                   className="group relative"
//                   style={{ userSelect: 'none' }}>
//                 <button 
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${
//                     activeSection === item.id 
//                       ? "text-[#ff0404] scale-110" 
//                       : "text-[#00FF00] hover:scale-110"
//                   }`}
//                 >
//                   {/* Icon */}
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>

//                   {/* Tooltip text on hover */}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* MOBILE MENU WITH IRON MAN VIRTUAL GLASSY SHINING SCREEN EFFECT */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full max-h-screen overflow-y-auto text-[#ffff] font-extrabold py-4 px-3 space-y-4 z-40 animate-fadeInUp"
//                style={{ 
//                  textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", 
//                  userSelect: 'none',
//                  // Iron Man Virtual Glassy Screen Background
//                  background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
//                  backdropFilter: 'blur(20px) saturate(180%)',
//                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//                  border: '2px solid rgba(0, 150, 255, 0.4)',
//                  borderTop: 'none',
//                  borderLeft: 'none',
//                  borderRight: 'none',
//                  borderBottomLeftRadius: '12px',
//                  borderBottomRightRadius: '12px',
//                  boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
//                  position: 'relative',
//                  overflow: 'hidden',
//                }}>

//             {/* Iron Man Glassy Screen Grid Pattern */}
//             <div className="absolute inset-0 opacity-20 pointer-events-none"
//                  style={{
//                    backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                    backgroundSize: '30px 30px'
//                  }} />

//             {/* Glowing Border Effect */}
//             <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
//                  style={{
//                    boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
//                    animation: 'pulse 2s infinite'
//                  }} />

//             {/* Scanning Line Effect */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent pointer-events-none"
//                  style={{
//                    animation: 'scanning 3s linear infinite'
//                  }} />

//             {/* Additional blur overlay for better readability */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none rounded-b-lg"></div>

//             <ul className="flex flex-col items-center space-y-4 text-center relative z-10">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] w-full justify-center ${
//                     activeSection === item.id ? "text-[#6008f8]" : "text-white"
//                   }`} style={{ userSelect: 'none' }}>
//                   <button 
//                     onClick={() => handleMenuItemClick(item.id, item.label)}
//                     className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 w-full max-w-xs justify-center group relative"
//                     style={{
//                       background: activeSection === item.id 
//                         ? 'rgba(0, 150, 255, 0.2)' 
//                         : 'rgba(255, 255, 255, 0.05)',
//                       border: activeSection === item.id
//                         ? '1px solid rgba(0, 200, 255, 0.5)'
//                         : '1px solid rgba(255, 255, 255, 0.1)',
//                       boxShadow: activeSection === item.id
//                         ? '0 0 20px rgba(0, 200, 255, 0.4)'
//                         : 'none'
//                     }}
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span className="font-semibold tracking-wide">{item.label.toUpperCase()}</span>

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animation for border glow, custom scrollbar, and Iron Man effects */}
//       <style jsx>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
//           }
//           50% {
//             opacity: 0.7;
//             box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
//           }
//         }

//         @keyframes scanning {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(100%);
//           }
//         }

//         /* Typewriter cursor blink animation */
//         @keyframes blink {
//           0%, 50% {
//             opacity: 1;
//           }
//           51%, 100% {
//             opacity: 0;
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.5s ease-out forwards;
//         }

//         /* Custom scrollbar styling */
//         ::-webkit-scrollbar {
//           width: 12px;
//           height: 12px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #000000;
//           border-radius: 6px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: #00FF00;
//           border-radius: 6px;
//           border: 2px solid #000000;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #00CC00;
//           box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
//         }

//         ::-webkit-scrollbar-corner {
//           background: #000000;
//         }

//         /* For Firefox */
//         * {
//           scrollbar-width: thin;
//           scrollbar-color: #00FF00 #000000;
//         }

//         /* For IE and Edge */
//         body {
//           -ms-overflow-style: none;
//         }

//         body::-webkit-scrollbar-track {
//           background: #000000;
//         }

//         body::-webkit-scrollbar-thumb {
//           background: #00FF00;
//         }

//         /* MOBILE/TABLET SPECIFIC OPTIMIZATIONS */
//         @media (max-width: 1023px) {
//           /* Ensure welcome card button works perfectly on mobile */
//           button.bg-\\[\\#00FF00\\] {
//             -webkit-tap-highlight-color: rgba(0, 255, 0, 0.3);
//             touch-action: manipulation;
//             cursor: pointer;
//             user-select: none;
//           }

//           /* Improve mobile menu touch targets */
//           .lg\\:hidden button {
//             min-height: 48px;
//             min-width: 48px;
//           }

//           /* Mobile voice message optimization */
//           .fixed.z-\\[100\\] button {
//             position: relative;
//             z-index: 1000;
//           }

//           /* Mobile speech synthesis optimization */
//           .fixed.inset-0 {
//             /* Ensure click events are captured properly */
//             pointer-events: auto;
//           }

//           /* Mobile quote text adjustment for proper display */
//           .mt-8 {
//             margin-top: 1.5rem !important;
//           }

//           .text-xl {
//             font-size: 1.25rem !important;
//             letter-spacing: 1px !important;
//             min-height: 1.4em !important;
//           }

//           .text-base {
//             font-size: 1rem !important;
//             letter-spacing: 0.8px !important;
//           }

//           /* Typewriter cursor for mobile */
//           .typewriter-cursor {
//             height: 1em !important;
//           }

//           /* On very small mobile screens, ensure full text visibility */
//           @media (max-width: 360px) {
//             .text-xl {
//               font-size: 1.1rem !important;
//               letter-spacing: 0.8px !important;
//             }

//             .text-base {
//               font-size: 0.9rem !important;
//               letter-spacing: 0.6px !important;
//             }
//           }
//         }

//         /* Tablet specific optimizations */
//         @media (min-width: 768px) and (max-width: 1023px) {
//           /* Tablet touch targets */
//           button.bg-\\[\\#00FF00\\] {
//             padding: 14px 32px;
//             font-size: 1.1rem;
//           }

//           /* Tablet quote text for proper display */
//           .text-xl {
//             font-size: 1.75rem !important;
//             letter-spacing: 1.3px !important;
//             min-height: 1.8em !important;
//           }

//           .text-base {
//             font-size: 1.25rem !important;
//             letter-spacing: 0.9px !important;
//           }
//         }

//         /* Desktop specific - unchanged */
//         @media (min-width: 1024px) {
//           /* Desktop devices keep existing behavior */
//           .lg\\:hidden {
//             display: none !important;
//           }

//           /* Desktop quote text */
//           .text-xl {
//             font-size: 2.5rem !important;
//             min-height: 2em !important;
//           }

//           .text-base {
//             font-size: 1.5rem !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;




















// Second Iteration Working Successfully

// Navbars.jsx
// import { useEffect, useState, useRef } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiPackage, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent'; // Import the security component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);

//   // Audio refs for sound effects
//   const sound1Ref = useRef(null);
//   const sound2Ref = useRef(null);

//   // Preload female voice for mobile/tablet
//   const [voicesReady, setVoicesReady] = useState(false);
//   const femaleVoiceRef = useRef(null);

//   // State for typewriter effect - FIXED
//   const [quoteText, setQuoteText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const typewriterStartedRef = useRef(false); // NEW: Track if typewriter already started
//   const fullQuote = "MY GAME, MY PRESENCE";

//   // Initialize audio and preload voices for mobile/tablet
//   useEffect(() => {
//     // Create audio elements only for mobile/tablet
//     if (typeof window !== 'undefined' && window.innerWidth < 1024) {
//       sound1Ref.current = new Audio('/sounds/Sound 1.mp3');
//       sound2Ref.current = new Audio('/sounds/Sound 2.mp3');

//       // Set volume (0.0 to 1.0)
//       if (sound1Ref.current) sound1Ref.current.volume = 0.3;
//       if (sound2Ref.current) sound2Ref.current.volume = 0.3;

//       // Preload audio for faster playback
//       const preloadAudio = async () => {
//         try {
//           if (sound1Ref.current) {
//             sound1Ref.current.preload = 'auto';
//             await sound1Ref.current.load();
//           }
//           if (sound2Ref.current) {
//             sound2Ref.current.preload = 'auto';
//             await sound2Ref.current.load();
//           }
//         } catch (error) {
//           console.log("Audio preload failed, will load on play:", error);
//         }
//       };

//       preloadAudio();

//       // CRITICAL FOR MOBILE: Preload voices immediately
//       if ('speechSynthesis' in window) {
//         // Get voices and cache female voice
//         const loadVoices = () => {
//           const voices = window.speechSynthesis.getVoices();
//           const femaleVoice = voices.find((voice) =>
//             voice.name.toLowerCase().includes("female") ||
//             voice.name.toLowerCase().includes("zira") ||
//             voice.name.toLowerCase().includes("victoria") ||
//             voice.name.toLowerCase().includes("samantha") ||
//             voice.name.toLowerCase().includes("google") ||
//             voice.name.toLowerCase().includes("alex")
//           );

//           if (femaleVoice) {
//             femaleVoiceRef.current = femaleVoice;
//             setVoicesReady(true);
//           }
//         };

//         // Load voices immediately
//         loadVoices();

//         // Some browsers need voiceschanged event
//         if (window.speechSynthesis.getVoices().length === 0) {
//           window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
//         }
//       }
//     }

//     return () => {
//       if (sound1Ref.current) {
//         sound1Ref.current.pause();
//         sound1Ref.current = null;
//       }
//       if (sound2Ref.current) {
//         sound2Ref.current.pause();
//         sound2Ref.current = null;
//       }
//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.removeEventListener('voiceschanged', () => { });
//       }
//     };
//   }, []);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobileView(isMobile);

//       // If mobile view detected and voices not loaded yet, load them now
//       if (isMobile && 'speechSynthesis' in window && !voicesReady) {
//         const voices = window.speechSynthesis.getVoices();
//         const femaleVoice = voices.find((voice) =>
//           voice.name.toLowerCase().includes("female") ||
//           voice.name.toLowerCase().includes("zira") ||
//           voice.name.toLowerCase().includes("samantha")
//         );
//         if (femaleVoice) {
//           femaleVoiceRef.current = femaleVoice;
//           setVoicesReady(true);
//         }
//       }
//     };

//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, [voicesReady]);

//   // Function to play Sound 1 (for hamburger menu open/close)
//   const playSound1 = () => {
//     if (!isMobileView || !sound1Ref.current) return;

//     try {
//       sound1Ref.current.currentTime = 0;
//       sound1Ref.current.play().catch(e => {
//         console.log("Sound 1 play failed:", e);
//       });
//     } catch (error) {
//       console.log("Sound 1 audio error:", error);
//     }
//   };

//   // Function to play Sound 2 (for menu item clicks)
//   const playSound2 = () => {
//     if (!isMobileView || !sound2Ref.current) return;

//     try {
//       sound2Ref.current.currentTime = 0;
//       sound2Ref.current.play().catch(e => {
//         console.log("Sound 2 play failed:", e);
//       });
//     } catch (error) {
//       console.log("Sound 2 audio error:", error);
//     }
//   };

//   // Function to get female voice - OPTIMIZED FOR MOBILE
//   const getFemaleVoice = () => {
//     // For mobile/tablet, use cached voice if available
//     if (isMobileView && femaleVoiceRef.current) {
//       return femaleVoiceRef.current;
//     }

//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") ||
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("victoria") ||
//       voice.name.toLowerCase().includes("samantha") ||
//       voice.name.toLowerCase().includes("google") ||
//       voice.name.toLowerCase().includes("alex")
//     );
//   };

//   // Function to speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Function to speak welcome message - HEAVILY OPTIMIZED FOR MOBILE/TABLET
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) {
//       console.log('Speech synthesis not supported');
//       return;
//     }

//     // CRITICAL: Cancel any ongoing speech first
//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");

//       // Get female voice - optimized for mobile
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) {
//         message.voice = femaleVoice;
//       }

//       // Set properties for female robot voice
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       // MOBILE/TABLET OPTIMIZATION: Immediate speech with minimal delay
//       if (isMobileView) {
//         // On mobile, we use direct speech without setTimeout for faster response
//         try {
//           window.speechSynthesis.speak(message);
//         } catch (e) {
//           console.log('Mobile speech error, retrying:', e);
//           // If first attempt fails, try once more
//           setTimeout(() => {
//             window.speechSynthesis.speak(message);
//           }, 10);
//         }
//       } else {
//         // Desktop behavior unchanged
//         window.speechSynthesis.speak(message);
//       }

//       message.onerror = (e) => {
//         console.log('Speech synthesis error:', e);
//       };
//     };

//     // OPTIMIZED VOICE LOADING FOR MOBILE
//     if (isMobileView) {
//       // For mobile: If we have cached voice, speak immediately
//       if (femaleVoiceRef.current || voicesReady) {
//         speak();
//       } else {
//         // If no cached voice, get voices and speak immediately
//         const voices = window.speechSynthesis.getVoices();
//         if (voices.length > 0) {
//           const femaleVoice = voices.find((voice) =>
//             voice.name.toLowerCase().includes("female") ||
//             voice.name.toLowerCase().includes("zira") ||
//             voice.name.toLowerCase().includes("samantha")
//           );
//           if (femaleVoice) {
//             femaleVoiceRef.current = femaleVoice;
//             speak();
//           } else {
//             // No female voice found, use default
//             speak();
//           }
//         } else {
//           // Wait for voiceschanged event but with minimal delay
//           window.speechSynthesis.addEventListener('voiceschanged', () => {
//             const voices = window.speechSynthesis.getVoices();
//             if (voices.length > 0) {
//               const femaleVoice = voices.find((voice) =>
//                 voice.name.toLowerCase().includes("female") ||
//                 voice.name.toLowerCase().includes("zira")
//               );
//               if (femaleVoice) femaleVoiceRef.current = femaleVoice;
//               speak();
//             }
//           }, { once: true });
//         }
//       }
//     } else {
//       // Desktop behavior unchanged
//       const voices = window.speechSynthesis.getVoices();
//       if (voices.length === 0) {
//         window.speechSynthesis.addEventListener('voiceschanged', () => {
//           speak();
//         }, { once: true });
//       } else {
//         speak();
//       }
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   };

//   // FIXED: Typewriter effect for quote text - prevents duplicate typing
//   useEffect(() => {
//     // Only run if portfolio is locked AND typewriter hasn't started yet
//     if (!isAgentActivated && !typewriterStartedRef.current) {
//       typewriterStartedRef.current = true; // Mark as started
//       setIsTyping(true);
//       setQuoteText("");

//       let currentIndex = 0;
//       const typeWriter = () => {
//         if (currentIndex < fullQuote.length) {
//           setQuoteText(fullQuote.substring(0, currentIndex + 1));
//           currentIndex++;
//           setTimeout(typeWriter, 80); // Typing speed (80ms per character)
//         } else {
//           setIsTyping(false);
//         }
//       };

//       // Start typing after a short delay
//       setTimeout(typeWriter, 500);
//     }

//     // Reset typewriter when agent is activated
//     if (isAgentActivated) {
//       typewriterStartedRef.current = false;
//       setIsTyping(false);
//       setQuoteText("");
//     }
//   }, [isAgentActivated]);

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Activate portfolio agent function - OPTIMIZED FOR MOBILE/TABLET
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     // Trigger navbar animation after a short delay
//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     // MOBILE/TABLET OPTIMIZATION: Immediate voice response
//     // For mobile/tablet: Speak immediately without delay
//     if (isMobileView) {
//       // Cancel any existing speech
//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.cancel();
//       }

//       // Speak welcome message immediately after user click
//       // This is within the user gesture context, so autoplay restrictions don't apply
//       setTimeout(() => {
//         speakWelcomeMessage();
//       }, 0);
//     } else {
//       // Desktop behavior unchanged
//       setTimeout(() => {
//         speakWelcomeMessage();
//       }, 50);
//     }
//   };

//   // 🔊 Speak with female voice for navigation
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     // Reset speaking flag when speech ends
//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setActiveSection(sectionId);
//     setIsOpen(false);

//     // Play Sound 2 for menu item click on mobile/tablet
//     if (isMobileView) {
//       playSound2();
//     }

//     // Speak immediately only once
//     speakNavigation(`Navigating to ${label} section`);

//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
//     speakNavigation("Site, Restarted");
//     window.location.href = "/";
//   };

//   // Hamburger menu
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;

//     // Play Sound 1 for hamburger click on mobile/tablet
//     if (isMobileView) {
//       playSound1();
//     }

//     setIsOpen(!isOpen);
//   };

//   // Custom Skills icon as < />
//   const SkillsIcon = () => (
//     <span className="text-xl font-bold" style={{ fontFamily: 'monospace', color: '#00FF00' }}>
//       &lt;/&gt;
//     </span>
//   );

//   // Menu items with Fi icons and custom Skills icon - with lime color
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <FiCode size={30} style={{ color: '#00FF00' }} /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiFolder size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       {/* Security Agent for Entire Website */}
//       <SecurityAgent
//         isAgentActivated={isAgentActivated}
//         speakSecurityMessage={speakSecurityMessage}
//       />

//       {/* Welcome Card Overlay with Lime Border */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//           style={{ userSelect: 'none', pointerEvents: 'auto' }}
//           onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//             style={{
//               userSelect: 'none',
//               borderColor: '#00FF00',
//               boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//             }}
//             onClick={(e) => e.stopPropagation()}>

//             {/* Animated border effect */}
//             <div className="absolute inset-0 rounded-2xl"
//               style={{
//                 border: '2px solid transparent',
//                 background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 animation: 'border-glow 3s linear infinite'
//               }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay WITH QUOTE TEXT INSIDE */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//           style={{ userSelect: 'none' }}
//           onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg mb-8" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>

//             {/* Simple Blue-ish Glowing Quote Text with Typewriter Effect */}
//             <div className="mt-8">
//               {/* Main Quote Text - SINGLE LINE with Typewriter Effect */}
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
//                 style={{
//                   color: '#00ccff',
//                   textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1.5px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                   minHeight: '1.5em',
//                 }}>
//                 {quoteText}
//                 {/* Blinking cursor */}
//                 {isTyping && (
//                   <span className="typewriter-cursor" style={{
//                     display: 'inline-block',
//                     width: '2px',
//                     height: '1.2em',
//                     backgroundColor: '#00ccff',
//                     marginLeft: '2px',
//                     verticalAlign: 'text-bottom',
//                     animation: 'blink 1s infinite'
//                   }}></span>
//                 )}
//               </div>

//               {/* Name Text - SINGLE LINE below the quote with proper width */}
//               <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
//                 style={{
//                   color: '#66ccff',
//                   textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                 }}>
//                 - ARSHAD WASIB SHAIK
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar with smooth animation */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}
//         onClick={(e) => { if (!isAgentActivated) { e.preventDefault(); e.stopPropagation(); } }}>

//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-21px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-35 h-35 rounded-full object-cover"
//               style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"}`}
//             onClick={handleHamburgerClick}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu with Icons */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id}
//                 className="group relative"
//                 style={{ userSelect: 'none' }}>
//                 <button
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${activeSection === item.id
//                       ? "text-[#ff0404] scale-110"
//                       : "text-[#00FF00] hover:scale-110"
//                     }`}
//                 >
//                   {/* Icon */}
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>

//                   {/* Tooltip text on hover */}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* MOBILE MENU WITH IRON MAN VIRTUAL GLASSY SHINING SCREEN EFFECT - FIXED RESPONSIVENESS */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full text-[#ffff] font-extrabold py-4 px-3 space-y-4 z-40 animate-fadeInUp"
//             style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               userSelect: 'none',
//               // Iron Man Virtual Glassy Screen Background
//               background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
//               backdropFilter: 'blur(20px) saturate(180%)',
//               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//               border: '2px solid rgba(0, 150, 255, 0.4)',
//               borderTop: 'none',
//               borderLeft: 'none',
//               borderRight: 'none',
//               borderBottomLeftRadius: '12px',
//               borderBottomRightRadius: '12px',
//               boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
//               position: 'fixed',
//               overflowY: 'auto',
//               WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
//               maxHeight: 'calc(100vh - 72px)', // Dynamic height based on viewport
//               minHeight: 'auto',
//             }}>

//             {/* Iron Man Glassy Screen Grid Pattern */}
//             <div className="absolute inset-0 opacity-20 pointer-events-none"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                 backgroundSize: '30px 30px'
//               }} />

//             {/* Glowing Border Effect */}
//             <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
//               style={{
//                 boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
//                 animation: 'pulse 2s infinite'
//               }} />

//             {/* Scanning Line Effect */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent pointer-events-none"
//               style={{
//                 animation: 'scanning 3s linear infinite'
//               }} />

//             {/* Additional blur overlay for better readability */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none rounded-b-lg"></div>

//             <ul className="flex flex-col items-center space-y-3 text-center relative z-10 pb-4">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] w-full justify-center ${activeSection === item.id ? "text-[#6008f8]" : "text-white"
//                   }`} style={{ userSelect: 'none' }}>
//                   <button
//                     onClick={() => handleMenuItemClick(item.id, item.label)}
//                     className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 w-full justify-center group relative"
//                     style={{
//                       background: activeSection === item.id
//                         ? 'rgba(0, 150, 255, 0.2)'
//                         : 'rgba(255, 255, 255, 0.05)',
//                       border: activeSection === item.id
//                         ? '1px solid rgba(0, 200, 255, 0.5)'
//                         : '1px solid rgba(255, 255, 255, 0.1)',
//                       boxShadow: activeSection === item.id
//                         ? '0 0 20px rgba(0, 200, 255, 0.4)'
//                         : 'none',
//                       maxWidth: '90vw', // Responsive max width
//                       minHeight: '56px', // Touch-friendly minimum height
//                     }}
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span className="font-semibold tracking-wide text-sm sm:text-base">{item.label.toUpperCase()}</span>

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animation for border glow, custom scrollbar, and Iron Man effects */}
//       <style jsx>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
//           }
//           50% {
//             opacity: 0.7;
//             box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
//           }
//         }
        
//         @keyframes scanning {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(100%);
//           }
//         }
        
//         /* Typewriter cursor blink animation */
//         @keyframes blink {
//           0%, 50% {
//             opacity: 1;
//           }
//           51%, 100% {
//             opacity: 0;
//           }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.3s ease-out forwards;
//         }
        
        
//         /* Custom scrollbar styling */
// ::-webkit-scrollbar {
//   width: 12px;
//   height: 12px;
// }

// ::-webkit-scrollbar-track {
//   background: #000000;
//   border-radius: 6px;
// }

// ::-webkit-scrollbar-thumb {
//   background: #00FF00;
//   border-radius: 6px;
//   border: 2px solid #000000;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background: #00CC00;
//   box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
// }

// ::-webkit-scrollbar-corner {
//   background: #000000;
// }

// /* For Firefox */
// * {
//   scrollbar-width: thin;
//   scrollbar-color: #00FF00 #000000;
// }

// /* For IE and Edge */
// body {
//   -ms-overflow-style: none;
// }

// body::-webkit-scrollbar-track {
//   background: #000000;
// }

// body::-webkit-scrollbar-thumb {
//   background: #00FF00;
// }
        
//         /* MOBILE/TABLET SPECIFIC OPTIMIZATIONS - ENHANCED */
//         @media (max-width: 1023px) {
//           /* Ensure welcome card button works perfectly on mobile */
//           button.bg-\\[\\#00FF00\\] {
//             -webkit-tap-highlight-color: rgba(0, 255, 0, 0.3);
//             touch-action: manipulation;
//             cursor: pointer;
//             user-select: none;
//           }
          
//           /* Mobile menu optimizations */
//           .lg\\:hidden.fixed {
//             -webkit-overflow-scrolling: touch;
//             scroll-behavior: smooth;
//             overscroll-behavior: contain; /* Prevent pull-to-refresh */
//           }
          
//           /* Improved mobile menu items for all screen sizes */
//           .lg\\:hidden button {
//             min-height: 56px;
//             min-width: 56px;
//             touch-action: manipulation;
//           }
          
//           /* Mobile voice message optimization */
//           .fixed.z-\\[100\\] button {
//             position: relative;
//             z-index: 1000;
//           }
          
//           /* Mobile speech synthesis optimization */
//           .fixed.inset-0 {
//             pointer-events: auto;
//           }
          
//           /* Mobile quote text adjustment for proper display */
//           .mt-8 {
//             margin-top: 1.5rem !important;
//           }
          
//           .text-xl {
//             font-size: 1.25rem !important;
//             letter-spacing: 1px !important;
//             min-height: 1.4em !important;
//           }
          
//           .text-base {
//             font-size: 1rem !important;
//             letter-spacing: 0.8px !important;
//           }
          
//           /* Typewriter cursor for mobile */
//           .typewriter-cursor {
//             height: 1em !important;
//           }
          
//           /* Landscape mode optimizations */
//           @media (orientation: landscape) and (max-height: 500px) {
//             .lg\\:hidden.fixed {
//               max-height: 70vh !important;
//               padding-top: 8px;
//               padding-bottom: 8px;
//             }
            
//             .lg\\:hidden button {
//               min-height: 48px;
//               padding: 10px 16px;
//             }
            
//             .space-y-3 > * + * {
//               margin-top: 0.5rem;
//             }
//           }
          
//           /* Very small screens (iPhone SE, etc) */
//           @media (max-width: 360px) and (max-height: 640px) {
//             .lg\\:hidden.fixed {
//               max-height: 60vh !important;
//             }
            
//             .text-xl {
//               font-size: 1.1rem !important;
//               letter-spacing: 0.8px !important;
//             }
            
//             .text-base {
//               font-size: 0.9rem !important;
//               letter-spacing: 0.6px !important;
//             }
            
//             .lg\\:hidden button {
//               min-height: 52px;
//               padding: 12px 16px;
//             }
            
//             span.font-semibold {
//               font-size: 0.875rem;
//             }
//           }
          
//           /* Tablet portrait optimizations */
//           @media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
//             .lg\\:hidden.fixed {
//               max-height: 75vh !important;
//             }
            
//             .lg\\:hidden button {
//               min-height: 64px;
//               padding: 16px 24px;
//             }
            
//             span.font-semibold {
//               font-size: 1.125rem;
//             }
//           }
          
//           /* Tablet landscape optimizations */
//           @media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
//             .lg\\:hidden.fixed {
//               max-height: 80vh !important;
//             }
            
//             .lg\\:hidden button {
//               min-height: 60px;
//               padding: 14px 20px;
//             }
            
//             .space-y-3 > * + * {
//               margin-top: 0.75rem;
//             }
//           }
//         }
        
//         /* Tablet specific optimizations */
//         @media (min-width: 768px) and (max-width: 1023px) {
//           /* Tablet touch targets */
//           button.bg-\\[\\#00FF00\\] {
//             padding: 14px 32px;
//             font-size: 1.1rem;
//           }
          
//           /* Tablet quote text for proper display */
//           .text-xl {
//             font-size: 1.75rem !important;
//             letter-spacing: 1.3px !important;
//             min-height: 1.8em !important;
//           }
          
//           .text-base {
//             font-size: 1.25rem !important;
//             letter-spacing: 0.9px !important;
//           }
//         }
        
//         /* Desktop specific - unchanged */
//         @media (min-width: 1024px) {
//           /* Desktop devices keep existing behavior */
//           .lg\\:hidden {
//             display: none !important;
//           }
          
//           /* Desktop quote text */
//           .text-xl {
//             font-size: 2.5rem !important;
//             min-height: 2em !important;
//           }
          
//           .text-base {
//             font-size: 1.5rem !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;





















// Third Iteration - in processing............................

// // Navbars.jsx.............................................
// // Navbars.jsx.............................................
// import { useEffect, useState, useRef } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiPackage, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent'; // Import the security component


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [pendingSpeakText, setPendingSpeakText] = useState(null);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);

//   // Audio refs for sound effects
//   const sound1Ref = useRef(null);
//   const sound2Ref = useRef(null);

//   // Preload female voice for mobile/tablet
//   const [voicesReady, setVoicesReady] = useState(false);
//   const femaleVoiceRef = useRef(null);

//   // State for typewriter effect - FIXED
//   const [quoteText, setQuoteText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const typewriterStartedRef = useRef(false); // NEW: Track if typewriter already started
//   const fullQuote = "MY GAME, MY PRESENCE";

//   // Initialize audio and preload voices for mobile/tablet
//   useEffect(() => {
//     // Create audio elements only for mobile/tablet
//     if (typeof window !== 'undefined' && window.innerWidth < 1024) {
//       sound1Ref.current = new Audio('/sounds/Sound 1.mp3');
//       sound2Ref.current = new Audio('/sounds/Sound 2.mp3');

//       // Set volume (0.0 to 1.0)
//       if (sound1Ref.current) sound1Ref.current.volume = 0.3;
//       if (sound2Ref.current) sound2Ref.current.volume = 0.3;

//       // Preload audio for faster playback
//       const preloadAudio = async () => {
//         try {
//           if (sound1Ref.current) {
//             sound1Ref.current.preload = 'auto';
//             await sound1Ref.current.load();
//           }
//           if (sound2Ref.current) {
//             sound2Ref.current.preload = 'auto';
//             await sound2Ref.current.load();
//           }
//         } catch (error) {
//           console.log("Audio preload failed, will load on play:", error);
//         }
//       };

//       preloadAudio();

//       // CRITICAL FOR MOBILE: Preload voices immediately
//       if ('speechSynthesis' in window) {
//         // Get voices and cache female voice
//         const loadVoices = () => {
//           const voices = window.speechSynthesis.getVoices();
//           const femaleVoice = voices.find((voice) =>
//             voice.name.toLowerCase().includes("female") ||
//             voice.name.toLowerCase().includes("zira") ||
//             voice.name.toLowerCase().includes("victoria") ||
//             voice.name.toLowerCase().includes("samantha") ||
//             voice.name.toLowerCase().includes("google") ||
//             voice.name.toLowerCase().includes("alex")
//           );

//           if (femaleVoice) {
//             femaleVoiceRef.current = femaleVoice;
//             setVoicesReady(true);
//           }
//         };

//         // Load voices immediately
//         loadVoices();

//         // Some browsers need voiceschanged event
//         if (window.speechSynthesis.getVoices().length === 0) {
//           window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
//         }
//       }
//     }

//     return () => {
//       if (sound1Ref.current) {
//         sound1Ref.current.pause();
//         sound1Ref.current = null;
//       }
//       if (sound2Ref.current) {
//         sound2Ref.current.pause();
//         sound2Ref.current = null;
//       }
//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.removeEventListener('voiceschanged', () => { });
//       }
//     };
//   }, []);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobileView(isMobile);

//       // If mobile view detected and voices not loaded yet, load them now
//       if (isMobile && 'speechSynthesis' in window && !voicesReady) {
//         const voices = window.speechSynthesis.getVoices();
//         const femaleVoice = voices.find((voice) =>
//           voice.name.toLowerCase().includes("female") ||
//           voice.name.toLowerCase().includes("zira") ||
//           voice.name.toLowerCase().includes("samantha")
//         );
//         if (femaleVoice) {
//           femaleVoiceRef.current = femaleVoice;
//           setVoicesReady(true);
//         }
//       }
//     };

//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, [voicesReady]);

//   // Function to play Sound 1 (for hamburger menu open/close)
//   const playSound1 = () => {
//     if (!isMobileView || !sound1Ref.current) return;

//     try {
//       sound1Ref.current.currentTime = 0;
//       sound1Ref.current.play().catch(e => {
//         console.log("Sound 1 play failed:", e);
//       });
//     } catch (error) {
//       console.log("Sound 1 audio error:", error);
//     }
//   };

//   // Function to play Sound 2 (for menu item clicks)
//   const playSound2 = () => {
//     if (!isMobileView || !sound2Ref.current) return;

//     try {
//       sound2Ref.current.currentTime = 0;
//       sound2Ref.current.play().catch(e => {
//         console.log("Sound 2 play failed:", e);
//       });
//     } catch (error) {
//       console.log("Sound 2 audio error:", error);
//     }
//   };

//   // Function to get female voice - OPTIMIZED FOR MOBILE
//   const getFemaleVoice = () => {
//     // For mobile/tablet, use cached voice if available
//     if (isMobileView && femaleVoiceRef.current) {
//       return femaleVoiceRef.current;
//     }

//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") ||
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("victoria") ||
//       voice.name.toLowerCase().includes("samantha") ||
//       voice.name.toLowerCase().includes("google") ||
//       voice.name.toLowerCase().includes("alex")
//     );
//   };

//   // Function to speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Function to speak welcome message - HEAVILY OPTIMIZED FOR MOBILE/TABLET
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) {
//       console.log('Speech synthesis not supported');
//       return;
//     }

//     // CRITICAL: Cancel any ongoing speech first
//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");

//       // Get female voice - optimized for mobile
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) {
//         message.voice = femaleVoice;
//       }

//       // Set properties for female robot voice
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       // MOBILE/TABLET OPTIMIZATION: Immediate speech with minimal delay
//       if (isMobileView) {
//         // On mobile, we use direct speech without setTimeout for faster response
//         try {
//           window.speechSynthesis.speak(message);
//         } catch (e) {
//           console.log('Mobile speech error, retrying:', e);
//           // If first attempt fails, try once more
//           setTimeout(() => {
//             window.speechSynthesis.speak(message);
//           }, 10);
//         }
//       } else {
//         // Desktop behavior unchanged
//         window.speechSynthesis.speak(message);
//       }

//       message.onerror = (e) => {
//         console.log('Speech synthesis error:', e);
//       };
//     };

//     // OPTIMIZED VOICE LOADING FOR MOBILE
//     if (isMobileView) {
//       // For mobile: If we have cached voice, speak immediately
//       if (femaleVoiceRef.current || voicesReady) {
//         speak();
//       } else {
//         // If no cached voice, get voices and speak immediately
//         const voices = window.speechSynthesis.getVoices();
//         if (voices.length > 0) {
//           const femaleVoice = voices.find((voice) =>
//             voice.name.toLowerCase().includes("female") ||
//             voice.name.toLowerCase().includes("zira") ||
//             voice.name.toLowerCase().includes("samantha")
//           );
//           if (femaleVoice) {
//             femaleVoiceRef.current = femaleVoice;
//             speak();
//           } else {
//             // No female voice found, use default
//             speak();
//           }
//         } else {
//           // Wait for voiceschanged event but with minimal delay
//           window.speechSynthesis.addEventListener('voiceschanged', () => {
//             const voices = window.speechSynthesis.getVoices();
//             if (voices.length > 0) {
//               const femaleVoice = voices.find((voice) =>
//                 voice.name.toLowerCase().includes("female") ||
//                 voice.name.toLowerCase().includes("zira")
//               );
//               if (femaleVoice) femaleVoiceRef.current = femaleVoice;
//               speak();
//             }
//           }, { once: true });
//         }
//       }
//     } else {
//       // Desktop behavior unchanged
//       const voices = window.speechSynthesis.getVoices();
//       if (voices.length === 0) {
//         window.speechSynthesis.addEventListener('voiceschanged', () => {
//           speak();
//         }, { once: true });
//       } else {
//         speak();
//       }
//     }
//   };

//   // Function to handle keyboard arrow scrolling
//   const handleKeyboardScroll = (e) => {
//     if (!isAgentActivated) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       window.scrollBy({ top: -100, behavior: 'smooth' });
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       window.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   };

//   // FIXED: Typewriter effect for quote text - prevents duplicate typing
//   useEffect(() => {
//     // Only run if portfolio is locked AND typewriter hasn't started yet
//     if (!isAgentActivated && !typewriterStartedRef.current) {
//       typewriterStartedRef.current = true; // Mark as started
//       setIsTyping(true);
//       setQuoteText("");

//       let currentIndex = 0;
//       const typeWriter = () => {
//         if (currentIndex < fullQuote.length) {
//           setQuoteText(fullQuote.substring(0, currentIndex + 1));
//           currentIndex++;
//           setTimeout(typeWriter, 80); // Typing speed (80ms per character)
//         } else {
//           setIsTyping(false);
//         }
//       };

//       // Start typing after a short delay
//       setTimeout(typeWriter, 500);
//     }

//     // Reset typewriter when agent is activated
//     if (isAgentActivated) {
//       typewriterStartedRef.current = false;
//       setIsTyping(false);
//       setQuoteText("");
//     }
//   }, [isAgentActivated]);

//   useEffect(() => {
//     // Show welcome card on first visit
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     // Check if agent was already activated in this session
//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     // Store agent activation state globally so other components can access it
//     window.isPortfolioAgentActivated = isAgentActivated;

//     // Add keyboard scroll listener
//     document.addEventListener('keydown', handleKeyboardScroll);

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       document.removeEventListener('keydown', handleKeyboardScroll);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Activate portfolio agent function - OPTIMIZED FOR MOBILE/TABLET
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     // Trigger navbar animation after a short delay
//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     // MOBILE/TABLET OPTIMIZATION: Immediate voice response
//     // For mobile/tablet: Speak immediately without delay
//     if (isMobileView) {
//       // Cancel any existing speech
//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.cancel();
//       }

//       // Speak welcome message immediately after user click
//       // This is within the user gesture context, so autoplay restrictions don't apply
//       setTimeout(() => {
//         speakWelcomeMessage();
//       }, 0);
//     } else {
//       // Desktop behavior unchanged
//       setTimeout(() => {
//         speakWelcomeMessage();
//       }, 50);
//     }
//   };

//   // 🔊 Speak with female voice for navigation
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     // Reset speaking flag when speech ends
//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Menu click + scroll
//   const handleMenuItemClick = (sectionId, label) => {
//     if (!isAgentActivated) return;

//     // Cancel any ongoing speech
//     window.speechSynthesis.cancel();

//     setActiveSection(sectionId);
//     setIsOpen(false);

//     // Play Sound 2 for menu item click on mobile/tablet
//     if (isMobileView) {
//       playSound2();
//     }

//     // Speak immediately only once
//     speakNavigation(`Navigating to ${label} section`);

//     const section = document.getElementById(sectionId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // FIXED: Logo click - Voice won't cut off anymore
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
    
//     // Cancel any ongoing speech first
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.cancel();
//     }
    
//     // Create speech utterance
//     const utterance = new SpeechSynthesisUtterance("Site is restarted");
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       utterance.voice = femaleVoice;
//     }
//     utterance.pitch = 1.1;
//     utterance.rate = 1;
//     utterance.volume = 1;
    
//     // Set a flag to prevent multiple clicks
//     setIsSpeaking(true);
    
//     // When speech finishes, THEN reload the page
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       // Small delay to ensure speech is fully processed
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 300);
//     };
    
//     // If speech errors, still reload after a delay
//     utterance.onerror = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 1500); // Longer delay in case of error
//     };
    
//     // Speak the message
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.speak(utterance);
//     } else {
//       // If speech synthesis not available, just reload
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 500);
//     }
//   };

//   // Hamburger menu
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;

//     // Play Sound 1 for hamburger click on mobile/tablet
//     if (isMobileView) {
//       playSound1();
//     }

//     setIsOpen(!isOpen);
//   };

//   // Custom Skills icon as < />
//   const SkillsIcon = () => (
//     <span className="text-xl font-bold" style={{ fontFamily: 'monospace', color: '#00FF00' }}>
//       &lt;/&gt;
//     </span>
//   );

//   // Menu items with Fi icons and custom Skills icon - with lime color
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <FiCode size={30} style={{ color: '#00FF00' }} /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiFolder size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       {/* Security Agent for Entire Website */}
//       <SecurityAgent
//         isAgentActivated={isAgentActivated}
//         speakSecurityMessage={speakSecurityMessage}
//       />

//       {/* Welcome Card Overlay with Lime Border */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//           style={{ userSelect: 'none', pointerEvents: 'auto' }}
//           onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//             style={{
//               userSelect: 'none',
//               borderColor: '#00FF00',
//               boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//             }}
//             onClick={(e) => e.stopPropagation()}>

//             {/* Animated border effect */}
//             <div className="absolute inset-0 rounded-2xl"
//               style={{
//                 border: '2px solid transparent',
//                 background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 animation: 'border-glow 3s linear infinite'
//               }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay WITH QUOTE TEXT INSIDE */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//           style={{ userSelect: 'none' }}
//           onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg mb-8" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>

//             {/* Simple Blue-ish Glowing Quote Text with Typewriter Effect */}
//             <div className="mt-8">
//               {/* Main Quote Text - SINGLE LINE with Typewriter Effect */}
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
//                 style={{
//                   color: '#00ccff',
//                   textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1.5px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                   minHeight: '1.5em',
//                 }}>
//                 {quoteText}
//                 {/* Blinking cursor */}
//                 {isTyping && (
//                   <span className="typewriter-cursor" style={{
//                     display: 'inline-block',
//                     width: '2px',
//                     height: '1.2em',
//                     backgroundColor: '#00ccff',
//                     marginLeft: '2px',
//                     verticalAlign: 'text-bottom',
//                     animation: 'blink 1s infinite'
//                   }}></span>
//                 )}
//               </div>

//               {/* Name Text - SINGLE LINE below the quote with proper width */}
//               <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
//                 style={{
//                   color: '#66ccff',
//                   textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                 }}>
//                 - ARSHAD WASIB SHAIK
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Social Cube Component */}
//       <SocialCube />

//       {/* Navbar with smooth animation */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}
//         onClick={(e) => { if (!isAgentActivated) { e.preventDefault(); e.stopPropagation(); } }}>

//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-15px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-26 h-26 rounded-full object-cover"
//               style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"}`}
//             onClick={handleHamburgerClick}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Desktop Menu with Icons */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id}
//                 className="group relative"
//                 style={{ userSelect: 'none' }}>
//                 <button
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${activeSection === item.id
//                       ? "text-[#ff0404] scale-110"
//                       : "text-[#00FF00] hover:scale-110"
//                     }`}
//                 >
//                   {/* Icon */}
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>

//                   {/* Tooltip text on hover */}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* MOBILE MENU WITH IRON MAN VIRTUAL GLASSY SHINING SCREEN EFFECT - FIXED WITH ALWAYS-VISIBLE SCROLLBAR */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full text-[#ffff] font-extrabold py-4 px-3 space-y-3 z-40 animate-fadeInUp"
//             style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               userSelect: 'none',
//               // Iron Man Virtual Glassy Screen Background
//               background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
//               backdropFilter: 'blur(20px) saturate(180%)',
//               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//               border: '2px solid rgba(0, 150, 255, 0.4)',
//               borderTop: 'none',
//               borderLeft: 'none',
//               borderRight: 'none',
//               borderBottomLeftRadius: '12px',
//               borderBottomRightRadius: '12px',
//               boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
//               position: 'fixed',
//               overflowY: 'scroll', // Changed to scroll (always show scrollbar)
//               WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
//               maxHeight: 'calc(100vh - 72px)', // Dynamic height based on viewport
//               minHeight: 'auto',
//               // Force scrollbar to be always visible
//               scrollbarWidth: 'thin', // For Firefox
//               scrollbarColor: 'rgba(0, 200, 255, 0.6) rgba(0, 20, 60, 0.3)', // For Firefox
//             }}>

//             {/* Iron Man Glassy Screen Grid Pattern */}
//             <div className="absolute inset-0 opacity-20 pointer-events-none"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                 backgroundSize: '30px 30px'
//               }} />

//             {/* Glowing Border Effect */}
//             <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
//               style={{
//                 boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
//                 animation: 'pulse 2s infinite'
//               }} />

//             {/* Scanning Line Effect */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent pointer-events-none"
//               style={{
//                 animation: 'scanning 3s linear infinite'
//               }} />

//             {/* Additional blur overlay for better readability */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none rounded-b-lg"></div>

//             <ul className="flex flex-col items-center space-y-3 text-center relative z-10 pb-6">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] w-full justify-center ${activeSection === item.id ? "text-[#6008f8]" : "text-white"
//                   }`} style={{ userSelect: 'none' }}>
//                   <button
//                     onClick={() => handleMenuItemClick(item.id, item.label)}
//                     className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 w-full justify-center group relative"
//                     style={{
//                       background: activeSection === item.id
//                         ? 'rgba(0, 150, 255, 0.2)'
//                         : 'rgba(255, 255, 255, 0.05)',
//                       border: activeSection === item.id
//                         ? '1px solid rgba(0, 200, 255, 0.5)'
//                         : '1px solid rgba(255, 255, 255, 0.1)',
//                       boxShadow: activeSection === item.id
//                         ? '0 0 20px rgba(0, 200, 255, 0.4)'
//                         : 'none',
//                       maxWidth: '90vw', // Responsive max width
//                       minHeight: '56px', // Touch-friendly minimum height
//                     }}
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span className="font-semibold tracking-wide text-sm sm:text-base">{item.label.toUpperCase()}</span>

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animation for border glow, custom scrollbar, and Iron Man effects */}
//       <style jsx>{`
//         @keyframes border-glow {
//           0% {
//             background-position: -200% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
//           }
//           50% {
//             opacity: 0.7;
//             box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
//           }
//         }
        
//         @keyframes scanning {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(100%);
//           }
//         }
        
//         /* Typewriter cursor blink animation */
//         @keyframes blink {
//           0%, 50% {
//             opacity: 1;
//           }
//           51%, 100% {
//             opacity: 0;
//           }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.3s ease-out forwards;
//         }
        
//         /* Custom scrollbar styling */
//         ::-webkit-scrollbar {
//           width: 12px;
//           height: 12px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: #000000;
//           border-radius: 6px;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: #00FF00;
//           border-radius: 6px;
//           border: 2px solid #000000;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: #00CC00;
//           box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
//         }
        
//         ::-webkit-scrollbar-corner {
//           background: #000000;
//         }
        
//         /* For Firefox */
//         * {
//           scrollbar-width: thin;
//           scrollbar-color: #00FF00 #000000;
//         }
        
//         /* For IE and Edge */
//         body {
//           -ms-overflow-style: none;
//         }
        
//         body::-webkit-scrollbar-track {
//           background: #000000;
//         }
        
//         body::-webkit-scrollbar-thumb {
//           background: #00FF00;
//         }
        
//         /* Mobile Hamburger Menu Scrollbar - ALWAYS VISIBLE */
//         .lg\\:hidden.fixed::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-track {
//           background: rgba(0, 20, 60, 0.3);
//           border-radius: 4px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb {
//           background: rgba(0, 200, 255, 0.6);
//           border-radius: 4px;
//           border: 1px solid rgba(0, 200, 255, 0.3);
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 200, 255, 0.8);
//           box-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb:active {
//           background: rgba(0, 255, 255, 0.9);
//         }
        
//         /* Force scrollbar to be always visible on mobile menu */
//         .lg\\:hidden.fixed {
//           overflow-y: scroll !important;
//         }
        
//         /* Ensure content doesn't hide behind scrollbar */
//         .lg\\:hidden.fixed ul {
//           padding-right: 4px;
//         }
        
//         /* MOBILE/TABLET SPECIFIC OPTIMIZATIONS - ENHANCED */
//         @media (max-width: 1023px) {
//           /* Ensure welcome card button works perfectly on mobile */
//           button.bg-\\[\\#00FF00\\] {
//             -webkit-tap-highlight-color: rgba(0, 255, 0, 0.3);
//             touch-action: manipulation;
//             cursor: pointer;
//             user-select: none;
//           }
          
//           /* Mobile menu optimizations */
//           .lg\\:hidden.fixed {
//             -webkit-overflow-scrolling: touch;
//             scroll-behavior: smooth;
//             overscroll-behavior: contain; /* Prevent pull-to-refresh */
//           }
          
//           /* Improved mobile menu items for all screen sizes */
//           .lg\\:hidden button {
//             min-height: 56px;
//             min-width: 56px;
//             touch-action: manipulation;
//           }
          
//           /* Mobile voice message optimization */
//           .fixed.z-\\[100\\] button {
//             position: relative;
//             z-index: 1000;
//           }
          
//           /* Mobile speech synthesis optimization */
//           .fixed.inset-0 {
//             pointer-events: auto;
//           }
          
//           /* Mobile quote text adjustment for proper display */
//           .mt-8 {
//             margin-top: 1.5rem !important;
//           }
          
//           .text-xl {
//             font-size: 1.25rem !important;
//             letter-spacing: 1px !important;
//             min-height: 1.4em !important;
//           }
          
//           .text-base {
//             font-size: 1rem !important;
//             letter-spacing: 0.8px !important;
//           }
          
//           /* Typewriter cursor for mobile */
//           .typewriter-cursor {
//             height: 1em !important;
//           }
          
//           /* Landscape mode optimizations */
//           @media (orientation: landscape) and (max-height: 500px) {
//             .lg\\:hidden.fixed {
//               max-height: 70vh !important;
//               padding-top: 8px;
//               padding-bottom: 8px;
//             }
            
//             .lg\\:hidden button {
//               min-height: 48px;
//               padding: 10px 16px;
//             }
            
//             .space-y-3 > * + * {
//               margin-top: 0.5rem;
//             }
//           }
          
//           /* Very small screens (iPhone SE, etc) */
//           @media (max-width: 360px) and (max-height: 640px) {
//             .lg\\:hidden.fixed {
//               max-height: 60vh !important;
//             }
            
//             .text-xl {
//               font-size: 1.1rem !important;
//               letter-spacing: 0.8px !important;
//             }
            
//             .text-base {
//               font-size: 0.9rem !important;
//               letter-spacing: 0.6px !important;
//             }
            
//             .lg\\:hidden button {
//               min-height: 52px;
//               padding: 12px 16px;
//             }
            
//             span.font-semibold {
//               font-size: 0.875rem;
//             }
//           }
          
//           /* Tablet portrait optimizations */
//           @media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
//             .lg\\:hidden.fixed {
//               max-height: 75vh !important;
//             }
            
//             .lg\\:hidden button {
//               min-height: 64px;
//               padding: 16px 24px;
//             }
            
//             span.font-semibold {
//               font-size: 1.125rem;
//             }
//           }
          
//           /* Tablet landscape optimizations */
//           @media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
//             .lg\\:hidden.fixed {
//               max-height: 80vh !important;
//             }
            
//             .lg\\:hidden button {
//               min-height: 60px;
//               padding: 14px 20px;
//             }
            
//             .space-y-3 > * + * {
//               margin-top: 0.75rem;
//             }
//           }
//         }
        
//         /* Tablet specific optimizations */
//         @media (min-width: 768px) and (max-width: 1023px) {
//           /* Tablet touch targets */
//           button.bg-\\[\\#00FF00\\] {
//             padding: 14px 32px;
//             font-size: 1.1rem;
//           }
          
//           /* Tablet quote text for proper display */
//           .text-xl {
//             font-size: 1.75rem !important;
//             letter-spacing: 1.3px !important;
//             min-height: 1.8em !important;
//           }
          
//           .text-base {
//             font-size: 1.25rem !important;
//             letter-spacing: 0.9px !important;
//           }
//         }
        
//         /* Desktop specific - unchanged */
//         @media (min-width: 1024px) {
//           /* Desktop devices keep existing behavior */
//           .lg\\:hidden {
//             display: none !important;
//           }
          
//           /* Desktop quote text */
//           .text-xl {
//             font-size: 2.5rem !important;
//             min-height: 2em !important;
//           }
          
//           .text-base {
//             font-size: 1.5rem !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;





















// Navbars.jsx
// Navbars.jsx
// Navbars.jsx - COMPLETE WORKING VERSION
// import React, { useEffect, useState, useRef } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [batteryLevel, setBatteryLevel] = useState(85);
//   const [batteryCharging, setBatteryCharging] = useState(false);

//   // Get real battery status
//   useEffect(() => {
//     if ('getBattery' in navigator) {
//       navigator.getBattery().then((battery) => {
//         updateBatteryInfo(battery);
        
//         battery.addEventListener('levelchange', () => {
//           updateBatteryInfo(battery);
//         });
        
//         battery.addEventListener('chargingchange', () => {
//           updateBatteryInfo(battery);
//         });
//       });
//     }
//   }, []);

//   const updateBatteryInfo = (battery) => {
//     const level = Math.round(battery.level * 100);
//     setBatteryLevel(level);
//     setBatteryCharging(battery.charging);
//   };

//   // Track current scroll position for active section
//   useEffect(() => {
//     if (!isAgentActivated) return;

//     const handleScroll = () => {
//       const sections = ['about', 'skills', 'experience', 'education', 'projects', 'certifications', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const sectionId of sections) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionBottom = sectionTop + section.offsetHeight;

//           if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//             setActiveSection(sectionId);
//             break;
//           }
//         }
//       }

//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isAgentActivated]);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobileView(isMobile);
//     };
//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, []);

//   // Typewriter effect
//   const [quoteText, setQuoteText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const typewriterStartedRef = useRef(false);
//   const fullQuote = "MY GAME, MY PRESENCE";

//   useEffect(() => {
//     if (!isAgentActivated && !typewriterStartedRef.current) {
//       typewriterStartedRef.current = true;
//       setIsTyping(true);
//       setQuoteText("");

//       let currentIndex = 0;
//       const typeWriter = () => {
//         if (currentIndex < fullQuote.length) {
//           setQuoteText(fullQuote.substring(0, currentIndex + 1));
//           currentIndex++;
//           setTimeout(typeWriter, 80);
//         } else {
//           setIsTyping(false);
//         }
//       };
//       setTimeout(typeWriter, 500);
//     }

//     if (isAgentActivated) {
//       typewriterStartedRef.current = false;
//       setIsTyping(false);
//       setQuoteText("");
//     }
//   }, [isAgentActivated]);

//   // Main effect
//   useEffect(() => {
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     window.isPortfolioAgentActivated = isAgentActivated;

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Get female voice
//   const getFemaleVoice = () => {
//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") ||
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("samantha")
//     );
//   };

//   // Speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Speak welcome message
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) message.voice = femaleVoice;
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       window.speechSynthesis.speak(message);
//     };

//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         speak();
//       }, { once: true });
//     } else {
//       speak();
//     }
//   };

//   // Activate portfolio agent
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 50);
//   };

//   // Speak navigation message
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking || !('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();
//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // ✅ CRITICAL FIX: SIMPLE MENU CLICK HANDLER
//   const handleMenuItemClick = (sectionId, label) => {
//     console.log(`Clicked: ${sectionId} - ${label}`);
    
//     if (!isAgentActivated) return;

//     // Close mobile menu
//     setIsOpen(false);
    
//     // Set active section
//     setActiveSection(sectionId);
    
//     // Speak navigation message
//     speakNavigation(`Navigating to ${label} section`);
    
//     // Wait a tiny bit for menu to close, then scroll
//     setTimeout(() => {
//       const section = document.getElementById(sectionId);
//       console.log(`Looking for section: ${sectionId}`, section);
      
//       if (section) {
//         console.log(`Section found, scrolling...`);
        
//         // Get navbar height for offset
//         const navbar = document.querySelector('nav');
//         const navbarHeight = navbar ? navbar.offsetHeight : 100;
        
//         // Calculate position
//         const sectionTop = section.offsetTop;
//         const scrollPosition = Math.max(0, sectionTop - navbarHeight);
        
//         console.log(`Scrolling to: ${scrollPosition}px`);
        
//         // Smooth scroll
//         window.scrollTo({
//           top: scrollPosition,
//           behavior: 'smooth'
//         });
//       } else {
//         console.log(`Section not found: ${sectionId}`);
//         // Try alternative - direct scrollIntoView
//         const altSection = document.getElementById(sectionId);
//         if (altSection) {
//           altSection.scrollIntoView({ 
//             behavior: 'smooth',
//             block: 'start'
//           });
//         }
//       }
//     }, 50);
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.cancel();
//     }
    
//     const utterance = new SpeechSynthesisUtterance("Site is restarted");
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       utterance.voice = femaleVoice;
//     }
//     utterance.pitch = 1.1;
//     utterance.rate = 1;
//     utterance.volume = 1;
    
//     setIsSpeaking(true);
    
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 300);
//     };
    
//     utterance.onerror = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 1500);
//     };
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.speak(utterance);
//     } else {
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 500);
//     }
//   };

//   // Hamburger menu click
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
//     setIsOpen(!isOpen);
//   };

//   // Menu items
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <FiCode size={30} style={{ color: '#00FF00' }} /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiFolder size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       <SecurityAgent
//         isAgentActivated={isAgentActivated}
//         speakSecurityMessage={speakSecurityMessage}
//       />

//       {/* Welcome Card */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//           style={{ userSelect: 'none', pointerEvents: 'auto' }}
//           onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//             style={{
//               userSelect: 'none',
//               borderColor: '#00FF00',
//               boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//             }}
//             onClick={(e) => e.stopPropagation()}>

//             <div className="absolute inset-0 rounded-2xl"
//               style={{
//                 border: '2px solid transparent',
//                 background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 animation: 'border-glow 3s linear infinite'
//               }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//           style={{ userSelect: 'none' }}
//           onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg mb-8" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>

//             <div className="mt-8">
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
//                 style={{
//                   color: '#00ccff',
//                   textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1.5px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                   minHeight: '1.5em',
//                 }}>
//                 {quoteText}
//                 {isTyping && (
//                   <span className="typewriter-cursor" style={{
//                     display: 'inline-block',
//                     width: '2px',
//                     height: '1.2em',
//                     backgroundColor: '#00ccff',
//                     marginLeft: '2px',
//                     verticalAlign: 'text-bottom',
//                     animation: 'blink 1s infinite'
//                   }}></span>
//                 )}
//               </div>

//               <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
//                 style={{
//                   color: '#66ccff',
//                   textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                 }}>
//                 - ARSHAD WASIB SHAIK
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <SocialCube />

//       {/* Main Navbar */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}>
//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-15px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-26 h-26 rounded-full object-cover"
//               style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger Icon */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"} relative`}
//             onClick={handleHamburgerClick}>
//             {isOpen ? (
//               <div className="relative">
//                 <FiX size={28} className="drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]" />
//                 <div className="absolute inset-0 animate-ping rounded-full bg-red-500/30" style={{ animationDuration: '1.5s' }}></div>
//               </div>
//             ) : (
//               <div className="relative">
//                 <FiMenu size={28} className="drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]" />
//                 <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/20" style={{ animationDuration: '2s' }}></div>
//               </div>
//             )}
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} className="group relative" style={{ userSelect: 'none' }}>
//                 <button
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${activeSection === item.id
//                       ? "text-[#ff0404] scale-110"
//                       : "text-[#00FF00] hover:scale-110"
//                     }`}
//                 >
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ✅ FIXED: SIMPLE WORKING MOBILE MENU (Like your old working code) */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full text-[#ffff] font-extrabold py-4 px-3 space-y-3 z-40"
//             style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               userSelect: 'none',
//               // Iron Man Virtual Glassy Screen Background
//               background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
//               backdropFilter: 'blur(20px) saturate(180%)',
//               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//               border: '2px solid rgba(0, 150, 255, 0.4)',
//               borderTop: 'none',
//               borderLeft: 'none',
//               borderRight: 'none',
//               borderBottomLeftRadius: '12px',
//               borderBottomRightRadius: '12px',
//               boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
//               position: 'fixed',
//               overflowY: 'scroll',
//               WebkitOverflowScrolling: 'touch',
//               maxHeight: 'calc(100vh - 72px)',
//               minHeight: 'auto',
//               scrollbarWidth: 'thin',
//               scrollbarColor: 'rgba(0, 200, 255, 0.6) rgba(0, 20, 60, 0.3)',
//             }}>

//             {/* Header with Interface Title */}
//             <div className="relative p-4 border-b border-cyan-500/40"
//               style={{
//                 background: 'linear-gradient(90deg, transparent, rgba(0, 150, 255, 0.15), transparent)',
//               }}>
//               <div className="flex justify-between items-center">
//                 <div className="text-cyan-300 font-bold text-lg tracking-wider flex items-center">
//                   <span className="mr-2">🔷</span> HOLOGRAPHIC INTERFACE V.2.0 <span className="ml-2">🔷</span>
//                 </div>
//               </div>
              
//               {/* System Status */}
//               <div className="mt-2 flex items-center justify-between text-xs">
//                 <div className="flex items-center space-x-2">
//                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//                   <span className="text-green-400 font-mono">[⚠️] SYSTEM: ONLINE</span>
//                 </div>
//                 <div className="text-cyan-300 font-mono">
//                   [{batteryCharging ? '⚡' : '🔋'}] {batteryCharging ? 'CHARGING' : 'BATTERY'} {batteryLevel}%
//                 </div>
//               </div>
              
//               {/* Battery Visual */}
//               <div className="mt-2 w-full bg-gray-900/50 rounded-full h-2">
//                 <div 
//                   className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
//                   style={{ width: `${batteryLevel}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* Iron Man Glassy Screen Grid Pattern */}
//             <div className="absolute inset-0 opacity-20 pointer-events-none"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                 backgroundSize: '30px 30px'
//               }} />

//             {/* Glowing Border Effect */}
//             <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
//               style={{
//                 boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
//                 animation: 'pulse 2s infinite'
//               }} />

//             <ul className="flex flex-col items-center space-y-3 text-center relative z-10 pb-6">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] w-full justify-center ${activeSection === item.id ? "text-[#6008f8]" : "text-white"
//                   }`} style={{ userSelect: 'none' }}>
//                   <button
//                     onClick={() => {
//                       console.log('Mobile menu button clicked:', item.id, item.label);
//                       handleMenuItemClick(item.id, item.label);
//                     }}
//                     className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 w-full justify-center group relative"
//                     style={{
//                       background: activeSection === item.id
//                         ? 'rgba(0, 150, 255, 0.2)'
//                         : 'rgba(255, 255, 255, 0.05)',
//                       border: activeSection === item.id
//                         ? '1px solid rgba(0, 200, 255, 0.5)'
//                         : '1px solid rgba(255, 255, 255, 0.1)',
//                       boxShadow: activeSection === item.id
//                         ? '0 0 20px rgba(0, 200, 255, 0.4)'
//                         : 'none',
//                       maxWidth: '90vw',
//                       minHeight: '56px',
//                     }}
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span className="font-semibold tracking-wide text-sm sm:text-base">{item.label.toUpperCase()}</span>

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes border-glow {
//           0% { background-position: -200% 50%; }
//           100% { background-position: 200% 50%; }
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
//           }
//           50% {
//             opacity: 0.7;
//             box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
//           }
//         }
        
//         /* Custom scrollbar */
//         .lg\\:hidden.fixed::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-track {
//           background: rgba(0, 20, 60, 0.3);
//           border-radius: 4px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb {
//           background: rgba(0, 200, 255, 0.6);
//           border-radius: 4px;
//           border: 1px solid rgba(0, 200, 255, 0.3);
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 200, 255, 0.8);
//           box-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
//         }
        
//         /* Mobile optimizations */
//         @media (max-width: 1023px) {
//           .lg\\:hidden button {
//             min-height: 56px;
//             min-width: 56px;
//             -webkit-tap-highlight-color: rgba(0, 200, 255, 0.3);
//             touch-action: manipulation;
//           }
          
//           /* Landscape mode */
//           @media (orientation: landscape) and (max-height: 500px) {
//             .lg\\:hidden.fixed {
//               max-height: 60vh !important;
//             }
//           }
//         }
        
//         /* Desktop */
//         @media (min-width: 1024px) {
//           .lg\\:hidden {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;






















// // Navbars.jsx - COMPLETE WORKING VERSION WITH SOUNDS AND VOICE..............................................
// import React, { useEffect, useState, useRef } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [batteryLevel, setBatteryLevel] = useState(85);
//   const [batteryCharging, setBatteryCharging] = useState(false);

//   // Audio refs for sounds
//   const sound1Ref = useRef(null); // Hamburger menu sound
//   const sound2Ref = useRef(null); // Desktop hover sound

//   // Preload sounds
//   useEffect(() => {
//     // Initialize audio elements
//     try {
//       sound1Ref.current = new Audio('/sounds/Sound 1.mp3');
//       sound2Ref.current = new Audio('/sounds/Sound 2.mp3');
      
//       if (sound1Ref.current) sound1Ref.current.volume = 0.3;
//       if (sound2Ref.current) sound2Ref.current.volume = 0.3;
      
//       // Preload audio for faster playback
//       const preloadAudio = async () => {
//         try {
//           if (sound1Ref.current) {
//             sound1Ref.current.preload = 'auto';
//           }
//           if (sound2Ref.current) {
//             sound2Ref.current.preload = 'auto';
//           }
//         } catch (error) {
//           console.log("Audio preload failed, will load on play:", error);
//         }
//       };
      
//       preloadAudio();
//     } catch (error) {
//       console.log("Audio initialization error:", error);
//     }

//     return () => {
//       if (sound1Ref.current) {
//         sound1Ref.current.pause();
//         sound1Ref.current = null;
//       }
//       if (sound2Ref.current) {
//         sound2Ref.current.pause();
//         sound2Ref.current = null;
//       }
//     };
//   }, []);

//   // Get real battery status
//   useEffect(() => {
//     if ('getBattery' in navigator) {
//       navigator.getBattery().then((battery) => {
//         updateBatteryInfo(battery);
        
//         battery.addEventListener('levelchange', () => {
//           updateBatteryInfo(battery);
//         });
        
//         battery.addEventListener('chargingchange', () => {
//           updateBatteryInfo(battery);
//         });
//       });
//     }
//   }, []);

//   const updateBatteryInfo = (battery) => {
//     const level = Math.round(battery.level * 100);
//     setBatteryLevel(level);
//     setBatteryCharging(battery.charging);
//   };

//   // Track current scroll position for active section
//   useEffect(() => {
//     if (!isAgentActivated) return;

//     const handleScroll = () => {
//       const sections = ['about', 'skills', 'experience', 'education', 'projects', 'certifications', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const sectionId of sections) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionBottom = sectionTop + section.offsetHeight;

//           if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//             setActiveSection(sectionId);
//             break;
//           }
//         }
//       }

//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isAgentActivated]);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobileView(isMobile);
//     };
//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, []);

//   // Typewriter effect
//   const [quoteText, setQuoteText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const typewriterStartedRef = useRef(false);
//   const fullQuote = "MY GAME, MY PRESENCE";

//   useEffect(() => {
//     if (!isAgentActivated && !typewriterStartedRef.current) {
//       typewriterStartedRef.current = true;
//       setIsTyping(true);
//       setQuoteText("");

//       let currentIndex = 0;
//       const typeWriter = () => {
//         if (currentIndex < fullQuote.length) {
//           setQuoteText(fullQuote.substring(0, currentIndex + 1));
//           currentIndex++;
//           setTimeout(typeWriter, 80);
//         } else {
//           setIsTyping(false);
//         }
//       };
//       setTimeout(typeWriter, 500);
//     }

//     if (isAgentActivated) {
//       typewriterStartedRef.current = false;
//       setIsTyping(false);
//       setQuoteText("");
//     }
//   }, [isAgentActivated]);

//   // Main effect
//   useEffect(() => {
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     window.isPortfolioAgentActivated = isAgentActivated;

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Get female voice
//   const getFemaleVoice = () => {
//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") ||
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("samantha")
//     );
//   };

//   // Speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Speak welcome message
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) message.voice = femaleVoice;
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       window.speechSynthesis.speak(message);
//     };

//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         speak();
//       }, { once: true });
//     } else {
//       speak();
//     }
//   };

//   // Activate portfolio agent
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 50);
//   };

//   // Speak navigation message
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking || !('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();
//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Play Sound 1 - Hamburger menu sound
//   const playSound1 = () => {
//     if (!sound1Ref.current) return;
    
//     try {
//       sound1Ref.current.currentTime = 0;
//       sound1Ref.current.play().catch(e => {
//         console.log("Sound 1 play failed:", e);
//         // Fallback: create new audio element
//         try {
//           const audio = new Audio('/sounds/Sound 1.mp3');
//           audio.volume = 0.3;
//           audio.play();
//         } catch (fallbackError) {
//           console.log("Fallback audio also failed:", fallbackError);
//         }
//       });
//     } catch (error) {
//       console.log("Sound 1 audio error:", error);
//     }
//   };

//   // Play Sound 2 - Desktop hover sound
//   const playSound2 = () => {
//     if (!sound2Ref.current) return;
    
//     try {
//       sound2Ref.current.currentTime = 0;
//       sound2Ref.current.play().catch(e => {
//         console.log("Sound 2 play failed:", e);
//         // Fallback: create new audio element
//         try {
//           const audio = new Audio('/sounds/Sound 2.mp3');
//           audio.volume = 0.3;
//           audio.play();
//         } catch (fallbackError) {
//           console.log("Fallback audio also failed:", fallbackError);
//         }
//       });
//     } catch (error) {
//       console.log("Sound 2 audio error:", error);
//     }
//   };

//   // ✅ UPDATED: Menu click handler with correct voice messages
//   const handleMenuItemClick = (sectionId, label) => {
//     console.log(`Clicked: ${sectionId} - ${label}`);
    
//     if (!isAgentActivated) return;

//     // Close mobile menu
//     setIsOpen(false);
    
//     // Set active section
//     setActiveSection(sectionId);
    
//     // ✅ CHECK if user is already in the same section
//     const isAlreadyInSection = activeSection === sectionId;
    
//     // ✅ SPEAK DIFFERENT MESSAGE based on whether user is already in the section
//     if (isAlreadyInSection) {
//       speakNavigation(`You're in ${label} section`);
//     } else {
//       speakNavigation(`Navigating to ${label} section`);
//     }
    
//     // Wait a tiny bit for menu to close, then scroll
//     setTimeout(() => {
//       const section = document.getElementById(sectionId);
//       console.log(`Looking for section: ${sectionId}`, section);
      
//       if (section) {
//         console.log(`Section found, scrolling...`);
        
//         // Get navbar height for offset
//         const navbar = document.querySelector('nav');
//         const navbarHeight = navbar ? navbar.offsetHeight : 100;
        
//         // Calculate position
//         const sectionTop = section.offsetTop;
//         const scrollPosition = Math.max(0, sectionTop - navbarHeight);
        
//         console.log(`Scrolling to: ${scrollPosition}px`);
        
//         // Smooth scroll
//         window.scrollTo({
//           top: scrollPosition,
//           behavior: 'smooth'
//         });
//       } else {
//         console.log(`Section not found: ${sectionId}`);
//         // Try alternative - direct scrollIntoView
//         const altSection = document.getElementById(sectionId);
//         if (altSection) {
//           altSection.scrollIntoView({ 
//             behavior: 'smooth',
//             block: 'start'
//           });
//         }
//       }
//     }, 50);
//   };

//   // ✅ UPDATED: Hamburger menu click with sound
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
    
//     // ✅ PLAY SOUND 1 when hamburger menu is clicked (open/close)
//     playSound1();
    
//     setIsOpen(!isOpen);
//   };

//   // ✅ NEW: Desktop icon hover handler
//   const handleDesktopIconHover = () => {
//     if (!isAgentActivated || isMobileView) return;
    
//     // ✅ PLAY SOUND 2 when hovering desktop icons
//     playSound2();
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.cancel();
//     }
    
//     const utterance = new SpeechSynthesisUtterance("Site is restarted");
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       utterance.voice = femaleVoice;
//     }
//     utterance.pitch = 1.1;
//     utterance.rate = 1;
//     utterance.volume = 1;
    
//     setIsSpeaking(true);
    
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 300);
//     };
    
//     utterance.onerror = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 1500);
//     };
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.speak(utterance);
//     } else {
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 500);
//     }
//   };

//   // Menu items
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <FiCode size={30} style={{ color: '#00FF00' }} /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiFolder size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       <SecurityAgent
//         isAgentActivated={isAgentActivated}
//         speakSecurityMessage={speakSecurityMessage}
//       />

//       {/* Welcome Card */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//           style={{ userSelect: 'none', pointerEvents: 'auto' }}
//           onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//             style={{
//               userSelect: 'none',
//               borderColor: '#00FF00',
//               boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//             }}
//             onClick={(e) => e.stopPropagation()}>

//             <div className="absolute inset-0 rounded-2xl"
//               style={{
//                 border: '2px solid transparent',
//                 background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 animation: 'border-glow 3s linear infinite'
//               }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//           style={{ userSelect: 'none' }}
//           onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg mb-8" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all features
//             </p>

//             <div className="mt-8">
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
//                 style={{
//                   color: '#00ccff',
//                   textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1.5px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                   minHeight: '1.5em',
//                 }}>
//                 {quoteText}
//                 {isTyping && (
//                   <span className="typewriter-cursor" style={{
//                     display: 'inline-block',
//                     width: '2px',
//                     height: '1.2em',
//                     backgroundColor: '#00ccff',
//                     marginLeft: '2px',
//                     verticalAlign: 'text-bottom',
//                     animation: 'blink 1s infinite'
//                   }}></span>
//                 )}
//               </div>

//               <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
//                 style={{
//                   color: '#66ccff',
//                   textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                 }}>
//                 - ARSHAD WASIB SHAIK
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <SocialCube />

//       {/* Main Navbar */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}>
//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-15px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-26 h-26 rounded-full object-cover"
//               style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger Icon */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"} relative`}
//             onClick={handleHamburgerClick}>
//             {isOpen ? (
//               <div className="relative">
//                 <FiX size={28} className="drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]" />
//                 <div className="absolute inset-0 animate-ping rounded-full bg-red-500/30" style={{ animationDuration: '1.5s' }}></div>
//               </div>
//             ) : (
//               <div className="relative">
//                 <FiMenu size={28} className="drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]" />
//                 <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/20" style={{ animationDuration: '2s' }}></div>
//               </div>
//             )}
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} className="group relative" style={{ userSelect: 'none' }}>
//                 <button
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   onMouseEnter={handleDesktopIconHover} // ✅ ADDED: Play sound on hover
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${activeSection === item.id
//                       ? "text-[#ff0404] scale-110"
//                       : "text-[#00FF00] hover:scale-110"
//                     }`}
//                 >
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ✅ FIXED: SIMPLE WORKING MOBILE MENU */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full text-[#ffff] font-extrabold py-4 px-3 space-y-3 z-40"
//             style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               userSelect: 'none',
//               // Iron Man Virtual Glassy Screen Background
//               background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
//               backdropFilter: 'blur(20px) saturate(180%)',
//               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//               border: '2px solid rgba(0, 150, 255, 0.4)',
//               borderTop: 'none',
//               borderLeft: 'none',
//               borderRight: 'none',
//               borderBottomLeftRadius: '12px',
//               borderBottomRightRadius: '12px',
//               boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
//               position: 'fixed',
//               overflowY: 'scroll',
//               WebkitOverflowScrolling: 'touch',
//               maxHeight: 'calc(100vh - 72px)',
//               minHeight: 'auto',
//               scrollbarWidth: 'thin',
//               scrollbarColor: 'rgba(0, 200, 255, 0.6) rgba(0, 20, 60, 0.3)',
//             }}>

//             {/* Header with Interface Title */}
//             <div className="relative p-4 border-b border-cyan-500/40"
//               style={{
//                 background: 'linear-gradient(90deg, transparent, rgba(0, 150, 255, 0.15), transparent)',
//               }}>
//               <div className="flex justify-between items-center">
//                 <div className="text-cyan-300 font-bold text-lg tracking-wider flex items-center">
//                   <span className="mr-2">🔷</span> HOLOGRAPHIC INTERFACE V.2.0 <span className="ml-2">🔷</span>
//                 </div>
//               </div>
              
//               {/* System Status */}
//               <div className="mt-2 flex items-center justify-between text-xs">
//                 <div className="flex items-center space-x-2">
//                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//                   <span className="text-green-400 font-mono">[⚠️] SYSTEM: ONLINE</span>
//                 </div>
//                 <div className="text-cyan-300 font-mono">
//                   [{batteryCharging ? '⚡' : '🔋'}] {batteryCharging ? 'CHARGING' : 'BATTERY'} {batteryLevel}%
//                 </div>
//               </div>
              
//               {/* Battery Visual */}
//               <div className="mt-2 w-full bg-gray-900/50 rounded-full h-2">
//                 <div 
//                   className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
//                   style={{ width: `${batteryLevel}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* Iron Man Glassy Screen Grid Pattern */}
//             <div className="absolute inset-0 opacity-20 pointer-events-none"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                 backgroundSize: '30px 30px'
//               }} />

//             {/* Glowing Border Effect */}
//             <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
//               style={{
//                 boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
//                 animation: 'pulse 2s infinite'
//               }} />

//             <ul className="flex flex-col items-center space-y-3 text-center relative z-10 pb-6">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] w-full justify-center ${activeSection === item.id ? "text-[#6008f8]" : "text-white"
//                   }`} style={{ userSelect: 'none' }}>
//                   <button
//                     onClick={() => {
//                       console.log('Mobile menu button clicked:', item.id, item.label);
//                       handleMenuItemClick(item.id, item.label);
//                     }}
//                     className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 w-full justify-center group relative"
//                     style={{
//                       background: activeSection === item.id
//                         ? 'rgba(0, 150, 255, 0.2)'
//                         : 'rgba(255, 255, 255, 0.05)',
//                       border: activeSection === item.id
//                         ? '1px solid rgba(0, 200, 255, 0.5)'
//                         : '1px solid rgba(255, 255, 255, 0.1)',
//                       boxShadow: activeSection === item.id
//                         ? '0 0 20px rgba(0, 200, 255, 0.4)'
//                         : 'none',
//                       maxWidth: '90vw',
//                       minHeight: '56px',
//                     }}
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span className="font-semibold tracking-wide text-sm sm:text-base">{item.label.toUpperCase()}</span>

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes border-glow {
//           0% { background-position: -200% 50%; }
//           100% { background-position: 200% 50%; }
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
//           }
//           50% {
//             opacity: 0.7;
//             box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
//           }
//         }
        
//         /* Custom scrollbar */
//         .lg\\:hidden.fixed::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-track {
//           background: rgba(0, 20, 60, 0.3);
//           border-radius: 4px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb {
//           background: rgba(0, 200, 255, 0.6);
//           border-radius: 4px;
//           border: 1px solid rgba(0, 200, 255, 0.3);
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 200, 255, 0.8);
//           box-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
//         }
        
//         /* Mobile optimizations */
//         @media (max-width: 1023px) {
//           .lg\\:hidden button {
//             min-height: 56px;
//             min-width: 56px;
//             -webkit-tap-highlight-color: rgba(0, 200, 255, 0.3);
//             touch-action: manipulation;
//           }
          
//           /* Landscape mode */
//           @media (orientation: landscape) and (max-height: 500px) {
//             .lg\\:hidden.fixed {
//               max-height: 60vh !important;
//             }
//           }
//         }
        
//         /* Desktop */
//         @media (min-width: 1024px) {
//           .lg\\:hidden {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;


























// src/components/Navbar/Navbars.jsx - OPTION 1 IMPLEMENTATION
// src/components/Navbar/Navbars.jsx - OPTION 1 IMPLEMENTATION
// src/components/Navbar/Navbars.jsx - OPTION 1 IMPLEMENTATION
// import React, { useEffect, useState, useRef } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [batteryLevel, setBatteryLevel] = useState(85);
//   const [batteryCharging, setBatteryCharging] = useState(false);

//   // Audio refs for sounds
//   const sound1Ref = useRef(null);
//   const sound2Ref = useRef(null);

//   // Get real battery status
//   useEffect(() => {
//     if ('getBattery' in navigator) {
//       navigator.getBattery().then((battery) => {
//         updateBatteryInfo(battery);
        
//         battery.addEventListener('levelchange', () => {
//           updateBatteryInfo(battery);
//         });
        
//         battery.addEventListener('chargingchange', () => {
//           updateBatteryInfo(battery);
//         });
//       });
//     }
//   }, []);

//   const updateBatteryInfo = (battery) => {
//     const level = Math.round(battery.level * 100);
//     setBatteryLevel(level);
//     setBatteryCharging(battery.charging);
//   };

//   // Track current scroll position for active section
//   useEffect(() => {
//     if (!isAgentActivated) return;

//     const handleScroll = () => {
//       const sections = ['about', 'skills', 'experience', 'education', 'projects', 'certifications', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const sectionId of sections) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionBottom = sectionTop + section.offsetHeight;

//           if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//             setActiveSection(sectionId);
//             break;
//           }
//         }
//       }

//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isAgentActivated]);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobileView(isMobile);
//     };
//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, []);

//   // Preload sounds
//   useEffect(() => {
//     // Initialize audio elements
//     try {
//       sound1Ref.current = new Audio('/sounds/Sound 1.mp3');
//       sound2Ref.current = new Audio('/sounds/Sound 2.mp3');
      
//       if (sound1Ref.current) sound1Ref.current.volume = 0.3;
//       if (sound2Ref.current) sound2Ref.current.volume = 0.3;
      
//       // Preload audio for faster playback
//       const preloadAudio = async () => {
//         try {
//           if (sound1Ref.current) {
//             sound1Ref.current.preload = 'auto';
//           }
//           if (sound2Ref.current) {
//             sound2Ref.current.preload = 'auto';
//           }
//         } catch (error) {
//           console.log("Audio preload failed, will load on play:", error);
//         }
//       };
      
//       preloadAudio();
//     } catch (error) {
//       console.log("Audio initialization error:", error);
//     }

//     return () => {
//       if (sound1Ref.current) {
//         sound1Ref.current.pause();
//         sound1Ref.current = null;
//       }
//       if (sound2Ref.current) {
//         sound2Ref.current.pause();
//         sound2Ref.current = null;
//       }
//     };
//   }, []);

//   // Typewriter effect
//   const [quoteText, setQuoteText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const typewriterStartedRef = useRef(false);
//   const fullQuote = "MY GAME, MY PRESENCE";

//   useEffect(() => {
//     if (!isAgentActivated && !typewriterStartedRef.current) {
//       typewriterStartedRef.current = true;
//       setIsTyping(true);
//       setQuoteText("");

//       let currentIndex = 0;
//       const typeWriter = () => {
//         if (currentIndex < fullQuote.length) {
//           setQuoteText(fullQuote.substring(0, currentIndex + 1));
//           currentIndex++;
//           setTimeout(typeWriter, 80);
//         } else {
//           setIsTyping(false);
//         }
//       };
//       setTimeout(typeWriter, 500);
//     }

//     if (isAgentActivated) {
//       typewriterStartedRef.current = false;
//       setIsTyping(false);
//       setQuoteText("");
//     }
//   }, [isAgentActivated]);

//   // Main effect
//   useEffect(() => {
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     window.isPortfolioAgentActivated = isAgentActivated;

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Get female voice
//   const getFemaleVoice = () => {
//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") ||
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("samantha")
//     );
//   };

//   // Speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Speak welcome message
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) message.voice = femaleVoice;
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       window.speechSynthesis.speak(message);
//     };

//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         speak();
//       }, { once: true });
//     } else {
//       speak();
//     }
//   };

//   // Activate portfolio agent
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 50);
//   };

//   // Speak navigation message
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking || !('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();
//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Play Sound 1 - Hamburger menu sound
//   const playSound1 = () => {
//     if (!sound1Ref.current) return;
    
//     try {
//       sound1Ref.current.currentTime = 0;
//       sound1Ref.current.play().catch(e => {
//         console.log("Sound 1 play failed:", e);
//         // Fallback: create new audio element
//         try {
//           const audio = new Audio('/sounds/Sound 1.mp3');
//           audio.volume = 0.3;
//           audio.play();
//         } catch (fallbackError) {
//           console.log("Fallback audio also failed:", fallbackError);
//         }
//       });
//     } catch (error) {
//       console.log("Sound 1 audio error:", error);
//     }
//   };

//   // Play Sound 2 - Desktop hover sound
//   const playSound2 = () => {
//     if (!sound2Ref.current) return;
    
//     try {
//       sound2Ref.current.currentTime = 0;
//       sound2Ref.current.play().catch(e => {
//         console.log("Sound 2 play failed:", e);
//         // Fallback: create new audio element
//         try {
//           const audio = new Audio('/sounds/Sound 2.mp3');
//           audio.volume = 0.3;
//           audio.play();
//         } catch (fallbackError) {
//           console.log("Fallback audio also failed:", fallbackError);
//         }
//       });
//     } catch (error) {
//       console.log("Sound 2 audio error:", error);
//     }
//   };

//   // ✅ OPTION 1: Simple Blue Border Animation Function
//   const highlightSectionWithBorder = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (!section) return;

//     // Save original styles
//     const originalBorder = section.style.border;
//     const originalBoxShadow = section.style.boxShadow;
//     const originalTransition = section.style.transition;
//     const originalPosition = section.style.position;

//     // Add blue glowing border
//     section.style.border = '3px solid #00ccff';
//     section.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6)';
//     section.style.transition = 'all 0.3s ease';
//     section.style.position = 'relative';
    
//     // Add pulse animation
//     section.style.animation = 'agent-border-pulse 0.5s ease-in-out 4';

//     // Remove after 3 seconds
//     setTimeout(() => {
//       section.style.border = originalBorder;
//       section.style.boxShadow = originalBoxShadow;
//       section.style.transition = originalTransition;
//       section.style.position = originalPosition;
//       section.style.animation = '';
//     }, 3000);
//   };

//   // ✅ UPDATED: Menu click handler with blue border animation
//   const handleMenuItemClick = (sectionId, label) => {
//     console.log(`Clicked: ${sectionId} - ${label}`);
    
//     if (!isAgentActivated) return;

//     // Close mobile menu
//     setIsOpen(false);
    
//     // Set active section
//     setActiveSection(sectionId);
    
//     // ✅ CHECK if user is already in the same section
//     const isAlreadyInSection = activeSection === sectionId;
    
//     // ✅ SPEAK DIFFERENT MESSAGE based on whether user is already in the section
//     if (isAlreadyInSection) {
//       speakNavigation(`You're in ${label} section`);
//     } else {
//       speakNavigation(`Navigating to ${label} section`);
//     }
    
//     // ✅ APPLY BLUE BORDER ANIMATION
//     highlightSectionWithBorder(sectionId);
    
//     // Wait a tiny bit for menu to close, then scroll
//     setTimeout(() => {
//       const section = document.getElementById(sectionId);
//       console.log(`Looking for section: ${sectionId}`, section);
      
//       if (section) {
//         console.log(`Section found, scrolling...`);
        
//         // Get navbar height for offset
//         const navbar = document.querySelector('nav');
//         const navbarHeight = navbar ? navbar.offsetHeight : 100;
        
//         // Calculate position
//         const sectionTop = section.offsetTop;
//         const scrollPosition = Math.max(0, sectionTop - navbarHeight);
        
//         console.log(`Scrolling to: ${scrollPosition}px`);
        
//         // Smooth scroll
//         window.scrollTo({
//           top: scrollPosition,
//           behavior: 'smooth'
//         });
//       } else {
//         console.log(`Section not found: ${sectionId}`);
//         // Try alternative - direct scrollIntoView
//         const altSection = document.getElementById(sectionId);
//         if (altSection) {
//           altSection.scrollIntoView({ 
//             behavior: 'smooth',
//             block: 'start'
//           });
//         }
//       }
//     }, 50);
//   };

//   // ✅ UPDATED: Hamburger menu click with sound
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
    
//     // ✅ PLAY SOUND 1 when hamburger menu is clicked (open/close)
//     playSound1();
    
//     setIsOpen(!isOpen);
//   };

//   // ✅ NEW: Desktop icon hover handler
//   const handleDesktopIconHover = () => {
//     if (!isAgentActivated || isMobileView) return;
    
//     // ✅ PLAY SOUND 2 when hovering desktop icons
//     playSound2();
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.cancel();
//     }
    
//     const utterance = new SpeechSynthesisUtterance("Site is restarted");
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       utterance.voice = femaleVoice;
//     }
//     utterance.pitch = 1.1;
//     utterance.rate = 1;
//     utterance.volume = 1;
    
//     setIsSpeaking(true);
    
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 300);
//     };
    
//     utterance.onerror = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 1500);
//     };
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.speak(utterance);
//     } else {
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 500);
//     }
//   };

//   // Menu items
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} style={{ color: '#00FF00' }} /> },
//     { id: "skills", label: "Skills", icon: <FiCode size={30} style={{ color: '#00FF00' }} /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} style={{ color: '#00FF00' }} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} style={{ color: '#00FF00' }} /> },
//     { id: "projects", label: "Projects", icon: <FiFolder size={24} style={{ color: '#00FF00' }} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} style={{ color: '#00FF00' }} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} style={{ color: '#00FF00' }} /> },
//   ];

//   return (
//     <>
//       <SecurityAgent
//         isAgentActivated={isAgentActivated}
//         speakSecurityMessage={speakSecurityMessage}
//       />

//       {/* Welcome Card */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//           style={{ userSelect: 'none', pointerEvents: 'auto' }}
//           onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//             style={{
//               userSelect: 'none',
//               borderColor: '#00FF00',
//               boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//             }}
//             onClick={(e) => e.stopPropagation()}>

//             <div className="absolute inset-0 rounded-2xl"
//               style={{
//                 border: '2px solid transparent',
//                 background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 animation: 'border-glow 3s linear infinite'
//               }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//           style={{ userSelect: 'none' }}
//           onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg mb-8" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all interactive features. For the complete voice-guided experience, ensure your device volume is turned up
//             </p>

//             <div className="mt-8">
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
//                 style={{
//                   color: '#00ccff',
//                   textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1.5px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                   minHeight: '1.5em',
//                 }}>
//                 {quoteText}
//                 {isTyping && (
//                   <span className="typewriter-cursor" style={{
//                     display: 'inline-block',
//                     width: '2px',
//                     height: '1.2em',
//                     backgroundColor: '#00ccff',
//                     marginLeft: '2px',
//                     verticalAlign: 'text-bottom',
//                     animation: 'blink 1s infinite'
//                   }}></span>
//                 )}
//               </div>

//               <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
//                 style={{
//                   color: '#66ccff',
//                   textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                 }}>
//                 - ARSHAD WASIB SHAIK
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <SocialCube />

//       {/* Main Navbar */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}>
//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-15px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-26 h-26 rounded-full object-cover"
//               style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger Icon */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"} relative`}
//             onClick={handleHamburgerClick}>
//             {isOpen ? (
//               <div className="relative">
//                 <FiX size={28} className="drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]" />
//                 <div className="absolute inset-0 animate-ping rounded-full bg-red-500/30" style={{ animationDuration: '1.5s' }}></div>
//               </div>
//             ) : (
//               <div className="relative">
//                 <FiMenu size={28} className="drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]" />
//                 <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/20" style={{ animationDuration: '2s' }}></div>
//               </div>
//             )}
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} className="group relative" style={{ userSelect: 'none' }}>
//                 <button
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   onMouseEnter={handleDesktopIconHover}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${activeSection === item.id
//                       ? "text-[#ff0404] scale-110"
//                       : "text-[#00FF00] hover:scale-110"
//                     }`}
//                 >
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {item.icon}
//                   </div>
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ✅ FIXED: SIMPLE WORKING MOBILE MENU */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full text-[#ffff] font-extrabold py-4 px-3 space-y-3 z-40"
//             style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               userSelect: 'none',
//               // Iron Man Virtual Glassy Screen Background
//               background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
//               backdropFilter: 'blur(20px) saturate(180%)',
//               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//               border: '2px solid rgba(0, 150, 255, 0.4)',
//               borderTop: 'none',
//               borderLeft: 'none',
//               borderRight: 'none',
//               borderBottomLeftRadius: '12px',
//               borderBottomRightRadius: '12px',
//               boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
//               position: 'fixed',
//               overflowY: 'scroll',
//               WebkitOverflowScrolling: 'touch',
//               maxHeight: 'calc(100vh - 72px)',
//               minHeight: 'auto',
//               scrollbarWidth: 'thin',
//               scrollbarColor: 'rgba(0, 200, 255, 0.6) rgba(0, 20, 60, 0.3)',
//             }}>

//             {/* Header with Interface Title */}
//             <div className="relative p-4 border-b border-cyan-500/40"
//               style={{
//                 background: 'linear-gradient(90deg, transparent, rgba(0, 150, 255, 0.15), transparent)',
//               }}>
//               <div className="flex justify-between items-center">
//                 <div className="text-cyan-300 font-bold text-lg tracking-wider flex items-center">
//                   <span className="mr-2">🔷</span> HOLOGRAPHIC INTERFACE V.2.0 <span className="ml-2">🔷</span>
//                 </div>
//               </div>
              
//               {/* System Status */}
//               <div className="mt-2 flex items-center justify-between text-xs">
//                 <div className="flex items-center space-x-2">
//                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//                   <span className="text-green-400 font-mono">[⚠️] SYSTEM: ONLINE</span>
//                 </div>
//                 <div className="text-cyan-300 font-mono">
//                   [{batteryCharging ? '⚡' : '🔋'}] {batteryCharging ? 'CHARGING' : 'BATTERY'} {batteryLevel}%
//                 </div>
//               </div>
              
//               {/* Battery Visual */}
//               <div className="mt-2 w-full bg-gray-900/50 rounded-full h-2">
//                 <div 
//                   className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
//                   style={{ width: `${batteryLevel}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* Iron Man Glassy Screen Grid Pattern */}
//             <div className="absolute inset-0 opacity-20 pointer-events-none"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                 backgroundSize: '30px 30px'
//               }} />

//             {/* Glowing Border Effect */}
//             <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
//               style={{
//                 boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
//                 animation: 'pulse 2s infinite'
//               }} />

//             <ul className="flex flex-col items-center space-y-3 text-center relative z-10 pb-6">
//               {menuItems.map((item) => (
//                 <li key={item.id} className={`flex items-center space-x-2 cursor-pointer hover:text-[#00FF00] w-full justify-center ${activeSection === item.id ? "text-[#6008f8]" : "text-white"
//                   }`} style={{ userSelect: 'none' }}>
//                   <button
//                     onClick={() => {
//                       console.log('Mobile menu button clicked:', item.id, item.label);
//                       handleMenuItemClick(item.id, item.label);
//                     }}
//                     className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 w-full justify-center group relative"
//                     style={{
//                       background: activeSection === item.id
//                         ? 'rgba(0, 150, 255, 0.2)'
//                         : 'rgba(255, 255, 255, 0.05)',
//                       border: activeSection === item.id
//                         ? '1px solid rgba(0, 200, 255, 0.5)'
//                         : '1px solid rgba(255, 255, 255, 0.1)',
//                       boxShadow: activeSection === item.id
//                         ? '0 0 20px rgba(0, 200, 255, 0.4)'
//                         : 'none',
//                       maxWidth: '90vw',
//                       minHeight: '56px',
//                     }}
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {item.icon}
//                     </div>
//                     <span className="font-semibold tracking-wide text-sm sm:text-base">{item.label.toUpperCase()}</span>

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animations - ADDED BLUE BORDER ANIMATION */}
//       <style jsx>{`
//         @keyframes border-glow {
//           0% { background-position: -200% 50%; }
//           100% { background-position: 200% 50%; }
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
//           }
//           50% {
//             opacity: 0.7;
//             box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
//           }
//         }
        
//         /* ✅ OPTION 1: Blue Border Pulse Animation */
//         @keyframes agent-border-pulse {
//           0%, 100% {
//             border-color: #00ccff;
//             box-shadow: 0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6);
//             opacity: 1;
//           }
//           50% {
//             border-color: #00ffff;
//             box-shadow: 0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 200, 255, 0.8);
//             opacity: 0.8;
//           }
//         }
        
//         /* Custom scrollbar */
//         .lg\\:hidden.fixed::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-track {
//           background: rgba(0, 20, 60, 0.3);
//           border-radius: 4px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb {
//           background: rgba(0, 200, 255, 0.6);
//           border-radius: 4px;
//           border: 1px solid rgba(0, 200, 255, 0.3);
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 200, 255, 0.8);
//           box-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
//         }
        
//         /* Mobile optimizations */
//         @media (max-width: 1023px) {
//           .lg\\:hidden button {
//             min-height: 56px;
//             min-width: 56px;
//             -webkit-tap-highlight-color: rgba(0, 200, 255, 0.3);
//             touch-action: manipulation;
//           }
          
//           /* Landscape mode */
//           @media (orientation: landscape) and (max-height: 500px) {
//             .lg\\:hidden.fixed {
//               max-height: 60vh !important;
//             }
//           }
//         }
        
//         /* Desktop */
//         @media (min-width: 1024px) {
//           .lg\\:hidden {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;






















// // Navbars.jsx
// import React, { useEffect, useState, useRef } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [batteryLevel, setBatteryLevel] = useState(85);
//   const [batteryCharging, setBatteryCharging] = useState(false);
//   const [lastClickTime, setLastClickTime] = useState(0);
//   const [isNavigating, setIsNavigating] = useState(false);

//   // Audio refs for sounds
//   const sound1Ref = useRef(null);
//   const sound2Ref = useRef(null);

//   // FIXED: Universal Battery Status for all browsers including Brave
//   useEffect(() => {
//     let batteryInterval;
//     let isBraveBrowser = false;
    
//     // Check if Brave browser (has specific properties)
//     if (navigator.brave && typeof navigator.brave.isBrave === 'function') {
//       isBraveBrowser = true;
//     }
    
//     const updateBatteryStatus = async () => {
//       try {
//         // Try Battery Status API first
//         if ('getBattery' in navigator && !isBraveBrowser) {
//           const battery = await navigator.getBattery();
//           const level = Math.round(battery.level * 100);
//           setBatteryLevel(level);
//           setBatteryCharging(battery.charging);
          
//           battery.addEventListener('levelchange', () => {
//             const newLevel = Math.round(battery.level * 100);
//             setBatteryLevel(newLevel);
//           });
          
//           battery.addEventListener('chargingchange', () => {
//             setBatteryCharging(battery.charging);
//           });
          
//         } else {
//           // For Brave and other browsers without Battery API
//           // Use a smart simulated battery that works across all browsers
//           let simulatedLevel = 85;
//           let isCharging = false;
          
//           // Try to get real battery info for Chrome
//           if (window.navigator.getBattery) {
//             try {
//               const battery = await window.navigator.getBattery();
//               simulatedLevel = Math.round(battery.level * 100);
//               isCharging = battery.charging;
//             } catch (e) {
//               console.log("Falling back to simulated battery");
//             }
//           }
          
//           setBatteryLevel(simulatedLevel);
//           setBatteryCharging(isCharging);
          
//           // Smart simulation for all browsers
//           batteryInterval = setInterval(() => {
//             setBatteryLevel(prev => {
//               let newLevel;
              
//               // If charging, increase battery
//               if (Math.random() > 0.7) { // 30% chance of charging
//                 setBatteryCharging(true);
//                 newLevel = Math.min(100, prev + 0.5);
//               } else {
//                 setBatteryCharging(false);
//                 newLevel = Math.max(0, prev - 0.2);
                
//                 // Reset to 85% when empty
//                 if (newLevel <= 0) {
//                   newLevel = 85;
//                   // Random charging start
//                   setTimeout(() => {
//                     setBatteryCharging(true);
//                   }, 2000);
//                 }
//               }
              
//               return Math.round(newLevel);
//             });
//           }, 15000); // Update every 15 seconds for realistic feel
//         }
//       } catch (error) {
//         console.log("Battery API error, using universal fallback:", error);
//         // Universal fallback for all browsers
//         let simulatedLevel = 85;
//         batteryInterval = setInterval(() => {
//           setBatteryLevel(prev => {
//             const newLevel = Math.max(0, prev - 0.1);
//             if (newLevel <= 0) return 85;
//             return Math.round(newLevel);
//           });
//         }, 30000);
//       }
//     };

//     updateBatteryStatus();

//     return () => {
//       if (batteryInterval) clearInterval(batteryInterval);
//     };
//   }, []);

//   // FIXED: Track current scroll position for active section with better threshold
//   useEffect(() => {
//     if (!isAgentActivated) return;

//     const handleScroll = () => {
//       if (isNavigating) return; // Don't update active section while navigating
      
//       const sections = ['about', 'skills', 'experience', 'education', 'projects', 'certifications', 'contact'];
//       const scrollPosition = window.scrollY + window.innerHeight * 0.3; // Better threshold
//       let currentActive = "";
//       let closestDistance = Infinity;

//       for (const sectionId of sections) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionBottom = sectionTop + section.offsetHeight;
//           const sectionMiddle = sectionTop + (section.offsetHeight / 2);
          
//           // Calculate distance from viewport center
//           const distanceFromCenter = Math.abs(scrollPosition - sectionMiddle);
          
//           // Check if section is in viewport (with 50% threshold)
//           if (scrollPosition >= sectionTop - 100 && scrollPosition <= sectionBottom + 100) {
//             if (distanceFromCenter < closestDistance) {
//               closestDistance = distanceFromCenter;
//               currentActive = sectionId;
//             }
//           }
//         }
//       }

//       // Only update if it's been at least 500ms since last click
//       const now = Date.now();
//       if (now - lastClickTime > 500 && currentActive) {
//         setActiveSection(currentActive);
//       }
//     };

//     // Throttle scroll events
//     let scrollTimeout;
//     const throttledScroll = () => {
//       if (scrollTimeout) clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(handleScroll, 150);
//     };

//     window.addEventListener('scroll', throttledScroll);
//     handleScroll(); // Initial check

//     return () => {
//       window.removeEventListener('scroll', throttledScroll);
//       if (scrollTimeout) clearTimeout(scrollTimeout);
//     };
//   }, [isAgentActivated, lastClickTime, isNavigating]);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobileView(isMobile);
//     };
//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, []);

//   // Preload sounds
//   useEffect(() => {
//     // Initialize audio elements
//     try {
//       sound1Ref.current = new Audio('/sounds/Sound 1.mp3');
//       sound2Ref.current = new Audio('/sounds/Sound 2.mp3');
      
//       if (sound1Ref.current) sound1Ref.current.volume = 0.3;
//       if (sound2Ref.current) sound2Ref.current.volume = 0.3;
      
//       // Preload audio for faster playback
//       const preloadAudio = async () => {
//         try {
//           if (sound1Ref.current) {
//             sound1Ref.current.preload = 'auto';
//           }
//           if (sound2Ref.current) {
//             sound2Ref.current.preload = 'auto';
//           }
//         } catch (error) {
//           console.log("Audio preload failed, will load on play:", error);
//         }
//       };
      
//       preloadAudio();
//     } catch (error) {
//       console.log("Audio initialization error:", error);
//     }

//     return () => {
//       if (sound1Ref.current) {
//         sound1Ref.current.pause();
//         sound1Ref.current = null;
//       }
//       if (sound2Ref.current) {
//         sound2Ref.current.pause();
//         sound2Ref.current = null;
//       }
//     };
//   }, []);

//   // Typewriter effect
//   const [quoteText, setQuoteText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const typewriterStartedRef = useRef(false);
//   const fullQuote = "MY GAME, MY PRESENCE";

//   useEffect(() => {
//     if (!isAgentActivated && !typewriterStartedRef.current) {
//       typewriterStartedRef.current = true;
//       setIsTyping(true);
//       setQuoteText("");

//       let currentIndex = 0;
//       const typeWriter = () => {
//         if (currentIndex < fullQuote.length) {
//           setQuoteText(fullQuote.substring(0, currentIndex + 1));
//           currentIndex++;
//           setTimeout(typeWriter, 80);
//         } else {
//           setIsTyping(false);
//         }
//       };
//       setTimeout(typeWriter, 500);
//     }

//     if (isAgentActivated) {
//       typewriterStartedRef.current = false;
//       setIsTyping(false);
//       setQuoteText("");
//     }
//   }, [isAgentActivated]);

//   // Main effect
//   useEffect(() => {
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     window.isPortfolioAgentActivated = isAgentActivated;

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Get female voice
//   const getFemaleVoice = () => {
//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") ||
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("samantha")
//     );
//   };

//   // Speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Speak welcome message
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) message.voice = femaleVoice;
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       window.speechSynthesis.speak(message);
//     };

//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         speak();
//       }, { once: true });
//     } else {
//       speak();
//     }
//   };

//   // Activate portfolio agent
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 50);
//   };

//   // Speak navigation message
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking || !('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();
//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Play Sound 1 - Hamburger menu sound
//   const playSound1 = () => {
//     if (!sound1Ref.current) return;
    
//     try {
//       sound1Ref.current.currentTime = 0;
//       sound1Ref.current.play().catch(e => {
//         console.log("Sound 1 play failed:", e);
//         // Fallback: create new audio element
//         try {
//           const audio = new Audio('/sounds/Sound 1.mp3');
//           audio.volume = 0.3;
//           audio.play();
//         } catch (fallbackError) {
//           console.log("Fallback audio also failed:", fallbackError);
//         }
//       });
//     } catch (error) {
//       console.log("Sound 1 audio error:", error);
//     }
//   };

//   // Play Sound 2 - Desktop hover sound
//   const playSound2 = () => {
//     if (!sound2Ref.current) return;
    
//     try {
//       sound2Ref.current.currentTime = 0;
//       sound2Ref.current.play().catch(e => {
//         console.log("Sound 2 play failed:", e);
//         // Fallback: create new audio element
//         try {
//           const audio = new Audio('/sounds/Sound 2.mp3');
//           audio.volume = 0.3;
//           audio.play();
//         } catch (fallbackError) {
//           console.log("Fallback audio also failed:", fallbackError);
//         }
//       });
//     } catch (error) {
//       console.log("Sound 2 audio error:", error);
//     }
//   };

//   // Highlight section with border
//   const highlightSectionWithBorder = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (!section) return;

//     // Save original styles
//     const originalBorder = section.style.border;
//     const originalBoxShadow = section.style.boxShadow;
//     const originalTransition = section.style.transition;
//     const originalPosition = section.style.position;

//     // Add blue glowing border
//     section.style.border = '3px solid #00ccff';
//     section.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6)';
//     section.style.transition = 'all 0.3s ease';
//     section.style.position = 'relative';
    
//     // Add pulse animation
//     section.style.animation = 'agent-border-pulse 0.5s ease-in-out 4';

//     // Remove after 3 seconds
//     setTimeout(() => {
//       section.style.border = originalBorder;
//       section.style.boxShadow = originalBoxShadow;
//       section.style.transition = originalTransition;
//       section.style.position = originalPosition;
//       section.style.animation = '';
//     }, 3000);
//   };

//   // FIXED: Menu click handler - SIMPLIFIED and WORKING navigation
//   const handleMenuItemClick = (sectionId, label) => {
//     console.log(`Clicked: ${sectionId} - ${label}`);
    
//     if (!isAgentActivated || isNavigating) return;

//     // Set navigating flag
//     setIsNavigating(true);
    
//     // Record click time
//     const clickTime = Date.now();
//     setLastClickTime(clickTime);
    
//     // Set active section immediately
//     setActiveSection(sectionId);
    
//     // Close mobile menu
//     setIsOpen(false);
    
//     // Check if user is already in the same section
//     const isAlreadyInSection = activeSection === sectionId;
    
//     // Speak appropriate message
//     if (isAlreadyInSection) {
//       speakNavigation(`You're in ${label} section`);
//     } else {
//       speakNavigation(`Navigating to ${label} section`);
//     }
    
//     // Apply blue border animation
//     highlightSectionWithBorder(sectionId);
    
//     // Wait a tiny bit for menu to close, then navigate
//     setTimeout(() => {
//       const section = document.getElementById(sectionId);
      
//       if (section) {
//         console.log(`Section found: ${sectionId}, scrolling now...`);
        
//         // Get navbar height for offset - more reliable calculation
//         const navbar = document.querySelector('nav');
//         const navbarHeight = navbar ? navbar.offsetHeight : 80;
        
//         // METHOD 1: Direct scrollIntoView with offset (Most reliable)
//         const scrollToSection = () => {
//           const sectionTop = section.offsetTop;
//           const scrollPosition = Math.max(0, sectionTop - navbarHeight - 10); // 10px padding
          
//           console.log(`Scrolling to position: ${scrollPosition}px`);
          
//           window.scrollTo({
//             top: scrollPosition,
//             behavior: 'smooth'
//           });
          
//           // Verify scroll after completion
//           setTimeout(() => {
//             console.log(`Scroll completed. Current position: ${window.scrollY}px`);
//             setIsNavigating(false);
//           }, 800);
//         };
        
//         // METHOD 2: Alternative using scrollIntoView with custom behavior
//         const scrollWithOffset = () => {
//           const yOffset = -navbarHeight - 10;
//           const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
//           window.scrollTo({
//             top: y,
//             behavior: 'smooth'
//           });
          
//           setTimeout(() => {
//             setIsNavigating(false);
//           }, 800);
//         };
        
//         // Try both methods with fallback
//         try {
//           scrollToSection();
//         } catch (error) {
//           console.log("Method 1 failed, trying method 2:", error);
//           try {
//             scrollWithOffset();
//           } catch (error2) {
//             console.log("Method 2 failed, using basic scrollIntoView:", error2);
//             // Last resort: basic scrollIntoView
//             section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             setTimeout(() => {
//               setIsNavigating(false);
//             }, 800);
//           }
//         }
        
//       } else {
//         console.error(`Section not found: ${sectionId}`);
        
//         // Try to find section by other means
//         setTimeout(() => {
//           const allSections = document.querySelectorAll('section, div[id]');
//           let foundSection = null;
          
//           for (const sec of allSections) {
//             if (sec.id === sectionId) {
//               foundSection = sec;
//               break;
//             }
//           }
          
//           if (foundSection) {
//             console.log(`Found section via querySelector: ${sectionId}`);
//             foundSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//           } else {
//             console.error(`Section ${sectionId} not found anywhere in DOM`);
            
//             // Create a temporary scroll to indicate failure
//             if (sectionId === 'about') {
//               window.scrollTo({ top: 0, behavior: 'smooth' });
//             } else if (sectionId === 'contact') {
//               window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
//             }
//           }
          
//           setIsNavigating(false);
//         }, 100);
//       }
//     }, 100); // Increased delay to ensure menu closes
//   };

//   // Hamburger menu click with sound
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
    
//     // PLAY SOUND 1 when hamburger menu is clicked (open/close)
//     playSound1();
    
//     setIsOpen(!isOpen);
//   };

//   // Desktop icon hover handler
//   const handleDesktopIconHover = () => {
//     if (!isAgentActivated || isMobileView) return;
    
//     // PLAY SOUND 2 when hovering desktop icons
//     playSound2();
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.cancel();
//     }
    
//     const utterance = new SpeechSynthesisUtterance("Site is restarted");
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       utterance.voice = femaleVoice;
//     }
//     utterance.pitch = 1.1;
//     utterance.rate = 1;
//     utterance.volume = 1;
    
//     setIsSpeaking(true);
    
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 300);
//     };
    
//     utterance.onerror = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 1500);
//     };
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.speak(utterance);
//     } else {
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 500);
//     }
//   };

//   // Menu items
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} /> },
//     { id: "skills", label: "Skills", icon: <FiCode size={30} /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} /> },
//     { id: "projects", label: "Projects", icon: <FiFolder size={24} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} /> },
//   ];

//   return (
//     <>
//       <SecurityAgent
//         isAgentActivated={isAgentActivated}
//         speakSecurityMessage={speakSecurityMessage}
//       />

//       {/* Welcome Card */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//           style={{ userSelect: 'none', pointerEvents: 'auto' }}
//           onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//             style={{
//               userSelect: 'none',
//               borderColor: '#00FF00',
//               boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//             }}
//             onClick={(e) => e.stopPropagation()}>

//             <div className="absolute inset-0 rounded-2xl"
//               style={{
//                 border: '2px solid transparent',
//                 background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 animation: 'border-glow 3s linear infinite'
//               }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//           style={{ userSelect: 'none' }}
//           onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg mb-8" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all interactive features. For the complete voice-guided experience, ensure your device volume is turned up
//             </p>

//             <div className="mt-8">
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
//                 style={{
//                   color: '#00ccff',
//                   textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1.5px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                   minHeight: '1.5em',
//                 }}>
//                 {quoteText}
//                 {isTyping && (
//                   <span className="typewriter-cursor" style={{
//                     display: 'inline-block',
//                     width: '2px',
//                     height: '1.2em',
//                     backgroundColor: '#00ccff',
//                     marginLeft: '2px',
//                     verticalAlign: 'text-bottom',
//                     animation: 'blink 1s infinite'
//                   }}></span>
//                 )}
//               </div>

//               <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
//                 style={{
//                   color: '#66ccff',
//                   textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                 }}>
//                 - ARSHAD WASIB SHAIK
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <SocialCube />

//       {/* Main Navbar */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}>
//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-15px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-26 h-26 rounded-full object-cover"
//               style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger Icon */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"} relative`}
//             onClick={handleHamburgerClick}>
//             {isOpen ? (
//               <div className="relative">
//                 <FiX size={28} className="drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]" />
//                 <div className="absolute inset-0 animate-ping rounded-full bg-red-500/30" style={{ animationDuration: '1.5s' }}></div>
//               </div>
//             ) : (
//               <div className="relative">
//                 <FiMenu size={28} className="drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]" />
//                 <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/20" style={{ animationDuration: '2s' }}></div>
//               </div>
//             )}
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} className="group relative" style={{ userSelect: 'none' }}>
//                 <button
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   onMouseEnter={handleDesktopIconHover}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${activeSection === item.id
//                       ? "text-[#ff0404] scale-110 pulse-animation"
//                       : "text-[#00FF00] hover:scale-110"
//                     }`}
//                   disabled={isNavigating}
//                 >
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {React.cloneElement(item.icon, { 
//                       style: { 
//                         color: activeSection === item.id ? '#ff0404' : '#00FF00',
//                         opacity: isNavigating ? 0.7 : 1
//                       }
//                     })}
//                   </div>
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full text-[#ffff] font-extrabold py-4 px-3 space-y-3 z-40"
//             style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               userSelect: 'none',
//               background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
//               backdropFilter: 'blur(20px) saturate(180%)',
//               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//               border: '2px solid rgba(0, 150, 255, 0.4)',
//               borderTop: 'none',
//               borderLeft: 'none',
//               borderRight: 'none',
//               borderBottomLeftRadius: '12px',
//               borderBottomRightRadius: '12px',
//               boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
//               position: 'fixed',
//               overflowY: 'scroll',
//               WebkitOverflowScrolling: 'touch',
//               maxHeight: 'calc(100vh - 72px)',
//               minHeight: 'auto',
//               scrollbarWidth: 'thin',
//               scrollbarColor: 'rgba(0, 200, 255, 0.6) rgba(0, 20, 60, 0.3)',
//             }}>

//             {/* Header with Interface Title */}
//             <div className="relative p-4 border-b border-cyan-500/40"
//               style={{
//                 background: 'linear-gradient(90deg, transparent, rgba(0, 150, 255, 0.15), transparent)',
//               }}>
//               <div className="flex justify-between items-center">
//                 <div className="text-cyan-300 font-bold text-lg tracking-wider flex items-center">
//                   <span className="mr-2">🔷</span> HOLOGRAPHIC INTERFACE V.2.0 <span className="ml-2">🔷</span>
//                 </div>
//               </div>
              
//               {/* System Status */}
//               <div className="mt-2 flex items-center justify-between text-xs">
//                 <div className="flex items-center space-x-2">
//                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//                   <span className="text-green-400 font-mono">[⚠️] SYSTEM: ONLINE</span>
//                 </div>
//                 <div className="text-cyan-300 font-mono">
//                   [{batteryCharging ? '⚡' : '🔋'}] {batteryCharging ? 'CHARGING' : 'BATTERY'} {batteryLevel}%
//                 </div>
//               </div>
              
//               {/* Universal Battery Visual - Works in all browsers */}
//               <div className="mt-2 w-full bg-gray-900/50 rounded-full h-2 overflow-hidden">
//                 <div 
//                   className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-1000 ease-out"
//                   style={{ width: `${batteryLevel}%` }}
//                 >
//                   {/* Animated shimmer effect */}
//                   <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
//                 </div>
//                 {/* Charging indicator */}
//                 {batteryCharging && (
//                   <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-bold">
//                     ⚡
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Iron Man Glassy Screen Grid Pattern */}
//             <div className="absolute inset-0 opacity-20 pointer-events-none"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                 backgroundSize: '30px 30px'
//               }} />

//             {/* Glowing Border Effect */}
//             <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
//               style={{
//                 boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
//                 animation: 'pulse 2s infinite'
//               }} />

//             <ul className="flex flex-col items-center space-y-3 text-center relative z-10 pb-6">
//               {menuItems.map((item) => (
//                 <li key={item.id} className="flex items-center space-x-2 cursor-pointer w-full justify-center" style={{ userSelect: 'none' }}>
//                   <button
//                     onClick={() => {
//                       console.log('Mobile menu button clicked:', item.id, item.label);
//                       handleMenuItemClick(item.id, item.label);
//                     }}
//                     className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 w-full justify-center group relative ${activeSection === item.id ? "pulse-animation" : ""}`}
//                     style={{
//                       background: activeSection === item.id
//                         ? 'rgba(255, 0, 0, 0.2)'
//                         : 'rgba(255, 255, 255, 0.05)',
//                       border: activeSection === item.id
//                         ? '2px solid rgba(255, 0, 0, 0.7)'
//                         : '1px solid rgba(255, 255, 255, 0.1)',
//                       boxShadow: activeSection === item.id
//                         ? '0 0 20px rgba(255, 0, 0, 0.7)'
//                         : 'none',
//                       maxWidth: '90vw',
//                       minHeight: '56px',
//                       color: activeSection === item.id ? '#ff0404' : '#ffffff',
//                       opacity: isNavigating ? 0.7 : 1
//                     }}
//                     disabled={isNavigating}
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {React.cloneElement(item.icon, { 
//                         style: { 
//                           color: activeSection === item.id ? '#ff0404' : '#ffffff'
//                         }
//                       })}
//                     </div>
//                     <span className="font-semibold tracking-wide text-sm sm:text-base">{item.label.toUpperCase()}</span>

//                     {/* Active indicator dot */}
//                     {activeSection === item.id && (
//                       <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
//                     )}

//                     {/* Navigation loading indicator */}
//                     {isNavigating && activeSection === item.id && (
//                       <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
//                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       </div>
//                     )}

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes border-glow {
//           0% { background-position: -200% 50%; }
//           100% { background-position: 200% 50%; }
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
//           }
//           50% {
//             opacity: 0.7;
//             box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
//           }
//         }
        
//         /* Red Pulse Animation for Active Icons */
//         @keyframes pulse-red {
//           0%, 100% {
//             text-shadow: 0 0 10px rgba(255, 4, 4, 0.8), 0 0 20px rgba(255, 0, 0, 0.6);
//             transform: scale(1.1);
//           }
//           50% {
//             text-shadow: 0 0 20px rgba(255, 4, 4, 1), 0 0 40px rgba(255, 0, 0, 0.8);
//             transform: scale(1.15);
//           }
//         }
        
//         .pulse-animation {
//           animation: pulse-red 2s infinite;
//         }
        
//         /* Shimmer effect for battery */
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(300%); }
//         }
        
//         .animate-shimmer {
//           animation: shimmer 2s infinite linear;
//         }
        
//         /* Blue Border Pulse Animation */
//         @keyframes agent-border-pulse {
//           0%, 100% {
//             border-color: #00ccff;
//             box-shadow: 0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6);
//             opacity: 1;
//           }
//           50% {
//             border-color: #00ffff;
//             box-shadow: 0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 200, 255, 0.8);
//             opacity: 0.8;
//           }
//         }
        
//         /* Spinner animation */
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
        
//         .animate-spin {
//           animation: spin 1s linear infinite;
//         }
        
//         /* Custom scrollbar */
//         .lg\\:hidden.fixed::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-track {
//           background: rgba(0, 20, 60, 0.3);
//           border-radius: 4px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb {
//           background: rgba(0, 200, 255, 0.6);
//           border-radius: 4px;
//           border: 1px solid rgba(0, 200, 255, 0.3);
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 200, 255, 0.8);
//           box-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
//         }
        
//         /* Mobile optimizations */
//         @media (max-width: 1023px) {
//           .lg\\:hidden button {
//             min-height: 56px;
//             min-width: 56px;
//             -webkit-tap-highlight-color: rgba(0, 200, 255, 0.3);
//             touch-action: manipulation;
//           }
          
//           /* Landscape mode */
//           @media (orientation: landscape) and (max-height: 500px) {
//             .lg\\:hidden.fixed {
//               max-height: 60vh !important;
//             }
//           }
//         }
        
//         /* Desktop */
//         @media (min-width: 1024px) {
//           .lg\\:hidden {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;



















// // Navbars.jsx
// import React, { useEffect, useState, useRef } from 'react';
// import { FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiBook, FiMail, FiAward } from 'react-icons/fi';
// import SocialCube from './SocialCube';
// import SecurityAgent from './SecurityAgent';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showWelcomeCard, setShowWelcomeCard] = useState(false);
//   const [isAgentActivated, setIsAgentActivated] = useState(false);
//   const [navAnimation, setNavAnimation] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [batteryLevel, setBatteryLevel] = useState(85);
//   const [batteryCharging, setBatteryCharging] = useState(false);
//   const [lastClickTime, setLastClickTime] = useState(0);
//   const [isNavigating, setIsNavigating] = useState(false);
//   const [clickedSection, setClickedSection] = useState(null); // NEW: Track clicked section

//   // Audio refs for sounds
//   const sound1Ref = useRef(null);
//   const sound2Ref = useRef(null);

//   // FIXED: Universal Battery Status for all browsers including Brave
//   useEffect(() => {
//     let batteryInterval;
//     let isBraveBrowser = false;
    
//     // Check if Brave browser (has specific properties)
//     if (navigator.brave && typeof navigator.brave.isBrave === 'function') {
//       isBraveBrowser = true;
//     }
    
//     const updateBatteryStatus = async () => {
//       try {
//         // Try Battery Status API first
//         if ('getBattery' in navigator && !isBraveBrowser) {
//           const battery = await navigator.getBattery();
//           const level = Math.round(battery.level * 100);
//           setBatteryLevel(level);
//           setBatteryCharging(battery.charging);
          
//           battery.addEventListener('levelchange', () => {
//             const newLevel = Math.round(battery.level * 100);
//             setBatteryLevel(newLevel);
//           });
          
//           battery.addEventListener('chargingchange', () => {
//             setBatteryCharging(battery.charging);
//           });
          
//         } else {
//           // For Brave and other browsers without Battery API
//           // Use a smart simulated battery that works across all browsers
//           let simulatedLevel = 85;
//           let isCharging = false;
          
//           // Try to get real battery info for Chrome
//           if (window.navigator.getBattery) {
//             try {
//               const battery = await window.navigator.getBattery();
//               simulatedLevel = Math.round(battery.level * 100);
//               isCharging = battery.charging;
//             } catch (e) {
//               console.log("Falling back to simulated battery");
//             }
//           }
          
//           setBatteryLevel(simulatedLevel);
//           setBatteryCharging(isCharging);
          
//           // Smart simulation for all browsers
//           batteryInterval = setInterval(() => {
//             setBatteryLevel(prev => {
//               let newLevel;
              
//               // If charging, increase battery
//               if (Math.random() > 0.7) { // 30% chance of charging
//                 setBatteryCharging(true);
//                 newLevel = Math.min(100, prev + 0.5);
//               } else {
//                 setBatteryCharging(false);
//                 newLevel = Math.max(0, prev - 0.2);
                
//                 // Reset to 85% when empty
//                 if (newLevel <= 0) {
//                   newLevel = 85;
//                   // Random charging start
//                   setTimeout(() => {
//                     setBatteryCharging(true);
//                   }, 2000);
//                 }
//               }
              
//               return Math.round(newLevel);
//             });
//           }, 15000); // Update every 15 seconds for realistic feel
//         }
//       } catch (error) {
//         console.log("Battery API error, using universal fallback:", error);
//         // Universal fallback for all browsers
//         let simulatedLevel = 85;
//         batteryInterval = setInterval(() => {
//           setBatteryLevel(prev => {
//             const newLevel = Math.max(0, prev - 0.1);
//             if (newLevel <= 0) return 85;
//             return Math.round(newLevel);
//           });
//         }, 30000);
//       }
//     };

//     updateBatteryStatus();

//     return () => {
//       if (batteryInterval) clearInterval(batteryInterval);
//     };
//   }, []);

//   // FIXED: Improved scroll detection - Only update activeSection when section is actually at/near top
//   useEffect(() => {
//     if (!isAgentActivated) return;

//     const handleScroll = () => {
//       if (isNavigating) return; // Don't update active section while navigating
      
//       const sections = ['about', 'skills', 'experience', 'education', 'projects', 'certifications', 'contact'];
//       const scrollPosition = window.scrollY;
//       const viewportHeight = window.innerHeight;
//       const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      
//       let currentActive = "";
//       let closestToTop = Infinity;

//       for (const sectionId of sections) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionBottom = sectionTop + section.offsetHeight;
          
//           // Calculate how close the section is to the top (after navbar)
//           const distanceFromTop = Math.abs(scrollPosition - (sectionTop - navbarHeight - 20));
          
//           // Check if section is in viewport (more strict check)
//           // Section is considered "active" when its top is near the top of viewport
//           const isSectionAtTop = 
//             scrollPosition >= sectionTop - navbarHeight - 100 && 
//             scrollPosition <= sectionTop - navbarHeight + 100;
          
//           // Section is in viewport
//           const isSectionInViewport = 
//             scrollPosition + navbarHeight + 100 >= sectionTop && 
//             scrollPosition + 100 <= sectionBottom;
          
//           if (isSectionInViewport) {
//             // Priority: section at the top > closest to top
//             if (isSectionAtTop) {
//               currentActive = sectionId;
//               break; // Found the section at top, stop checking
//             } else if (distanceFromTop < closestToTop) {
//               closestToTop = distanceFromTop;
//               currentActive = sectionId;
//             }
//           }
//         }
//       }

//       // Only update if we found a section and it's been some time since last click
//       const now = Date.now();
//       if (now - lastClickTime > 300 && currentActive) {
//         setActiveSection(currentActive);
//         // Clear clickedSection once scroll detection picks it up
//         if (clickedSection === currentActive) {
//           setClickedSection(null);
//         }
//       }
//     };

//     // Throttle scroll events
//     let scrollTimeout;
//     const throttledScroll = () => {
//       if (scrollTimeout) clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(handleScroll, 50); // Faster detection
//     };

//     window.addEventListener('scroll', throttledScroll);
//     handleScroll(); // Initial check

//     return () => {
//       window.removeEventListener('scroll', throttledScroll);
//       if (scrollTimeout) clearTimeout(scrollTimeout);
//     };
//   }, [isAgentActivated, lastClickTime, isNavigating, clickedSection]);

//   // Check if mobile/tablet view
//   useEffect(() => {
//     const checkMobileView = () => {
//       const isMobile = window.innerWidth < 1024;
//       setIsMobileView(isMobile);
//     };
//     checkMobileView();
//     window.addEventListener('resize', checkMobileView);
//     return () => window.removeEventListener('resize', checkMobileView);
//   }, []);

//   // Preload sounds
//   useEffect(() => {
//     // Initialize audio elements
//     try {
//       sound1Ref.current = new Audio('/sounds/Sound 1.mp3');
//       sound2Ref.current = new Audio('/sounds/Sound 2.mp3');
      
//       if (sound1Ref.current) sound1Ref.current.volume = 0.3;
//       if (sound2Ref.current) sound2Ref.current.volume = 0.3;
      
//       // Preload audio for faster playback
//       const preloadAudio = async () => {
//         try {
//           if (sound1Ref.current) {
//             sound1Ref.current.preload = 'auto';
//           }
//           if (sound2Ref.current) {
//             sound2Ref.current.preload = 'auto';
//           }
//         } catch (error) {
//           console.log("Audio preload failed, will load on play:", error);
//         }
//       };
      
//       preloadAudio();
//     } catch (error) {
//       console.log("Audio initialization error:", error);
//     }

//     return () => {
//       if (sound1Ref.current) {
//         sound1Ref.current.pause();
//         sound1Ref.current = null;
//       }
//       if (sound2Ref.current) {
//         sound2Ref.current.pause();
//         sound2Ref.current = null;
//       }
//     };
//   }, []);

//   // Typewriter effect
//   const [quoteText, setQuoteText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const typewriterStartedRef = useRef(false);
//   const fullQuote = "MY GAME, MY PRESENCE";

//   useEffect(() => {
//     if (!isAgentActivated && !typewriterStartedRef.current) {
//       typewriterStartedRef.current = true;
//       setIsTyping(true);
//       setQuoteText("");

//       let currentIndex = 0;
//       const typeWriter = () => {
//         if (currentIndex < fullQuote.length) {
//           setQuoteText(fullQuote.substring(0, currentIndex + 1));
//           currentIndex++;
//           setTimeout(typeWriter, 80);
//         } else {
//           setIsTyping(false);
//         }
//       };
//       setTimeout(typeWriter, 500);
//     }

//     if (isAgentActivated) {
//       typewriterStartedRef.current = false;
//       setIsTyping(false);
//       setQuoteText("");
//     }
//   }, [isAgentActivated]);

//   // Main effect
//   useEffect(() => {
//     if (!sessionStorage.getItem("hasSeenWelcomeCard")) {
//       setTimeout(() => {
//         setShowWelcomeCard(true);
//       }, 1000);
//     }

//     if (sessionStorage.getItem("isAgentActivated") === "true") {
//       setIsAgentActivated(true);
//       setNavAnimation(true);
//     }

//     window.isPortfolioAgentActivated = isAgentActivated;

//     const handleScroll = () => {
//       if (isAgentActivated) {
//         setIsScrolled(window.scrollY > 50);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isAgentActivated]);

//   // Get female voice
//   const getFemaleVoice = () => {
//     const voices = window.speechSynthesis.getVoices();
//     return voices.find((voice) =>
//       voice.name.toLowerCase().includes("female") ||
//       voice.name.toLowerCase().includes("zira") ||
//       voice.name.toLowerCase().includes("samantha")
//     );
//   };

//   // Speak security message
//   const speakSecurityMessage = () => {
//     if (!window.isPortfolioAgentActivated) return;

//     const message = "Sorry, I won't allow you to inspect and copy text, image at any more, highly encrypted by the Developer - Arshad Shaik.";
//     const msg = new SpeechSynthesisUtterance(message);

//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       msg.voice = femaleVoice;
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     } else {
//       msg.pitch = 1.1;
//       msg.rate = 1;
//       window.speechSynthesis.cancel();
//       window.speechSynthesis.speak(msg);
//     }
//   };

//   // Speak welcome message
//   const speakWelcomeMessage = () => {
//     if (!('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();

//     const speak = () => {
//       const message = new SpeechSynthesisUtterance("Hi, Welcome to Arshad Portfolio, I'm Aashisyaa Arshad Portfolio Agent, Thank you for activating.");
//       const femaleVoice = getFemaleVoice();
//       if (femaleVoice) message.voice = femaleVoice;
//       message.pitch = 1.1;
//       message.rate = 1;
//       message.volume = 1.0;

//       window.speechSynthesis.speak(message);
//     };

//     const voices = window.speechSynthesis.getVoices();
//     if (voices.length === 0) {
//       window.speechSynthesis.addEventListener('voiceschanged', () => {
//         speak();
//       }, { once: true });
//     } else {
//       speak();
//     }
//   };

//   // Activate portfolio agent
//   const activatePortfolioAgent = () => {
//     setShowWelcomeCard(false);
//     setIsAgentActivated(true);
//     sessionStorage.setItem("hasSeenWelcomeCard", "true");
//     sessionStorage.setItem("isAgentActivated", "true");
//     window.isPortfolioAgentActivated = true;

//     setTimeout(() => {
//       setNavAnimation(true);
//     }, 300);

//     setTimeout(() => {
//       speakWelcomeMessage();
//     }, 50);
//   };

//   // Speak navigation message
//   const speakNavigation = (text) => {
//     if (!isAgentActivated || isSpeaking || !('speechSynthesis' in window)) return;

//     window.speechSynthesis.cancel();
//     setIsSpeaking(true);

//     const message = new SpeechSynthesisUtterance(text);
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) message.voice = femaleVoice;
//     message.pitch = 1.1;
//     message.rate = 1;

//     message.onend = () => {
//       setIsSpeaking(false);
//     };

//     message.onerror = () => {
//       setIsSpeaking(false);
//     };

//     window.speechSynthesis.speak(message);
//   };

//   // Play Sound 1 - Hamburger menu sound
//   const playSound1 = () => {
//     if (!sound1Ref.current) return;
    
//     try {
//       sound1Ref.current.currentTime = 0;
//       sound1Ref.current.play().catch(e => {
//         console.log("Sound 1 play failed:", e);
//         // Fallback: create new audio element
//         try {
//           const audio = new Audio('/sounds/Sound 1.mp3');
//           audio.volume = 0.3;
//           audio.play();
//         } catch (fallbackError) {
//           console.log("Fallback audio also failed:", fallbackError);
//         }
//       });
//     } catch (error) {
//       console.log("Sound 1 audio error:", error);
//     }
//   };

//   // Play Sound 2 - Desktop hover sound
//   const playSound2 = () => {
//     if (!sound2Ref.current) return;
    
//     try {
//       sound2Ref.current.currentTime = 0;
//       sound2Ref.current.play().catch(e => {
//         console.log("Sound 2 play failed:", e);
//         // Fallback: create new audio element
//         try {
//           const audio = new Audio('/sounds/Sound 2.mp3');
//           audio.volume = 0.3;
//           audio.play();
//         } catch (fallbackError) {
//           console.log("Fallback audio also failed:", fallbackError);
//         }
//       });
//     } catch (error) {
//       console.log("Sound 2 audio error:", error);
//     }
//   };

//   // Highlight section with border
//   const highlightSectionWithBorder = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (!section) return;

//     // Save original styles
//     const originalBorder = section.style.border;
//     const originalBoxShadow = section.style.boxShadow;
//     const originalTransition = section.style.transition;
//     const originalPosition = section.style.position;

//     // Add blue glowing border
//     section.style.border = '3px solid #00ccff';
//     section.style.boxShadow = '0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6)';
//     section.style.transition = 'all 0.3s ease';
//     section.style.position = 'relative';
    
//     // Add pulse animation
//     section.style.animation = 'agent-border-pulse 0.5s ease-in-out 4';

//     // Remove after 3 seconds
//     setTimeout(() => {
//       section.style.border = originalBorder;
//       section.style.boxShadow = originalBoxShadow;
//       section.style.transition = originalTransition;
//       section.style.position = originalPosition;
//       section.style.animation = '';
//     }, 3000);
//   };

//   // FIXED: Menu click handler - DON'T set activeSection immediately
//   const handleMenuItemClick = (sectionId, label) => {
//     console.log(`Clicked: ${sectionId} - ${label}`);
    
//     if (!isAgentActivated || isNavigating) return;

//     // Set navigating flag
//     setIsNavigating(true);
    
//     // Record click time and clicked section
//     const clickTime = Date.now();
//     setLastClickTime(clickTime);
//     setClickedSection(sectionId); // Track which section was clicked
    
//     // IMPORTANT: DO NOT setActiveSection here - let scroll detection handle it
    
//     // Close mobile menu
//     setIsOpen(false);
    
//     // Check if user is already in the same section
//     const isAlreadyInSection = activeSection === sectionId;
    
//     // Speak appropriate message
//     if (isAlreadyInSection) {
//       speakNavigation(`You're in ${label} section`);
//     } else {
//       speakNavigation(`Navigating to ${label} section`);
//     }
    
//     // Apply blue border animation
//     highlightSectionWithBorder(sectionId);
    
//     // Wait for menu to close, then navigate
//     setTimeout(() => {
//       const section = document.getElementById(sectionId);
      
//       if (section) {
//         console.log(`Section found: ${sectionId}, scrolling now...`);
        
//         // Get navbar height for offset
//         const navbar = document.querySelector('nav');
//         const navbarHeight = navbar ? navbar.offsetHeight : 80;
        
//         // Calculate exact scroll position - section should touch navbar
//         const sectionTop = section.offsetTop;
//         const scrollPosition = Math.max(0, sectionTop - navbarHeight - 10); // 10px padding
        
//         console.log(`Scrolling to position: ${scrollPosition}px (sectionTop: ${sectionTop}, navbarHeight: ${navbarHeight})`);
        
//         // Scroll to position where section touches navbar
//         window.scrollTo({
//           top: scrollPosition,
//           behavior: 'smooth'
//         });
        
//         // After scrolling is complete
//         setTimeout(() => {
//           console.log(`Scroll completed. Current position: ${window.scrollY}px`);
          
//           // Force a scroll event to trigger active section detection
//           window.dispatchEvent(new Event('scroll'));
          
//           // Clear navigating flag
//           setIsNavigating(false);
//         }, 1000);
        
//       } else {
//         console.error(`Section not found: ${sectionId}`);
//         setIsNavigating(false);
//         setClickedSection(null);
//       }
//     }, 100);
//   };

//   // Hamburger menu click with sound
//   const handleHamburgerClick = () => {
//     if (!isAgentActivated) return;
    
//     // PLAY SOUND 1 when hamburger menu is clicked (open/close)
//     playSound1();
    
//     setIsOpen(!isOpen);
//   };

//   // Desktop icon hover handler
//   const handleDesktopIconHover = () => {
//     if (!isAgentActivated || isMobileView) return;
    
//     // PLAY SOUND 2 when hovering desktop icons
//     playSound2();
//   };

//   // Logo click
//   const handleLogoClick = () => {
//     if (!isAgentActivated) return;
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.cancel();
//     }
    
//     const utterance = new SpeechSynthesisUtterance("Site is, restarting");
//     const femaleVoice = getFemaleVoice();
//     if (femaleVoice) {
//       utterance.voice = femaleVoice;
//     }
//     utterance.pitch = 1.1;
//     utterance.rate = 1;
//     utterance.volume = 1;
    
//     setIsSpeaking(true);
    
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 300);
//     };
    
//     utterance.onerror = () => {
//       setIsSpeaking(false);
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 1500);
//     };
    
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.speak(utterance);
//     } else {
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 500);
//     }
//   };

//   // Menu items
//   const menuItems = [
//     { id: "about", label: "About", icon: <FiUser size={24} /> },
//     { id: "skills", label: "Skills", icon: <FiCode size={30} /> },
//     { id: "experience", label: "Experience", icon: <FiBriefcase size={24} /> },
//     { id: "education", label: "Education", icon: <FiBook size={24} /> },
//     { id: "projects", label: "Projects", icon: <FiFolder size={24} /> },
//     { id: "certifications", label: "Certifications & Badges", icon: <FiAward size={24} /> },
//     { id: "contact", label: "Contact", icon: <FiMail size={24} /> },
//   ];

//   return (
//     <>
//       <SecurityAgent
//         isAgentActivated={isAgentActivated}
//         speakSecurityMessage={speakSecurityMessage}
//       />

//       {/* Welcome Card */}
//       {showWelcomeCard && (
//         <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8"
//           style={{ userSelect: 'none', pointerEvents: 'auto' }}
//           onClick={(e) => e.stopPropagation()}>
//           <div className="animate-slide-down bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl transform transition-all duration-1000 ease-out relative overflow-hidden"
//             style={{
//               userSelect: 'none',
//               borderColor: '#00FF00',
//               boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 30px rgba(0, 255, 0, 0.5)'
//             }}
//             onClick={(e) => e.stopPropagation()}>

//             <div className="absolute inset-0 rounded-2xl"
//               style={{
//                 border: '2px solid transparent',
//                 background: 'linear-gradient(90deg, transparent, #00FF00, transparent) border-box',
//                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 animation: 'border-glow 3s linear infinite'
//               }} />

//             <div className="text-center relative z-10">
//               <h3 className="text-white text-xl font-bold mb-3" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 🎙️ Portfolio Agent
//               </h3>
//               <p className="text-white/90 text-sm mb-4 leading-relaxed" style={{
//                 textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               }}>
//                 Please click the button below to activate my Portfolio Agent to unlock all features and experience the full voice-enabled portfolio.
//               </p>
//               <button onClick={activatePortfolioAgent}
//                 className="bg-[#00FF00] text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300 hover:drop-shadow-[0_10px_20px_rgba(0,255,0,0.8)] relative z-10"
//                 style={{ boxShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 20px #00FF00" }}>
//                 Activate Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Lock Overlay */}
//       {!isAgentActivated && (
//         <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center"
//           style={{ userSelect: 'none' }}
//           onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
//           <div className="text-center text-white p-8">
//             <h2 className="text-2xl font-bold mb-4" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               🔒 Portfolio Locked
//             </h2>
//             <p className="text-lg mb-8" style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//             }}>
//               Please activate the Portfolio Agent to unlock all interactive features. For the complete voice-guided experience, ensure your device volume is turned up
//             </p>

//             <div className="mt-8">
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 whitespace-nowrap overflow-visible"
//                 style={{
//                   color: '#00ccff',
//                   textShadow: '0 0 15px rgba(0, 200, 255, 0.9), 0 0 25px rgba(0, 150, 255, 0.7), 0 0 35px rgba(0, 100, 255, 0.5)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1.5px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                   minHeight: '1.5em',
//                 }}>
//                 {quoteText}
//                 {isTyping && (
//                   <span className="typewriter-cursor" style={{
//                     display: 'inline-block',
//                     width: '2px',
//                     height: '1.2em',
//                     backgroundColor: '#00ccff',
//                     marginLeft: '2px',
//                     verticalAlign: 'text-bottom',
//                     animation: 'blink 1s infinite'
//                   }}></span>
//                 )}
//               </div>

//               <div className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap overflow-visible mt-2"
//                 style={{
//                   color: '#66ccff',
//                   textShadow: '0 0 10px rgba(102, 204, 255, 0.9), 0 0 20px rgba(0, 150, 255, 0.6), 0 0 30px rgba(0, 100, 255, 0.4)',
//                   fontFamily: "'Arial', sans-serif",
//                   letterSpacing: '1px',
//                   padding: '0 10px',
//                   display: 'inline-block',
//                   maxWidth: '100%',
//                 }}>
//                 - ARSHAD WASIB SHAIK
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <SocialCube />

//       {/* Main Navbar */}
//       <nav className={`fixed z-50 transition-all duration-1000 ease-out px-[7vw] md:px-[9vw] lg:px-[10vw] w-full hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.9)] ${isScrolled ? "bg-white/5 backdrop-blur-lg shadow-lg " : "bg-black-200"
//         } ${!isAgentActivated ? 'opacity-0 -translate-y-full pointer-events-none' : ''} ${navAnimation ? 'translate-y-0 top-0 opacity-100' : 'translate-y-0 top-0'
//         }`}
//         style={{
//           userSelect: 'none',
//           transform: isAgentActivated && navAnimation ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
//         }}>
//         <div className="flex flex-wrap justify-between items-center py-4 w-full">
//           {/* Logo */}
//           <div className="cursor-pointer mt-[-15px]" onClick={handleLogoClick}>
//             <img src="src/assets/hero/Shaik.png" alt="Arshad" className="w-26 h-26 rounded-full object-cover"
//               style={{ pointerEvents: 'none', userSelect: 'none' }} />
//           </div>

//           {/* Hamburger Icon */}
//           <div className={`lg:hidden z-50 cursor-pointer ${isOpen ? "text-[#ff0000]" : "text-[#00FF00]"} relative`}
//             onClick={handleHamburgerClick}>
//             {isOpen ? (
//               <div className="relative">
//                 <FiX size={28} className="drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]" />
//                 <div className="absolute inset-0 animate-ping rounded-full bg-red-500/30" style={{ animationDuration: '1.5s' }}></div>
//               </div>
//             ) : (
//               <div className="relative">
//                 <FiMenu size={28} className="drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]" />
//                 <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/20" style={{ animationDuration: '2s' }}></div>
//               </div>
//             )}
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex flex-wrap space-x-6 lg:space-x-8 mt-[-85px]">
//             {menuItems.map((item) => (
//               <li key={item.id} className="group relative" style={{ userSelect: 'none' }}>
//                 <button
//                   onClick={() => handleMenuItemClick(item.id, item.label)}
//                   onMouseEnter={handleDesktopIconHover}
//                   className={`flex items-center justify-center cursor-pointer hover:text-[#ff0404] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] transition-all duration-300 ${activeSection === item.id
//                       ? "text-[#ff0404] scale-110 pulse-animation"
//                       : "text-[#00FF00] hover:scale-110"
//                     }`}
//                   disabled={isNavigating}
//                 >
//                   <div className="transition-transform duration-300 group-hover:scale-125 flex items-center justify-center w-6 h-6">
//                     {React.cloneElement(item.icon, { 
//                       style: { 
//                         color: activeSection === item.id ? '#ff0404' : '#00FF00',
//                         opacity: isNavigating ? 0.7 : 1
//                       }
//                     })}
//                   </div>
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {item.label}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden fixed top-[72px] left-0 w-full text-[#ffff] font-extrabold py-4 px-3 space-y-3 z-40"
//             style={{
//               textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
//               userSelect: 'none',
//               background: 'linear-gradient(135deg, rgba(0, 40, 85, 0.95) 0%, rgba(0, 20, 60, 0.98) 100%)',
//               backdropFilter: 'blur(20px) saturate(180%)',
//               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//               border: '2px solid rgba(0, 150, 255, 0.4)',
//               borderTop: 'none',
//               borderLeft: 'none',
//               borderRight: 'none',
//               borderBottomLeftRadius: '12px',
//               borderBottomRightRadius: '12px',
//               boxShadow: '0 0 100px rgba(0, 100, 255, 0.7), inset 0 0 50px rgba(0, 200, 255, 0.3)',
//               position: 'fixed',
//               overflowY: 'scroll',
//               WebkitOverflowScrolling: 'touch',
//               maxHeight: 'calc(100vh - 72px)',
//               minHeight: 'auto',
//               scrollbarWidth: 'thin',
//               scrollbarColor: 'rgba(0, 200, 255, 0.6) rgba(0, 20, 60, 0.3)',
//             }}>

//             {/* Header with Interface Title */}
//             <div className="relative p-4 border-b border-cyan-500/40"
//               style={{
//                 background: 'linear-gradient(90deg, transparent, rgba(0, 150, 255, 0.15), transparent)',
//               }}>
//               <div className="flex justify-between items-center">
//                 <div className="text-cyan-300 font-bold text-lg tracking-wider flex items-center">
//                   <span className="mr-2">🔷</span> HOLOGRAPHIC INTERFACE V.2.0 <span className="ml-2">🔷</span>
//                 </div>
//               </div>
              
//               {/* System Status */}
//               <div className="mt-2 flex items-center justify-between text-xs">
//                 <div className="flex items-center space-x-2">
//                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//                   <span className="text-green-400 font-mono">[⚠️] SYSTEM: ONLINE</span>
//                 </div>
//                 <div className="text-cyan-300 font-mono">
//                   [{batteryCharging ? '⚡' : '🔋'}] {batteryCharging ? 'CHARGING' : 'BATTERY'} {batteryLevel}%
//                 </div>
//               </div>
              
//               {/* Universal Battery Visual - Works in all browsers */}
//               <div className="mt-2 w-full bg-gray-900/50 rounded-full h-2 overflow-hidden">
//                 <div 
//                   className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-1000 ease-out"
//                   style={{ width: `${batteryLevel}%` }}
//                 >
//                   {/* Animated shimmer effect */}
//                   <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
//                 </div>
//                 {/* Charging indicator */}
//                 {batteryCharging && (
//                   <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-xs text-cyan-300 font-bold">
//                     ⚡
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Iron Man Glassy Screen Grid Pattern */}
//             <div className="absolute inset-0 opacity-20 pointer-events-none"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
//                 backgroundSize: '30px 30px'
//               }} />

//             {/* Glowing Border Effect */}
//             <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-b-lg pointer-events-none"
//               style={{
//                 boxShadow: 'inset 0 0 30px rgba(0, 200, 255, 0.3), 0 0 50px rgba(0, 150, 255, 0.5)',
//                 animation: 'pulse 2s infinite'
//               }} />

//             <ul className="flex flex-col items-center space-y-3 text-center relative z-10 pb-6">
//               {menuItems.map((item) => (
//                 <li key={item.id} className="flex items-center space-x-2 cursor-pointer w-full justify-center" style={{ userSelect: 'none' }}>
//                   <button
//                     onClick={() => {
//                       console.log('Mobile menu button clicked:', item.id, item.label);
//                       handleMenuItemClick(item.id, item.label);
//                     }}
//                     className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 w-full justify-center group relative ${activeSection === item.id ? "pulse-animation" : ""}`}
//                     style={{
//                       background: activeSection === item.id
//                         ? 'rgba(255, 0, 0, 0.2)'
//                         : 'rgba(255, 255, 255, 0.05)',
//                       border: activeSection === item.id
//                         ? '2px solid rgba(255, 0, 0, 0.7)'
//                         : '1px solid rgba(255, 255, 255, 0.1)',
//                       boxShadow: activeSection === item.id
//                         ? '0 0 20px rgba(255, 0, 0, 0.7)'
//                         : 'none',
//                       maxWidth: '90vw',
//                       minHeight: '56px',
//                       color: activeSection === item.id ? '#ff0404' : '#ffffff',
//                       opacity: isNavigating ? 0.7 : 1
//                     }}
//                     disabled={isNavigating}
//                   >
//                     <div className="flex items-center justify-center w-6 h-6">
//                       {React.cloneElement(item.icon, { 
//                         style: { 
//                           color: activeSection === item.id ? '#ff0404' : '#ffffff'
//                         }
//                       })}
//                     </div>
//                     <span className="font-semibold tracking-wide text-sm sm:text-base">{item.label.toUpperCase()}</span>

//                     {/* Active indicator dot */}
//                     {activeSection === item.id && (
//                       <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
//                     )}

//                     {/* Navigation loading indicator */}
//                     {isNavigating && clickedSection === item.id && (
//                       <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
//                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       </div>
//                     )}

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes border-glow {
//           0% { background-position: -200% 50%; }
//           100% { background-position: 200% 50%; }
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             box-shadow: inset 0 0 20px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 150, 255, 0.5);
//           }
//           50% {
//             opacity: 0.7;
//             box-shadow: inset 0 0 40px rgba(0, 200, 255, 0.5), 0 0 60px rgba(0, 150, 255, 0.7);
//           }
//         }
        
//         /* Red Pulse Animation for Active Icons */
//         @keyframes pulse-red {
//           0%, 100% {
//             text-shadow: 0 0 10px rgba(255, 4, 4, 0.8), 0 0 20px rgba(255, 0, 0, 0.6);
//             transform: scale(1.1);
//           }
//           50% {
//             text-shadow: 0 0 20px rgba(255, 4, 4, 1), 0 0 40px rgba(255, 0, 0, 0.8);
//             transform: scale(1.15);
//           }
//         }
        
//         .pulse-animation {
//           animation: pulse-red 2s infinite;
//         }
        
//         /* Shimmer effect for battery */
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(300%); }
//         }
        
//         .animate-shimmer {
//           animation: shimmer 2s infinite linear;
//         }
        
//         /* Blue Border Pulse Animation */
//         @keyframes agent-border-pulse {
//           0%, 100% {
//             border-color: #00ccff;
//             box-shadow: 0 0 20px rgba(0, 200, 255, 0.8), 0 0 40px rgba(0, 150, 255, 0.6);
//             opacity: 1;
//           }
//           50% {
//             border-color: #00ffff;
//             box-shadow: 0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 200, 255, 0.8);
//             opacity: 0.8;
//           }
//         }
        
//         /* Spinner animation */
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
        
//         .animate-spin {
//           animation: spin 1s linear infinite;
//         }
        
//         /* Custom scrollbar */
//         .lg\\:hidden.fixed::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-track {
//           background: rgba(0, 20, 60, 0.3);
//           border-radius: 4px;
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb {
//           background: rgba(0, 200, 255, 0.6);
//           border-radius: 4px;
//           border: 1px solid rgba(0, 200, 255, 0.3);
//         }
        
//         .lg\\:hidden.fixed::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 200, 255, 0.8);
//           box-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
//         }
        
//         /* Mobile optimizations */
//         @media (max-width: 1023px) {
//           .lg\\:hidden button {
//             min-height: 56px;
//             min-width: 56px;
//             -webkit-tap-highlight-color: rgba(0, 200, 255, 0.3);
//             touch-action: manipulation;
//           }
          
//           /* Landscape mode */
//           @media (orientation: landscape) and (max-height: 500px) {
//             .lg\\:hidden.fixed {
//               max-height: 60vh !important;
//             }
//           }
//         }
        
//         /* Desktop */
//         @media (min-width: 1024px) {
//           .lg\\:hidden {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;

// Completed..................

























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
              src="src/assets/hero/Shaik.png" 
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