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
         👩🏽‍💻 Coded by {"Sheron Ndimande"} and is open sourced on{" "}
          <a
            href="#"
          >
            Github
          </a> and hosted on 
          <a href="#"> Render</a>
        </small>
      </footer>
    </div>
  );

}