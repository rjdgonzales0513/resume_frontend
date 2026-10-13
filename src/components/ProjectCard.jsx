const placeholderTints = ['tint-blue', 'tint-sand', 'tint-green', 'tint-violet']

export default function ProjectCard({ project, index }) {
  const { title, whatItIs, outcome, approach, stack, screenshot, screenshotAlt, badge, badgeLabel, links, wip } =
    project

  return (
    <article className={`project-card glass${wip ? ' is-wip' : ''}`}>
      <div className={`project-proof ${screenshot ? '' : placeholderTints[index % placeholderTints.length]}`}>
        {screenshot ? (
          <img src={`${import.meta.env.BASE_URL}${screenshot}`} alt={screenshotAlt} loading="lazy" />
        ) : (
          <span className="proof-placeholder">{wip ? 'In the lab' : screenshotAlt}</span>
        )}
        {!screenshot && <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
        {wip ? (
          <span className="wip-chip">
            <span className="wip-dot" aria-hidden="true" />
            Work in progress
          </span>
        ) : badge ? (
          <img className="ci-badge-img" src={badge} alt={badgeLabel || 'CI status'} />
        ) : (
          badgeLabel && <span className="ci-badge">{badgeLabel}</span>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        {wip ? (
          <p className="project-wip-note">Currently being built. Code, results and proof are coming soon.</p>
        ) : (
          <>
            <p className="project-what">
              <strong>What it is:</strong> {whatItIs}
            </p>
            <div className="project-outcome">
              <strong>Outcome:</strong> {outcome}
            </div>
          </>
        )}
        <div className="d-flex flex-wrap align-items-center gap-2">
          <span className="tag-label">Testing approach</span>
          {approach.map((tag) => (
            <span key={tag} className="approach-tag">{tag}</span>
          ))}
        </div>
        {!wip && (
          <>
            <ul className="badge-list" aria-label="Tech stack">
              {stack.map((item) => (
                <li key={item} className="stack-badge">{item}</li>
              ))}
            </ul>
            <div className="project-links">
              {links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                  <span className="visually-hidden"> for {title}</span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  )
}
