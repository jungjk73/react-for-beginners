import { useEffect ,useState} from 'react';
import {useParams} from 'react-router-dom';
import Movie from '../components/Movie';

const URL_MOVIE = "https://yts.mx/api/v2/movie_details.json";

function Detail()
{
  const [isLoading,setIsLoading] = useState(true);
  const {id} = useParams();
  const [movie,setMovie] = useState(); 

  const getMovie = async () => {
    const json = await(await fetch(`${URL_MOVIE}?movie_id=${id}`)).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setIsLoading(false);
  };

  useEffect(()=>{
    getMovie();
    //console.log(`movie : ${movie}`);
  },[]);

  return (
    <div>
      {isLoading?<h1>loading...</h1>:
        <div>
        {
          <Movie key={movie.id} 
            movie_id={movie.id}
            medium_cover_image={movie.medium_cover_image} 
            title_english={movie.title_english} 
            genres={movie.genres} 
            summary={movie.description_full} 
          />
        }
        </div>
      }      
    </div>
  );
}

export default Detail;