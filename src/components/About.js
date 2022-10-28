import './About.scss'
import AnimatedWord from './AnimatedWord';
import profilepic from '../assets/images/profilepic.png';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
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
            </div>
            <div className="profilepic">
                    <img src={profilepic}/>
            </div>
        </div>
        <Loader type="line-scale-pulse-out"/>
        </>
     );
}
 
export default About;