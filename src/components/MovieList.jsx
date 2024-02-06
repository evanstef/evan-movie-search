import Img from '../image/dskmqklmsmdq.jpg'

export default function MovieList ({nowPlaying, imgUrl, setClick}) {

    return nowPlaying.map((movie,i) => {
        return (
        <>
        <div className="wrap" key={i}>
            <img src={movie.poster_path === null ? (Img) : (imgUrl + "/" + movie.poster_path)} alt='not found'/>
            <div className="content" key={i}>
                <h1>{movie.title}</h1>
                <p className='desc'>{movie.overview}</p>
                <p>⭐{movie.vote_average.toFixed(1)}</p>
                <p>{movie.release_date.slice(0,4)}</p>
                <button className="see-full" onClick={() => setClick(movie.id)}>Show Details</button>
            </div>
        </div>
        </>
        )
      })
    } 

