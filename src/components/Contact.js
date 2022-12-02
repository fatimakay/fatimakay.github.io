import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedWord from './AnimatedWord';
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
                    <AnimatedWord letterClass={letterClass} strArray={['GET']}/>&nbsp;
                    <AnimatedWord letterClass={letterClass} strArray={['IN']}/>&nbsp;
                    <AnimatedWord letterClass={letterClass} strArray={['TOUCH']}/>

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
            <img className="spaceimg" src='https://ucarecdn.com/5d5e0874-d871-40e6-b9ab-2fe51d13372d/-/preview/-/quality/smart/-/format/auto/'></img>
        </div>
     <Loader type="line-scale-pulse-out"/>

        </>
     );
}
 
export default Contact;