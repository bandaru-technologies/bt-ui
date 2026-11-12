const EVENTS = [
  { id: 1, name: "Jazz in the Park", category: "Music", date: "2026-03-20", time: "7:00 PM", venue: "Riverside Park", zip: "10001" },
  { id: 2, name: "Spring Food Festival", category: "Food", date: "2026-03-22", time: "11:00 AM", venue: "Downtown Square", zip: "10001" },
  { id: 3, name: "Tech Meetup: React & Beyond", category: "Tech", date: "2026-03-25", time: "6:30 PM", venue: "Innovation Hub", zip: "10002" },
  { id: 4, name: "Outdoor Yoga Morning", category: "Wellness", date: "2026-03-28", time: "8:00 AM", venue: "Green Meadow Park", zip: "10001" },
  { id: 5, name: "Local Art Exhibition", category: "Art", date: "2026-04-01", time: "10:00 AM", venue: "City Gallery", zip: "10003" },
  { id: 6, name: "Stand-Up Comedy Night", category: "Entertainment", date: "2026-04-03", time: "8:00 PM", venue: "The Laugh Lounge", zip: "10002" },
  { id: 7, name: "Farmers Market Weekend", category: "Food", date: "2026-04-05", time: "9:00 AM", venue: "Central Plaza", zip: "10001" },
  { id: 8, name: "Startup Pitch Competition", category: "Tech", date: "2026-04-08", time: "5:00 PM", venue: "Co-Work Space", zip: "10003" },
  { id: 9, name: "Rock Concert: The Amplifiers", category: "Music", date: "2026-04-10", time: "9:00 PM", venue: "Stadium Arena", zip: "10002" },
  { id: 10, name: "5K Charity Run", category: "Sports", date: "2026-04-12", time: "7:30 AM", venue: "Lakeside Trail", zip: "10001" },
  { id: 11, name: "Photography Workshop", category: "Art", date: "2026-04-14", time: "2:00 PM", venue: "Creative Studio", zip: "10003" },
  { id: 12, name: "Craft Beer Tasting", category: "Food", date: "2026-04-16", time: "6:00 PM", venue: "Brew Barn", zip: "10002" },
  { id: 13, name: "AI & Machine Learning Talk", category: "Tech", date: "2026-04-18", time: "7:00 PM", venue: "University Hall", zip: "10001" },
  { id: 14, name: "Open Mic Night", category: "Music", date: "2026-04-20", time: "8:30 PM", venue: "Café Harmony", zip: "10003" },
  { id: 15, name: "Community Basketball Tournament", category: "Sports", date: "2026-04-22", time: "10:00 AM", venue: "Sports Complex", zip: "10002" },
];

const CATEGORY_ICONS = {
  Music: "🎵",
  Food: "🍽️",
  Tech: "💻",
  Wellness: "🧘",
  Art: "🎨",
  Entertainment: "🎭",
  Sports: "🏅",
};

export const searchEvents = (query, zip) => {
  const q = query.toLowerCase().trim();
  return EVENTS.filter((event) => {
    const matchesZip = !zip || event.zip === zip;
    const matchesQuery =
      !q ||
      event.name.toLowerCase().includes(q) ||
      event.category.toLowerCase().includes(q) ||
      event.venue.toLowerCase().includes(q);
    return matchesZip && matchesQuery;
  });
};

export const getCategoryIcon = (category) => CATEGORY_ICONS[category] || "📌";
