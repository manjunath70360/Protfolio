import { Link } from 'react-router-dom';
import "./index.css"
function Navigation() {
  return (
    <nav className='nav-bar'>
        <p className='name-logo'>Manjunath Matapathi</p>
      <ul className='nav-btn'>
        <li className='nav-text'>
          <Link className='nav-text' to="/"><p>About</p></Link>
        </li>
        <li className='nav-text'>
          <Link className='nav-text' to="/projects"><p>Projects</p></Link>
        </li>
        <li className='nav-text'>
          <Link className='nav-text' to="/contact"><p>Contact</p></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
