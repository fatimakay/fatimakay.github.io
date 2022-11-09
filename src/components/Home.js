import { Link } from 'react-router-dom';
import LogoF from '../assets/images/FK-logo.png';
import Planet from '../assets/images/planets.png';
import Rocket from '../assets/images/rocketship.png';
import './Layout.scss'; 
import './Home.scss';
import AnimatedWord from './AnimatedWord';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {

    const[letterClass, setLetterClass] = useState('text-animate');
    const hello = ['Hello,'];  
    const firstName = ['Fatima '];
    const lastName = [' Khan'];

    useEffect(() => {
         setLetterClass('text-animate-hover')
    }, [])
    return ( 
        <>
        <div className="container homepage">
            <div className="mainheading">
                <h1>              
                 <AnimatedWord letterClass={letterClass} strArray={hello}/>
                <br/> <span className={letterClass}>I'm</span>&nbsp;
                <AnimatedWord letterClass={letterClass} strArray={firstName}/>&nbsp;
                <AnimatedWord letterClass={letterClass} strArray={lastName} />
                </h1>
                <h2>Front-end Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <img className="planet" src={Planet}></img>
            <img className="rocketship" src={Rocket}></img>
        </div>

        <Loader type="line-scale-pulse-out"/>
        </>
     );
}
 
export default Home;