import { useEffect, useState } from "react";
import scroller from '../assets/images/scroll.png';
import Loader from "react-loaders";
import AnimatedWord from "./AnimatedWord";
import './Projects.scss';

const Projects = () => {

    const[letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
          setLetterClass('text-animate-hover');
     }, [])

    return ( 
        <>
         <div className="container projects-page">
            <div className="textarea">
                <img className="scrollimg" src={scroller}></img>
                <div className="row row-cols-1 row-cols-md-2 ">
                <div className="col mb-5 ">
                <div className="mainheading">
            
                <h1>              
                 <AnimatedWord letterClass={letterClass} strArray={['MY']}/>&nbsp;
                 <AnimatedWord letterClass={letterClass} strArray={['WORK']}/>
                </h1>
                <p>A collection of some of my projects.</p>
            </div>
            
                    </div>
                    <div className="projectslist h-100 col mb-5">
                        <div className="card mb-5">
                            <img src='https://ucarecdn.com/a263d505-1ca3-4b88-b621-f077d34318a7/-/preview/-/quality/smart/-/format/auto/' className="card-img-top "/>
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
                            <img src='https://ucarecdn.com/15658a0e-b80e-480c-a7d8-2f36be332567/-/preview/-/quality/smart/-/format/auto/' className="card-img-top "/>
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
                            <img src='https://ucarecdn.com/5b7930c1-fc49-406b-b11d-c1c79930289b/-/preview/-/quality/smart/-/format/auto/'
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
                            <img src='https://ucarecdn.com/b60bef1d-2a16-4bf7-9aad-ddb4b3fc18e1/-/preview/-/quality/smart/-/format/auto/'
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