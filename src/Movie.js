const Movie = ({movie}) => {
    return ( 
        <div className="movie">
            <h2>{ movie.title}</h2>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="" />
        </div>
    );
}
 
export default Movie;