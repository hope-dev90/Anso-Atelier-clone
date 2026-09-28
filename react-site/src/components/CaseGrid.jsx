import { Link } from 'react-router-dom'
import { caseStudies } from '../data.js'

export default function CaseGrid() {
  return (
    <div className="grid">
      {caseStudies.map((c, i) => (
        <Link key={c.slug} className="card" to={`/work/${c.slug}`}>
          <div className="img case-img">
            <img src={c.image} alt={c.title} />
          </div>
          <h3>{c.title}</h3>
        </Link>
      ))}
    </div>
  )
}
