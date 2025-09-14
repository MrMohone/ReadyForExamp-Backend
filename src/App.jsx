import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./components/Footer";
import NotFound_page from "./Not_Found_page";
// Ministary Imports
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Courses from "./components/AllCourses/Courses";
import EntranceCollage from "./entrance/Pages/selectCollage/EntranceCollage";
import MinistryResources from "./ministary/Resources";
import MinistryPDF_Resource from "./ministary/PDF_Resource";
import MinistryVIDEO_Resource from "./ministary/VIDEO_Resource";
// Matric imports
import MatricResources from "./matric/Resources";
import MatricPDF_Resource from "./matric/PDF_Resource";
import MatricVIDEO_Resource from "./matric/VIDEO_Resource";


// Entrance imports
import EntranceResources from "./entrance/Resources";
import EntrancePDF_Resource from "./entrance/PDF_Resource";
import EntranceVIDEO_Resource from "./entrance/VIDEO_Resource";
import EntranceNaturalSubjects from "./entrance/Naturalsubjects";
import EntranceSocialSubjects from "./entrance/Socialsubjects";

// import { useEffect, useState } from "react";
// import { getExamTypesAPI } from "./services/api";


function App() {
  
  // const [examTypes, setExamTypes] = useState([]);

  // useEffect(() => {
  //   getExamTypes()
  //     .then((res) => setExamTypes(res.data))
  //     .catch((err) => console.error("Error fetching exam types:", err));
  // }, []);

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* for all pages */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound_page/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About/>}/>
        
        {/* for Ministary student */}
        <Route path="/ministry" element={<Courses/>}/>
        <Route path="/ministry/natural_science/physics" element={<MinistryResources />}/>
        <Route path="/ministry/natural_science/physics/pdf" element={<MinistryPDF_Resource />}/>
        <Route path="/ministry/natural_science/physics/video" element={<MinistryVIDEO_Resource />}/>
        
        {/* for matric student */}
        <Route path="/matric" element={<Courses/>}/>
        <Route path="/matric/natural_science/physics" element={<MatricResources />}/>
        <Route path="/matric/natural_science/physics/pdf" element={<MatricPDF_Resource />}/>
        <Route path="/matric/natural_science/physics/video" element={<MatricVIDEO_Resource />}/>
        {/* <Route path="/matric/natural_science" element={<MatricNaturalSubjects/>}/>
        <Route path="/matric/social_science" element={<MatricSocialSubjects/>} /> */}


        {/* for entrance student */}
        <Route path="/entrance" element={<EntranceCollage/>}/>
        <Route path="/entrance/natural_science/physics" element={<EntranceResources />}/>
        <Route path="/entrance/natural_science/physics/pdf" element={<EntrancePDF_Resource />}/>
        <Route path="/entrance/natural_science/physics/video" element={<EntranceVIDEO_Resource />}/>
        <Route path="/entrance/natural_science" element={<EntranceNaturalSubjects/>}/>
        <Route path="/entrance/social_science" element={<EntranceSocialSubjects/>} />


        

      </Routes>
       {/* <div>
          <h1>Exam Types</h1>
          <ul>
            {examTypes.map((exam) => (
              <li key={exam.id}>{exam.exam_name}</li>
            ))}
          </ul>
        </div> */}
      <Footer />
    </Router>
    
  );
}

export default App;
