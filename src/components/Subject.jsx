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
        <div class="row">

          <div class="col-2" style={{borderRight: "2px solid #b69a9aff",height: "100vh", backgroundColor: "rgba(193, 189, 192, 0.67)"}}>
             <div className="d-flex flex-column justify-content-center align-items-center text-center m-2 p-2">
                <Link to={`/subject/${subject}/pdf`} className="btn btn-primary mb-3 p-3">Read PDF</Link>
                <Link to={`/subject/${subject}/video`} className="btn btn-primary p-3">Watch Video</Link>
            </div>    
          </div>

         <div class="col-10">

              <div className="text-start p-3 m-2 text-center" style={{backgroundColor: "rgba(193, 189, 192, 0.67)", borderRadius: "10px"}}>
                 <h1 className='font-weight-bold'>Let's start learning 
                 <br /> Please choose resource type you want to learn</h1>
              </div>

         <div className="card shadow-sm mb-4 p-3">
          
            <h3 className='p-3 text-center text-primary font-weight-bold border-bottom'>
                All Resources are here for you  , choose anyone to learn 
            </h3>  

            {data.map((file) => (
                <div className="card-body d-flex flex-column" key={file.id}>
                  <h5 className="card-title text-truncate">{file.title}</h5>
                  <p className="card-text flex-grow-1">{file.description || "No description available."}</p>
                  
                  {
                    
                      file.resource.resource_type === 'PDF' ? (
                      <a
                      href={file.file}
                      className="btn btn-primary mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                     >
                      Read PDF
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
          ))}
          </div>
         </div>
        </div>
    </div>
    </>
  );
};

export default Subject;