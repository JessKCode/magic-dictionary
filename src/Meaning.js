import React from "react";
import "./Results.css";
import Synonyms from "./Synonyms.js";
import "./Meanings.css";
export default function Meaning(props){
  return(
  <div className="Meanings">
   <h4>{props.meaning.partOfSpeech}</h4>
   {props.meaning.definitions.map(function(definitions, index) 
   {
       return (
         <div key={index}>
             <div className="definition"> 
             {definitions.definition}
             </div>
             <div className="example"> {definitions.example}</div>
             <Synonyms synonyms={definitions.synonyms} />
             <br />
        </div> 
  );
  })}
  </div>
  );
}