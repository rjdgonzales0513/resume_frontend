import ProjectCard from './ProjectCard.jsx'

export default function Projects({ profile, projects }) {
  return (
    <section id="projects" className="section section-projects">
      <div className="container-xl">
        <h2 className="section-title">Featured projects</h2>
        <p className="section-lead">
          Each one lists what it does, the result, how it is tested, and proof you can open.
        </p>
        <div className="row g-4 mt-2">
          {projects.map((project, i) => (
            <div key={project.title} className="col-12 col-lg-6 d-flex">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
        <p className="mt-4 mb-0">
          <a href={profile.github} className="fw-bold">See all repositories on GitHub →</a>
        </p>
      </div>
    </section>
  )
}
