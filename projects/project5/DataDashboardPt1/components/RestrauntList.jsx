/* eslint-disable react/prop-types */

const BreweryList = ({ name, link, city, state, index }) => {
  return (
    <tr key={index}>
      <td className="name"><a href={link}>{name}</a></td>
      <td className="city">{city}</td>
      <td className="state">{state}</td>
    </tr>
  );
};

export default BreweryList;
