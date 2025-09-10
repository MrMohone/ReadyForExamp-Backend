import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSpecificExamTypeAPI } from '../../services/api'

function Exams() {

    const [examTypes, setExamTypes] = useState([]);

  useEffect(() => {
    getSpecificExamTypeAPI()
      .then((res) => setExamTypes(res.data))
      .catch((err) => console.error("Error fetching exam types:", err));
  }, []);

   // helper function for description
  // const getExamDescription = (name) => {
  //   if (name === "Ministry") return "National examination for Ministry students.";
  //   if (name === "Matric") return "Prepare for Matric success with resources.";
  //   if (name === "Entrance") return "Improve your chance to Join University. Let's go!";
  //   return "General exam resources.";//else
  // };



  return (
    <section className="container text-center my-5">
      {/* Header */}
      <h2 className="fw-bold text-primary mb-4">
        Please Select Your Examination Type
      </h2>

      {/* Responsive Grid */}
      <div className="row g-4 gap-3 justify-content-center">
      {examTypes.map((exam)=>(
        <div class="outer" key={exam.id}>
          <div class="dot"></div>
          <div class="card">
            <div class="ray"></div>
            <div class="text">{exam.exam_name}</div>
            <div>
              {/* {getExamDescription(exam.exam_name)} */}
              {exam.exam_description}
            </div>
            <Link to={`/${exam.exam_name.toLowerCase()}`} className="btn btn-warning mt-3 text-dark">
                        Select
                      </Link>
            <div class="line topl"></div>
            <div class="line leftl"></div>
            <div class="line bottoml"></div>
            <div class="line rightl"></div>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Exams;
