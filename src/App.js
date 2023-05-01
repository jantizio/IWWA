import React, { useState } from 'react';
import Select from './Select';
import Weather from './Weather';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weatherData, setWeatherData] = useState('');

  console.log('dati ', weatherData);

  return (
    <Container fluid className="animated-gradient">
      <h1 className="title text-center">IWWA</h1>
      <h2 className="title text-center">Italian Worst Weather App</h2>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          {' '}
          <Form>
            {' '}
            <Select setWeatherData={setWeatherData} />
          </Form>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={4}></Col>
        <Col xs={4}>
          <Weather weatherData={weatherData} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
