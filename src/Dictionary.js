import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary (){
  let [keyword, setKeyword] = useState ("");
  let [result, setResult] = useState(null);

  function handleKeywordChange (event){
    setKeyword(event.target.value);
    
  }

  function handleResponse(response){
    setResult(response.data[0])

  }

  function search(event){
    event.preventDefault(); 
    
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
      <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form> 
      <Results results={result} />
    </div>
  )
}

