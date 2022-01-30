import { useEffect, useState } from 'react';
import clickSample from './clicks/click1000ms.mp3';

function App() {
  const [playSound, setPlaySound] = useState(false);
  const [bpmInput, setBpmInput] = useState(120);
  const [bpm, setBpm] = useState(bpmInput);
  const [tempo, setTempo] = useState(0.54);

  const audio = new Audio(clickSample);

  audio.addEventListener('loadedmetadata', () => {
    setTempo(audio.duration - 60000 / bpm / 1000 + (audio.duration - 1));
  });

  const handleTempoChange = (event) => {
    setBpmInput(+event.target.value);
    if (event.target.value >= 40) {
      return setBpm(+event.target.value);
    }
  };

  const SwitchOnOrOff = (event) => {
    event.preventDefault();
    setPlaySound(!playSound);
  };

  const repeatSound = () => {
    audio.currentTime = tempo;
    // console.log('w funkcji', audio.currentTime);
    audio.play();
  };

  useEffect(() => {
    audio.currentTime = 0.9;
    playSound ? audio.play() : audio.pause();

    audio.addEventListener('ended', repeatSound);
    return () => audio.removeEventListener('ended', repeatSound);
  }, [playSound]);

  return (
    <>
      <header>
        <h1>myMetronome</h1>
      </header>
      <main>
        <form onSubmit={SwitchOnOrOff}>
          <label>
            <input
              style={{ width: '48px' }}
              type="number"
              step="1"
              min="40"
              max="250"
              value={bpmInput}
              onChange={handleTempoChange}
              required
            />
          </label>
          <button>{!playSound ? 'Play' : 'Stop'}</button>
        </form>
      </main>
      <footer>
        <p>Wojciech Bylica Arts ®</p>
      </footer>
    </>
  );
}

export default App;
