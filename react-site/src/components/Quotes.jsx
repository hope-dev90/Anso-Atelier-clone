import { useState } from 'react'

const testimonials = [
  {
    rating: '★★★★★',
    reviews: '3 Reviews',
    text: `Anso and team are best in class in brand and marketing.
They work hard and always stay on top of best practices and trends.
Overall, I really enjoy working with them and look forward to continuing
to work with them. I highly recommend any brand work with them!!`,
    initial: 'E',
    name: 'Emma Glennon',
    company: 'poppi',
  },
  {
    rating: '★★★★★',
    reviews: '1 Review',
    text: `Working with Anso-Atelier on revamping brand creative was a fantastic
experience. They brought serious research and creative talent to the table
while remaining incredibly flexible and collaborative throughout the entire
process. Every round of feedback was met with thoughtful revisions and a
genuine willingness to get it right.`,
    initial: 'R',
    name: 'Martynе Alphonso',
    company: 'indeed',
  },
  {
    rating: '★★★★★',
    reviews: '2 Reviews',
    text: `Working with AnsoAtelier has so beyond exceeded my expectations.
They instantly grasped the aesthetic I was going for and delivered visuals
that feel like a perfectly curated Pinterest board—elevated, cohesive, and
on brand. Every concern I had was heard and addressed with care.`,
    initial: 'H',
    name: 'Hailey at Heiress',
    company: 'HEIRESS',
  },
  {
    rating: '★★★★★',
    reviews: '1 Review',
    text: `The team was thoughtful, creative and extremely easy to work with.
They understood the direction quickly and transformed the ideas into
something that felt polished and authentic.`,
    initial: 'J',
    name: 'Jordan',
    company: 'Client',
  },
]

export default function Quotes() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) =>
      Math.min(prev + 1, testimonials.length - 3)
    )
  }

  const previous = () => {
    setCurrent((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="quotes-carousel">

      <button
        className="quote-arrow quote-arrow-left"
        onClick={previous}
        disabled={current === 0}
        aria-label="Previous testimonials"
      >
        ‹
      </button>

      <div className="quotes-window">
        <div
          className="quotes-track"
          style={{
            transform: `translateX(calc(-${current} * (33.333% + 16px)))`,
          }}
        >
          {testimonials.map((item, index) => (
            <article className="quote-card" key={index}>

              <div className="quote-top">
                <div className="quote-rating">
                  <span>{item.rating}</span>
                  <small>{item.reviews}</small>
                </div>

                <button className="quote-menu" aria-label="More options">
                  ⋮
                </button>
              </div>

              <p className="quote-text">
                {item.text}
              </p>

              <div className="quote-actions">
                <span>♧</span>
                <span>⌯</span>
              </div>

              <div className="quote-footer">

                <div className="quote-person">
                  <div className="quote-avatar">
                    {item.initial}
                  </div>

                  <strong>{item.name}</strong>
                </div>

                <div className="quote-company">
                  {item.company}
                </div>

              </div>

            </article>
          ))}
        </div>
      </div>

      <button
        className="quote-arrow quote-arrow-right"
        onClick={next}
        disabled={current >= testimonials.length - 3}
        aria-label="Next testimonials"
      >
        ›
      </button>

    </div>
  )
}