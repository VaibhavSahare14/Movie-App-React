import React from 'react'

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container' onClick={() => console.log(movie)}>
                    <img className='poster' src={movie.Poster} alt={movie.Title} />
                    <div onClick={() =>
                        props.handleFavoritesClick(movie)}
                        className="favorite-movieList">
                        <FavoriteComponent />
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList