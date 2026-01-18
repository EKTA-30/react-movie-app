import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { updateSearchCount, getTrendingMovies } from "./appwrite";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setError] = useState(null);

  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [debouncTerm, setDebounceTerm] = useState("");

  const [trendingMovies, setTrendeingMovies] = useState([]);

  // Every time there is a change in the search term, and no activity for the next 500 ms
  // Simply update debounced term after a full wait of 500 ms
  // If there is any change, start from scratch
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError("");
    try {
      const endPoint = query
        ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${BASE_URL}/discover/movie?sort_by=popularity.asc`;
      const response = await fetch(endPoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (!data.results) {
        setError(data.error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.log("Error fetching movies ", error);
      setError(`Error fetching movies, Please try again later`);
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const trednMovies = await getTrendingMovies();
      setTrendeingMovies(trednMovies);
    } catch (error) {
      console.log("Error fetching tredning movies", error);
    }
  };
  // Our api triggering now depends on the debounced term, instead of the searchTerm, triggering the BE
  // with every key press.

  useEffect(() => {
    fetchMovies(debouncTerm);
  }, [debouncTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="../../public/assets/hero-img.png" alt="Hero" />
          <h1>
            Find <span className="text-gradient">Movies</span> you'll enjoy
            without the hassel
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        {trendingMovies && trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt="" />
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="all-movies">
          <h2>All movies</h2>

          {isLoading ? (
            <Spinner className="spinner" />
          ) : errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
