import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="contact-page">

      {/* LEFT SIDE */}
      <div className="contact-left">

        <h1>CONTACT US</h1>

        <p className="contact-intro">
          Enough about us,<br />
          let's hear about you.
        </p>

        <div className="contact-info">
          <em>General Inquiries:</em>

          <a href="mailto:info@ansoatelier.com">
            info@ansoatelier.com
          </a>
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="contact-right">

        {sent ? (

          <p className="contact-success">
            Thanks, your message has been received.
          </p>

        ) : (

          <form className="contact-form" onSubmit={submit}>

            {/* NAME */}
            <label>
              Name
              <input
                type="text"
                name="name"
                required
              />
            </label>


            {/* COMPANY */}
            <label>
              Company Name
              <input
                type="text"
                name="company"
              />
            </label>


            {/* EMAIL */}
            <label>
              Email
              <input
                type="email"
                name="email"
                required
              />
            </label>


            {/* PROJECT */}
            <label>
              Talk about your project
              <textarea
                name="message"
                rows="3"
                required
              />
            </label>


            {/* BUDGET */}
            <label className="budget-field">
              Budget

              <select name="budget" defaultValue="">
                <option value="" disabled></option>
                <option value="under-5000">
                  Under $5,000
                </option>
                <option value="5000-10000">
                  $5,000 - $10,000
                </option>
                <option value="10000-25000">
                  $10,000 - $25,000
                </option>
                <option value="25000-plus">
                  $25,000+
                </option>
              </select>

              <span className="select-arrow">⌄</span>
            </label>


            <button type="submit">
              Submit
            </button>

          </form>

        )}

      </div>

    </main>
  )
}