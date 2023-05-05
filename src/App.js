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

const cities = [
  { name: 'Milano', value: 'milano' },
  { name: 'Roma', value: 'roma' },
  { name: 'Bologna', value: 'bologna' },
  { name: 'Palermo', value: 'palermo' },
  { name: 'Napoli', value: 'napoli' },
  { name: 'Torino', value: 'torino' },
  { name: 'Firenze', value: 'firenze' },
];

function App() {
  const [weatherData, setWeatherData] = useState('');
  const [promWeatherDataArray, setPromWeatherDataArray] = useState([]);
  const [forWeatherDataArray, setForWeatherDataArray] = useState([]);

  const url = (city) => {
    // const apiKey = ' ';
    const apiKey = '5145e61cb6c1fadbaa10f1c92ee23575';
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  };

  function fetchCity(city) {
    fetch(url(city))
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  }

  function PromiseAll(cities) {
    const promArray = [];
    cities.forEach((city) => {
      promArray.push(
        fetch(url(city.value)).then((response) => response.json())
      );
    });

    Promise.all(promArray).then((resultsArray) => {
      setPromWeatherDataArray(resultsArray);
    });
  }

  function fetchForEach(cities) {
    cities.forEach(async (city) => {
      const data = await fetch(url(city.value)).then((response) =>
        response.json()
      );
      setForWeatherDataArray((current) => [...current, data]);
    });
  }

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
            <Select fetchData={fetchCity} cities={cities} />
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
        <Col xs={3}></Col>
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
      </Row>{' '}
      <Row>
        {promWeatherDataArray.map((cityData, index) => (
          <Col key={index}>
            <Weather weatherData={cityData} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={3}></Col>
        <Col>
          <h3 className="title mt-3">Display Cities one by one</h3>
          <Button
            variant="primary"
            className="mt-1 mb-3"
            onClick={() => fetchForEach(cities)}
          >
            Display all #2
          </Button>{' '}
        </Col>
      </Row>
      <Row>
        {forWeatherDataArray.map((cityData, index) => (
          <Col key={index}>
            <Weather weatherData={cityData} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
