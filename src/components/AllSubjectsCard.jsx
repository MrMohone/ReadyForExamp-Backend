import { Link } from 'react-router-dom';

const AllSubjectsCard = ({subject}) => {
  return (
          <div class="subject-card w-100 h-100 shadow-sm ">
            <div class="content-box" 
                style={{ 
              height: '350px',   // fixed height for the content-box
              display: 'flex',   // flex to align children vertically
              flexDirection: 'column',
              justifyContent: 'space-between' // space between title, description, and button
            }}>
                <span class="card-title">{subject.allsubject}</span>
                <p class="card-content  overflow-auto" style={{ maxHeight: '140px' }} >
                 {subject.description}
                </p>
                <Link to={`/subject/${subject.allsubject}`}><span class="start-btn">Start</span></Link>
            </div>

            <div className="date-box">
              {(() => {
                const date = new Date(subject.modified_at); // convert string to Date
                const day = date.getDate();
                const month = date.toLocaleString('default', { month: 'short' }); // e.g., "Sep"
                const year = date.getFullYear();
                return (
                  <>
                    <span className="month">{month}</span>
                    <span className="year">{year}</span>
                    <span className="date">{day}</span>
                  </>
                );
              })()}
            </div>
    </div>
  )
}

export default AllSubjectsCard