export default function Footer({ profile }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="container-xl">
        <p className="section-eyebrow">// 04 · Contact</p>
        <p className="footer-cta">
          Let&apos;s <span className="text-gradient">talk</span>.
        </p>
        <a href={`mailto:${profile.email}`} className="footer-email">{profile.email}</a>
        <div className="footer-bottom d-flex flex-wrap justify-content-between gap-3">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="d-flex gap-4">
            <a href={profile.github}>GitHub</a>
            <a href={profile.linkedin}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
