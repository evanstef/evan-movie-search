import SlideShow from './SlideShow';
import Footer from './Footer';
import HeaderPop from './HeaderPop';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import {searchMovie, getDetailList,getMoviePopular} from '../api/Api';
import ModalDetail from './ModalDetail';



export default function PopularMovie() {
  const [card, setCard] = useState(false);
  const [nowPlaying,setNowPlaying] = useState([])
  const [detailMovie,setDetailMovie] = useState(null)
  const imgUrl = process.env.REACT_APP_IMAGEURL
  

  useEffect(() => {
      getMoviePopular().then((result) => {
        setNowPlaying(result)
      })
    }, [])



  async function handleSearchMovie (e) {
      if (e.key === 'Enter') {
         if (e.target.value.length > 3) {
        const film = await searchMovie(e.target.value)
        setNowPlaying(film.results)
        }
      }
    }

    function handleClose () {
      setCard(false)
    }

    function handleShow () {
      setCard(true)
    }

async function handleGetDetail (e) {
  const film = await getDetailList(e)
  setDetailMovie(film)
  handleShow()
}

// untuk mengurutkan movie dari rating yang terbesar
nowPlaying.sort((a,b) => b.vote_count - a.vote_count)
// console.log(newMovieList);


  return (
   <div className="App">
    <HeaderPop onValue={handleSearchMovie} />
    <div className="app-container">
    <div className='slide-show'>
        <SlideShow nowPlaying={nowPlaying}/>
    </div>
      <div className='pemisah'>
        <h2>Movie List</h2>
      </div>
      <div className="movie-container">
        <MovieList nowPlaying = {nowPlaying} imgUrl={imgUrl} setClick={handleGetDetail}/>
      </div>
    </div>
    <div className="App-footer">
      <Footer />
    </div>
      {card ? <ModalDetail
         card={card}
         show={card}
         onHide={handleClose}
         detail={detailMovie} 
         img={imgUrl} /> : ''}    
   </div>
  );
}
