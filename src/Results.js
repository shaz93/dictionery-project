import React from "react";

export default function Results({ results }) {
  if (!results || !results.meanings) return null;

  return (
    <div className="Results">
      <h2>{results.word}</h2>
      <p className="phonetic">{results.phonetic}</p>

      {results.meanings.map((meaning, index) => (
        <section key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          <p className="definition">{meaning.definition}</p>

          {meaning.example && (
            <p className="example">
              <strong>Example:</strong> {meaning.example}
            </p>
          )}

          {meaning.synonyms?.length > 0 && (
            <p>
              <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
            </p>
          )}

          {meaning.antonyms?.length > 0 && (
            <p>
              <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
            </p>
          )}
        </section>
      ))}
    </div>
  );
}