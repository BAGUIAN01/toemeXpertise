import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
 
function AddTechItems({title, data }) {
  const className="d-flex align-items-center";
 
  return (
    <div className='techItem'>
      <Card style={{ width: '100%' }}>
        <Card.Header style={{fontWeight:'bolder', backgroundColor:'#354C6A', color:'white'}}>{title}</Card.Header>
        <ListGroup variant="flush">
            {data.map((item, index) => (
                <ListGroup.Item key={index}>
                    <div className={className}>
                        {item.icon}
                        <span className="ml-2" style={{fontWeight:'bold', fontFamily:'timenew roman'}}>{item.name}</span>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default AddTechItems;
