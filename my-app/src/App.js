import logo from './pics/gym.jpg';
import './App.css';
import { lifts } from './lifts.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1 id='quote'>yo</h1>
        <img src={logo} className="App-logo" alt="logo" />
         
        <div className = 'container'>
          <button className='button' >Add push exercise</button>
          <button className='button' >Add pull exercise</button>
          <button className='button' >Add anterior lower body exercise</button>
          <button className='button' >Add posterior lower body exercise</button>
        </div>

        <p>For today: {lifts[4].name} </p>
       
      
      </header>
    </div>
  );
}

export default App;
