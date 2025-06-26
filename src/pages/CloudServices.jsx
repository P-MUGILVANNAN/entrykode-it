import React from 'react';

function CloudServices() {
  const cloudServices = [
    {
      icon: 'bi-cloud-upload',
      title: 'Cloud Migration',
      description: 'Seamless transition of your infrastructure, applications, and data to the cloud with zero downtime.'
    },
    {
      icon: 'bi-server',
      title: 'Cloud Architecture',
      description: 'Design and implementation of scalable, secure, and cost-effective cloud infrastructure.'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Cloud Security',
      description: 'End-to-end security solutions including identity management, encryption, and compliance.'
    },
    {
      icon: 'bi-arrows-angle-contract',
      title: 'Cost Optimization',
      description: 'Right-sizing resources and implementing cost management strategies to reduce cloud spend.'
    },
    {
      icon: 'bi-bricks',
      title: 'Hybrid Cloud',
      description: 'Integration of public and private clouds with your on-premises infrastructure.'
    },
    {
      icon: 'bi-gear-wide-connected',
      title: 'Managed Services',
      description: '24/7 monitoring, maintenance, and support for your cloud environment.'
    }
  ];

  const technologies = [
    { name: 'AWS', icon: 'bi-amazon' },
    { name: 'Azure', icon: 'bi-microsoft' },
    { name: 'Google Cloud', icon: 'bi-google' },
    { name: 'Kubernetes', icon: 'bi-box-seam' },
    { name: 'Docker', icon: 'bi-box' },
    { name: 'Terraform', icon: 'bi-diagram-3' },
    { name: 'Ansible', icon: 'bi-terminal' },
    { name: 'Serverless', icon: 'bi-lightning' },
    { name: 'CI/CD', icon: 'bi-arrow-repeat' },
    { name: 'Microservices', icon: 'bi-puzzle' },
    { name: 'Big Data', icon: 'bi-database' },
    { name: 'AI/ML', icon: 'bi-cpu' }
  ];

  return (
    <div className="text-white" style={{
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #000000 0%, rgb(106, 53, 182) 50%, #000000 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">
                <i className="bi bi-cloud me-3" style={{ color: '#a855f7' }}></i>
                <span style={{
                  background: 'linear-gradient(to right, #ffffff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Cloud Services
                </span>
              </h1>
              <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Transform your business with secure, scalable, and optimized cloud solutions
              </p>
              <button className="btn btn-lg px-4 me-2" style={{
                background: 'linear-gradient(to right, #a855f7, #6b21a8)',
                color: 'white',
                border: 'none'
              }}>
                Get a Quote <i className="bi bi-arrow-right"></i>
              </button>
              <button className="btn btn-lg px-4" style={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white'
              }}>
                Case Studies
              </button>
            </div>
            <div className="col-lg-4 d-none d-lg-block text-center">
              <i className="bi bi-clouds" style={{
                fontSize: '10rem',
                color: 'rgba(255, 255, 255)',
                filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))'
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
              borderBottom: '3px solid #a855f7',
              color: 'white'
            }}>
              Our Cloud Solutions
            </h2>
          </div>
          <div className="row g-4">
            {cloudServices.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100" style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
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
                      background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(107,33,168,0.2) 100%)',
                      borderRadius: '50%',
                      marginBottom: '20px'
                    }}>
                      <i className={`bi ${service.icon}`} style={{
                        fontSize: '2rem',
                        color: '#a855f7'
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
              borderBottom: '3px solid #a855f7',
              color: 'white'
            }}>
              Cloud Technologies We Work With
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {technologies.map((tech, index) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                <div className="text-center p-3" style={{
                  background: 'rgba(168, 85, 247, 0.05)',
                  border: '1px solid rgba(168, 85, 247, 0.1)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  <i className={`bi ${tech.icon}`} style={{
                    fontSize: '2rem',
                    color: '#a855f7',
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
              borderBottom: '3px solid #a855f7',
              color: 'white'
            }}>
              Our Cloud Adoption Process
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
                  backgroundColor: 'rgba(168, 85, 247, 0.3)',
                  transform: 'translateX(-50%)'
                }}></div>

                {/* Process steps */}
                {[
                  { icon: 'bi-clipboard-data', title: 'Assessment', desc: 'Comprehensive analysis of your current infrastructure and workloads' },
                  { icon: 'bi-lightbulb', title: 'Strategy', desc: 'Developing a customized cloud adoption roadmap' },
                  { icon: 'bi-cloud-arrow-up', title: 'Migration', desc: 'Phased migration of applications and data with minimal disruption' },
                  { icon: 'bi-shield-check', title: 'Security', desc: 'Implementing security controls and compliance measures' },
                  { icon: 'bi-graph-up', title: 'Optimization', desc: 'Continuous monitoring and cost-performance optimization' },
                  { icon: 'bi-arrow-repeat', title: 'Managed Services', desc: 'Ongoing management and support for your cloud environment' }
                ].map((step, index) => (
                  <div key={index} className="position-relative mb-5" style={{
                    paddingLeft: index % 2 === 0 ? '0' : '50%',
                    paddingRight: index % 2 === 0 ? '50%' : '0',
                    textAlign: index % 2 === 0 ? 'right' : 'left'
                  }}>
                    <div className="p-4" style={{
                      background: 'rgba(30, 30, 30, 0.7)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: '8px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#a855f7',
                        top: '50%',
                        left: index % 2 === 0 ? 'calc(100% + 30px)' : 'unset',
                        right: index % 2 === 0 ? 'unset' : 'calc(100% + 30px)',
                        transform: 'translateY(-50%)'
                      }}></div>
                      <h4 style={{ color: '#a855f7' }}>
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
        background: 'linear-gradient(135deg, rgba(107, 33, 168, 0.7) 0%, rgba(34, 34, 34, 0.8) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
            Ready to Elevate Your Business to the Cloud?
          </h2>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Let our cloud experts guide your digital transformation journey
          </p>
          <a target='_blank' href="https://wa.me/7200913535">
            <button className="btn btn-lg px-5" style={{
              background: 'linear-gradient(to right, #000000, #1a1a1a)',
              color: 'white',
              border: '1px solid rgba(168, 85, 247, 0.5)',
              fontWeight: '500'
            }}>
              <i className="bi bi-chat-dots me-2"></i> Contact Our Team
            </button></a>
        </div>
      </section>
    </div>
  );
}

export default CloudServices;