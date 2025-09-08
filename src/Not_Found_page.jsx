import { Link } from "react-router-dom";
import "animate.css";

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center bg-light p-4"
      style={{ minHeight: "90vh" }}
    >
      <h1 className="display-1 fw-bold text-danger animate__animated animate__bounceIn">
        404
      </h1>

      <h2 className="fw-bold mb-3 animate__animated animate__fadeInUp">
        Oops! Page Not Found
      </h2>

      <p className="text-muted fs-5 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="btn btn-primary btn-lg rounded-3 shadow animate__animated animate__fadeInUp animate__delay-2s"
      >
        Go Back Home
      </Link>

      <div className="mt-3 w-100 d-flex justify-content-center animate__animated animate__fadeIn animate__delay-3s">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2040/2040536.png"
          alt="Not Found Illustration"
          style={{ maxWidth: "150px", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default NotFound;
