import { useEffect, useState } from 'react';
import { clickSamples } from './clicks/click-samples';

function App() {
  const [playSound, setPlaySound] = useState(false);
  const [bpm, setBpm] = useState(200);
  // console.log(clickSamples);

  const audioFile = clickSamples.find((click) => click.bpm === bpm);
  // console.log(audioFile?.file);
  const audio = new Audio(`./clicks/${audioFile?.file}`);

  // console.log(audio);
  const handleTempoChange = (event) => {
    setBpm(+event.target.value);
  };

  const SwitchOnOrOff = () => {
    setPlaySound(!playSound);
  };

  useEffect(() => {
    if (!playSound) {
    } else {
      if (bpm === 100 || bpm === 174 || bpm === 200) {
        audio.play();
        audio.loop = true;
      } else {
        console.log('bam');
      }
    }
  }, [playSound]);

  return (
    <>
      <header>
        <h1>myMetronome</h1>
      </header>
      <main>
        <h2>działające tempa testowe 100,174,200 bpm</h2>
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
        <button onClick={SwitchOnOrOff} disabled={playSound}>
          Play
        </button>
        <button onClick={() => window.location.reload()} disabled={!playSound}>
          stop
        </button>
      </main>
      <footer>
        <p>Wojciech Bylica Arts ®</p>
      </footer>
    </>
  );
}

export default App;
