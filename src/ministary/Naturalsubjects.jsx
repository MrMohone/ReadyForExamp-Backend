import { FaAtom, FaFlask, FaDna, FaSquareRootAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function NaturalSubjects() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <header className="bg-success text-white text-center py-5 shadow">
        <h1 className="fw-bold display-5">Natural Science Subjects</h1>
        <p className="lead">
          Explore Physics, Chemistry, Biology, and Mathematics with resources, past exams, and lectures.
        </p>
      </header>

      {/* Subjects Section */}
      <main className="container my-5 flex-grow-1">
        <div className="row g-4">
          {/* Physics */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaAtom size={40} className="text-primary mb-3" />
                <h4 className="fw-bold">Physics</h4>
                <p className="text-white">
                  Learn the laws of nature with lectures, notes, and problem sets.
                </p>
                <Link to='physics' className="btn btn-primary mt-auto w-100">
                  Explore Physics
               </Link>
              </div>
            </div>
          </div>

          {/* Chemistry */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaFlask size={40} className="text-danger mb-3" />
                <h4 className="fw-bold">Chemistry</h4>
                <p className="text-white">
                  Dive into reactions, formulas, and lab resources for success.
                </p>
                <Link to='/subjects/chemistry' className="btn btn-danger mt-auto w-100">
                  Explore Chemistry
                </Link>
              </div>
            </div>
          </div>

          {/* Biology */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaDna size={40} className="text-success mb-3" />
                <h4 className="fw-bold">Biology</h4>
                <p className="text-white">
                  Discover life sciences, from cells to ecosystems with guides.
                </p>
                <Link to='/subjects/biology' className="btn btn-success mt-auto w-100">
                  Explore Biology
                </Link>
              </div>
            </div>
          </div>

          {/* Mathematics */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaSquareRootAlt size={40} className="text-warning mb-3" />
                <h4 className="fw-bold">Mathematics</h4>
                <p className="text-white">
                  Practice algebra, calculus, and problem solving for exams.
                </p>
                <Link to='/subjects/math' className="btn btn-warning text-dark mt-auto w-100">
                  Explore Math
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NaturalSubjects;
