import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

// import Logo from "./Logo";
// import Links from "./Links";

// const Container = styled.div.attrs({
//   className: "container",
// })``;

// const Nav = styled.nav.attrs({
//   className: "navbar navbar-expand-lg navbar-dark bg-success",
// })`
//   margin-bottom: 20 px;
// `;

class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <br />
        <Navbar fixed="top" bg="success" variant="white" className=" rounded-bottom">
          <Navbar.Brand href="/" className="text-white">RH</Navbar.Brand>
          <Nav className="mr-auto">

          </Nav>
          <Form inline>
            <Nav.Link href="/login" className="text-white">Login</Nav.Link>
            <Nav.Link href="/ranches" className="text-white">Home</Nav.Link>

          </Form>
        </Navbar>
        <br />

      </Container>
    );
  }
}

export default NavigationBar;
