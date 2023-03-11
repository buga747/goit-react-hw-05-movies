import { useEffect, useState } from 'react';
import { getPopularMovies } from 'services/movieApi';
import MoviesList from 'components/MoviesList';
import SkeletonMoviesList from 'components/SkeletonMoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);
        const movies = await getPopularMovies();
        setMovies(movies);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && 'Error, please reload the page'}
      {isLoading && <SkeletonMoviesList />}
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
