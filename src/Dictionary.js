import { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

const API_KEY = "643960765dfbctb234c6b4f7o500facf";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword || "sunset");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function searchWord(word) {
    const cleanWord = word.trim();

    if (!cleanWord) return;

    const dictionaryUrl =
      `https://api.shecodes.io/dictionary/v1/define` +
      `?word=${encodeURIComponent(cleanWord)}&key=${API_KEY}`;

    const photosUrl =
      `https://api.shecodes.io/images/v1/search` +
      `?query=${encodeURIComponent(cleanWord)}&key=${API_KEY}`;

    axios
      .get(dictionaryUrl)
      .then((response) => setResults(response.data))
      .catch((error) => {
        console.error("Dictionary request failed:", error);
        setResults(null);
      });

    axios
      .get(photosUrl)
      .then((response) => {
        console.log("Complete photo response:", response.data);

        const imageList =
          response.data.photos ||
          response.data.images ||
          response.data.results ||
          [];

        setPhotos(Array.isArray(imageList) ? imageList : []);
      })
      .catch((error) => {
        console.error(
          "Photos request failed:",
          error.response?.status,
          error.response?.data || error.message
        );
        setPhotos([]);
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

        <div className="hint">i.g: sunset, box, memory, forest...</div>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}