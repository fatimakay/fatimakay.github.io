import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faFile, faHome, faMessage, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const classNameFunc = ({ isActive }) => (isActive ? "active" : "");

const Sidebar = () => {
    return (
      <>
  
         <div className="nav-bar">
         <Link className="logo" to="/">
         <img src='https:ucarecdn.com/bb8bc692-ccbd-4b7c-99df-d9cb0a1dd9de/-/preview/400x400/' alt ="logo"/> 
          </Link>
          <nav>
           <NavLink exact="true" id="home-link" className={classNameFunc} to="/">
             <FontAwesomeIcon icon={faHome} color="#4d4d43"/>
           </NavLink>
           <NavLink exact="true"  id="about-link" className={classNameFunc} to="/about">
             <FontAwesomeIcon icon={faUser} color="#4d4d43"/>
           </NavLink>
           <NavLink exact="true" id="project-link" className={classNameFunc} to="/projects">
             <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d43"/>
           </NavLink>
           <NavLink exact="true" id="contact-link" className={classNameFunc} to="/contact">
             <FontAwesomeIcon icon={faMessage} color="#4d4d43"/>
           </NavLink>
           <NavLink exact="true" id="resume-link" className={classNameFunc} to="/resume">
             <FontAwesomeIcon icon={faFile} color="#4d4d43"/>
           </NavLink>
           </nav> 
           <ul >
             <li>
               <a target="_blank" rel='norefferer' href='https:www.linkedin.com/in/fatimakay/'>
                 <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
               </a>
             </li>
             <li>
               <a target="_blank" rel='norefferer' href='https:github.com/fatimakay'>
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
      </>
      );
}
 
export default Sidebar;