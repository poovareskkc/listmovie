import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [movies, setMovies] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6'
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  const handleSearch = async (event) => {
    const search = event.target.value;
    setSearchQuery(search);

    if (search.length > 2) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=229a6a0f891df5bf1176a4668af885c6&language=en-US&query=${search}&page=1&include_adult=false`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <h1>Movie List</h1>
      <input type="text" value={searchQuery} onChange={handleSearch} />
      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((movie) => <li key={movie.id}>{movie.title}</li>)
        ) : (
          movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
        )}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
