import React from 'react';

function WebDevelopment() {
  const webServices = [
    {
      icon: 'bi-globe',
      title: 'Frontend Development',
      description: 'Beautiful, responsive interfaces built with React, Angular, or Vue.js that engage your users.'
    },
    {
      icon: 'bi-server',
      title: 'Backend Development',
      description: 'Robust server-side solutions with Node.js, Django, or .NET for seamless functionality.'
    },
    {
      icon: 'bi-phone',
      title: 'Mobile-First Design',
      description: 'Websites that look and perform perfectly on all devices from the ground up.'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Performance Optimization',
      description: 'Lightning-fast load times and smooth interactions for better user experience and SEO.'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Security Implementation',
      description: 'Enterprise-grade security measures to protect your site and user data.'
    },
    {
      icon: 'bi-graph-up',
      title: 'SEO Optimization',
      description: 'Technical SEO foundations that help your site rank higher in search results.'
    }
  ];

  const technologies = [
    { name: 'React', icon: 'bi-filetype-jsx' },
    { name: 'Angular', icon: 'bi-typescript' },
    { name: 'Vue.js', icon: 'bi-filetype-js' },
    { name: 'Node.js', icon: 'bi-filetype-js' },
    { name: 'Express.js', icon: 'bi-filetype-js' },
    { name: 'Django', icon: 'bi-filetype-py' },
    { name: 'Spring Boot', icon: 'bi-leaf' },
    { name: '.NET Core', icon: 'bi-filetype-cs' },
    { name: 'MongoDB', icon: 'bi-database' },
    { name: 'MySQL', icon: 'bi-database-check' },
    { name: 'PostgreSQL', icon: 'bi-database-check' }
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
                <i className="bi bi-code-slash me-3" style={{ color: '#ff4d4d' }}></i>
                <span style={{
                  background: 'linear-gradient(to right, #ffffff, #ff4d4d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Web Development Services
                </span>
              </h1>
              <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                We build high-performance, scalable web applications tailored to your business requirements
              </p>
              <button className="btn btn-lg px-4 me-2" style={{
                background: 'linear-gradient(to right, #ff4d4d, #990000)',
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
              <i className="bi bi-window" style={{
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
              Our Web Development Offerings
            </h2>
          </div>
          <div className="row g-4">
            {webServices.map((service, index) => (
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
              borderBottom: '3px solid #ff4d4d',
              color: 'white'
            }}>
              Technologies We Work With
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {technologies.map((tech, index) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                <div className="text-center p-3" style={{
                  background: 'rgba(255, 77, 77, 0.05)',
                  border: '1px solid rgba(255, 77, 77, 0.1)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  <i className={`bi ${tech.icon}`} style={{
                    fontSize: '2rem',
                    color: '#ff4d4d',
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
              borderBottom: '3px solid #ff4d4d',
              color: 'white'
            }}>
              Our Development Process
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
                  backgroundColor: 'rgba(255, 77, 77, 0.3)',
                  transform: 'translateX(-50%)'
                }}></div>

                {/* Process steps */}
                {[
                  { icon: 'bi-search', title: 'Discovery', desc: 'Understanding your business needs and objectives' },
                  { icon: 'bi-pencil', title: 'Planning', desc: 'Creating detailed specifications and architecture' },
                  { icon: 'bi-code', title: 'Development', desc: 'Building your solution with clean, maintainable code' },
                  { icon: 'bi-check-circle', title: 'Testing', desc: 'Rigorous quality assurance at every stage' },
                  { icon: 'bi-rocket', title: 'Deployment', desc: 'Smooth launch with zero downtime' }
                ].map((step, index) => (
                  <div key={index} className="position-relative mb-5" style={{
                    paddingLeft: index % 2 === 0 ? '0' : '50%',
                    paddingRight: index % 2 === 0 ? '50%' : '0',
                    textAlign: index % 2 === 0 ? 'right' : 'left'
                  }}>
                    <div className="p-4" style={{
                      background: 'rgba(30, 30, 30, 0.7)',
                      border: '1px solid rgba(255, 77, 77, 0.3)',
                      borderRadius: '8px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#ff4d4d',
                        top: '50%',
                        left: index % 2 === 0 ? 'calc(100% + 30px)' : 'unset',
                        right: index % 2 === 0 ? 'unset' : 'calc(100% + 30px)',
                        transform: 'translateY(-50%)'
                      }}></div>
                      <h4 style={{ color: '#ff4d4d' }}>
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
        background: 'linear-gradient(135deg, rgba(234, 47, 47, 0.7) 0%, rgba(34, 34, 34, 0.8) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
            Ready to Build Your Next Web Project?
          </h2>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Let's discuss how we can bring your vision to life
          </p>
          <a target='_blank' href="https://wa.me/7200913535">
            <button className="btn btn-lg px-5" style={{
              background: 'linear-gradient(to right, #000000, #1a1a1a)',
              color: 'white',
              border: '1px solid rgba(255, 77, 77, 0.5)',
              fontWeight: '500'
            }}>
              <i className="bi bi-chat-dots me-2"></i> Contact Our Team
            </button></a>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;