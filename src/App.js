import React from 'react';
import logo from './logo.jpg'
import './App.css';
import Categories from './components/Categories';

import Trending from './components/Trending';
import MovieCard from './components/MovieCard';
import Navigation from './components/Navigation';
import Genres from './components/Genres';
import LoginBtn from './components/LoginBtn';
import SearchBox from './components/SearchBox';
import DarkMode from './components/DarkMode';


function App() {

  	const [movies, setMovies] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=Title&apikey=263d22d8`;

    const response = await fetch(url);
		const responseJson = await response.json();
   
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	React.useEffect((searchValue) => {
		getMovieRequest();
	}, [searchValue]);

	

  return (
    <div className="app_page1">
    <div className="row">
      <div className="col-sm-4" id="left">
        <div className='page-logo'>
          <img src={logo} alt="Logo" />
    <hr />
    </div>
    <Categories />
		<hr />
		<Genres />
      </div>
        
    <div className="col-sm-4" id="right">
      <nav className="navbar navbar-expand-md navbar-dark bg-primary p-4 text-white">
      
        <div className="container justified">  
            <DarkMode />
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />  
            <LoginBtn />
        </div>
      </nav>
    <Trending />
    <MovieCard
        movies={movies}
      />
    <Navigation />
        </div>
    </div>
  </div>

  );
}

export default App;
