import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styles from "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";


import Button from "react-bootstrap/Button";
// import styled from "styled-components";

class Login extends Component {
    render() {
        return (
            <Container fluid>
                <br />
                <br />

                <br />
                <br />

                <Row className="justify-content-md-center">

                    <Col md="auto">
                        <Card>
                            <Card.Header>Login to Ranch Hand</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        <Link to="/ranches" className="text-light">
                                            Submit
                                      </Link>
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default Login;


