import { useState } from 'react'
import './App.css'

const THEMES = [
  { name: 'City', color: '#006cb7', emoji: '🏙️', pieces: '500–2,000', description: 'Build bustling urban life with police, fire stations, and more.' },
  { name: 'Technic', color: '#e3000b', emoji: '⚙️', pieces: '200–4,000', description: 'Advanced mechanical builds with gears, axles, and motors.' },
  { name: 'Star Wars', color: '#1a1a1a', emoji: '🚀', pieces: '300–7,500', description: 'Iconic ships and scenes from a galaxy far, far away.' },
  { name: 'Creator', color: '#00a650', emoji: '🏠', pieces: '100–3,000', description: 'One set, three different builds. Unleash your creativity.' },
  { name: 'Ideas', color: '#f5c400', emoji: '💡', pieces: '500–3,000', description: 'Fan-designed sets voted into production. Truly unique.' },
  { name: 'Ninjago', color: '#9b59b6', emoji: '🥷', pieces: '100–6,000', description: 'Ninjas, dragons, and ancient temples await.' },
]

function Stud() {
  return <div className="stud" aria-hidden="true" />
}

function Brick({ color, studs = 2, children }) {
  return (
    <div className="brick" style={{ '--brick-color': color }}>
      <div className="brick-studs">
        {Array.from({ length: studs }).map((_, i) => <Stud key={i} />)}
      </div>
      <div className="brick-body">{children}</div>
    </div>
  )
}

function ThemeCard({ theme }) {
  return (
    <div className="theme-card" style={{ '--theme-color': theme.color }}>
      <div className="theme-card-top">
        <div className="theme-studs">
          {Array.from({ length: 4 }).map((_, i) => <Stud key={i} />)}
        </div>
      </div>
      <div className="theme-card-body">
        <span className="theme-emoji">{theme.emoji}</span>
        <h3>{theme.name}</h3>
        <p className="theme-pieces">{theme.pieces} pieces</p>
        <p className="theme-desc">{theme.description}</p>
      </div>
    </div>
  )
}

function App() {
  const [brickCount, setBrickCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-block logo-l">L</span>
          <span className="logo-block logo-e">E</span>
          <span className="logo-block logo-g">G</span>
          <span className="logo-block logo-o">O</span>
        </div>
        <nav className="nav">
          <a href="#">Sets</a>
          <a href="#">Themes</a>
          <a href="#">My Collection</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-studs" aria-hidden="true">
            {Array.from({ length: 48 }).map((_, i) => <Stud key={i} />)}
          </div>
          <div className="hero-content">
            <h1>Build Something<br />Amazing</h1>
            <p>Explore thousands of LEGO sets across every theme imaginable.</p>
            <button className="btn-primary" onClick={() => setBrickCount(c => c + 1)}>
              {brickCount === 0 ? '🧱 Start Building' : `🧱 ${brickCount.toLocaleString()} bricks placed!`}
            </button>
          </div>
        </section>

        <section className="themes-section">
          <div className="section-header">
            <Brick color="#e3000b" studs={2}>
              <span>Explore Themes</span>
            </Brick>
          </div>
          <div className="themes-grid">
            {THEMES.map(theme => (
              <ThemeCard key={theme.name} theme={theme} />
            ))}
          </div>
        </section>

        <section className="fun-facts">
          <h2>By the Numbers</h2>
          <div className="facts-grid">
            {[
              { number: '400B+', label: 'Bricks produced since 1958', color: '#e3000b' },
              { number: '900+', label: 'New sets released each year', color: '#006cb7' },
              { number: '80+', label: 'Countries where LEGO is sold', color: '#00a650' },
              { number: '36B', label: 'Bricks made per year', color: '#f5c400' },
            ].map(fact => (
              <div key={fact.label} className="fact-card" style={{ '--fact-color': fact.color }}>
                <div className="fact-number">{fact.number}</div>
                <div className="fact-label">{fact.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-studs" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => <Stud key={i} />)}
        </div>
        <p>Built with 🧱 and React</p>
      </footer>
    </div>
  )
}

export default App
