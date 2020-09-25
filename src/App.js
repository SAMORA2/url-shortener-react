import React, { useState, useRef } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import TinyUrl from "tinyurl";

import Copy from "./copy.svg";
import "./App.css";

const App = () => {
  const inputRef = useRef();
  const [userInput, setInput] = useState("");
  const [shortUrl, setUrl] = useState("");
  const [showResults, setShowResults] = useState(false);

  const userInputHandler = (event) => {
    setInput(event.target.value);
  };

  const shortenInputLink = () => {
    console.log("this is in shortenInputLink");
    TinyUrl.shorten(userInput, function (res, err) {
      if (res) {
        setUrl(res);
        if (res === "Error") {
          setShowResults(false);
        } else {
          setShowResults(true);
        }
      }
    });
  };
  const clickCopyBtn = () => {
    myFunction();
    if (shortUrl !== "Error") {
      const copyText = inputRef.current.value;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(copyText).then(
          () => {
            console.log("copy success");
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        inputRef.current.select();
        console.log(document.execCommand("copy"));
        document.execCommand("copy");
      }
    } else {
      alert("this is error");
    }
  };

  const CopyBtn = () => {
    
    if (showResults === true) {
      return (
        <div>
          <button
            value={shortUrl}
            ref={inputRef}
            onClick={clickCopyBtn}
            id="copyBtnStyle"
            className="copy-btn"
          >
            <img src={Copy} alt="" />
          </button>
        </div>
      );
    } else {
      return null;
    }
  };
  const myFunction = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";

    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  const style = {
    backgroundColor: "#191835",
    overflow: "hidden",
    height: "100%",
    color: "rgba(255, 255, 255, 0.7)",
  };

  return (
    <div className="App">
      <Header />
      <div style={style}>
        <p className="url-text">URL Shortener</p>
        <div className="inputDiv">
          <input
            placeholder="Paste your long url"
            className="userInput"
            type="text"
            onChange={userInputHandler}
            value={userInput}
          />
          <button
            // onClick={userInputHandler}
            onClick={shortenInputLink}
            className="btn-search"
          >
            Shorten
          </button>
        </div>
        <div className="url-msg-div">
          <div>
            <a href={shortUrl}>
              <h1>{shortUrl}</h1>
            </a>
          </div>

          <CopyBtn />
        </div>
        <div id="snackbar">Copied! </div>
        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
