import { useState } from 'react';

const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final; failure is not fatal.",
  "Keep going. Everything you need will come to you.",
  "Don't watch the clock; do what it does. Keep going."
];

const Home = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Our React App 🚀</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Click below to get your motivational quote of the day:
      </p>
      <blockquote style={{ fontSize: "1.1rem", fontStyle: "italic", margin: "1rem auto", color: "#555" }}>
        "{quote}"
      </blockquote>
      <button onClick={generateQuote} style={{ padding: "0.5rem 1rem", border: "none", borderRadius: "5px", background: "#007bff", color: "#fff" }}>
        New Quote
      </button>
    </div>
  );
};

export default Home;
