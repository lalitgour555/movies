import { Button,Modal, Row ,Col} from 'react-bootstrap';
import React , { Example, useState} from 'react'
import'./Moviemodule.css'

 function Moviemodule({movie,youtube}) {
 console.log(youtube)
    const [show, setShow] = useState(true);
    return (
        
      <>  
        <Modal 
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <div className='modalbody'>
          <Modal.Body>
              <Row>
              <Col sm={5}> 
              <img className='modalimg' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/></Col>
              <Col sm={7}>
                  <h1 style={{color:"white"}}>{movie.title}</h1>
                  <div className='pera' style={{color:"white"}}>
                      
                      <p> {movie.overview} </p>
                  </div>
                  
                    <iframe width="660" height="315" src={`https://www.youtube.com/embed/${youtube}`} title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className='footer'>
                  
  <Button variant="primary" size="sm">{movie.media_type} </Button>{' '}
  <Button variant="secondary" size="sm">vote count:{movie.vote_count}</Button>{' '}
  <Button variant="success" size="sm">Vote Avg:{movie.vote_average}</Button>{' '}
  <Button variant="warning" size="sm">{movie.adult?"Adult":"U/A"}</Button>{' '}
  <Button variant="danger" size="sm">Popularity:{movie.popularity}</Button>
   <Button variant="info" size="sm">{movie.original_language}</Button>{' '}
 <Button variant="warning" size="sm">{movie.release_date?movie.release_date:"N/A"}</Button>{' '}
<div className="d-grid gap-2 ">
  <Button variant="danger"  size="lg">
    {movie.title}
  </Button>
</div>
</div>
              </Col>
              </Row>
            
          </Modal.Body>
          </div>
        </Modal>
        
      </>
    );
  }

  export default Moviemodule;