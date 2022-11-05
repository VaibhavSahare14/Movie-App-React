import React, { useState, useEffect } from "react";
import './App.css';
import AddFavorite from "./Components/AddFavorite";
import MovieList from "./Components/MovieList";
import Heading from "./Components/Headings";
import RemoveFavorites from "./Components/RemoveFavorites";
import SearchBox from "./Components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=afb58d28`;
    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('movie-app-favorites')
    );
    if (movieFavorites) {
      setFavorites(movieFavorites)
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('movie-app-favorites', JSON.stringify(items));
  }

  const addFavoriteMovie = (movie) => {
    const newFavoritesList = [...favorites, movie];
    console.log(favorites);
    setFavorites(newFavoritesList);
    saveToLocalStorage(newFavoritesList);
  }

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className="App">
      <div className="top-container">
        <Heading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="movieList">
        <MovieList movies={movies}
          handleFavoritesClick={addFavoriteMovie}
          favoriteComponent={AddFavorite}
        />
      </div>

      <div className="favorite-head">
        <Heading heading="Favorites" />
      </div>

      <div className="movieList">
        <MovieList
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
          favoriteComponent={RemoveFavorites}
        />
      </div>
    </div>
  );
}

export default App;
