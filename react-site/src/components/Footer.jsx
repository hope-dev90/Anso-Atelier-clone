import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="word">
        WE MAKE BRANDS<br />
        COOL &amp; RELEVANT.
      </div>

      <div className="fcols">

        {/* Address */}
        <div className="fcontact">
          <span>642 COURCELLE ST, SUITE 415</span>
          <span>MONTREAL - QC - H4C 3C7</span>
          <br />
          <a href="mailto:info@ansoatelier.com">
            info@ansoatelier.com
          </a>
          <a href="mailto:careers@ansoatelier.com">
            careers@ansoatelier.com
          </a>
        </div>

        {/* Navigation */}
        <div>
          <Link to="/work">Case Studies</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Second navigation */}
        <div>
          <a href="#">Staffroom</a>
          <a href="#">Careers</a>
          <Link to="/clients">Clients</Link>
        </div>

        {/* Social / contact */}
        <div>
          <Link to="/contact">Contact Us</Link>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>

      </div>
    </footer>
  )
}