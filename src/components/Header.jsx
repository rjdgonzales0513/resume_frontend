const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ profile }) {
  return (
    <header className="site-header">
      <div className="container-xl d-flex flex-wrap align-items-center justify-content-between gap-3">
        <a href="#top" className="site-name">{profile.name}</a>
        <nav aria-label="Main">
          <ul className="site-nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
