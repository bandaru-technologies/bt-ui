import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchEvents, getCategoryIcon } from "../services/eventService";

function Home() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "User";

  const [zip, setZip] = useState("10001");
  const [query, setQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (query.length > 0 || hasSearched) {
      setEvents(searchEvents(query, zip));
      setHasSearched(true);
    }
  }, [query, zip, hasSearched]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="home-page">
      {/* ── Header bar ── */}
      <div className="home-header">
        <div>
          <h1 className="home-greeting">Hi, {username} 👋</h1>
          <p className="home-tagline">Find events happening near you</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">Sign Out</button>
      </div>

      {/* ── Search section ── */}
      <div className="search-section">
        <div className="search-row">
          <div className="search-input-wrap">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
            <input
              className="search-input"
              type="text"
              placeholder="Search events, categories, venues…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="zip-input-wrap">
            <input
              className="zip-input"
              type="text"
              placeholder="Zip code"
              value={zip}
              maxLength={5}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
            />
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      {hasSearched && (
        <div className="events-section">
          <p className="events-count">
            {events.length} event{events.length !== 1 ? "s" : ""} found
            {zip ? ` near ${zip}` : ""}
          </p>

          {events.length === 0 ? (
            <div className="events-empty">
              <span className="events-empty-icon">📭</span>
              <p>No events match your search. Try a different keyword or zip code.</p>
            </div>
          ) : (
            <div className="events-grid">
              {events.map((event) => (
                <div className="event-card" key={event.id}>
                  <div className="event-card-top">
                    <span className="event-category-icon">{getCategoryIcon(event.category)}</span>
                    <span className="event-category">{event.category}</span>
                  </div>
                  <h3 className="event-name">{event.name}</h3>
                  <div className="event-details">
                    <span className="event-detail">📅 {event.date}</span>
                    <span className="event-detail">⏰ {event.time}</span>
                  </div>
                  <p className="event-venue">📍 {event.venue}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
