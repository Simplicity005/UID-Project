import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero">
      <h1>Your Ultimate Movie Discovery Hub</h1>
      <p>
        Browse trending titles, discover classics, and build your perfect
        watchlist.
      </p>
      <Link to="/browse" className="primary-button">
        Start Exploring
      </Link>
    </section>
  );
}
