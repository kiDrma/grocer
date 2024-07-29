import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react'
import {useState} from 'react'



export default function App() {
  const [list, updateList] = useState([]);
  const [newFood, setNewFood] = useState('');

  function buttonHandler(){
    if(newFood != ''){
      updateList([...list, newFood]);
    }
    setNewFood('');
  }

  return (
    <div className="App">
      <h1 className="title">Title</h1> 

      <input 
      type="text" value={newFood}
      onChange={(change) => setNewFood(change.target.value)}
      className="foodInput">
      </input> 

      <button onClick={buttonHandler}>Enter</button>

      <div>
        <ul className="groceryList">
        {list.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
