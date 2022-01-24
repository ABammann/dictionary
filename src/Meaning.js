import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definiton, index) {
        return (
          <div key={index}>
            <p>
              {definiton.definiton}
              <em>{definiton.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
