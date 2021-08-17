import React from "react";
import "./Results.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props){
  console.log(props.meaning);
  return(
  <div className="Meanings">
   <h4>{props.meaning.partOfSpeech}</h4>
   <br />
   {props.meaning.definitions.map(function(definitions, index) {
       return (
         <div key={index}>
           <span>
             <p className="definition"> <strong>Definition:</strong> {definitions.definition}</p>
             <p className="example"> <strong>Exsample: </strong>"{definitions.example}."</p>
             <Synonyms synonyms={definitions.synonyms} />
             <br />
             </span>
        </div> 
  );
  })}
  </div>
  );
}