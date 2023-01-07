import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import {Briefcase, GitHub, Home, Linkedin, Mail, Menu, MessageSquare, Tool, User} from 'react-feather'; 
import Logo from '../assets/images/logo.png'
import { useState } from 'react';


const classNameFunc = ({ isActive }) => (isActive ? "active" : "");

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
    return (
      <>

      {/*=== Toggler only for mobile view  === */}
      <div className="toggler">
            <a href="#"  onClick={() => setToggleMenu(!toggleMenu)}>
            <Menu size="20" color="#6fffe9"/>
            </a>
          </div>
          <div className={` ${toggleMenu ? "wrapper" : null} h-100`} onClick={() => setToggleMenu(false)}>
      <div id="sidebar" className={` ${toggleMenu ? "sidebar-mobile" : "sidebar"} d-flex flex-column justify-content-between gap-4   bg-black py-4 h-100`} >
        <Link id="logo-wrapper" className="d-flex " to="/">
        <img id="logo" src={Logo}/>
        <span>Fatima Khan</span>
        </Link>

        {/*=== MAIN NAV MENU === */}
      <nav className=' d-flex flex-column align-items-center gap-4'>
          <NavLink exact="true" id="home-link" title='Home' className={`${classNameFunc} d-flex gap-5`} to="/">
            <Home  size="30"/>
            <span>Home</span>
           </NavLink>
           <NavLink exact="true"  id="about-link"  title='About Me' className={`${classNameFunc} d-flex gap-5`}  to="/about">
            <User size="30"/>
            <span>About Me</span>
           </NavLink>
           <NavLink exact="true" id="project-link"  title='Projects' className={`${classNameFunc} d-flex gap-5`}  to="/projects">
           <Briefcase size="30"/>
           <span>Projects</span>
           </NavLink>
           <NavLink exact="true" id="skills-link"  title='Skills' className={`${classNameFunc} d-flex gap-5`}  to="/skills">
           <Tool size="30"/>
           <span>Skills</span>
           </NavLink>
           <NavLink exact="true" id="contact-link"  title='Contact' className={`${classNameFunc} d-flex gap-5`}  to="/contact">
           <MessageSquare size="30"/>
           <span>Contact</span>
           </NavLink>
      </nav>
      
      {/*=== SOCIAL LINKS === */}
      <ul className='d-flex flex-column align-items-center gap-3'>
             <li>
               <a target="_blank" rel='norefferer' title="LinkedIn" href='https://www.linkedin.com/in/fatimakay/'>
               <Linkedin size="20"/>
               </a>
             </li>
             <li>
               <a target="_blank" rel='norefferer' title="Github" href='https://github.com/fatimakay'>
               <GitHub size="20"/>
               </a>
             </li>
             <li>
               <a target="_blank" rel='norefferer' title="Email" href='mailto:fatima.k215@gmail.com'>
               <Mail size="20"/>
               </a>
             </li>
           </ul>
      </div>
      </div>
      </>
      );
}
 
export default Sidebar;