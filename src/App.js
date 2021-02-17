import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import transform from "./transformation";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [originalText, setOriginalText] = useState("");
  const [outputText, setOutputText] = useState("");

  function processText() {
    const transformText = transform(originalText)
    setOutputText(transformText);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://logodix.com/logo/2134241.png" alt="logo" />
        <form>
          <TextField
            label="Pega aquí"
            multiline
            rows={10}
            color="primary"
            variant="outlined"
            value={originalText}
            onChange={event => setOriginalText(event.target.value)}
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          onClick={event => processText()}
        >
          Click
        </Button>

        <form>
          <TextField
            label="Pega aquí"
            multiline
            rows={10}
            color="primary"
            variant="outlined"
            value={outputText}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
