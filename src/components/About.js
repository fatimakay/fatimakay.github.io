import './About.scss'
import AnimatedWord from './AnimatedWord';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faHtml5, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
 
          setLetterClass('text-animate-hover')
 
     }, [])
    return ( 
        <>
        <div className="container about-page">
            <div className="textarea">
                <h1>
                    <AnimatedWord letterClass={letterClass} strArray={['About']}/>&nbsp;
                    <AnimatedWord letterClass={letterClass} strArray={['Me']}/>
                </h1>
                <p>Welcome to my mini portfolio website! My name is Fatima Khan. I'm a CS Grad from 
                    Bahria University, Islamabad. I'm an aspiring front-end developer looking to work in an 
                    established IT company where I can create beautiful and interactive websites.
                </p>
                <p>I'm constantly striving to increase my skillset in the field of web development.
                    During my internship at Insource Pakistan, I learned how to work with a completely
                    unfamiliar language, PHP, while effectively meeting my supervisor's milestones.
                    Currently, I am working on improving my Javascript skills and using the ReactJS framework.
                </p>
                <h2>
                <AnimatedWord letterClass={letterClass} strArray={['Skills']}/>
                </h2>
                <div className="skills mb-5 w-75">
                <div className="card text-center" >
                    <div className="card-body">
                    <FontAwesomeIcon id="html" icon={faHtml5} ></FontAwesomeIcon>
                     </div>
                </div>
                <div className="card text-center">
                    <div className="card-body">
                    <FontAwesomeIcon id="css" icon={faCss3} ></FontAwesomeIcon>
                     </div>
                </div>
                <div className="card text-center">
                    <div className="card-body">
                    <FontAwesomeIcon id="react" icon={faReact} ></FontAwesomeIcon>
                     </div>
                </div>
                <div className="card text-center">
                    <div className="card-body">
                    <FontAwesomeIcon id="bootstrap" icon={faBootstrap} ></FontAwesomeIcon>
                     </div>
                </div>
                <div className="card text-center">
                    <div className="card-body">
                    <FontAwesomeIcon id="wordpress" icon={faWordpress} ></FontAwesomeIcon>
                     </div>
                </div>

                </div>
            </div>
            <div className="profilepic">
                    <img src='https://ucarecdn.com/98a19529-903a-4385-a45a-00fabca95ab1/'/>
            </div>
        </div>
        <Loader type="line-scale-pulse-out"/>
        </>
     );
}
 
export default About;