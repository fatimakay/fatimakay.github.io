import './Sidebar.scss'
import LogoF from '../assets/images/FK-logo.png'
import LogoSubtitle from '../assets/images/FK-sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faHome, faMessage, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
       <div className="navbar">
        <Link className="logo" to="/">
        <img src={LogoF} alt ="logo"/> 
         </Link>
         <nav>
          <NavLink exact="true" className="home-link" activeClassName="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d43"/>
          </NavLink>
          <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d43"/>
          </NavLink>
          <NavLink exact="true" activeClassName="active" className="project-link" to="/projects">
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d43"/>
          </NavLink>
          <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faMessage} color="#4d4d43"/>
          </NavLink>
          </nav> 
          <ul>
            <li>
              <a target="_blank" rel='norefferer' href='https://www.linkedin.com/in/fatimakay/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
              </a>
            </li>
            <li>
              <a target="_blank" rel='norefferer' href='https://github.com/fatimakay'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
              </a>
            </li>
            <li>
              <a target="_blank" rel='norefferer' href='mailto:fatima.k215@gmail.com'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
              </a>
            </li>
          </ul>
        
       </div>
      );
}
 
export default Sidebar;