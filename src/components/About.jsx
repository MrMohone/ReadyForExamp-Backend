import React from "react";

function AboutUs() {
  return (
    <section className="container my-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About Us</h1>
        <p className="text-muted">
          Learn more about our mission, vision, and commitment to helping students succeed.
        </p>
      </div>

      {/* About Content */}
      <div className="row align-items-center g-4">
        {/* Left Side - Text */}
        <div className="col-md-6">
          <h3 className="fw-bold">Who We Are</h3>
          <p>
            Welcome to <strong>Ready Exam</strong>, your trusted partner in exam
            preparation. Our mission is simple: to empower students with the right tools,
            resources, and guidance to achieve academic success.
          </p>

          <h3 className="fw-bold mt-4">What We Offer</h3>
          <ul className="list-unstyled">
            <li>📘 Comprehensive study materials (PDFs & Notes)</li>
            <li>🎥 Interactive video lessons</li>
            <li>📝 Past papers & practice resources</li>
            <li>📊 Structured by exam type & subject</li>
          </ul>

          <h3 className="fw-bold mt-4">Our Vision</h3>
          <p>
            We aim to make exam preparation smarter, simpler, and more effective
            for students across Ethiopia and beyond. Every learner deserves access
            to high-quality resources — and we’re here to make that possible.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/free-vector/exam-preparation-concept-illustration_114360-8143.jpg"
            alt="About Ready Exam"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
