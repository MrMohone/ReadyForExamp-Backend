import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./components/Footer";
import NotFound_page from "./Not_Found_page";
// Ministary Imports
import Dashboard from "./ministary/Pages/Dashboard";
import About from "./components/About";
import MinistaryCollage from "./ministary/Pages/selectCollage/MinistaryCollage";
import Naturalsubjects from "./ministary/Naturalsubjects";
import SocialSubjects from "./ministary/Socialsubjects";
import Resources from "./ministary/Resources";
import PDF_Resource from "./ministary/PDF_Resource";
import VIDEO_Resource from "./ministary/VIDEO_Resource";

import { useEffect, useState } from "react";
import { getExamTypes } from "./services/api";


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
        <Route path="/ministray" element={<MinistaryCollage/>}/>
        <Route path="/ministray/natural_science" element={<Naturalsubjects />}/>
        <Route path="/ministray/social_science" element={<SocialSubjects />}/>
        <Route path="/ministray/natural_science/physics" element={<Resources />}/>
        <Route path="/ministray/natural_science/physics/pdf" element={<PDF_Resource />}/>
        <Route path="/ministray/natural_science/physics/video" element={<VIDEO_Resource />}/>
        
        {/* for matric student */}
        

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
