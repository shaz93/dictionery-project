import { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword || "sunset");
  const [results, setResults] = useState(null);

  function searchWord(word) {
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=643960765dfbctb234c6b4f7o500facf`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setResults(response.data);
      })
      .catch((error) => {
        console.error("Word not found:", error);
        setResults(null);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord(keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    searchWord(keyword);
  }, []);

  return (
    <div className="Dictionary">
      <section>
        <h1>Search for a word</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="search"
            value={keyword}
            onChange={handleKeywordChange}
          />
          <button type="submit">Search</button>
        </form>

        <div className="hint">
          e.g: sunset, box, memory, forest...
        </div>
      </section>

      <Results results={results} />
    </div>
  );
}