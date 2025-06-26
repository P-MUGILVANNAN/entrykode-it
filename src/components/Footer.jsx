import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      className="pt-5 pb-4"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #8B0000 100%)',
        color: 'white'
      }}
    >
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">
              <i className="bi bi-building me-2"></i> EntryKode IT Services
            </h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i> No.4, 1st Floor, Ganapathy Kovil Street, Nehru Nagar, Kamaraj Nagar, Avadi, Chennai- 600071
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i> info@entrykode.com
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> +91 7200913535
            </p>
            <div className="mt-3">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={'/'} className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/about-us'} className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/it-services'} className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/contact'} className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={'/web-development'} className="text-white text-decoration-none">
                  <i className="bi bi-code-square me-1"></i> Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/mobile-development'} className="text-white text-decoration-none">
                  <i className="bi bi-phone me-1"></i> Mobile App Development
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/cloud-services'} className="text-white text-decoration-none">
                  <i className="bi bi-cloud me-1"></i> Cloud Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/it-services'} className="text-white text-decoration-none">
                  <i className="bi bi-pc-display me-1"></i> IT Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/networking'} className="text-white text-decoration-none">
                  <i className="bi bi-shield-lock me-1"></i> Networking
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach Us with Map */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Reach Us</h5>
            <div className="embed-responsive embed-responsive-16by9 mb-3" style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16817.92552130447!2d80.09456500363984!3d13.116278093402805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289d630d401f3%3A0x52445b74ccc7a390!2sEntrykode%20IT%20Services!5e1!3m2!1sen!2sin!4v1750840139516!5m2!1sen!2sin" width="500" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <hr className="my-4 bg-light" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} EntryKode IT Services. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-decoration-none me-3">
              Terms of Service
            </a>
            <a href="#" className="text-white text-decoration-none">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;