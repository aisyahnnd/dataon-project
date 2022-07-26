import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { DatePicker } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <h1>DatePicker</h1>
        <DatePicker />
      </div>
    </div>
  );
}

export default App;
