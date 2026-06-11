import { useMemo, useState } from "react";

const matchSlots = [
  { value: "one-day", label: "One Day Match Slot", duration: "7 hours" },
  { value: "t20", label: "T20 Match Slot", duration: "3 hours" },
  { value: "full-day", label: "Full Day Slot", duration: "Full day" }
];

const initialBookings = [
  {
    id: 1,
    type: "Match",
    name: "Rohan Mehta",
    teamName: "City Strikers",
    contact: "9876543210",
    matchType: "T20 Practice Match",
    date: "2026-06-15",
    slot: "t20",
    status: "Upcoming"
  },
  {
    id: 2,
    type: "Tournament",
    name: "Elite Sports",
    teamName: "Summer Cup",
    contact: "9876500000",
    startDate: "2026-06-20",
    endDate: "2026-06-23",
    days: 4,
    status: "Upcoming"
  },
  {
    id: 3,
    type: "Match",
    name: "Academy XI",
    teamName: "Academy XI",
    contact: "9876511111",
    matchType: "One Day Match",
    date: "2026-06-05",
    slot: "one-day",
    status: "Past"
  }
];

const calendarDates = [
  "2026-06-15",
  "2026-06-16",
  "2026-06-20",
  "2026-06-21",
  "2026-06-22",
  "2026-06-23",
  "2026-06-24"
];

export function GroundBookingPage() {
  const [bookings, setBookings] = useState(initialBookings);
  const [bookingType, setBookingType] = useState("match");
  const [message, setMessage] = useState("");
  const [matchForm, setMatchForm] = useState({
    name: "",
    teamName: "",
    contact: "",
    matchType: "T20 Practice Match",
    date: "2026-06-16",
    slot: "t20"
  });
  const [tournamentForm, setTournamentForm] = useState({
    organizerName: "",
    tournamentName: "",
    contact: "",
    startDate: "2026-06-24",
    days: "2"
  });

  const bookingGroups = useMemo(() => {
    return {
      upcoming: bookings.filter((booking) => booking.status === "Upcoming"),
      current: bookings.filter((booking) => booking.status === "Current"),
      past: bookings.filter((booking) => booking.status === "Past")
    };
  }, [bookings]);

  function getDateStatus(date) {
    if (isTournamentBlocked(bookings, date)) {
      return "Tournament Blocked";
    }

    if (bookings.some((booking) => booking.type === "Match" && booking.date === date)) {
      return "Occupied";
    }

    return "Available";
  }

  function handleMatchSubmit(event) {
    event.preventDefault();
    setMessage("");
    const fields = event.currentTarget.elements;
    const values = {
      name: fields.namedItem("name").value,
      teamName: fields.namedItem("teamName").value,
      contact: fields.namedItem("contact").value,
      matchType: fields.namedItem("matchType").value,
      date: fields.namedItem("date").value,
      slot: fields.namedItem("slot").value
    };

    if (isTournamentBlocked(bookings, values.date)) {
      setMessage("This date is blocked for a tournament. Choose another date.");
      return;
    }

    if (hasMatchConflict(bookings, values.date, values.slot)) {
      setMessage("This slot is already booked. Choose another slot or date.");
      return;
    }

    const selectedSlot = matchSlots.find((slot) => slot.value === values.slot);

    setBookings((current) => [
      ...current,
      {
        id: Date.now(),
        type: "Match",
        name: values.name,
        teamName: values.teamName,
        contact: values.contact,
        matchType: values.matchType,
        date: values.date,
        slot: values.slot,
        slotLabel: selectedSlot?.label,
        status: "Upcoming"
      }
    ]);
    setMessage("Match booking confirmed.");
  }

  function handleTournamentSubmit(event) {
    event.preventDefault();
    setMessage("");
    const fields = event.currentTarget.elements;
    const values = {
      organizerName: fields.namedItem("organizerName").value,
      tournamentName: fields.namedItem("tournamentName").value,
      contact: fields.namedItem("contact").value,
      startDate: fields.namedItem("startDate").value,
      days: fields.namedItem("days").value
    };

    const days = Number(values.days);
    const endDate = addDays(values.startDate, days - 1);

    if (
      bookings.some((booking) => {
        if (booking.type === "Tournament") {
          return values.startDate <= booking.endDate && endDate >= booking.startDate;
        }

        return booking.date >= values.startDate && booking.date <= endDate;
      })
    ) {
      setMessage("Tournament dates conflict with an existing booking.");
      return;
    }

    setBookings((current) => [
      ...current,
      {
        id: Date.now(),
        type: "Tournament",
        name: values.organizerName,
        teamName: values.tournamentName,
        contact: values.contact,
        startDate: values.startDate,
        endDate,
        days,
        status: "Upcoming"
      }
    ]);
    setMessage(`Tournament booking confirmed for ${days} days.`);
  }

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="container">
          <p className="section-kicker">Ground Booking</p>
          <h1>Book practice, match, and tournament slots.</h1>
          <p>Check availability, avoid overlapping bookings, and confirm ground usage.</p>
        </div>
      </section>

      <section className="booking-section">
        <div className="container booking-layout">
          <div>
            <SectionTitle title="Live Ground Availability Calendar" />
            <div className="calendar-grid">
              {calendarDates.map((date) => {
                const status = getDateStatus(date);
                return (
                  <article className={`calendar-day ${statusClass(status)}`} key={date}>
                    <strong>{formatDate(date)}</strong>
                    <span>{status}</span>
                  </article>
                );
              })}
            </div>
            <div className="calendar-legend">
              <span><i className="legend-dot available-dot" />Available</span>
              <span><i className="legend-dot occupied-dot" />Occupied</span>
              <span><i className="legend-dot blocked-dot" />Tournament blocked</span>
            </div>
          </div>

          <div className="booking-card">
            <div className="booking-tabs" aria-label="Booking type">
              <button
                className={bookingType === "match" ? "active" : ""}
                type="button"
                onClick={() => setBookingType("match")}
              >
                Match Booking
              </button>
              <button
                className={bookingType === "tournament" ? "active" : ""}
                type="button"
                onClick={() => setBookingType("tournament")}
              >
                Tournament Booking
              </button>
            </div>

            {bookingType === "match" ? (
              <MatchBookingForm
                form={matchForm}
                onChange={setMatchForm}
                onSubmit={handleMatchSubmit}
              />
            ) : (
              <TournamentBookingForm
                form={tournamentForm}
                onChange={setTournamentForm}
                onSubmit={handleTournamentSubmit}
              />
            )}

            {message && <p className="booking-message">{message}</p>}
          </div>
        </div>
      </section>

      <section className="booking-section booking-band">
        <div className="container">
          <SectionTitle title="Booking Dashboard" />
          <div className="booking-dashboard">
            <BookingList title="Upcoming Bookings" bookings={bookingGroups.upcoming} />
            <BookingList title="Current Bookings" bookings={bookingGroups.current} />
            <BookingList title="Past Bookings" bookings={bookingGroups.past} />
          </div>
        </div>
      </section>
    </div>
  );
}

function MatchBookingForm({ form, onChange, onSubmit }) {
  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <Field label="Name">
        <input
          name="name"
          required
          defaultValue={form.name}
          onChange={(event) => onChange({ ...form, name: event.target.value })}
        />
      </Field>
      <Field label="Team Name">
        <input
          name="teamName"
          required
          defaultValue={form.teamName}
          onChange={(event) => onChange({ ...form, teamName: event.target.value })}
        />
      </Field>
      <Field label="Contact Number">
        <input
          name="contact"
          required
          defaultValue={form.contact}
          onChange={(event) => onChange({ ...form, contact: event.target.value })}
        />
      </Field>
      <Field label="Match Type">
        <select
          name="matchType"
          defaultValue={form.matchType}
          onChange={(event) => onChange({ ...form, matchType: event.target.value })}
        >
          <option>T20 Practice Match</option>
          <option>Friendly Match</option>
          <option>One Day Match</option>
          <option>Corporate Event</option>
        </select>
      </Field>
      <Field label="Date">
        <input
          name="date"
          required
          type="date"
          defaultValue={form.date}
          onChange={(event) => onChange({ ...form, date: event.target.value })}
        />
      </Field>
      <Field label="Slot">
        <select
          name="slot"
          defaultValue={form.slot}
          onChange={(event) => onChange({ ...form, slot: event.target.value })}
        >
          {matchSlots.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label} - {slot.duration}
            </option>
          ))}
        </select>
      </Field>
      <button className="button button-primary" type="submit">
        Confirm Booking
      </button>
    </form>
  );
}

function TournamentBookingForm({ form, onChange, onSubmit }) {
  const days = Number(form.days);
  const endDate = addDays(form.startDate, days - 1);
  const price = days * 12000;

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <Field label="Organizer Name">
        <input
          name="organizerName"
          required
          defaultValue={form.organizerName}
          onChange={(event) => onChange({ ...form, organizerName: event.target.value })}
        />
      </Field>
      <Field label="Tournament Name">
        <input
          name="tournamentName"
          required
          defaultValue={form.tournamentName}
          onChange={(event) => onChange({ ...form, tournamentName: event.target.value })}
        />
      </Field>
      <Field label="Contact Number">
        <input
          name="contact"
          required
          defaultValue={form.contact}
          onChange={(event) => onChange({ ...form, contact: event.target.value })}
        />
      </Field>
      <Field label="Start Date">
        <input
          name="startDate"
          required
          type="date"
          defaultValue={form.startDate}
          onChange={(event) => onChange({ ...form, startDate: event.target.value })}
        />
      </Field>
      <Field label="Number of Days">
        <input
          min="1"
          name="days"
          required
          type="number"
          defaultValue={form.days}
          onChange={(event) => onChange({ ...form, days: event.target.value })}
        />
      </Field>
      <div className="booking-summary">
        <span>Total Days: {days}</span>
        <span>End Date: {formatDate(endDate)}</span>
        <span>Pricing: Rs. {price.toLocaleString("en-IN")}</span>
      </div>
      <button className="button button-primary" type="submit">
        Confirm Tournament Booking
      </button>
    </form>
  );
}

function BookingList({ title, bookings }) {
  return (
    <article className="booking-list">
      <h3>{title}</h3>
      {bookings.length === 0 ? (
        <p>No bookings.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <strong>{booking.teamName}</strong>
              <span>{booking.type}</span>
              <span>{bookingDateLabel(booking)}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
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

function hasMatchConflict(bookings, date, slot) {
  return bookings.some((booking) => {
    if (booking.type !== "Match" || booking.date !== date) {
      return false;
    }

    return booking.slot === slot || booking.slot === "full-day" || slot === "full-day";
  });
}

function isTournamentBlocked(bookings, date) {
  return bookings.some((booking) => {
    if (booking.type !== "Tournament") {
      return false;
    }

    return date >= booking.startDate && date <= booking.endDate;
  });
}

function addDays(date, days) {
  const next = new Date(`${date}T00:00:00`);
  next.setDate(next.getDate() + days);
  return next.toISOString().slice(0, 10);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

function bookingDateLabel(booking) {
  if (booking.type === "Tournament") {
    return `${formatDate(booking.startDate)} to ${formatDate(booking.endDate)}`;
  }

  return `${formatDate(booking.date)} - ${booking.slotLabel || booking.slot}`;
}

function statusClass(status) {
  if (status === "Available") {
    return "is-available";
  }

  if (status === "Occupied") {
    return "is-occupied";
  }

  return "is-blocked";
}
