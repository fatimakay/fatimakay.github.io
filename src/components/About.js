import './About.scss'
import Profile from '../assets/images/profile.png'

const About = () => {
  return (
    <section id="about" className="row min-vh-100">
      <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6 order-2 order-sm-1 mb-auto mb-sm-0 d-flex flex-column justify-content-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start">
        <h1 className="display-3">ABOUT ME</h1>
        <p className="fs-4">
          I'm a software engineer based in Berlin, currently working full-stack
          at mycelia gGmbH on{' '}
          <a href="https://openbadges.education" target="_blank" rel="noreferrer">
            Open Educational Badges
          </a>
          , a platform for issuing and verifying digital credentials. Day to
          day that means Angular and Django: shipping things like a badge
          designer and a custom PDF builder, and looking after the Docker
          infrastructure, CI/CD pipelines and test suites behind them.
        </p>
        <p className="fs-4">
          Before that, I built React and TypeScript features for Deutsche
          Bank's Merchant Solutions platform, where I led the rollout of
          multilingual support, and coached aspiring developers at Spiced
          Academy. A background in data analytics means I'm just as
          comfortable in SQL and pandas as in the UI.
        </p>
        <p className="fs-4">
          I speak English, Urdu and German (B1). Outside of work, you'll find
          me paddleboarding on the Havel or at my favourite arcade.
        </p>
      </div>

      <div
        id="imgwrapper"
        className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 order-1 order-sm-2 d-flex justify-content-center align-items-end align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center"
      >
        <img
          className="d-flex"
          src={Profile}
          alt="profile"
        />
      </div>
    </section>
  )
}

export default About
