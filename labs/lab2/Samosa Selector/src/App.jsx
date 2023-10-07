import './App.css';
import { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);

  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img src='https://samosaflorida.com/wp-content/uploads/2023/06/samosa-1024x771.png' className='samosa' onClick={updateCount} />
      </div>
    </div>
  )
}


export default App