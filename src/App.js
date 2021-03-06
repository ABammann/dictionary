import "./App.css";
import Dictionary from "./Dictionary";

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
            at{" "}
            <a href="https://stupefied-lamarr-924c26.netlify.app/">Netlify.</a>{" "}
            <br />
            API kindly offered by{" "}
            <a href="https://github.com/meetDeveloper/freeDictionaryAPI">
              meetDeveloper
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
