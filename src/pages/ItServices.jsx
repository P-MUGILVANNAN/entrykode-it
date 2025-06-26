import React from 'react';
import { Link } from 'react-router-dom';

function ItServices() {
  const services = [
    {
      icon: 'bi-code-slash',
      title: 'Web Development',
      description: 'Custom website development using modern technologies like React, Angular, and Vue.js.'
    },
    {
      icon: 'bi-phone',
      title: 'Mobile App Development',
      description: 'iOS and Android app development with Flutter or React Native for cross-platform solutions.'
    },
    {
      icon: 'bi-cloud',
      title: 'Cloud Services',
      description: 'Cloud migration, management, and optimization for AWS, Azure, and Google Cloud.'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Networking',
      description: 'Comprehensive security solutions to protect your digital assets and data.'
    },
    {
      icon: 'bi-palette',
      title: 'Designing',
      description: 'Creative UI/UX design services to enhance user experience and engagement.'
    },
    {
      icon: 'bi-server',
      title: 'IT Consulting',
      description: 'Strategic IT planning and consulting to align technology with business goals.'
    }
  ];

  return (
    <div className="text-white" style={{
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #000000 0%,rgb(182, 53, 53) 50%, #000000 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">
                <i className="bi bi-gear-fill me-3" style={{ color: '#ff4d4d' }}></i>
                <span style={{
                  background: 'linear-gradient(to right, #ffffff, #ff4d4d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  EntryKode IT Services
                </span>
              </h1>
              <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Cutting-edge technology solutions tailored to your business needs
              </p>
              <button className="btn btn-lg px-4 me-2" style={{
                background: 'linear-gradient(to right, #ff4d4d, #990000)',
                color: 'white',
                border: 'none'
              }}>
                Get Started <i className="bi bi-arrow-right"></i>
              </button>
              <button className="btn btn-lg px-4" style={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white'
              }}>
                Learn More
              </button>
            </div>
            <div className="col-lg-4 d-none d-lg-block text-center">
              <i className="bi bi-laptop" style={{
                fontSize: '10rem',
                color: 'rgba(255, 255, 255)',
                filter: 'drop-shadow(0 0 10px rgb(62, 62, 62))'
              }}></i>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold pb-3 d-inline-block" style={{
              borderBottom: '3px solid #ff4d4d',
              color: 'white'
            }}>
              Our IT Services
            </h2>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100" style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(255, 77, 77, 0.3)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '10px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="card-body text-center p-4">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(255,77,77,0.1) 0%, rgba(139,0,0,0.2) 100%)',
                      borderRadius: '50%',
                      marginBottom: '20px'
                    }}>
                      <i className={`bi ${service.icon}`} style={{
                        fontSize: '2rem',
                        color: '#ff4d4d'
                      }}></i>
                    </div>
                    <h3 className="card-title mt-3" style={{ color: 'white' }}>{service.title}</h3>
                    <p className="card-text" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {service.description}
                    </p>
                    <a href="#!" className="text-decoration-none" style={{
                      color: '#ff4d4d',
                      fontWeight: '500'
                    }}>
                      Learn more <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, rgba(234, 47, 47, 0.7) 0%, rgba(34, 34, 34, 0.8) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
            Ready to transform your business?
          </h2>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Contact us today for a free consultation
          </p>
          <Link to={'/contact'}>
            <button className="btn btn-lg px-5" style={{
              background: 'linear-gradient(to right, #000000, #1a1a1a)',
              color: 'white',
              border: '1px solid rgba(255, 77, 77, 0.5)',
              fontWeight: '500'
            }}>
              <i className="bi bi-envelope me-2"></i> Contact Us
            </button></Link>
        </div>
      </section>
    </div>
  );
}

export default ItServices;