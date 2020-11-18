import './App.css';
import { lifts } from './lifts.js';
import bent from './pics/bentrow.jpg';

//update the <p> with id='add' to display the name and image of a random exercise from the clicked button value(object.type)
function addLift(type){
    const rando = Math.floor(Math.random() * 5)    
    const result = lifts.filter(lift => lift.type === type)
    console.log(result[rando].src) 
    document.getElementById('add').src = result[rando].src
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1 id='quote'> </h1>
                 
        <div className = 'container'>
          <button className='button' value ="push" onClick={e => addLift(e.target.value)}>Add push exercise</button>
          <button className='button' value="pull" onClick={e => addLift(e.target.value)}>Add pull exercise</button>
          <button className='button' value="anterior" onClick={e => addLift(e.target.value)}>Add anterior lower body exercise</button>
          <button className='button' value="posterior" onClick={e => addLift(e.target.value)}>Add posterior lower body exercise</button>
        </div>

        <img id='add' src={bent} className="App-logo" alt="logo" />
        
       
      
      </header>
    </div>
  );
}

export default App;
