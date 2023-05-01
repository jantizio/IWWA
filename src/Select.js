import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

function Select(props) {
  const [selectedCity, setSelectedCity] = useState('Milano');
  const { setWeatherData } = props;

  const apiKey = '5145e61cb6c1fadbaa10f1c92ee23575';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${apiKey}`;

  useEffect(() => {
    let ignore = false;
    setWeatherData('');
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          setWeatherData(data);
        }
      });
    return () => {
      ignore = true;
    };
  }, [setWeatherData, url]);

  return (
    <Form.Select
      aria-label="select city"
      value={selectedCity}
      onChange={(e) => {
        setSelectedCity(e.target.value);
      }}
    >
      <option value="Milano">Milano</option>
      <option value="Roma">Roma</option>
      <option value="Bologna">Bologna</option>
      <option value="Palermo">Palermo</option>
      <option value="Napoli">Napoli</option>
      <option value="Torino">Torino</option>
      <option value="Firenze">Firenze</option>
    </Form.Select>
  );
}

export default Select;
