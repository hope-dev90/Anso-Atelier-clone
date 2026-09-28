import { Link } from 'react-router-dom'
import { services } from '../data.js'

export default function Services() {
  return (
   <main className="services-page dark-nav">
      
      <div className="services-container">

        {/* LEFT SIDE */}
        <div className="services-left">
          <h1>SERVICES</h1>
          <p className="work-link">Work With Us →</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="services-right">
          {services.map(([name, text]) => (
            <div className="service-row" key={name}>
              <h3>{name}</h3>
              <span className="plus">+</span>
            </div>
          ))}
        </div>

      </div>

    </main>
  )
}