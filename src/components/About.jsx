export default function About({ profile }) {
  return (
    <section id="about" className="section section-about">
      <div className="container-xl d-flex flex-wrap align-items-start gap-4 gap-md-5">
        {profile.avatar ? (
          <img
            className="avatar"
            src={`${import.meta.env.BASE_URL}${profile.avatar}`}
            alt={`Photo of ${profile.name}`}
          />
        ) : (
          <div className="avatar avatar-initials" aria-hidden="true">{profile.initials}</div>
        )}
        <div className="about-text">
          <h2 className="section-title section-title-sm">About</h2>
          <p>{profile.about}</p>
        </div>
      </div>
    </section>
  )
}
