import logo from './logo.svg';
import './App.scss';
import {  Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Layout/>}>
        <Route index exact element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="skills" element={<Skills/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
