
import { useState } from 'react';
import './App.css';

function App() {
  const [textColor, setTextColor] = useState(false);
  const handleChange = () => {
    setTextColor(!textColor)
  }
  return (
    <div className="App">
      <h1 style={{ color: textColor ? "red" : "black" }}>Hello World</h1>
      <button onClick={handleChange}>Change Color</button>
    </div>
  );
}

export default App;
