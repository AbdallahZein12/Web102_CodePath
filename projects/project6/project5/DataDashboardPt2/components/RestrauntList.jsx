// RestrauntList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RestrauntList = ({ name, link, city, state, index }) => {
  return (
    <tr key={index}>
      <td className="name">
        <Link to={`/restaurant/${index}`}>{name}</Link>
      </td>
      <td className="city">{city}</td>
      <td className="state">{state}</td>
    </tr>
  );
};

export default RestrauntList;
