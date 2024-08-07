import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedWord from './AnimatedWord'
import './Skills.scss'
import HTML from '../assets/images/html.png'
import CSS from '../assets/images/css.png'
import Javascript from '../assets/images/js.png'
import React from '../assets/images/react.png'
import SASS from '../assets/images/sass.png'
import Tailwind from '../assets/images/tailwind.png'
import Github from '../assets/images/github.png'
import Bootstrap from '../assets/images/bootstrap.png'
import Firebase from '../assets/images/firebase.png'
import Python from '../assets/images/python.png'
import SQL from '../assets/images/sql.png'
import Tab from '../assets/images/tableau.png'
import Seaborn from '../assets/images/seaborn.png'
import Matplot from '../assets/images/matplot.png'
import DB from '../assets/images/databricks.png'
import Git from '../assets/images/git.png'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
          <div id="skills-page" className="row h-100">

            {/*=== PAGE TITLE AND DESCRIPTION === */}
              <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6 d-flex flex-column justify-content-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start justify-content-sm-center">
                <h1 className='display-3'>
                  <AnimatedWord letterClass={letterClass} strArray={['MY']} />
                  &nbsp;
                  <AnimatedWord
                    letterClass={letterClass}
                    strArray={['SKILLS']}
                  />
                </h1>
                <p className='fs-4'>These are the technologies I've worked with</p>
              </div>

              {/*=== SKILLS LIST === */}
            <div className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 d-flex justify-content-center  align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center  ">
              <div className="row row-cols-4">
              <div className="col">
                <div className="card d-flex flex-column align-items-center ">
                  <img src={Python} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Python</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center ">
                  <img src={SQL} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">SQL</h5>
                  </div>
                </div>
                </div>
               
                <div className="card d-flex flex-column align-items-center ">
                  <img src={Seaborn} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Seaborn</h5>
                  </div>
                </div>
                <div className="card d-flex flex-column align-items-center ">
                  <img src={Matplot} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">matplotlib</h5>
                  </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center ">
                  <img src={Tab} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Tableau</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={DB} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Databricks</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={Javascript} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Javascript</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={React} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">React</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={HTML} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">HTML5</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={CSS} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">CSS3</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={Github} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Github</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={Git} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Git</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={Firebase} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Firebase</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={SASS} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">SASS</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={Tailwind} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Tailwind</h5>
                  </div>
                </div>
                </div>
                <div className="col">
                <div className="card d-flex flex-column align-items-center">
                  <img src={Bootstrap} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white text-center fs-5">Bootstrap</h5>
                  </div>
                </div>
                </div>
              </div>
            </div>
            </div>
    </>
  )
}

export default Skills
