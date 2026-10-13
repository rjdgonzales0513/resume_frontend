export default function About({ profile }) {
  return (
    <section id="about" className="section section-about">
      <div className="container-xl">
        <div className="about-panel glass">
          <p className="section-eyebrow">// 03 · About</p>
          <div className="about-text">
            <h2 className="section-title">About</h2>
            <p>{profile.about}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
