import React from 'react'
import { Button,Card , Col, Row} from 'react-bootstrap';
import './Moviecard.css'
function Moviecard() {
  return (<div className='maintain'>
    
    <Row>
      
    <Col sm={3}>
<Card className='Card col-sm-3' style={{ width: '22rem' }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + '/puspa.jfif'}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>  </Col>
<Col sm={3}>
<Card className='Card col-sm-3' style={{ width: '22rem' }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + '/puspa.jfif'}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>  </Col> 
<Col sm={3}>
<Card className='Card col-sm-3' style={{ width: '22rem' }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + '/puspa.jfif'}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>  </Col>
<Col sm={3}>
<Card className='Card col-sm-3' style={{ width: '22rem' }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + '/puspa.jfif'}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>  </Col>
    </Row>
    <Row>
      <Col sm={3}>
  <Card className='Card col-sm-3' style={{ width: '22rem' }}>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/puspa.jfif'}/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
  </Card>  </Col>
  <Col sm={3}>
  <Card className='Card col-sm-3' style={{ width: '22rem' }}>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/puspa.jfif'}/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
  </Card>  </Col> 
  <Col sm={3}>
  <Card className='Card col-sm-3' style={{ width: '22rem' }}>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/puspa.jfif'}/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
  </Card>  </Col>
  <Col sm={3}>
  <Card className='Card col-sm-3' style={{ width: '22rem' }}>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/puspa.jfif'}/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
  </Card>  </Col>
      </Row>
</div>
  
  )
}
export default Moviecard;
