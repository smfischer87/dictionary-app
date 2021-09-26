import './App.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Dictionary App
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">Coded by Susan Fischer and <a href="https://github.com/smfischer87/dictionary-app" target="_blank" rel="noreferrer">open-sourced</a> on Github.</footer>
      </div>
    </div>
  );
}

export default App;
