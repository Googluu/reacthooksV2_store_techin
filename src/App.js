// import {useState} from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Characters from './components/Characters';



function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark"
  return (
    <>
    <div className="App">
      <h1>Hola mundo</h1>
      <Header 
      // darkMode={darkMode}
      // onClick={() => setDarkMode(!darkMode)} 
      />
      <Characters />
    </div>
    </>
  );
}

export default App;
