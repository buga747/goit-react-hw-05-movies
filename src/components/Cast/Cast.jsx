import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from 'services/movieApi';

export default function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getMovieCasts(id).then(setCasts);
  }, [id]);

  return (
    <>
      {casts.length > 0 ? (
        <ul>
          {casts.map(cast => {
            return <li key={cast.id}>{cast.name}</li>;
          })}
        </ul>
      ) : (
        <p>Sorry, no information</p>
      )}
    </>
  );
}
