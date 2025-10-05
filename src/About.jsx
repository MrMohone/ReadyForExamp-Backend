// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container my-2">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary fw-bold border-bottom text-uppercase">About Us</h1>
        <p className="lead fs-5 ">
          Learn more about our mission, vision, and the team behind this platform.
        </p>
      </div>

      {/* Our Mission */}
      <section className="mb-5 ">
        <h2 className="h3 text-secondary mb-3">Our Mission</h2>
        <p className="text-muted ">
          Our mission is to provide students and educators with high-quality digital resources,
         br helping them excel in learning through easy access to study materials, interactive
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
