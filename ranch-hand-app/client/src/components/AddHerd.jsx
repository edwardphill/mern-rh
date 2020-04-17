import React, { Component } from "react";
// import ReactTable from "react-table-6";
import api from "../api";
// import ranches from "./ranches.json";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardDeck from 'react-bootstrap/CardDeck'
// import ListGroup from 'react-bootstrap/ListGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';
// import Ranches_model from "../";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class AddHerd extends Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <br />
                <Col md="auto">

                    <h2 className="text-center">Add A Herd </h2>

                    <br />
                    <br />
                </Col>

                <Container fluid="md">



                    <Row className="justify-content-md-center">

                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Herd Name</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Herd Total</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Females</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Males</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Button variant="success" size="lg">
                                <Link to="/FieldDash" className="text-white" >Add This Herd </Link>
                            </Button>
                        </Form>


                    </Row>

                </Container>




                <br />
                <br />
                <br />
                <br />
            </Container >
        );
    }
}
export default AddHerd;