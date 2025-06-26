import React from 'react';

function Networking() {
  const networkServices = [
    {
      icon: 'bi-diagram-3',
      title: 'Network Design & Architecture',
      description: 'Custom network solutions tailored to your business needs with optimal performance and scalability.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Network Security',
      description: 'Comprehensive security solutions including firewalls, VPNs, and intrusion detection systems.'
    },
    {
      icon: 'bi-speedometer2',
      title: 'Performance Optimization',
      description: 'Network tuning and optimization for maximum throughput and minimal latency.'
    },
    {
      icon: 'bi-cloud',
      title: 'Cloud Networking',
      description: 'Seamless integration of cloud services with your existing network infrastructure.'
    },
    {
      icon: 'bi-wifi',
      title: 'Wireless Solutions',
      description: 'Enterprise-grade wireless networks with complete coverage and security.'
    },
    {
      icon: 'bi-building-gear',
      title: 'Network Monitoring',
      description: '24/7 monitoring and alerting to ensure network health and quick issue resolution.'
    }
  ];

  const technologies = [
    { name: 'Cisco', icon: 'bi-router' },
    { name: 'Juniper', icon: 'bi-router' },
    { name: 'Fortinet', icon: 'bi-shield-lock' },
    { name: 'Palo Alto', icon: 'bi-shield-check' },
    { name: 'AWS Networking', icon: 'bi-cloud' },
    { name: 'Azure Networking', icon: 'bi-microsoft' },
    { name: 'SD-WAN', icon: 'bi-globe2' },
    { name: 'MPLS', icon: 'bi-node-plus' },
    { name: 'BGP/OSPF', icon: 'bi-diagram-2' },
    { name: 'VLAN/VXLAN', icon: 'bi-layers' },
    { name: 'VoIP', icon: 'bi-telephone' },
    { name: 'QoS', icon: 'bi-speedometer' }
  ];

  return (
    <div className="text-white" style={{
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #000000 0%, rgb(53, 88, 182) 50%, #000000 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">
                <i className="bi bi-hdd-network me-3" style={{ color: '#4d88ff' }}></i>
                <span style={{
                  background: 'linear-gradient(to right, #ffffff, #4d88ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Networking Services
                </span>
              </h1>
              <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Enterprise-grade network solutions designed for reliability, security, and performance
              </p>
              <button className="btn btn-lg px-4 me-2" style={{
                background: 'linear-gradient(to right, #4d88ff, #003399)',
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
              <i className="bi bi-diagram-3" style={{
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
              borderBottom: '3px solid #4d88ff',
              color: 'white'
            }}>
              Our Networking Solutions
            </h2>
          </div>
          <div className="row g-4">
            {networkServices.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100" style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(77, 136, 255, 0.3)',
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
                      background: 'linear-gradient(135deg, rgba(77,136,255,0.1) 0%, rgba(0,51,153,0.2) 100%)',
                      borderRadius: '50%',
                      marginBottom: '20px'
                    }}>
                      <i className={`bi ${service.icon}`} style={{
                        fontSize: '2rem',
                        color: '#4d88ff'
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
              borderBottom: '3px solid #4d88ff',
              color: 'white'
            }}>
              Technologies We Work With
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {technologies.map((tech, index) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                <div className="text-center p-3" style={{
                  background: 'rgba(77, 136, 255, 0.05)',
                  border: '1px solid rgba(77, 136, 255, 0.1)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  <i className={`bi ${tech.icon}`} style={{
                    fontSize: '2rem',
                    color: '#4d88ff',
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
              borderBottom: '3px solid #4d88ff',
              color: 'white'
            }}>
              Our Implementation Process
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
                  backgroundColor: 'rgba(77, 136, 255, 0.3)',
                  transform: 'translateX(-50%)'
                }}></div>

                {/* Process steps */}
                {[
                  { icon: 'bi-search', title: 'Assessment', desc: 'Comprehensive analysis of your current network infrastructure' },
                  { icon: 'bi-clipboard-data', title: 'Planning', desc: 'Designing the optimal network architecture for your needs' },
                  { icon: 'bi-tools', title: 'Implementation', desc: 'Professional deployment with minimal disruption' },
                  { icon: 'bi-shield-check', title: 'Security Hardening', desc: 'Applying security best practices and configurations' },
                  { icon: 'bi-graph-up', title: 'Monitoring Setup', desc: 'Implementing monitoring and alerting systems' },
                  { icon: 'bi-file-earmark-text', title: 'Documentation', desc: 'Complete network documentation for future reference' }
                ].map((step, index) => (
                  <div key={index} className="position-relative mb-5" style={{
                    paddingLeft: index % 2 === 0 ? '0' : '50%',
                    paddingRight: index % 2 === 0 ? '50%' : '0',
                    textAlign: index % 2 === 0 ? 'right' : 'left'
                  }}>
                    <div className="p-4" style={{
                      background: 'rgba(30, 30, 30, 0.7)',
                      border: '1px solid rgba(77, 136, 255, 0.3)',
                      borderRadius: '8px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#4d88ff',
                        top: '50%',
                        left: index % 2 === 0 ? 'calc(100% + 30px)' : 'unset',
                        right: index % 2 === 0 ? 'unset' : 'calc(100% + 30px)',
                        transform: 'translateY(-50%)'
                      }}></div>
                      <h4 style={{ color: '#4d88ff' }}>
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
        background: 'linear-gradient(135deg, rgba(47, 102, 234, 0.7) 0%, rgba(34, 34, 34, 0.8) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
            Need Expert Network Solutions?
          </h2>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Let our network specialists design the perfect solution for your business
          </p>
          <a target='_blank' href="https://wa.me/7200913535">
            <button className="btn btn-lg px-5" style={{
              background: 'linear-gradient(to right, #000000, #1a1a1a)',
              color: 'white',
              border: '1px solid rgba(77, 136, 255, 0.5)',
              fontWeight: '500'
            }}>
              <i className="bi bi-chat-dots me-2"></i> Contact Our Team
            </button></a>
        </div>
      </section>
    </div>
  );
}

export default Networking;