import Quotes from '../components/Quotes.jsx'

export default function Clients() {
  return (
    <main className="clients-page">

      <div className="clients-container">

        {/* LEFT SIDE */}
        <div className="clients-left">
          <h1>OUR CLIENTS</h1>
          <p className="subtitle">Good company<br />keeps good company.</p>

          <div className="contact">
            <p>General Inquiries:</p>
            <a href="mailto:info@ansoatelier.com">
              info@ansoatelier.com
            </a>
          </div>
        </div>

        {/* RIGHT SIDE LOGOS */}
        <div className="clients-grid">
          {[
            "Pepsi", "Four Seasons", "Deciem", "Poppi",
            "Hilton", "Badgley Mischka", "Wilson", "Wellbel",
            "Steve Madden", "Birks", "Montellier", "Royalmount",
            "Marcelle", "New City", "Indeed", "Les Enfants"
          ].map((client) => (
            <div className="logo" key={client}>
              {client}
            </div>
          ))}
        </div>

      </div>

      <h2 className="testimonials-title">Testimonials</h2>
      <Quotes />

    </main>
  )
}