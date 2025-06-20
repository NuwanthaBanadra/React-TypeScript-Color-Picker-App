import { useState } from 'react'
import './App.css'

const colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow'];

function App() {

  const [selectedColor, setSelectedColor] = useState<string>('red');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);

  };

  return (
    <div className="container">
      <h1>React TypeScript Color Picker</h1>

      <select onChange={handleChange} value={selectedColor}>
        {colors.map((color) => (
          <option value={color} key={color}>
            {color}
          </option>
        ))}

      </select>
      <div className='color-box' style={{ backgroundColor: selectedColor }}>
        selected Color: <strong>{selectedColor}</strong>

      </div>

    </div>
  );
}

export default App
