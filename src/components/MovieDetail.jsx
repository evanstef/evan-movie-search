  import Img1 from '../image/3.jpg'
  
  export default function MovieDetail () {
    return (
      <div className="card mb-3 movie-card top-50 start-50 translate-middle" style={{maxWidth: '800px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Img1} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body content">
            <h3>Title</h3>
            <p>Description :</p>
            <p>Release : </p>
            <p>Rating : </p>
            <p>Vote Count : </p>
          </div>
        </div>
      </div>
    </div>
    )
  }