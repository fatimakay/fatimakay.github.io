import './About.scss'

const About = () => {
  return (
    <section id="about" className="row min-vh-100">
      <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6 order-2 order-sm-1 mb-auto mb-sm-0 d-flex flex-column justify-content-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start">
        <h1 className="display-3">ABOUT ME</h1>
        <p className="fs-4">
          Welcome to my portfolio! My name is Fatima and I'm a Berlin-based
          software developer and data enthusiast. I specialize in modern
          frontend development using React, TypeScript, and component-driven
          design systems. My work focuses on building clean, accessible
          interfaces and improving developer experience within teams.
        </p>
        <p className="fs-4">
          Recently, I’ve been expanding into full-stack development, working
          with Angular and Django to better understand system design end-to-end.
          You can view some of the projects I've built on the 'Projects' page.
        </p>
        <p className="fs-4">
          When I'm not coding, I'm usually paddleboarding on the Havel or
          spending time at my favorite arcade. I love to unwind with some
          Assassin's Creed or board games with friends.
        </p>
      </div>

      <div
        id="imgwrapper"
        className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 order-1 order-sm-2 d-flex justify-content-center align-items-end align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center"
      >
        <img
          className="d-flex"
          src="https://ucarecdn.com/3eafbc0f-5b82-419a-a341-57ab6e041ef7/profile.png"
          alt="profile"
        />
      </div>
    </section>
  )
}

export default About
