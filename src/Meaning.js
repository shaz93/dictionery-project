import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (!props.meaning) {
    return null;
  }

  const { partOfSpeech, definition, example, synonyms, antonyms } = props.meaning;

  return (
    <div className="Meaning">
      <h3>{partOfSpeech}</h3>
      <p className="definition">
        <strong>Definition:</strong> {definition}
      </p>
      {example && (
        <p className="example">
          <strong>Example:</strong> <em>"{example}"</em>
        </p>
      )}
      {synonyms && synonyms.length > 0 && (
        <div>
          <strong>Synonyms:</strong>
          <Synonyms synonyms={synonyms} />
        </div>
      )}
      {antonyms && antonyms.length > 0 && (
        <div>
          <strong>Antonyms:</strong>
          <Synonyms synonyms={antonyms} />
        </div>
      )}
    </div>
  );
}