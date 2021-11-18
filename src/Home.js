import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from './bank.png';


const Home = () => (
  <div className="container">
    <Card style={{ width: '18rem', padding: '20px' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Welcome to the Bad Bank</Card.Title>
    <Card.Text>
      World's Coolest Bank
    </Card.Text>
    <Button variant="primary" href="#CreateAccount">Let's Get Started</Button>
  </Card.Body>
</Card>
  </div>
);

export default Home;