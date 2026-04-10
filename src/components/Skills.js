import './Skills.scss'
import HTML from '../assets/images/html.png'
import CSS from '../assets/images/css.png'
import Javascript from '../assets/images/js.png'
import ReactImg from '../assets/images/react.png'
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

const skills = [
  { src: Python,     label: 'Python' },
  { src: SQL,        label: 'SQL' },
  { src: Seaborn,    label: 'Seaborn' },
  { src: Matplot,    label: 'matplotlib' },
  { src: Tab,        label: 'Tableau' },
  { src: DB,         label: 'Databricks' },
  { src: Javascript, label: 'JavaScript' },
  { src: ReactImg,   label: 'React' },
  { src: HTML,       label: 'HTML5' },
  { src: CSS,        label: 'CSS3' },
  { src: Github,     label: 'Github' },
  { src: Git,        label: 'Git' },
  { src: Firebase,   label: 'Firebase' },
  { src: SASS,       label: 'SASS' },
  { src: Tailwind,   label: 'Tailwind' },
  { src: Bootstrap,  label: 'Bootstrap' },
];

const Skills = () => {
  return (
    <section id="skills" className="row min-vh-100">

      <div className="col-11 col-sm-6 col-md-7 col-lg-6 col-xl-6 d-flex flex-column justify-content-center ps-sm-5 align-items-center text-center text-sm-start align-items-sm-start justify-content-sm-center">
        <h1 className="display-3">MY SKILLS</h1>
        <p className="fs-4">These are the technologies I've worked with</p>
      </div>

      <div className="col-11 col-sm-6 col-md-5 col-lg-6 col-xl-5 d-flex justify-content-center align-items-sm-center justify-content-md-start justify-content-sm-center justify-content-lg-center">
        <div className="row row-cols-4">
          {skills.map(({ src, label }) => (
            <div key={label} className="col">
              <div className="card d-flex flex-column align-items-center">
                <img src={src} className="card-img-top" alt={label} />
                <div className="card-body">
                  <h5 className="card-title text-white text-center fs-5">{label}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
