import React, { useState } from 'react';
import Select from './Select';
import Weather from './Weather';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const apiKey = ' ';
const apiKey = '5145e61cb6c1fadbaa10f1c92ee23575';
function PromiseAll(cities) {
  const promArray = [];
  cities.forEach((city) => {
    promArray.push(
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`
      )
    );
  });

  console.log(promArray);

  Promise.all(promArray).then((resultsArray) => {
    resultsArray.forEach((data) => {
      data.then((response) => {
        console.log(response.json());
      });
    });
  });
}

const cities = [
  { name: 'Bologna', value: 'bologna' },
  { name: 'Milano', value: 'milano' },
  { name: 'Roma', value: 'roma' },
];

function App() {
  const [weatherData, setWeatherData] = useState([]);

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
      <Row>
        <Col>
          <h3 className="title mt-3">Display Cities using Promise.all</h3>
          <Button
            variant="primary"
            className="mt-1 mb-3"
            onClick={() => PromiseAll(cities)}
          >
            Display all #1
          </Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary">Display all #2</Button>{' '}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
