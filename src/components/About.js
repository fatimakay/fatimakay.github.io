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
            Welcome to my mini portfolio website! My name is Fatima Khan and I'm an aspiring
            front-end developer. I graduated with a Computer Science degree from Bahria University, 
            where I fell in love with web development and have been pursuing it since. I've taught 
            myself numerous tools and technologies by building personal projects and freelancing, 
            which you can view on my 'Projects' page. 
          </p>
          <p className='fs-4'>
            I'm constantly striving to increase my knowledge in the world of web
            development. During my internship at Insource Pakistan, I learned
            how to work with a completely unfamiliar language, PHP, while
            effectively meeting my supervisor's milestones. I am now looking for a junior dev 
            position to finally kickstart my career and learn among professionals.
          </p>
          <h2></h2>
        </div>

        {/*=== SELF PORTRAIT === */}
        <div id="imgwrapper" className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 order-1 order-sm-2 d-flex justify-content-center align-items-end align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center  ">
        <img className='d-flex'
        src='https://ucarecdn.com/c33bbd0e-8cfd-463d-8be8-0f3b7d04eb08/-/preview/-/quality/smart/-/format/auto/'/>
        </div>
      </div>
    </>
  )
}

export default About
