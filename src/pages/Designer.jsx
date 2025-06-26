import React from 'react';

function Designer() {
  const designServices = [
    {
      icon: 'bi-palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and drive engagement.'
    },
    {
      icon: 'bi-phone',
      title: 'Mobile App Design',
      description: 'Pixel-perfect mobile interfaces optimized for iOS and Android platforms.'
    },
    {
      icon: 'bi-window',
      title: 'Web Design',
      description: 'Responsive websites with modern aesthetics and seamless navigation.'
    },
    {
      icon: 'bi-brush',
      title: 'Brand Identity',
      description: 'Comprehensive branding including logos, color schemes, and typography systems.'
    },
    {
      icon: 'bi-magic',
      title: 'Motion Design',
      description: 'Engaging animations and micro-interactions that bring interfaces to life.'
    },
    {
      icon: 'bi-layout-text-window',
      title: 'Design Systems',
      description: 'Scalable component libraries and style guides for consistent product design.'
    }
  ];

  const tools = [
    { name: 'Figma', icon: 'bi-pencil-square' },
    { name: 'Adobe XD', icon: 'bi-vector-pen' },
    { name: 'Sketch', icon: 'bi-bounding-box' },
    { name: 'Photoshop', icon: 'bi-image' },
    { name: 'Illustrator', icon: 'bi-pen' },
    { name: 'After Effects', icon: 'bi-film' },
    { name: 'InVision', icon: 'bi-window-stack' },
    { name: 'Framer', icon: 'bi-code-square' },
    { name: 'Principle', icon: 'bi-easel' },
    { name: 'Procreate', icon: 'bi-brush' },
    { name: 'Webflow', icon: 'bi-layout-text-sidebar' }
  ];

  return (
    <div className="text-white" style={{
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #000000 0%, rgb(182, 83, 83) 50%, #000000 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">
                <i className="bi bi-palette2 me-3" style={{ color: '#FF6B6B' }}></i>
                <span style={{
                  background: 'linear-gradient(to right, #ffffff, #FF6B6B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Design Services
                </span>
              </h1>
              <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Transforming ideas into visually stunning and functional design solutions
              </p>
              <button className="btn btn-lg px-4 me-2" style={{
                background: 'linear-gradient(to right, #FF6B6B, #CC5555)',
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
                <i className="bi bi-palette" style={{
                  fontSize: '10rem',
                  color: 'rgba(255, 255, 255)',
                  filter: 'drop-shadow(0 0 10px rgba(255, 107, 107, 0.5))'
                }}></i>
                <i className="bi bi-pencil" style={{
                  fontSize: '4rem',
                  color: '#FF6B6B',
                  position: 'absolute',
                  right: '30px',
                  top: '20px',
                  transform: 'rotate(15deg)'
                }}></i>
                <i className="bi bi-brush" style={{
                  fontSize: '3rem',
                  color: '#FF6B6B',
                  position: 'absolute',
                  left: '30px',
                  bottom: '20px',
                  transform: 'rotate(-15deg)'
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
              borderBottom: '3px solid #FF6B6B',
              color: 'white'
            }}>
              Our Design Expertise
            </h2>
          </div>
          <div className="row g-4">
            {designServices.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100" style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(255, 107, 107, 0.3)',
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
                      background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(204,85,85,0.2) 100%)',
                      borderRadius: '50%',
                      marginBottom: '20px'
                    }}>
                      <i className={`bi ${service.icon}`} style={{
                        fontSize: '2rem',
                        color: '#FF6B6B'
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

      {/* Tools Section */}
      <section className="py-5" style={{
        background: 'rgba(20, 20, 20, 0.7)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold pb-3 d-inline-block" style={{
              borderBottom: '3px solid #FF6B6B',
              color: 'white'
            }}>
              Design Tools We Master
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {tools.map((tool, index) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                <div className="text-center p-3" style={{
                  background: 'rgba(255, 107, 107, 0.05)',
                  border: '1px solid rgba(255, 107, 107, 0.1)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  <i className={`bi ${tool.icon}`} style={{
                    fontSize: '2rem',
                    color: '#FF6B6B',
                    marginBottom: '10px'
                  }}></i>
                  <h5 style={{ color: 'white' }}>{tool.name}</h5>
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
              borderBottom: '3px solid #FF6B6B',
              color: 'white'
            }}>
              Our Design Process
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
                  backgroundColor: 'rgba(255, 107, 107, 0.3)',
                  transform: 'translateX(-50%)'
                }}></div>

                {/* Process steps */}
                {[
                  { icon: 'bi-search', title: 'Research', desc: 'Understanding users, competitors, and business objectives' },
                  { icon: 'bi-lightbulb', title: 'Ideation', desc: 'Brainstorming concepts and creating user flows' },
                  { icon: 'bi-pencil', title: 'Wireframing', desc: 'Low-fidelity layouts to establish structure' },
                  { icon: 'bi-palette', title: 'Visual Design', desc: 'High-fidelity mockups with colors, typography, and imagery' },
                  { icon: 'bi-magic', title: 'Prototyping', desc: 'Interactive prototypes to test user flows' },
                  { icon: 'bi-hand-thumbs-up', title: 'Testing', desc: 'User testing and design validation' },
                  { icon: 'bi-file-earmark-code', title: 'Handoff', desc: 'Developer-ready specs and assets' }
                ].map((step, index) => (
                  <div key={index} className="position-relative mb-5" style={{
                    paddingLeft: index % 2 === 0 ? '0' : '50%',
                    paddingRight: index % 2 === 0 ? '50%' : '0',
                    textAlign: index % 2 === 0 ? 'right' : 'left'
                  }}>
                    <div className="p-4" style={{
                      background: 'rgba(30, 30, 30, 0.7)',
                      border: '1px solid rgba(255, 107, 107, 0.3)',
                      borderRadius: '8px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#FF6B6B',
                        top: '50%',
                        left: index % 2 === 0 ? 'calc(100% + 30px)' : 'unset',
                        right: index % 2 === 0 ? 'unset' : 'calc(100% + 30px)',
                        transform: 'translateY(-50%)'
                      }}></div>
                      <h4 style={{ color: '#FF6B6B' }}>
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
        background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.7) 0%, rgba(34, 34, 34, 0.8) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
            Ready to Elevate Your Product Design?
          </h2>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Let's create something beautiful and functional together
          </p>
          <a target='_blank' href="https://wa.me/7200913535">
            <button className="btn btn-lg px-5" style={{
              background: 'linear-gradient(to right, #000000, #1a1a1a)',
              color: 'white',
              border: '1px solid rgba(255, 107, 107, 0.5)',
              fontWeight: '500'
            }}>
              <i className="bi bi-chat-dots me-2"></i> Contact Our Team
            </button></a>
        </div>
      </section>
    </div>
  );
}

export default Designer;