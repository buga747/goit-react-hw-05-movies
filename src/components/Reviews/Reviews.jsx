import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieApi';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(id).then(setReviews);
  }, [id]);

  return (
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
  );
}
