import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";

interface Movie {
  id: string;
  title: string;
  rating: number;
  year: number;
  genre: string;
  image: string;
  featured?: boolean;
}

const trendingMovies: Movie[] = [
  { id: "1", title: "Cyber Strike", rating: 8.7, year: 2024, genre: "Action", image: movie1, featured: true },
  { id: "2", title: "Quantum Realm", rating: 9.1, year: 2024, genre: "Sci-Fi", image: movie2 },
  { id: "3", title: "Mystic Journey", rating: 8.4, year: 2024, genre: "Fantasy", image: movie3 },
  { id: "4", title: "Cyber Strike", rating: 8.7, year: 2024, genre: "Action", image: movie1 },
  { id: "5", title: "Quantum Realm", rating: 9.1, year: 2024, genre: "Sci-Fi", image: movie2 },
  { id: "6", title: "Mystic Journey", rating: 8.4, year: 2024, genre: "Fantasy", image: movie3 },
];

export const TrendingSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Trending Now</h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingMovies.map((movie, index) => (
            <div
              key={movie.id + index}
              className={`group cursor-pointer ${
                movie.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-card">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" variant="hero" className="rounded-full">
                    <Play className="w-6 h-6 fill-current" />
                  </Button>
                </div>
                
                {/* Movie Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{movie.rating}</span>
                    <span className="text-sm text-white/70">•</span>
                    <span className="text-sm text-white/70">{movie.year}</span>
                    <span className="text-sm text-white/70">•</span>
                    <span className="text-sm text-white/70">{movie.genre}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};