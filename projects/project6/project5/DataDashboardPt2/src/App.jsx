import { useState, useEffect } from "react";
import RestrauntList from "../components/RestrauntList";
import Filter from "../components/Filter";
import Statistics from "../components/Statistics";
import "./App.css";
import RestaurantDetail from "../components/RestrauntDetail";
import { Switch, Route } from 'react-router-dom';


function App() {
  // State to store restraunt data and filter criteria
  const [restraunts, setRestraunts] = useState(null);
  const [location, setLocation] = useState({ state: "", city: ""});

  // Fetch restraunt data from the API when the filter criteria change
  useEffect(() => {
    requestRestraunt().catch(console.error);
  }, [location]);

  // Function to fetch restraunt data from the API
  const requestRestraunt = async () => {
    const response = await fetch(
      `https://api.openbrewerydb.org/v1/breweries?country=united_states&by_state=${location.state}&by_city=${location.city}`
    );
    const json = await response.json();
    if (json == null) {
      alert("Fetch failed");
    }
    setRestraunts(json);
  };

  // Handle changes in the filter criteria
  const handleLocation = (e) => {
    setLocation({ ...location, [e.target.id]: e.target.value });
    console.log(location);
  };

  return (
    <div className="app-container">
      {/* Title */}
      <h1>List of Restraunts in the U.S</h1>
      
      {/* Filter and Statistics components */}
      <div className="filters-and-stats">
        <Filter location={location} onChange={handleLocation} />
        <Statistics location={location} />
      </div>
      {/* Restraunt list table */}
      <div className="restraunt-list">
        <Switch>
          <Route path="/restraunt/:id" Component={RestrauntDetail} />
        
        <table>
          <thead>
            <tr>
              <th className="header name">Name</th>
              <th className="header city">City</th>
              <th className="header state">State</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over the restraunt data and render RestrauntList components */}
            {restraunts &&
              restraunts.map((restraunt, index) => (
                <RestrauntList
                  key={restraunt.id}
                  name={replaceBreweryNames(restraunt.name)}
                  link={restraunt.website_url}
                  city={restraunt.city}
                  state={restraunt.state}
                  index={index}
                />
              ))}
          </tbody>
        </table>
        </Switch>
      </div>

    </div>
  );
}
const replaceBreweryNames = (name) => {
  // Use regular expressions to replace "brewery" or "brew" with "restaurant"
  return name.replace(/brewing/gi, "restaurant").replace(/brewery/gi, "restaurant").replace(/brew/gi, "restaurant");
};
export default App;
