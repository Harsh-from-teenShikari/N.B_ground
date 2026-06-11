const aboutSections = [
  {
    title: "Academy Story",
    text: "The academy was built to give cricket players a professional place to train, compete, and grow with the right guidance."
  },
  {
    title: "Vision",
    text: "To become a trusted cricket development center known for strong players, well-run tournaments, and quality facilities."
  },
  {
    title: "Mission",
    text: "To develop players through disciplined coaching, regular match practice, performance tracking, and a clear growth path."
  },
  {
    title: "Infrastructure",
    text: "The academy supports training sessions, match practice, tournaments, and ground booking through organized facilities."
  },
  {
    title: "Achievements",
    text: "The academy is focused on producing district, state, university, and professional-level cricket opportunities for players."
  }
];

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <p className="section-kicker">About Us</p>
          <h1>Building disciplined cricket players.</h1>
          <p>
            A cricket academy focused on coaching, match exposure, tournaments,
            and player development.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">
          {aboutSections.map((item) => (
            <article className="about-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
