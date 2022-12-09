import { useEffect } from "react";
import { useState } from "react";
import AnimatedWord from "./AnimatedWord";
import resume from '../assets/FSK.pdf';
import './Resume.scss';

const Resume = () => {
    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setLetterClass('text-animate-hover')
   }, [])
    return ( 
        <div id="resume-page" className="container">
            <div className="textarea">
                <div className="row row-cols-1 row-cols-md-2 ">
                <div className="col mb-5 ">
                <div className="mainheading">
            
                <h1>              
                 <AnimatedWord letterClass={letterClass} strArray={['MY']}/>&nbsp;
                 <AnimatedWord letterClass={letterClass} strArray={['RESUME']}/>
                </h1>
            </div>
            
            </div>
            <div className="col-mb-5  ">
            <embed src={resume} type="application/pdf" className="resume" width="600px" height="500px"/>
            </div>
                   
        
                </div>
            </div>
        </div>
     );
}
 
export default Resume;