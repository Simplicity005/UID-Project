// cinesphere/lib/tmdb.js

const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function fetchTrendingMovies() {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
      {
        next: { revalidate: 3600 }, // Caches data on the server for 1 hour
      },
    );
    if (!res.ok) throw new Error("Failed to fetch trending movies");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("TMDB Fetch Error:", error);
    return [];
  }
}
