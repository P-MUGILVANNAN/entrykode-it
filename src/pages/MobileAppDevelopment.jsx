import React from 'react';

function MobileAppDevelopment() {
  const mobileServices = [
    {
      icon: 'bi-phone',
      title: 'iOS Development',
      description: 'Beautiful, high-performance native iOS apps built with Swift and SwiftUI.'
    },
    {
      icon: 'bi-phone',
      title: 'Android Development',
      description: 'Robust native Android applications using Kotlin and Jetpack Compose.'
    },
    {
      icon: 'bi-phone',
      title: 'Cross-Platform Apps',
      description: 'Single codebase solutions with Flutter or React Native for both platforms.'
    },
    {
      icon: 'bi-joystick',
      title: 'UI/UX Design',
      description: 'Intuitive interfaces with seamless user experiences tailored for mobile.'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'App Optimization',
      description: 'Performance tuning and battery efficiency improvements.'
    },
    {
      icon: 'bi-shield-check',
      title: 'App Security',
      description: 'Secure coding practices and penetration testing for mobile apps.'
    }
  ];

  const technologies = [
    { name: 'Swift', icon: 'bi-apple' },
    { name: 'Kotlin', icon: 'bi-android2' },
    { name: 'Flutter', icon: 'bi-box' },
    { name: 'React Native', icon: 'bi-filetype-jsx' },
    { name: 'Firebase', icon: 'bi-database' },
    { name: 'GraphQL', icon: 'bi-diagram-2' },
    { name: 'Redux', icon: 'bi-boxes' },
    { name: 'MVVM', icon: 'bi-layers' },
    { name: 'Jetpack', icon: 'bi-android' },
    { name: 'SwiftUI', icon: 'bi-app' },
    { name: 'ML Kit', icon: 'bi-cpu' }
  ];

  return (
    <div className="text-white" style={{
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #000000 0%, rgb(53, 182, 88) 50%, #000000 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">
                <i className="bi bi-phone me-3" style={{ color: '#10b981' }}></i>
                <span style={{
                  background: 'linear-gradient(to right, #ffffff, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Mobile App Development
                </span>
              </h1>
              <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Crafting exceptional mobile experiences that users love and businesses thrive on
              </p>
              <button className="btn btn-lg px-4 me-2" style={{
                background: 'linear-gradient(to right, #10b981, #047857)',
                color: 'white',
                border: 'none'
              }}>
                Get a Quote <i className="bi bi-arrow-right"></i>
              </button>
              <button className="btn btn-lg px-4" style={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white'
              }}>
                View Portfolio
              </button>
            </div>
            <div className="col-lg-4 d-none d-lg-block text-center">
              <div style={{ position: 'relative' }}>
                <i className="bi bi-phone" style={{
                  fontSize: '10rem',
                  color: 'rgba(255, 255, 255)',
                  filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))',
                  transform: 'rotate(15deg)'
                }}></i>
                <i className="bi bi-phone" style={{
                  fontSize: '10rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  position: 'absolute',
                  left: '50px',
                  top: '20px',
                  filter: 'drop-shadow(0 0 5px rgba(16, 185, 129, 0.3))',
                  transform: 'rotate(-10deg)',
                  zIndex: '-1'
                }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold pb-3 d-inline-block" style={{
              borderBottom: '3px solid #10b981',
              color: 'white'
            }}>
              Our Mobile Development Services
            </h2>
          </div>
          <div className="row g-4">
            {mobileServices.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100" style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
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
                      background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(4,120,87,0.2) 100%)',
                      borderRadius: '50%',
                      marginBottom: '20px'
                    }}>
                      <i className={`bi ${service.icon}`} style={{
                        fontSize: '2rem',
                        color: '#10b981'
                      }}></i>
                    </div>
                    <h3 className="card-title mt-3" style={{ color: 'white' }}>{service.title}</h3>
                    <p className="card-text" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-5" style={{
        background: 'rgba(20, 20, 20, 0.7)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold pb-3 d-inline-block" style={{
              borderBottom: '3px solid #10b981',
              color: 'white'
            }}>
              Mobile Technologies We Use
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {technologies.map((tech, index) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                <div className="text-center p-3" style={{
                  background: 'rgba(16, 185, 129, 0.05)',
                  border: '1px solid rgba(16, 185, 129, 0.1)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  <i className={`bi ${tech.icon}`} style={{
                    fontSize: '2rem',
                    color: '#10b981',
                    marginBottom: '10px'
                  }}></i>
                  <h5 style={{ color: 'white' }}>{tech.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold pb-3 d-inline-block" style={{
              borderBottom: '3px solid #10b981',
              color: 'white'
            }}>
              Our App Development Process
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="position-relative">
                {/* Timeline line */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '0',
                  bottom: '0',
                  width: '2px',
                  backgroundColor: 'rgba(16, 185, 129, 0.3)',
                  transform: 'translateX(-50%)'
                }}></div>

                {/* Process steps */}
                {[
                  { icon: 'bi-search', title: 'Discovery', desc: 'Understanding your business goals and user needs' },
                  { icon: 'bi-palette', title: 'UI/UX Design', desc: 'Creating wireframes, prototypes, and design systems' },
                  { icon: 'bi-code-slash', title: 'Development', desc: 'Agile development with sprints and regular demos' },
                  { icon: 'bi-bug', title: 'Testing', desc: 'Comprehensive QA across devices and OS versions' },
                  { icon: 'bi-cloud-upload', title: 'Deployment', desc: 'App store submission and release management' },
                  { icon: 'bi-graph-up', title: 'Maintenance', desc: 'Ongoing updates, feature additions, and support' }
                ].map((step, index) => (
                  <div key={index} className="position-relative mb-5" style={{
                    paddingLeft: index % 2 === 0 ? '0' : '50%',
                    paddingRight: index % 2 === 0 ? '50%' : '0',
                    textAlign: index % 2 === 0 ? 'right' : 'left'
                  }}>
                    <div className="p-4" style={{
                      background: 'rgba(30, 30, 30, 0.7)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '8px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        top: '50%',
                        left: index % 2 === 0 ? 'calc(100% + 30px)' : 'unset',
                        right: index % 2 === 0 ? 'unset' : 'calc(100% + 30px)',
                        transform: 'translateY(-50%)'
                      }}></div>
                      <h4 style={{ color: '#10b981' }}>
                        <i className={`bi ${step.icon} me-2`}></i>
                        {step.title}
                      </h4>
                      <p style={{ color: 'rgba(255,255,255,0.7)' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.7) 0%, rgba(34, 34, 34, 0.8) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
            Ready to Build Your Mobile App?
          </h2>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Let's create an app that stands out in the competitive mobile marketplace
          </p>
          <a target='_blank' href="https://wa.me/7200913535">
            <button className="btn btn-lg px-5" style={{
              background: 'linear-gradient(to right, #000000, #1a1a1a)',
              color: 'white',
              border: '1px solid rgba(16, 185, 129, 0.5)',
              fontWeight: '500'
            }}>
              <i className="bi bi-chat-dots me-2"></i> Contact Our Team
            </button></a>
        </div>
      </section>
    </div>
  );
}

export default MobileAppDevelopment;