import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedWord from './AnimatedWord';
import Space from '../assets/images/space.png';
import emailjs from "emailjs-com";
import './Contact.scss';
const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate');
    const [statusMessage, setStatusMessage] = useState("")

    useEffect(() => {
        
         setLetterClass('text-animate-hover')
 
     }, [])

     function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_mmxatog', 'template_47eoq6c', e.target, 'U1aiefgJtt8Dh8OCz')
      .then((result) => {
          console.log(result.text);
          setStatusMessage("Message sent!")
      }, (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.")
      });
      e.target.reset();
     }
    return ( 
        <>
        <div className="container contact-page ">
            <div className="textarea">
                <h1>
                    <AnimatedWord letterClass={letterClass} strArray={['Get']}/>&nbsp;
                    <AnimatedWord letterClass={letterClass} strArray={['in']}/>&nbsp;
                    <AnimatedWord letterClass={letterClass} strArray={['Touch']}/>

                </h1>
                <p>{statusMessage}</p>
                
                <div className="contact-form">
                    <form onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                            <input type="text" name="name" placeholder="Name" required></input>
                            </li>
                            <li className='half'>
                            <input type="email" name="email" placeholder="Email" required></input>
                            </li>
                            <li>
                            <input type="text" name="subject" placeholder="Subject" required></input>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="msg" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' />
                            </li>
                        </ul>
                    </form>
                   
                </div>
            </div>
            <img className="spaceimg" src={Space}></img>
        </div>
     <Loader type="line-scale-pulse-out"/>

        </>
     );
}
 
export default Contact;