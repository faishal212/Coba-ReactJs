
import './App.css';
import './style.css'
import NavigationBar from './components/NavigationBar';
import Slideshow from './components/slideshow'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div>
        <Slideshow/>
      </div>
    </div>
  );
}

export default App;
