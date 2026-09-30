import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { site } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" to="/">
          <img src="/logo.svg" alt="" />
          {site.name}
        </Link>
        <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <a href="/#story">Our Story</a>
          <a href="/#boxes">The Boxes</a>
          <a href="/#cups">Cups</a>
          <a href="/#menu">Menu</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#gifts">Gift Cards</a>
          <a href="/#order">How to Order</a>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          Menu
        </button>
        <button className="nav-cta" onClick={() => navigate('/build')}>
          Build a Box
        </button>
      </div>
    </header>
  )
}
