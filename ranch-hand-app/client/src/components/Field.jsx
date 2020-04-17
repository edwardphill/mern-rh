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

class Field extends Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <br />

                <Container fluid="md">


                    <Row className="justify-content-md-center">

                        <Col md="auto">

                            <h2 className="text-center">Upper Clover Field </h2>

                            <br />
                            <br />
                        </Col>

                    </Row>
                </Container>


                <CardDeck>
                    <Card>

                        <Card.Body>

                            <Card.Text>
                                <br />
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Field Details</th>
                                            <th>Inputs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Fencing</td>
                                            <td>6 wired</td>
                                        </tr>
                                        <tr>
                                            <td>Acres</td>
                                            <td>27</td>
                                        </tr>
                                        <tr>
                                            <td>Last Rolled</td>
                                            <td>4/12/20</td>
                                        </tr>
                                        <tr>
                                            <td>Days Grazed</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>Lyme Date</td>
                                            <td>4/9/20</td>
                                        </tr>
                                        <tr>
                                            <td>Fertilized Date</td>
                                            <td>3/29/20</td>
                                        </tr>
                                        <tr>
                                            <td>Hayed ?</td>
                                            <td>yes</td>
                                        </tr>
                                        <tr>
                                            <td>Bales </td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>Herd </td>
                                            <td>herd 2 </td>
                                        </tr>
                                    </tbody>

                                </Table>
                            </Card.Text>
                        </Card.Body>


                    </Card>
                </CardDeck>

                <br />
                <br />
                <br />
                <br />
            </Container>
        );
    }
}
export default Field;