import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  return (
    <footer>
      {location.pathname === '/' && (
        <div>
          <p>Copyright &copy; 2021</p>
          <Link to="/about">About</Link>
        </div>)}
    </footer>
  )
}

export default Footer
