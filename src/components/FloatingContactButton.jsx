import React, { useState } from 'react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Replace with your actual phone number and WhatsApp link
  const phoneNumber = '7200913535';
  const whatsappLink = 'https://wa.me/7200913535';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1000 }}>
      {isOpen && (
        <div className="d-flex flex-column mb-2">
          <button 
            onClick={handlePhoneClick}
            className="btn btn-primary rounded-circle mb-2"
            title="Call us"
          >
            <i className="bi bi-telephone-fill fs-4"></i>
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="btn btn-success rounded-circle"
            title="Chat on WhatsApp"
          >
            <i className="bi bi-whatsapp fs-4"></i>
          </button>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-secondary rounded-circle"
        title={isOpen ? 'Close' : 'Contact us'}
      >
        <i className={`bi fs-4 ${isOpen ? 'bi-x-lg' : 'bi-chat-dots-fill'}`}></i>
      </button>
    </div>
  );
};

export default FloatingContactButton;