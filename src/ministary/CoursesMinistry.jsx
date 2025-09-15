
import { FaAtom } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMinistryResourcesAPI } from "../services/api";

import PdfViewer from "./PdfViewer";

function CoursesMinistry() {

  const [resources, setResource] = useState([]);

  useEffect(()=>{
    getMinistryResourcesAPI()
    .then((res) =>  setResource(res.data))
    .catch((err) => console.error('Error fetching resources:', err));
  })
  
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <header className="bg-success text-white text-center py-5 shadow">
        <h1 className="fw-bold display-5">Ministry Resource</h1>
        <p className="lead">
          Explore Chemistry, Geography, and Mathematics, Civics with resources, past exams, and lectures.
        </p>
      </header>
{/* {resources.map(res=>(
    <div key={res.id}>
      <PdfViewer fileUrl={res.file} />
    </div>
))} */}

      <main className="container my-5 flex-grow-1">
        <div className="row g-4">
          { resources.map(res =>(
          <div className="col-12 col-md-6 col-lg-3" key={res.id}>
            <div className="card shadow border-0 h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <FaAtom size={40} className="text-primary mb-3" />
                <h4 className="fw-bold">{res.subject}</h4>
                <h4 className="fw-bold">{res.title}</h4>
                <p className="text-white">
                  {res.description}
                </p>
                <PdfViewer fileUrl={res.file} />
                <Link to= {`${res.subject.toLowerCase()}`} className="btn btn-primary mt-auto w-100">
                  Explore {res.subject}
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

export default CoursesMinistry;
