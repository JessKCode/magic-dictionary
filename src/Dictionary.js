import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary (){
  let [keyword, setKeyword] = useState ("Magic");
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response){
    setResult(response.data[0])
  }

   function search() {
     // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange (event){
    setKeyword(event.target.value); 
  }

  function load(){
    setLoaded(true);
    search();
  }
  if (loaded){
    return (
    <div className="Dictionary">
      <section className="search">
        <form onSubmit={handleSubmit}>
      <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
       </section>
         <Results results={result} />
    </div>      
  );
  }else{
    load();
  }

  function handleSubmit(event){
    event.preventDefault(); 
    search();
   }
  
  
}

