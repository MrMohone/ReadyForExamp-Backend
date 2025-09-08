import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa";
// import "./Resources.css"; // We'll add some custom CSS for hover & animation

const Resources = () => {
  return (
    <div className="container-fluid min-vh-90 px-0" style={{ minHeight: "90vh" }}>
      <div className="row g-0 h-100">
        {/* Sidebar */}
        <aside
          className="col-12 col-md-3 col-lg-3 bg-primary text-white d-flex flex-column gap-4 p-4 shadow-lg"
          style={{ position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}
        >
          <h3 className="text-center fw-bold mb-3">PDF Files</h3>

          <div className="d-flex flex-column gap-3">
            <Link
              to="video/1"
              className="btn btn-light text-primary fw-bold py-3 fs-5 border border-2 rounded-3 w-100 d-flex align-items-center justify-content-center hover-scale shadow-sm"
            >
              <FaVideo size={24} className="me-2" /> Video 1
            </Link>

            <Link
              to="video/2"
              className="btn btn-light text-success fw-bold py-3 fs-5 border border-2 rounded-3 w-100 d-flex align-items-center justify-content-center hover-scale shadow-sm"
            >
              <FaVideo size={24} className="me-2" /> Video 2
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-12 col-md-9 col-lg-9 bg-secondary p-5 overflow-auto">
          <h2 className="fw-bold mb-4 text-white">Study Materials</h2>
          <p className="text-light fs-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut
            quia eos accusantium, ipsum cupiditate. Non dignissimos corporis enim
            fugiat magni officiis labore incidunt. Fuga vel dolore perferendis
            commodi vitae.
          </p>
          <p className="text-light fs-6">
            Nisi, porro rem! Adipisci nostrum eos quaerat, necessitatibus dicta est
            totam nisi, aliquam blanditiis culpa possimus ab doloribus dolorum
            tenetur soluta ad. In eum sit quibusdam ut molestiae? Voluptatibus,
            commodi!
          </p>
        </main>
      </div>
    </div>
  );
};

export default Resources;
