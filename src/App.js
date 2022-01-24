import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Alessandra Bammann. Source at{" "}
            <a href="https://github.com/ABammann/dictionary">GitHub</a>, hosted
            at Netifly.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
