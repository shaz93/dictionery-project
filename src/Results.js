import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    console.log("API Response:", props.results);
    console.log("Full results object:", JSON.stringify(props.results, null, 2));
    
    if (!props.results.meanings || props.results.meanings.length === 0) {
      return (
        <div className="Results">
          <h2>{props.results.word}</h2>
          <p>No meanings found</p>
        </div>
      );
    }
    
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetic && (
          <div className="phonetic-section">
            <p>{props.results.phonetic}</p>
          </div>
        )}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}