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

          <div class="col-2 " style={{borderRight: "2px solid #b69a9aff",height: "100vh", backgroundColor: "rgba(193, 189, 192, 0.67)"}}>
             <div className="d-flex flex-column justify-content-center align-items-center text-center m-2 p-2">
                <Link to={`/subject/${subject}/pdf`} className="btn btn-primary mb-3 p-3">Read PDF</Link>
                <Link to={`/subject/${subject}/video`} className="btn btn-primary mb-3 p-3">Watch Video</Link>
                <Link to={`/subject/${subject}`}><button className='btn btn-primary p-3'>Back</button></Link>
            </div>    
          </div>

         <div class="col-10">
            <h2 className="p-3 text-center text-primary font-weight-bold">
                These all are pdf files for you , read them properly        
            </h2>

           {
           pdfFile.filter(file => file.resource.resource_type === 'PDF' )
            .map((file) => (
              <div className="card shadow-sm mb-4 p-3" key={file.id}>
                <h3 className='p-3 text-center text-primary font-weight-bold border-bottom'> Read - <span className='text-danger'>{file.subject}</span> Pdf</h3>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate">{file.title}</h5>
                  <p className="card-text flex-grow-1">{file.description || "No description available."}</p>
                  
                  <a
                    href={file.file}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read PDF
                  </a>
                </div>
              </div>
            ))
          }

         </div>
        </div>
        <Link to="/subject" className="btn btn-primary p-3">Back</Link>
         
    </div>
    </>
  );
};

export default PdfFile;