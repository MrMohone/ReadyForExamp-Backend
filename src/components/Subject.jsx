import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  Axios from '../Axios.jsx'
import { useParams } from 'react-router-dom';

const Subject = () => {
  const [data, setData] = useState([]);
  const {subject } = useParams();
  console.log("Subject :", subject); // For debugging purposes, to see the extracted id


  const fetchData = () => {
    Axios.get(`/gradesixresource/by-subject/${subject}/`)
    .then((res)=>{
      setData(res.data);
      console.log(res.data);
    })
    .catch((err)=>{
      console.error("Error fetching data:", err);
    });
  }

  useEffect(() => {
    fetchData();
  }, [subject]); // Re-fetch data if the id changes

    if (!data) return <h1 className="text-center text-danger mt-5">Data not found</h1>;

  return (
    <>
    <div class="container-fluid text-center">
        <div class="row justify-content-center" >
          <div class="col-md-3 d-none d-md-block " 
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
                <Link to={`/subject/${subject}/pdf`} className="btn btn-primary mb-3 p-3 w-100">Read PDF</Link>
                <Link to={`/subject/${subject}/video`} className="btn btn-primary p-3 w-100">Watch Video</Link>
            </div>    
          </div>

         <div class="col-md-9 offset-md-2">
         <div className="card shadow-sm mb-4 p-3">
          
            <h3 className='p-3 text-center text-primary font-weight-bold border-bottom focus-in-expand-fwd'>
                This are All  <span className='text-info '>{subject}</span> Resources are here for you! 
            </h3>  
             <nav class="navbar  navbar-light bg-light d-md-none  d-sm-block">
                <div class="container-fluid d-flex justify-content-center ">
                    <Link to={`/subject/${subject}/pdf`} className="btn btn-primary mb-3 p-3 me-3 ">Read PDF</Link>
                    <Link to={`/subject/${subject}/video`} className="btn btn-primary mb-3 p-3">Watch Video</Link>
                </div>
              </nav>

            {
              data.filter(file => file.resource.resource_type === 'PDF').length === 0 && data.filter(file => file.resource.resource_type === 'Video').length === 0 ? (
                <div className="text-center mt-5">
                  <h4 className="text-muted focus-in-expand-fwd">😔 No resources found or still loading...</h4>
                </div>
              )
             : (
              data.map((file) => (
                <div className="card-body d-flex flex-column border-bottom mb-3" key={file.id}>
                  <h3 className="card-title text-truncate">{file.title}</h3>
                 <div className='border p-2 rounded mb-3'>
                   <h4 className="text-muted text-start">Prepred by: {`Mr_${file.teacher}`} </h4>
                  <h4 className="text-muted text-start">Uploaded on: { new Date(file.uploaded_at).
                    toLocaleString('en-US',{
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                   })}</h4>
                 </div>
                  <p className="card-text flex-grow-1 text-start">{file.description || "No description available."}</p>
                  
                  {
                    
                      file.resource.resource_type === 'PDF' ? (
                      <a
                      href={file.file}
                      className="btn btn-success mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                     >
                      Click To Read PDF
                    </a> ) : (
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
                  )}
                </div>
          )))}
          </div>
         </div>
        </div>
    </div>
    </>
  );
};

export default Subject;