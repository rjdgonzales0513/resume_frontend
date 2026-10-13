export default function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <div className="container-xl">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7 rise">
            <p className="hero-role">
              <span className="pulse" aria-hidden="true" />
              {profile.role}
            </p>
            <h1 className="hero-headline">{profile.headline}</h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-glow">See my projects</a>
              <a href={profile.github} className="btn btn-ghost">GitHub</a>
              <a href={profile.linkedin} className="btn btn-ghost">LinkedIn</a>
            </div>
          </div>
          <div className="col-12 col-lg-5 hero-visual rise rise-2">
            <div className="avatar-orbit">
              {profile.avatar ? (
                <img
                  className="avatar-hero"
                  src={`${import.meta.env.BASE_URL}${profile.avatar}`}
                  alt={`Portrait of ${profile.name}`}
                />
              ) : (
                <div className="avatar-hero avatar-initials" aria-hidden="true">{profile.initials}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
