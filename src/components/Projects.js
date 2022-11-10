import { faScrewdriver, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Memoed from '../assets/images/memoed.PNG'
import Loader from "react-loaders";
import AnimatedWord from "./AnimatedWord";
import './Projects.scss';
import { Link } from "react-router-dom";

const Projects = () => {

    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
          setLetterClass('text-animate-hover')
     }, [])
    return ( 
        <>
        <div className="container projects-page">
            <div className="textarea">
                <div className="row row-cols-1 row-cols-md-3 card-deck">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img src={Memoed} className="card-img-top "/>
                            <div className="card-body">
                                <h5 className="card-title">Memoed - Notes Taking App</h5>
                                    <p className="card-text">A basic notes taking application built using ReactJS.
                                    Firebase was used for backend to authenticate the user and store their notes. </p>
                            </div>
                            <div className="card-footer">
                            <a href="https://github.com/fatimakay/notes-app" target="_blank">
                                <button className="githubbtn btn">View on Github</button></a>
                                <a href="https://memoed-73535.web.app/" target="_blank">
                                    <button className="livebtn btn">Live Demo</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/268633/pexels-photo-268633.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
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
                    </div>
                    
                </div>
            </div>
        </div>
    <Loader type="line-scale-pulse-out"/>
    </>
     );
}
 
export default Projects;