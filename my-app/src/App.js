import logo from './gym.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1 id='quote'>yo</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
 
        <div className = 'container'>
          <button className='button' onClick={alert('hi')} >push</button>
          <button className='button' >Add pull exercise</button>
          <button className='button' >Add anterior lower body exercise</button>
          <button className='button' >Add posterior lower body exercise</button>
        </div>

        <p id="work">For today: </p>
      
      </header>
    </div>
  );
}

export default App;
