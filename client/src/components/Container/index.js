import React from "react";

const Container = props => {
  return <div className = {`container${props.fluid ? "-fluid" : ""}`} style = {{ marginTop: "20px" }}>
  {props.children}</div>;
}

export default Container;