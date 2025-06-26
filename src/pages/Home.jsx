import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Counter animation state
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    employees: 0,
    years: 0
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Animate counters
  useEffect(() => {
    const targetValues = {
      clients: 250,
      projects: 500,
      employees: 50,
      years: 12
    };

    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensure we don't go over 1

      setCounters({
        clients: Math.floor(progress * targetValues.clients),
        projects: Math.floor(progress * targetValues.projects),
        employees: Math.floor(progress * targetValues.employees),
        years: Math.floor(progress * targetValues.years)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    animateCounters();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert(`Thank you, ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              className="d-block w-100"
              alt="IT Services"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-4 rounded">
              <h2>Comprehensive IT Services</h2>
              <p>End-to-end technology services for your business growth</p>
              <Link to={'/it-services'}><button className="btn btn-danger">Explore Services</button></Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              className="d-block w-100"
              alt="Web Development"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-4 rounded">
              <h2>Custom Web Development</h2>
              <p>Building responsive and scalable web applications</p>
              <Link to={'/web-development'}><button className="btn btn-danger">Explore Services</button></Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              className="d-block w-100"
              alt="Cloud Services"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-4 rounded">
              <h2>Cloud Computing Services</h2>
              <p>Secure and reliable cloud infrastructure solutions</p>
              <Link to={'/cloud-services'}><button className="btn btn-danger">Explore Services</button></Link>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Stats Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <div className="counter-box p-4">
                <i className="bi bi-people-fill fs-1 text-danger mb-3"></i>
                <h3>{counters.clients}+</h3>
                <p className="mb-0">Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter-box p-4">
                <i className="bi bi-code-slash fs-1 text-danger mb-3"></i>
                <h3>{counters.projects}+</h3>
                <p className="mb-0">Projects Completed</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter-box p-4">
                <i className="bi bi-person-badge-fill fs-1 text-danger mb-3"></i>
                <h3>{counters.employees}+</h3>
                <p className="mb-0">Expert Employees</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter-box p-4">
                <i className="bi bi-award-fill fs-1 text-danger mb-3"></i>
                <h3>{counters.years}+</h3>
                <p className="mb-0">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Welcome to <span className="text-danger">EntryKode</span> IT Services</h2>
              <p className="lead">
                We deliver innovative technology solutions that drive business growth and digital transformation.
              </p>
              <p>
                Our team of experts specializes in creating customized IT solutions tailored to your specific business needs.
                From web development to cloud services, we provide end-to-end technology services that help your business thrive
                in the digital landscape.
              </p>
              <Link to={'/about-us'}><button className="btn btn-outline-danger">About Our Company</button></Link>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Our Team"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #8B0000 100%)', color: 'white' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our <span className="text-warning">Services</span></h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 card-hover shadow">
                <div className="card-body text-center p-4">
                  <i className="bi bi-code-square text-danger fs-1 mb-3"></i>
                  <h4 className="card-title">Web Development</h4>
                  <p className="card-text">
                    Custom website and web application development using modern technologies and frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 card-hover shadow">
                <div className="card-body text-center p-4">
                  <i className="bi bi-phone text-danger fs-1 mb-3"></i>
                  <h4 className="card-title">Mobile Apps</h4>
                  <p className="card-text">
                    Cross-platform mobile application development for iOS and Android devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 card-hover shadow">
                <div className="card-body text-center p-4">
                  <i className="bi bi-cloud text-danger fs-1 mb-3"></i>
                  <h4 className="card-title">Cloud Services</h4>
                  <p className="card-text">
                    Cloud infrastructure setup, migration, and management for scalable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 card-hover shadow">
                <div className="card-body text-center p-4">
                  <i className="bi bi-shield-lock text-danger fs-1 mb-3"></i>
                  <h4 className="card-title">Cyber Security</h4>
                  <p className="card-text">
                    Comprehensive security solutions to protect your digital assets and data.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 card-hover shadow">
                <div className="card-body text-center p-4">
                  <i className="bi bi-pc-display-horizontal text-danger fs-1 mb-3"></i>
                  <h4 className="card-title">IT Consulting</h4>
                  <p className="card-text">
                    Strategic IT consulting to align technology with your business objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 card-hover shadow">
                <div className="card-body text-center p-4">
                  <i className="bi bi-database text-danger fs-1 mb-3"></i>
                  <h4 className="card-title">Data Solutions</h4>
                  <p className="card-text">
                    Data management, analytics, and business intelligence services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to={'/it-services'}><button className="btn btn-outline-light">View All Services</button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What Our <span className="text-danger">Clients Say</span></h2>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm card-hover">
                <div className="card-body">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="card-text">
                    "EntryKode transformed our online presence with their web development expertise. Their team was professional and delivered beyond our expectations."
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Client"
                      className="rounded-circle me-3"
                      width="50"
                    />
                    <div>
                      <h6 className="mb-0">Rajesh Kumar</h6>
                      <small className="text-muted">CEO, TechSolutions</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm card-hover">
                <div className="card-body">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <p className="card-text">
                    "The mobile app developed by EntryKode has significantly improved our customer engagement. Their attention to detail is remarkable."
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Client"
                      className="rounded-circle me-3"
                      width="50"
                    />
                    <div>
                      <h6 className="mb-0">Priya Sharma</h6>
                      <small className="text-muted">Marketing Director, RetailPro</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm card-hover">
                <div className="card-body">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="card-text">
                    "Their cloud migration services saved us thousands in infrastructure costs while improving our system reliability."
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="Client"
                      className="rounded-circle me-3"
                      width="50"
                    />
                    <div>
                      <h6 className="mb-0">Amit Patel</h6>
                      <small className="text-muted">CTO, FinTech Global</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a0a0a 100%)',
        color: 'white',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">Let's <span className="text-warning">Connect</span></h2>
            <p className="lead opacity-75">Choose your preferred way to reach out.</p>
          </div>

          {/* Animated Contact Cards */}
          <div className="row g-4 justify-content-center">
            {/* 1. Email Card (Floating Animation) */}
            <div className="col-md-4 col-sm-6">
              <div className="contact-card bg-dark p-4 rounded-4 h-100 text-center border border-dark border-2 hover-effect">
                <div className="icon-box bg-warning rounded-circle d-inline-flex p-3 mb-3">
                  <i className="bi bi-envelope-paper-fill fs-3 text-dark"></i>
                </div>
                <h4 className="fw-bold mb-3">Send an Email</h4>
                <p>For business inquiries or questions.</p>
                <a
                  href="mailto:info.entrykode@gmail.com"
                  className="btn btn-warning mt-2 fw-bold shadow-sm"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* 2. Social Media Card (Gradient Hover) */}
            <div className="col-md-4 col-sm-6">
              <div className="contact-card bg-dark p-4 rounded-4 h-100 text-center border border-dark border-2 hover-effect">
                <div className="icon-box bg-danger rounded-circle d-inline-flex p-3 mb-3">
                  <i className="bi bi-chat-dots-fill fs-3 text-white"></i>
                </div>
                <h4 className="fw-bold mb-3">DM on Socials</h4>
                <p>Fast responses via Instagram or Twitter.</p>
                <div className="d-flex gap-2 justify-content-center mt-3">
                  <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Visit Us Card (Map Pin) */}
            <div className="col-md-4 col-sm-6">
              <div className="contact-card bg-dark p-4 rounded-4 h-100 text-center border border-dark border-2 hover-effect">
                <div className="icon-box bg-success rounded-circle d-inline-flex p-3 mb-3">
                  <i className="bi bi-geo-alt-fill fs-3 text-white"></i>
                </div>
                <h4 className="fw-bold mb-3">Visit Us</h4>
                <p className="mb-1">No.4, 1st Floor, Ganapathy Kovil Street, Nehru Nagar, Kamaraj Nagar</p>
                <p className="mb-3">Avadi, Chennai- 600071</p>
                <a target='_blank'
                  href="https://maps.app.goo.gl/e4aqfSENrJdVo9TQ6"
                  className="btn btn-outline-success mt-1 fw-bold shadow-sm"
                >
                  <i className="bi bi-map me-1"></i> Directions
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="text-center my-5 py-3">
            <span className="opacity-50">OR</span>
          </div>

          {/* Quick Call Button (Pulse Animation) */}
          <div className="text-center">
            <h5 className="mb-4">Prefer a quick call?</h5>
            <a
              href="tel:7200913535"
              className="btn btn-lg btn-danger rounded-pill px-4 pulse-animation"
            >
              <i className="bi bi-telephone-outbound-fill me-2"></i> Call Now: +91 7200913535
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;