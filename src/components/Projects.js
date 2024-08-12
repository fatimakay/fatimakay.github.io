/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import AnimatedWord from "./AnimatedWord";
import './Projects.scss';

const Projects = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setLetterClass('text-animate-hover');
  }, [])

  return (
    <>
      <div id="projects-page" className="row">

        {/*=== PAGE TITLE AND DESCRIPTION === */}
        <div className="col-11 mt-5 d-flex flex-column justify-content-end ps-sm-5 align-items-center text-center text-sm-start align-items-sm-center">
          <h1 className="display-3">
            <AnimatedWord letterClass={letterClass} strArray={['MY']} />
            &nbsp;
            <AnimatedWord letterClass={letterClass} strArray={['WORK']} />
          </h1>
          <p className="fs-4">A collection of some of my projects.</p>
        </div>



        {/*=== PROJECTS CARDS === */}
        <h2 className="display-4">Data Analytics</h2>
        <div
          id="dataprojectslist"
          className="col-11 h-50 d-flex flex-column"
        >
          <div className="row row-cols-1 row-cols-md-3 g-4">

          <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScV7_FeuQpPaFmAIH-VR7ICpktohwB7ts4vA&s"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Weather vs. Flights DBT Project
                  </h3>
                  <p className="card-text fs-5">
                  Analyzing the Impact of the January 2016 Snowstorm on Flight Schedules using SQL, dbt, and pandas for data transformation.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="https://github.com/fatimakay/snowzilla_dbt_project" target="_blank">
                    <button className="githubbtn btn fs-5">
                      View on Github
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://img.freepik.com/premium-photo/muesli-with-berries-milk-tablehealthy-granola-yogurt-with-berries-breakfast-clos_912214-9589.jpg?w=996"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Delivery Process Analysis
                  </h3>
                  <p className="card-text fs-5">
                  A data exploration and predictive analysis project on Muesli distribution order data.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="https://github.com/fatimakay/delivery-process-analysis" target="_blank">
                    <button className="githubbtn btn fs-5">
                      View on Github
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/84669443-aae1-4464-8bb5-66c6aea8e194/disneyneu.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Exploring Disney Data
                  </h3>
                  <p className="card-text fs-5">
                    Step-by-Step Data Preprocessing and Descriptive Analysis
                  </p>
                </div>
                <div className="card-footer">
                  <a href="https://github.com/fatimakay/python-disney-project" target="_blank">
                    <button className="githubbtn btn fs-5">
                      View on Github
                    </button>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        <h2 className="display-4">Web Development</h2>
        <div
          id="webprojectslist"
          className="col-11 h-50 d-flex flex-column"
        >

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/10be364e-bca7-4d0d-8142-195ba7c76717/-/preview/-/quality/smart/-/format/auto/"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Nebula - Realtime Chat App</h3>
                  <p className="card-text fs-5">
                    A chat application which uses Firebase database to fetch conversations
                    in realtime.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="https://github.com/fatimakay/nebula-chat-app" target="_blank">
                    <button className="githubbtn btn fs-5">
                      View on Github
                    </button>
                  </a>
                  <a
                    href="https://nebulachatapp.web.app"
                    target="_blank"
                  >
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/70141a98-3661-4019-aecd-ab3e7ef5e7b2/-/preview/-/quality/smart/-/format/auto/"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Weather App</h3>
                  <p className="card-text fs-5">
                    A weather app developed using the OpenWeatherMap API, with
                    dynamic backgrounds based on weather conditions
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="fatimakay.github.io/react-weather-app"
                    target="_blank"
                    
                  >
                    <button className="githubbtn btn fs-5">
                      View on Github
                    </button>
                  </a>
                  <a
                    href="https://fatimakay.github.io/react-weather-app/"
                    target="_blank"
                  >
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/a263d505-1ca3-4b88-b621-f077d34318a7/-/preview/-/quality/smart/-/format/auto/"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Memoed - Notes Taking App</h3>
                  <p className="card-text fs-5">
                    Simple note-taking application with login functionality. Built withs ReactJS and
                    hosted on Firebase.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://github.com/fatimakay/notes-app"
                    target="_blank"
                  >
                    <button className="githubbtn btn fs-5">
                      View on Github
                    </button>
                  </a>
                  <a href="https://memoed-73535.web.app/" target="_blank">
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img
                  src="https://ucarecdn.com/5b7930c1-fc49-406b-b11d-c1c79930289b/-/preview/-/quality/smart/-/format/auto/"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">Travel Landing Page Design</h3>
                  <p className="card-text fs-5">
                    Responsive landing page design built using Bootstrap
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://github.com/fatimakay/travel-landing-page"
                    target="_blank"
                  >
                    <button className="githubbtn btn fs-5">
                      View on Github
                    </button>
                  </a>
                  <a
                    href="https://fatimakay.github.io/travel-landing-page/"
                    target="_blank"
                  >
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <img src="https://ucarecdn.com/b60bef1d-2a16-4bf7-9aad-ddb4b3fc18e1/-/preview/-/quality/smart/-/format/auto/" />
                <div className="card-body">
                  <h3 className="card-title">Quiz App</h3>
                  <p className="card-text fs-5">
                    A basic quiz application made with JavaScript
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://github.com/fatimakay/quiztoit-app"
                    target="_blank"
                  >
                    <button className="githubbtn btn fs-5">
                      View on Github
                    </button>
                  </a>
                  <a
                    href="https://fatimakay.github.io/quiztoit-app"
                    target="_blank"
                  >
                    <button className="livebtn btn fs-5">Live Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )


}

export default Projects;