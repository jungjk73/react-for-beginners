//import {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({movie_id,medium_cover_image,title_english,genres,summary}) 
{
  return (
    <div>
      <h2>{title_english}</h2>
      <Link to={`/movie/${movie_id}`}><img src={medium_cover_image} alt={title_english}/></Link>
      <ul>
        {genres.map((genre,idx)=><li key={idx}>{genre}</li>)}
      </ul>
      <p>{summary.length>235?`${summary.slice(0,235)}...`:summary}</p>
    </div>
  );
}

Movie.propTypes = {
  movie_id:PropTypes.number.isRequired,
  medium_cover_image:PropTypes.string.isRequired,
  title_english:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
  summary:PropTypes.string.isRequired
};
export default Movie;