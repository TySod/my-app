
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [popular, setPopular] = useState();

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=dc1d26857287b10af9a1e79039526d44');
    const movies = await data.json();
    setPopular(movies.results)
    console.log(movies)
  }
  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
