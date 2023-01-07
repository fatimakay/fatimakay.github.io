import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedWord from './AnimatedWord'
import emailjs from 'emailjs-com'
import './Contact.scss'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mmxatog',
        'template_47eoq6c',
        e.target,
        'U1aiefgJtt8Dh8OCz'
      )
      .then(
        (result) => {
          console.log(result.text)
          setStatusMessage('Message sent!')
        },
        (error) => {
          console.log(error.text)
          setStatusMessage('Failed to send message. Please try again.')
        }
      )
    e.target.reset()
  }
  return (
    <>
      <div id="contact-page" className="row h-100">

        {/*=== PAGE TITLE AND DESCRIPTION === */}
        <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6  d-flex flex-column justify-content-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start">
          <h1 className='display-3'>
            <AnimatedWord letterClass={letterClass} strArray={['GET']} />
            &nbsp;
            <AnimatedWord letterClass={letterClass} strArray={['IN']} />
            &nbsp;
            <AnimatedWord letterClass={letterClass} strArray={['TOUCH']} />
          </h1>
          <p>{statusMessage}</p>

          <div className="contact-form w-100">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half mb-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className='fs-4'
                    required
                  ></input>
                </li>
                <li className="half mb-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className='fs-4'
                    required
                  ></input>
                </li>
                <li className='mb-2'>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className='fs-4'
                    required
                  ></input>
                </li>
                <li className='mb-2'>
                  <textarea
                    placeholder="Message"
                    name="msg"
                    className='fs-4'
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button fs-5" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {/*=== DECOR IMAGE === */}
        <div
          id="imgwrapper"
          className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 d-none d-sm-block "
        >
          <img
            className="spaceimg"
            src="https://ucarecdn.com/5d5e0874-d871-40e6-b9ab-2fe51d13372d/-/preview/-/quality/smart/-/format/auto/"
          ></img>
        </div>
      </div>
    </>
  )
}

export default Contact
