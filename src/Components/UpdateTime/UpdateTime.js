import { useState } from 'react';
import Button from '../Button/Button';



const UpdateTime = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null)

  const start = () => {
    clearInterval(timer);
    setTimer(setInterval(() => setTime(oldTime => oldTime + 1), 100));
  };

  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    clearInterval(timer);
    setTime(0);
  };

  const formatTime = (ms) => {
    let seconds = Math.floor(ms / 10);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    ms = ms % 10;
    seconds = seconds % 60;
    minutes = minutes % 60;
  
    return `${(hours < 10 ? "0" : "")}${hours}:${(minutes < 10 ? "0" : "")}${minutes}:${(seconds < 10 ? "0" : "")}${seconds}.${ms}`;
  }  

  return (
    <div>
      <h1>{ formatTime(time) }</h1>
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </div>
  );
};


export default UpdateTime;