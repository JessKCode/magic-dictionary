import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
  <div className="Phonetic">
    <a href={props.phonetics.audio} rel="noreferrer" target="_blank">
     Listen 
    </a>
    <span className="text">
      {props.phonetics.text}
      </span>
    

  </div>
  )
}