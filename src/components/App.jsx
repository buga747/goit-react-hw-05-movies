import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';
// import SharedLayout from './SharedLayout';

const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ 'pages/Home/Home')
);

const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
        <GlobalStyle />
        <ToastContainer />
      </Suspense>
    </>
  );
};
