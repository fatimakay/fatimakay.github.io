/* eslint-disable react/jsx-no-target-blank */
import './Projects.scss'
import OEBLogo from '../assets/images/oeb.png'

const featured = {
  title: 'Open Educational Badges',
  image: OEBLogo,
  description:
    'Platform for documenting skills and competencies with digital credentials (Open Badges), used by educational institutions to issue, manage and verify badges. As a fullstack engineer at mycelia gGmbH, I build features across the Angular frontend and the Django API.',
  highlights: [
    'Badge Studio: in-browser badge designer, with badge images composed server-side from the stored design',
    'PDF certificate editor: embeddable web component with canvas preview, free element positioning and custom fields',
    'Mandatory TOTP two-factor authentication, from setup and login challenge to Redis-backed device tokens',
    'Staff analytics dashboard with KPIs and per-institution drill-downs',
    'Performance work: N+1 query fixes, async Celery tasks for emails and auto-issuance, nginx caching',
    'Playwright end-to-end regression suite, Angular 21 → 22 upgrade and security patching',
  ],
  stack: ['Angular', 'TypeScript', 'Django', 'Python', 'MySQL', 'Celery', 'Docker', 'Playwright'],
  links: [{ label: 'Visit Site', href: 'https://openbadges.education', primary: true }],
}

const projects = [
  {
    title: 'UniRanked',
    status: 'In progress',
    tagline: 'Real admission results for master’s applicants to Germany',
    description:
      'A results database for international students applying to master’s programmes in Germany. Applicants share their background and outcome, and others can see results from people like them, with every CGPA converted to the German scale. Planned: an LLM-powered transcript check against programme requirements.',
    stack: ['React', 'TypeScript', 'MUI', 'Firebase', 'LLMs'],
    links: [{ label: 'View on Github', href: 'https://github.com/fatimakay/uniranked' }],
  },
  {
    title: 'Policing the Police',
    image: 'https://ucarecdn.com/8bc9e27d-6706-45e4-b33d-efc9c5eb4306/dash1.png',
    description: 'Investigating potential racial biases in traffic stop data.',
    stack: ['Python', 'pandas', 'Data Visualization'],
    links: [{ label: 'View on Github', href: 'https://github.com/fatimakay/policing-the-police' }],
  },
  {
    title: 'Weather vs. Flights dbt Project',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScV7_FeuQpPaFmAIH-VR7ICpktohwB7ts4vA&s',
    description:
      'Analyzing the impact of the January 2016 snowstorm on flight schedules, using SQL, dbt and pandas for data transformation.',
    stack: ['SQL', 'dbt', 'pandas'],
    links: [{ label: 'View on Github', href: 'https://github.com/fatimakay/snowzilla_dbt_project' }],
  },
  {
    title: 'Delivery Process Analysis',
    image:
      'https://img.freepik.com/premium-photo/muesli-with-berries-milk-tablehealthy-granola-yogurt-with-berries-breakfast-clos_912214-9589.jpg?w=996',
    description:
      'A data exploration and predictive analysis project on muesli distribution order data.',
    stack: ['Python', 'pandas', 'Predictive Analysis'],
    links: [
      { label: 'View on Github', href: 'https://github.com/fatimakay/delivery-process-analysis' },
    ],
  },
]

const Links = ({ links }) =>
  links.map(({ label, href, primary }) => (
    <a key={href} href={href} target="_blank">
      <button className={`${primary ? 'livebtn' : 'githubbtn'} btn fs-5`}>{label}</button>
    </a>
  ))

const Stack = ({ items }) => (
  <ul className="stack-tags">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const Projects = () => {
  return (
    <section id="projects" className="row">
      <div className="col-11 mt-5 d-flex flex-column justify-content-end ps-sm-5 align-items-center text-center text-sm-start align-items-sm-center">
        <h1 className="display-3">SELECTED WORK</h1>
      </div>

      <div className="col-11 d-flex flex-column">
        {/* === FEATURED === */}
        <div className="card featured-card mb-4">
          <div className="row g-0">
            <div className="col-12 col-lg-4 featured-image">
              <img src={featured.image} alt={featured.title} />
            </div>
            <div className="col-12 col-lg-8 d-flex flex-column">
              <div className="card-body">
                <h3 className="card-title">{featured.title}</h3>
                <p className="card-text fs-5">{featured.description}</p>
                <ul className="featured-highlights">
                  {featured.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <Stack items={featured.stack} />
              </div>
              <div className="card-footer">
                <Links links={featured.links} />
              </div>
            </div>
          </div>
        </div>

        {/* === OTHER PROJECTS === */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projects.map(({ title, image, tagline, status, description, stack, links }) => (
            <div key={title} className="col d-flex align-items-stretch">
              <div className="card">
                {image ? (
                  <img src={image} className="card-img-top" alt={title} />
                ) : (
                  <div className="card-img-top card-banner">
                    <span className="card-banner-title">{title}</span>
                    {tagline && <span className="card-banner-tagline">{tagline}</span>}
                  </div>
                )}
                <div className="card-body">
                  <h3 className="card-title">
                    {title}
                    {status && <span className="status-badge">{status}</span>}
                  </h3>
                  <p className="card-text fs-5">{description}</p>
                  <Stack items={stack} />
                </div>
                <div className="card-footer">
                  <Links links={links} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
