import { useState } from "react";

const matchDetails = [
  { label: "Teams", value: "City Strikers vs Academy Juniors" },
  { label: "Date", value: "18 Jun 2026" },
  { label: "Time", value: "4:00 PM" },
  { label: "Venue", value: "Main Academy Ground" },
  { label: "Match Status", value: "Completed" }
];

const scoreCards = [
  {
    team: "City Strikers",
    score: "156/7",
    overs: "20 overs"
  },
  {
    team: "Academy Juniors",
    score: "149/9",
    overs: "20 overs"
  }
];

const resultItems = [
  { label: "Winner", value: "City Strikers" },
  { label: "Margin", value: "Won by 7 runs" },
  { label: "Player of the Match", value: "Aarav Sharma" }
];

const defaultStreamLink = "https://www.youtube.com/live/example-academy-match";

export function MatchManagementPage() {
  const [streamLink, setStreamLink] = useState(defaultStreamLink);
  const [pendingLink, setPendingLink] = useState(defaultStreamLink);
  const [message, setMessage] = useState("");

  function handleStreamSubmit(event) {
    event.preventDefault();
    setStreamLink(pendingLink);
    setMessage("Streaming link updated.");
  }

  return (
    <div className="match-page">
      <section className="match-hero">
        <div className="container">
          <p className="section-kicker">Match Management</p>
          <h1>City Strikers vs Academy Juniors</h1>
          <p>Track match overview, status, result, and score from one clean page.</p>
        </div>
      </section>

      <section className="match-section">
        <div className="container match-layout">
          <article className="match-card">
            <h2>Match Overview</h2>
            <div className="match-info-list">
              {matchDetails.map((item) => (
                <div className="match-info-row" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="match-card match-status-card">
            <h2>Match Status</h2>
            <strong>Completed</strong>
            <p>The match result and final score have been updated.</p>
          </article>
        </div>
      </section>

      <section className="match-section match-band">
        <div className="container">
          <div className="section-header">
            <h2>Score Display</h2>
          </div>
          <div className="score-grid">
            {scoreCards.map((item) => (
              <article className="score-card" key={item.team}>
                <span>{item.team}</span>
                <strong>{item.score}</strong>
                <p>{item.overs}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="match-section">
        <div className="container">
          <article className="match-card">
            <h2>Match Result</h2>
            <div className="result-grid">
              {resultItems.map((item) => (
                <div className="result-item" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="match-section match-band">
        <div className="container live-match-panel">
          <article className="match-card">
            <p className="section-kicker">Live Match Viewing</p>
            <h2>Watch Match</h2>
            <div className="live-status-row">
              <span>Live Status</span>
              <strong>Live</strong>
            </div>
            <p className="live-copy">Streaming link is available for visitors.</p>
            <a className="button button-primary" href={streamLink} target="_blank" rel="noreferrer">
              View Match
            </a>
          </article>

          <article className="match-card">
            <h2>Add Streaming Link</h2>
            <form className="stream-form" onSubmit={handleStreamSubmit}>
              <label className="booking-field">
                <span>YouTube, Facebook, or Other Streaming Link</span>
                <input
                  required
                  type="url"
                  value={pendingLink}
                  onChange={(event) => setPendingLink(event.target.value)}
                />
              </label>
              <button className="button button-primary" type="submit">
                Save Link
              </button>
              {message && <p className="tournament-message">{message}</p>}
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}
