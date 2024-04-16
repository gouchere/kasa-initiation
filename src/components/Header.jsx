import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header-content">
      <div className="header-logo">Logo Image</div>
      <nav className="header-nav">
        <NavLink to={'/'}>Accueil</NavLink>
        <NavLink to={'/about'}>A propos</NavLink>
      </nav>
    </header>
  )
}
