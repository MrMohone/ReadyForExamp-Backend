import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from '../Axios';

const SubjectBYYear = () => {
  const [resources, setResources] = useState([]);
  const { subject, year } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(`/gradesixresource/by-subject/${subject}/`);
        const filtered = res.data.filter(
          (file) => new Date(file.uploaded_at).getFullYear() === Number(year)
        );
        setResources(filtered);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [subject, year]);

  return (
    <div className="container-fluid text-center">
      <div className="row">
        {/* Sidebar */}
        <div
          className="col-md-3 d-none d-md-block"
          style={{
            borderRight: "2px solid #b69a9aff",
            height: "100vh",
            backgroundColor: "rgba(193, 189, 192, 0.67)",
            position: "fixed",
            left: 0,
            top: 0,
            width: "20%",
            overflow: "hidden",
          }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center text-center m-2 p-2">
            <Link to={`/subject/${subject}`} className="btn btn-primary mb-3 p-3 w-100">
              All Resources
            </Link>
            <h4 className="text-center text-primary">Select Year</h4>
            {[2025, 2026, 2027, 2028].map((yr) => (
              <Link
                key={yr}
                to={`/subject/${subject}/${yr}`}
                className={`btn ${yr === Number(year) ? "btn-info" : "btn-primary"} p-3 mb-3 w-100`}
              >
                {yr}
              </Link>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="col-md-9 offset-md-3">
          <div className="border-bottom">
            <h2 className="p-3 text-center text-primary font-weight-bold">
              {subject} — <span className="text-info">{year}</span>
            </h2>
            <small className="p-2 text-danger">Please read the description before accessing the resources.</small>
          </div>

          {resources.length === 0 ? (
            <div className="text-center mt-5">
              <h4 className="text-muted">No resources found for {year} or still loading...</h4>
            </div>
          ) : (
            resources.map((file) => (
              <div className="card shadow-sm mb-4 border-bottom mb-5" key={file.id}>
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-truncate">{file.title}</h3>
                  <div className="border p-2 rounded mb-3">
                    <h4 className="text-muted text-start">Prepared by: Mr. {file.teacher}</h4>
                    <h4 className="text-muted text-start">
                      Uploaded on:{" "}
                      {new Date(file.uploaded_at).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h4>
                  </div>
                  <p className="card-text flex-grow-1 text-start">
                    {file.description || "No description available."}
                  </p>

                  {file.resource.resource_type === "PDF" ? (
                    <a
                      href={file.file}
                      className="btn btn-success mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                      controlsList="download" 
                    >
                      Click To Read PDF
                    </a>
                  ) : (
                    <video className="rounded mb-3" height="200" width="100%" controls>
                      <source src={file.file} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectBYYear;
