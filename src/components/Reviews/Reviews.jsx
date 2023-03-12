import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieApi';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const reviews = await getMovieReviews(id);
        setReviews(reviews);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (reviews.length === 0 && !isLoading) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <>
      {error && 'Error, please reload the page'}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
