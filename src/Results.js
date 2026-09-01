import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    console.log("API Response:", props.results);
    
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