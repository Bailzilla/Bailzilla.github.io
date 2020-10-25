import logo from './gym.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1 id='quote'>yo</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
 
        <div class = 'container'>
          <button class='button' id ="push">Add push exercise</button>
          <button class='button' id="pull">Add pull exercise</button>
          <button class='button' id="anterior">Add anterior lower body exercise</button>
          <button class='button' id="posterior">Add posterior lower body exercise</button>
        </div>

        <p id="work">For today: </p>
      
      </header>
    </div>
  );
}

export default App;
