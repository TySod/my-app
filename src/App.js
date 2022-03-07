import { useState, useEffect } from 'react';
import './App.css';
import Filter from './Filter';
import Movie from './Movie';

function App() {
  const [popular, setPopular] = useState([]);
  const [filltered, setFilltered] = useState([]);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=dc1d26857287b10af9a1e79039526d44');
    const movies = await data.json();
    setPopular(movies.results);
    setFilltered(movies.results);
  }
  return (
    <div className="App">
      <Filter setFilltered={setFilltered} genre={genre} setGenre={setGenre} popular={popular} />
      <div className="popular">
        {popular.map(movie => {
          return <Movie key={movie.div} movie={movie} />
        })}
      </div>
    </div>
  );
}

export default App;
