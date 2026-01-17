// SecurityAgent.jsx - FIXED VERSION
import { useEffect } from 'react';

const SecurityAgent = ({ isAgentActivated, speakSecurityMessage }) => {
  // useEffect(() => {
  //   if (!isAgentActivated) return;

  //   // Detect if it's a mobile device
  //   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
  //   // Variables to track long press on mobile
  //   let longPressTimer = null;
  //   let isLongPress = false;
  //   const LONG_PRESS_DURATION = 500; // 500ms for long press detection

  //   // Function to block keyboard shortcuts for inspecting (DESKTOP ONLY)
  //   const blockDevToolsShortcuts = (e) => {
  //     // Block F12 key (opens dev tools in most browsers)
  //     if (e.key === 'F12') {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       speakSecurityMessage();
  //       return false;
  //     }
      
  //     // Block Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac) - Developer Tools
  //     if ((e.ctrlKey && e.shiftKey && e.key === 'I') || 
  //         (e.metaKey && e.altKey && e.key === 'i')) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       speakSecurityMessage();
  //       return false;
  //     }
      
  //     // Block Ctrl+Shift+J (Windows/Linux) or Cmd+Option+J (Mac) - Console
  //     if ((e.ctrlKey && e.shiftKey && e.key === 'J') || 
  //         (e.metaKey && e.altKey && e.key === 'j')) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       speakSecurityMessage();
  //       return false;
  //     }
      
  //     // Block Ctrl+Shift+C (Windows/Linux) or Cmd+Option+C (Mac) - Element Inspector
  //     if ((e.ctrlKey && e.shiftKey && e.key === 'C') || 
  //         (e.metaKey && e.altKey && e.key === 'c')) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       speakSecurityMessage();
  //       return false;
  //     }
      
  //     // Block Ctrl+U (Windows/Linux) or Cmd+Option+U (Mac) - View Source
  //     if ((e.ctrlKey && e.key === 'u') || 
  //         (e.metaKey && e.altKey && e.key === 'u')) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       speakSecurityMessage();
  //       return false;
  //     }
      
  //     // Block Ctrl+S (Windows/Linux) or Cmd+S (Mac) - Save Page
  //     if ((e.ctrlKey && e.key === 's') || 
  //         (e.metaKey && e.key === 's')) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       speakSecurityMessage();
  //       return false;
  //     }
      
  //     // Block Print Screen key
  //     if (e.key === 'PrintScreen') {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       speakSecurityMessage();
  //       return false;
  //     }
  //   };

  //   // 🔒 COMPREHENSIVE RIGHT-CLICK & COPY PROTECTION
  //   const preventUnauthorizedActions = (e) => {
  //     // Block right-click context menu (works on both desktop and mobile long-press)
  //     if (e.type === 'contextmenu') {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       speakSecurityMessage();
  //       return false;
  //     }

  //     // Handle mobile touch events differently
  //     if (isMobile) {
  //       // For touchstart - start long press timer
  //       if (e.type === 'touchstart') {
  //         isLongPress = false;
  //         longPressTimer = setTimeout(() => {
  //           isLongPress = true;
  //           // Long press detected - trigger security message
  //           speakSecurityMessage();
  //         }, LONG_PRESS_DURATION);
  //         return; // Allow normal touch start
  //       }
        
  //       // For touchend - clear long press timer
  //       if (e.type === 'touchend' || e.type === 'touchcancel') {
  //         if (longPressTimer) {
  //           clearTimeout(longPressTimer);
  //           longPressTimer = null;
  //         }
  //         // If it was a long press, prevent default actions
  //         if (isLongPress) {
  //           e.preventDefault();
  //           e.stopPropagation();
  //         }
  //         return;
  //       }
        
  //       // For touchmove (scrolling) - clear timer (not a long press)
  //       if (e.type === 'touchmove') {
  //         if (longPressTimer) {
  //           clearTimeout(longPressTimer);
  //           longPressTimer = null;
  //           isLongPress = false;
  //         }
  //         return; // Allow scrolling
  //       }
        
  //       // Allow all other mobile touch events (tap, swipe, etc.)
  //       if (e.type.includes('touch')) {
  //         return;
  //       }
  //     }

  //     // DESKTOP-ONLY PROTECTIONS (mobile already handled above)
  //     if (!isMobile) {
  //       // Block text selection on desktop
  //       if (e.type === 'selectstart' || e.type === 'mousedown') {
  //         // Check if it's a selection attempt
  //         if (window.getSelection().toString().length > 0) {
  //           e.preventDefault();
  //           e.stopPropagation();
  //           speakSecurityMessage();
  //           return false;
  //         }
  //       }

  //       // Block copy/cut actions on desktop
  //       if (e.type === 'copy' || e.type === 'cut') {
  //         e.preventDefault();
  //         e.stopPropagation();
  //         speakSecurityMessage();
  //         return false;
  //       }

  //       // Block drag actions for images on desktop
  //       if (e.type === 'dragstart') {
  //         e.preventDefault();
  //         e.stopPropagation();
  //         speakSecurityMessage();
  //         return false;
  //       }
  //     }
  //   };

  //   // Add event listeners for keyboard shortcuts (DESKTOP ONLY)
  //   if (!isMobile) {
  //     document.addEventListener('keydown', blockDevToolsShortcuts, true);
  //   }

  //   // Add appropriate event listeners based on device
  //   const desktopEvents = [
  //     'contextmenu', 'selectstart', 'mousedown', 
  //     'copy', 'cut', 'dragstart'
  //   ];
    
  //   const mobileEvents = [
  //     'contextmenu', 'touchstart', 'touchend', 
  //     'touchmove', 'touchcancel'
  //   ];
    
  //   const eventsToUse = isMobile ? mobileEvents : desktopEvents;
    
  //   eventsToUse.forEach(event => {
  //     document.addEventListener(event, preventUnauthorizedActions, true);
  //   });

  //   // Apply CSS protection - DIFFERENT FOR MOBILE VS DESKTOP
  //   if (isMobile) {
  //     // Lighter protection for mobile - allow some user interaction
  //     document.body.style.userSelect = 'none';
  //     document.body.style.webkitUserSelect = 'none';
      
  //     // Allow touch actions for better mobile UX
  //     document.body.style.touchAction = 'pan-y pinch-zoom';
  //   } else {
  //     // Full protection for desktop
  //     document.body.style.userSelect = 'none';
  //     document.body.style.webkitUserSelect = 'none';
  //     document.body.style.mozUserSelect = 'none';
  //     document.body.style.msUserSelect = 'none';
      
  //     // Prevent image dragging on desktop
  //     document.querySelectorAll('img').forEach(img => {
  //       img.setAttribute('draggable', 'false');
  //       img.style.pointerEvents = 'none';
  //       img.style.webkitUserDrag = 'none';
  //     });
  //   }

  //   // Global CSS to prevent selection and context menu
  //   const securityStyle = document.createElement('style');
    
  //   if (isMobile) {
  //     // Mobile-specific CSS - less restrictive
  //     securityStyle.innerHTML = `
  //       * {
  //         -webkit-touch-callout: none !important;
  //         -webkit-user-select: none !important;
  //         user-select: none !important;
  //       }
        
  //       img {
  //         -webkit-user-drag: none !important;
  //         user-drag: none !important;
  //       }
        
  //       /* Allow scrolling and zooming */
  //       body {
  //         -webkit-overflow-scrolling: touch;
  //         overscroll-behavior: contain;
  //       }
        
  //       ::selection {
  //         background: transparent !important;
  //         color: inherit !important;
  //       }
  //       ::-moz-selection {
  //         background: transparent !important;
  //         color: inherit !important;
  //       }
  //     `;
  //   } else {
  //     // Desktop-specific CSS - full protection
  //     securityStyle.innerHTML = `
  //       * {
  //         -webkit-user-select: none !important;
  //         -moz-user-select: none !important;
  //         -ms-user-select: none !important;
  //         user-select: none !important;
  //         -webkit-user-drag: none !important;
  //         -moz-user-drag: none !important;
  //         user-drag: none !important;
  //         -webkit-touch-callout: none !important;
  //       }
        
  //       body, div, section, article, p, h1, h2, h3, h4, h5, h6, span, a, img {
  //         -webkit-user-select: none !important;
  //         -moz-user-select: none !important;
  //         -ms-user-select: none !important;
  //         user-select: none !important;
  //       }
        
  //       img {
  //         pointer-events: none !important;
  //       }
        
  //       ::selection {
  //         background: transparent !important;
  //         color: inherit !important;
  //       }
  //       ::-moz-selection {
  //         background: transparent !important;
  //         color: inherit !important;
  //       }
  //     `;
  //   }
    
  //   document.head.appendChild(securityStyle);

  //   // Advanced DevTools detection (DESKTOP ONLY)
  //   const devToolsDetection = () => {
  //     if (isMobile) return () => {}; // Skip on mobile
      
  //     // Detect if devtools is open by checking if console is available
  //     const devtools = /./;
  //     devtools.toString = function() {
  //       speakSecurityMessage();
  //       return 'Security Alert: DevTools detected!';
  //     };
      
  //     // Check for devtools periodically
  //     const checkDevTools = setInterval(() => {
  //       if (window.outerWidth - window.innerWidth > 160 || 
  //           window.outerHeight - window.innerHeight > 160) {
  //         speakSecurityMessage();
  //       }
  //     }, 1000);

  //     return () => clearInterval(checkDevTools);
  //   };

  //   const cleanupDevToolsDetection = devToolsDetection();

  //   // Cleanup function
  //   const cleanup = () => {
  //     if (!isMobile) {
  //       document.removeEventListener('keydown', blockDevToolsShortcuts, true);
  //     }
      
  //     const allEvents = [...new Set([...desktopEvents, ...mobileEvents])];
  //     allEvents.forEach(event => {
  //       document.removeEventListener(event, preventUnauthorizedActions, true);
  //     });
      
  //     if (longPressTimer) {
  //       clearTimeout(longPressTimer);
  //     }
      
  //     if (securityStyle && securityStyle.parentNode) {
  //       securityStyle.parentNode.removeChild(securityStyle);
  //     }
      
  //     cleanupDevToolsDetection();
      
  //     // Reset CSS styles
  //     document.body.style.userSelect = '';
  //     document.body.style.webkitUserSelect = '';
  //     document.body.style.mozUserSelect = '';
  //     document.body.style.msUserSelect = '';
  //     document.body.style.touchAction = '';
      
  //     // Reset image styles
  //     document.querySelectorAll('img').forEach(img => {
  //       img.setAttribute('draggable', 'true');
  //       img.style.pointerEvents = '';
  //       img.style.webkitUserDrag = '';
  //     });
  //   };

  //   return cleanup;
  // }, [isAgentActivated, speakSecurityMessage]);

  // return null; // This component doesn't render anything
};

export default SecurityAgent;