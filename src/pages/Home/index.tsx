import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIKey } from '../../config/key';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
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

export default Home;
