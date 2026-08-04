import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <div className="card-meta">
        <span>⭐ {movie.rating}</span>
        <span>{movie.genre}</span>
      </div>
      <Link to={`/movie/${movie.id}`} className="primary-link">
        View Details
      </Link>
    </div>
  );
}
