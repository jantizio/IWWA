import React from 'react';
import Form from 'react-bootstrap/Form';

function Select({ fetchData, cities }) {
  return (
    <Form.Select
      aria-label="select city"
      onChange={(e) => {
        fetchData(e.target.value);
      }}
    >
      {cities.map((city) => (
        <option value={city.value} key={city.value}>
          {city.name}
        </option>
      ))}
    </Form.Select>
  );
}

export default Select;
