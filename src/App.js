import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');

  const changeColor = () => {
    if (buttonColor === 'red') {
      setButtonColor('blue');
    } else {
      setButtonColor('red')
    }
  }
  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={changeColor}>
        {buttonColor === 'red' ? 'Change to Blue' : 'Change to Red'}
      </button>
    </div>
  );
}

export default App;
