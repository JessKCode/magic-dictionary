import React from "react";
import "./Results.css";

export default function Meaning(props){
  console.log(props.meaning);
  return(
  <div className="Meanings">
   <h4>{props.meaning.partOfSpeech}</h4>
   {props.meaning.definitions.map(function(definitions, index) {
       return (
         <div key={index}>
           <span>
             <p className="definition">{definitions.definition}</p>
             <br />
             <em className="example">"{definitions.example}."</em>
          </span>
        </div> 
  );
  })}
  </div>
  );
}