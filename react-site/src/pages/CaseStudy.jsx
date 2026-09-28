import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../data.js'

export default function CaseStudy() {
  const { slug } = useParams()
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    return (
      <main className="page">
        <h1>Case study not found</h1>
        <p className="lead">That project may have moved or no longer exists.</p>
        <Link className="btn" to="/work">View our work</Link>
      </main>
    )
  }

  return (
    <main className="page">
      <p className="lead">{study.category}</p>
      <h1>{study.title}</h1>
      {study.image && <img className="study-image" src={study.image} alt={study.title} />}
      <p className="lead">Explore how we helped this brand make its next move.</p>
      <Link className="btn" to="/work">Back to our work</Link>
    </main>
  )
}
