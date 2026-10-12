export default function Skills({ skills }) {
  return (
    <section id="skills" className="section section-skills">
      <div className="container-xl">
        <h2 className="section-title">Skills</h2>
        <div className="row g-4 mt-1">
          {skills.map((group) => (
            <div key={group.category} className="col-12 col-sm-6 col-lg-3 d-flex">
              <div className="skill-card">
                <h3 className="skill-category">{group.category}</h3>
                <ul className="badge-list">
                  {group.items.map((item) => (
                    <li key={item} className="stack-badge stack-badge-lg">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
