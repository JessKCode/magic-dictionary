import './App.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Dictionary </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="Cat"/>
      </main>
      <footer className="App-footer">
        Coded by Jessica Carter
      </footer>
    </div>
  );
}

export default App;
