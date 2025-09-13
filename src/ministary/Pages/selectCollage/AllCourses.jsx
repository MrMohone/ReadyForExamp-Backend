
import { FaAtom } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSubjectsAPI } from "../../../services/api";


function AllCourses() {

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getSubjectsAPI()
      .then((res) => setSubjects(res.data))
      .catch((err) => console.error("Error fetching subjects:", err));
  }, []);
  
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <header className="bg-success text-white text-center py-5 shadow">
        <h1 className="fw-bold display-5">All Subjects for Ministry students</h1>
        <p className="lead">
          Explore Chemistry, Geography, and Mathematics, Civics with resources, past exams, and lectures.
        </p>
      </header>

      {/* Subjects Section */}
      <main className="container my-5 flex-grow-1">
        <div className="row g-4">
          {/* Physics */}
          { subjects.map(subject =>(
          <div className="col-12 col-md-6 col-lg-3" key={subject.id}>
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaAtom size={40} className="text-primary mb-3" />
                <h4 className="fw-bold">{subject.subject_name}</h4>
                <p className="text-white">
                  {subject.description}
                </p>
                <Link to= {`${subject.subject_name.toLowerCase()}`} className="btn btn-primary mt-auto w-100">
                  Explore {subject.subject_name}
               </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AllCourses;
