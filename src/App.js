import { useEffect, useRef, useState } from 'react';
import click2 from './click2.mp3';

function App() {
  const [playSound, setPlaySound] = useState(false);
  const [bpm, setBpm] = useState(120);
  const audio = new Audio(click2);
  let tempo = 60000 / bpm;
  const intervalId = useRef();

  const handleTempoChange = (event) => {
    setBpm(+event.target.value);
  };

  const SwitchOnOrOff = () => {
    setPlaySound(!playSound);
  };

  useEffect(() => {
    if (!playSound) {
      clearInterval(intervalId.current);
    } else {
      intervalId.current = setInterval(() => {
        audio.play();
      }, tempo);
      audio.play();
    }
  }, [playSound]);

  return (
    <>
      <header>
        <h1>myMetronome</h1>
      </header>
      <main>
        <h2>tempo (BPM)</h2>
        <input
          style={{ width: '48px' }}
          type="number"
          step="1"
          min="30"
          max="250"
          value={bpm}
          onChange={handleTempoChange}
          required
        />
        <button onClick={SwitchOnOrOff}>{!playSound ? 'Play' : 'Stop'}</button>
      </main>
      <footer>
        <p>Wojciech Bylica Arts ®</p>
      </footer>
    </>
  );
}

export default App;
