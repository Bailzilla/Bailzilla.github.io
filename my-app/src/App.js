import './App.css';
import { lifts } from './lifts.js';
import React, {useState} from 'react'

function App() {
  const rando = Math.floor(Math.random() * 5)  
  let count = 9
  const [resPic, setResPic] = 
  useState('https://images.unsplash.com/photo-1579364046732-c21c2177730d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
  const [resName, setResName] = useState('')
  let routine = [{type: 'push', name: 'test', src:'test'}]

  function addLift(value){
    const result = lifts.filter(lift => lift.type === value)
    setResPic(result[rando].src)
    setResName(result[rando].name)
    routine.push({type: value, name: result[rando].name, src: result[rando].src}) 
    console.log(routine[1].type)
    count++
    console.log(count)
    
   }
  return (
    <div>
      <h2 id='quote'> </h2>
      <div>        
        <button className='button' value='push' onClick= {(e) => addLift(e.target.value)}>Select a push exercise</button>
        <button className='button' value="pull" onClick={(e) => addLift(e.target.value)}>Select a pull exercise</button>
        <button className='button' value="anterior" onClick={(e) => addLift(e.target.value)}>Select a anterior lower body exercise</button>
        <button className='button' value="posterior" onClick={(e) => addLift(e.target.value)}>Select a posterior lower body exercise</button>
        <h6>please choose no more than 1 of the same exercise in a row</h6>
      </div>
      
     
      
      <img src={resPic} alt="example of chosen exercise"/>
      <h3>{resName}</h3>
    </div>
  )
}

export default App;
