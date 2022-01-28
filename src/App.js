import { useEffect, useRef, useState } from 'react';
import click2 from './click2.mp3';

function App() {
  const [playSound, setPlaySound] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [audio] = useState(new Audio(click2));
  let tempo = 60000 / bpm;
  const intervalId = useRef();

  const SwitchOnOrOff = () => {
    setPlaySound(!playSound);
  };

  useEffect(() => {
    if (!playSound) {
      clearInterval(intervalId.current);
      audio.pause();
    } else {
      intervalId.current = setInterval(() => {
        audio.play();
      }, tempo);
      audio.play();
    }
  }, [playSound]);

  return (
    <div>
      <header>
        <h1>myMetronome</h1>
      </header>
      <main>
        <h2>tempo (BPM)</h2>
        <label>
          <input
            type="number"
            step="1"
            min="30"
            max="250"
            value={bpm}
            onChange={(event) => {
              setBpm(+event.target.value);
            }}
            required
          />
        </label>
        <button onClick={SwitchOnOrOff}>
          <span>{!playSound ? 'Play' : 'Stop'}</span>
        </button>
      </main>
      <footer>
        <p>Designed by Wojciech Bylica Arts</p>
      </footer>
    </div>
  );
}

export default App;
