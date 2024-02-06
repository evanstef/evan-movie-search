import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Img from '../image/dskmqklmsmdq.jpg';

export default function ModalDetail(props) {
  function formatAngka(angka) {
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const budget = props.detail.budget
const revenue = props.detail.revenue

  return (
    <Modal
      {...props}
      size="lg"
      style={{transition : '0.3s'}}
      className={props.card ? 'bg-modal' : ''}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHide}
    >
      <div className="warna-kartu" style={{scale : props.card ? '1' : ''}}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='font-judul-modal'>
          {props.detail.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='content-preview'>
        <img src={props.detail.poster_path === null ? (Img) : (props.img + "/" + props.detail.poster_path)} alt="not found" />
        <div className="content-kecil">
            <p>Description : {props.detail.overview}</p>
            <p>Release : {props.detail.release_date}</p>
            <p>Rating : ⭐ {props.detail.vote_average.toFixed(2)} / 10</p>
            <p>Vote Count : {formatAngka(props.detail.vote_count)}</p>
            <p>Duration : {props.detail.runtime} minutes</p>
            <p>Budget :  {budget === 0 ? 'Unknown' : '$' + formatAngka(budget)}</p>
            <p>Revenue : {revenue === 0? 'Unknown' : '$' + formatAngka(revenue)}</p>
            <p>Status : {props.detail.status}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor : 'blue'}}>Close</Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
}
