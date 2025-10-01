import { Link } from 'react-router-dom';

function Home() {

  return (
    <section className="d-flex align-items-center  justify-content-center vh-100 bg-light text-center">
      <div>
        {/* Heading */}
        <h1 className="display-4 fw-bold text-primary mb-4">
          Welcome to Exam Preparation System
        </h1>
        <p className="lead text-secondary mb-5">
          Your digital companion for Ministry, Matric & Entrance Exam success.
        </p>

        {/* Buttons */}
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to='/start' className="btn btn-primary btn-lg px-4">
             Start Now
          </Link>
          <Link to='/about'className="btn btn-outline-dark btn-lg px-4">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
