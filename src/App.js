import './App.css';

// components
import MyPresentation from './components/MyPresentation';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
function App() {
  
  return (
    <div className="App">
      <NavBar />
      <MyPresentation />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
