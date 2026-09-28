import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header({ overlay, dark = false }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${overlay ? 'home-nav' : 'inner'}${dark ? ' services-nav' : ''}`}>
      <Link className="logo" to="/" reloadDocument onClick={closeMenu}>Anso Atelier</Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav id="primary-navigation" className={menuOpen ? 'open' : ''}>
        <NavLink to="/services" reloadDocument onClick={closeMenu}>SERVICES</NavLink>
        <NavLink to="/clients" reloadDocument onClick={closeMenu}>CLIENTS</NavLink>
        <NavLink to="/work" reloadDocument onClick={closeMenu}>OUR WORK</NavLink>
        <NavLink to="/about" reloadDocument onClick={closeMenu}>ABOUT US</NavLink>
        <NavLink to="/contact" reloadDocument onClick={closeMenu}>CONTACT US</NavLink>
      </nav>
      <div className="lang">
        <button className="on">EN</button>
        <button>FR</button>
      </div>
    </header>
  )
}
