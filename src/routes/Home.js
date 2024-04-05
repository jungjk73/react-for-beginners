import {useState,useEffect} from 'react';
import Movie from '../components/Movie';

function Home()
{
  const [isLoading,setIsLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const URL_MOVIES = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year';
  const getMovies = async () => {
    const json = await(await fetch(URL_MOVIES)).json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };
  useEffect(()=>{
    /***************************/
    /* 1                       */
    // fetch(URL_MOVIES)
    //   .then((resp)=>resp.json())
    //   .then((json)=>{
    //     console.log(json);
    //     setMovies(json.data.movies);
    //     setIsLoading(false);        
    //   });
    
    /***************************/
    /* 2                       */
    // const getMovies = async () => {
    //   const resp = await fetch(URL_MOVIES);
    //   const json = await resp.json();
    //   setMovies(json.data.movies);
    //   setIsLoading(false);
    // };
    // getMovies();

    /***************************/
    /* 3                       */
    
    getMovies();  
  },[]);  

  return (
    <div>
      {isLoading?<h1>loading...</h1>:
        <div>
        {
          movies.map((movie,idx)=>(
            <Movie key={idx} 
              movie_id={movie.id}
              medium_cover_image={movie.medium_cover_image} 
              title_english={movie.title_english} 
              genres={movie.genres} 
              summary={movie.summary} 
            />
          ))
        }
        </div>
      }      
    </div>
  );
}

export default Home;