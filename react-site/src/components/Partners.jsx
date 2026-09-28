import { partners } from '../data.js'

function Logo({ p, i, hidden }) {
  return (
    <li className="partner" aria-hidden={hidden || undefined}>
      {p.src
        ? <img src={p.src} alt={p.name} />
        : <span className={`ph p${i % 6}`}>{p.name}</span>}
    </li>
  )
}

export default function Partners() {
  return (
    <section className="partners" aria-label="As Featured In">

      <ul className="partners-track">
        {partners.map((p, i) => <Logo key={p.name} p={p} i={i} />)}
        {partners.map((p, i) => <Logo key={`d${p.name}`} p={p} i={i} hidden />)}
      </ul>
    </section>
  )
}