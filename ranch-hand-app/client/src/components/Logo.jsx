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
        <img
          src="https://user-images.githubusercontent.com/30938466/79150346-99f8b080-7d96-11ea-8376-84f19e7e2c2d.png"
          width="50"
          height="50"
          alt="sambarros.com"
        />
      </Wrapper>
    );
  }
}

export default Logo;
