import React, { useEffect, useState} from 'react'
import AllSubjectsCard from './AllSubjectsCard.jsx'
import  Axios from '../Axios.jsx'

const AllSubjects = () => {

  const [subjects, setSubjects] = useState([])

  const fetchData = () => {
    Axios.get('/gradesixresource/allsubjects/')
    .then((res) => {
      setSubjects(res.data);
      console.log(res.data);  
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <div className='container-fluid p-3 '>
        <h1 className='text-center text-primary m-3 p-3 border-bottom font-weight-bold focus-in-expand-fwd' >
            ALL SUBJECT, Select anyone to start learning
            </h1>
        <div className='row  justify-content-center '>
                {
                  subjects.map((subject) => (
                    <div class="col-md-3 parent mb-2 " key={subject.id}>
                      <AllSubjectsCard subject={subject}  />
                    </div>
                  ))
                }
        </div>
    </div>
  )
}

export default AllSubjects