import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { APIKey } from '../../config/key';
import { Movie } from '../../types/Movie';

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className=''>
      <h1>Movies</h1>
      <ul>
        {movies.map(movieCard => (
          <li key={movieCard.id}>
            <Link to={`/details/${movieCard.id}`}>
              <img src={`${image_path}${movieCard.poster_path}`} alt={movieCard.title} />
              <span>{movieCard.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PopularMovies };
