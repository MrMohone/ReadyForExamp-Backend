import { Link } from "react-router-dom";

function EntranceCollage() {
  return (
    <section className="container text-center my-5">
      {/* Header */}
      <h2 className="fw-bold text-primary mb-4">
        Please Select Your College Given Below
      </h2>

      {/* Responsive Grid */}
      <div className="row g-4 gap-3 justify-content-center">
        {/* Natural Science */}
        <div class="card-collage text-white d-flex flex-column text-center">
         <h2 class=''>Natural Science</h2><br />
         <p>Physics,Chemistr, Biology, and Mathematics...</p>  <br />
         <Link to="natural_science">Select</Link>
        </div>


        {/* Social Science */}
        <div class="card-collage text-white d-flex flex-column text-center">
         <h2 class=''>Social Science</h2><br />
         <p>History, Geography, Civics, and Economics....</p>  <br />
         <Link to="social_science">Select</Link>
        </div>
      </div>
    </section>
  );
}

export default EntranceCollage;
