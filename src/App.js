import './App.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Dictionary </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="Cat"/>
      </main>
      <footer className="App-footer">
        This project was coded by Jessica K Carter and is open-sourced on {""}
         <a href="https://github.com/JessKCode/weather-watcher-"
      target="_blank"
      rel="noreferrer">GitHub </a>
       and hosted on <a href="https://www.netlify.com/?utm_source=google&utm_medium=paid_search&utm_campaign=12755510784&adgroup=118788138897&utm_term=netlify&utm_content=aud-1224736163202:kwd-371509120223&creative=514583565825&device=c&matchtype=e&location=9033614&gclid=CjwKCAjw64eJBhAGEiwABr9o2E8Trsu9GKJ0iu4PKzjwiSOE8FKgPZ-9smPAE4TOiW35_NNT5eAwVxoCTlAQAvD_BwE" target="_blank"
      rel="noreferrer">Netlify </a> 
      </footer>
    </div>
  );
}

export default App;
