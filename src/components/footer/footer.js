import React from "react";
import instaLogo from "./insta.svg";
import githubLogo from "./github.svg";
import email from "./email 1.svg";

const footer = () => {
  const style = {
    background: "#ff9e00",
    height: "80px",
    display: "flex",
    paddingTop: "20p",
  };
  return (
    <div style={style}>
      <div className="copyRight">
        {" "}
        <span role="img" aria-label="copyright">
          ©️
        </span>
        2020-SAMO
      </div>
      <div className="my-logo">
        <div className="image-div">
          <a href="https://www.instagram.com/saeedmoradi.official/?hl=en">
            <img width="50px" height="50px" src={instaLogo} alt="" />
          </a>
          <a href="https://github.com/SAMORA2">
            <img width="50px" height="50px" src={githubLogo} alt="" />
          </a>

          <a href="mailto:saeedmoradi.official@gmail.com">
            <img width="50px" height="50px" src={email} alt="" />
          </a>
        </div>
        <div className="textDiv">
          <h2>
            Made with{" "}
            <span role="img" aria-label="heart">
              🖤
            </span>{" "}
            by Saeed Moradi
          </h2>
        </div>
      </div>
    </div>
  );
};

export default footer;
