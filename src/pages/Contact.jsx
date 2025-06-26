import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_clts9rs', // Replace with your EmailJS service ID
      'template_r9n3mas', // Replace with your EmailJS template ID
      form.current,
      'xbR15LwPRtNlxyzKP' // Replace with your EmailJS public key
    )
      .then((result) => {
        toast.success('Message sent successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        form.current.reset();
      }, (error) => {
        toast.error('Failed to send message. Please try again.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div className="contact-page" style={{
      background: '#0a0a0a',
      color: '#ffffff',
      minHeight: '100vh'
    }}>
      <ToastContainer />

      {/* Hero Section */}
      <section className="hero-section py-5" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #8B0000 50%, #0a0a0a 100%)',
        padding: '6rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3" style={{
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(139, 0, 0, 0.5)',
            letterSpacing: '1px'
          }}>
            Contact EntryKode
          </h1>
          <p className="lead mb-5" style={{
            fontSize: '1.25rem',
            maxWidth: '700px',
            margin: '0 auto',
            color: 'rgba(255,255,255,0.8)'
          }}>
            Get in touch with our team for inquiries, support, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5" style={{
        backgroundColor: '#111111',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 p-4" style={{
                borderRadius: '12px',
                background: '#1e1e1e',
                boxShadow: '0 8px 32px rgba(139, 0, 0, 0.2)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <h2 className="fw-bold mb-4 text-center" style={{
                  color: '#ffffff',
                  fontSize: '2rem',
                  position: 'relative',
                  paddingBottom: '15px'
                }}>
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #8B0000, #ffffff)'
                  }}></span>
                  Send Us a Message
                </h2>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="name" className="form-label" style={{
                        color: '#ffffff',
                        fontWeight: '500'
                      }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        style={{
                          backgroundColor: '#2a2a2a',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#ffffff',
                          padding: '14px',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="email" className="form-label" style={{
                        color: '#ffffff',
                        fontWeight: '500'
                      }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                        style={{
                          backgroundColor: '#2a2a2a',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#ffffff',
                          padding: '14px',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="form-label" style={{
                      color: '#ffffff',
                      fontWeight: '500'
                    }}>
                      Subject
                    </label>
                    <select
                      className="form-select"
                      id="subject"
                      name="subject"
                      required
                      style={{
                        backgroundColor: '#2a2a2a',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#ffffff',
                        padding: '14px',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Support Request</option>
                      <option>Partnership Opportunity</option>
                      <option>Career Inquiry</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message" className="form-label" style={{
                      color: '#ffffff',
                      fontWeight: '500'
                    }}>
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Your message"
                      required
                      style={{
                        backgroundColor: '#2a2a2a',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#ffffff',
                        padding: '14px',
                        borderRadius: '8px',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-lg px-5"
                      style={{
                        background: 'linear-gradient(135deg, #8B0000, #6B0000)',
                        color: 'white',
                        border: 'none',
                        padding: '14px 40px',
                        fontWeight: '600',
                        letterSpacing: '1px',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(139, 0, 0, 0.4)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #6B0000, #8B0000)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #8B0000, #6B0000)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg,rgb(196, 195, 195) 0%, #8B0000 50%,rgb(127, 123, 123) 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{
            color: '#ffffff',
            fontSize: '2.2rem'
          }}>
            Contact Information
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0" style={{
                backgroundColor: 'rgba(30,30,30,0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="card-body text-center p-4">
                  <div className="icon-box mb-4 mx-auto" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <i className="bi bi-geo-alt fs-3" style={{
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #8B0000, #ffffff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}></i>
                  </div>
                  <h3 className="fw-bold mb-3" style={{
                    color: '#ffffff',
                    fontSize: '1.5rem'
                  }}>
                    Our Office
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.7'
                  }}>
                    No.4, 1st Floor, Ganapathy Koil St,<br />
                    Nehru Nagar, Kamaraj Nagar,<br />
                    TNHB Mig V Block, Avadi,<br />
                    Tamil Nadu 600071
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0" style={{
                backgroundColor: 'rgba(30,30,30,0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="card-body text-center p-4">
                  <div className="icon-box mb-4 mx-auto" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <i className="bi bi-telephone fs-3" style={{
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #8B0000, #ffffff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}></i>
                  </div>
                  <h3 className="fw-bold mb-3" style={{
                    color: '#ffffff',
                    fontSize: '1.5rem'
                  }}>
                    Call Us
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.7'
                  }}>
                    <i className="bi bi-phone me-2"></i>+91 7200913535<br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0" style={{
                backgroundColor: 'rgba(30,30,30,0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="card-body text-center p-4">
                  <div className="icon-box mb-4 mx-auto" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <i className="bi bi-envelope fs-3" style={{
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #8B0000, #ffffff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}></i>
                  </div>
                  <h3 className="fw-bold mb-3" style={{
                    color: '#ffffff',
                    fontSize: '1.5rem'
                  }}>
                    Email Us
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.7'
                  }}>
                    info@entrykode.com<br />
                    support@entrykode.com<br />
                    careers@entrykode.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5" style={{
        backgroundColor: '#111111',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{
              color: '#ffffff',
              fontSize: '2.2rem',
              marginBottom: '1rem'
            }}>
              Our Location
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.1rem'
            }}>
              Visit our headquarters or find us on the map
            </p>
          </div>
          <div className="shadow-lg rounded overflow-hidden" style={{
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16817.92552130447!2d80.09456500363984!3d13.116278093402805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289d630d401f3%3A0x52445b74ccc7a390!2sEntrykode%20IT%20Services!5e1!3m2!1sen!2sin!4v1750840139516!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #8B0000 0%,rgb(42, 41, 41) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container text-center position-relative">
          <h2 className="fw-bold mb-4" style={{
            color: '#ffffff',
            fontSize: '2.2rem'
          }}>
            Need Immediate Assistance?
          </h2>
          <p className="mb-4" style={{
            maxWidth: '700px',
            margin: '0 auto',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '1.1rem'
          }}>
            Our support team is available 24/7 to help with your technical needs.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a target='_blank' href="tel:7200913535"><button className="btn btn-lg px-4" style={{
              fontWeight: '600',
              minWidth: '220px',
              padding: '12px 24px',
              background: '#ffffff',
              color: '#8B0000',
              border: 'none',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.9)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Call Support Now
            </button></a>
            <a target='_blank' href="https://wa.me/7200913535">
              <button className="btn btn-lg px-4" style={{
                fontWeight: '600',
                minWidth: '220px',
                padding: '12px 24px',
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Live Chat
              </button></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;