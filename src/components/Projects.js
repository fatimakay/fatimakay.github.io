import { useEffect, useState } from "react";
import AnimatedWord from "./AnimatedWord";
import './Projects.scss';

const Projects = () => {

    const[letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
          setLetterClass('text-animate-hover');
     }, [])

    return (
      <>
        <div id="projects-page" className="row">

          {/*=== PAGE TITLE AND DESCRIPTION === */}
          <div className="col-11  d-flex flex-column justify-content-end ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start">
            <h1 className="display-3">
              <AnimatedWord letterClass={letterClass} strArray={['MY']} />
              &nbsp;
              <AnimatedWord letterClass={letterClass} strArray={['WORK']} />
            </h1>
            <p className="fs-4">A collection of some of my projects.</p>
          </div>

          {/*=== PROJECTS CARDS === */}
          <div
            id="projectslist"
            className="col-11 h-50 d-flex flex-column justify-contend-end"
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
                    src="https://ucarecdn.com/8785ef4c-4013-4982-8ad1-c4b7122a42e0/-/preview/-/quality/smart/-/format/auto/"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h3 className="card-title">Blog Website</h3>
                    <p className="card-text fs-5">
                      Developed a responsive, react-based front-end of a
                      blogging site for a client.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="https://github.com/alpha2207/blog" target="_blank">
                      <button className="githubbtn btn fs-5">
                        View on Github
                      </button>
                    </a>
                    <a
                      href="https://alpha-blog-frontend.vercel.app/"
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
                    src="https://ucarecdn.com/6aa6e755-bf46-4142-92ed-7e7712a77d01/-/preview/-/quality/smart/-/format/auto/"
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
                      href="https://github.com/fatimakay/react-weather-app"
                      target="_blank"
                    >
                      <button className="githubbtn btn fs-5">
                        View on Github
                      </button>
                    </a>
                    <a
                      href="fatimakay.github.io/react-weather-app/"
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
                      A basic notes taking application built using ReactJS.
                      Firebase was used for backend and for hosting
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
                    src="https://ucarecdn.com/15658a0e-b80e-480c-a7d8-2f36be332567/-/preview/-/quality/smart/-/format/auto/"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      luxescope - Fictional Watch Store
                    </h3>
                    <p className="card-text fs-5">
                      A fake ecommerce website built with Elementor. It
                      integrates various plugins like Woocommerce and Shopengine
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="http://luxescope.byethost22.com" target="_blank">
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