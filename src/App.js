import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center mt-5 mb-3">
        <small>
          Coded by {"Sheron Ndimande"} and is{" "}
          <a
            href="https://github.com/SheronNdimande/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source
          </a>
        </small>
      </footer>
    </div>
  );

}