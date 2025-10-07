import React , { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from '../Axios';
import { useParams } from 'react-router-dom';


const VideoFile = () => {
  const [videoFile, setVideoFile] = useState([]);
  const {subject } = useParams();
  console.log("Subject :", subject); 

 const fetchData = () => {
    Axios.get(`/gradesixresource/by-subject/${subject}/`)
    .then((res)=>{
      setVideoFile(res.data);
      console.log(res.data);
    })
    .catch((err)=>{
      console.error("Error fetching data:", err);
    });
  }

  useEffect(() => {
    fetchData();
  }, [subject]); // Re-fetch data if the id changes

    if (!videoFile) return <h1 className="text-center text-danger mt-5">Data not found</h1>;


  return (
    <>
    <div class="container-fluid text-center">
        <div class="row justify-content-center">

          <div class="col-md-3 d-none d-md-block" 
          style={{
              borderRight: "2px solid #b69a9aff",
              height: "100vh",
              backgroundColor: "rgba(193, 189, 192, 0.67)",
              position: "fixed",
              left: 0,                       
              top: 0,
              width: "20%",
              bottom: 0,
              height : "100vh",
              overflow: "hidden",   
              }}>
             <div className="d-flex flex-column justify-content-center align-items-center text-center m-2 p-2">
                <Link to={`/subject/${subject}`} className='btn btn-primary mb-3  p-3 w-100'> All Resources</Link>
                <Link to={`/subject/${subject}/pdf`} className="btn btn-primary mb-3 p-3 mx-3 w-100">Read PDF</Link>
                <h4 className="text-center text-primary">Select Year</h4>
                <Link to={`/subject/${subject}/2025`}className="btn btn-primary p-3 mb-3  w-100">2025</Link>
                <Link to={`/subject/${subject}/2026`}className="btn btn-primary p-3 mb-3  w-100">2026</Link>
                <Link to={`/subject/${subject}/2027`}className="btn btn-primary p-3 mb-3  w-100">2027</Link>
                <Link to={`/subject/${subject}/2028`}className="btn btn-primary p-3 w-100">2028</Link>
                
            </div>    
          </div>

         <div class="col-md-9 offset-md-2">
          <div className='border-bottom'>
             <h2 className="p-3 text-center text-primary font-weight-bold  focus-in-expand-fwd">
                        These all are <span className='text-info'>{subject}</span> Video files for you!        
           </h2>
           <small className='p-2 text-danger focus-in-expand-fwd'>Please read the description before downloading the file</small>

          </div>

          <nav class="navbar  navbar-light bg-light d-md-none  d-sm-block">
            <div class="container-fluid d-flex justify-content-center ">
                <Link to={`/subject/${subject}`} className='btn btn-primary mb-3  p-3 '> All Resources</Link>
                <Link to={`/subject/${subject}/pdf`} className="btn btn-primary mb-3 p-3 mx-3">Read PDF</Link>
            </div>
          </nav>

            {
              videoFile.filter(file => file.resource.resource_type === 'Video').length === 0 ? (
                <div className="text-center mt-5">
                  <h4 className="text-muted focus-in-expand-fwd">🎥 No video files found or still loading...</h4>
                </div>
              )
              : (
              videoFile.filter(file => file.resource.resource_type === 'Video')
                .map((file) => (
                  <div className="card shadow-sm mb-4 p-3 border-bottom" key={file.id}>
                      <div className="card-body d-flex flex-column">
                      <h3 className="card-title text-truncate mb-2">{file.title}</h3>
                      <div className='border p-2 rounded mb-3'>
                        <h4 className="text-muted text-start">Prepred by: {`Mr_${file.teacher}`} </h4>
                        <h4 className="text-muted text-start">Uploaded on: { new Date(file.uploaded_at).
                          toLocaleString('en-US',{
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</h4>
                      </div>
                      <p className="card-text flex-grow-1 mb-3">{file.description}</p>

                      <video
                        className="rounded mb-3"
                        height="200"
                        width="90%"
                        controls
                        controlsList="download" //TO  Prevent download use "nodownload"
                      >
                        <source
                          src={file.file}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ))
            )}

            </div>
        </div>
    </div>
    </>
  );
};

export default VideoFile;