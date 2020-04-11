import React, { Component } from "react";
import styled from "styled-components";

// import logo from "../logo.svg";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

class Logo extends Component {
  render() {
    return (
      <Wrapper href="/">
        <p>Ranch Hand</p>
      </Wrapper>
    );
  }
}

export default Logo;
