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

class Footer extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="light" bg="success" fixed="bottom">
                <Container>
                    <Navbar className="text-center">Ranch Hand</Navbar>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;
