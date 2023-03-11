import { useLocation } from 'react-router-dom';
import { List, ListItem } from './MoviesList.styled';

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

export default MoviesList;
