import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const email = 'info.entrykode@gmail.com';
  const phone = '7200913535';

  return (
    <>
      {/* Contact Info Bar - Hidden on mobile */}
      <div 
        className="d-none d-lg-flex justify-content-between align-items-center py-2 px-5 position-relative"
        style={{
          background: 'linear-gradient(90deg,rgb(205, 165, 165) 0%,rgb(35, 30, 30) 50%,rgb(255, 77, 77) 100%)',
          color: 'white',
          fontSize: '0.9rem',
          paddingTop: '50px'
        }}
      >
        {/* Logo that spans both sections - Hidden on mobile */}
        <Link to={'/'} 
          className="position-absolute top-0 start-0 ms-5 d-none d-lg-block" 
          style={{
            zIndex: 1000,
            transform: 'translateY(15px)'
          }}
        >
          <img 
            src="https://entrykode.com/wp-content/uploads/2023/02/cropped-cropped-cropped-cropped-WhatsApp_Image_2023-02-06_at_5.53.36_PM__3_-removebg-preview-1.png" 
            alt="Logo" 
            height="80"
            className="d-inline-block align-top"
          />
        </Link>
        
        <div className="ms-auto d-flex gap-3">
          <a 
            href={`mailto:${email}`} 
            className="text-white text-decoration-none d-flex align-items-center"
            style={{ transition: 'all 0.3s ease' }}
            onMouseOver={(e) => e.target.style.color = '#ff9999'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >
            <i className="bi bi-envelope-fill me-2"></i> {email}
          </a>
          <span className="text-white">|</span>
          <a 
            href={`tel:${phone}`} 
            className="text-white text-decoration-none d-flex align-items-center"
            style={{ transition: 'all 0.3s ease' }}
            onMouseOver={(e) => e.target.style.color = '#ff9999'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >
            <i className="bi bi-telephone-fill me-2"></i> {phone}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className="navbar navbar-expand-lg navbar-dark" 
        style={{ 
          background: 'linear-gradient(90deg,rgb(205, 165, 165) 0%,rgb(35, 30, 30) 50%,rgb(35, 35, 35) 100%)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          paddingTop: '20px'
        }}
      >
        <div className="container">
          {/* Visible logo on mobile, hidden on larger screens (replaced by the overlapping logo) */}
          <Link className="navbar-brand d-lg-none" to={'/'}>
            <img 
              src="https://entrykode.com/wp-content/uploads/2023/02/cropped-cropped-cropped-cropped-WhatsApp_Image_2023-02-06_at_5.53.36_PM__3_-removebg-preview-1.png" 
              alt="Logo" 
              height="40"
              className="d-inline-block align-top"
            />
          </Link>
          
          {/* Invisible spacer for desktop to balance the logo position */}
          <div className="navbar-brand d-none d-lg-block" style={{ visibility: 'hidden', height: '40px', width: '120px' }}></div>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            style={{ border: 'none' }}
          >
            <i className="bi bi-list text-white" style={{ fontSize: '1.8rem' }}></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} 
                  className="nav-link active d-flex align-items-center" 
                  aria-current="page" 
                  style={{ 
                    transition: 'all 0.3s ease',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    margin: '0 4px'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <i className="bi bi-house-door-fill me-2"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/about-us'} 
                  className="nav-link d-flex align-items-center" 
                  style={{ 
                    transition: 'all 0.3s ease',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    margin: '0 4px'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <i className="bi bi-info-circle-fill me-2"></i> About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle d-flex align-items-center" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style={{ 
                    transition: 'all 0.3s ease',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    margin: '0 4px'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <i className="bi bi-stack me-2"></i> Services
                </a>
                <ul className="dropdown-menu dropdown-menu-dark" style={{ 
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #8B0000 100%)',
                  border: '1px solid #ff0000'
                }}>
                  <li><Link to={'/it-services'} className="dropdown-item d-flex align-items-center"><i className="bi bi-pc-display-horizontal me-2"></i>IT Services</Link></li>
                  <li><Link to={'/networking'} className="dropdown-item d-flex align-items-center"><i className="bi bi-router-fill me-2"></i>Networking</Link></li>
                  <li><Link to={'/cloud-services'} className="dropdown-item d-flex align-items-center"><i className="bi bi-cloud-fill me-2"></i>Cloud Services</Link></li>
                  <li><Link to={'/web-development'} className="dropdown-item d-flex align-items-center"><i className="bi bi-code-square me-2"></i>Web Development</Link></li>
                  <li><Link to={'/mobile-development'} className="dropdown-item d-flex align-items-center"><i className="bi bi-phone-fill me-2"></i>Mobile Apps</Link></li>
                  <li><Link to={'/designer'} className="dropdown-item d-flex align-items-center"><i className="bi bi-palette-fill me-2"></i>Designing</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={'/contact'}
                  className="nav-link d-flex align-items-center" 
                  style={{ 
                    transition: 'all 0.3s ease',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    margin: '0 4px'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <i className="bi bi-chat-left-text-fill me-2"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;