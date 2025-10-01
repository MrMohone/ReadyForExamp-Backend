import React from 'react'
import { Link } from 'react-router-dom'

const MainDashboard = () => {
  return (
    <>
    <h1 className='text-center text-primary m-3 p-3 border-bottom' >choose your grade</h1>
        <div className="container">
            <div className="row ">
                <div className="col">
                    <div className="card " style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title mb-3">Ministry</h5>
                            <h6 className="card-subtitle mb-3 ">Ready to pass minstry exam</h6>
                            <Link to="/ministry" className="card-link"><button className='btn btn-primary'>Select now</button></Link>
                        </div>
                    </div>
                </div>

                <div className="col">
                     <div className="card " style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title mb-3">Matric</h5>
                            <h6 className="card-subtitle mb-3 ">Ready to pass matric exam</h6>
                            <Link to="/matric" className="card-link"><button className='btn btn-primary'>Select now</button></Link>
                        </div>
                    </div>
                </div>

                <div className="col">
                     <div className="card " style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title mb-3">Entrance</h5>
                            <h6 className="card-subtitle mb-3 ">Ready to pass entrance exam</h6>
                            <Link to="/entrance" className="card-link"><button className='btn btn-primary'>Select now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainDashboard