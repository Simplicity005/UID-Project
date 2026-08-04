import HeroSection from "../components/HeroSection";
import MovieCard from "../components/MovieCard";
import PageLayout from "../components/PageLayout";
import { featuredMovies } from "../data/mockData";

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />

      <div className="container">
        <h2>Featured Movies</h2>
        <div className="card-grid">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
