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

class Herd extends Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <br />

                <Container fluid="md">


                    <Row className="justify-content-md-center">

                        <Col md="auto">

                            <h2 className="text-center">Calves and Mothers🐃 </h2>

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
                                            <th>Herd Details</th>
                                            <th>Inputs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Total Cattle</td>
                                            <td>124</td>
                                        </tr>
                                        <tr>
                                            <td>Female</td>
                                            <td>94</td>
                                        </tr>
                                        <tr>
                                            <td>Male</td>
                                            <td>30</td>
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
export default Herd;