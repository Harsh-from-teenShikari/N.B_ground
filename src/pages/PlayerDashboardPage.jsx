const player = {
  name: "Aarav Sharma",
  age: 17,
  role: "All-rounder",
  battingStyle: "Right-hand bat",
  bowlingStyle: "Right-arm medium",
  joiningDate: "12 Jan 2024"
};

const overview = [
  { label: "Total Matches", value: "42" },
  { label: "Runs", value: "1,248" },
  { label: "Wickets", value: "36" },
  { label: "Strike Rate", value: "128.4" },
  { label: "Batting Average", value: "34.6" },
  { label: "Economy Rate", value: "6.2" },
  { label: "Catches", value: "22" },
  { label: "Stumpings", value: "0" }
];

const matchHistory = [
  { opponent: "Rising Stars CC", date: "02 Jun 2026", result: "Won", performance: "48 runs, 2 wickets" },
  { opponent: "City Strikers", date: "26 May 2026", result: "Lost", performance: "31 runs" },
  { opponent: "Greenfield XI", date: "18 May 2026", result: "Won", performance: "64 runs, 1 wicket" }
];

const batting = [
  { label: "Total Runs", value: "1,248" },
  { label: "Average", value: "34.6" },
  { label: "Strike Rate", value: "128.4" },
  { label: "Highest Score", value: "96" },
  { label: "50s", value: "9" },
  { label: "100s", value: "0" },
  { label: "Boundary Count", value: "142" }
];

const bowling = [
  { label: "Wickets", value: "36" },
  { label: "Economy", value: "6.2" },
  { label: "Best Bowling", value: "4/22" },
  { label: "Dot Balls", value: "218" },
  { label: "Maidens", value: "7" }
];

const fielding = [
  { label: "Catches", value: "22" },
  { label: "Run Outs", value: "6" },
  { label: "Stumpings", value: "0" }
];

const progress = [
  { label: "Monthly Performance", value: 78 },
  { label: "Yearly Performance", value: 84 },
  { label: "Skill Development", value: 72 }
];

export function PlayerDashboardPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div className="container dashboard-hero-inner">
          <div className="player-avatar" aria-label="Player photo">
            AS
          </div>
          <div>
            <p className="section-kicker">Player Dashboard</p>
            <h1>{player.name}</h1>
            <div className="player-meta">
              <span>Age {player.age}</span>
              <span>{player.role}</span>
              <span>{player.battingStyle}</span>
              <span>{player.bowlingStyle}</span>
              <span>Joined {player.joiningDate}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="container">
          <SectionTitle title="Performance Overview" />
          <div className="dashboard-stats">
            {overview.map((item) => (
              <StatCard key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="dashboard-section dashboard-band">
        <div className="container">
          <SectionTitle title="Match History" />
          <div className="table-wrap">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Opponent</th>
                  <th>Date</th>
                  <th>Result</th>
                  <th>Performance</th>
                </tr>
              </thead>
              <tbody>
                {matchHistory.map((match) => (
                  <tr key={`${match.opponent}-${match.date}`}>
                    <td>{match.opponent}</td>
                    <td>{match.date}</td>
                    <td>{match.result}</td>
                    <td>{match.performance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="container dashboard-columns">
          <AnalyticsCard title="Batting Analytics" items={batting} />
          <AnalyticsCard title="Bowling Analytics" items={bowling} />
          <AnalyticsCard title="Fielding Analytics" items={fielding} />
        </div>
      </section>

      <section className="dashboard-section dashboard-band">
        <div className="container dashboard-columns dashboard-columns-two">
          <article className="dashboard-card">
            <h2>Attendance</h2>
            <div className="attendance-grid">
              <StatCard label="Present Days" value="86" />
              <StatCard label="Absent Days" value="9" />
              <StatCard label="Attendance" value="91%" />
            </div>
          </article>

          <article className="dashboard-card">
            <h2>Coach Remarks</h2>
            <ul className="remark-list">
              <li>Improve footwork against spin.</li>
              <li>Work on yorkers during death overs.</li>
              <li>Continue fitness improvement plan.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="container">
          <SectionTitle title="Progress Tracking" />
          <div className="progress-list">
            {progress.map((item) => (
              <div className="progress-item" key={item.label}>
                <div className="progress-label">
                  <span>{item.label}</span>
                  <strong>{item.value}%</strong>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <article className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function AnalyticsCard({ title, items }) {
  return (
    <article className="dashboard-card">
      <h2>{title}</h2>
      <div className="analytics-list">
        {items.map((item) => (
          <div className="analytics-row" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}
