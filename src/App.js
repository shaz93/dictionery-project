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
      <footer className="text-center mt-5 mb-10">
        <small>
         👩🏽‍💻 Coded by {"Sheron Ndimande"}. Open sourced on{" "}
          <a
            href="https://github.com/shaz93/dictionery-project"
          >
            Github
          </a> and hosted on 
          <a href="https://dictionery-project.onrender.com"> Render</a>
        </small>
      </footer>
    </div>
  );

}