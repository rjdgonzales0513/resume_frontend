import ProjectCard from './ProjectCard.jsx'

// Set to true to show unfinished projects (wip: true in content) as "Work in progress" cards.
const SHOW_WIP = false

export default function Projects({ profile, projects }) {
  const visible = SHOW_WIP ? projects : projects.filter((project) => !project.wip)
  return (
    <section id="projects" className="section section-projects">
      <div className="container-xl">
        <p className="section-eyebrow">// 01 · Projects</p>
        <h2 className="section-title">Featured projects</h2>
        <p className="section-lead">
          Each one lists what it does, the result, how it is tested, and proof you can open.
        </p>
        <div className="row g-4 mt-3">
          {visible.map((project, i) => (
            <div key={project.title} className="col-12 col-lg-6 d-flex">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
        <p className="mt-5 mb-0">
          <a href={profile.github} className="all-repos">See all repositories on GitHub →</a>
        </p>
      </div>
    </section>
  )
}
