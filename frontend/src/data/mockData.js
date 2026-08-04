export const movies = [
  {
    id: 1,
    title: "Avengers Endgame",
    genre: "Action",
    rating: 9.8,
    description: "The final battle for the Avengers begins.",
    image:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Frozen",
    genre: "Disney",
    rating: 8.7,
    description: "A magical story of love, ice, and self-discovery.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Friends",
    genre: "Sitcom",
    rating: 9.2,
    description: "A classic sitcom about friendship and life in New York.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "The Conjuring",
    genre: "Horror",
    rating: 8.9,
    description: "A chilling tale of paranormal investigation.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
  },
];

export const featuredMovies = movies.slice(0, 3);
