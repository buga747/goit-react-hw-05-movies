import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from 'services/movieApi';

export default function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const reviews = await getMovieCasts(id);
        setCasts(reviews);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (casts.length === 0 && !isLoading) {
    return <p>We don't have any casts for this movie.</p>;
  }

  return (
    <>
      {error && 'Error, please reload the page'}

      <ul>
        {casts.map(cast => {
          return <li key={cast.id}>{cast.name}</li>;
        })}
      </ul>
    </>
  );
}
