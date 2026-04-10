import Rocket from '../assets/images/rocketship.png';
import './Layout.scss';
import './Home.scss';
import Resume from '../assets/FSK.pdf';

const Home = () => {
  return (
    <section id="homepage" className="row vh-100">

      <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6 order-2 order-sm-1 d-flex flex-column justify-content-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start">
        <h1 className="display-1">HELLO, I'M<br />FATIMA KHAN</h1>
        <h2 className="mt-sm-2 mt-lg-3 display-6">Data and Software Engineer</h2>
        <div className="d-flex">
          <a href="#contact" className="flat-button mt-2 mt-sm-3 mt-lg-4 fs-4">CONTACT ME</a>
          <a href={Resume} className="view-resume mt-2 mt-sm-3 mt-lg-4 fs-4" target="_blank" rel="noreferrer">VIEW RESUME</a>
        </div>
      </div>

      <div id="imagewrapper" className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 order-1 order-sm-2 d-flex justify-content-center align-items-end align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center">
        <img className="planet mw-100 px-lg-3" src="https://ucarecdn.com/9de76d9e-7029-4465-a820-a910fdf26065/-/preview/-/quality/smart/-/format/auto/" alt="planet" />
        <img className="rocketship" src={Rocket} alt="rocketship" />
      </div>

    </section>
  );
};

export default Home;
