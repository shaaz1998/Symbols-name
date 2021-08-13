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
var weKnowSymbol = Object.keys(symbolDictinory);

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
  function clickHandler(symbol) {
    var meaning = symbolDictinory[symbol];
    setSymbolChange(meaning);
  }
  return (
    <div className="App">
      <h1>Give any Symbol</h1>
      <input onChange={ChangeHandler} />
      <h2>
        {symbolChange}
        <hr />
      </h2>
      <h3>
        We know Emoji
        <hr />
        {weKnowSymbol.map((symbol) => {
          return (
            <span
              onClick={() => clickHandler(symbol)}
              key={symbol}
              style={{
                fontSize: "3rem",
                padding: "1rem ",
                cursor: "pointer"
              }}
            >
              {symbol}
            </span>
          );
        })}
      </h3>
    </div>
  );
}
