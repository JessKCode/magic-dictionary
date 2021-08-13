import React from "react";
import Meaning from "./Meaning.js";

export default function Results (props) {
  if (props.results){
    return <div className="results" >
      <h2 className="word">{props.results.word}</h2>
      <h3 className="phonetic">{props.results.phonetic}</h3>
     {props.results.meanings.map(function(meaning, index) {
       return (
         <div key={index}>
           <Meaning meaning={meaning} />
         </div>
       );
       })}
      </div>
  } else {
    return null;
  }
 
}