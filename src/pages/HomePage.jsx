import heroImage from "../assets/home-hero.png";

const stats = [
  { value: "500+", label: "Registered Players" },
  { value: "38", label: "State-Level Players" },
  { value: "72", label: "Tournaments Hosted" },
  { value: "1,200+", label: "Matches Played" },
  { value: "840+", label: "Ground Bookings" }
];

const services = [
  {
    title: "Cricket Academy",
    text: "Structured training and professional player development."
  },
  {
    title: "Ground Booking",
    text: "Book grounds for practice sessions, matches, and events."
  },
  {
    title: "Tournaments",
    text: "Participate in tournaments or organize your own competition."
  },
  {
    title: "Live Matches",
    text: "Follow ongoing matches and watch live streams."
  }
];

const events = [
  "Summer Cricket Championship",
  "Junior Academy Trials",
  "Weekend Match Practice Camp"
];

const stories = [
  "District Selection",
  "State Selection",
  "University Selection"
];

const galleryItems = ["Training", "Matches", "Events", "Awards"];

const testimonials = [
  {
    quote: "The coaching structure helped me improve my match confidence.",
    name: "Academy Student"
  },
  {
    quote: "The academy gives players a disciplined and professional environment.",
    name: "Parent"
  },
  {
    quote: "Ground booking and tournament support are smooth and reliable.",
    name: "Local Team"
  }
];

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <img className="hero-image" src={heroImage} alt="Cricket players training at the academy" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="section-kicker">Premium Cricket Academy</p>
          <h1>Cricket Academy</h1>
          <p>
            Professional cricket training, tournaments, live matches, and ground booking
            in one academy platform.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/player-dashboard">
              Join Academy
            </a>
            <a className="button button-light" href="/ground-booking">
              Book Ground
            </a>
            <a className="button button-outline" href="/tournaments">
              Organize Tournament
            </a>
          </div>
        </div>
      </section>

      <section className="home-section stats-section" aria-label="Academy statistics">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div className="stat-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <SectionHeader title="Featured Services" />
          <div className="card-grid service-grid">
            {services.map((service) => (
              <article className="home-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-band">
        <div className="container two-column-section">
          <div>
            <SectionHeader title="Upcoming Events" />
            <ul className="clean-list">
              {events.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader title="Success Stories" />
            <ul className="clean-list">
              {stories.map((story) => (
                <li key={story}>{story}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <SectionHeader title="Gallery Preview" />
          <div className="gallery-preview">
            {galleryItems.map((item) => (
              <div className="gallery-tile" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section testimonials-section">
        <div className="container">
          <SectionHeader title="Testimonials" />
          <div className="card-grid">
            {testimonials.map((item) => (
              <article className="home-card" key={item.name}>
                <p>&quot;{item.quote}&quot;</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container contact-cta-inner">
          <div>
            <p className="section-kicker">Ready to start?</p>
            <h2>Train, book, or organize with the academy.</h2>
          </div>
          <a className="button button-primary" href="/contact">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
    </div>
  );
}
