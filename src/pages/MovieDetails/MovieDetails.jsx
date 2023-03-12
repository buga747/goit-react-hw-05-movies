import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/movieApi';
import imageComingSoon from '../../images/imageComingSoon.jpg';
import { IMAGE_URL } from 'constants/constants';
import SkeletonMoviesList from 'components/SkeletonMoviesList';
import {
  MovieCard,
  InfoItem,
  InfoLink,
  Title,
  Wrapper,
  ImageWrapper,
  ExtraInfoSection,
  ListItem,
  ExtraInfoTitle,
  MovieInfo,
  BackButton,
} from './MovieDetails.styled';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movie = await getMovieDetails(id);
        setMovieDetails(movie);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleGoBack = () => {
    navigate(state?.from || '/');
  };

  if (movieDetails) {
    const {
      genres,
      title,
      release_date: releaseDateRaw,
      overview,
      vote_average: voteAverage,
      poster_path: posterPath,
    } = movieDetails;

    const imageSRC = posterPath ? `${IMAGE_URL}${posterPath}` : imageComingSoon;
    const userScore = Math.round(voteAverage * 10);
    const movieGenres = genres.map(g => g.name).join(' ');
    const releaseDate = releaseDateRaw?.slice(0, 4);
    return (
      <>
        <BackButton onClick={handleGoBack}>Go Back</BackButton>
        <Wrapper>
          <MovieCard>
            <ImageWrapper>
              <img src={imageSRC} alt={title} />
            </ImageWrapper>
            <MovieInfo>
              <Title>
                {title} {releaseDate && `(${releaseDate})`}
              </Title>
              <ul>
                <InfoItem>
                  {userScore > 0 && <p>User Score: {userScore}%</p>}
                </InfoItem>
                <InfoItem>
                  <b>Overview</b>
                  <p>{overview}</p>
                </InfoItem>
                <InfoItem>
                  <b>Genres</b>
                  <p>{movieGenres || ' - '}</p>
                </InfoItem>
              </ul>
            </MovieInfo>
          </MovieCard>
        </Wrapper>
        <ExtraInfoSection>
          <ExtraInfoTitle> Additional information</ExtraInfoTitle>
          <div>
            <ul>
              <ListItem>
                <InfoLink to="cast" state={state}>
                  Cast
                </InfoLink>
              </ListItem>

              <ListItem>
                <InfoLink to="reviews" state={state}>
                  Reviews
                </InfoLink>
              </ListItem>
            </ul>
          </div>
        </ExtraInfoSection>

        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
  }

  return (
    <>
      {error && <div>Error, please reload the page</div>}
      {isLoading && <SkeletonMoviesList />}
    </>
  );
};

export default MovieDetails;
