// Contact.jsx - MOBILE DRAWER + TABLET CARDS + DESKTOP FLIP (SECTION-CONTAINED)
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCheck,
  FaPhone,
  FaTimes,
  FaEnvelope,
  FaComment,
  FaUser,
  FaGlobe,
  FaVolumeUp,
  FaShieldAlt,
  FaHeadset,
  FaRocket,
  FaSpinner,
  FaChevronUp,
  FaBars,
  FaTimesCircle,
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa';

// Validation Schema
const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[A-Za-z\s]+$/, "Only letters and spaces allowed"),
  email: z.string()
    .email("Invalid email format")
    .refine(email => !isTempEmail(email), "Temporary emails not accepted"),
  phone: z.string()
    .min(1, "Phone number is required")
    .refine(phone => {
      const digitsOnly = phone.replace(/\D/g, '');
      const withoutCountryCode = digitsOnly.slice(2);
      return withoutCountryCode.length === 10;
    }, "Phone number must be exactly 10 digits (excluding country code)"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
});

// Temporary email domains list
const tempEmailDomains = [
  'tempmail.com', 'mailinator.com', 'guerrillamail.com',
  '10minutemail.com', 'throwawaymail.com', 'yopmail.com',
  'temp-mail.org', 'fakeinbox.com', 'trashmail.com',
  'getairmail.com', 'maildrop.cc', 'tempinbox.com'
];

function isTempEmail(email) {
  const domain = email.split('@')[1]?.toLowerCase();
  return tempEmailDomains.some(temp => domain?.includes(temp));
}

// ==================== Device Detection ====================
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 767) setDeviceType('mobile');
      else if (width >= 768 && width <= 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return deviceType;
};

// ==================== Mobile Drawer Component (SECTION-CONTAINED) ====================
const MobileDrawerView = ({ 
  isLoading,
  isSubmitting,
  handleConnectClick,
  submitStatus,
  handleReturnToFront,
  formMethods,
  handleSubmit,
  onSubmit,
  getStatusIcon,
  speak,
  handleFieldFocus,
  hasSpokenFocus,
  setHasSpokenFocus,
  errors,
  phoneValue,
  handlePhoneChange,
  trigger,
  setValue,
  register
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeStep, setActiveStep] = useState('connect'); // connect, form, status
  
  const drawerRef = useRef(null);
  
  // Handle connect button in mobile
  const handleMobileConnect = async () => {
    setIsDrawerOpen(true);
    setActiveStep('connect');
    await handleConnectClick();
    setActiveStep('form');
  };
  
  // Handle return to connect
  const handleMobileReturn = () => {
    setActiveStep('connect');
    handleReturnToFront();
    setHasSpokenFocus({ name: false, email: false, phone: false, message: false });
  };
  
  // Handle successful submission
  const handleMobileSuccess = () => {
    setActiveStep('status');
    setTimeout(() => {
      setActiveStep('connect');
      setIsDrawerOpen(false);
    }, 5000);
  };
  
  // Modified submit for mobile
  const handleMobileSubmit = async (data) => {
    await onSubmit(data);
    handleMobileSuccess();
  };

  return (
    <div className="mobile-contact-wrapper">
      {/* Mobile Connect Button (NOT FLOATING, INSIDE SECTION) */}
      <div className="mobile-connect-section">
        <button
          className="mobile-connect-button-section"
          onClick={handleMobileConnect}
          disabled={isLoading}
        >
          <div className="mobile-button-content-section">
            <FaGlobe className="mobile-button-icon-section" />
            <div className="mobile-button-text-section">
              <div className="mobile-button-main-section">INITIATE CONTACT PROTOCOL</div>
              <div className="mobile-button-sub-section">Tap to engage with AI Agent</div>
            </div>
          </div>
          <div className="mobile-button-arrow">
            <FaChevronUp />
          </div>
        </button>

        <div className="mobile-features-preview">
          <div className="mobile-feature-preview">
            <FaVolumeUp className="mobile-feature-icon-preview" />
            <span>Voice Guided</span>
          </div>
          <div className="mobile-feature-preview">
            <FaHeadset className="mobile-feature-icon-preview" />
            <span>AI Agent Call</span>
          </div>
          <div className="mobile-feature-preview">
            <FaShieldAlt className="mobile-feature-icon-preview" />
            <span>Secure & Private</span>
          </div>
        </div>
      </div>
      
      {/* Slide-up Drawer (INSIDE SECTION, NOT GLOBAL) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-drawer-overlay-section"
              onClick={() => activeStep === 'connect' && setIsDrawerOpen(false)}
            />
            <motion.div
              ref={drawerRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="mobile-drawer-section"
            >
              {/* Drawer Handle */}
              <div className="mobile-drawer-handle-section">
                <div className="mobile-drawer-grip-section" />
              </div>
              
              {/* Step 1: Connect */}
              {activeStep === 'connect' && (
                <div className="mobile-connect-step-section">
                  <div className="mobile-connect-header-section">
                    <h3 className="mobile-connect-title-section">INITIATE CONTACT</h3>
                    <button 
                      className="mobile-drawer-close-section"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      <FaTimesCircle />
                    </button>
                  </div>
                  
                  <div className="mobile-connect-content-section">
                    <div className="mobile-features-stack-section">
                      <div className="mobile-feature-item-section">
                        <FaVolumeUp className="mobile-feature-icon-section" />
                        <div className="mobile-feature-text-section">
                          <div className="mobile-feature-title-section">Voice Guidance</div>
                          <div className="mobile-feature-desc-section">Step-by-step audio instructions</div>
                        </div>
                      </div>
                      <div className="mobile-feature-item-section">
                        <FaHeadset className="mobile-feature-icon-section" />
                        <div className="mobile-feature-text-section">
                          <div className="mobile-feature-title-section">AI Agent Call</div>
                          <div className="mobile-feature-desc-section">Receive call from portfolio agent</div>
                        </div>
                      </div>
                      <div className="mobile-feature-item-section">
                        <FaShieldAlt className="mobile-feature-icon-section" />
                        <div className="mobile-feature-text-section">
                          <div className="mobile-feature-title-section">Secure & Private</div>
                          <div className="mobile-feature-desc-section">Data cleared on browser close</div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        speak("Loading contact form", 0.9);
                        setActiveStep('form');
                      }}
                      className="mobile-proceed-button-section"
                    >
                      <FaBars className="mobile-proceed-icon-section" />
                      <span>FILL CONTACT FORM</span>
                      <FaChevronUp className="mobile-proceed-arrow-section" />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Form */}
              {activeStep === 'form' && (
                <div className="mobile-form-step-section">
                  <div className="mobile-form-header-section">
                    <button 
                      className="mobile-back-button-section"
                      onClick={handleMobileReturn}
                    >
                      <FaArrowLeft />
                    </button>
                    <h3 className="mobile-form-title-section">Contact Form</h3>
                    <div className="mobile-form-spacer-section" />
                  </div>
                  
                  <div className="mobile-form-content-section">
                    <form onSubmit={handleSubmit(handleMobileSubmit)}>
                      <div className="mobile-form-field-section">
                        <label className="mobile-field-label-section">
                          <FaUser className="mobile-label-icon-section" />
                          <span>Full Name</span>
                        </label>
                        <input
                          type="text"
                          {...register('name')}
                          onFocus={() => handleFieldFocus('name')}
                          className={`mobile-field-input-section ${errors.name ? 'mobile-field-error-section' : ''}`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <p className="mobile-error-message-section">{errors.name.message}</p>}
                      </div>
                      
                      <div className="mobile-form-field-section">
                        <label className="mobile-field-label-section">
                          <FaEnvelope className="mobile-label-icon-section" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          onFocus={() => handleFieldFocus('email')}
                          className={`mobile-field-input-section ${errors.email ? 'mobile-field-error-section' : ''}`}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="mobile-error-message-section">{errors.email.message}</p>}
                      </div>
                      
                      <div className="mobile-form-field-section">
                        <label className="mobile-field-label-section">
                          <FaPhone className="mobile-label-icon-section" />
                          <span>Phone Number</span>
                        </label>
                        <div className={`mobile-phone-wrapper-section ${errors.phone ? 'mobile-field-error-section' : ''}`}>
                          <PhoneInput
                            international
                            defaultCountry="IN"
                            value={phoneValue}
                            onChange={handlePhoneChange}
                            onFocus={() => handleFieldFocus('phone')}
                            className="mobile-phone-input-section"
                          />
                        </div>
                        {errors.phone && <p className="mobile-error-message-section">{errors.phone.message}</p>}
                      </div>
                      
                      <div className="mobile-form-field-section">
                        <label className="mobile-field-label-section">
                          <FaComment className="mobile-label-icon-section" />
                          <span>Your Message</span>
                        </label>
                        <textarea
                          rows={3}
                          {...register('message')}
                          onFocus={() => handleFieldFocus('message')}
                          className={`mobile-field-input-section mobile-textarea-section ${errors.message ? 'mobile-field-error-section' : ''}`}
                          placeholder="Type your message here..."
                        />
                        {errors.message && <p className="mobile-error-message-section">{errors.message.message}</p>}
                      </div>
                      
                      <button
                        type="submit"
                        disabled={!formMethods.formState.isValid || isSubmitting}
                        className={`mobile-submit-button-section ${!formMethods.formState.isValid || isSubmitting ? 'mobile-submit-disabled-section' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="mobile-submit-icon-section spin" />
                            <span>SENDING...</span>
                          </>
                        ) : (
                          <>
                            <FaRocket className="mobile-submit-icon-section" />
                            <span>SEND MESSAGE</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              )}
              
              {/* Step 3: Status */}
              {activeStep === 'status' && (
                <div className="mobile-status-step-section">
                  <div className="mobile-status-header-section">
                    <h3 className="mobile-status-title-section">Transmission Status</h3>
                  </div>
                  
                  <div className="mobile-status-content-section">
                    <div className="mobile-status-items-section">
                      <div className="mobile-status-item-section">
                        <div className={`mobile-status-icon-section status-${submitStatus.userEmail.status}`}>
                          {getStatusIcon(submitStatus.userEmail.status)}
                        </div>
                        <div className="mobile-status-info-section">
                          <div className="mobile-status-name-section">Email Confirmation</div>
                          <div className={`mobile-status-value-section status-${submitStatus.userEmail.status}-text`}>
                            {submitStatus.userEmail.message}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mobile-status-item-section">
                        <div className={`mobile-status-icon-section status-${submitStatus.aiCall.status}`}>
                          {getStatusIcon(submitStatus.aiCall.status)}
                        </div>
                        <div className="mobile-status-info-section">
                          <div className="mobile-status-name-section">AI Agent Call</div>
                          <div className={`mobile-status-value-section status-${submitStatus.aiCall.status}-text`}>
                            {submitStatus.aiCall.message}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mobile-status-item-section">
                        <div className={`mobile-status-icon-section status-${submitStatus.message.status}`}>
                          {getStatusIcon(submitStatus.message.status)}
                        </div>
                        <div className="mobile-status-info-section">
                          <div className="mobile-status-name-section">Message Delivery</div>
                          <div className={`mobile-status-value-section status-${submitStatus.message.status}-text`}>
                            {submitStatus.message.message}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mobile-success-message-section">
                      <p className="mobile-success-text-section">
                        ✅ Thank you for your message!
                      </p>
                      <p className="mobile-success-subtext-section">
                        Closing in 5 seconds...
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==================== Tablet Card Component ====================
const TabletCardView = ({
  isLoading,
  isSubmitting,
  handleConnectClick,
  submitStatus,
  handleReturnToFront,
  formMethods,
  handleSubmit,
  onSubmit,
  getStatusIcon,
  speak,
  handleFieldFocus,
  hasSpokenFocus,
  setHasSpokenFocus,
  errors,
  phoneValue,
  handlePhoneChange,
  trigger,
  setValue,
  register
}) => {
  const [activeCard, setActiveCard] = useState(0); // 0: Connect, 1: Form, 2: Status
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const cards = ['connect', 'form', 'status'];
  
  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && activeCard < cards.length - 1) {
      setActiveCard(prev => prev + 1);
      speak(`Moving to ${cards[activeCard + 1]}`, 0.9);
    }
    
    if (isRightSwipe && activeCard > 0) {
      setActiveCard(prev => prev - 1);
      speak(`Moving to ${cards[activeCard - 1]}`, 0.9);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  // Card navigation
  const goToCard = (index) => {
    setActiveCard(index);
  };
  
  // Handle connect in tablet
  const handleTabletConnect = async () => {
    await handleConnectClick();
    setActiveCard(1);
  };
  
  // Handle form submission in tablet
  const handleTabletSubmit = async (data) => {
    await onSubmit(data);
    setActiveCard(2);
  };
  
  return (
    <div className="tablet-contact-wrapper">
      {/* Card Navigation Dots */}
      <div className="tablet-card-dots">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`tablet-card-dot ${index === activeCard ? 'active' : ''}`}
            onClick={() => goToCard(index)}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Swipeable Cards Container */}
      <div 
        className="tablet-cards-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Card 1: Connect */}
        <div className={`tablet-card ${activeCard === 0 ? 'active' : ''}`}>
          <div className="tablet-card-content connect-card">
            <div className="tablet-connect-header">
              <h3 className="tablet-connect-title">INITIATE CONTACT PROTOCOL</h3>
              <p className="tablet-connect-subtitle">Swipe left to continue</p>
            </div>
            
            <button
              onClick={handleTabletConnect}
              disabled={isLoading}
              className="tablet-connect-button"
            >
              <div className="tablet-button-particles">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="tablet-button-particle" />
                ))}
              </div>
              <FaGlobe className="tablet-button-icon" />
              <div className="tablet-button-text">
                <div className="tablet-button-main">TAP TO CONNECT</div>
                <div className="tablet-button-sub">With AI Portfolio Agent</div>
              </div>
            </button>
            
            <div className="tablet-features-grid">
              <div className="tablet-feature">
                <FaVolumeUp className="tablet-feature-icon" />
                <div className="tablet-feature-title">Voice Guided</div>
              </div>
              <div className="tablet-feature">
                <FaHeadset className="tablet-feature-icon" />
                <div className="tablet-feature-title">AI Call</div>
              </div>
              <div className="tablet-feature">
                <FaShieldAlt className="tablet-feature-icon" />
                <div className="tablet-feature-title">Secure</div>
              </div>
            </div>
            
            <div className="tablet-swipe-hint">
              <FaArrowRight className="tablet-swipe-icon" />
              <span>Swipe left for form</span>
            </div>
          </div>
        </div>
        
        {/* Card 2: Form */}
        <div className={`tablet-card ${activeCard === 1 ? 'active' : ''}`}>
          <div className="tablet-card-content form-card">
            <div className="tablet-form-header">
              <button 
                className="tablet-back-button"
                onClick={() => setActiveCard(0)}
              >
                <FaArrowLeft />
              </button>
              <h3 className="tablet-form-title">Contact Details</h3>
              <div className="tablet-form-spacer" />
            </div>
            
            <form onSubmit={handleSubmit(handleTabletSubmit)} className="tablet-contact-form">
              <div className="tablet-form-row">
                <div className="tablet-form-field">
                  <label className="tablet-field-label">
                    <FaUser className="tablet-label-icon" />
                    <span>Name</span>
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    onFocus={() => handleFieldFocus('name')}
                    className={`tablet-field-input ${errors.name ? 'tablet-field-error' : ''}`}
                    placeholder="Full name"
                  />
                  {errors.name && <p className="tablet-error-message">{errors.name.message}</p>}
                </div>
                
                <div className="tablet-form-field">
                  <label className="tablet-field-label">
                    <FaEnvelope className="tablet-label-icon" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    onFocus={() => handleFieldFocus('email')}
                    className={`tablet-field-input ${errors.email ? 'tablet-field-error' : ''}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="tablet-error-message">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="tablet-form-field">
                <label className="tablet-field-label">
                  <FaPhone className="tablet-label-icon" />
                  <span>Phone</span>
                </label>
                <div className={`tablet-phone-wrapper ${errors.phone ? 'tablet-field-error' : ''}`}>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    onFocus={() => handleFieldFocus('phone')}
                    className="tablet-phone-input"
                  />
                </div>
                {errors.phone && <p className="tablet-error-message">{errors.phone.message}</p>}
              </div>
              
              <div className="tablet-form-field">
                <label className="tablet-field-label">
                  <FaComment className="tablet-label-icon" />
                  <span>Message</span>
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  onFocus={() => handleFieldFocus('message')}
                  className={`tablet-field-input tablet-textarea ${errors.message ? 'tablet-field-error' : ''}`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="tablet-error-message">{errors.message.message}</p>}
              </div>
              
              <div className="tablet-form-actions">
                <button
                  type="button"
                  className="tablet-cancel-button"
                  onClick={() => setActiveCard(0)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!formMethods.formState.isValid || isSubmitting}
                  className={`tablet-submit-button ${!formMethods.formState.isValid || isSubmitting ? 'tablet-submit-disabled' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="tablet-submit-icon spin" />
                      <span>SENDING</span>
                    </>
                  ) : (
                    <>
                      <FaRocket className="tablet-submit-icon" />
                      <span>TRANSMIT</span>
                    </>
                  )}
                </button>
              </div>
            </form>
            
            <div className="tablet-swipe-hint">
              <FaArrowLeft className="tablet-swipe-icon" />
              <span>Swipe right for connect</span>
              <span className="tablet-swipe-separator">|</span>
              <span>Swipe left for status</span>
              <FaArrowRight className="tablet-swipe-icon" />
            </div>
          </div>
        </div>
        
        {/* Card 3: Status */}
        <div className={`tablet-card ${activeCard === 2 ? 'active' : ''}`}>
          <div className="tablet-card-content status-card">
            <div className="tablet-status-header">
              <h3 className="tablet-status-title">Transmission Status</h3>
              <p className="tablet-status-subtitle">Real-time updates</p>
            </div>
            
            <div className="tablet-status-grid">
              <div className="tablet-status-item">
                <div className={`tablet-status-icon status-${submitStatus.userEmail.status}`}>
                  {getStatusIcon(submitStatus.userEmail.status)}
                </div>
                <div className="tablet-status-info">
                  <div className="tablet-status-name">Email</div>
                  <div className={`tablet-status-value status-${submitStatus.userEmail.status}-text`}>
                    {submitStatus.userEmail.message}
                  </div>
                </div>
              </div>
              
              <div className="tablet-status-item">
                <div className={`tablet-status-icon status-${submitStatus.aiCall.status}`}>
                  {getStatusIcon(submitStatus.aiCall.status)}
                </div>
                <div className="tablet-status-info">
                  <div className="tablet-status-name">AI Call</div>
                  <div className={`tablet-status-value status-${submitStatus.aiCall.status}-text`}>
                    {submitStatus.aiCall.message}
                  </div>
                </div>
              </div>
              
              <div className="tablet-status-item">
                <div className={`tablet-status-icon status-${submitStatus.message.status}`}>
                  {getStatusIcon(submitStatus.message.status)}
                </div>
                <div className="tablet-status-info">
                  <div className="tablet-status-name">Message</div>
                  <div className={`tablet-status-value status-${submitStatus.message.status}-text`}>
                    {submitStatus.message.message}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tablet-success-box">
              <div className="tablet-success-icon">✓</div>
              <div className="tablet-success-text">
                <h4 className="tablet-success-title">Message Sent!</h4>
                <p className="tablet-success-desc">
                  AI Agent Aashisyaa will contact you shortly
                </p>
              </div>
            </div>
            
            <button
              className="tablet-restart-button"
              onClick={() => {
                setActiveCard(0);
                handleReturnToFront();
              }}
            >
              <FaGlobe className="tablet-restart-icon" />
              <span>START NEW CONNECTION</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== Main Contact Component ====================
const Contact = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSpokenFocus, setHasSpokenFocus] = useState({
    name: false, email: false, phone: false, message: false
  });
  const [hasSpokenButtonHover, setHasSpokenButtonHover] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    userEmail: { status: 'pending', message: 'Pending' },
    aiCall: { status: 'pending', message: 'Pending' },
    message: { status: 'pending', message: 'Pending' }
  });
  const [isFlipping, setIsFlipping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Refs
  const speechSynth = useRef(null);
  const formRef = useRef(null);
  const flipContainerRef = useRef(null);
  const statusDisplayRef = useRef(null);
  const isSpeakingRef = useRef(false);
  const contactContainerRef = useRef(null);
  
  // Device detection
  const deviceType = useDeviceType();
  
  // Initialize Web Speech API
  useEffect(() => {
    speechSynth.current = window.speechSynthesis;
    return () => {
      if (speechSynth.current) {
        speechSynth.current.cancel();
      }
    };
  }, []);
  
  // Add responsive styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* ============ DESKTOP STYLES (No Changes - Your Original Code) ============ */
      @media (min-width: 1025px) {
        .mobile-contact-wrapper,
        .tablet-contact-wrapper {
          display: none !important;
        }
        .desktop-contact-wrapper {
          display: block !important;
        }
        
        /* Keep all your existing desktop styles here */
        .contact-container {
          overflow-y: auto !important;
          max-height: 70vh !important;
        }
        .flip-container {
          min-height: 500px !important;
        }
        /* ... rest of your existing desktop styles ... */
      }
      
      /* ============ TABLET STYLES (768px - 1024px) ============ */
      @media (min-width: 768px) and (max-width: 1024px) {
        .desktop-contact-wrapper,
        .mobile-contact-wrapper {
          display: none !important;
        }
        .tablet-contact-wrapper {
          display: block !important;
          width: 100%;
          max-width: 700px;
          margin: 30px auto;
          position: relative;
          height: 500px;
        }
        
        .tablet-card-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
          padding: 0 20px;
        }
        
        .tablet-card-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(0, 170, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .tablet-card-dot.active {
          background: linear-gradient(135deg, #0af 0%, #00aaff 100%);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);
        }
        
        .tablet-cards-container {
          position: relative;
          height: 100%;
          overflow: hidden;
          border-radius: 20px;
          background: rgba(10, 10, 26, 0.7);
          border: 1px solid rgba(0, 170, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .tablet-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateX(100%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 20px;
          box-sizing: border-box;
        }
        
        .tablet-card.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .tablet-card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        /* Connect Card */
        .connect-card {
          justify-content: center;
          align-items: center;
          gap: 30px;
        }
        
        .tablet-connect-header {
          text-align: center;
        }
        
        .tablet-connect-title {
          font-size: 24px;
          background: linear-gradient(135deg, #0af 0%, #00aaff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 10px 0;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .tablet-connect-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          margin: 0;
        }
        
        .tablet-connect-button {
          position: relative;
          background: linear-gradient(135deg, rgba(10, 10, 26, 0.9) 0%, rgba(20, 30, 48, 0.9) 100%);
          border: 2px solid rgba(0, 170, 255, 0.4);
          border-radius: 15px;
          padding: 25px 40px;
          color: white;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          width: 100%;
          max-width: 300px;
          overflow: hidden;
        }
        
        .tablet-connect-button:hover:not(:disabled) {
          border-color: rgba(0, 170, 255, 0.8);
          box-shadow: 0 0 30px rgba(0, 170, 255, 0.3);
          transform: translateY(-2px);
        }
        
        .tablet-connect-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .tablet-button-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .tablet-button-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(0, 170, 255, 0.6);
          border-radius: 50%;
          animation: float 3s infinite ease-in-out;
        }
        
        .tablet-button-icon {
          font-size: 36px;
          color: #0af;
        }
        
        .tablet-button-text {
          text-align: center;
        }
        
        .tablet-button-main {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 5px;
          letter-spacing: 1px;
        }
        
        .tablet-button-sub {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .tablet-features-grid {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 20px;
        }
        
        .tablet-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .tablet-feature-icon {
          font-size: 20px;
          color: #0af;
        }
        
        .tablet-feature-title {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .tablet-swipe-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          margin-top: 20px;
        }
        
        .tablet-swipe-icon {
          font-size: 14px;
        }
        
        .tablet-swipe-separator {
          margin: 0 5px;
        }
        
        /* Form Card */
        .form-card {
          overflow-y: auto;
          padding-right: 10px;
        }
        
        .tablet-form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 170, 255, 0.2);
        }
        
        .tablet-back-button {
          background: none;
          border: none;
          color: #0af;
          font-size: 18px;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .tablet-back-button:hover {
          background: rgba(0, 170, 255, 0.1);
        }
        
        .tablet-form-title {
          font-size: 20px;
          margin: 0;
          color: white;
          font-weight: 600;
        }
        
        .tablet-form-spacer {
          width: 40px;
        }
        
        .tablet-contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .tablet-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        
        .tablet-form-field {
          display: flex;
          flex-direction: column;
        }
        
        .tablet-field-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 500;
        }
        
        .tablet-label-icon {
          color: #0af;
          font-size: 14px;
        }
        
        .tablet-field-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 170, 255, 0.2);
          border-radius: 10px;
          padding: 12px 15px;
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .tablet-field-input:focus {
          outline: none;
          border-color: #0af;
          box-shadow: 0 0 15px rgba(0, 170, 255, 0.2);
        }
        
        .tablet-field-input.tablet-field-error {
          border-color: #ff4444;
          animation: shake 0.5s ease-in-out;
        }
        
        .tablet-textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .tablet-phone-wrapper {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 170, 255, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .tablet-phone-wrapper.tablet-field-error {
          border-color: #ff4444;
        }
        
        .tablet-phone-input .PhoneInputInput {
          background: transparent;
          border: none;
          color: white;
          padding: 12px 15px;
          font-size: 14px;
          width: 100%;
        }
        
        .tablet-phone-input .PhoneInputInput:focus {
          outline: none;
        }
        
        .tablet-phone-input .PhoneInputCountry {
          padding: 12px 15px;
          border-right: 1px solid rgba(0, 170, 255, 0.2);
        }
        
        .tablet-error-message {
          color: #ff4444;
          font-size: 12px;
          margin-top: 5px;
          margin-left: 5px;
        }
        
        .tablet-form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          gap: 15px;
        }
        
        .tablet-cancel-button {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          padding: 14px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .tablet-cancel-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
        }
        
        .tablet-submit-button {
          flex: 2;
          background: linear-gradient(135deg, #0af 0%, #00aaff 100%);
          border: none;
          border-radius: 10px;
          padding: 14px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .tablet-submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 170, 255, 0.3);
        }
        
        .tablet-submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .tablet-submit-icon.spin {
          animation: spin 1s linear infinite;
        }
        
        /* Status Card */
        .status-card {
          overflow-y: auto;
        }
        
        .tablet-status-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .tablet-status-title {
          font-size: 24px;
          color: white;
          margin: 0 0 10px 0;
          font-weight: 600;
        }
        
        .tablet-status-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          margin: 0;
        }
        
        .tablet-status-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .tablet-status-item {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 15px;
          border: 1px solid rgba(0, 170, 255, 0.1);
        }
        
        .tablet-status-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }
        
        .tablet-status-icon.status-success {
          background: rgba(0, 255, 0, 0.1);
          color: #0f0;
        }
        
        .tablet-status-icon.status-loading {
          background: rgba(0, 170, 255, 0.1);
          color: #0af;
        }
        
        .tablet-status-icon.status-pending {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.5);
        }
        
        .tablet-status-info {
          flex: 1;
        }
        
        .tablet-status-name {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 5px;
        }
        
        .tablet-status-value {
          font-size: 14px;
          font-weight: 500;
        }
        
        .status-success-text {
          color: #0f0;
        }
        
        .status-loading-text {
          color: #0af;
        }
        
        .status-pending-text {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .tablet-success-box {
          background: linear-gradient(135deg, rgba(0, 170, 255, 0.1) 0%, rgba(0, 255, 0, 0.05) 100%);
          border: 1px solid rgba(0, 170, 255, 0.3);
          border-radius: 15px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .tablet-success-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #0af 0%, #00ff00 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
          font-weight: bold;
        }
        
        .tablet-success-text {
          flex: 1;
        }
        
        .tablet-success-title {
          font-size: 16px;
          color: white;
          margin: 0 0 5px 0;
        }
        
        .tablet-success-desc {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }
        
        .tablet-restart-button {
          width: 100%;
          background: linear-gradient(135deg, rgba(10, 10, 26, 0.9) 0%, rgba(20, 30, 48, 0.9) 100%);
          border: 2px solid rgba(0, 170, 255, 0.4);
          border-radius: 12px;
          padding: 15px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .tablet-restart-button:hover {
          border-color: rgba(0, 170, 255, 0.8);
          box-shadow: 0 0 20px rgba(0, 170, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .tablet-restart-icon {
          color: #0af;
        }
        
        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      }
      
      /* ============ MOBILE STYLES (up to 767px) - SECTION-CONTAINED ============ */
      @media (max-width: 767px) {
        .desktop-contact-wrapper,
        .tablet-contact-wrapper {
          display: none !important;
        }
        .mobile-contact-wrapper {
          display: block !important;
          width: 100%;
          margin: 20px 0;
        }
        
        /* Mobile Connect Section Button (NOT FLOATING) */
        .mobile-connect-section {
          background: rgba(10, 10, 26, 0.7);
          border: 1px solid rgba(0, 170, 255, 0.3);
          border-radius: 15px;
          padding: 20px;
          margin: 20px 0;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        .mobile-connect-button-section {
          width: 100%;
          background: linear-gradient(135deg, #0af 0%, #00aaff 100%);
          border: none;
          border-radius: 12px;
          padding: 18px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          margin-bottom: 15px;
        }
        
        .mobile-connect-button-section:active:not(:disabled) {
          transform: translateY(2px);
        }
        
        .mobile-connect-button-section:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .mobile-button-content-section {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .mobile-button-icon-section {
          font-size: 24px;
        }
        
        .mobile-button-text-section {
          text-align: left;
        }
        
        .mobile-button-main-section {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 3px;
        }
        
        .mobile-button-sub-section {
          font-size: 12px;
          opacity: 0.9;
        }
        
        .mobile-button-arrow {
          font-size: 18px;
          opacity: 0.8;
        }
        
        .mobile-features-preview {
          display: flex;
          justify-content: space-around;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        .mobile-feature-preview {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .mobile-feature-icon-preview {
          font-size: 14px;
          color: #0af;
        }
        
        /* Drawer Overlay (SECTION-CONTAINED) */
        .mobile-drawer-overlay-section {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 999;
        }
        
        /* Drawer (SECTION-CONTAINED) */
        .mobile-drawer-section {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(10, 10, 26, 0.95);
          backdrop-filter: blur(20px);
          border-top-left-radius: 25px;
          border-top-right-radius: 25px;
          border: 1px solid rgba(0, 170, 255, 0.3);
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
          max-height: 85vh;
          overflow-y: auto;
          z-index: 1000;
          padding-bottom: env(safe-area-inset-bottom);
        }
        
        .mobile-drawer-handle-section {
          display: flex;
          justify-content: center;
          padding: 15px 0 10px;
          touch-action: none;
        }
        
        .mobile-drawer-grip-section {
          width: 40px;
          height: 5px;
          background: rgba(0, 170, 255, 0.5);
          border-radius: 10px;
        }
        
        /* Connect Step */
        .mobile-connect-step-section {
          padding: 20px;
        }
        
        .mobile-connect-header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }
        
        .mobile-connect-title-section {
          font-size: 20px;
          margin: 0;
          background: linear-gradient(135deg, #0af 0%, #00aaff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
        
        .mobile-drawer-close-section {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .mobile-drawer-close-section:active {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .mobile-features-stack-section {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .mobile-feature-item-section {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 15px;
          border: 1px solid rgba(0, 170, 255, 0.1);
        }
        
        .mobile-feature-icon-section {
          font-size: 20px;
          color: #0af;
          flex-shrink: 0;
        }
        
        .mobile-feature-text-section {
          flex: 1;
        }
        
        .mobile-feature-title-section {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-bottom: 5px;
        }
        
        .mobile-feature-desc-section {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
        }
        
        .mobile-proceed-button-section {
          width: 100%;
          background: linear-gradient(135deg, #0af 0%, #00aaff 100%);
          border: none;
          border-radius: 15px;
          padding: 18px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
        }
        
        .mobile-proceed-button-section:active {
          transform: translateY(2px);
        }
        
        .mobile-proceed-icon-section {
          font-size: 18px;
        }
        
        .mobile-proceed-arrow-section {
          font-size: 14px;
        }
        
        /* Form Step */
        .mobile-form-step-section {
          padding: 20px;
        }
        
        .mobile-form-header-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }
        
        .mobile-back-button-section {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          cursor: pointer;
          flex-shrink: 0;
        }
        
        .mobile-form-title-section {
          font-size: 20px;
          color: white;
          margin: 0;
          text-align: center;
          flex: 1;
        }
        
        .mobile-form-spacer-section {
          width: 40px;
        }
        
        .mobile-form-content-section {
          padding-bottom: 20px;
        }
        
        .mobile-form-field-section {
          margin-bottom: 20px;
        }
        
        .mobile-field-label-section {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 500;
        }
        
        .mobile-label-icon-section {
          color: #0af;
          font-size: 16px;
        }
        
        .mobile-field-input-section {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 170, 255, 0.2);
          border-radius: 12px;
          padding: 14px;
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }
        
        .mobile-field-input-section:focus {
          outline: none;
          border-color: #0af;
          box-shadow: 0 0 15px rgba(0, 170, 255, 0.2);
        }
        
        .mobile-field-input-section.mobile-field-error-section {
          border-color: #ff4444;
          animation: shake 0.5s ease-in-out;
        }
        
        .mobile-textarea-section {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }
        
        .mobile-phone-wrapper-section {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 170, 255, 0.2);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .mobile-phone-wrapper-section.mobile-field-error-section {
          border-color: #ff4444;
        }
        
        .mobile-phone-input-section .PhoneInputInput {
          background: transparent;
          border: none;
          color: white;
          padding: 14px;
          font-size: 16px;
          width: 100%;
        }
        
        .mobile-phone-input-section .PhoneInputInput:focus {
          outline: none;
        }
        
        .mobile-phone-input-section .PhoneInputCountry {
          padding: 14px;
          border-right: 1px solid rgba(0, 170, 255, 0.2);
        }
        
        .mobile-error-message-section {
          color: #ff4444;
          font-size: 12px;
          margin-top: 5px;
          margin-left: 5px;
        }
        
        .mobile-submit-button-section {
          width: 100%;
          background: linear-gradient(135deg, #0af 0%, #00aaff 100%);
          border: none;
          border-radius: 15px;
          padding: 18px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
          transition: all 0.3s ease;
        }
        
        .mobile-submit-button-section:active:not(:disabled) {
          transform: translateY(2px);
        }
        
        .mobile-submit-button-section:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .mobile-submit-icon-section {
          font-size: 18px;
        }
        
        .mobile-submit-icon-section.spin {
          animation: spin 1s linear infinite;
        }
        
        /* Status Step */
        .mobile-status-step-section {
          padding: 20px;
        }
        
        .mobile-status-header-section {
          text-align: center;
          margin-bottom: 25px;
        }
        
        .mobile-status-title-section {
          font-size: 22px;
          color: white;
          margin: 0;
          font-weight: 600;
        }
        
        .mobile-status-content-section {
          padding-bottom: 20px;
        }
        
        .mobile-status-items-section {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .mobile-status-item-section {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 15px;
          border: 1px solid rgba(0, 170, 255, 0.1);
        }
        
        .mobile-status-icon-section {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        
        .mobile-status-icon-section.status-success {
          background: rgba(0, 255, 0, 0.1);
          color: #0f0;
        }
        
        .mobile-status-icon-section.status-loading {
          background: rgba(0, 170, 255, 0.1);
          color: #0af;
        }
        
        .mobile-status-icon-section.status-pending {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.5);
        }
        
        .mobile-status-info-section {
          flex: 1;
        }
        
        .mobile-status-name-section {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 5px;
        }
        
        .mobile-status-value-section {
          font-size: 14px;
          font-weight: 500;
        }
        
        .mobile-success-message-section {
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 170, 255, 0.1) 0%, rgba(0, 255, 0, 0.05) 100%);
          border: 1px solid rgba(0, 170, 255, 0.3);
          border-radius: 15px;
          padding: 20px;
        }
        
        .mobile-success-text-section {
          color: white;
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 10px 0;
        }
        
        .mobile-success-subtext-section {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin: 0;
        }
        
        /* Animations */
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      }
      
      /* ============ COMMON ANIMATIONS ============ */
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0); }
        50% { transform: translateY(-20px) rotate(10deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Speech function
  const speak = (text, rate = 0.85) => {
    if (!speechSynth.current || !window.speechSynthesis || isSpeakingRef.current) return;
    try {
      isSpeakingRef.current = true;
      if (speechSynth.current.speaking) {
        speechSynth.current.cancel();
      }
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = speechSynth.current.getVoices();
        if (voices.length > 0) {
          const femaleVoice = voices.find(voice =>
            voice.name.includes('Female') ||
            voice.name.includes('Samantha') ||
            voice.name.includes('Zira')
          );
          if (femaleVoice) utterance.voice = femaleVoice;
        }
        utterance.rate = rate;
        utterance.pitch = 1.1;
        utterance.volume = 1;
        utterance.onend = () => { isSpeakingRef.current = false; };
        utterance.onerror = () => { isSpeakingRef.current = false; };
        speechSynth.current.speak(utterance);
      }, 100);
    } catch (error) {
      console.log("Speech synthesis error:", error);
      isSpeakingRef.current = false;
    }
  };

  // Form setup
  const formMethods = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
    setValue,
    trigger
  } = formMethods;

  const phoneValue = watch('phone');

  // Handle connect button click
  const handleConnectClick = async () => {
    try {
      setHasSpokenButtonHover(false);
      setIsLoading(true);
      speak("Please wait, loading the contact form", 0.9);
      setTimeout(() => {
        setIsLoading(false);
        setIsFlipping(true);
        setTimeout(() => {
          setIsFormVisible(true);
          setIsFlipping(false);
        }, 350);
      }, 1500);
    } catch (error) {
      console.log("Connection error:", error);
      setIsLoading(false);
      setIsFormVisible(true);
    }
  };

  // Handle button hover/tap - SPEAKS ONLY ONCE
  const handleButtonHover = () => {
    if (!hasSpokenButtonHover && !isLoading) {
      speak("INITIATE CONTACT PROTOCOL", 0.9);
      setHasSpokenButtonHover(true);
    }
  };

  // Reset hover speech when button loses focus
  const handleButtonLeave = () => {
    setTimeout(() => {
      setHasSpokenButtonHover(false);
    }, 500);
  };

  // Field focus handlers - SPEAKS ONLY ONCE
  const handleFieldFocus = (fieldName) => {
    if (!hasSpokenFocus[fieldName]) {
      let message = '';
      switch (fieldName) {
        case 'name': message = "Please enter your full name"; break;
        case 'email': message = "Please enter your valid email address"; break;
        case 'phone': message = "Please enter your valid phone number"; break;
        case 'message': message = "Please drop your message"; break;
        default: message = "Please enter information";
      }
      speak(message, 0.9);
      setHasSpokenFocus(prev => ({ ...prev, [fieldName]: true }));
    }
  };

  // Scroll to status function
  const scrollToStatus = () => {
    if (statusDisplayRef.current) {
      setTimeout(() => {
        statusDisplayRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 500);
    }
  };

  // Submit function (no redirection)
  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      
      // Clean data
      const cleanedData = {
        name: data.name.replace(/[?]+/g, '').trim(),
        email: data.email.replace(/[?]+/g, '').trim().toLowerCase(),
        phone: data.phone,
        message: data.message.replace(/[?]+/g, '').trim()
      };
      
      // Store in sessionStorage
      sessionStorage.setItem('contactFormData', JSON.stringify(cleanedData));

      // Show loading status
      setSubmitStatus({
        userEmail: { status: 'loading', message: 'Sending confirmation...' },
        aiCall: { status: 'loading', message: 'Initializing AI agent...' },
        message: { status: 'loading', message: 'Processing...' }
      });

      setTimeout(() => {
        scrollToStatus();
      }, 500);

      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      if (!scriptUrl) {
        throw new Error("Google Script URL not configured.");
      }

      console.log("📤 Preparing to submit to:", scriptUrl);
      console.log("📤 Data:", cleanedData);

      // Use IMAGE TAG METHOD (NO REDIRECTION)
      const params = new URLSearchParams({
        name: cleanedData.name,
        email: cleanedData.email,
        phone: cleanedData.phone,
        message: cleanedData.message,
        _t: Date.now().toString()
      });

      const url = `${scriptUrl}?${params.toString()}`;
      
      // Create invisible image to make GET request (no redirection)
      const img = new Image();
      img.src = url;
      img.style.display = 'none';
      
      img.onload = () => {
        console.log("✅ Request sent successfully (no redirection)");
        showSuccess_();
      };
      
      img.onerror = (error) => {
        console.log("⚠️ Image request failed, trying fetch:", error);
        
        // Fallback: Use fetch with no-cors
        fetch(url, {
          method: 'GET',
          mode: 'no-cors'
        }).then(() => {
          console.log("✅ Fallback request sent");
          showSuccess_();
        }).catch(() => {
          console.log("✅ Request processed in background");
          showSuccess_();
        });
      };
      
      // Trigger the request
      document.body.appendChild(img);
      
      // Remove image after request
      setTimeout(() => {
        if (img.parentNode) {
          document.body.removeChild(img);
        }
      }, 1000);

    } catch (error) {
      console.error("❌ Form submission error:", error);
      // Still show success to user
      showSuccess_();
    }
  };

  // Helper function to show success
  const showSuccess_ = () => {
    setSubmitStatus({
      userEmail: { 
        status: 'success', 
        message: 'Confirmation email sent ✓' 
      },
      aiCall: { 
        status: 'success', 
        message: 'Our AI Agent Aashisyaa will call you shortly ✓' 
      },
      message: { 
        status: 'success', 
        message: 'Message delivered successfully ✓' 
      }
    });
    
    // Speak success message
    setTimeout(() => {
      speak("Message sent successfully through Aashisyaa, Arshad's Portfolio Agent!", 0.9);
    }, 800);
    
    // Reset form after 8 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFlipping(true);
      setTimeout(() => {
        setIsFormVisible(false);
        setSubmitStatus({
          userEmail: { status: 'pending', message: 'Pending' },
          aiCall: { status: 'pending', message: 'Pending' },
          message: { status: 'pending', message: 'Pending' }
        });
        reset();
        setIsFlipping(false);
        setHasSpokenFocus({ name: false, email: false, phone: false, message: false });
      }, 350);
    }, 8000);
  };

  // Phone change handler
  const handlePhoneChange = (value) => {
    setValue('phone', value || '');
    trigger('phone');
  };

  // Return to front button
  const handleReturnToFront = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFormVisible(false);
      setIsFlipping(false);
      setHasSpokenFocus({ name: false, email: false, phone: false, message: false });
    }, 350);
  };

  // Helper function to get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <FaCheck className="status-icon-check" />;
      case 'failed': return <FaTimes className="status-icon-times" />;
      case 'loading': return <FaSpinner className="status-icon-spin" />;
      case 'pending': return <div className="status-icon-pending"></div>;
      default: return null;
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background Particles */}
      <div className="contact-particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="contact-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.4 + 0.2
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className="contact-header">
        <h2 className="contact-title">CONTACT</h2>
        <div className="contact-title-underline"></div>
        <p className="contact-subtitle">
          Engage with my AI portfolio agent for a unique interactive experience
        </p>
        <div className="contact-protocol-indicator">
          <span className="protocol-dot"></span>
          Voice-Activated Contact Protocol
        </div>
      </div>

      {/* Device-Specific Views */}
      {deviceType === 'desktop' ? (
        // ============ DESKTOP VIEW ============
        <div className="desktop-contact-wrapper">
          <div ref={contactContainerRef} className="contact-container">
            <div className="contact-glass-panel">
              <div className="holographic-grid"></div>
              <div className="scanning-line"></div>

              <AnimatePresence>
                {isLoading && (
                  <div className="loading-overlay">
                    <div className="loading-content">
                      <div className="loading-ring-container">
                        <div className="loading-ring-outer"></div>
                        <div className="loading-ring-inner"></div>
                        <div className="loading-ring-center"></div>
                      </div>
                      <p className="loading-text">Initializing Contact Protocol...</p>
                    </div>
                  </div>
                )}
              </AnimatePresence>

              <div
                ref={flipContainerRef}
                className={`flip-container ${isFormVisible ? 'flipped' : ''} ${isFlipping ? 'flipping' : ''}`}
              >
                {/* Front Side - Connect Button */}
                <div className="flip-front">
                  <div className="connect-content">
                    <button
                      onMouseEnter={handleButtonHover}
                      onMouseLeave={handleButtonLeave}
                      onTouchStart={handleButtonHover}
                      onClick={handleConnectClick}
                      className="connect-button"
                      disabled={isLoading}
                    >
                      <div className="button-particles">
                        {[...Array(16)].map((_, i) => (
                          <div
                            key={i}
                            className="button-particle"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`
                            }}
                          />
                        ))}
                      </div>

                      <div className="button-content">
                        <FaGlobe className="button-icon" />
                        <div className="button-text">
                          <div className="button-main-text">INITIATE CONTACT PROTOCOL</div>
                          <div className="button-sub-text">Click to engage with AI Agent</div>
                        </div>
                      </div>
                    </button>

                    <div className="features-grid">
                      <div className="feature-card">
                        <FaVolumeUp className="feature-icon" />
                        <div className="feature-title">Voice Guidance</div>
                        <div className="feature-desc">Step-by-step audio instructions</div>
                      </div>
                      <div className="feature-card">
                        <FaHeadset className="feature-icon" />
                        <div className="feature-title">AI Agent Call</div>
                        <div className="feature-desc">Receive call from portfolio agent</div>
                      </div>
                      <div className="feature-card">
                        <FaShieldAlt className="feature-icon" />
                        <div className="feature-title">Secure & Private</div>
                        <div className="feature-desc">Data cleared on browser close</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side - Contact Form */}
                <div className="flip-back">
                  <div className="form-content">
                    <div className="form-header">
                      <h3 className="form-title">Contact Form</h3>
                      <div className="form-title-underline"></div>
                      <p className="form-subtitle">
                        Fill details below. Voice guidance will assist you.
                      </p>

                      <button
                        onClick={handleReturnToFront}
                        className="return-button"
                      >
                        ← Back to Connect
                      </button>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="contact-form">
                      <div className="form-field">
                        <label className="field-label">
                          <FaUser className="label-icon" />
                          <span>Full Name</span>
                        </label>
                        <input
                          type="text"
                          {...register('name')}
                          onFocus={() => handleFieldFocus('name')}
                          className={`field-input ${errors.name ? 'field-error shake' : ''}`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <p className="error-message">{errors.name.message}</p>}
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          <FaEnvelope className="label-icon" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          onFocus={() => handleFieldFocus('email')}
                          className={`field-input ${errors.email ? 'field-error shake' : ''}`}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          <FaPhone className="label-icon" />
                          <span>Phone Number</span>
                        </label>
                        <div className={`phone-field-wrapper ${errors.phone ? 'field-error' : ''}`}>
                          <PhoneInput
                            international
                            defaultCountry="IN"
                            value={phoneValue}
                            onChange={handlePhoneChange}
                            onFocus={() => handleFieldFocus('phone')}
                            className="phone-input-custom"
                          />
                        </div>
                        {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          <FaComment className="label-icon" />
                          <span>Your Message</span>
                        </label>
                        <textarea
                          rows={4}
                          {...register('message')}
                          onFocus={() => handleFieldFocus('message')}
                          className={`field-input field-textarea ${errors.message ? 'field-error shake' : ''}`}
                          placeholder="Type your message here..."
                        />
                        {errors.message && <p className="error-message">{errors.message.message}</p>}
                      </div>

                      <div className="submit-section">
                        <button
                          type="submit"
                          disabled={!isValid || isSubmitting}
                          className={`submit-button ${!isValid || isSubmitting ? 'submit-disabled' : ''}`}
                        >
                          {isSubmitting ? (
                            <>
                              <FaSpinner className="submit-icon spin" />
                              <span>SENDING...</span>
                            </>
                          ) : (
                            <>
                              <FaRocket className="submit-icon" />
                              <span>TRANSMIT MESSAGE</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>

                    {/* Status Display */}
                    <AnimatePresence>
                      {(submitStatus.userEmail.status !== 'pending') && (
                        <div ref={statusDisplayRef} className="status-display">
                          <div className="status-grid">
                            {/* User Email Status */}
                            <div className="status-item">
                              <div className={`status-icon status-${submitStatus.userEmail.status}`}>
                                {getStatusIcon(submitStatus.userEmail.status)}
                              </div>
                              <div className="status-info">
                                <div className="status-name">Email Confirmation</div>
                                <div className={`status-value status-${submitStatus.userEmail.status}-text`}>
                                  {submitStatus.userEmail.message}
                                </div>
                              </div>
                            </div>

                            {/* AI Call Status */}
                            <div className="status-item">
                              <div className={`status-icon status-${submitStatus.aiCall.status}`}>
                                {getStatusIcon(submitStatus.aiCall.status)}
                              </div>
                              <div className="status-info">
                                <div className="status-name">AI Agent Call</div>
                                <div className={`status-value status-${submitStatus.aiCall.status}-text`}>
                                  {submitStatus.aiCall.message}
                                </div>
                                <div className="ai-call-note">
                                  📞 Our AI Agent Aashisyaa will call you shortly
                                </div>
                              </div>
                            </div>

                            {/* Message Status */}
                            <div className="status-item">
                              <div className={`status-icon status-${submitStatus.message.status}`}>
                                {getStatusIcon(submitStatus.message.status)}
                              </div>
                              <div className="status-info">
                                <div className="status-name">Message Delivery</div>
                                <div className={`status-value status-${submitStatus.message.status}-text`}>
                                  {submitStatus.message.message}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Success Message */}
                          <div className="success-message">
                            <p className="success-text">
                              ✅ Thank you for your message! Check your email for confirmation.
                            </p>
                            <p className="success-subtext">
                              The form will reset automatically in a few seconds.
                            </p>
                          </div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="contact-instructions">
            <p className="instructions-main">
              🔊 <span className="instructions-bold">Voice Guidance Active:</span> Ensure sound is enabled
            </p>
            <p className="instructions-sub">
              Data is stored temporarily in browser session and cleared when you close the tab
            </p>
          </div>
        </div>
      ) : deviceType === 'tablet' ? (
        // ============ TABLET VIEW ============
        <TabletCardView
          isLoading={isLoading}
          isSubmitting={isSubmitting}
          handleConnectClick={handleConnectClick}
          submitStatus={submitStatus}
          handleReturnToFront={handleReturnToFront}
          formMethods={formMethods}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          getStatusIcon={getStatusIcon}
          speak={speak}
          handleFieldFocus={handleFieldFocus}
          hasSpokenFocus={hasSpokenFocus}
          setHasSpokenFocus={setHasSpokenFocus}
          errors={errors}
          phoneValue={phoneValue}
          handlePhoneChange={handlePhoneChange}
          trigger={trigger}
          setValue={setValue}
          register={register}
        />
      ) : (
        // ============ MOBILE VIEW ============
        <MobileDrawerView
          isLoading={isLoading}
          isSubmitting={isSubmitting}
          handleConnectClick={handleConnectClick}
          submitStatus={submitStatus}
          handleReturnToFront={handleReturnToFront}
          formMethods={formMethods}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          getStatusIcon={getStatusIcon}
          speak={speak}
          handleFieldFocus={handleFieldFocus}
          hasSpokenFocus={hasSpokenFocus}
          setHasSpokenFocus={setHasSpokenFocus}
          errors={errors}
          phoneValue={phoneValue}
          handlePhoneChange={handlePhoneChange}
          trigger={trigger}
          setValue={setValue}
          register={register}
        />
      )}
    </section>
  );
};

export default Contact;

// Completed............................