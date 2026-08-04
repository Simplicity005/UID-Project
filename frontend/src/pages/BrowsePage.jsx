import PageLayout from "../components/PageLayout";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/mockData";

export default function BrowsePage() {
  return (
    <PageLayout>
      <div className="container">
        <h2>Browse Movies</h2>
        <div className="card-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
