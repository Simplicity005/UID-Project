import { useParams, Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { movies } from "../data/mockData";

export default function MovieDetailPage() {
  const { id } = useParams();
  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return (
      <PageLayout>
        <div className="container">
          <h2>Movie not found</h2>
          <Link to="/browse">Back to browse</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container">
        <h2>{movie.title}</h2>
        <img
          src={movie.image}
          alt={movie.title}
          style={{ width: "100%", maxWidth: 420, borderRadius: 12 }}
        />
        <p>
          <strong>Genre:</strong> {movie.genre}
        </p>
        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>
        <p>{movie.description}</p>
        <Link to="/browse">Back to Browse</Link>
      </div>
    </PageLayout>
  );
}
