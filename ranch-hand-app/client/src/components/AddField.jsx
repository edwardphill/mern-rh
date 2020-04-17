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


class AddField extends Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <br />

                <Container fluid="md">
                    <Col md="auto">

                        <h2 className="text-center">Add A Field </h2>

                        <br />
                        <br />
                    </Col>


                    <Row className="justify-content-md-center">

                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Field Name</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Acres</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Last Rolled</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Days Grazed</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Last Lyme</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Last Fertilized</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Hayed</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Bales</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Hayed</Form.Label>
                                <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                            <Button variant="success" size="lg">
                                <Link to="/FieldDash" className="text-white" >Add ThisField </Link>
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
export default AddField;