import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="about-us" style={{
      background: 'linear-gradient(135deg, #000000 0%, #8B0000 50%, #000000 100%)',
      color: '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4 text-white">About EntryKode</h1>
              <p className="lead mb-4 text-white">
                Transforming businesses through innovative technology solutions.
              </p>
              <button className="btn btn-outline-light btn-lg px-4">
                Learn More
              </button>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="About EntryKode"
                className="img-fluid rounded shadow-lg"
                style={{ border: '3px solid white' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5 bg-white text-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Our Team"
                className="img-fluid rounded shadow-lg"
                style={{ border: '3px solid #8B0000' }}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2015, EntryKode began as a small team of passionate developers with a vision to simplify technology for businesses. Today, we've grown into a full-service IT solutions provider serving clients across multiple industries.
              </p>
              <p>
                Our journey has been marked by continuous learning, innovation, and an unwavering commitment to delivering exceptional value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="icon-box bg-danger bg-opacity-10 text-danger mb-4">
                    <i className="bi bi-bullseye fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-3">Our Mission</h3>
                  <p>
                    To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="icon-box bg-danger bg-opacity-10 text-danger mb-4">
                    <i className="bi bi-eye fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-3">Our Vision</h3>
                  <p>
                    To be the most trusted technology partner for businesses seeking to transform their operations and customer experiences through innovative digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm bg-white text-dark">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-danger bg-opacity-10 text-danger mb-3 mx-auto">
                    <i className="bi bi-lightbulb fs-3"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Innovation</h4>
                  <p className="mb-0">
                    We constantly push boundaries to deliver creative solutions that solve real business challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm bg-white text-dark">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-danger bg-opacity-10 text-danger mb-3 mx-auto">
                    <i className="bi bi-people fs-3"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Integrity</h4>
                  <p className="mb-0">
                    We build trust through transparency, honesty, and ethical business practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm bg-white text-dark">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-danger bg-opacity-10 text-danger mb-3 mx-auto">
                    <i className="bi bi-award fs-3"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Excellence</h4>
                  <p className="mb-0">
                    We're committed to delivering superior quality in every project, every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-white text-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Meet Our Leadership</h2>
            <p>The talented people behind our success</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="card-img-top rounded-circle mx-auto mt-4"
                  style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid #8B0000' }}
                  alt="Team Member"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-1">Sarah Johnson</h5>
                  <p className="text-danger mb-3">CEO & Founder</p>
                  <p>
                    With 15+ years in the tech industry, Sarah leads EntryKode with vision and passion.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="card-img-top rounded-circle mx-auto mt-4"
                  style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid #8B0000' }}
                  alt="Team Member"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-1">Michael Chen</h5>
                  <p className="text-danger mb-3">CTO</p>
                  <p>
                    Technology innovator with expertise in AI, cloud computing, and enterprise solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  className="card-img-top rounded-circle mx-auto mt-4"
                  style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid #8B0000' }}
                  alt="Team Member"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-1">David Rodriguez</h5>
                  <p className="text-danger mb-3">Head of Operations</p>
                  <p>
                    Ensures seamless delivery of all projects with his exceptional management skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-danger text-white" style={{background:'linear-gradient(135deg, rgba(234, 47, 47, 0.7) 0%, rgba(34, 34, 34, 0.8) 100%)'}}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="lead mb-4">
            Let's discuss how EntryKode can help you achieve your technology goals.
          </p>
          <Link to={'/contact'}><button className="btn btn-light btn-lg px-4 me-3">
            Contact Us Today
          </button></Link>
          <Link to={'/it-services'}><button className="btn btn-outline-light btn-lg px-4">
            Our Services
          </button></Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;