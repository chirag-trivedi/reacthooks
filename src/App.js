
import './App.css';
import { useState } from 'react';

function App() {

  const initialCount = 0;
  const [count,setCount] = useState(initialCount);

  const increaseByTwo = () => {
    setCount(prevCount => prevCount + 2);
  }

  return (
    <div className="App">
      <h1>useState react hook with previous State</h1>
      <h2>Count: {count}</h2>
      <button onClick = {() => setCount(initialCount)}>Reset</button>
      <button onClick = {() => setCount(temp => temp + 1)}>Increase</button>
      <button onClick = {() => setCount(myvalue => myvalue - 1)}>Decrease</button>
      <button onClick = {increaseByTwo}>Reset</button>
    </div>
  );
}

export default App;
