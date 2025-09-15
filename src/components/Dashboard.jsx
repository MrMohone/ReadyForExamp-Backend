import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getExamTypesAPI } from '../services/api'

function Exams() {

//     const [examTypes, setExamTypes] = useState([]);


//   useEffect(() => {
//     getExamTypesAPI()
//       .then((res) => setExamTypes(res.data))
//       .catch((err) => console.error("Error fetching exam types:", err));
//   }, []);





  return (
    <section className="container text-center my-5">
      {/* Header */}
      <h2 className="fw-bold text-primary mb-4">
        Please Select Your Examination Type
      </h2>

      {/* <div className="row g-4 gap-3 justify-content-center">
      {examTypes.map((exam)=>(
        <div class="outer" key={exam.id}>
          <div class="dot"></div>
          <div class="card">
            <div class="ray"></div>
            <div class="text">{exam.exam_name}</div>
            <div>
              {exam.exam_description}
            </div>
            <Link to={`/${exam.exam_name.toLowerCase()}`} 
              state={{ examId: exam.id, examName: exam.exam_name }} //to pass data to next page based on selection
              className="btn btn-warning mt-3 text-dark">
                        Select
                      </Link>
            <div class="line topl"></div>
            <div class="line leftl"></div>
            <div class="line bottoml"></div>
            <div class="line rightl"></div>
          </div>
        </div>
        ))}
      </div> */}
      <div className="row g-4 gap-3 justify-content-center">
        <div class="outer">
          <div class="dot"></div>
          <div class="card">
            <div class="ray"></div>
            <div class="text">Ministry</div>
            <div>
              Ready for ministry exam
            </div>
            <Link to='/ministry' 
              className="btn btn-warning mt-3 text-dark">
                        Select
                      </Link>
            <div class="line topl"></div>
            <div class="line leftl"></div>
            <div class="line bottoml"></div>
            <div class="line rightl"></div>
          </div>
        </div>
        <div class="outer">
          <div class="dot"></div>
          <div class="card">
            <div class="ray"></div>
            <div class="text">Matric</div>
            <div>
              Ready for matric exam
            </div>
            <Link to='/matric' 
              className="btn btn-warning mt-3 text-dark">
                        Select
                      </Link>
            <div class="line topl"></div>
            <div class="line leftl"></div>
            <div class="line bottoml"></div>
            <div class="line rightl"></div>
          </div>
        </div>
        <div class="outer">
          <div class="dot"></div>
          <div class="card">
            <div class="ray"></div>
            <div class="text">Entrance</div>
            <div>
              Ready for Entrance exam
            </div>
            <Link to='/entrance' 
              className="btn btn-warning mt-3 text-dark">
                        Select
                      </Link>
            <div class="line topl"></div>
            <div class="line leftl"></div>
            <div class="line bottoml"></div>
            <div class="line rightl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exams;
