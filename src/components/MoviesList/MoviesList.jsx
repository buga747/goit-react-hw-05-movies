import { useLocation } from 'react-router-dom';
import { List, ListItem } from './MoviesList.styled';
import propTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {
        <List>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <ListItem state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </ListItem>
            </li>
          ))}
        </List>
      }
    </>
  );
};

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
