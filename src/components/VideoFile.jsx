import React , { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from '../Axios';
import { useParams } from 'react-router-dom';


const VideoFile = () => {
  const [videoFile, setVideoFile] = useState([]);
  const {subject } = useParams();
  console.log("Subject :", subject); // For debugging purposes, to see the extracted id

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
                        These all are Video files for you , watch them properly        
           </h2>

            {
              videoFile.filter(file => file.resource.resource_type === 'Video')
                .map((file) => (
                  <div className="card shadow-sm mb-4 p-3" key={file.id}>
                    <h3 className='p-3 text-center text-primary font-weight-bold border-bottom'> Watch - <span className='text-danger'>{file.subject}</span> Tutorial</h3>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-truncate mb-2">{file.title}</h5>
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
            }

            </div>
        </div>
    </div>
    </>
  );
};

export default VideoFile;