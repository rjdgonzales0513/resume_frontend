import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import { useContent } from './data/useContent.js'

export default function App() {
  const { content, loading } = useContent()

  if (loading) {
    return (
      <main className="loading-screen" aria-busy="true">
        <p>Loading…</p>
      </main>
    )
  }

  const { profile, projects, skills } = content
  return (
    <>
      <Header profile={profile} />
      <main>
        <Hero profile={profile} />
        <Projects profile={profile} projects={projects} />
        <Skills skills={skills} />
        <About profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
