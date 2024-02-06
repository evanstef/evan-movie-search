import SlideShow from './SlideShow';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import {getMovieList,searchMovie, getDetailList} from '../api/Api';
import ModalDetail from './ModalDetail';




function MainHome() {
  const [card, setCard] = useState(false);
  const [nowPlaying,setNowPlaying] = useState([])
  const [detailMovie,setDetailMovie] = useState(null)
  const imgUrl = process.env.REACT_APP_IMAGEURL
  

  useEffect(() => {
      getMovieList().then((result) => {
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

nowPlaying.sort((a,b) => b.vote_count - a.vote_count)

  return (
   <div className="App">
    <Header onValue={handleSearchMovie} />
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

export default MainHome;