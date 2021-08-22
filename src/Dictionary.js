import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos  from "./Photos.js";

export default function Dictionary (props){
  let [keyword, setKeyword] = useState (props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function  handleDictionResponse(response){
    setResult(response.data[0])
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  
   function search() {
     // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);
    
    let pexelsApiKey= "563492ad6f917000010000013a086ed71e2646138002d7c9c0c64b45";
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
  
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
         <Photos photos={photos} />
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

