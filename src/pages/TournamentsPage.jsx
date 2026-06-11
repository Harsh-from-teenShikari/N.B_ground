import { useState } from "react";

const ongoingTournaments = [
  {
    name: "Summer Cricket Championship",
    status: "Ongoing",
    teams: 12,
    matches: 18,
    leader: "City Strikers"
  },
  {
    name: "Junior Academy League",
    status: "Ongoing",
    teams: 8,
    matches: 10,
    leader: "Academy Juniors"
  }
];

const upcomingTournaments = [
  {
    name: "Corporate Premier Cup",
    registration: "Open",
    closing: "25 Jun 2026",
    start: "01 Jul 2026"
  },
  {
    name: "Monsoon T20 Series",
    registration: "Open",
    closing: "05 Jul 2026",
    start: "12 Jul 2026"
  }
];

const completedTournaments = [
  {
    name: "Spring Knockout Trophy",
    winner: "Greenfield XI",
    runnerUp: "Rising Stars CC",
    statistics: "Top scorer: Aarav Sharma"
  },
  {
    name: "Academy Winter Cup",
    winner: "City Strikers",
    runnerUp: "Blue Hawks",
    statistics: "Top wicket taker: Kabir Khan"
  }
];

const teams = ["City Strikers", "Academy Juniors", "Greenfield XI", "Rising Stars CC"];

const fixtures = [
  { match: "City Strikers vs Academy Juniors", date: "14 Jun 2026", status: "Upcoming" },
  { match: "Greenfield XI vs Rising Stars CC", date: "15 Jun 2026", status: "Upcoming" }
];

const results = [
  { match: "City Strikers vs Greenfield XI", result: "City Strikers won by 18 runs" },
  { match: "Academy Juniors vs Rising Stars CC", result: "Academy Juniors won by 5 wickets" }
];

const pointsTable = [
  { team: "City Strikers", played: 4, won: 3, points: 6 },
  { team: "Academy Juniors", played: 4, won: 3, points: 6 },
  { team: "Greenfield XI", played: 4, won: 2, points: 4 },
  { team: "Rising Stars CC", played: 4, won: 1, points: 2 }
];

const statistics = [
  { label: "Top Scorer", value: "Aarav Sharma - 218 runs" },
  { label: "Top Wicket Taker", value: "Kabir Khan - 11 wickets" },
  { label: "Highest Team Score", value: "City Strikers - 186/5" }
];

export function TournamentsPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Tournament request submitted.");
    event.currentTarget.reset();
  }

  return (
    <div className="tournament-page">
      <section className="tournament-hero">
        <div className="container tournament-hero-inner">
          <div>
            <p className="section-kicker">Tournament Dashboard</p>
            <h1>Manage academy tournaments in one place.</h1>
            <p>View ongoing, upcoming, and completed tournaments with teams, fixtures, results, points, and statistics.</p>
          </div>
          <a className="button button-primary" href="#organize-tournament">
            Organize Tournament
          </a>
        </div>
      </section>

      <section className="tournament-section">
        <div className="container tournament-status-grid">
          <TournamentGroup title="Ongoing Tournaments" tournaments={ongoingTournaments} type="ongoing" />
          <TournamentGroup title="Upcoming Tournaments" tournaments={upcomingTournaments} type="upcoming" />
          <TournamentGroup title="Completed Tournaments" tournaments={completedTournaments} type="completed" />
        </div>
      </section>

      <section className="tournament-section tournament-band" id="organize-tournament">
        <div className="container tournament-form-layout">
          <div>
            <p className="section-kicker">Organize Your Tournament</p>
            <h2>Create a tournament request.</h2>
            <p>Submit basic tournament details and organizer information for academy review.</p>
          </div>
          <form className="tournament-form" onSubmit={handleSubmit}>
            <Field label="Tournament Name">
              <input required name="tournamentName" />
            </Field>
            <Field label="Description">
              <textarea required name="description" rows="3" />
            </Field>
            <Field label="Ball Type">
              <select name="ballType">
                <option>Leather Ball - Red Ball</option>
                <option>Leather Ball - White Ball</option>
                <option>Leather Ball - Pink Ball</option>
                <option>Tennis Ball</option>
              </select>
            </Field>
            <div className="form-row">
              <Field label="Entry Fee">
                <input required min="0" name="entryFee" type="number" />
              </Field>
              <Field label="Category">
                <select name="category">
                  <option>Corporate</option>
                  <option>Professional</option>
                </select>
              </Field>
            </div>
            <div className="form-row">
              <Field label="Team Limit">
                <select name="teamLimit">
                  <option>8 Teams</option>
                  <option>16 Teams</option>
                  <option>32 Teams</option>
                </select>
              </Field>
              <Field label="Overs Per Match">
                <select name="overs">
                  <option>10 Overs</option>
                  <option>20 Overs</option>
                  <option>40 Overs</option>
                </select>
              </Field>
            </div>
            <Field label="Number of League Matches">
              <input required min="1" name="leagueMatches" type="number" />
            </Field>
            <div className="form-row">
              <Field label="Start Date">
                <input required name="startDate" type="date" />
              </Field>
              <Field label="End Date">
                <input required name="endDate" type="date" />
              </Field>
            </div>
            <Field label="Organizer Name">
              <input required name="organizerName" />
            </Field>
            <div className="form-row">
              <Field label="Contact">
                <input required name="contact" />
              </Field>
              <Field label="Email">
                <input required name="email" type="email" />
              </Field>
            </div>
            <button className="button button-primary" type="submit">
              Submit Request
            </button>
            {message && <p className="tournament-message">{message}</p>}
          </form>
        </div>
      </section>

      <section className="tournament-section">
        <div className="container">
          <SectionTitle title="Tournament Detail Page" />
          <div className="tournament-detail-grid">
            <DetailCard title="Overview">
              <p>Summer Cricket Championship is an academy tournament featuring league matches, playoffs, and player statistics.</p>
            </DetailCard>
            <DetailCard title="Teams">
              <SimpleList items={teams} />
            </DetailCard>
            <DetailCard title="Fixtures">
              <SimpleList items={fixtures.map((item) => `${item.match} - ${item.date} - ${item.status}`)} />
            </DetailCard>
            <DetailCard title="Results">
              <SimpleList items={results.map((item) => `${item.match} - ${item.result}`)} />
            </DetailCard>
            <DetailCard title="Points Table">
              <table className="mini-table">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {pointsTable.map((row) => (
                    <tr key={row.team}>
                      <td>{row.team}</td>
                      <td>{row.played}</td>
                      <td>{row.won}</td>
                      <td>{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DetailCard>
            <DetailCard title="Statistics">
              <SimpleList items={statistics.map((item) => `${item.label}: ${item.value}`)} />
            </DetailCard>
          </div>
        </div>
      </section>
    </div>
  );
}

function TournamentGroup({ title, tournaments, type }) {
  return (
    <article className="tournament-card">
      <h2>{title}</h2>
      <div className="tournament-list">
        {tournaments.map((tournament) => (
          <div className="tournament-item" key={tournament.name}>
            <strong>{tournament.name}</strong>
            {type === "ongoing" && (
              <span>{tournament.status} | {tournament.teams} teams | {tournament.matches} matches | Leader: {tournament.leader}</span>
            )}
            {type === "upcoming" && (
              <span>Registration {tournament.registration} | Closing {tournament.closing} | Starts {tournament.start}</span>
            )}
            {type === "completed" && (
              <span>Winner: {tournament.winner} | Runner-up: {tournament.runnerUp} | {tournament.statistics}</span>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

function DetailCard({ title, children }) {
  return (
    <article className="detail-card">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

function SimpleList({ items }) {
  return (
    <ul className="simple-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Field({ label, children }) {
  return (
    <label className="booking-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
    </div>
  );
}
