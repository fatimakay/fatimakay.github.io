import './Sidebar.scss'
import { Briefcase, GitHub, Home, Linkedin, Mail, Menu, MessageSquare, Tool, User } from 'react-feather';
import Logo from '../assets/images/logo.png'
import { useState, useEffect } from 'react';

const navLinks = [
  { id: 'homepage', label: 'Home',     Icon: Home },
  { id: 'about',    label: 'About Me', Icon: User },
  { id: 'skills',   label: 'Skills',   Icon: Tool },
  { id: 'projects', label: 'My Work',  Icon: Briefcase },
  { id: 'contact',  label: 'Contact',  Icon: MessageSquare },
];

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <div className="toggler">
        <a href="#" onClick={() => setToggleMenu(!toggleMenu)}>
          <Menu size="20" color="#6fffe9" />
        </a>
      </div>
      <div className={`${toggleMenu ? 'wrapper' : null} h-100`} onClick={() => setToggleMenu(false)}>
        <div id="sidebar" className={`${toggleMenu ? 'sidebar-mobile' : 'sidebar'} d-flex flex-column justify-content-between gap-4 bg-black py-4 h-100`}>
          <a id="logo-wrapper" className="d-flex" href="#homepage">
            <img id="logo" src={Logo} alt="logo" />
            <span>Fatima Khan</span>
          </a>

          <nav className="d-flex flex-column align-items-center gap-4">
            {navLinks.map(({ id, label, Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                title={label}
                className={`d-flex gap-5 ${activeSection === id ? 'active' : ''}`}
              >
                <Icon size="30" />
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <ul className="d-flex flex-column align-items-center gap-3">
            <li>
              <a target="_blank" rel="noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/fatimakay/">
                <Linkedin size="20" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" title="Github" href="https://github.com/fatimakay">
                <GitHub size="20" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" title="Email" href="mailto:fatima.k215@gmail.com">
                <Mail size="20" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
