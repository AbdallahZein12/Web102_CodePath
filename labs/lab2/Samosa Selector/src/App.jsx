import './App.css';
import { useState } from 'react';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count:</h2>
        <img className='samosa' src='https://samosaflorida.com/wp-content/uploads/2023/06/samosa-1024x771.png'/>
      </div>
    </div>
  )
}

const [ccount, setCount] = useState(0);

const [multiplier, setMultiplier] = useState(1);

export default App