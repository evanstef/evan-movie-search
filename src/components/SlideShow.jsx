import { Carousel } from "react-bootstrap";

export default function SlideShow ({nowPlaying}) {

  const nowPlayingFive = nowPlaying.slice(0,5)
      return (
      <Carousel className="text-start">
        {nowPlayingFive.map((movie,i) => {
          return (
          <Carousel.Item key={i} interval={2000}>
            <img className='d-block w-100 h-10' src={`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces/${movie.backdrop_path}`} alt='First-slide'></img>
            <Carousel.Caption className="text-start  ">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
          )
        })}
      </Carousel>
    )
}