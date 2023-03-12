import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import { getMoviesByQuery } from 'services/movieApi';
import SkeletonMoviesList from 'components/SkeletonMoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  const onSearch = query => {
    if (!query.trim()) {
      return;
    }
    setSearchParams({ query });
  };

  useEffect(() => {
    const fetchdata = async () => {
      if (!movieName) {
        return;
      }

      try {
        setMovies([]);
        setIsLoading(true);
        const movies = await getMoviesByQuery(movieName);
        setMovies(movies);

        if (movieName !== '' && movies.length === 0) {
          toast.error(
            `UpsOops!!! We did not find any movies for this request. Try changing the query.`
          );
        }
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [movieName]);

  return (
    <>
      <SearchForm onSearch={onSearch} />
      {error && 'Error, please reload the page'}
      {isLoading && <SkeletonMoviesList />}
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
