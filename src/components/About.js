import './About.scss'
import AnimatedWord from './AnimatedWord'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])
  return (
    <>
      <div id="about-page" className="row h-100">

        {/*=== PAGE TITLE AND DESCRIPTION === */}
        <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6 order-2 order-sm-1 mb-auto mb-sm-0 d-flex flex-column justify-content-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start">
          <h1 className='display-3'> 
            <AnimatedWord letterClass={letterClass} strArray={['ABOUT']} />
            &nbsp;
            <AnimatedWord letterClass={letterClass} strArray={['ME']} />
          </h1>
          <p className='fs-4'>
            Welcome to my mini portfolio website! My name is Fatima and I'm an aspiring
            data analyst with a software developer background. I graduated with a Computer Science degree 
            from Bahria University. Through my academic background and extensive self-learning, 
            I have equipped myself with numerous tools and technologies. You can view some of my work
            on my 'Projects' page. 
          </p>
          <p className='fs-4'>
          I'm now seeking a junior data analyst position to kickstart my career, 
          learn from seasoned professionals, and contribute to real-world projects. 
          Thank you for visiting my portfolio, and I look forward to connecting with you!
          </p>
          <h2></h2>
        </div>

        {/*=== SELF PORTRAIT === */}
        <div id="imgwrapper" className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 order-1 order-sm-2 d-flex justify-content-center align-items-end align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center  ">
        <img className='d-flex'
        src='https://ucarecdn.com/3eafbc0f-5b82-419a-a341-57ab6e041ef7/profile.png'/>
        </div>
      </div>
    </>
  )
}

export default About
