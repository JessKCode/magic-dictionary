import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary (props){
  let [keyword, setKeyword] = useState (props.defaultKeyword);
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
        <h3 className="lable">Search</h3>
        <form onSubmit={handleSubmit}>
      <input type="search" autoFocus={true} onChange={handleKeywordChange}
      defaultValue={props.defaultKeyword} />
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

