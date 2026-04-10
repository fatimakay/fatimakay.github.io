import './Layout.scss';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Layout = () => {
  return (
    <div className="app container-fluid">
      <div className="row">
        <div className="col-1 px-0">
          <Sidebar />
        </div>
        <div className="col-11">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Layout;
