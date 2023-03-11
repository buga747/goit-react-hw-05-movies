import axios from 'axios';

const API_KEY = '7b0cd892b7eefe922064cd11488cd5a0';

const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export async function getPopularMovies() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function getMoviesByQuery(movie) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1`
  );
  return response.data.results;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function getMovieCasts(id) {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
}

export async function getMovieReviews(id) {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
}
