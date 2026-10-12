export default function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <div className="container-xl">
        <p className="hero-role">{profile.role}</p>
        <h1 className="hero-headline">{profile.headline}</h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="d-flex flex-wrap gap-3 mt-2">
          <a href="#projects" className="btn btn-amber">See my projects</a>
          <a href={profile.github} className="btn btn-outline-light-thick">GitHub</a>
          <a href={profile.linkedin} className="btn btn-outline-light-thick">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
