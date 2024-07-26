import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react'



export default function App() {
  const curLetter = useRef([]);
  const inputs = [0, 1, 2, 3, 4];

  const handler = (e, index) => {
    if (e.target.value.length >= 1 && index < curLetter.current.length - 1){
      curLetter.current[index + 1].focus();
    }
  }

  const handlerBackspace = (e, index) => {
    if(e.key === 'Backspace' && index > 0 && e.target.value.length === 0){
      curLetter.current[index - 1].focus();
    }
  }

  return (
    <div className="App">
      <h1 className="title">Title</h1> 
      {inputs.map((_, index) => (
          <input
            key={index}
            className="letterInput"
            ref={el => curLetter.current[index] = el}
            maxLength={1}
            onChange={(e) => handler(e, index)}
            onKeyDown={(e) => handlerBackspace(e, index)}
          />
        ))}
      <br/>
      <button className="inputButton"> hello</button>
    </div>
  );
}
