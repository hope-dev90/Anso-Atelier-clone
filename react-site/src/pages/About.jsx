export default function About() {
  return (
    <main className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-text">
          <h1>ABOUT US</h1>

          <p className="big">
            Anso Atelier is a full service creative marketing agency founded in Montreal, operating across North America.
          </p>

          <p>
            Our mission is simple: we make brands cool and relevant. Cool is how it looks and feels. Relevant is whether anyone cares. Five years in, that's what the most established brands in North America come to us for, and the ones about to be.
          </p>

          <p>
            When you work with us, here's what that actually means.
          </p>

          <p>
            The art director obsessing over how everything looks works alongside the content strategist who knows what performs. Your brand is in the hands of designers, video editors, social strategists, and campaign producers who sit in the same room, on the same brief, every single day.
          </p>

          <p>
            No outsourcing, no third parties. The people who make it beautiful and the people who make it perform are the same team, so the work never has to choose.
          </p>
        </div>

        <div className="about-image">
          <img src="/images/ab.png" alt="studio" />
        </div>
      </section>


      {/* FEATURED IN */}
      <section className="featured">
        <p className="featured-title">AS FEATURED IN</p>
        <div className="featured-logos">
          <span>ELLE</span>
          <span>Daily Mail</span>
          <span>Vogue</span>
        </div>
      </section>


      {/* BIG QUOTE */}
      <section className="big-quote">
        <p>
          “We built this agency because we believed brands deserved better. Better strategy. Better creative. A team that actually cares.
        </p>
        <p>
          Five years later, that standard has never changed and it never will.”
        </p>
      </section>


      {/* IMAGE STRIP */}
      <section className="wide-image">
        <img src="/images/bo.png" alt="studio" />
      </section>


      {/* STAFFROOM SECTION */}
      <section className="staffroom">
        <div className="staff-text">
          <h2>staffroom</h2>
          <p className="tag">MARKETING TALKS, WE TRANSLATE</p>

          <p>
            Staffroom is the marketing media brand born out of Anso Atelier. We cover the industry from the inside. Case studies, campaign breakdowns, BTS content, and industry news from the team actually doing the work.
          </p>

          <p>
            In real life, we bring the best people in the industry together through invite-only panels, workshops, and networking events.
          </p>

          <div className="stats">
            <div>
              <h3>8.8 MILLION</h3>
              <span>Tiktok Views</span>
            </div>
            <div>
              <h3>2 MILLION</h3>
              <span>Instagram Views</span>
            </div>
            <div>
              <h3>35,000</h3>
              <span>Engaged Community</span>
            </div>
          </div>
        </div>

        <div className="staff-image">
          <img src="/images/ou.png" alt="event" />
        </div>
      </section>

    </main>
  )
}