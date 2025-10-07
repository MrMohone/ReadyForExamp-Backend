import React from 'react'
import { Link } from 'react-router-dom'

const MainDashboard = () => {
  return (
    <>
    <h1 className='text-center text-primary m-3 p-3 border-bottom focus-in-expand-fwd text-uppercase' >Choose your grade</h1>
        <div className="container-fluid">
            <div className="row ">
                <div className="col justify-content-center d-flex mb-3 ">
                    <div className="card " style={{width: '18rem', height: '25rem'}}>
                        <div className="card-body text-center ">
                            <h1 className="card-title mb-3 focus-in-expand-fwd">Ministry</h1>
                            <h6 className="card-subtitle mb-3 focus-in-expand-fwd">Ready to Read for minstry exam</h6>
                            <Link to="/ministry" className="card-link "><button className='btn btn-primary focus-in-expand-fwd'>Select now</button></Link>
                        </div>
                    </div>
                </div>

                <div className="col justify-content-center d-flex mb-3">
                    <div className="card " style={{width: '18rem', height: '25rem'}}>
                        <div className="card-body text-center ">
                            <h1 className="card-title mb-3 focus-in-expand-fwd">Matric</h1>
                            <h6 className="card-subtitle mb-3 focus-in-expand-fwd">Ready to Read for matric exam</h6>
                            <Link to="/matric" className="card-link "><button className='btn btn-primary focus-in-expand-fwd'>Select now</button></Link>
                        </div>
                    </div>
                </div>

               <div className="col justify-content-center d-flex mb-3">
                    <div className="card " style={{width: '18rem', height: '25rem'}}>
                        <div className="card-body text-center ">
                            <h1 className="card-title mb-3 focus-in-expand-fwd">Enterance</h1>
                            <h6 className="card-subtitle mb-3 focus-in-expand-fwd">Ready to Read for enterance exam</h6>
                            <Link to="/entrance" className="card-link "><button className='btn btn-primary focus-in-expand-fwd'>Select now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainDashboard