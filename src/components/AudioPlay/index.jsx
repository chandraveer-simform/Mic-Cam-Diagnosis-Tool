import React, { useState, useEffect } from "react";

const useAudio =( url ) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle]; 
};

const AudioPlay = props => {

  const [playing, toggle] = useAudio(props.url);
 
  return (
    <div>
      <button onClick={toggle}>{playing ? <i className="fas fa-grip-lines-vertical">Play</i> : <i className="fas fa-play">Stop</i>}</button>
    </div>
  );
};

export default AudioPlay;