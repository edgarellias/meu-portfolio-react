import './App.css';

// components
import MyPresentation from './components/MyPresentation';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <MyPresentation />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
