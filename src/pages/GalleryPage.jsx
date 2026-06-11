import heroImage from "../assets/home-hero.png";

const photoSections = [
  {
    title: "Training",
    items: ["Net Practice", "Fitness Session", "Batting Drill"]
  },
  {
    title: "Matches",
    items: ["League Match", "Practice Match", "Final Over"]
  },
  {
    title: "Events",
    items: ["Academy Trials", "Team Meet", "Opening Ceremony"]
  },
  {
    title: "Awards",
    items: ["Best Batter", "Best Bowler", "Player Recognition"]
  }
];

const videoSections = [
  {
    title: "Highlights",
    items: ["Match Highlights", "Top Boundaries", "Best Wickets"]
  },
  {
    title: "Coaching Sessions",
    items: ["Batting Basics", "Bowling Rhythm", "Fielding Practice"]
  },
  {
    title: "Tournament Clips",
    items: ["Toss Moment", "Winning Shot", "Presentation Clip"]
  }
];

export function GalleryPage() {
  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <p className="section-kicker">Gallery</p>
          <h1>Academy photos and videos.</h1>
          <p>Training, matches, events, awards, highlights, coaching sessions, and tournament clips.</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Photos</h2>
          </div>
          <div className="gallery-category-grid">
            {photoSections.map((section) => (
              <GalleryCategory key={section.title} section={section} type="photo" />
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section gallery-band">
        <div className="container">
          <div className="section-header">
            <h2>Videos</h2>
          </div>
          <div className="gallery-category-grid video-grid">
            {videoSections.map((section) => (
              <GalleryCategory key={section.title} section={section} type="video" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function GalleryCategory({ section, type }) {
  return (
    <article className="gallery-category">
      <h3>{section.title}</h3>
      <div className="gallery-media-grid">
        {section.items.map((item) => (
          <div className={`gallery-media-card ${type === "video" ? "is-video" : ""}`} key={item}>
            <img src={heroImage} alt={`${section.title} - ${item}`} />
            <div>
              <span>{type === "video" ? "Video" : "Photo"}</span>
              <strong>{item}</strong>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
