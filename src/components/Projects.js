import { faArrowRight, faScrewdriver, faWrench } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect, useState } from "react";
import Memoed from '../assets/images/memoed.PNG'
import QuizToit from '../assets/images/quiztoit.PNG'; 
import Luxescope from '../assets/images/luxescope.PNG';
import LandingPage from '../assets/images/landingpage.PNG';
import Arrow from '../assets/images/arrow.png'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scroller from '../assets/images/scroll.png';
import Loader from "react-loaders";
import AnimatedWord from "./AnimatedWord";
import './Projects.scss';
import { Link } from "react-router-dom";

const Projects = () => {

    const[letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
          setLetterClass('text-animate-hover');
     }, [])

    return ( 
        <>
         <div className="container projects-page">
            <div className="textarea">
                <img class="scrollimg" src={scroller}></img>
                <div className="row row-cols-1 row-cols-md-2 ">
                <div className="col mb-5 ">
                <div className="mainheading">
            
                <h1>              
                 <AnimatedWord letterClass={letterClass} strArray={['My']}/>&nbsp;
                 <AnimatedWord letterClass={letterClass} strArray={['Work']}/>
                </h1>
                <p>A collection of some of my projects.</p>
            </div>
            
                    </div>
                    <div className="projectslist h-100 col mb-5">
                        <div className="card mb-5">
                            <img src={Memoed} className="card-img-top "/>
                            <div className="card-body">
                                <h5 className="card-title">Memoed - Notes Taking App</h5>
                                    <p className="card-text">A basic notes taking application built using ReactJS.
                                    Firebase was used for backend and for hosting. </p>
                            </div>
                            <div className="card-footer">
                            <a href="https://github.com/fatimakay/notes-app" target="_blank">
                                <button className="githubbtn btn">View on Github</button></a>
                                <a href="https://memoed-73535.web.app/" target="_blank">
                                    <button className="livebtn btn">Live Demo</button></a>
                            </div>
                        </div>
                        <div className="card mb-5">
                            <img src={Luxescope} className="card-img-top "/>
                            <div className="card-body">
                                <h5 className="card-title">luxescope - Fictional Watch Store</h5>
                                    <p className="card-text">A fake ecommerce website built using 
                                    Wordpress and Elementor. It integrates various plugins like
                                    Woocommerce and Shopengine.</p>
                            </div>
                            <div className="card-footer">
                        
                                <a href="http://luxescope.byethost22.com" target="_blank">
                                    <button className="livebtn btn">Live Demo</button></a>
                            </div>
                        </div>
                        <div className="card mb-5">
                            <img src={LandingPage}
                            className="card-img-top  " alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Travel Landing Page Design</h5>
                                    <p className="card-text">Responsive landing page design built using Bootstrap</p>
                            </div>
                            <div className="card-footer">
                            <a href="https://github.com/fatimakay/travel-landing-page" target="_blank">
                                <button className="githubbtn btn">View on Github</button></a>
                                <a href="https://fatimakay.github.io/travel-landing-page/" target="_blank">
                                    <button className="livebtn btn">Live Demo</button></a>
                            </div>
                        </div>
                        <div className="card mb-5">
                            <img src={QuizToit} 
                            className="card-img-top  " alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Quiz App</h5>
                                    <p className="card-text">A basic quiz application made with JavaScript</p>
                            </div>
                            <div className="card-footer">
                            <a href="https://github.com/fatimakay/quiztoit-app" target="_blank">
                                <button className="githubbtn btn">View on Github</button></a>
                                <a href="https://fatimakay.github.io/quiztoit-app" target="_blank">
                                    <button className="livebtn btn">Live Demo</button></a>
                            </div>
                        </div>
                    </div>
                   
        
                </div>
            </div>
        </div>
    <Loader type="line-scale-pulse-out"/>
    </>
     );


}
 
export default Projects;