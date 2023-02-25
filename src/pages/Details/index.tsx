import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIKey } from '../../config/key';
import { MovieDetail } from '../../types/MovieDetail';

const Details: React.FC = () => {
  const { id: idString } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [error, setError] = useState('');
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const id = parseInt(idString!);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        const { title, poster_path, overview, release_date } = data;
        const movie = {
          id,
          title,
          image: `${image_path}${poster_path}`,
          sinopse: overview,
          releaseDate: release_date
        };
        setMovie(movie);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [idString]);

  return (
    <div>
      {error && <p>{error}</p>}
      {movie !== null ? (
        <div className="movie">
          <img src={movie.image} alt={movie.sinopse} />
          <div className="details">
            <h1>{movie.title}</h1>
            <span>Overview: {movie.sinopse}</span>
            <span className="release-date">
              Release Date: {movie.releaseDate}
            </span>
            <Link to="/">
              <button>Go Back</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;
