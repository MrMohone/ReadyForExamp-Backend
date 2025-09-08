import { Link } from "react-router-dom";

function Exams() {
  return (
    <section className="container text-center my-5">
      {/* Header */}
      <h2 className="fw-bold text-primary mb-4">
        Please Select Your Examination Type
      </h2>

      {/* Responsive Grid */}
      <div className="row g-4 gap-3 justify-content-center">
        <div class="outer">
          <div class="dot"></div>
          <div class="card">
            <div class="ray"></div>
            <div class="text">Ministry</div>
            <div>National examination for all students.</div>
            <Link to='/ministray' className="btn btn-warning mt-3text-dark">
                        Select
                      </Link>
            <div class="line topl"></div>
            <div class="line leftl"></div>
            <div class="line bottoml"></div>
            <div class="line rightl"></div>
          </div>
        </div>

        {/* Matric Exam */}
        
        <div class="outer">
          <div class="dot"></div>
          <div class="card">
            <div class="ray"></div>
            <div class="text">Matric</div>
            <div>Prepare for Matric success with resources.</div>
            <Link to='/matric' className="btn btn-warning mt-3text-dark">
                        Select
                      </Link>
            <div class="line topl"></div>
            <div class="line leftl"></div>
            <div class="line bottoml"></div>
            <div class="line rightl"></div>
          </div>
        </div>
        

        {/* Entrance Exam */}
        <div class="outer">
          <div class="dot"></div>
          <div class="card">
            <div class="ray"></div>
            <div class="text">Entrance</div>
            <div>Ace your university entrance exams</div>
            <Link to='/entrance' className="btn btn-warning mt-3text-dark">
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
