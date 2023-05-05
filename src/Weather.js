import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

function Weather({ weatherData }) {
  if (!weatherData) return <></>;

  const cityName = weatherData ? weatherData.name : '';

  const weatherCondition = weatherData.weather
    ? weatherData.weather[0].main
    : '';
  const weatherDescription = weatherData.weather
    ? weatherData.weather[0].description
    : '';
  const temperature = weatherData.main ? weatherData.main.temp : '';
  const weatherImg = weatherData.weather
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : '';

  return (
    <Card>
      <Card.Body>
        <Card.Title>Meteo di {cityName}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {' '}
            <Image src={weatherImg} />
            {weatherCondition}
          </ListGroup.Item>
          <ListGroup.Item>Current weather: {weatherDescription}</ListGroup.Item>
          <ListGroup.Item>Temperature: {temperature}°C</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Weather;
