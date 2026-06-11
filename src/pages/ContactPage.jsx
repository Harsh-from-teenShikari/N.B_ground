const contactItems = [
  {
    label: "Phone Number",
    value: "+91 98765 43210",
    href: "tel:+919876543210"
  },
  {
    label: "Email",
    value: "info@cricketacademy.com",
    href: "mailto:info@cricketacademy.com"
  },
  {
    label: "Address",
    value: "Main Academy Ground, Sports Complex Road, Pune, Maharashtra"
  }
];

export function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <p className="section-kicker">Contact Us</p>
          <h1>Get in touch with the academy.</h1>
          <p>Contact us for academy admission, ground booking, tournament support, and match information.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-layout">
          <div className="contact-info-grid">
            {contactItems.map((item) => (
              <article className="contact-info-card" key={item.label}>
                <span>{item.label}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </article>
            ))}
          </div>

          <article className="contact-form-card">
            <h2>Send an enquiry</h2>
            <form className="contact-form">
              <label className="booking-field">
                <span>Name</span>
                <input required name="name" />
              </label>
              <label className="booking-field">
                <span>Contact Number</span>
                <input required name="contact" />
              </label>
              <label className="booking-field">
                <span>Email</span>
                <input required name="email" type="email" />
              </label>
              <label className="booking-field">
                <span>Message</span>
                <textarea required name="message" rows="4" />
              </label>
              <button className="button button-primary" type="submit">
                Submit Enquiry
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="contact-final-cta">
        <div className="container contact-final-inner">
          <div>
            <p className="section-kicker">Ready to begin?</p>
            <h2>Join training, book the ground, or organize your next tournament.</h2>
          </div>
          <a className="button button-primary" href="/ground-booking">
            Book Ground
          </a>
        </div>
      </section>
    </div>
  );
}
