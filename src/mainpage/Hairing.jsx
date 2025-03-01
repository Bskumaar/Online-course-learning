import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Hairing({img,name,sub,com,lpa}) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top"src= {img} />
      <Card.Body>
        <Card.Title> <h3 className='text-center'> {name}</h3></Card.Title>
        <Card.Text>
       <p>{sub}</p>
       <p>{com}</p>
       <p>{lpa}</p>
        </Card.Text>
       
        {/* <Button  variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
   
  )
}

export default Hairing