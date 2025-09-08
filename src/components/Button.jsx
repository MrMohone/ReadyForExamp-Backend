import { Link } from 'react-router-dom'
import '../assets/index.css'


const Button = ({btn_start}) => {
  return (
    <>
     
        <Link to='/dashboard'>
            <button class="button bg-dark ">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
        </svg>
        
        <div class="text">
            {btn_start}
        </div>

        </button>
        </Link>
    </>
  )
}

export default Button