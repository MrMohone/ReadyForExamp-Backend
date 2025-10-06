import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../Axios';
import { useParams } from 'react-router-dom';

const PdfFile = () => {
    const [pdfFile, setPdfFile] = useState([]);
    const {subject } = useParams();
    console.log("Subject :", subject); // For debugging purposes, to see the extracted id
  
  
  
    const fetchData = () => {
    Axios.get(`/gradesixresource/by-subject/${subject}/`)
    .then((res)=>{
      setPdfFile(res.data);
      console.log(res.data);
    })
    .catch((err)=>{
      console.error("Error fetching data:", err);
    });
  }

  useEffect(() => {
    fetchData();
  }, [subject]); // Re-fetch data if the id changes

    if (!pdfFile) return <h1 className="text-center text-danger mt-5">Data not found</h1>;


  return (
    <>
    
    <div class="container-fluid text-center">
        <div class="row">
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
                <Link to={`/subject/${subject}`} className='btn btn-primary mb-3  p-3 w-100'> All Resources</Link>
                <Link to={`/subject/${subject}/video`} className="btn btn-primary mb-3 p-3 w-100">Watch Video</Link>
            </div>    
          </div>

         <div class="col-md-9 offset-md-3">
            <h2 className="p-3 text-center text-primary font-weight-bold focus-in-expand-fwd">
                These all are <span className='text-info'>{subject}</span> pdf files for you !       
            </h2>

             <nav class="navbar d-md-none d-sm-block">
                <div class="container-fluid d-flex justify-content-center wrap-nowrap ">
                    <Link to={`/subject/${subject}`} className='btn btn-primary mb-3  p-3 me-3'> All Resources</Link>
                    <Link to={`/subject/${subject}/video`} className="btn btn-primary mb-3 p-3">Watch Video</Link>
                </div>
              </nav>

           {
              pdfFile.filter(file => file.resource.resource_type === 'PDF').length === 0 ? (
                  <div className="text-center mt-5">
                    <h4 className="text-muted focus-in-expand-fwd">📄 No PDFs found or still loading...</h4>
                  </div>
              ) : (
              pdfFile.filter(file => file.resource.resource_type === 'PDF' )
                .map((file) => (
                  <div className="card shadow-sm mb-4  border-bottom mb-5" key={file.id}>
                      <div className="card-body d-flex flex-column">
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
                      <p className="card-text flex-grow-1 text-start" >{file.description || "No description available."}</p>
                      
                      <a
                        href={file.file}
                        className="btn btn-success mt-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          Click To Read PDF
                      </a>
                    </div>
                  </div>
                ))
              )
           }

         </div>
        </div>
         
    </div>
    </>
  );
};

export default PdfFile;