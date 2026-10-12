export default function Footer({ profile }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="container-xl d-flex flex-wrap align-items-center justify-content-between gap-3">
        <p className="mb-0 fw-bold text-white">
          Let&apos;s talk · <a href={`mailto:${profile.email}`} className="footer-email">{profile.email}</a>
        </p>
        <div className="d-flex gap-4 fw-bold">
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
