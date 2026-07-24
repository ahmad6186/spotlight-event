import logo from '../assets/logo-white.png'
import './Footer.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__brand">
          <img src={logo} alt="Spotlight Events" />
        </a>

        <nav className="footer__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">© {new Date().getFullYear()} Spotlight Events. All rights reserved.</p>
      </div>
    </footer>
  )
}
