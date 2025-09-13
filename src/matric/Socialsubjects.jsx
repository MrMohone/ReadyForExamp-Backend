import { FaLandmark, FaGlobeAfrica, FaBalanceScale, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

function SocialSubjects() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <header className="bg-warning text-dark text-center py-5 shadow">
        <h1 className="fw-bold display-5">Social Science Subjects</h1>
        <p className="lead">
          Explore History, Geography, Civics, and Economics with resources, past exams, and lectures.
        </p>
      </header>

      {/* Subjects Section */}
      <main className="container my-5 flex-grow-1">
        <div className="row g-4">
          {/* History */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaLandmark size={40} className="text-danger mb-3" />
                <h4 className="fw-bold">History</h4>
                <p className="text-white">
                  Learn about civilizations, leaders, and world events that shaped humanity.
                </p>
                <Link to="/subjects/history" className="btn btn-danger mt-auto w-100">
                  Explore History
                </Link>
              </div>
            </div>
          </div>

          {/* Geography */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaGlobeAfrica size={40} className="text-primary mb-3" />
                <h4 className="fw-bold">Geography</h4>
                <p className="text-white">
                  Study the earth, landscapes, climate, and the relationship between people and nature.
                </p>
                <Link to="/subjects/geography" className="btn btn-primary mt-auto w-100">
                  Explore Geography
                </Link>
              </div>
            </div>
          </div>

          {/* Civics */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaBalanceScale size={40} className="text-success mb-3" />
                <h4 className="fw-bold">Civics</h4>
                <p className="text-white">
                  Understand citizenship, democracy, and your role in society and governance.
                </p>
                <Link to="/subjects/civics" className="btn btn-success mt-auto w-100">
                  Explore Civics
                </Link>
              </div>
            </div>
          </div>

          {/* Economics */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaChartLine size={40} className="text-warning mb-3" />
                <h4 className="fw-bold">Economics</h4>
                <p className="text-white run dev">
                  Explore markets, finance, and resources to understand economic systems.
                </p>
                <Link to="/subjects/economics" className="btn btn-warning text-dark mt-auto w-100">
                  Explore Economics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SocialSubjects;