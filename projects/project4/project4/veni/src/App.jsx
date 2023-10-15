import { useState } from 'react'

import './App.css'

import BannedList from './components/BannedList'

// Define the API access key
const ACCESS_KEY = import.meta.env.API_ACCESS_KEY;

function App() {
  // Define base URLs and initialize states
  const BASE_URL = "https://api.thecatapi.com/v1/images/";
  const breedsURL = "https://api.thecatapi.com/v1/breeds";
  const [jsonURL, setJsonURL] = useState("");
  const [breedsList, setBreedsList] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentBreed, setCurrentBreed] = useState(null);
  const [currentLifeSpan, setCurrentLifeSpan] = useState(null);
  const [currentOrigin, setCurrentOrigin] = useState(null);
  const [currentID, setCurrentID] = useState(null);
  const [bannedBreeds, setBannedBreeds] = useState([]);
  const [bannedLifeSpans, setBannedLifeSpans] = useState([]);
  const [bannedOrigins, setBannedOrigins] = useState([]);
  const [bannedIDs, setBannedIDs] = useState([]);
  const [banList, setBanList] = useState([]);

  // Function to handle search
  const handleSearch = async() => {
    setBreedsList([]);
    // Fetch the list of breeds
    getBreeds(breedsURL).catch(console.error);

    if (bannedIDs.length !== 0) {
      for(let i = 0; i < breedsList.length; i++) {
        if (bannedIDs.includes(breedsList[i])) {
          breedsList.splice(i, 1);
          i--;
        }
      }
    }

    // Construct the search query
    let searchQuery = BASE_URL + `search?api_key=${ACCESS_KEY}&has_breeds=1&breed_ids=${breedsList}`;
    getJsonURL(searchQuery).catch(console.error);

    // Fetch and set JSON data
    const response = await fetch(jsonURL);
    const json = await response.json();

    setCurrentImage(json.url);
    setCurrentBreed(json.breeds[0].name);
    setCurrentLifeSpan(json.breeds[0].life_span);
    setCurrentOrigin(json.breeds[0].origin);
    setCurrentID(json.breeds[0].id);
  }

  // Function to check for duplicates in an array
  const checkDuplicates = (arr, current) => {
    let duplicate = false;

    if (arr.length === 0) {
      return duplicate;
    }

    for (const element of arr) {
      if (current === element) {
        duplicate = true;
      }
    }

    return duplicate;
  }

  // Function to handle banning a breed
  const handleBanBreed = () => {
    if (checkDuplicates(bannedBreeds, currentBreed) === true) {
      return;
    }
    if (currentBreed !== null) {
      setBannedBreeds((items) => [...items, currentBreed]);
      setBannedIDs((items) => [...items, currentID]);
      setBanList([...bannedBreeds, ...bannedLifeSpans, ...bannedOrigins, currentBreed]);
    }
  }

  // Function to handle banning a lifespan
  const handleBanLifeSpan = () => {
    if (checkDuplicates(bannedLifeSpans, currentLifeSpan) === true) {
      return;
    }
    if (currentLifeSpan !== null) {
      setBannedLifeSpans((items) => [...items, currentLifeSpan]);
      setBanList([...bannedBreeds, ...bannedLifeSpans, ...bannedOrigins, currentLifeSpan]);
    }
  }

  // Function to handle banning an origin
  const handleBanOrigin = () => {
    if (checkDuplicates(bannedOrigins, currentOrigin) === true) {
      return;
    }
    if (currentOrigin !== null) {
      setBannedOrigins((items) => [...items, currentOrigin]);
      setBanList([...bannedBreeds, ...bannedLifeSpans, ...bannedOrigins, currentOrigin]);
    }
  }

  // Function to get JSON URL
  const getJsonURL = async(query) => {
    const response = await fetch(query);
    const json = await response.json();
    setJsonURL(BASE_URL + json[0].id);
  }

  // Function to get the list of breeds
  const getBreeds = async(query) => {
    const response = await fetch(query);
    const json = await response.json();
    
    for (let i = 0; i < json.length; i++) {
      setBreedsList((breeds) => [...breeds, json[i].id]);
    }
  }

  return (
    <>
      <h1>Cat Breeds</h1>
      <div className='cardContainer'>
        <div className='card'>
          <img className='catImg' src={currentImage}></img>
          <br></br>
          <button onClick={handleBanBreed}>
            {currentBreed == null ? "Breed: (no data yet)" : "Breed: " + currentBreed}
          </button>
          <button onClick={handleBanLifeSpan}>
            {currentLifeSpan == null ? "Lifespan: (no data yet)" : "Lifespan: " + currentLifeSpan + " years"}
          </button>
          <button onClick={handleBanOrigin}>
            {currentOrigin == null ? "Origin: (no data yet)" : "Origin: " + currentOrigin}
          </button>
          <br></br>
          <button onClick={handleSearch}>🔄 Discover</button>
        </div>
      </div>
      <br></br>
      <h2>Ban List</h2>
      <BannedList banList={bannedBreeds}/>
    </>
  )
}

export default App
