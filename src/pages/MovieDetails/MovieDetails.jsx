import { Outlet } from 'react-router-dom';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/movieApi';
import imageComingSoon from '../../images/imageComingSoon.jpg';
import { IMAGE_URL } from 'constants/constants';
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
import SkeletonMoviesList from 'components/SkeletonMoviesList';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const movie = await getMovieDetails(id);

        setIsLoading(true);
        setMovieDetails(movie);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [id]);

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  if (!movieDetails) {
    return;
  }

  const { genres, title, release_date, overview, vote_average, poster_path } =
    movieDetails;
  const imageSRC = poster_path ? IMAGE_URL + poster_path : imageComingSoon;
  const userScore = Math.round((Number(vote_average) * 100) / 10);
  const movieGenres = genres.map(genre => genre.name).join(' ');
  const releaseDate = release_date.slice(0, 4);

  return (
    <>
      <BackButton onClick={handleGoBack}>Go Back</BackButton>
      {error && 'Error, please reload the page'}
      {isLoading && <SkeletonMoviesList />}
      <Wrapper>
        <MovieCard>
          <ImageWrapper>
            <img src={`${imageSRC}`} alt={title} />
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
              <InfoLink to="cast" state={location.state}>
                Cast
              </InfoLink>
            </ListItem>

            <ListItem>
              <InfoLink to="reviews" state={location.state}>
                Reviews
              </InfoLink>
            </ListItem>
          </ul>
        </div>
      </ExtraInfoSection>

      <Outlet />
    </>
  );
};

export default MovieDetails;
