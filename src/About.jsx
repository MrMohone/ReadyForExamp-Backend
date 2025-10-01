// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary">About Us</h1>
        <p className="lead text-muted">
          Learn more about our mission, vision, and the team behind this platform.
        </p>
      </div>

      {/* Our Mission */}
      <section className="mb-5">
        <h2 className="h3 text-secondary mb-3">Our Mission</h2>
        <p className="text-muted">
          Our mission is to provide students and educators with high-quality digital resources,
          helping them excel in learning through easy access to study materials, interactive
          content, and innovative tools. We believe in making education accessible, engaging,
          and effective for everyone.
        </p>
      </section>

      {/* Our Vision */}
      <section className="mb-5">
        <h2 className="h3 text-secondary mb-3">Our Vision</h2>
        <p className="text-muted">
          We envision a world where technology bridges educational gaps, empowering students
          to reach their full potential. Our goal is to create a seamless learning environment
          that adapts to modern educational needs and inspires lifelong learning.
        </p>
      </section>

      {/* The Team */}
      <section>
        <h2 className="h3 text-secondary mb-3">Meet the Team</h2>
        <div className="row">
          {/* Example Team Member */}
          <div className="col-md-4 text-center mb-4">
            <div className="card shadow-sm p-3 h-100">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-circle mb-3"
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              />
              <h5 className="card-title mb-1">Mohe</h5>
              <p className="card-text text-muted">Full-Stack Developer & Tech Content Creator</p>
            </div>
          </div>
          {/* Add more members as needed */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-5">
        <h3 className="text-primary mb-3">Join Us on Our Journey</h3>
        <p className="text-muted mb-4">
          Whether you are a student, teacher, or tech enthusiast, explore our platform and
          unlock the power of modern learning.
        </p>
        <a href="/start" className="btn btn-primary btn-lg">
          Get Started
        </a>
      </section>
    </div>
  );
};

export default About;
