import React, { useState } from "react";
import "./styles.css";
var symbolDictinory = {
  "`": "back tick",
  "~": "tilde",
  "!": "exclamation mark",
  "@": "at the rate",
  "#": "Hash",
  $: "Dollar",
  "%": "Percantage",
  "^": "carat",
  "&": "And-Ampersand",
  "*": "Asterisk",
  "(": "open parenthesis, left parenthesis",
  ")": "close parenthesis, right parenthesis",
  "()": "parentheses, round brackets",
  "-": "hyphen",
  _: "underscore",
  "=": "equal sign",
  "+": "plus sign",
  "[": "open bracket",
  "]": "close bracket",
  "{": "open brace",
  "}": "Close brace",
  // \ :"backslash-backward-slash",
  "|": "vertical pipe",
  ";": "semicolon",
  ":": "colon",
  "'": "apostrophe-prime-single quote"
  // " :quotation mark, double quotes",
  // ",": "comma",
  // ".": "dot",
  // "/":"forward slash",
  // "<>": "angle brackets",
  // "<": "less than",
  // ">": "greater than",
  // "?":"question mark",
};

export default function App() {
  var [symbolChange, setSymbolChange] = useState("");

  function ChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = symbolDictinory[userInput];
    if (meaning === undefined) {
      meaning = "we did not find";
    }
    setSymbolChange(meaning);
  }
  return (
    <div className="App">
      <h1>Give any Symbol</h1>
      <input onChange={ChangeHandler} />
      <h2>
        input Symbol name <hr />
        {symbolChange}
      </h2>
    </div>
  );
}
