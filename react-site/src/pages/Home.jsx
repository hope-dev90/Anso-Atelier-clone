import { Link } from 'react-router-dom'
import CaseGrid from '../components/CaseGrid.jsx'
import Quotes from '../components/Quotes.jsx'
import Partners from '../components/Partners.jsx'
import { services } from '../data.js'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>We make brands<br />cool & relevant.</h1>
      </section>

      <Partners />
<section className="wrap about">
  <div className="about-featured">
    <div className="press">AS FEATURED IN</div>

    <div className="publications">
      <span className="elle">ELLE</span>
      <span className="daily">Daily Mail</span>
    </div>
  </div>

  <div className="about-right">
    <p>
      Montreal-based, North America-wide. Five years of building brands that
      look the part and get talked about. Strategy, design, content and
      campaigns, all under one roof.
    </p>

    <Link to="/about" className="about-link">
      <span>About Us</span>
      <span className="arrow">→</span>
    </Link>
  </div>
</section>

      <section className="wrap">
        <h2>Case studies</h2>
        <CaseGrid />
      <Link className="cases-link" to="/work"><span>Our Work</span><span className="arrow">→</span></Link>
      </section>

   <section className="services">
  <h2>OUR SERVICES</h2>

  <div className="services-grid">
    {services.map((service, index) => (
      <div className="service-item" key={index}>
        {service}
      </div>
    ))}
  </div>

  <Link to="/services" className="services-link">
    <span>Our Services</span>
    <span>→</span>
  </Link>
</section>

 <section className="wrap split global-canadian">
  <div className="global-copy">
    <h3>GLOBAL TO CANADIAN</h3>

    <p>
      The Canadian market has its own culture, its own rules, and its own
      consumer.
    </p>

  </div>

  <div className="global-visuals">
    <img src="/images/y.png" alt="Poppi products" />
    <img src="/images/v.png" alt="Poppi in Canadian retail" />

    <Link to="/clients" className="learn-more">
      <span>Learn More</span>
      <span>→</span>
    </Link>
  </div>
</section>

      <section className="wrap">
        <h2>Testimonials</h2>
        <Quotes />
      </section>
<section className="cta">
  <h2>BECOME OUR NEXT SUCCESS STORY</h2>

  <Link to="/contact" className="cta-link">
    <span>Contact Us</span>
    <span>→</span>
  </Link>
</section>
    </main>
  )
}
