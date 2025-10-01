import React, { useEffect, useState} from 'react'
import Card from './Card'
import  Axios from '../Axios.jsx'

const SelectSubject = () => {

  const [subjects, setSubjects] = useState([])

  const fetchData = () => {
    Axios.get('/gradesixresource')
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
    <>
        <h1 className='text-center text-primary m-3 p-3 border-bottom font-weight-bold'>
            ALL SUBJECT, Select anyone to start learning
            </h1>
        <div className='row  justify-content-center'>
                {
                  subjects.map((subject) => (
                    <div class="col-md-3 parent mb-2 " key={subject.id}>
                      <Card subject={subject}  />
                    </div>
                  ))
                }
        </div>
    </>
  )
}

export default SelectSubject