import React from "react";
import SimpleIcons from "simple-icons";
import './App.css';

function App() {
  const baseURL = "https://img.shields.io/badge/";
  const [iconName, setIconName] = React.useState("");
  const [label, setLabel] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [preview, setPreview] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");  

  const handleSubmit = (event) => {
    console.log(`
      Icon Name: ${iconName}
      Label: ${label}
      Message: ${message}
    `);
    event.preventDefault();

    const icon = SimpleIcons.get(`${iconName}`);

    // process icon
    if (icon !== undefined) {
      var logoName = icon.title.split(" ").join("-");
      var result = baseURL + `${label}-${message}-information?style=flat&logo=${logoName}&logoColor=white&color=${icon.hex}`;
    } else {
      var result = undefined;
      setErrorMessage("Invalid Input. Check for correct syntax or if the icon exist in Simple Icon");
    }

    setPreview(result);
  }
  
  return (
    <div className="App">
      <header className="App-header">
      {/* TITLE SECTION */}
      <p>
        Github Badge Generator with 
        <a href="https://shields.io/" style={{textDecoration: "none"}}> Shield.io </a>
        and
        <a href="https://simpleicons.org/" style={{textDecoration: "none"}}> Simple Icon </a>
      </p>

      {/* FORM SECTION */}
      <form onSubmit={handleSubmit}>
        <label>
          Icon Name:
          <input
            name="iconName"
            type="text"
            placeholder = "i.e. visual studio code"
            value={iconName}
            onChange={e => setIconName(e.target.value)}
            required
            style={{width: "50%"}}/>
        </label>
        <br></br>
        <label>
          Label: 
          <input
            name="label"
            type="text"
            placeholder = "i.e. Editor"
            value={label}
            onChange={e => setLabel(e.target.value)}
            required 
            style={{width: "71%"}} />
        </label>
        <br></br>
        <label>
          Message:   
          <input
            name="message"
            type="text"
            placeholder = "i.e. VSCode"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            style={{width: "58%"}} />
        </label>
        <br></br>
        <button>Generate</button>
      </form>

      {/* PREVIEW SECTION */}
      <p>{preview}{errorMessage}</p>
      <a href= {preview}><img src={preview} alt="preview github badge"></img></a>
      </header>
    </div>
  );
}

export default App;
