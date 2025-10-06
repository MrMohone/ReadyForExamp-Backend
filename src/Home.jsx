import { Link } from 'react-router-dom';
import HomeBgImg from '../src/assets/Homepage.png';

function Home() {

  return (
    <section className="d-flex align-items-center  justify-content-center vh-100 container-fluid bg-light text-center"
    style={{
  backgroundImage: `url(${HomeBgImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
}}>
      <div>
        <h1 className="display-3 fw-bold mb-4 px-2 text-focus-in"
        style={{color: '#1bd8e2ff'}} >
          Welcome to Free Ready To Pass Exam <br />Digital Learning System
        </h1>
        <p className="lead fw-bold mb-5 text-focus-in bg-secondary rounded" style={{fontSize: '1.5rem', color: '#000000de'}}>
          Your digital companion for Ministry, Matric & Entrance Exam success.
        </p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to='/start' className="btn btn-primary btn-lg px-4 fw-bold">
             Start Now
          </Link>
          <Link to='/about'className="btn btn-outline-dark btn-lg px-4 fw-bold bg-secondary">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
