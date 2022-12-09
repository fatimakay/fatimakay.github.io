import logo from './logo.svg';
import './App.scss';
import { Switch, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Layout/>}>
        <Route index exact element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="resume" element={<Resume/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
