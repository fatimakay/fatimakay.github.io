import './Experience.scss'
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
import Typescript from '../assets/images/typescript.png'
import MUI from '../assets/images/mui.png'

const experiences = [
  {
    company: 'Deutsche Bank',
    role: 'Frontend Developer',
    period: 'Feb 2025 – Jul 2025',
    location: 'Berlin, Germany',
  },
  {
    company: 'Spiced Academy',
    role: 'Web Development Coach',
    period: 'Sep 2024 – Dec 2024',
    location: 'Berlin, Germany',
  },
  {
    company: 'InSource Performance Solutions',
    role: 'Software Engineer',
    period: 'Sep 2021 – Jan 2022',
    location: 'Karachi, Pakistan',
  },
]

const skills = [
  { src: Javascript, label: 'JavaScript' },
  { src: ReactImg,   label: 'React' },
  { src: Typescript, label: 'TypeScript' },
  { src: MUI,        label: 'MUI' },
  { src: SASS,       label: 'SASS' },
  { src: Tailwind,   label: 'Tailwind' },
  { src: Bootstrap,  label: 'Bootstrap' },
  { src: Python,     label: 'Python' },
  { src: SQL,        label: 'SQL' },
  { src: Seaborn,    label: 'Seaborn' },
  { src: Matplot,    label: 'matplotlib' },
  { src: Tab,        label: 'Tableau' },
  { src: DB,         label: 'Databricks' },
  { src: Github,     label: 'Github' },
  { src: Git,        label: 'Git' },
  { src: Firebase,   label: 'Firebase' },
]

const Experience = () => {
  return (
    <section id="experience" className="row min-vh-100">

      {/* === TIMELINE (left) === */}
      <div className="col-12 col-lg-6 ps-sm-5 py-5 d-flex flex-column justify-content-center">
        <h1 className="display-3 mb-5">EXPERIENCE</h1>
        <div className="timeline">
          {experiences.map(({ company, role, period, location }, index) => (
            <div key={company} className="timeline-item">
              <div className={`timeline-dot ${index === 0 ? 'filled' : ''}`} />
              <div className="timeline-content">
                <h3 className="timeline-role">{role}</h3>
                <h4 className="timeline-company">{company}</h4>
                <div className="timeline-meta">
                  <span>{period}</span>
                  <span className="meta-sep">·</span>
                  <span>{location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === SKILLS GRID (right) === */}
      <div className="col-12 col-lg-6 py-5 d-flex flex-column justify-content-center align-items-center">
        <div className="skills-grid">
          {skills.map(({ src, label }) => (
            <div key={label} className="skill-card">
              <img src={src} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Experience
