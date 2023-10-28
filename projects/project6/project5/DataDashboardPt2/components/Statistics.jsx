/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Statistics = ({ location }) => {
  const [restNum, setRestNum] = useState(null);
  const [stateRestNum, setStateRestNum] = useState(null);
  const [cityRestNum, setCityRestNum] = useState(null);

  useEffect(() => {
    requestRestNum().catch(console.error);
    if (location.state == "") {
      setStateRestNum(null);
    } else {
      requestStateNum().catch(console.error);
    }
    if (location.city == "") {
      setCityRestNum(null);
    } else {
      requestCityNum().catch(console.error);
    }
  }, [location]);

  const requestRestNum = async () => {
    const request = await fetch(
      `https://api.openbrewerydb.org/v1/breweries/meta?by_country=united_states`
    );
    const json = await request.json();
    if (json == null) {
      alert("request failed");
    }
    setRestNum(json);
  };

  const requestStateNum = async () => {
    const request = await fetch(
      `https://api.openbrewerydb.org/v1/breweries/meta?by_country=united_states&by_state=${
        location.state ? location.state : null
      }`
    );
    const json = await request.json();
    if (json == null) {
      alert("request failed");
    }
    setStateRestNum(json);
  };

  const requestCityNum = async () => {
    const request = await fetch(
      `https://api.openbrewerydb.org/v1/breweries/meta?by_country=united_states&by_state=${
        location ? location.state : null
      }&by_city=${location ? location.city : null}`
    );
    const json = await request.json();
    if (json == null) {
      alert("request failed");
    }
    setCityRestNum(json);
  };

  return (
    <div>
      <h2>Data</h2>
      <h3 className="label">
        Restraunts in the U.S: <span>{restNum && restNum.total}</span>
      </h3>
      <h3 className="label">
        Restraunts in your state:{" "}
        <span>{stateRestNum ? stateRestNum.total : "No state selected"}</span>
      </h3>
      <h3 className="label">
        Restraunts in your city:{" "}
        <span>{cityRestNum ? cityRestNum.total : "No city selected"}</span>
      </h3>
    </div>
  );
};

export default Statistics;
