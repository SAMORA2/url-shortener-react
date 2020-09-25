import React from "react";
import logo from "./logo1.svg";

const header = () => {
  const style = {
    background: "transparent",
    display: "flex",
    paddingLeft: "50px",
    backgroundColor: "#191835",
    height:'50px'
  };
  return (
    <div style={style}>
      <img className='image-logo' width='140px' height='140px' src={logo} alt="url_shortener_LOGO" />
    </div>
  );
};

export default header;
