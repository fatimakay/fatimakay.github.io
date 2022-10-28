import { faScrewdriver, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedWord from "./AnimatedWord";
import './Projects.scss';

const Projects = () => {

    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
 
          setLetterClass('text-animate-hover')
 
     }, [])
    return ( 
        <>
        <div className="container projects-page">
            <div className="textarea">
                <h1>
                    <AnimatedWord letterClass={letterClass} strArray={['Page']}/>&nbsp;
                    <AnimatedWord letterClass={letterClass} strArray={['Under']}/>&nbsp;
                    <AnimatedWord letterClass={letterClass} strArray={['Construction!']}/>&nbsp;
                    <FontAwesomeIcon icon={faWrench} color="#8EE3EF"/>
                </h1>
            </div>
            
        </div>
    <Loader type="line-scale-pulse-out"/>
    </>
     );
}
 
export default Projects;