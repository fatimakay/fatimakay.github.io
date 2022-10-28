import { Link } from 'react-router-dom';
import LogoF from '../assets/images/FK-logo.png';
import './Layout.scss'; 
import './Home.scss';
import AnimatedWord from './AnimatedWord';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {

    const[letterClass, setLetterClass] = useState('text-animate');
    const hello = ['Hello'];  
    const firstName = ['atima '];
    const lastName = [' Khan'];

    useEffect(() => {
       return () =>  setTimeout(() =>{
         setLetterClass('text-animate-hover')
        }, 4000)

    }, [])
    return ( 
        <>
        <div className="container homepage">
            <div className="mainheading">
                <h1>              
                 <AnimatedWord letterClass={letterClass} strArray={hello}/>
                <br/> <span className={letterClass}>I'm</span> 
                <img src={LogoF} alt="fatima"></img>
                <AnimatedWord letterClass={letterClass} strArray={firstName}/>&nbsp;
                <AnimatedWord letterClass={letterClass} strArray={lastName} />
                </h1>
                <h2>Front-end Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>

        <Loader type="line-scale-pulse-out"/>
        </>
     );
}
 
export default Home;